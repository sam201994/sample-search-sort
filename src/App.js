import React, { useState } from "react";
import Card from "components/Card";
import SearchBox from "components/SearchBox";
import { MAX_RESULTS_PER_PAGE, SAMPLE_DATA, getTotlaPages } from "utils";
import "./styles.css";

export default function App() {
  const allData = SAMPLE_DATA;
  const [data, setData] = useState(allData);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(getTotlaPages(allData));

  const onSubmitSearch = (searchTerm) => {
    if (searchTerm === "") {
      setData(allData);
      return;
    }
    const newData = allData.filter((item) => {
      return (
        item?.name?.toLowerCase()?.includes(searchTerm.toLowerCase()) ||
        item?.description?.toLowerCase()?.includes(searchTerm?.toLowerCase())
      );
    });
    setData(newData);
    setCurrentPage(0);
    setTotalPages(getTotlaPages(newData));
  };

  const gotoNextPage = () => {
    if (currentPage !== totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const gotoPrevPage = () => {
    if (currentPage !== 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const gotoFirstPage = () => {
    if (currentPage !== 0) {
      setCurrentPage(0);
    }
  };

  const gotoLastPage = () => {
    if (currentPage !== totalPages) {
      setCurrentPage(totalPages);
    }
  };

  const renderHeader = () => {
    return (
      <div style={{ marginBottom: "1rem" }}>
        <div>
          <SearchBox onSubmitSearch={onSubmitSearch} />
        </div>
      </div>
    );
  };

  const renderCards = () => {
    const startIndex = currentPage * MAX_RESULTS_PER_PAGE;
    const endIndex = startIndex + MAX_RESULTS_PER_PAGE;
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {data.slice(startIndex, endIndex).map((item) => {
          return <Card data={item} />;
        })}
      </div>
    );
  };

  const renderFooter = () => {
    console.log("currentPage", currentPage);
    return (
      <div
        style={{
          justifyContent: "center",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div
          style={{
            margin: "1rem",
            color: currentPage === 0 ? "lightgrey" : "black",
            cursor: currentPage === 0 ? "default" : "pointer",
          }}
          disabled={currentPage === 0}
          onClick={gotoFirstPage}
        >
          {"<<"}
        </div>
        <div
          style={{
            margin: "1rem",
            color: currentPage === 0 ? "lightgrey" : "black",
            cursor: currentPage === 0 ? "default" : "pointer",
          }}
          disabled={currentPage === 0}
          onClick={gotoPrevPage}
        >
          {"<"}
        </div>
        <div style={{ margin: "1rem", color: "blue" }}>{currentPage}</div>
        <div
          style={{
            margin: "1rem",
            cursor: currentPage === totalPages ? "default" : "pointer",
            color: currentPage === totalPages ? "lightgrey" : "black",
          }}
          disabled={currentPage === totalPages}
          onClick={gotoNextPage}
        >
          {">"}
        </div>

        <div
          style={{
            margin: "1rem",
            cursor: currentPage === totalPages ? "default" : "pointer",
            color: currentPage === totalPages ? "lightgrey" : "black",
          }}
          disabled={currentPage === totalPages}
          onClick={gotoLastPage}
        >
          {">>"}
        </div>
      </div>
    );
  };

  return (
    <div className="app">
      {renderHeader()}
      {renderCards()}
      {renderFooter()}
    </div>
  );
}
