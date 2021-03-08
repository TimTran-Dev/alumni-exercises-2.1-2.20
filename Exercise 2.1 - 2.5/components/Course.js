import React from 'react'


const Course = ({ courses }) => {
    return (
      <div>
        <Header courses={courses[0].name} />
        <Content parts={courses[0].parts} />
        <Total parts={courses[0].parts} />
        <Header courses={courses[1].name} />
        <Content parts={courses[1].parts} />
        <Total parts={courses[1].parts} />
      </div>
    )
  }
  
  const Header = ({ courses }) => {
    return (
      <div>
        <h1>
          {courses}
        </h1>
      </div>
    )
  }
  
  const Content = ({ parts }) => {
    const arrayOfCourses = parts.map(x => <Part key={x.id} name={x.name} exercises={x.exercises} />) 
    return (
      <div>
        {arrayOfCourses}
      </div>
    )
  }
  
  const Part = ( courses ) => {
    return (
      <div>
        <p>
          {courses.name} {courses.exercises}
        </p>
      </div>
    )
  }
  
  const Total = ({ parts }) => {
    const total =  parts.reduce((sum, curr) => sum + curr.exercises, 0)
    return (
      <div>
        <h4>
          Total amount of exercises in this course {total}
        </h4>
      </div>
    )
  }

export default Course