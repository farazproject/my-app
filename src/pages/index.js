"use client"
import Image from "next/image";
import Header from "@/components/header/header";
import Teams from "@/components/cards/teams";



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
      stadiunName : "artifield Stadium"
    },
        {
      team1 : "Arsenal",
      team2 : "Liester city",
      league : "Premier League",
      time : "20:15",
      date : "Thu 07 Dec",
      stadiunName : "artifield Stadium"
    }
  ]




export default function Home() {
  return (
    <div className="flex flex-col">
      <Header/>
      <Teams/>

    </div>
  );
}
