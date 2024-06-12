import { authKey } from "@/constantType/constant.type";
import { TUserAuthInf } from "@/types/responseType/response.type";
import { getTokenFromLocalStorage, removeTokenFromLocalStorage, setToLocalStorage } from "@/utils/localStorage";
import { jwtDecode } from "jwt-decode";


//  set accessToken in local storage
export const storedUserInfo = ({ accessToken }: { accessToken: string }) => {
  return setToLocalStorage(authKey, accessToken);
};

// decode user information from token
export const userInformation = (): TUserAuthInf | null => {
  const token = getTokenFromLocalStorage(authKey)
  if (token) {
    const decodeToken = jwtDecode(token) as TUserAuthInf
    return { ...decodeToken }
  } else {
    return null
  }
}

// logout user => remove token from local storage
export const removeUser = () => {
  return removeTokenFromLocalStorage(authKey)
}
