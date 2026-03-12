import Image from "next/image"
import { ModeToggle } from "./ModeToggle"
import Link from "next/link"
import { SheetNav } from "./SheetNav"

const Navbar = () => {
  return (
    <div className="h-16 w-full max-w-8xl mx-auto border-b-2 border-primary flex justify-between items-center px-4">
        <Link href="/" className="flex items-center gap-2">
            <div className="relative w-16 h-16">
                <Image src="/logo.png" alt="Logo" width={575} height={431} className="w-full h-full object-cover" />
            </div>
            <h1 className="text-2xl text-accent font-bold ">Kołobrzeg - Atrakcje</h1>
        </Link>
        <div className="flex items-center gap-4">
         <SheetNav />
        <ModeToggle />
        </div>
    </div>
  )
}

export default Navbar