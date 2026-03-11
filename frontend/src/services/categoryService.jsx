import axios from "axios";

const API_URL = "http://localhost:8080/categories";

// CREATE CATEGORY
export const addCategory = async (formData) => {
  try {
    const response = await axios.post(API_URL, formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error adding category:", error);
    throw error;
  }
};

// GET ALL CATEGORIES
export const getCategories = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};

// DELETE CATEGORY
export const deleteCategory = async (categoryId) => {
  try {
    await axios.delete(`${API_URL}/${categoryId}`);
  } catch (error) {
    console.error("Error deleting category:", error);
    throw error;
  }
};