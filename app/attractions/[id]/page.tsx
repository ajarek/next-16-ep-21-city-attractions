import {attractionsData} from '@/data/attractionsData'
import type { Place } from "@/types/attractionsType"
import { Clock, HandCoins, Info } from 'lucide-react'
import Image from 'next/image'
const attractionsPage = async ({params}: {params: Promise<{id: string}>}) => {
    const {id} = await params
    const attraction = attractionsData.find((attraction: Place) => attraction.id === Number(id))
  return (
    <div className="min-h-[calc(100vh-4rem)] w-full grid grid-cols-1 md:grid-cols-2 gap-4 p-4 place-items-center">
      <div className="w-full flex justify-center items-center">
        <Image
          src={attraction?.image || ""}
          alt={attraction?.name || ""}
          width={500}
          height={500}
          className="object-cover object-top rounded-lg shadow-lg"
        />
      </div>
      <div className="flex flex-col gap-4 p-4">
        <h1 className="text-3xl font-bold">{attraction?.name}</h1>
        <p className="mt-2 text-xl"><Info /> Opis: {attraction?.description}</p>
        <p className="mt-2 text-xl"><Clock />Czynne: {attraction?.hours}</p>
        <p className="mt-2 text-xl"><HandCoins />Cena: {attraction?.price}</p>
      </div>
    </div>
  )
}

export default attractionsPage