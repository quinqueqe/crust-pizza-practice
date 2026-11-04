import './contacts.scss'

const ContactsForm = () => {
	const contactsDb = [
		{
			text: 'Адрес: ул. Бородинская, 24, Краснодар, Краснодарский край, 350090',
		},
		{
			text: 'Режим работы: Пн-Вс 08:00-01:00',
		},
		{
			text: 'Банкетные залы: 8 (800) 555-35-55',
		},
		{
			text: 'Email: fjasfhjsdafhj@mail.ru',
		},
	]
	return (
		<div className='contacts section container'>
			<h2>Ресторан Crust Pizza</h2>

			<div className='contacts-info'>
				<ul>
					{contactsDb.map((item, i) => (
						<li key={i}>{item.text}</li>
					))}
				</ul>
				<div>
					<iframe
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2818.8353143668605!2d39.027518099999995!3d45.0485637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40f0456a077fed51%3A0x39ed8fbc0d8af832!2z0KDQvtCx0LjQvdC30L7QvSDQmtGA0YPQt9C-!5e0!3m2!1sru!2sru!4v1793804578754!5m2!1sru!2sru'
						width='600'
						height='450'
						loading='lazy'
					></iframe>
				</div>
			</div>
		</div>
	)
}

export default ContactsForm
