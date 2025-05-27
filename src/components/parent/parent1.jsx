import React, { useEffect, useState } from "react";
import axios from "axios";
import Child1 from "./child1";
import Child2 from "./child2";

function Parent() {
  const [data, setData] = useState([]);
  const [list, setLists] = useState([]);
  const [error, setError] = useState(null);
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    const getData = () => {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => {
          console.error(err);
          setError("Failed to fetch data");
        });
    };

    getData();
  }, []);

  const handleInputChange = (e) => {
 setSearchItem(e.target.value);
}
  
 const filteredList = data.filter((data) => data.name.toLowerCase().includes(searchItem.toLocaleLowerCase()));
 console.log(filteredList)

  return (
    <div>
        <input type="text" className="text-white" value={searchItem} onChange={handleInputChange}/>
      {error && <p>{error}</p>}
      <Child1 data={data} setList={(dat)=>{setLists(dat)}} />
      <Child2 lists={filteredList} />
    </div>
  );
}

export default Parent;
