import json, requests, io, os, sys
import pandas as pd
from tqdm import tqdm

OUT_FILE = os.path.join("app", "data.json")
YEARS    = range(1925, 2026)      # inclusive 1925‑2025

# ---------- helper functions  ----------
def warn(msg: str):
    print(f"⚠️  {msg}", file=sys.stderr)

def safe_fetch(fn, name):
    """
    Run fn() and return its result.
    If it raises, log a warning and return an empty dict instead.
    """
    try:
        return fn()
    except Exception as e:
        warn(f"{name} fetch failed → {e}")
        return {}

def forward_fill(series_dict, years):
    out, last = {}, None
    for y in years:
        last = series_dict.get(y, last)
        out[y] = last
    return out

# ---------- 1. air quality  ----------
def fetch_pm25():
    url = ("https://api.worldbank.org/v2/country/WLD/indicator/"
           "EN.ATM.PM25.MC.M3?format=json&per_page=1000")
    resp = requests.get(url, timeout=30)
    resp.raise_for_status()                     # raise if HTTP 4xx/5xx
    meta, rows = resp.json()
    return {int(r["date"]): float(r["value"]) if r["value"] else None for r in rows}

# ---------- 2.  Plastics production (OWID) ----------
def fetch_plastics():
    url = ("https://raw.githubusercontent.com/owid/"
           "owid-datasets/master/datasets/Global%20plastics%20production"
           "%20-%20Our%20World%20in%20Data/plastics-production.csv")
    resp = requests.get(url, timeout=30)
    resp.raise_for_status()
    df  = pd.read_csv(io.StringIO(resp.text))
    prod = dict(zip(df["Year"].astype(int), df["Plastics production"].astype(float)))

    # cumulative proxy (optional)
    cumulative, running = {}, 0.0
    for y in sorted(prod):
        running += prod[y]
        cumulative[y] = running
    return cumulative

# ---------- 3.  Food‑waste & BOD from local CSVs ----------
def load_local_csv(path, year_col, value_col):
    if not os.path.exists(path):
        raise FileNotFoundError(f"Missing local file: {path}")
    df = pd.read_csv(path)
    return dict(zip(df[year_col].astype(int), df[value_col].astype(float)))

def fetch_waste():
    return load_local_csv("scripts/raw/FAO_Waste.csv", "Year", "Waste_pct")

def fetch_bod():
    return load_local_csv("scripts/raw/USGS_BOD.csv", "Year", "BOD_mgL")

# ---------- 4.  Merge ----------
def build_rows():
    tasks = [
        ("PM2.5",     fetch_pm25),
        ("Plastics",  fetch_plastics),
        ("FoodWaste", fetch_waste),
        ("BOD",       fetch_bod),
    ]

    results = {}
    for name, fn in tqdm(tasks, desc="Fetching datasets"):
        results[name] = safe_fetch(fn, name)

    pm25     = forward_fill(results["PM2.5"],     YEARS)
    plastics = forward_fill(results["Plastics"],  YEARS)
    waste    = forward_fill(results["FoodWaste"], YEARS)
    bod      = forward_fill(results["BOD"],       YEARS)

    return [{
        "year":     y,
        "pm25":     pm25[y],
        "waste":    waste[y],
        "bod":      bod[y],
        "plastics": plastics[y],
    } for y in YEARS]

# ---------- 5.  Write file ----------
def main():
    try:
        rows = build_rows()
        os.makedirs("app", exist_ok=True)
        with open(OUT_FILE, "w") as f:
            json.dump(rows, f, indent=2)
        print(f"✅  Wrote {len(rows)} rows → {OUT_FILE}")
    except Exception as e:
        # Catch any unexpected error so your build doesn’t silently fail
        warn(f"Fatal error during data build → {e}")
        sys.exit(1)   # non‑zero exit so CI / npm script knows something went wrong

if __name__ == "__main__":
    main()
#Run this python script in the config to ensure the data.json gets updated at the start of gameplay.