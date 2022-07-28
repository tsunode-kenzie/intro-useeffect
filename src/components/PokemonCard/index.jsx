import React from 'react'
import Button from '../Button'
import { Card } from './styles'

const PokemonCard = ({ name, onClick }) => {
  return (
    <Card>
      <h3>{name}</h3>

      <Button onClick={onClick}>{name}</Button>
    </Card>
  )
}

export default PokemonCard