import React from "react";
import { useState } from "react";
import * as LungData from './data/lung_article_.json'
import SeachArticle from "./component/searchArticle";
import LungArticle from "./component/hideDisplayDetail";

const dataArray = Object.values(LungData)
// const LungArticleData = dataArray.slice(0,100);
const LungArticleData = dataArray;

const Article = () => {
    const [currentPage, setCurrentPage] = useState(1)
    //bộ lọc
    const [filterValue, setFilterValue] = useState('All');
    //search
    const [searchData, setSearchData] = useState(LungArticleData);
    // check search
    const [isSearch, setIsSearch] = useState(false);


    console.log(LungArticleData)

    const indexOfLastStudent =  currentPage* 5;
    const indexOfFirstStudent = indexOfLastStudent - 5;
    const paginate = (pageNumber: React.SetStateAction<number>) => setCurrentPage(pageNumber)

    const handleFilterChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setFilterValue(event.target.value);
        setIsSearch(false);
        paginate(1);
    };
    const filteredArticles = LungArticleData.filter((lung: { Category: string; }) => {
        if (filterValue === 'All') {
        return true;
        }
        return lung.Category === filterValue;
    });
    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(filteredArticles.length/5); i++ ){
        pageNumbers.push(i)
    }
    const currentArticle = filteredArticles.slice(indexOfFirstStudent, indexOfLastStudent)

    const pageNumberSearch = [];
    for(let i = 1; i <= Math.ceil(searchData.length/5); i++ ){
        pageNumberSearch.push(i)
    }
    
    const currentArticleSearch = searchData.slice(indexOfFirstStudent, indexOfLastStudent)
    return (
        <div >
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 140px 20px 140px'}}>
            <label style={{ marginRight: '15px', fontWeight: 'bold' }} htmlFor="filter">Tìm kiếm: </label>
            <div style={{ flex: 1 }}>
                <SeachArticle lungArticles={LungArticleData} setSearchData={setSearchData} setIsSearch={setIsSearch} paginate={paginate} />
            </div>
            { isSearch && searchData != null ?(
                <p style={{ flex: 1, textAlign: 'center', position: 'fixed', top: '0', right: '0' }}>
                {searchData.length}
                </p>
                ):(
                    <p style={{ flex: 1, textAlign: 'center', position: 'fixed', top: '0', right: '0' }}>
                {filteredArticles.length}
                </p>
                )
            }

            <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <label style={{ marginRight: '15px', fontWeight: 'bold' }} htmlFor="filter">Filter by Category:</label>
                <select style={{ width: '200px', padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }} id="filter" value={filterValue} onChange={handleFilterChange}>
                <option value="All">All</option>
                <option value="1">Liên quan đến gen đột biến</option>
                <option value="0">Không liên quan đến gen đột biến</option>
                </select>
            </div>
            </div>
            { isSearch ?(
                <LungArticle article={ currentArticleSearch }  />
                ):(
                    <LungArticle article={ currentArticle }  />
                )
            }
           
           <ul style={{ listStyle: "none", display: "flex", padding: "0", margin: "0" }}>

            { isSearch ? 
                (pageNumberSearch.map(number => (
                <li key={number} style={{ margin: "0 5px" }}>
                    <p onClick={() => paginate(number)} style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "30px", height: "30px", backgroundColor: "#f2f2f2", border: "1px solid #ccc", borderRadius: "5px", cursor: "pointer" }}>
                    {number}
                    </p>
                </li>
                ))):(
                    pageNumbers.map(number => (
                        <li key={number} style={{ margin: "0 5px" }}>
                            <p onClick={() => paginate(number)} style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "30px", height: "30px", backgroundColor: "#f2f2f2", border: "1px solid #ccc", borderRadius: "5px", cursor: "pointer" }}>
                            {number}
                            </p>
                        </li>
                        ))
                )
            }
            </ul>
        </div>

    );
}

export default Article;
