//local
import './SearchBox1.css';

const SearchBox1 = ({ searchTerm }) => {
    return (
        <input 
            type='text' 
            placeholder='Search by Name'
            className='search-box-1-input'
            onChange={() => {}}
            value={searchTerm}
        />
    )
}

export default SearchBox1;