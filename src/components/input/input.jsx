import React from "react";


function InputField({ id, label, onChange, type }) {


    return (
        
        <div className="flex justify-center items-center bg-gray-400 w-[400px] h-[50px] rounded-md m-[10px] ">
            <label className="block mb-1 font-semibold">  {label}  </label>
            
            <input id={id} onChange = {onChange} type={ type} className="border px-2 py-2 rounded bg-black border-ro"/> 
        
        </div>
        

      
           

        
    );
}

export default InputField;