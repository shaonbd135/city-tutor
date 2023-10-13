import React from 'react';
import './Wishlist.css'

const Wishlist = (props) => {
    const wishlist = props.wishlist;
    let salary = 0;
    for (let i = 0; i < wishlist.length; i++) {
        salary = salary + wishlist[i].salary;
    }

    let teachersName = [];
    for (let i = 0; i < wishlist.length; i++) {
        teachersName = [...teachersName, wishlist[i].full_name + ' -  ' + 'Salary : $' + wishlist[i].salary];
    }

    let discount = (salary / 100 * 30).toFixed(2);
    discount = parseFloat(discount)

    let grandTotal = (salary - discount).toFixed(2);
    grandTotal = parseFloat(grandTotal)

    return (
        <div>
            <div>
                <h4>Total Teachers you have added: {wishlist.length} </h4>
            </div>

            <div className='names'>
                {
                    teachersName.map(Tname => <p className='allnames'>{Tname}</p>)
                }
            </div>
            <div className='total'>
                <p>Total Salary : ${salary}</p>
                <p>Total Discount ( 30% off! ) : ${discount} </p>
                <p>Grand Total: ${grandTotal} </p>
                <button>Pay Now</button>
            </div>
        </div>
    );
};

export default Wishlist;