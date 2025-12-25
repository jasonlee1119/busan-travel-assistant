import axiosInstance from "./axiosConfig";

export const apiService = {
  get: async<T>(url: string): Promise<T> => {
    const response = await axiosInstance.get<T>(url);
    return response.data;
  }
}