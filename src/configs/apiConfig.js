import process from "process";

const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === "development";

let apiConfig = {};

if (isDev) {
  apiConfig = {
    baseUrl: "http://buildings.poulpal.local/v1",
    // baseUrl: "https://chargepal.ir/api/v1",
  };
  if (import.meta.env.VITE_APP_TYPE == 'a444') {
    apiConfig = {
      baseUrl: "https://apidigisign.chargepal.ir/v1"
    };
  }
} else {
  apiConfig = {
    baseUrl: import.meta.env.VITE_API_URL
  };
}

// const apiConfig = {
//     // baseUrl: isDev ? 'http://buildings.poulpal.local/v1' : 'https://api.charge.poulpal.com/v1',
//     baseUrl: 'https://api.charge.poulpal.com/v1',
//     baseUrl: 'http://buildings.poulpal.local/v1',
// }

export default apiConfig;
