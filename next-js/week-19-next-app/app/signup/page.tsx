"use client"

import axios from "axios"
import { useState } from "react"
export default function Signup(){

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");



  return <>
  <input type="text" onChange={e=>{
    setUsername(e.target.value);
  }} />
  <input type="password" onChange={e=>{
    setPassword(e.target.value);
  }} />

<button onClick={
  ()=>{
    axios.post("http://localhost:3000/api/v1/user", {
      username,
      password
    })
  }
}>signup</button>

  </>
}