import React, { useEffect, useState } from 'react';

const Dogs = () => {
  const [dogsData, setDogsData] = useState([]);
  const apiKey = '$2a$10$5slAltCMfevgT45b5Fdu/.30Z4K913Jib3FagyVjyH8GKAAFIdNXu';

  useEffect(() => {
    const headers = {
      'X-Master-Key': apiKey,
    };

    fetch('https://api.jsonbin.io/v3/b/650c39270574da7622ae30f3', {
      headers: headers,
    })
      .then((response) => response.json())
      .then((data) => {
        // Logga ut API-svaret för att felsöka
        console.log('API Response:', data)

        // Kontrollera om API-svaret är en objektsamling och omvandla den till en array
        if (data && data.record && Array.isArray(data.record)) {
          setDogsData(data.record);
        } else {
          console.error('API Response is not as expected:', data)
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [apiKey])

  return (
    <section>
      <h3>The Dawgs</h3>
      <ul>
        {dogsData.map((dog, index) => (
          <li key={index}>
            <h4>{dog.name}</h4>
            <img src={dog.img} alt={dog.name} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Dogs;
