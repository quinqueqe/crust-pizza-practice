import './Categories.scss'
import { categories } from './db/categories.ts'
import { useCategories } from '../../store'

export const Categories = () => {
	const { activeCategories, setActiveCategories } = useCategories()
	return (
		<div className='home-filter'>
			{categories.map((item, i: number) => (
				<button
					onClick={() => setActiveCategories(i)}
					className={
						activeCategories === i
							? 'home-filter-btn-active'
							: 'home-filter-btn'
					}
					key={i}
				>
					{item.name}
				</button>
			))}
		</div>
	)
}
