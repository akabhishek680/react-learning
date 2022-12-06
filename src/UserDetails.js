import React from 'react';
import { useState } from 'react';

const UserDetails = () => {

    let [ email, setEmail ] = useState('');
    let [ address, setAddress ] = useState( { FlatNo: '1', City: 'New Delhi' } );

    let changeEmail = (e) => {
        setEmail(e.target.value);
    }

    let changeFlatNo = (e) => {
        setAddress({ ...address, FlatNo: e.target.value });
    }

    let changeCity = (e) => {
        setAddress({ ...address,  City: e.target.value });
    }

    return(
        <React.Fragment>

            <input value = { email } onChange = { changeEmail } placeholder = 'Enter user email address' />
            <input value = { address.FlatNo } onChange = { changeFlatNo } placeholder = 'Enter user flat no' />
            <input value = { address.City } onChange = { changeCity } placeholder = 'Enter user city name' />

            <h2>Flat No: { address.FlatNo }</h2>
            <h2>City Name: { address.City }</h2>

        </React.Fragment>
    )

}

export default UserDetails;