import React from 'react'
import { Link } from 'react-router-dom'
import Carousel from './utils/Carousel';

const Engine = () => {
    const viewCollections = [
        {
            id: 1,
            imgLocation: "./images/Engine View/View 1.jpg",
            alt: "View 1"
        },
        {
            id: 2,
            imgLocation: "./images/Engine View/View 2.jpg",
            alt: "View 2"
        },
        {
            id: 3,
            imgLocation: "./images/Engine View/View 3.jpg",
            alt: "View 3"
        },
        {
            id: 4,
            imgLocation: "./images/Engine View/View 4.jpg",
            alt: "View 4"
        },
        {
            id: 5,
            imgLocation: "./images/Engine View/View 5.jpg",
            alt: "View 5"
        },
        {
            id: 6,
            imgLocation: "./images/Engine View/View 6.jpg",
            alt: "View 6"
        },
        {
            id: 7,
            imgLocation: "./images/Engine View/View 7.jpg",
            alt: "View 7"
        },
        {
            id: 8,
            imgLocation: "./images/Engine View/View 8.jpg",
            alt: "View 8"
        },
        {
            id: 9,
            imgLocation: "./images/Engine View/View 9.jpg",
            alt: "View 9"
        },
        {
            id: 10,
            imgLocation: "./images/Engine View/View 10.jpg",
            alt: "View 10"
        },
        {
            id: 11,
            imgLocation: "./images/Engine View/View 11.jpg",
            alt: "View 11"
        }
    ];

  return (
    <div className="container">
        <h1 className="quicksand-bold title">DEVELOPMENT OF THE W16 ENGINE</h1>
        <main>
            <Carousel collections={viewCollections} />
            <section className="quicksand-regular description">
                <p>Bringing the engine to life required more than 3,500 individual parts, each assembled by hand, and the work monitored throughout by test computers. On its first ever test in 2001, the double biturbo engine achieved the required 1,000+1 PS right off the bat – the theory and the execution could not have been better. But such were the leaps in performance that traditional engine test bench and ventilation systems could not cope with the new W16 – new systems had to be specially developed. There were also new requirements not previously asked of a production vehicle, such as the fact the very hot exhaust gas needed to be channeled. A titanium exhaust system on a scale not previously seen in the automotive sector was ultimately part of the solution.</p>
                <p>With performance secured, the engineers turned their attention to smoothness and reliability. As a 16-cylinder set up offers naturally smooth running, detecting a misfire or knocking in the engine by traditional methods would be unreliable. Bugatti therefore developed Bugatti Ion Current Sensing (BIS) to monitor the ion current flowing at each spark plug. If the system detects knocking combustion or a misfire, the ignition timing is slowed, the cylinder deactivated, or the boost pressure reduced. Every single cylinder can run right at its limit of performance. “From the outset, our aim was to generate maximum engine performance in a stable, clean manner,” explains Gregor Gries, former Head of Development at Bugatti, who has been responsible for engine and transmission development since Bugatti’s rebirth.</p>
                <p>Absolutely crucial to the continued reliability of the W16 engine was its cooling system and – as you would expect – it was engineered on a scale never before seen in the automotive industry. A complex water-cooling system, featuring two water cycles, keeps the W16 within the required temperature range, even at extreme full loads. 40 liters of water flows through the high-temperature cycle with three coolers in the front end to keep the engine at its operating temperature. The low-temperature cycle with a separate water pump contains 15 liters of cooling water to bring the turbochargers’ heated charge air down by as much as 130 degrees in two heat exchangers on the engine. There are also coolers each for the differential oil, transmission oil, and engine oil, as well as a heat exchanger for the air conditioning system. The W16 is incorporated into the Veyron as a longitudinally mounted mid-engine with seven-speed dual-clutch transmission located in front of the engine.</p>
                <p>Turbochargers are usually added to boost the power of small engines. In the case of BugattiI, the basic motor already boasts sufficient power output, but the four turbochargers build on these strong foundations to create something truly incomparable. “Being on the road with the W16 means having a limitless feeling of power and performance, of infinite performance. Whatever the speed, the engine has sufficient reserves for additional acceleration in any situation. When a quick switch is made from cruising to fast driving, the W16 remains smooth and commanding, and never feels strained. This unique boundlessness is what our customers find so beguiling,” relates Pierre-Henri Raphanel, Bugatti’s Pilote Officiel, who has driven Veyron and Chiron for well over 100,000 km.</p>
                <p>“With the engine of the Veyron 16.4, Bugatti showed even before mass production that only an exceptional team could realize this engine concept. Only with the immeasurable commitment of the employees could this standout engine be improved, redesigned, and perfected again and again over the years,” says Bugatti Automobiles President, Christophe Piochon, who still raves about everyone’s untiring will to not give up. This unique engine encapsulates the Ettore Bugatti credo: “If comparable, it is no longer Bugatti.”</p>
                <p>The sound of the engine is as unique as the engine itself. Thanks to an entirely stand-alone, asymmetric firing order with firing gaps of just 45 degrees, its sound is unlike any other engine concept. Balanced and comfortable in the lower load range, it increasingly becomes a growling beast as the load increases. And all without mechanical noise interference.</p>
                <p>The engineers continued to optimize the engine over the years. With enlarged turbochargers and many other modifications, the W16 delivered 1,200 PS in the Veyron 16.4 Super Sport from 2010. That same year, the Super Sport set a speed record of 431.072 km/h as the fastest road-legal production super sports car, thereby earning itself an entry into the legendary Guinness Book of Records.</p>
            </section>
        </main>
        <Link className='quicksand-semibold contact-link' to="/contact">Contact Us</Link>
    </div>
  )
}

export default Engine