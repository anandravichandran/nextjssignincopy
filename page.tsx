import Image from "next/image";
import LoginHero from "@/components/LoginHero";
import {FloatingNav} from "@/components/FloatingNav";
import LogupHero from "@/components/LogupHero";
export default function Home() {
  return (
   <main className="relative dark:bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
    <div className="max-w-7xl w-full">
    <LoginHero/>
    <FloatingNav/>
    {/* <LogupHero/> */}
    </div>
   </main>
  );
}
