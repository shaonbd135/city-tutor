import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className='header'>

            <div className="text-area">
                <h2>City Tutors</h2>
                <p>is the first online tutoring website. A student can easily pick a tutor whose details are
                    shared on the site along with the total fee he/she will charge per month</p>
                <img src="https://images.ctfassets.net/p0qf7j048i0q/599C41259E6A4444BB7E1CBB24D1BB81/cd75bc40999bf5a1dca2fae66cc8c144/i609086966.jpg" alt="" />

            </div>

            <div className="box-area">
                <div>
                    <h3>We have our Best Teachers for you</h3>

                </div>
                <div className='box-area2'>
                    <h2>Popular Courses</h2>
                    <ul>
                        <li>Bangla</li>
                        <li>English</li>
                        <li>Mathmetics</li>
                        <li>Physics</li>
                        <li>Chemistry</li>
                    </ul>
                </div>
                <div className='reg'>
                    <p>
                        Registration on going | 30% Off
                    </p>
                    <p>
                        10 Days Left !
                    </p>
                </div>
                


            </div>


        </div>
    );
};

export default Header;