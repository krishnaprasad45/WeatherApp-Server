import Weather from "../models/weatherDataModel";

export const getRecordsFromDB = async () => {
  try {
    const records = await Weather.find();
    return records ? records : null;
  } catch (error) {
    console.error("Error fetching records from database:", error);
    throw error;
  }
};
