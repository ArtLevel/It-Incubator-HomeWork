import {UserType} from './HW2';

type CurrentUserPropsType = {
	user: UserType
};

export const CurrentUser = (props: CurrentUserPropsType) => {
	return (
		<li id={`hw02-user-${props.user.id}`}>
			<strong>{props.user.name}</strong> (Age: {props.user.age})<strong> Address: </strong>
			{props.user.address.street}, {props.user.address.city}
		</li>
	);
};
