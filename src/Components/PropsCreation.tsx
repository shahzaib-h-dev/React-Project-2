
import firstImage from "../assets/pro2.jpg"
import secondImage from"../assets/proj2.jpg"
import thirdImage from"../assets/project2.jpg"


export function PropsCreation() {
  return <>
<article className="contact-card">
        <img 
            src={firstImage}
            alt="Photo of Mr. Whiskerson" 
            className="main-image"
        />
        
        <h3>Mr. Whiskerson</h3>
        
        <div className="info-group">
            <p>(212) 555-1234</p>
        </div>

        <div className="info-group">
            <p>mr.whiskaz@catnap.meow</p>
        </div>
    </article>
  </>
 }
