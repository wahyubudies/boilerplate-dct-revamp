const ENV = process.env.REACT_APP_ENVIRONMENT;

const baseApi = () => {
  switch (ENV) {
    case "PRODUCTION":
      return process.env.REACT_APP_BASE_API_PRODUCTION;
    case "STAGGING":
      return process.env.REACT_APP_BASE_API_STAGGING;
    case "DEVELOPMENT":
      return process.env.REACT_APP_BASE_API_DEVELOPMENT;
    default:
      return "";
  }
};

const Common = {
  baseApi,
};

export default Common;
