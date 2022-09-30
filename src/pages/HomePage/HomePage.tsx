import { Layout } from '@components'
import { Link } from 'react-router-dom'

export interface HomePageInterface {}

const HomePage : React.FC<HomePageInterface> = () => {
  return (
    <Layout>
			<Link to="/books">
				<p>Ir a los libros</p>
			</Link>
    </Layout>
  )
}

export default HomePage
