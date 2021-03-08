// exercise 2.5

import React from "react";
import ReactDOM from "react-dom";
import App from './App'


ReactDOM.render(<App />, document.getElementById("root"));



// ----------------------------------------------------------------------


// excercise 2.4

import React from "react";
import ReactDOM from "react-dom";

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

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <Course courses={courses} parts={courses.parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));





//----------------------------------------------------------

// exercise 2.3

import React from "react";
import ReactDOM from "react-dom";

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

const Header = ({ course }) => {
  return (
    <div>
      <h1>
        {course}
      </h1>
    </div>
  )
}

const Content = ({ parts }) => {
  const arrayOfCourses = parts.map(x => <Part key={x.id} name={x.name} exercises={x.exercises} />) 
  console.log()
  return (
    <div>
      {arrayOfCourses}
    </div>
  )
}

const Part = ( course ) => {
  return (
    <div>
      <p>
        {course.name} {course.exercises}
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

const App = () => {
  const course = {
      name: "Half Stack application development",
      id: 1,
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3
        }
      ]
  }

  return <Course key={course.id} course={course} />
};

ReactDOM.render(<App />, document.getElementById("root"));





// -------------------------------------------------------------------------

// exercise 2.2

import React from "react";
import ReactDOM from "react-dom";

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
    </div>
  )
}

const Header = ({ course }) => {
  return (
    <div>
      <h1>
        {course}
      </h1>
    </div>
  )
}

const Content = ({ parts }) => {
  const arrayOfCourses = parts.map(x => <Part key={x.id} name={x.name} exercises={x.exercises} />) 
  console.log()
  return (
    <div>
      {arrayOfCourses}
      <h4>Total exercises in this course {arrayOfCourses[0].props.exercises + arrayOfCourses[1].props.exercises + arrayOfCourses[2].props.exercises} </h4>
    </div>
  )
}

const Part = ( course ) => {
  return (
    <div>
      <p>
        {course.name} {course.exercises}
      </p>
    </div>
  )
}

const App = () => {
  const course = {
      name: "Half Stack application development",
      id: 1,
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3
        }
      ]
  }

  return <Course key={course.id} course={course} />
};

ReactDOM.render(<App />, document.getElementById("root"));



// --------------------------------------------------------------------------------

// exercise 2.1 

import React from "react";
import ReactDOM from "react-dom";

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
    </div>
  )
}

const Header = ({ course }) => {
  return (
    <div>
      <h1>
        {course}
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

const Part = ( course ) => {
  return (
    <div>
      <p>
        {course.name} {course.exercises}
      </p>
    </div>
  )
}

const App = () => {
  const course = {
      name: "Half Stack application development",
      id: 1,
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3
        }
      ]
  }

  return <Course key={course.id} course={course} />
};

ReactDOM.render(<App />, document.getElementById("root"));