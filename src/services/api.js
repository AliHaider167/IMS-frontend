// Update product
export const updateProduct = (id, data) =>
  api.put(`/api/purchaser/products/${id}`, data);
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add Authorization header for each request if token exists
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth
export const register = (data) => api.post("/api/auth/register", data);
export const login = (data) => api.post("/api/auth/login", data);
export const logout = () => api.post("/api/auth/logout");

// Admin
export const addEmployee = (data) => api.post("/api/admin/add-employee", data);
export const getActivities = () => api.get("/api/admin/activities");
export const getDailyReport = () => api.get("/api/admin/daily-report");

// Seller
export const getSellerProducts = () => api.get("/api/seller/products");
export const saleProducts = (cart) => api.post("/api/seller/sale", { cart });

// Purchaser
export const addProduct = (data) =>
  api.post("/api/purchaser/add-product", data);
export const getPurchaserProducts = () => api.get("/api/purchaser/products");

export default api;
