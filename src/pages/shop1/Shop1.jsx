//local
import './Shop1.css';
import NavBar1 from '../../components/navbar1/NavBar1';
import Products1 from '../../components/products1/Products1';

const Shop1 = () => {

    const selectedPage = 'shop';

    return (
        <div className="shop1">
            <NavBar1 selectedPage={selectedPage}/>
            <Products1 />
        </div>
    )
}

export default Shop1;