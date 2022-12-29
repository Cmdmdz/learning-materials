//////////////// Localization Begin ////////////////
export const NETWORK_CONNECTION_MESSAGE =
  "Cannot connect to server, Please try again.";
export const NETWORK_TIMEOUT_MESSAGE =
  "A network timeout has occurred, Please try again.";
export const UPLOAD_PHOTO_FAIL_MESSAGE =
  "An error has occurred. The photo was unable to upload.";
export const NOT_CONNECT_NETWORK = "NOT_CONNECT_NETWORK";

export const apiUrl = import.meta.env.VITE_BACKEND_BASE_URL + "/api/v2";
export const imageUrl = import.meta.env.VITE_BACKEND_BASE_URL + "/images";

export const server = {
  LOGIN_URL: `login`,
  REGISTER_URL: `register`,
  TOKEN_KEY: `token`,
  USERNAME: `username`,
};
