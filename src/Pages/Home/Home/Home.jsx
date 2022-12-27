import React from 'react';
import LeftSideBar from '../../../Components/LeftSideBar/LeftSideBar';
import RightSideBar from '../../../Components/RightSideBar/RightSideBar';

const Home = () => {
    return (
        <div className='flex'>
            <LeftSideBar/>
            <RightSideBar/>
        </div>
    );
};

export default Home;