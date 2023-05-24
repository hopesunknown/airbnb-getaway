import React from 'react'

type Props = {}

const InfoCard = (props = {img: string, location: string, title: string, description: string, star: string, price: string, total: string}) => {
  const {img, location, title, description, star, price, total} = props;
  return (
    <div>InfoCard</div>
  )
}

export default InfoCard