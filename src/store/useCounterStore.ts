import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type CounterStore = {
	count: number;
	increment: () => void;
	decrement: () => void;
};

// adaptor untuk session storage
const sessionStorageAdaptor = {
	getItem:(name:string) => {
		const value = sessionStorage.getItem(name)
		return value ? JSON.parse(value): null
	},
	setItem: (name:string, value:any) => {
		sessionStorage.setItem(name, JSON.stringify(value))
	},
	removeItem: (name:string) => {
		sessionStorage.removeItem(name)
	}
}

const useCounterStore = create(persist<CounterStore>((set) => ({
	count: 0,
	increment: () => set((state) => ({ count: state.count + 1 })),
	decrement: () => set((state) => ({ count: state.count - 1 })),
}), {
	name : 'counter-storage',
	storage : sessionStorageAdaptor
}))

export default useCounterStore;
