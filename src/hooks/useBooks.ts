import { useQuery } from '@tanstack/react-query'
import { getAllBooksByToken } from '@utils/books'

export default function useBooks () {
  const { data: books, error, isLoading } = useQuery(['books'], getAllBooksByToken)

  return { books, error, isLoading }
}
