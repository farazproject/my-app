import React from "react";


function Child1 ({data,setList}) {
    
const SetData= ()=>{
    setList(data)
}

    return (
        <div >
            <button onClick={(e => {
                SetData()
            })}>
                Click me
            </button>
        </div>
    )
}


export default Child1;