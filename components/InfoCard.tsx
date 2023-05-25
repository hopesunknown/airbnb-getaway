import React from 'react'

type Props = {}

const InfoCard = (props = {img: String, location: String, title: String, description: String, star: String, price: String, total: String}) => {
  const {img, location, title, description, star, price, total} = props;
  return (
    <div>InfoCard</div>
  )
}

export default InfoCard