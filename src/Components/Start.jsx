import React from 'react';
import '../Start.css';
import UteBild from '../images/UteBild.jpeg';
import InneBild from '../images/InneBild.jpeg';
import VilaBild from '../images/VilaBild.jpeg';


const Start = (props) => {
    return (
        <section className="start-section">
            <div className="start-grid">


                <div className="grid-item">
                    <div className="item-content">
                        <div className="image-box">
                            <img src={UteBild} alt="Image 1" />
                        </div>
                        <div className="text-box">
                            <p>Golden Dogs är mer än bara ett hunddagis. Det är en fristad för våra fyrbenta vänner, en plats där de kan leka, lära sig och trivas medan du är borta. Vi förstår att din hund är en viktig medlem av din familj, och därför strävar vi efter att erbjuda den bästa omsorgen och upplevelsen för varje hund som går genom våra dörrar.</p>
                        </div>
                    </div>
                </div>

                <div className="grid-item">
                    <div className="item-content">
                        <div className="text-box">
                            <p>Vår anläggning är utrustad med toppmodern teknik för att säkerställa en säker och bekväm vistelse för våra gäster. Vi har stora lekytor inomhus och utomhus där hundar kan utforska och ha kul. Vi har också särskilda områden för vila och avskildhet för dem som behöver en paus från all aktivitet.</p>
                        </div>
                        <div className="image-box">
                            <img src={InneBild} alt="Image 1" />
                        </div>
                    </div>
                </div>


                <div className="grid-item">
                    <div className="item-content">
                        <div className="image-box">
                            <img src={VilaBild} alt="Image 1" />
                        </div>
                        <div className="text-box">
                            <p>På Golden Dogs är vår filosofi enkel - att skapa en kärleksfull och trygg miljö där din hund kan trivas och växa. Vi strävar efter att bli en förlängning av din egen familj och ge din hund den kärlek och omsorg den förtjänar.

                                Så när du behöver en pålitlig plats att ta hand om din hund när du är borta, tveka inte att kontakta oss på Hundens Paradis. Din hund kommer att bli en del av vår familj och njuta av en underbar tid fylld med lek, kärlek och äventyr.

                                Kom och besök oss idag och upplev skillnaden på Golden Dogs!

                            </p>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
}

export default Start;
