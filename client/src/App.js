import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/test')
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="App">
      {data ? <h1>{data.data}</h1> : <h1>Loading...</h1>}
    </div>
  );
}

export default App;
