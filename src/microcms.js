import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "m0ju2j4hsp", 
  apiKey: import.meta.env.VITE_MICROCMS_API_KEY, 
});
