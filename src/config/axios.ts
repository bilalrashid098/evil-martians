import ax from "axios";
import Cookies from "js-cookie";
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
    const token = Cookies.get("accessToken");
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
      Cookies.remove("accessToken");
      Cookies.remove("refreshToken");

    //   const payload = {
    //     refreshToken: Cookies.get("refreshToken"),
    //     expiresInMins: 1,
    //   };

    //   axios
    //     .post("/auth/refresh", payload)
    //     .then((res) => {
    //       console.log("refresh token", res.data);
    //       Cookies.set("accessToken", res.data.accessToken, { expires: 1 });
    //       Cookies.set("refreshToken", res.data.refreshToken, { expires: 7 });
    //     })
    //     .catch(() => {
    //       toast.error("Session expired, redirecting to signin...");
    //       console.error("Session expired, redirecting to signin...");
    //       Cookies.remove("accessToken");
    //       Cookies.remove("refreshToken");
    //       window.location.href = routes.login;
    //     });

      return Promise.reject(error);
    }

    return { status: error.status, error: error.response.data };
  }
);
