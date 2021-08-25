export default function User({user, history}) {
    let onDetailsClick = () => {
        history.push('/users/' + user.id, user)
    };
    return (
        <div className={'user'}>
            {user.id}.{user.name}
            <button className={'btn_user_details'} onClick={onDetailsClick}>Details</button>

        </div>
    );
}