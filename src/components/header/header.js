import MenuComponent from "../menu/menu";

import "../../styles/header/header.css";

export default function Header() {
  return (
        <section className="showcase"> 
        <header>
        <img className="logo" src="media/images/logo-tom.png" alt="logo" />
        <MenuComponent />
        </header>
        <video src='media/video/header2.mp4' muted loop autoPlay></video>
        <div className="text">
          <h2>Introducing</h2> 
          <h3>The Tomato</h3>
          <p>The tomato is the edible berry of the plant Solanum lycopersicum,
            commonly known as a tomato plant. The species originated in western
            South America and Central America. The Nahuatl word tomatl gave rise
            to the Spanish word tomate, from which the English word tomato
            derived.</p>
          <a href="/">Get Notified</a>
        </div>
          <img className="mouse-icon" src="media/images/mouse.svg" alt="mouse-icon" />
      </section>
  );
}


