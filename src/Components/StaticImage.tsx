import umtLogo from "../assets/umt.png"

export function StaticImage(props:any) {
  return  (
  
   <main className="cards-list">
          
          <div className="card">
            <img src={umtLogo} className="card-image" alt="Mount Fuji" />
            
            <div className="card-info">
              <div className="card-location-row">
                <span className="location-icon">📍</span>
                <span className="location-country">JAPAN</span>
                <a href="#" className="location-link">View on Google Maps</a>
              </div>
              
              <h2 className="card-title">{props.country}</h2>
              <p className="card-dates">{props.date}</p>
              <p className="card-desc">{props.details}</p>
            </div>
          </div>
    </main>


  )
 }
