import React from 'react'
import { useParams } from 'react-router-dom'

const HomeComponent = () => {
  let { lang } = useParams()
  return (
    <div>Hola {lang}</div>
  )
}

export default HomeComponent