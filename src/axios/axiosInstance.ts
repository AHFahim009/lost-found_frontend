import { authKey } from "@/constantType/constant.type";
import { globalErrorResponse } from "@/types/globalType/global.type";
import { getTokenFromLocalStorage } from "@/utils/localStorage";
import axios from "axios";

const instance = axios.create();
instance.defaults.headers.post["Content-Type"] = "application/json";
instance.defaults.headers["Accept"] = "application/json";
instance.defaults.timeout = 60000;

//  request interceptor
instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const accessToken = getTokenFromLocalStorage(authKey)
    if (accessToken) {
      config.headers.Authorization = accessToken
    }

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// response interceptor
instance.interceptors.response.use(
  //@ts-ignore
  function (response) {
    return { data: response.data }
  },
  async function (error) {
    return { err: error.response.data }

  }
);

export { instance };
