import React from "react";

function Child2 ({lists}) {

     

    console.log(lists);



    return (
        <div className="bg-blue-300"> 
            <ul>
                {lists?.map((list) => (
                    <li> {list.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default Child2;