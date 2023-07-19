import {CurrentUser} from './CurrentUser';
import {UsersObjectType} from './HW2';

type UserList2PropsType = {
	users: any // пропиши типизацию
	filterUsers: any // пропиши типизацию
};

export const UserList2 = (props: UserList2PropsType) => {
	return (
		<div id={'hw02-users'}>
			<h2>User List:</h2>

			{/*<button id={'hw02-filter-button'} onClick={() => props.filterUsers}>SHOW ME FRIENDS FROM LA</button>*/}

			{/*<ul>*/}
			{/*  {props.users.myFriends.map((user) => (*/}
			{/*    <ВЫЗЫВАЕМ КОМПОНЕНТУ CurrentUser />*/}
			{/*  ))}*/}
			{/*</ul>*/}
		</div>
	);
};
