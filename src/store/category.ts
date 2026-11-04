import { create } from 'zustand'

type CategoriesType = {
	activeCategories: number
	setActiveCategories: (value: number) => void
}

export const useCategories = create<CategoriesType>(set => ({
	activeCategories: 0,
	setActiveCategories: value => set({ activeCategories: value }),
}))
