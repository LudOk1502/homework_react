import Address from "../address/Address";
import Company from "../company/Company";
import './User.css';
import {useState} from "react";

export default function User({user, choseUser}) {
    let [toggle, setToggle] = useState('hide');

    const oneClickUserChose = () => {
        choseUser(user);
    }
    const oneClickDetails = () => {
        if (toggle === 'hide') {
            setToggle('show');
        } else if (toggle === 'show') {
            setToggle('hide');
        }
    }

    return (
        <div>
            <h3>{user.id} {user.name}</h3>
            <div className={toggle}>
                <div>username: {user.username}</div>
                <div>email: {user.email}</div>
                <Address address={user.address}/>
                <div>phone: {user.phone}</div>
                <div>website: {user.website}</div>
                <Company company={user.company}/>
            </div>
            <div className={'buttons'}>
                <button onClick={oneClickDetails}>Details</button>
                <button onClick={oneClickUserChose}>Posts</button>
            </div>

        </div>
    );
}