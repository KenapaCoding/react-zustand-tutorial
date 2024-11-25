/** @format */

import { create } from 'zustand';

type User = {
	id: string;
	name: string;
	email: string;
};

type UserState = {
	users: User[];
	error: string | null;
	isLoading: boolean;
	fetchUser: () => Promise<void>;
};

const useUserStore = create<UserState>((set) => ({
	users: [],
	error: null,
	isLoading: false,
	fetchUser: async () => {
		try {
			set({ isLoading: true, error: null });
			const response = await fetch(
				'https://jsonplaceholder.typicode.com/users'
			);
            if(!response.ok) throw new Error('Failed to fetch users data')
            const data = await response.json()
            set({users:data})
		} catch (err :any) {
            set({error: err.message})
        } finally {
            set({isLoading:false})
        }
	},
}));

export default useUserStore
