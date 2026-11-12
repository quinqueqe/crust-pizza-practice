import './aboutUs.scss'
import Advertising from '../advertising'

const AboutUs = () => {
	return (
		<section className='aboutUs section container'>
			<div className='aboutUs-top'>
				<h1>Добро пожаловать в Crust Pizza</h1>
				<p>
					Мы — небольшая семейная пиццерия в центре города. Наша фишка — тесто
					на закваске, которое настаивается 48 часов: благодаря этому корж
					получается тонким, лёгким и хрустящим по краям. Печём в дровяной печи
					при 450°C — как в Неаполе. Мы верим, что пицца — это просто, быстро и
					честно: свежие продукты, никаких консервантов и щедрая порция сыра.
				</p>
			</div>

			<Advertising />

			<div className='aboutUs-bot'>
				<p>
					<span>Кухня:</span> итальянская, неаполитанская пицца + авторские
					начинки
				</p>
				<p>
					<span>Средний чек:</span> 600–900 ₽
				</p>
				<p>
					<span>Часы работы:</span> 11:00–23:00
				</p>
				<p>
					<span>Адрес:</span> г.Краснодар, ул. Пушкина, 15
				</p>
			</div>
		</section>
	)
}

export default AboutUs
