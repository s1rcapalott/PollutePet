import RNFS from 'react-native-fs';

const API_URL = 'https://aqs.epa.gov/data/api/annualSummary';
const API_KEY = 'sandgoose25'; // Replace with your actual API key
const EMAIL = 'rvar3926@gmail.com'; // Replace with your email

// Function to fetch air quality data
export const fetchAirQualityData = async (stateCode, countyCode, year, param) => {
  const url = `${API_URL}?email=${EMAIL}&key=${API_KEY}&state_code=${stateCode}&county_code=${countyCode}&year=${year}&param=${param}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    return null;
  }
};

// Function to save data to a file
export const saveDataToFile = async (filename, data) => {
  const path = RNFS.DocumentDirectoryPath + `/${filename}.json`;
  try {
    await RNFS.writeFile(path, JSON.stringify(data), 'utf8');
    console.log('Data saved to', path);
  } catch (error) {
    console.error('Write file error:', error);
  }
};
