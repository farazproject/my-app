import React, { useState, useEffect } from "react";

import {CiClock2} from 'react-icons/ci';
import { MdOutlineLocationOn } from "react-icons/md";
// import { IoCalenderClearOutline } from "react-icons/io5";


function Teams({data}) {

        useEffect( () =>{
          
        }, [])

        const [count, setCount] = useState(355);
        const increment = () =>{
            setCount(count + 1);
        }




  return (

    <div className="max-w-[30%] m-2 w-full text-black">
      <div className="flex flex-col">
        <div
          className="bg-green-900 relative h-[190px]"
          style={{ borderRadius: "20px 20px 0px 0px" }}>
          <div className="pl-3 flex absolute items-center gap-3 -bottom-[20px]">
            <div className="w-[70px] h-[70px] bg-purple-900 rounded-[50%]"></div>
            <p>VS</p>
            <div className="w-[70px] h-[70px] bg-purple-900 rounded-[50%]"></div>

          </div>
        </div>

        <div
          className="bg-white"
          style={{ borderRadius: "0px 0px 20px 20px " }}>
        <div className="flex flex-col p-3 mt-[50px]">
          <p>
            <span className="bg-blue-300 rounded-2xl py-[2px] px-[10px] text-[14px]">
              Premier League
            </span>
          </p>

          <h3 className="text-[18px]">

            {data.team1} vs {data.team2}
          </h3>
          <div className="flex items-center gap-[10px]"> 
            <MdOutlineLocationOn />

            <span> {data?.stadiumName}</span></div>

          <div className="flex gap-2">
            <div className="flex items-center gap-[10px]">
              {/* <IoCalenderClearOutline/> */}
              <span> Thu 07 Dec</span>
            </div>
            <div className="flex items-center gap-[10px]">

              <CiClock2/>

              <span>8:15 PM</span>
            </div>
          </div>
          <div className="flex items-center mt-2 justify-between">

            <h3>${count}</h3>
            <button 
            onClick={increment}
            className="rounded-3xl bg-red-900 py-1 px-3 text-white text-[14px]">
              Book
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teams;
