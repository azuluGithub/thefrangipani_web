//local imports
import NavBar1 from '../../components/navbar1/NavBar1';
import Header1 from "../../components/header1/Header1";
import About from './about/About';
import Testimony from './testimony/Testimony';
import ContactUs from './contact_us/ContactUs';
import Footer1 from '../../components/footer1/Footer1';

const Home1 = () => {

    const selectedPage = 'home';

    return (
        <>
            <NavBar1 selectedPage={selectedPage}/>
            <Header1 />
            <About />
            <Testimony />
            <ContactUs />
            <Footer1 />
        </>
    )
    
}

export default Home1;