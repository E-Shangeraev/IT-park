import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import ServicesItem from '@components/Service/Service'

const servicesItems = [
  {
    name: 'Аренда офиса (офиса, переговорной, конференц-зала)',
    subtitle: 'ИТ-парк предоставляет своим арендаторам',
    description: `комфортные рабочие места, уютные зоны отдыха,
    оборудованную кухню, комнаты для переговоров, конференц-зал и
    парковочные места.`,
  },
  {
    name: 'Коворкинг',
    subtitle: 'ИТ-парк предоставляет своим арендаторам',
    description: `комфортные рабочие места, уютные зоны отдыха,
    оборудованную кухню, комнаты для переговоров, конференц-зал и
    парковочные места.`,
  },
  {
    name: 'Провести мероприятие',
    subtitle: 'ИТ-парк предоставляет своим арендаторам',
    description: `комфортные рабочие места, уютные зоны отдыха,
    оборудованную кухню, комнаты для переговоров, конференц-зал и
    парковочные места.`,
  },
]

const Services = () => (
  <ul className="services__list">
    {servicesItems.map(item => (
      <ServicesItem
        key={uuidv4()}
        name={item.name}
        subtitle={item.subtitle}
        description={item.description}
      />
    ))}
  </ul>
)

export default Services
