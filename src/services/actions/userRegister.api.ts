"use server"

export const userRegisterApi = async (payload: any) => {


  const res = await fetch(
    `${process.env.NEXT_DATABASE_URL}/register`,
    {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      cache: "no-store"
    }
  )
  const userData = await res.json()


  return userData

}