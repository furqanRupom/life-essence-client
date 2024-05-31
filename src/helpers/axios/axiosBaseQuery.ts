
import { createApi } from '@reduxjs/toolkit/query'
import type { BaseQueryFn } from '@reduxjs/toolkit/query'
import axios from 'axios'
import type { AxiosRequestConfig, AxiosError } from 'axios'
import { instance as axiosInstance } from './axiosinstance'
import { IMetaData } from '@/interfaces/interfaces'

export const axiosBaseQuery =
    (
        { baseUrl }: { baseUrl: string } = { baseUrl: '' }
    ): BaseQueryFn<
        {
            url: string
            method?: AxiosRequestConfig['method']
            data?: AxiosRequestConfig['data']
            params?: AxiosRequestConfig['params']
            headers?: AxiosRequestConfig['headers'],
            meta?: IMetaData,
            contentType?: string
        },
        unknown,
        unknown
    > =>
        async ({ url, method, data, params, headers, contentType }) => {
            try {
                // @ts-ignore
                const result = await axiosInstance({
                    url: baseUrl + url,
                    method,
                    data,
                    params,
                    headers: {
                        "Content-Type": contentType || "application/json"
                    },
                })
             // @ts-ignore
                return { data: result.data,meta:result?.meta || {}} 
            } catch (axiosError) {
                const err = axiosError as AxiosError
                return {
                    error: {
                        status: err.response?.status,
                        data: err.response?.data || err.message,
                    },
                }
            }
        }

