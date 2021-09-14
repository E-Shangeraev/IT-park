import React, { useEffect, useState } from 'react'

const PartnersList = () => {
  const [partners, setPartners] = useState([])

  useEffect(() => {
    fetch('/api/partners')
      .then(response => response.json())
      .then(data => setPartners(data))
  }, [])

  return (
    <ul className="partners__list">
      {partners.length > 0 &&
        partners.map(partner => (
          <li key={partner.image}>
            <a href={partner.url} target="_blank" rel="noreferrer">
              <img src={partner.image} alt={partner.name} />
            </a>
          </li>
        ))}
    </ul>
  )
}

export default PartnersList
