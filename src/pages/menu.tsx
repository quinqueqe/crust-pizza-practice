import Footer from '../components/footer'
import Header from '../components/header'
import ListMenu from '../components/list-menu'

const Menu = () => {
	return (
		<>
			<Header />
			<div className='pt100'>
				<ListMenu />
				<Footer />
			</div>
		</>
	)
}

export default Menu
