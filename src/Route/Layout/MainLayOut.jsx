import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../Components/Shared/Navbar/Navbar';

const MainLayOut = () => {
      return (
            <>
                  <Helmet>
                        <title>Home | Rahim Badsa</title>
                  </Helmet>
                  <Navbar></Navbar>
                  main layout
            </>
      );
};

export default MainLayOut;