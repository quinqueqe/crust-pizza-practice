import { Route, Routes } from 'react-router'
import Home from './pages/home'
import Menu from './pages/menu'
import ReservationForm from './pages/reservation'
import Contacts from './pages/contacts'

function App() {
	return (
		<Routes>
			{/* <Route path='/react-pizza' element={<MainLayout />}> */}
			<Route path='/' element={<Home />} />
			<Route path='/menu' element={<Menu />} />
			<Route path='/reservation' element={<ReservationForm />} />
			<Route path='/contacts' element={<Contacts />} />
			{/* <Route path='*' element={<NotFound />} /> */}
			{/* <Route path='/react-pizza/order' element={<Order />} /> */}
			{/* </Route> */}
		</Routes>
	)
}

export default App
