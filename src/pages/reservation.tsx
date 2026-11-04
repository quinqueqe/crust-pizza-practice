import Footer from '../components/footer'
import Header from '../components/header'
import ReservationForm from '../components/reservationForm'

const Reservation = () => {
	return (
		<>
			<Header />
			<div className='pt100'>
				<ReservationForm />
				<Footer />
			</div>
		</>
	)
}

export default Reservation
