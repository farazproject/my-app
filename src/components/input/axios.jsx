import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react"; // Import useEffect from React library

function FetchingData(){            // Function component
    //const [users, setUsers] = useState([]);    // State to store the data
    const [users, setUsers] = useState([]);    // State to store the data

    const getData = () => {
        axios.get("https://jsonplaceholder.typicode.com/users") // API endpoint
        .then(res => {setUsers(res.data) // Set the state with the response data
            console.log(users);
        })
        .catch(err => console.log(err))
    };


      useEffect(() => {   // Hook to run the function when the component mounts
      getData();   // Call the function to fetch data
    }, []);    // Empty array means it will run only once when the component mounts
    


    return (
        <ul>
            {users.map((user) =>
            <li className="flex flex-row"> {user.name}  {user.phone}</li>
            )}
        </ul>
             )
}

export default FetchingData // Exporting the component
