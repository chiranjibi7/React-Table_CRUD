import React from 'react';
import {useSelector} from 'react-redux';
import Profile from './Profile';

const UserProfiles = () => {

    const userData= useSelector(state=>state.userData.userData);

    return (userData.map((user,index)=> <Profile key={user.phone}
                name={user.name}
                email={user.email} 
                phone={user.phone}
                dob={user.dob}
                city={user.city}
                district={user.district}
                province={user.province}
                country={user.country}
                idx={index}
                />
    )  
    )
     
}

export default UserProfiles
