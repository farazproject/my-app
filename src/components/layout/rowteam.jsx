import React from "react";

function RowTeam ({ children }){

    return (
        <div className="flex flex-col w-full">
            <div></div>
            <div className="flex gap-[1%] justify-between"> 
                {children}
            </div>
        </div>
    )
}

export default RowTeam