import './advertising.scss'
import { Link } from 'react-router-dom'

export const Advertising = () => {
	return (
		<div className='advertising'>
			<ul className='advertising-cards'>
				<li className='advertising-cards__item--one'>
					<aside className='bonus-banner'>
						<div className='bonus-banner__badge'>
							<span className='bonus-banner__big'>1+1</span>
							<span className='bonus-banner__sub'>вторая в подарок</span>
						</div>
						<div className='bonus-banner__content'>
							<h3>Закажи одну пиццу — вторую получи в подарок</h3>
							<p>
								Каждый вторник и четверг. Вторая пицца — любого размера, на
								выбор.
							</p>
							<Link to='/menu' className='bonus-banner__btn'>
								Выбрать пиццу
							</Link>
						</div>
					</aside>
				</li>
				<li className='advertising-cards__item--two'>
					<aside className='two-pizzas'>
						<h3 className='two-pizzas__title'>
							Закажи одну — вторая в подарок 🎁
						</h3>
						<p className='two-pizzas__sub'>
							По вторникам и четвергам. Вторая пицца — любого размера.
						</p>
						
						<Link to='/menu' className='two-pizzas__btn'>
							Выбрать две пиццы
						</Link>
					</aside>
				</li>
			</ul>
		</div>
	)
}

export default Advertising
