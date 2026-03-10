import { MyMap } from "@/components/MyMap";


export default function Home() {
  return (
    <div className=" min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center gap-4">
     <h1 className="text-2xl font-bold">Atrakcje turystyczne Kołobrzegu</h1>
        
        <MyMap />
      
    </div>
  );
}
