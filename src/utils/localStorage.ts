export const setToLocalStorage = (key: string, token: string) => {
  if (!key || typeof window === 'undefined') return ""
  return localStorage.setItem(key, token)

}

export const getTokenFromLocalStorage = (authKey: string) => {
  if (!authKey || typeof window === "undefined") return ""
  return localStorage.getItem(authKey)
}

export const removeTokenFromLocalStorage = (authKey: string) => {
  if (!authKey || typeof window === "undefined") return ""
  return localStorage.removeItem(authKey)

}