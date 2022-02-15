import CategoriesBox1 from '../categories_box/CategoriesBox';
import SearchBox1 from '../search_box1/SearchBox1';
import SortBox1 from '../sort_box1/SortBox1';
import './Products1TopBar.css';

const Products1TopBar = () => {
    return (
        <div className='products-1-top-bar'>
            <div className='products-1-top-bar-wrapper'>
                <div className='products1-box'>
                    <CategoriesBox1 />
                </div>
                <div className='products1-box'>
                    <SearchBox1 />
                </div>
                <div className='products1-box'>
                    <SortBox1 />
                </div>
            </div>
        </div>
    )
}

export default Products1TopBar;
