const ENV = process.env.REACT_APP_ENVIRONMENT;

const baseApi = () => {
  let BASE_API;

  switch (ENV) {
    case "PRODUCTION":
      BASE_API = process.env.REACT_APP_BASE_API_PRODUCTION;
      break;
    case "STAGGING":
      BASE_API = process.env.REACT_APP_BASE_API_STAGGING;
      break;
    case "DEVELOPMENT":
      BASE_API = process.env.REACT_APP_BASE_API_DEVELOPMENT;
      break;
    default:
      BASE_API = "";
      break;
  }

  return BASE_API;
};

const Common = {
  baseApi,
};

export default Common;
