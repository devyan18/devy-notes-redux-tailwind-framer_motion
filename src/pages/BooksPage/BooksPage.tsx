import { Layout, BookCard } from "@components";
import useBooks from "../../hooks/useBooks";

export interface BooksPageInterface {}

const BooksPage : React.FC<BooksPageInterface> = () => {
  const { books, isLoading, error, filter } = useBooks();

  if (error) {
    return (
			<Layout>
				<p>Error</p>
			</Layout>
    );
  }

  return (
		<Layout>
			<div className='flex flex-row justify-center items-center pt-4 pb-2'>
				<input
					onChange={(e) => filter(e.target.value)}
					placeholder='Search...'
					type='text'
					className='shadow-md placeholder:text-gray-500 text-black px-3 py-1 rounded-lg outline-none bg-gray-100 dark:bg-gray-900 border-b border-t border-l border-r border-1 dark:border-gray-800 dark:text-gray-300'
				/>
			</div>
			<div className='flex flex-col justify-center items-center xs:grid sm:grid md:grid lg:grid xl:grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 py-4 place-items-start sm:items-start'>
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
  );
};

export default BooksPage;
