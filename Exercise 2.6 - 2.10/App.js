// exercise 2.10


import React, { useState } from 'react'
import FilterHandling from './components/FilterHandling'
import AddNewPerson from './components/AddNewPerson'
import PersonList from './components/PersonList'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas',
     phone: '000-000-0000'
    },
    { name: 'Phil Jones',
     phone: '555-555-5555'
    },
    { name: 'Ryan Cleffa',
     phone: '333-333-3333'
    },
    { name: 'Miles Morales',
     phone: '777-777-7777'
    },
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterStr, setFilter] = useState('')


  const handleFilter = (event) => {
  setFilter(event.target.value)
  const filteredSearch = persons.filter((search) => 
      search.name.toLowerCase().includes(filterStr.toLowerCase())
  )
  setPersons(filteredSearch)
  }

  const eventHandlingPerson = (event) => {
      setNewName(event.target.value)
  }

  const eventHandlingPhoneNumber = (event) => {
    setNewNumber(event.target.value)
}

  const addNewPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      phone: newNumber
    }
    const existingName = persons.filter((personName) => personName.name === newName)
    const existingPhone = persons.filter((personPhone) => personPhone.phone === newNumber)
    existingName !== false ? setPersons(persons.concat(personObject)) : alert(`${newName} already exists in the phonebook, please enter a new name.`)
    existingPhone !== false ? setPersons(persons.concat(personObject)) : alert(`${newNumber} already exists in the phonebook, please enter a new name.`)
    
    
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <FilterHandling handleFilter={handleFilter} filterStr={filterStr} />
      <AddNewPerson addNewPerson={addNewPerson} eventHandlingPerson={eventHandlingPerson} eventHandlingPhoneNumber={eventHandlingPhoneNumber} newName={newName} newNumer={newNumber} />
      <PersonList persons={persons} />
    </div>
  )
}

export default App



// ----------------------------------------------------------------------------------------

// exercise 2.9 

// import React, { useState } from 'react'

// const App = () => {
//   const [ persons, setPersons ] = useState([
//     { name: 'Arto Hellas',
//      phone: '000-000-0000'
//     },
//     { name: 'Phil Jones',
//      phone: '555-555-5555'
//     },
//     { name: 'Ryan Cleffa',
//      phone: '333-333-3333'
//     },
//     { name: 'Miles Morales',
//      phone: '777-777-7777'
//     },
//   ]) 
//   const [ newName, setNewName ] = useState('')
//   const [ newNumber, setNewNumber ] = useState('')
//   const [ filterStr, setFilter] = useState('')

//   const filterHandling = (event) => {
//     setFilter(event.target.value)
//     const filteredSearch = persons.filter((search) => 
//         search.name.toLowerCase().includes(filterStr.toLowerCase())
//     )
//     setPersons(filteredSearch)
//   }

//   const eventHandlingPerson = (event) => {
//       setNewName(event.target.value)
//   }

//   const eventHandlingPhoneNumber = (event) => {
//     setNewNumber(event.target.value)
// }

//   const addNewPerson = (event) => {
//     event.preventDefault()
//     const personObject = {
//       name: newName,
//       phone: newNumber
//     }
//     const existingName = persons.filter((personName) => personName.name === newName)
//     const existingPhone = persons.filter((personPhone) => personPhone.phone === newNumber)
//     existingName !== false ? setPersons(persons.concat(personObject)) : alert(`${newName} already exists in the phonebook, please enter a new name.`)
//     existingPhone !== false ? setPersons(persons.concat(personObject)) : alert(`${newNumber} already exists in the phonebook, please enter a new name.`)
    
    
//   }


//   return (
//     <div>
//       <h2>Phonebook</h2>
//       Filter person in phonebook: <input value={filterStr} onChange={filterHandling} />
//       <h2>Add new</h2>
//       <form onSubmit={addNewPerson}>
//         <div>
//           name: <input value={newName} onChange={eventHandlingPerson}/> 
//         </div>
//         <div>
//           phone number: <input value={newNumber} onChange={eventHandlingPhoneNumber} />
//         </div>
//         <div>
//           <button type="submit">add</button>
//         </div>
//       </form>
//       <h2>Numbers</h2>
//       {persons.map(person => <p key={person.name}>{person.name} {person.phone}</p>)}
//     </div>
//   )
// }

