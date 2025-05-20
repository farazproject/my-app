// "use client"

import Header from "@/components/header/header";
import Teams from "@/components/cards/teams";
import RowTeam from "@/components/layout/rowteam";
import{ Geist, Geist_Mono} from "next/font/google"


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});



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
  return (
    <div className="flex flex-col">
      
      <Header/>
      <p className="text-white bg-red">Tornament</p>
      <RowTeam>
        {/* {<Teams/>} */}
        {
          matches?.map((match, index) =>{
            return <Teams key={index} data={match}/>
          })
        }
      </RowTeam>
      
    </div>
  );
}
