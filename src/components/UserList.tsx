/** @format */

import  { useEffect } from 'react';
import useUserStore from '../store/useUserStore';

const UserList = () => {
	const { users, error, isLoading, fetchUser } = useUserStore();

    useEffect(()=>{
        fetchUser()
    }, [fetchUser])

	if (isLoading) return <h1>Loading Fetching Users Data ...</h1>;
	if (error) return <h1>Error: {error}</h1>;

	return (
		<div>
			<h1>User List</h1>
            <ul>
                {users.map((u)=> (<li key={u.id}>{u.name} - {u.email}</li>))}
            </ul>
		</div>
	);
};

export default UserList;
