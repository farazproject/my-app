import React from "react";


function InputField({ id, label, onChange, type, value }) {


    return (
        
        <div className="flex justify-center items-center bg-gray-400 w-[400px] h-[50px] rounded-md m-[10px]">
            <label className="block mb-1 font-semibold p-8">  {label}  </label>
            
            <input id={id} onChange = {onChange} value={value}  type={type} className="text-red-500 px-2 py-2 bg-white"/> 
        
        </div>
           

        
    );
}

export default InputField;