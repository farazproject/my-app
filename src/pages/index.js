
// "use client"
import { useState } from "react";

import Header from "@/components/header/header";
import Teams from "@/components/cards/teams";
import RowTeam from "@/components/layout/rowteam";
import InputField from "@/components/input/input";
import ControlledInput from "@/components/input/controlled";
import UncontrolledInput from "@/components/input/uncontrolled";
import FetchingData from "@/components/input/axios";
import{ Geist, Geist_Mono} from "next/font/google"
import Parent from "../components/parent/parent1";





  const matches =[
    {
      team1 : "Liverpool",
      team2 : "Manchester City",
      league : "Premier League",
      time : "20:15",
      date : "Thu 07 Dec",
      stadiunName : "artifield Stadium"
    },
        {
      team1 : "chelsia",
      team2 : "manchester united",
      league : "Premier League",
      time : "20:15",
      date : "Thu 07 Dec",
      stadiunName : "old trafford Stadium"
    },
        {
      team1 : "Arsenal",
      team2 : "Liester city",
      league : "Premier League",
      time : "20:15",
      date : "Thu 07 Dec",
      stadiunName : "la costa Stadium"
    }
  ]




export default function Home() {


  const [userData, setData] = useState ({
    email:"abc",
    password:""
})







  return (

    <div className="flex flex-col">
      
      {/* <Header/> */}
      <Parent/>
      
<Parent/>      {/* <RowTeam>
        {
          matches?.map((match, index) =>{
            return <Teams key={index} data={match}/>
          })


        }
      </RowTeam> */}
{/*         
      <InputField id={'email'} label={"email"} value ={userData.email} onChange={(e)=> {
        setData({...userData, email:e.target.value})
        console.log(e.target.value)
        }} /> */}

      {/* <InputField id={'password'} label={"password"} type={"password"} value ={userData.password} onChange={(e) => {
        setData({...userData, password:e.target.value})
        console.log(userData.password)
      }}/>

      <ControlledInput/>
      <UncontrolledInput/>

      <FetchingData/> */}

      
      
     
      
    </div>

    

  
  );
}
