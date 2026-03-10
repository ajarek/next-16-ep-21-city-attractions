"use client"
import {
  Map,
  MapControls,
  MapMarker,
  MarkerContent,
  MarkerLabel,
  MarkerPopup,
} from "@/components/ui/map"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { Clock, MapPin, Navigation, Star } from "lucide-react"
import { Button } from "./ui/button"
import { useTheme } from "next-themes"
import Link from "next/link"
import {attractionsData } from "@/data/attractionsData"
import type { Place } from "@/types/attractionsType"



export function MyMap() {
  const { theme } = useTheme()
  return (
    <Card className=' h-[480px] md:w-[840px] w-full p-0 overflow-hidden shadow-2xl'>
      <Map
        center={[15.583267, 54.175919]}
        zoom={13}
        
        theme={(theme as "light" | "dark") || "dark"}
      >
        {attractionsData.map((place: Place) => (
        <MapMarker key={place.id} longitude={place.lng} latitude={place.lat} >
          <MarkerContent >
            <MapPin
              color='red'
              className='size-6 cursor-pointer hover:scale-110 transition-transform'
            />
            <MarkerLabel position='bottom'>{place.label}</MarkerLabel>
          </MarkerContent>
          <MarkerPopup className=' p-0 w-62'>
            <div className='relative h-48 overflow-hidden rounded-t-md'>
              <Image
                fill
                src={place.image}
                alt={place.name}
                className='object-cover object-top'
              />
            </div>
            <div className='space-y-2 p-3'>
              <div>
                <span className='text-xs font-medium text-muted-foreground uppercase tracking-wide'>
                  {place.category}
                </span>
                <h3 className='font-semibold text-foreground leading-tight'>
                  {place.name}
                </h3>
              </div>
              <div className='flex items-center gap-3 text-sm'>
                <div className='flex items-center gap-1'>
                  <Star className='size-3.5 fill-amber-400 text-amber-400' />
                  <span className='font-medium'>{place.rating}</span>
                  <span className='text-muted-foreground'>
                    ({place.reviews})
                  </span>
                </div>
              </div>
              <div className='flex items-center gap-1.5 text-sm text-muted-foreground'>
                <Clock className='size-3.5' />
                <span>{place.hours}</span>
              </div>
              <div className='flex gap-2 pt-1'>
                <Button asChild size='sm' className='flex-1 h-8 bg-accent dark:text-black'>
                  <Link href={`/attractions/${place.id}`} className="flex items-center">
                    <Navigation className='size-3.5 mr-1.5' />
                    Szczegóły
                  </Link>
                </Button>
                
              </div>
            </div>
          </MarkerPopup>
        </MapMarker>
        ))}
        <MapControls />
      </Map>
    </Card>
  )
}
