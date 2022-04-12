import React from 'react'
import { useParams } from 'react-router-dom'
import { Typography } from '@material-ui/core';

const PricingDetails = () => {
    const { id } = useParams();
    console.log(id);

  return (
    <Typography>{`Pricing Details for plan: ${id}`}</Typography>
  )
}

export default PricingDetails