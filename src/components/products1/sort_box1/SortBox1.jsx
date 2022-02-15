import '../CustomSelect.css';

const SortBox1 = () => {
    return (
        <div className='cust-sel-box-1'>
            <p className='cust-sel-box-1-header'>sort PRODUCTS:</p>
            <div className='custom-select'>
                <select value="" placeholder='Sort...' onChange={() => {}}>
                    <option value="asc">Newest</option>
                    <option value="desc">Oldest</option>
                </select>
                <span  className='custom-select-arrow'></span>
            </div>
        </div>
    )
}

export default SortBox1;
