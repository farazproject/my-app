import React from "react";
import { useRef } from "react";

function UncontrolledInput ({}){
   
   const InputRef = useRef(null);   // Create a ref to the input element

   const handleSubmit =(e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    
    console.log(InputRef.current.value); // Access the input value using the ref
   }
   
   
   
   
   
   
   
    return (       

        <div>  Uncontrolled Input
            
        
        
        
        

<form class="max-w-md mx-auto">
 
    
   

  <input ref={InputRef} className="bg-white text-black" placeholder="enter input"></input>   {/* Assign the ref to the input element */}
  <button type="submit" onClick={handleSubmit}   class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    Submit</button> {/* Call the handleSubmit function when the button is clicked */}
</form>
</div>
       
    );
}


export default UncontrolledInput