import './header.scss'
import logo from '../../assets/favicon.ico'
import { Link, useLocation } from 'react-router'

const Header = () => {
	const location = useLocation()

	const linksDb = [
		{
			link: 'Главная',
			parthname: '/',
		},
		{
			link: 'Меню',
			parthname: '/menu',
		},
		{
			link: 'Бронирование',
			parthname: '/reservation',
		},
		{
			link: 'Контакты',
			parthname: '/contacts',
		},
	]
	return (
		<header className='header container'>
			<div className='header-logo'>
				<Link to='/'>
					<img src={logo} alt='logo' className='header-logo__img' />
				</Link>

				<Link to='/'>
					<h2 className='header-logo__title'>CRUST PIZZA</h2>
					<p>самая вкусная пицца во вселенной</p>
				</Link>
			</div>

			<ul className='header-nav'>
				{linksDb.map(item => (
					<li key={item.parthname}>
						<Link
							className={
								item.parthname === location.pathname
									? 'header-nav__link-active'
									: 'header-nav__link'
							}
							to={item.parthname}
						>
							{item.link}
						</Link>
					</li>
				))}
			</ul>
		</header>
	)
}

export default Header
