
import firstImage from "../assets/pro2.jpg"
import secondImage from"../assets/proj2.jpg"
import thirdImage from"../assets/project2.jpg"
import { PropsCreation } from "./PropsCreation"


export function PropUse() {
  return <>
<div className="cards-container">
    <PropsCreation

      img={firstImage}
      name="mr. Whiskerson"
      phone= "(212) 555-123"
      email= "mr.whiskaz@catnap.meow"
    />
    <PropsCreation

     img={secondImage}
      name="mr. Whis"
      phone= "(212) 555-1234"
      email= "mr.whiskaz@catnap.meow"
    />
    <PropsCreation 

     img={thirdImage}
      name="mr. Whisk"
      phone= "(212) 555-134"
      email= "mr.whiskaz@catnap.meow"
    />
    <PropsCreation  
     img={firstImage}
      name="mr. kerson"
      phone= "(212) 555-234"
      email= "mr.whiskaz@catnap.meow"
    />
  </div>
  </>
 }
