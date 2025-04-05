# scripts/prep_fao.py
import pandas as pd, os, json

RAW  = "scripts/raw/FAO_Waste_raw.csv"
OUT  = "scripts/raw/FAO_Waste.csv"   # what update_data.py will read

df = pd.read_csv(RAW)

# 1. keep only the columns we need
df = df[["year", "loss_percentage"]].dropna()

# 2. convert to numeric
df["year"] = df["year"].astype(int)
df["loss_percentage"] = df["loss_percentage"].astype(float)

# 3. aggregate: mean loss % across all countries & commodities per year
agg = (
    df.groupby("year", as_index=False)["loss_percentage"]
      .mean()
      .rename(columns={"loss_percentage": "Waste_pct"})
)

# 4. write the slim CSV
os.makedirs(os.path.dirname(OUT), exist_ok=True)
agg.to_csv(OUT, index=False)
print("✅  Wrote", OUT, "with", len(agg), "rows")
