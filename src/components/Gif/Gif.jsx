import React from 'react'
import './Gif.css'

export default function Gif({title, url, id}) {
  return (
    <article id={id} className='card-gif'>
        <h4>{title}</h4>
        <img src={url} alt={title} /> 
    </article>
  )
}
