import '../CustomSelect.css';

const CategoriesBox1 = () => {
    return (
        <div className='cust-sel-box-1'>
            <p className='cust-sel-box-1-header'>choose category:</p>
            <div className='custom-select'>
                <select value="" placeholder='Select...' onChange={() => {}}>
                    <option value="all">All</option>
                    <option value="body">Body</option>
                    <option value="feet">Feet</option>
                    <option value="kids">Kids</option>
                    <option value="hair and face">H And F</option>
                </select>
                <span  className='custom-select-arrow'></span>
            </div>
        </div>
    )
}

export default CategoriesBox1;