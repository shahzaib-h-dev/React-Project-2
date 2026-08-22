
import firstImage from "../assets/pro2.jpg"
import secondImage from"../assets/proj2.jpg"
import thirdImage from"../assets/project2.jpg"


export function PropsCreation(props: any) {
  return <>
<article className="contact-card">
        <img 
            src={firstImage} 
            alt="Profile" 
            className="main-image"
        />
        
        <h3>{props.name}</h3>
        
        <div className="info-group">
            <span className="icon">📞</span>
            <p>{props.phone}</p>
        </div>
        
        <div className="info-group">
            <span className="icon">✉️</span>
            <p>{props.email}</p>
        </div>
    </article>
  </>
 }
