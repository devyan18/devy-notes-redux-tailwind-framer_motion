import UserModel from 'src/models/UserModel'
import getHost from './getHost'

export const getTokenFromLocalStorage = (): string | null => {
  const item = localStorage.getItem('devy-token')

  if (item) {
    return item
  }
  return null
}

export const setTokenToLocalStorage = (value: string) => {
  localStorage.setItem('devy-token', value)
}

export const removeTokenFromLocalStorage = () => {
  localStorage.removeItem('devy-token')
}

export const getUserFromToken = async (token: string): Promise<UserModel | null> => {
  try {
    const request = await fetch(`${getHost()}/auth/token`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })

    const response = await request.json()

    if (request.status === 200) {
      return response.user as UserModel
    } else {
      return null
    }
  } catch (error) {
    return null
  }
}

export interface ResponseLogin {
  token: string
  user: UserModel
}

export const getSessionFromLogin = async (email: string, password: string): Promise<ResponseLogin | null> => {
  try {
    const request = await fetch(`${getHost()}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    })
    const response = await request.json()

    if (request.status === 203) {
      return response as ResponseLogin
    } else {
      return null
    }
  } catch (error) {
    return null
  }
}
