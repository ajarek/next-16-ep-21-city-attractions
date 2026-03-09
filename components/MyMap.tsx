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
import { Clock, ExternalLink, MapPin, Navigation, Star } from "lucide-react"
import { Button } from "./ui/button"

interface Place {
  id: number
  name: string
  label: string
  category: string
  rating: number
  reviews: number
  hours: string
  image: string
  lng: number
  lat: number
}

const place: Place = {
  id: 1,
  name: "Latarnia Morska",
  label: "Latarnia Morska",
  category: "Latarnia Morska",
  rating: 4.8,
  reviews: 12453,
  hours: "10:00 - 18:00",
  image: "/Latarnia_morska.jpg",
  lng: 15.554239,
  lat: 54.186395,
}

export function MyMap() {
  return (
    <Card className='h-[480px] w-[840px] p-0 overflow-hidden'>
      <Map center={[15.583267, 54.175919]} zoom={13} className='' theme='light'>
        <MapMarker key={place.id} longitude={place.lng} latitude={place.lat}>
          <MarkerContent>
            <MapPin color="red" className="size-6 cursor-pointer hover:scale-110 transition-transform" />
            <MarkerLabel position='bottom'>{place.label}</MarkerLabel>
          </MarkerContent>
          <MarkerPopup className='p-0 w-62'>
            <div className='relative h-32 overflow-hidden rounded-t-md'>
              <Image
                fill
                src={place.image}
                alt={place.name}
                className='object-cover'
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
                <Button size='sm' className='flex-1 h-8'>
                  <Navigation className='size-3.5 mr-1.5' />
                  Szczegóły
                </Button>
                <Button size='sm' variant='outline' className='h-8'>
                  <ExternalLink className='size-3.5' />
                </Button>
              </div>
            </div>
          </MarkerPopup>
        </MapMarker>
        <MapControls />
      </Map>
    </Card>
  )
}
