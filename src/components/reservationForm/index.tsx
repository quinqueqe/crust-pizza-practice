import './reservationForm.scss'
import { Link } from 'react-router-dom'


const ReservationForm = () => {
	const reservationDb = [
		{
			title: 'Имя',
			placeholder: 'Введите имя',
		},
		{
			title: 'Фамилия',
			placeholder: 'Введите фамилию',
		},
		{
			title: 'Номер',
			placeholder: 'Введите номер телефона',
		},
		{
			title: 'Гости',
			placeholder: 'Введите кол-во гостей',
		},
	]
	return (
		<div className='reservation-form section container'>
			<h3>Бронирование</h3>

			{reservationDb.map((item, i) => (
				<div key={i}>
					<p>{item.title}</p>
					<input type='text' placeholder={item.placeholder} />
				</div>
			))}

      <Link className='reservation-form__send' to='/'>Отправить заявку</Link>
		</div>
	)
}

export default ReservationForm
