import { NavLink } from "react-router-dom";

export interface NavbarLinkInterface {
	children: React.ReactNode
	to: string
	title: string
}

const NavbarLink : React.FC<NavbarLinkInterface> = (props: NavbarLinkInterface) => {
  return (
		<NavLink
			className={({ isActive }) => {
			  return `${isActive ? "text-blue-400" : "hover:text-blue-400 text-gray-500"}`;
			}}
			to={props.to}>
				<span className='flex sm:hidden text-2xl'>
					{props.children}
				</span>
			<p className='hidden sm:flex flex-row justify-center items-center gap-1'>
				{props.children}
				<span>{props.title}</span>
			</p>
		</NavLink>
  );
};

export default NavbarLink;