// export default App

// ----------------------------------------------------------------------------------------------------

// exercise 2.8

// import React, { useState } from 'react'

// const App = () => {
//   const [ persons, setPersons ] = useState([
//     { name: 'Arto Hellas',
//      phone: '000-000-0000'
//     }
//   ]) 
//   const [ newName, setNewName ] = useState('')
//   const [ newNumber, setNewNumber ] = useState('')

  

//   const eventHandlingPerson = (event) => {
//       setNewName(event.target.value)
//   }

//   const eventHandlingPhoneNumber = (event) => {
//     setNewNumber(event.target.value)
// }

//   const addNewPerson = (event) => {
//     event.preventDefault()
//     const personObject = {
//       name: newName,
//       phone: newNumber
//     }
//     const existingName = persons.filter((personName) => personName.name === newName)
//     const existingPhone = persons.filter((personPhone) => personPhone.phone === newNumber)
//     existingName !== false ? setPersons(persons.concat(personObject)) : alert(`${newName} already exists in the phonebook, please enter a new name.`)
//     existingPhone !== false ? setPersons(persons.concat(personObject)) : alert(`${newNumber} already exists in the phonebook, please enter a new name.`)
    
    
//   }


//   return (
//     <div>
//       <h2>Phonebook</h2>
//       <form onSubmit={addNewPerson}>
//         <div>
//           name: <input value={newName} onChange={eventHandlingPerson}/> 
//           phone number: <input value={newNumber} onChange={eventHandlingPhoneNumber} />
//         </div>
//         <div>
//           <button type="submit">add</button>
//         </div>
//       </form>
//       <h2>Numbers</h2>
//         {persons.map(val => <p key={val.name}> {val.name} {val.phone}</p>)}
//     </div>
//   )
// }

// export default App


// --------------------------------------------------------------------------


// exercise 2.7

// import React, { useState } from 'react'

// const App = () => {
//   const [ persons, setPersons ] = useState([
//     { name: 'Arto Hellas' }
//   ]) 
//   const [ newName, setNewName ] = useState('')

//   const eventHandling = (event) => {
//       console.log(event.target.value)
//       setNewName(event.target.value)
//   }

//   const addNewPerson = (event) => {
//     event.preventDefault()
//     const personObject = {
//       name: newName
//     }
//     const existingName = persons.filter((personName) => personName.name === newName)
//     !existingName === true ? setPersons(persons.concat(personObject)) : alert(`${newName} already exists in the phonebook, please enter a new name.`)
    
//   }


//   return (
//     <div>
//       <h2>Phonebook</h2>
//       <form onSubmit={addNewPerson}>
//         <div>
//           name: <input value={newName} onChange={eventHandling}/> 
//         </div>
//         <div>
//           <button type="submit">add</button>
//         </div>
//       </form>
//       <h2>Numbers</h2>
//         {persons.map(val => <p key={val.name}> {val.name}</p>)}
//     </div>
//   )
// }

// export default App


// ------------------------------------------------------------------------

// exercise 2.6


// import React, { useState } from 'react'

// const App = () => {
//   const [ persons, setPersons ] = useState([
//     { name: 'Arto Hellas' }
//   ]) 
//   const [ newName, setNewName ] = useState('')

// //   const newPerson = (event) => {
// //       event.preventDefault()
// //       console.log('button pressed', 'event.target')
// //   }

//   const eventHandling = (event) => {
//       console.log(event.target.value)
//       setNewName(event.target.value)
//   }

//   const addNewPerson = (event) => {
//     event.preventDefault()
//     const personObject = {
//       name: newName
//     }
  
//     setPersons(persons.concat(personObject))
//   }


//   return (
//     <div>
//       <h2>Phonebook</h2>
//       <form onSubmit={addNewPerson}>
//         <div>
//           name: <input value={newName} onChange={eventHandling}/> 
//         </div>
//         <div>
//           <button type="submit">add</button>
//         </div>
//       </form>
//       <h2>Numbers</h2>
//         {persons.map(val => <p key={val.name}> {val.name}</p>)}
//     </div>
//   )
// }

// export default App