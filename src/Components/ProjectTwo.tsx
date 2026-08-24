import firstImage from "../assets/pro2.jpg"
import secondImage from"../assets/proj2.jpg"
import thirdImage from"../assets/project2.jpg"


export function ProjectTwo() {
  return (
   <div className="app-container">
     
      <header className="header">
        <span className="header-icon">🌍</span>
        <h1>my travel journal.</h1>
      </header>
      
      <main className="cards-list">
        
        <div className="card">
          <img src={firstImage} className="card-image" alt="Mount Fuji" />
          
          <div className="card-info">
            <div className="card-location-row">
              <span className="location-icon">📍</span>
              <span className="location-country">JAPAN</span>
              <a href="#" className="location-link">View on Google Maps</a>
            </div>
            
            <h2 className="card-title">Mount Fuji</h2>
            <p className="card-dates">12 Jan, 2021 - 24 Jan, 2021</p>
            <p className="card-desc">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
          </div>
        </div>

        <div className="card">
          <img src={secondImage} className="card-image" alt="Palm Trees" />
          
          <div className="card-info">
            <div className="card-location-row">
              <span className="location-icon">📍</span>
              <span className="location-country">CALIFORNIA</span>
              <a href="#" className="location-link">View on Google Maps</a>
            </div>
            
            <h2 className="card-title">Sunset Palms</h2>
            <p className="card-dates">15 Mar, 2021 - 22 Mar, 2021</p>
            <p className="card-desc">A description paragraph for this location. Just make it some text that describes your visit here, like how relaxing the sunset was or what you ate.</p>
          </div>
        </div>

        <div className="card">
          <img src={thirdImage} className="card-image" alt="Third Location" />
          
          <div className="card-info">
            <div className="card-location-row">
              <span className="location-icon">📍</span>
              <span className="location-country">ITALY</span>
              <a href="#" className="location-link">View on Google Maps</a>
            </div>
            
            <h2 className="card-title">Rome Colosseum</h2>
            <p className="card-dates">05 Jun, 2021 - 10 Jun, 2021</p>
            <p className="card-desc">A detailed description of the amazing Colosseum in Rome. You can add lots of details here about the history and your experience.</p>
          </div>
        </div>

      </main>
    </div>
  );
}





 