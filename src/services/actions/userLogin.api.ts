"use server"

export const userLoginApi = async (payload: any) => {
  const res = await fetch(
    `${process.env.NEXT_DATABASE_URL}/login`,
    {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),

    }
  )

  const userAuthInfo = await res.json()
  return userAuthInfo
}