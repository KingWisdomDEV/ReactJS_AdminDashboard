/* eslint-disable no-async-promise-executor */
import axios from 'axios';
import { get } from 'lodash';
import ResponseStatusType from './ResponseStatus';

const BASE_URL = 'https://my-json-server.typicode.com/KingWisdomDEV/fakeApi/';

// Set config defaults when creating the instance
export const AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 8000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Override Promise.reject for each request
AxiosInstance.interceptors.request.use(
  response => response,
  error => {
    Promise.reject(error.response || error.request || error.message);
  }
);

// Override Promise.reject for each response
AxiosInstance.interceptors.response.use(
  response => response,
  error => {
    // const {response = {}, config: sourceConfig} = error;
    // TODO: handle error
    // If error is not related with Unauthorized we reject promise
    Promise.reject(error.response || error.request || error.message);
  }
);

const http = {
  setAuthorizationHeader(accessToken) {
    AxiosInstance.defaults.headers.Authorization = `Bearer ${accessToken}`;
  },

  setDeviceTokenParam() {
    AxiosInstance.defaults.params = {
      //   device_token: getDeviceToken(),
    };
  },

  setUserIdAfterLogin(userId) {
    AxiosInstance.defaults.params = {
      user_id: userId,
    };
  },

  request(config) {
    config.params = {
      ...config.params,
    };

    return AxiosInstance.request(config);
  },

  get(url, config) {
    if (config) {
      config.params = {
        ...config.params,
      };
    }

    return AxiosInstance.get(url, config);
  },

  post(url, data, config) {
    if (config) {
      config.params = {
        ...config.params,
      };
    }

    return AxiosInstance.post(url, data, config);
  },

  put(url, data = {}, config) {
    if (config) {
      config.params = {
        ...config.params,
      };
    }

    return AxiosInstance.put(url, data, config);
  },

  patch(url, data = {}, config) {
    if (config) {
      config.params = {
        ...config.params,
      };
    }

    return AxiosInstance.patch(url, data, config);
  },

  delete(url, config) {
    if (config) {
      config.params = {
        ...config.params,
      };
    }

    return AxiosInstance.delete(url, config);
  },
};

export const axiosHandler = service =>
  new Promise(async resolve => {
    const response = await service();
    const apiResponse = get(response, 'response', undefined);
    const httpStatus = get(response, 'status', 500);

    // If apiResponse is nothing then return data
    // TODO: Change response status
    if (apiResponse === '' || (response && response.status >= 500)) {
      resolve({ isSuccess: false, isInternalServerError: true });
    }

    // Else get return all data from response
    // TODO: Change response data
    const data = get(response, 'data', null);
    const status = get(response, 'statusText', null);
    const isSuccess = status === ResponseStatusType.OK;

    resolve({
      data,
      status,
      httpStatus,
      isSuccess,
      isInternalServerError: false,
    });
  });

export default http;
