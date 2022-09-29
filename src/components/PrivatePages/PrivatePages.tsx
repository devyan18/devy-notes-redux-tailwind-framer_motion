import { getAuthToken, getAuthUser } from '@store/data/auth'
import type { RootState } from '@store/store'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Outlet } from 'react-router-dom'
import UserModel from 'src/models/UserModel'
import {
  getTokenFromLocalStorage,
  getUserFromToken,
  removeTokenFromLocalStorage
} from '@utils/session'

export interface PrivatePagesInterface {}

const PrivatePages : React.FC<PrivatePagesInterface> = () => {
  const auth = useSelector((state: RootState) => state.auth)

  useEffect(() => {
    dispatch(getAuthToken())
  }, [])

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (!auth.token) {
      navigate('/auth/login')
    }
    if (auth.token && auth.user) {
      navigate('/home')
    }

    if (auth.token && !auth.user) {
      const token = getTokenFromLocalStorage()
      if (token) {
        getUserFromToken(token)
          .then(user => {
            if (user) {
              dispatch(getAuthUser(user as UserModel))
              navigate('/home')
            } else {
              removeTokenFromLocalStorage()
              navigate('/auth/login')
            }
          })
      } else {
        removeTokenFromLocalStorage()
        dispatch(getAuthToken())
      }
    }
  }, [auth])

  return (
		<><Outlet/></>
  )
}

export default PrivatePages
