import React, {useEffect, useState} from 'react'
import'./App.css'
import ContactCard from '../../Componant/Contact Card/contact card';
import  phonebook  from '../../Componant/ContactData/phonebook';
function App (){
    const [contacts , setContacts] = useState(phonebook);
    const [searchTerm, setSearchTerm] = useState('');
    useEffect (()=>{
        const filterContacts =phonebook.filter((contact)=>{
            const name = contact.name.toLowerCase();
            const mobilenumber = contact.mobilenumber.toString();
            const query = searchTerm.toLowerCase();
            return(name.includes(query) ||mobilenumber.includes(query)) 
        })
        setContacts(filterContacts);

    },[searchTerm])
    return (
        <>
           
           

           <div className='main-container'>
           <p className='heading-text'>Contact list  ≡</p>
          <input type='text' className='search' placeholder='search'
          value={searchTerm}
          onChange={(e) => {setSearchTerm(e.target.value)}}
          />
         
          <div className='contact-card-main'>
          {contacts.map((contacts, index)=>{
            const {name, mobilenumber} =  contacts;

           return <ContactCard  key={index} name={name} mobilenumber={mobilenumber} />;

          })}
          </div>
          {
            contacts.length === 0 ? <h3>❌❌❌ </h3>: null
          }

          </div>
        </>
    )
}
export default App