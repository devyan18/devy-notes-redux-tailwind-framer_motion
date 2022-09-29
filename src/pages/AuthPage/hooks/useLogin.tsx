import { getSessionFromLogin, ResponseLogin } from '@utils/session'
import { useState } from 'react'

interface ILoginForm {
  email: string
  password: string
}

const initialForm = {
  email: '',
  password: ''
}

export default function useLogin () {
  const [response, setResponse] = useState<ResponseLogin | null>(null)

  const [isLoading, setLoading] = useState(false)

  const [form, setForm] = useState<ILoginForm>(initialForm)

  const setParam = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const submit = () => {
    setLoading(true)
    getSessionFromLogin(form.email, form.password)
      .then(res => {
        if (res) {
          setResponse(res)
        } else {
          setResponse(null)
        }
      })
      .finally(() => setLoading(false))
  }

  return { isLoading, submit, setParam, response }
}
