

import { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/products/1') // API call
      .then(res => res.json()) // Convert response to JSON
      .then(json => setData(json)); // Set JSON response to state
  }, []);

  return (
    <div>
      {data ? JSON.stringify(data) : "Loading..."} {/* Display data or a loading message */}
    </div>
  );
};

export default App;

///api means 8 number line api call korechi 
//9 number line api call korar por je response peye chi seta json a convert korechi 
//10 number line a sei json pelem seta state er modde set kore diye chi 
