type AddressType = {
	street: string,
	city: string
};

type UserType = {
	id: number,
	name: string,
	age: number,
	address: AddressType
};

type UserListPropsType = {
	users: UserType[];
};

export const UserList = (props: UserListPropsType) => {
	return (
		<div id={'hw01-users'}>
			<h2>User List:</h2>

			<ul>
				{props.users.map((user) => (
					<li key={user.id} id={`hw01-user-${user.id}`}>
						<strong>{user.name}</strong> (Age: {user.age})<strong> Address:</strong>
						{user.address.street}, {user.address.city}
					</li>
				))}
			</ul>
		</div>
	);
};
