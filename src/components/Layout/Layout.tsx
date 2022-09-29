import { Navbar } from '@components'

export interface LayoutInterface {
	children: React.ReactNode
}

const Layout : React.FC<LayoutInterface> = (props: LayoutInterface) => {
  return (
		<div className='bg-gray-100 dark:bg-gray-900 dark:text-white text-gray-900 min-h-screen'>
			<Navbar />
			<main className='px-2 md:px-6 lg:px-8 xl:px-10'>
				{props.children}
			</main>
		</div>
  )
}

export default Layout
