import axios, { AxiosResponse, AxiosError } from "axios";

import HTTP from "@/lib/axios.config";
import { computed, ref } from "vue";
import { notificationTypesEnum } from "@/enums/notificationTypes";

import { useNotifier } from "@/services/notificationAdapterVue";

const apiRequestsCount = ref(0);
const isLoading = computed(() => apiRequestsCount.value > 0);

// TODO: add interface
export function useApi() {
  const { handleAddNotification } = useNotifier();

  function increaseApiRequestsCount() {
    apiRequestsCount.value++;
  }
  function decreaseApiRequestsCount() {
    apiRequestsCount.value--;
  }

  async function query<T extends Record<string, unknown>>(
    resource: string,
    params?: T
  ): Promise<AxiosResponse<any>> {
    try {
      increaseApiRequestsCount();
      const response = await HTTP.get(resource, { params });
      decreaseApiRequestsCount();
      return response as AxiosResponse;
    } catch (err) {
      decreaseApiRequestsCount();
      // add middleware https://github.com/axios/axios/issues/3612#issuecomment-893017210
      // TODO: add interface for error
      if (axios.isAxiosError(err)) {
        const msg = err.response?.data.detail;

        handleAddNotification({
          text: msg as string,
          type: notificationTypesEnum.Error,
        });

        throw err as AxiosError;
      }

      throw err;
    }
  }

  async function post<T extends Record<string, unknown>>(
    resource: string,
    params?: T
  ): Promise<AxiosResponse> {
    try {
      increaseApiRequestsCount();
      const response = await HTTP.post(`${resource}`, params);

      decreaseApiRequestsCount();
      return response as AxiosResponse;
    } catch (err) {
      decreaseApiRequestsCount();
      // add middleware https://github.com/axios/axios/issues/3612#issuecomment-893017210
      // TODO: add interface for error
      if (axios.isAxiosError(err)) {
        const msg = err.response?.data.detail;

        handleAddNotification({
          text: msg as string,
          type: notificationTypesEnum.Error,
        });

        throw err as AxiosError;
      }

      throw err;
    }
  }

  return {
    query,
    async getFile<T extends Record<string, unknown>>(
      resource: string,
      params?: T
    ): Promise<AxiosResponse<any>> {
      const response = await HTTP.get(resource, {
        responseType: "blob",
        params,
      });
      return response as AxiosResponse;
    },
    async get(resource: string, slug = ""): Promise<AxiosResponse<any>> {
      const response = await HTTP.get(`${resource}/${slug}`);
      return response as AxiosResponse;
    },

    async patch<T extends Record<string, unknown>>(
      resource: string,
      params?: T
    ): Promise<AxiosResponse<any>> {
      const response = await HTTP.patch(`${resource}`, params);
      return response as AxiosResponse;
    },

    post,

    async postFile<T extends Record<string, unknown>>(
      resource: string,
      params?: T
    ): Promise<AxiosResponse<any>> {
      const response = await HTTP.post(`${resource}`, params, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response as AxiosResponse;
    },

    async update<T extends Record<string, unknown>>(
      resource: string,
      slug = "",
      params?: T
    ): Promise<AxiosResponse<any>> {
      const response = await HTTP.put(`${resource}/${slug}`, params);
      return response as AxiosResponse;
    },

    async put<T extends Record<string, unknown>>(
      resource: string,
      params?: T
    ): Promise<AxiosResponse<any>> {
      const response = await HTTP.put(`${resource}`, params);
      return response as AxiosResponse;
    },

    async delete(resource: string): Promise<AxiosResponse<any>> {
      const response = await HTTP.delete(resource);
      return response as AxiosResponse;
    },

    async postParam<
      T extends Record<string, unknown>,
      K extends Record<string, unknown>
    >(resource: string, data?: T, params?: K): Promise<AxiosResponse<any>> {
      const response = await HTTP.post(`${resource}`, data, { params });
      return response as AxiosResponse;
    },

    async postParamFile<
      T extends Record<string, unknown>,
      K extends Record<string, unknown>
    >(resource: string, data?: T, params?: K): Promise<AxiosResponse<any>> {
      const response = await HTTP.post(`${resource}`, data, {
        responseType: "blob",
        params,
      });
      return response as AxiosResponse;
    },
    isLoading,
  };
}
