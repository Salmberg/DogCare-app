import React from 'react';
import '../Services.css'; // Du kan skapa en Services.css-fil för att styla din tjänstesida

const Services = (props) => {
  return (
    <section className="services">
      <h3>Våra tjänster</h3>
      <div className="service-container">
        <div className="service">
          <h4 id="Daycare-label">Hunddagis</h4>
          <p>2 Dagar i veckan: 2000kr/mån <br />
            <br />
            3 Dagar i veckan: 3000kr/mån <br />
            <br />
            Heltid: 4000kr/mån</p>
        </div>
        <div className="service">
          <h4>Klippning</h4>
          <p>När du väljer att klippa din hund hos oss så skämmer du bort din hund med ett riktigt hundspa. En klippning sker alltid på hundens villkor och det viktigaste för oss är att ni ska känna er trygga och nöjda hos oss. Beroende på vilken ras din hund är så finns det olika typer av klippningar att välja på, i vårt bokningssystem ser du exakt vilka olika hundklippningar som finns tillgängliga för din vovve. <br />
            <br />

            <h4>Vid en klippning ingår:</h4>
            <li> Föning
            </li>
            <li> Kamning och tovutredning
            </li>
            <li> Frisering
            </li>
            <li> Frisering av tassarna
            </li>
            <li> Kloklippning
            </li>

            <h4>Pris från 749kr</h4>

          </p>
        </div>
        <div className="service">
          <h4>Kloklippning</h4>
          <p>Att klippa klorna ingår i våra husdjurs skötselrutiner och hos oss på Golden Dogs är du välkommen med både hund, katt och smådjur för att klippa klorna. Vi klipper klorna omsorgsfullt till en lämplig längd och filar ner alla vassa kanter. Vi tar även hand om klor som har blivit för långa med varsam expertis. En kloklippning sker alltid på husdjurets villkor och det viktigaste för oss är att ni ska känna er trygga och nöjda hos oss. Vid behov ger vi gärna råd om hur du bäst tar hand om din kompis klor hemma.
            <br />
            <h3 id="klo-h3">Vi klipper klorna på dessa husdjur: </h3>
            <li>Hund</li>
            <li>Katt</li>
            <li>Smådjur</li>
            <h3 id="pris-h3">Pris från 149kr</h3>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
