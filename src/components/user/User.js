import Address from "../address/Address";
import Company from "../company/Company";

export default function User({item: user}) {
    return (
        <div>
            <h3 className={'name'}>{userItem.id} {userItem.name}</h3>
            <div>username: {userItem.username}</div>
            <div>email: {userItem.email}</div>
            <Address address={userItem.address}/>
            <div>phone: {userItem.phone}</div>
            <div>website: {userItem.website}</div>
            <Company company={userItem.company}/>
            <hr/>
        </div>
    );
}