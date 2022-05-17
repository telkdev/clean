import axios, { AxiosInstance } from "axios";

import CONSTANTS from "@/constants";

import { useJwtToken } from "@/services/jwtTokenAdapter";
import { useApi } from "@/services/apiAdapterVue";

const HTTP: AxiosInstance = axios.create({
  baseURL: CONSTANTS.API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const { getToken, setToken, setRefreshToken, getRefreshToken } = useJwtToken();

// Jwt refreshing
HTTP.interceptors.request.use(
  (config) => {
    const token = getToken();

    if (!token) {
      return config;
    }

    const newConfig = {
      headers: {},
      ...config,
    };

    newConfig.headers.Authorization = `Bearer ${token}`;

    return newConfig;
  },
  (error) => Promise.reject(error)
);

HTTP.interceptors.response.use(
  (r) => r,
  async (error) => {
    const { post } = useApi();
    // TODO: test it with protected api calls;
    const refreshToken = getRefreshToken();

    if (error.response.status !== 401 || error.config.retry || refreshToken) {
      throw error;
    }

    // Jwt refresh call
    const { data } = await post("/api/Users/RefreshToken", {
      refreshToken,
    });

    setToken(data.token);
    setRefreshToken(data.refreshToken);

    const newConfig = {
      ...error.config,
      retry: true,
    };

    return HTTP(newConfig);
  }
);

export default HTTP;
