
import { Helmet } from 'react-helmet-async';
import Navbar from '../../Components/Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../../Components/Shared/Footer/Footer';

const MainLayOut = () => {
      return (
            <>
                  <Helmet>
                        <title>Home | Rahim Badsa</title>
                  </Helmet>
                  <Navbar></Navbar>
                  <Outlet></Outlet>
                  <Footer></Footer>
            </>
      );
};

export default MainLayOut;