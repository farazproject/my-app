import React, { useState, useEffect } from "react";


function Teams() {

        useEffect( () =>{
            console.log("Teams component mounted");
        }, [])





  return (
    <div className="max-w-[330] m-2 w-full text-black">
      <div className="flex-col">
        <div
          className="bg-green-900 relative h-[190px]"
          style={{ borderRadius: " 20px 20px 0px0px " }}>
          <div className="pl-3 flex absolute items-center gap-3 -bottom-[40px]">
            <div className="w-[100px] h-[100px] bg-purple-900 rounded-[50%]"></div>
            <p>VS</p>
            <div className="w-[100px] h-[100px] bg-purple-900 rounded-[50%]"></div>
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
          <h3 className="text-[18px] text-white">

            LiverPool vs Manchester City
          </h3>
          <div className="flex items-center gap-[10px]"> <span> Anfield Stadium</span></div>
          <div className="flex gap-2">
            <div className="flex items-center gap-[10px]">
              {/* <IoCalenderClearOutline/> */}
              <span> Thu 07 Dec</span>
            </div>
            <div className="flex items-center gap-[10px]">
              {/* <CiClock2/> */}
              <span>8:15 PM</span>
            </div>
          </div>
          <div className="flex items-center mt-2 justify-between">
            <h3>$399</h3>
            <button className="rounded-3xl bg-red-900 py-1 px-3 text-white text-[14px]">
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
