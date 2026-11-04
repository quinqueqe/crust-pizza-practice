import './item-menu.scss'

export type ItemMenuType = {
	name: string
	imageUrl: string
	categoryId: number
	price: number
	desc: string
}

export const ItemMenu = ({
	imageUrl,
	name,
	desc,
	price,
}: ItemMenuType) => {
	return (
		<div className='item-menu'>
			<img src={imageUrl} alt='img' />
			<h2>{name}</h2>
			<p>{desc}</p>
			<b>{price} ₽</b>
		</div>
	)
}
