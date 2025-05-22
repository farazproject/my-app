import React from "react";

function Navlink({name}){

        const props = true 
        const isValid = props == null? "yes" : "no"

        
        //undefined
        //null
        //NaN

        return(
            <li className="text-black">
                {name}
            </li>
        )
}


export default Navlink
