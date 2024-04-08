"use client";
import axios from "axios";

export const fetcher = async (payload: {
  url: string;
  method?: string;
  data?: any;
  params?: any;
  responseType?: any;
  onUploadProgress?: any;
  onDownloadProgress?: any;
}) => {
  try {
    const {
      url,
      method = "GET",
      data,
      params,
      responseType,
      onUploadProgress,
      onDownloadProgress,
    } = payload;

    const response = await axios({
      method,
      url,
      data,
      params,
      withCredentials: true,
      responseType,
      onUploadProgress,
      onDownloadProgress,
    });

    return {
      data: response.data,
      error: null,
      headers: response.headers,
    };
  } catch (error: any) {
    return {
      data: null,
      error: error.response?.data || {
        message: "Something went wrong",
      },
    };
  }
};