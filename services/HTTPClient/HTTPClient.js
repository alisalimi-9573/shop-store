import axios from "axios";

const api = axios.create({
  baseURL: "https://fakestoreapi.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchProducts = async () => {
  const response = await api.get("/products");
  return response.data;
};

export const fetchProductById = async (id) => {
  const response = await api.get(`/products`, {
    params: {
      id,
    },
  });
  return response.data;
};

export const fetchCart = async () => {
  const response = await api.get("/cart");
  return response.data;
};

export const getAllCategories = async () => {
  const response = await api.get("/products/categories");
  return response.data;
};

export const addNewUser = async (newUser) => {
  try {
    console.log("Sending data:", newUser);
    const response = await api.post("/users", newUser);
    console.log("Response data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Add user error:", error);
    throw error;
  }
};

export const loginUser = async (userData) => {
  try {
    console.log("login user data", userData);
    const response = api.post("/auth/login", userData);
    return response;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};
