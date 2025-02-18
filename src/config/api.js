// config/api.js

const BASE_URL = "https://api.example.com"; // Ganti dengan URL API yang sesuai

export const API_ENDPOINTS = {
  GET_SERVICES: `${BASE_URL}/services`,
  GET_PRICE_LIST: `${BASE_URL}/pricing`,
  CONTACT_US: `${BASE_URL}/contact`,
};

// Contoh function untuk fetch data
export async function fetchData(endpoint) {
  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error('Something went wrong');
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}
export default API_ENDPOINTS;