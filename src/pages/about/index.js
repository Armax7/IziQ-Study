import React, { useEffect } from 'react'
import { getCategoriesById  } from '../api/categories/controllers'

function About() {
  useEffect(async()=>{

    console.log(await getCategoriesById(2));
  },[])
  return (
    <h1>Esto es About</h1>
  )
}

export default About