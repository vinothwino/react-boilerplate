import axios from "./axios";
// import config from "config";

// const getBaseUrl = (baseUrlType) => {
//   if (!baseUrlType)
//     return config.service.BASE_URL
//   return config.service[baseUrlType] ? config.service[baseUrlType] : "";
// };

const API: any = async ({
  url,
  method,
  responseType,
  data,
  cancelToken,
  // baseUrlType,
  params,
  headers
}) => {
  //REQUEST JSON

  let axiosRequestObject = {
    method,
    url,
    // baseURL: getBaseUrl(baseUrlType),
    data,
    headers,
    responseType,
    params,
    ...(cancelToken
      ? {
        cancelToken,
      }
      : ""),
  };

  //REQUEST

  let request = await axios.request(axiosRequestObject)
    .then(handleSuccessRequest)
    .catch(handleErrorRequest);

  return request;
};

const handleSuccessRequest = (response) => ({
  status: response.status,
  data: response.data,
});

const handleErrorRequest = (err) => {
  if (!err.response) {
    return Promise.reject()
  }
  else if (err.response?.status === 401) {
    localStorage.removeItem('token')
    return Promise.reject()
  }
  else return err.response
};

export default API