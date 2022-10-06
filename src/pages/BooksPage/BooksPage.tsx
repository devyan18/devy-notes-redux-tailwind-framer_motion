import { Layout, BookCard } from '@components'
import useBooks from '../../hooks/useBooks'

export interface BooksPageInterface {}

const BooksPage : React.FC<BooksPageInterface> = () => {
  const { books, isLoading, error } = useBooks()

  if (error) {
		<Layout>
			<p>Error</p>
		</Layout>
  }

  return (
		<Layout>
			<div className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 py-4 place-items-start'>
				{isLoading
				  ? (
					<p>Loading...</p>
				    )
				  : (
				      books && books?.length > 0
				        ? (
				        books?.map((book) => (
									<BookCard
										key={book._id}
										describe={book.describe}
										name={book.name}
										notes={book.notes.length}
										update={book.updatedAt}
									/>
				        ))
				      )
				        : (
							<p>No books</p>
				      )
				    )}
			</div>
		</Layout>
  )
}

export default BooksPage
