import React from 'react'
import { Link } from "react-router-dom"
import Carousel from './utils/Carousel';

const Interior = () => {
    const viewCollections = [
        {
            id: 1,
            imgLocation: "images/Interior View/View 1.jpg",
            alt: "View 1"
        },
        {
            id: 2,
            imgLocation: "images/Interior View/View 2.jpeg",
            alt: "View 2"
        },
        {
            id: 3,
            imgLocation: "images/Interior View/View 3.jpg",
            alt: "View 3"
        },
        {
            id: 4,
            imgLocation: "images/Interior View/View 4.jpg",
            alt: "View 4"
        },
        {
            id: 5,
            imgLocation: "images/Interior View/View 5.jpg",
            alt: "View 5"
        },
        {
            id: 6,
            imgLocation: "images/Interior View/View 6.jpg",
            alt: "View 6"
        },
        {
            id: 7,
            imgLocation: "images/Interior View/View 7.jpg",
            alt: "View 7"
        },
        {
            id: 8,
            imgLocation: "images/Interior View/View 8.jpg",
            alt: "View 8"
        },
        {
            id: 9,
            imgLocation: "images/Interior View/View 9.jpg",
            alt: "View 9"
        }
    ];

  return (
    <div className="container">
        <h1 className="quicksand-bold title">BUGATTI W16 MISTRAL INTERIOR AND CARGO</h1>
        <main>
            <Carousel collections={viewCollections} />
            <section className="quicksand-regular description">
                <p>It's clear that Bugatti's new drop-top shares a lot with the Chiron inside. The Bugatti W16 Mistral's interior features a similar dual-cockpit layout - with the sculpted dash helping to define clear zones for the driver and passenger - and stacked controls in the center section. As with the Chiron, there is no traditional central infotainment display.</p>
                <p>Carefully chosen materials include aluminum and titanium, and the Bugatti W16 Mistral's seats are upholstered in blemish-free leather. The gear shifter itself is a work of art; it is machined from a solid block of aluminum and has a touch of wood and an amber insert. This insert includes a sculpture of Rembrandt Bugatti's 'Dancing Elephant'.</p>
                <p>The interior colors of the Bugatti W16 Mistral are as flamboyant as we expected, with the one pictured here featuring a vivid yellow interior contrasted with black and dark brown, as a tribute to vintage models. The door panels feature a handwoven leather pattern that you'll only find on the W16 Mistral. We're certain that all 99 customers will be able to customize the interior to their heart's content.</p>
                <p>Cargo space in the Bugatti W16 Mistral should be roughly equivalent to the Chiron, which means there is very little of it to get excited about. Don't expect more than two or so cubic feet of volume and a glovebox.</p>
            </section>
        </main>
        <Link className='quicksand-semibold contact-link' to="/contact">Contact Us</Link>
    </div>
  )
}

export default Interior