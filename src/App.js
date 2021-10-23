import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [idea, setIdea] = useState("");
  const [isloading, setIsLoading] = useState();

  const fetchData = () => {
    setIsLoading(true);
    fetch("https://www.boredapi.com/api/activity/")
      .then((response) => response.json())
      .then((data) => {
        setIdea(data.activity);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <div className="boredom">
        <div className="heading">
          <p>Purge Boredom </p>
        </div>
        <div className="container">
          <p className="idea">{isloading ? "Loading.." : idea}</p>
          <button className="button" onClick={fetchData}>
            New Idea💭
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
