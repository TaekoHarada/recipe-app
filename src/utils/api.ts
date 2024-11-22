import axios from "axios";

const API_BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export const fetchPopularRecipes = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/search.php?s=Arrabiata`);
    return response.data;
  } catch (error) {
    console.error("Error fetching popular recipes:", error);
    throw error;
  }
};
