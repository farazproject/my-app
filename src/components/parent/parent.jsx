import React from "react";
import axios from "axios";
import { useEffect } from "react";  

function Parent (){

    const [data, setData] = useState([]);
    const [list, setList] = useState([]);

    const getData = () => {
        axios.get("https://jsonplaceholder.typicode.com/users") // API endpoint
        .then(res => {setUsers(res.data) // Set the state with the response data
            
        })
        .catch(err => console.log(err))

        useEffect(() => {   // Hook to run the function when the component mounts
              getData();   // Call the function to fetch data
            }, []); 



    return( console.log("something."))
}
}

export default Parent