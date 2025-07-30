'use client'

import {TextInput} from "@repo/ui/text-input"
import { useRouter } from "next/navigation";

export default function Home() {
const router = useRouter()

  return (
    <>
   <div>
<TextInput placeholder="input" size="big"></TextInput>
   </div>
   <button onClick={()=>{
    router.push("/chat/123")
   }}>click</button>
   </>
  );
}
