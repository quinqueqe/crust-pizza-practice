import AboutUs from '../components/aboutUs'
import Footer from '../components/footer'
import Header from '../components/header'

const Home = () => {
	return (
		<>
			<Header />
			<div className='pt100'>
				<AboutUs />				
				<Footer />
			</div>
		</>
	)
}

export default Home
