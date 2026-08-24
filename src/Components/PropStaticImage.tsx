import { main } from "bun"
import umtLogo from "../assets/umt.png"
import { StaticImage } from "./StaticImage"

export function PropStaticImage() {
  return  (<>
  <main>

  <StaticImage

     img={{umtLogo}}
     title="Mount Fuji" 
     country="Japan" 
     date="12 Jan, 2021 - 24 Jan, 2021"
     details="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
     />
     
  </main>

  </>
  )
 }


