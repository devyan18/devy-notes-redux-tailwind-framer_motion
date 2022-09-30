// import { getAuthToken } from '@store/data/auth'
// import { removeTokenFromLocalStorage } from '@utils/session'
// import { useDispatch } from 'react-redux'

import { HiCollection, HiHome, HiCog, HiBookmark } from 'react-icons/hi'
import { NavbarLink } from '../NavbarLink'

export interface NavbarInterface {}

const Navbar : React.FC<NavbarInterface> = () => {
  return (
		<div className='px-2 h-12 min-w-screen shadow-md bg-transparent backdrop-blur-lg text-black dark:text-white fixed bottom-0 flex justify-between gap-4 md:sticky md:top-0 min-w-full'>
			<nav className='h-12 flex flex-row items-center justify-around gap-4 min-w-full'>
				<NavbarLink title='Go Home' to='/home'>
					<HiHome/>
				</NavbarLink>
				<NavbarLink title='Books' to='/books'>
					<HiCollection />
				</NavbarLink>
				<NavbarLink title='Notes' to='/notes'>
					<HiBookmark />
				</NavbarLink>
				<NavbarLink title='Settings' to='/settings'>
					<HiCog />
				</NavbarLink>
			</nav>
		</div>
  )
}

export default Navbar

// const dispatch = useDispatch()

// const handleClick = () => {
//   removeTokenFromLocalStorage()
//   dispatch(getAuthToken())
// }

/* <button
					onClick={handleClick}
        >
					Settings
				</button> */
