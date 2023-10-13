import React, { useEffect, useState } from 'react';
import './Teachers.css';
import Data from './../../FakeData/FakeData.json';
import TeachersInfo from '../TeachersInfo/TeachersInfo';
import Wishlist from '../Wishlist/Wishlist';

const Teachers = () => {

    const [teachers, setTeachers] = useState([]);
    

    useEffect(() => {
        const newTeachers = Data;
        setTeachers(newTeachers);
    }, []);

    const [Tnumber, setTNumber] = useState([]);


    
    const handleAddWishlist = (teacher) => {
        const totalTeachers = [...Tnumber , teacher ];
        setTNumber(totalTeachers);
        console.log('clicked')
    }

    return (
        <div className='service'>
            <div className='teachers'>
                <h2 className='title'>Our Teachers List</h2>
                {
                    teachers.map(info => <TeachersInfo handleAddWishlist={handleAddWishlist} teachers={info} teacher={info} key={info.id}></TeachersInfo>)
                }
            </div>

            <div className='wishlist' >
                <div>
                    <h3 className='wishlist-title'>Your Wishlist</h3>
                </div>

                <div>
                    {/* <h4>Teachers you have added: {Tnumber.length} </h4> */}
                    <Wishlist wishlist = {Tnumber}></Wishlist>
                </div>


            </div>
        </div>
    );
};

export default Teachers;