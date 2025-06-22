import axios from "axios"
import Link from "next/link"

export default async function userpage(){
 const response = await axios.get("http://localhost:3000/api/v1/details")
 
 const data = response.data; 

  return <h1 >
     <Link href={"/signup"}></Link>
    {data.name}</h1>
}