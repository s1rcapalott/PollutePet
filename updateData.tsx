import React, { useState, useEffect } from "react";
import Papa from "papaparse";

const FOOD_CSV = "/food_pollution.csv";  // Use relative path from public folder
const AIR_CSV = "/air_pollution.csv";    // Same here

interface DataRow {
  country: string;
  year: string;
  food_loss_pct?: string;
  air_pollution_pm25?: string;
}

const App: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [allData, setAllData] = useState<DataRow[]>([]);
  const [filteredData, setFilteredData] = useState<DataRow[]>([]);

  const fetchData = async () => {
    try {
      const [foodRes, airRes] = await Promise.all([
        fetch(FOOD_CSV),
        fetch(AIR_CSV),
      ]);
      const [foodText, airText] = await Promise.all([
        foodRes.text(),
        airRes.text(),
      ]);

      const foodParsed = Papa.parse(foodText, {
        header: true,
        skipEmptyLines: true,
      }).data as any[];

      const airParsed = Papa.parse(airText, {
        header: true,
        skipEmptyLines: true,
      }).data as any[];

      const mergedData = mergeData(foodParsed, airParsed);
      setAllData(mergedData);
      setFilteredData(mergedData); // Set initial view to all data
    } catch (err) {
      console.error("Error fetching or parsing data:", err);
    }
  };

  const mergeData = (foodData: any[], airData: any[]): DataRow[] => {
    const foodMap: Record<string, Record<string, string>> = {};
    foodData.forEach((row) => {
      const country = row.country?.trim();
      const year = row.year?.trim();
      if (!country || !year) return;
      if (!foodMap[country]) foodMap[country] = {};
      foodMap[country][year] = row.loss_percentage;
    });

    const airMap: Record<string, Record<string, string>> = {};
    airData.forEach((row) => {
      const country = row["Country Name"]?.trim();
      if (!country) return;
      Object.entries(row).forEach(([year, value]) => {
        if (/^\d{4}$/.test(year)) {
          if (!airMap[country]) airMap[country] = {};
          airMap[country][year] = value as string;
        }
      });
    });

    const countries = new Set([...Object.keys(foodMap), ...Object.keys(airMap)]);
    const merged: DataRow[] = [];

    countries.forEach((country) => {
      const years = new Set([
        ...(foodMap[country] ? Object.keys(foodMap[country]) : []),
        ...(airMap[country] ? Object.keys(airMap[country]) : []),
      ]);

      years.forEach((year) => {
        merged.push({
          country,
          year,
          food_loss_pct: foodMap[country]?.[year],
          air_pollution_pm25: airMap[country]?.[year],
        });
      });
    });

    return merged;
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (selectedCountry) {
      setFilteredData(allData.filter((d) => d.country === selectedCountry));
    } else {
      setFilteredData(allData);
    }
  }, [selectedCountry, allData]);

  return (
    <div>
      <h1>Pollution and Food Loss Data</h1>
      <label>
        Select Country:
        <select
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
        >
          <option value="">All Countries</option>
          {Array.from(new Set(allData.map((d) => d.country))).map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </label>

      <table>
        <thead>
          <tr>
            <th>Country</th>
            <th>Year</th>
            <th>Food Loss %</th>
            <th>PM2.5</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row, idx) => (
            <tr key={idx}>
              <td>{row.country}</td>
              <td>{row.year}</td>
              <td>{row.food_loss_pct || "N/A"}</td>
              <td>{row.air_pollution_pm25 || "N/A"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
