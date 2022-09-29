import { getAuthToken } from '@store/data/auth'
import { removeTokenFromLocalStorage } from '@utils/session'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { HiBookOpen, HiHome } from 'react-icons/hi'

export interface NavbarInterface {}

const Navbar : React.FC<NavbarInterface> = () => {
  const dispatch = useDispatch()

  const handleClick = () => {
    removeTokenFromLocalStorage()
    dispatch(getAuthToken())
  }

  return (
		<div className='px-2 h-12 min-w-screen shadow-md bg-transparent backdrop-blur-lg text-black dark:text-white fixed bottom-0 flex justify-between gap-4 md:sticky md:top-0 min-w-full'>
			<nav className='h-12 flex flex-row items-center justify-around gap-4 min-w-full'>
				<NavLink className='hover:text-blue-400' to="/home">
					<span className='flex sm:hidden text-2xl'>
						<HiHome/>
					</span>
					<p className='hidden sm:flex'>Ir al inicio</p>
				</NavLink>
				<NavLink className='hover:text-blue-400' to="/books">
					<span className='flex sm:hidden text-2xl'>
						<HiBookOpen />
					</span>
					<p className='hidden sm:flex'>Ir a los libros</p>
				</NavLink>
				<button
					onClick={handleClick}
        >
					Settings
				</button>
			</nav>
		</div>
  )
}

export default Navbar
