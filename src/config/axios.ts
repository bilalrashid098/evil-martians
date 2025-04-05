import ax from "axios";
import toast from "react-hot-toast";
import { routes } from "./routes";

export const axios = ax.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axios.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    return {
      ...response,
      status: response.status,
      data: response.data,
    };
  },
  (error) => {
    console.log("axios Error", error.response);

    if (error.response && error.response.status === 401) {
      // Handle unauthorized access
      toast.error("Session expired, redirecting to signin...");
      console.error("Session expired, redirecting to signin...");
      localStorage.removeItem("accessToken");
      window.location.href = routes.login;
      return Promise.reject(error);
    }

    return { status: error.status, error: error.response.data };

    // if (
    //   error.response &&
    //   (error.response.status === 400 || error.response.status === 403)
    // ) {
    //   return error.response.data;
    // }
    // if (error.response && error.response.status === 401) {
    //   console.log("axios Error", error);
    //   // Handle unauthorized access
    //   console.error("Session expired, redirecting to signin...");
    //   toast.error("Session expired, redirecting to signin...");
    //   // NotificationManager.updateNotificationModalCounter();
    //   // You can perform redirection or other actions here
    // } else {
    //   return Promise.reject(error);
    // }
  }
);
