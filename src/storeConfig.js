import AsyncStorage from '@react-native-async-storage/async-storage';

export const setLanguage = async (value) => {
  try {
    await AsyncStorage.setItem('language', value);
  } catch (error) {
    // Error saving data
  }
};

export const getLanguage = async () => {
  try {
    const value = await AsyncStorage.getItem('language');
    if (value !== null) {
      // Value retrieved successfully
      return value
    } else {
      // Value not found
      return 1
    }
  } catch (error) {
    // Error retrieving data
  }
};