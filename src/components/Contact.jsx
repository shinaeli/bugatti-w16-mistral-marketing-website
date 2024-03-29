import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Contact = () => {
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [region, setRegion] = useState('');
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    // http://localhost:8000/contacts

    const handleSubmit = e => {
        e.preventDefault();
        if((subject !== "") && (message !== "") && (region !== "") && (email !== "")) {
            const randomId = Math.random() * 1000;
            const contact = {id: String(randomId), subject, message, region, email};
            postContact(contact);
        }
    };

    async function postContact(testContact) {
        try {
            const response = await fetch('https://bugatti-w16-backend.onrender.com/contacts', {
                method: 'POST',
                body: JSON.stringify(testContact),
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                },
              });
              if(!response.ok) {
                throw new Error(`${response.status} Error: ${response.statusText}`);
              } else {
                const data = await response.json();
                console.log(data);
                alert('Message Sent and Received!');
                setSubject('');
                setMessage('');
                setRegion('');
                setEmail('');
                navigate('/');
              }
        } catch (error) {
            setErrorMessage(error.message);
            console.log(errorMessage);
            alert(errorMessage);
        }
    };

    const countryOptions = [
        {
            id: 1,
            country: "Italy",
            value: "Italy"
        },
        {
            id: 2,
            country: "United States of America",
            value: "USA"
        },
        {
            id: 3,
            country: "Nigeria",
            value: "Nigeria"
        },
        {
            id: 4,
            country: "Poland",
            value: "Poland"
        },
        {
            id: 5,
            country: "Mexico",
            value: "Mexico"
        },
        {
            id: 6,
            country: "England",
            value: "England"
        },
        {
            id: 7,
            country: "Belgium",
            value: "Belgium"
        },
        {
            id: 8,
            country: "Greece",
            value: "Greece"
        },
        {
            id: 9,
            country: "France",
            value: "France"
        },
        {
            id: 10,
            country: "United Arab Emirates",
            value: "UAE"
        },
        {
            id: 11,
            country: "Qatar",
            value: "Qatar"
        },
        {
            id: 12,
            country: "South Africa",
            value: "South Africa"
        },
        {
            id: 13,
            country: "Germany",
            value: "Germany"
        }
    ];

  return (
    <div className="container">
        <form onSubmit={handleSubmit}>
            <main>
                <h1 className='quicksand-bold title'>BUGATTI CONTACT FORM</h1>
                <section className="customer-details">
                    <div className="info">
                        <label className="quicksand-semibold" htmlFor="subject">Subject:</label>
                        <input value={subject} onChange={e => setSubject(e.target.value)} required type="text" name="subject" placeholder="Tell Us Your Request..." />
                    </div>
                    <div className="info">
                        <label className="quicksand-semibold" htmlFor="textarea">Message:</label>
                        <textarea value={message} onChange={e => setMessage(e.target.value)} required name="textarea" id="textarea"  placeholder="Drop Your Thoughts Here..." cols="30" rows="10"></textarea>
                    </div>
                    <div className="info">
                        <label className="quicksand-semibold" htmlFor="country">Country/Region:</label>
                        <select value={region} onChange={e => setRegion(e.target.value)} name="country" id="country">
                            {
                                countryOptions.map(item => {
                                    const {id, country, value} = item;
                                    return (
                                        <option key={id} value={value}>{country}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="info">
                        <label className="quicksand-semibold" htmlFor="email">Email:</label>
                        <input value={email} onChange={e => setEmail(e.target.value)} required type="email" name="email" placeholder="Provide Your Email..." />
                    </div>
                </section>
                <button className="quicksand-semibold" type="submit">Submit</button>
            </main>
        </form>
    </div>
  )
}

export default Contact