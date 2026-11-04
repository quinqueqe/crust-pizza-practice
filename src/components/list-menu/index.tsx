import { Categories } from '../categories'
import { ItemMenu } from '../item-menu'
import { menuData } from './db'
import { useCategories } from '../../store'
import './list-menu.scss'

const ListMenu = () => {
	const { activeCategories } = useCategories()
	return (
		<div className='list-menu section container'>
			<Categories />

			<ul className='cards-menu'>
				{menuData
					.filter(
						item =>
							activeCategories === 0 || item.categoryId === activeCategories,
					)
					.map(item => (
						<ItemMenu key={item.id} {...item} />
					))}
			</ul>
		</div>
	)
}

export default ListMenu