import csv
import json
import os
import sys
from typing import List, Dict

# ---------- Config ----------
SELECTED_COUNTRY_FILE = "selected_country.txt"
FOOD_CSV = "faoData.csv"
AIR_CSV = "airquality.csv"
OUT_FILE = os.path.join("app", "data.json")

# ---------- Utilities ----------
def warn(msg: str):
    print(f"⚠️  {msg}", file=sys.stderr)

def read_selected_country() -> str:
    if not os.path.exists(SELECTED_COUNTRY_FILE):
        raise FileNotFoundError(f"{SELECTED_COUNTRY_FILE} not found.")
    with open(SELECTED_COUNTRY_FILE, "r", encoding="utf-8") as f:
        return f.read().strip()

def filter_csv_by_country(path: str, country_col: str, selected_country: str) -> List[Dict]:
    if not os.path.exists(path):
        raise FileNotFoundError(f"{path} not found.")
    with open(path, newline='', encoding="utf-8-sig") as f:
        reader = csv.DictReader(f)
        return [row for row in reader if row.get(country_col, "").strip().lower() == selected_country.lower()]

# ---------- Data Builder ----------
def build_data():
    country = read_selected_country()
    food_data = filter_csv_by_country(FOOD_CSV, "country", country)
    air_data = filter_csv_by_country(AIR_CSV, "Country Name", country)

    return {
        "selected_country": country,
        "food_pollution": food_data,
        "air_pollution": air_data,
    }

# ---------- Main ----------
def main():
    try:
        data = build_data()
        os.makedirs(os.path.dirname(OUT_FILE), exist_ok=True)
        with open(OUT_FILE, "w", encoding="utf-8") as f:
            json.dump(data, f, indent=2)
        print(f"✅ Data written for {data['selected_country']} → {OUT_FILE}")
    except Exception as e:
        warn(f"Build failed → {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()
