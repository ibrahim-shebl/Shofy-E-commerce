import React from "react";
import ReactPaginate from "react-paginate";

const Pagenation = ({ pageCount, handlePageClick, currentPage }) => {
  return (
    <div className="flex flex-col md:flex-row justify-center md:justify-between items-center">
      <ReactPaginate
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}   
        marginPagesDisplayed={2}  
        pageCount={pageCount}
        containerClassName="flex text-base font-semibold py-10"
        pageLinkClassName="w-9 h-9 border border-lightColor hover:border-gray-500 duration-300 flex justify-center items-center"
        pageClassName="mr-6"
        activeClassName="bg-black text-white"
        forcePage={currentPage - 1}  
        previousLabel={null}   
        nextLabel={null}       
      />
    </div>
  );
};

export default Pagenation;
