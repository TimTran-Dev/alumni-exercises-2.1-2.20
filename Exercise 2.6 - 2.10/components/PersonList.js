import React from 'react'

const PersonList = ({ persons }) => {
    return (
        <div>
            <h2>
                Number
            </h2>
            {persons.map(person => <p key={person.name}>
                {person.name} {person.phone}
            </p>)}
        </div>
    )
}

export default PersonList