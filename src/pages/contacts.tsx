import ContactsForm from '../components/contactsForm'
import Footer from '../components/footer'
import Header from '../components/header'

const Contacts = () => {
	return (
		<>
			<Header />
			<div className='pt100'>
				<ContactsForm/>
				<Footer />
			</div>
		</>
	)
}

export default Contacts
