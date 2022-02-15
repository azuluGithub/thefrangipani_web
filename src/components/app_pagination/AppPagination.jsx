//npm imports
import ReactPaginate from 'react-paginate';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

//local imports
import './AppPagination.css';

/**
 * PAGINATION CLIENT:
 * # setPage when pagination link is clicked
 * # calculate page-count to show how many pages are needed
 * # use totalItems and itemsPerPage to calculate page-count
 */

/**
 * PAGINATION SERVER:
 * # calcute total documents [totalItems]
 * # use itemsPerPage as limit()
 * # use skip to skip viewed pages
 */

const AppPagination = ({ totalItems, setPage, itemsPerPage }) => {
   
    //NB: COMMENTED OUT FOR TESTING
    //number of pagination links 
    //const pageCount = Math.ceil(totalItems / itemsPerPage);

    const pageCount = 4;
    /**
     * const changePage = ({ selected }) => setPage(selected);
     */
    return (
        <div className='app-pagination-container'>
            <ReactPaginate
                previousLabel={<FaChevronLeft className="pagination-arrow-icon"/>}
                nextLabel={<FaChevronRight className="pagination-arrow-icon"/>}
                pageCount={pageCount}
                onPageChange={(selected) => setPage(selected)}
                containerClassName={"paginationButtons"}
                previousLinkClassName={"previousButton"}
                nextLinkClassName={"nextButton"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
            />
        </div>
    )
}

export default AppPagination;