import { getAuthToken, getAuthUser } from "@store/data/auth";
import { setTokenToLocalStorage } from "@utils/session";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

export interface AuthPageInterface {}

const AuthPage : React.FC<AuthPageInterface> = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { isLoading, response, setParam, submit } = useLogin();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submit();
  };

  useEffect(() => {
    if (response) {
      setTokenToLocalStorage(response.token);
      dispatch(getAuthToken());
      dispatch(getAuthUser(response.user));
      navigate("/home");
    }
  }, [response]);

  if (isLoading) return <div>Loading...</div>;

  return (
		<div className='grid place-items-center min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white'>
      <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
        <input
          placeholder='email...'
          className='px-4 py-1 rounded-md border-1 border-white border-solid bg-gray-400 dark:bg-gray-700 outline-none'
          type="email"
          name="email"
          onChange={setParam}
        />
        <input
          placeholder='password...'
          className='px-4 py-1 rounded-md  bg-gray-400 dark:bg-gray-700 outline-none'
          type="password"
          name="password"
          onChange={setParam}
        />
        <button
          type='submit'
          disabled={isLoading}
        >{isLoading ? "Loading..." : "Login"}
        </button>
      </form>
		</div>
  );
};

export default AuthPage;
