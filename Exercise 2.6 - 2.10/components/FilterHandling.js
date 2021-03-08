import React from 'react'



const FilterHandling = ({ handleFilter, filterStr }) => {
  return (
    <form>
      <div> Filter person in phonebook: 
        <input type='text' onChange={handleFilter} value={filterStr}>
        </input>
      </div>
    </form>
  )
}

export default FilterHandling