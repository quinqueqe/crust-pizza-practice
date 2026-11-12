import './footer.scss'
import logo from '../../assets/favicon.ico'
import arrowImg from '../../assets/arrow-top.png'

export const Footer = () => {
	const footerDb = [
		{
			text: 'Ресторан итальянской, неаполитанской пиццы + авторской начинки',
		},
		{
			text: 'Адрес: ул. Бородинская, 24, Краснодар, Краснодарский край, 350090',
		},
		{
			text: 'Режим работы: Пн-Вс 08:00-01:00',
		},
		{
			text: 'Email: fjasfhjsdafhj@mail.ru',
		},
	]
	return (
		<div className='footer'>
			<div className='footer-info container'>
				<div className='header-logo'>
					<img src={logo} alt='logo' className='header-logo__img' />

					<div>
						<h2 className='header-logo__title footer-text'>CRUST PIZZA</h2>
						<p>самая вкусная пицца во вселенной</p>
					</div>
				</div>

				<ul>
					{footerDb.map((item, i) => (
						<li key={i}>{item.text}</li>
					))}
				</ul>
			</div>

			<a href='#' className='footer-btn'>
				<img src={arrowImg} alt="img" />
			</a>
		</div>
	)
}

export default Footer
