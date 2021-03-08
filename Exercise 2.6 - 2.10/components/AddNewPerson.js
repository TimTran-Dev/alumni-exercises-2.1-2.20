import React from 'react'

const AddNewPerson = ({ addNewPerson, eventHandlingPerson, eventHandlingPhoneNumber, newName, newNumber }) => {
    return (
        <div>
            <h2>
                Add New
            </h2>
            <form onSubmit={addNewPerson}>
            <div> name: 
                <input value={newName} onChange={eventHandlingPerson}>
                </input>
            </div>
            <div> phone number: 
                <input value={newNumber} onChange={eventHandlingPhoneNumber}>
                </input>
            </div>
            <div>
                <button type='submit'>
                    add
                </button>
            </div>
        </form>
        </div>
        
    )
}

export default AddNewPerson