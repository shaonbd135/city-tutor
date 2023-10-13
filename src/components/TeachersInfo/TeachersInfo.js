import React from 'react';
import './TeachersInfo.css'

const TeachersInfo = (props) => {

    const {full_name,email,salary,address} = props.teachers;
    

    return (
        <div className='teachers-info'>
            <div className='profile-image'>
                <img src={props.teachers.image} alt="" />
            </div>

            <div className='profile-info'>
                <p>Name: {full_name}</p>
                <p>Email: {email}</p>
                <p>address: {address}</p>
                <p className='salary'>Salary: ${salary}</p>
                <button onClick={() => props.handleAddWishlist(props.teacher)}>Add to wishlist</button>
            </div>
        </div>
    );
};

export default TeachersInfo;