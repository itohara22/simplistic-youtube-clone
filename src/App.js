import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Feed from "./components/Feed";
import "./App.css";
import VideoPlayer from "./components/VideoPlayer";

function App() {
  const [pageNo, setPageNo] = useState(0);
  const [items, setItems] = useState([]);

  const nextHandler = () => {
    setPageNo((prevPage) => prevPage + 1);
  };
  const prevHandler = () => {
    if (pageNo !== 0) {
      setPageNo((prevPage) => prevPage - 1);
    }
  };

  useEffect(() => {
    fetch("https://internship-service.onrender.com/videos?page=" + pageNo)
      .then((res) => res.json())
      .then((jsonRes) => setItems(jsonRes.data.posts));
  }, [pageNo]);

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Feed items={items} />
              <div className="page_cntrl">
                <button onClick={prevHandler}>Prev</button>
                <span className="page_indicator">{pageNo + 1}</span>
                <button onClick={nextHandler}>Next</button>
              </div>
            </>
          }
        />
        <Route
          path="/video/:id"
          element={<VideoPlayer items={items} pageNo={pageNo} />}
        />
      </Routes>
    </>
  );
}

export default App;
