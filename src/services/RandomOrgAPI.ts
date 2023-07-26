import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IRandom } from "../models/IRandom";

export const getRandNum = createApi({
  reducerPath: "GetNum",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.random.org/json-rpc/2",
  }),
  endpoints: (build) => ({
    getRandNum: build.query<IRandom, number>({
      query: (Allfilms) => ({
        url: "/invoke",
        method: "POST",
        body: {
          jsonrpc: "2.0",
          method: "generateIntegers",
          params: {
            apiKey: "0530ce59-5041-4150-97ad-a42e1b264582",
            n: 1,
            min: 1,
            max: Allfilms,
            replacement: false,
          },
          id: 42,
        },
      }),
    }),
  }),
});
