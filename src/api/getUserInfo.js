import { logIn } from '../features/userSlice'

export const getUserInfo = (token, dispatch) => {

  if (token.errorCode) {
    return;
  }

  const url = "https://gateway.scan-interfax.ru/api/v1/account/info";
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token.accessToken}`,
    },
  };
  return fetch(url, options)
    .then((response) => {
      return response.json();
    })
    .then((userData) => {
      localStorage.setItem("userData", JSON.stringify(userData));
      return userData;
    })
    .then((userData) => {
      dispatch(
        logIn({
          logIn: true,
          userInfo: userData.eventFiltersInfo,
        })
      );
    })
    .catch(function (error) {
      throw new Error(error);
    });
}