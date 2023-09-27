import React from 'react'
import './contact card.css' 
function ContactCard({name ,mobilenumber}){
  return (
    <div className='contact-card'>
        <h1 className='name-tag'>{name}</h1>
        <span>{mobilenumber}</span>
    </div>
  )
}

export default ContactCard