import React, { useState } from "react";
import { Pagination, Select } from "antd";
import * as lung_article from "./dataArticle/lung_article_.json";
import * as colorectal_article from "./dataArticle/colorectal_article_.json";
import * as hepatocellular_article from "./dataArticle/hepatocellular_article_.json";
import * as breast_article from "./dataArticle/breast_article_.json";
import * as thyroid_article from "./dataArticle/thyroid_article_.json";
import Article from "./component/displayArticle";
import SeachArticle from "./component/searchArticle";
import { PageContainer } from "@ant-design/pro-components";
import { currentPage as locPage } from '@/shared/CurrentPage';


const { Option } = Select;

interface article {
  Index2: string | number,
  PMID: string | number,
  Article_citation: string,
  Heading_title: string,
  Authors?: string,
  Affiliation?: string,
  Identifiers: string,
  Abstract: string,
  Category: string | number,
}
let articleData: article[] = [];


const PaginationArticle = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filterValue, setFilterValue] = useState("All");
  const [searchData, setSearchData] = useState<article[]>([]);
  const [isSearch, setIsSearch] = useState(false);

  const locationPage = locPage(location.pathname);

  switch (locationPage) {
    case 'lungCancerPage':
      articleData = lung_article as article[];
      break;
    case 'liverCancerPage':
      articleData = hepatocellular_article as article[];
      break;
    case 'breastCancerPage':
      articleData = breast_article as article[];
      break;
    case 'thyroidCancerPage':
      articleData = thyroid_article as article[];
      break;
    case 'colorectalCancerPage':
      articleData = colorectal_article as article[];
      break;
    default:
      articleData = [];
      break;
  }

  const articleConverted = Object.values(articleData);
  const pageSize = 5;

  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };

  const handleFilterChange = (value: any) => {
    setFilterValue(value);
    setIsSearch(false);
    setCurrentPage(1);
  };

  const handleSearchDataChange = (data: any) => {
    setSearchData(data);
    setIsSearch(true);
    setCurrentPage(1);
  };
  const filteredArticles = articleConverted.filter((article) => {
    if (filterValue === "All") {
      return true;
    }
    return article.Category === parseInt(filterValue, 10);
  });

  const currentArticle = filteredArticles.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const totalItems = isSearch ? searchData.length : filteredArticles.length;
  const currentArticleSearch = searchData.slice((currentPage - 1) * pageSize, currentPage * pageSize)

  return (
    <PageContainer>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <div style={{ flex: 1 }}>
            <SeachArticle
              Articles={articleConverted}
              setSearchData={handleSearchDataChange}
              setIsSearch={setIsSearch}
              paginate={handlePageChange}
            />
          </div>
          <p
            style={{
              flex: 1,
              textAlign: "center",
              position: "fixed",
              top: "0",
              right: "0",
            }}
          >
            {totalItems}
          </p>
          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <label
              style={{ marginRight: "10px", fontWeight: "bold" }}
              htmlFor="filter"
            >
              Filter by Category:
            </label>
            <Select
              id="filter"
              style={{ width: "200px" }}
              value={filterValue}
              onChange={handleFilterChange}
            >
              <Option value="All">All</Option>
              <Option value="1">Liên quan đến gen đột biến</Option>
              <Option value="0">Không liên quan đến gen đột biến</Option>
            </Select>
          </div>
        </div>
        { isSearch ?(
                  <Article article={currentArticleSearch}  />
                  ):(
                    <Article article={currentArticle} />
                  )
              }
        
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Pagination
            current={currentPage}
            pageSize={pageSize}
            total={totalItems}
            onChange={handlePageChange}
          />
        </div>
      </div>
    </PageContainer>
  );
}

export default PaginationArticle;
