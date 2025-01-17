import Link from "next/link"
import { Button } from "./ui/button"

const Sidebar = () => {
    return (
         <div className="pb-12">
            <div className="space-y-4 py-4">
                <div className="px-3 py-2">
                    <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                        Discover
                    </h2>
                    <div className="space-y-1">
                        {/*Gallery link*/}
                        <Link href={'/gallery'}>
                        <Button variant="ghost" className="w-full text-lg ">
                        <svg xmlns="http://www.w3.org/2000/svg"
                         fill="none" viewBox="0 0 24 24" 
                         strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-3">
  <path strokeLinecap="round"
   strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0
    1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18
     3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5
      0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 
      .375.375 0 0 1 .75 0Z" />
</svg>

                          Gallery
                        </Button>
                        </Link>
                       {/*album link*/}
                        <Link href={'#'}>
                        <Button variant="ghost" className="w-full text-lg ">
                        <svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  strokeWidth="1.5"
  stroke="currentColor"
  className="w-6 h-6 mr-3"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776"
  />
</svg>


                        Picture Albums
                        </Button>
                        </Link>
                        {/*favouritelink*/}
                        <Link href={'#'}>
                        <Button variant="ghost" className="w-full text-lg">
                        <svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  strokeWidth="1.5"
  stroke="currentColor"
  className="w-6 h-6 mr-3"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
  />
</svg>


                     Favourite
                        </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>)
}
            export default Sidebar