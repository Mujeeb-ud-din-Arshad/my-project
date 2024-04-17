 "use client";
 import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  function handleback(){
    router.back()
  }
  function handleblog(){
    router.push("/blog")
  }
  
  return (
  <div>
    <div>
    <button className="bg-blue-500 rounded-sm p-5" onClick={handleback}> back</button> </div>
    <div>
    <button className="bg-yellow-500 rounded-sm p-5" onClick={handleblog}> go to blog page </button> </div>

    profile
    
  </div>
  )
}