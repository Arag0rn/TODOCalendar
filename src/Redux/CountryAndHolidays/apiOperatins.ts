
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

interface CountryData {
  year: string;
  countryCode: string;
}


  export const fetchLocation = async ({ latitude, longitude }: { latitude: number, longitude: number }) => {
      try {
        const apiKey = '8da4ac86b8014972be186d18e04e0c20';
        const apiUrl = `https://api.opencagedata.com/geocode/v1/json?key=${apiKey}&q=${latitude}+${longitude}&pretty=1`;

        const response = await axios.get(apiUrl);
        return response.data.results[0]?.components?.country_code || 'Cant find country';

      } catch (error) {
        console.error('Gps error:', error);
      }
    };


    export const GetPublicHolidays = createAsyncThunk(
      'get/holidays',
      async (CountryData: CountryData, thunkAPI) => {
        console.log(CountryData);
    
        try {
          const { year, countryCode } = CountryData;
          const res = await axios.get(`https://date.nager.at/api/v3/PublicHolidays/${year}/${countryCode}`);
          return res.data;
        } catch (error) {
          return thunkAPI.rejectWithValue(error);
        }
      }
    );