import { HiLockClosed } from 'react-icons/hi'

export interface BookCardInterface {
	name: string
	describe: string,
	notes: number,
	update: string,
}

const BookCard : React.FC<BookCardInterface> = (props: BookCardInterface) => {
  return (
		<div className="max-w-sm w-full lg:max-w-full lg:flex">
			<div className="max-h-max shadow-lg border-b border-t border-l border-r border-1 border-gray-800 bg-white dark:text-white dark:bg-gray-900 rounded-xl p-4 flex flex-col justify-between cursor-pointer dark:hover:bg-gray-800">
				<div className="mb-8">
					<p className="text-sm text-gray-900 dark:text-gray-400 flex items-center gap-2">
						<HiLockClosed />
						Members only
					</p>
					<div className="text-gray-900 dark:text-gray-300 font-bold text-xl mb-2">{props.name}</div>
					<p className="text-gray-700 dark:text-gray-500 text-base">{props.describe}</p>
				</div>
				{/* <div className="flex items-center">
					<img className="w-10 h-10 rounded-full mr-4" src="/img/jonathan.jpg" alt="Avatar of Jonathan Reinink"/>
					<div className="text-sm">
					<p className="text-gray-900 leading-none">Jonathan Reinink</p>
					<p className="text-gray-600">Aug 18</p>
					</div>
				</div> */}
				<span className="inline-block bg-gray-900 rounded-xl px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{props.notes} Notes</span>
			</div>
		</div>
  )
}

export default BookCard
