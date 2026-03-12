"use client"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ArrowRight, List, Mail } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { attractionsData } from "@/data/attractionsData"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function SheetNav() {
  const pathname = usePathname()
  return (
    <Sheet>
      <Tooltip>
        <SheetTrigger asChild>
          <TooltipTrigger asChild>
            <List className='size-6 cursor-pointer text-accent ' />
          </TooltipTrigger>
        </SheetTrigger>
        <TooltipContent>
          <p>Lista Atrakcji</p>
        </TooltipContent>
      </Tooltip>
      <SheetContent className='  opacity-75 overflow-y-auto sheet-content'>
        <SheetHeader>
          <SheetTitle className='text-xl font-semibold underline underline-offset-4'>
            Lista Atrakcji
          </SheetTitle>
        </SheetHeader>
        <div className='flex flex-col items-start gap-4 text-xl italic font-semibold p-4'>
          <Button asChild className=' text-xl text-black font-semibold w-fit'>
            <Link href='/'>
              <>
                <span>Wróć do mapy</span>
                <ArrowRight className='size-6' />
              </>
            </Link>
          </Button>
          {attractionsData
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((attraction) => (
              <Link
                key={attraction.id}
                href={`/attractions/${attraction.id}`}
                className={`text-lg ${pathname === `/attraction/${attraction.id}` ? "text-accent" : ""} transition-colors hover:text-accent`}
              >
                {attraction.name}
              </Link>
            ))}

          <div className='flex flex-col gap-8 lg:gap-12'></div>
        </div>
        <SheetFooter>
          
            <Link
              href='mailto:ajarek@poczta.onet.pl'
              className='flex items-center gap-2 text-lg text-accent font-semibold w-fit'
            >
              <Mail className='size-6' />
              <span className="text-accent">Kontakt</span>
            </Link>
          
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
