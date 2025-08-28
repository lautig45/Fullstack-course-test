const Header = (course) => {
  console.log(course)
return (  
  <h1>
    {course.course}
  </h1>
  )
}

const Part = (part) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}

const Content = (parts) => {
  console.log(parts)
  return (
    <div>
      <Part name={parts.part1} exercises={parts.exercises1} />
      <Part name={parts.part2} exercises={parts.exercises2} />
      <Part name={parts.part3} exercises={parts.exercises3} />
    </div>
  )
}

const Total = (exercises) => {  
  console.log(exercises)
  return (
    <div>
      <p>
        Number of exercises: {exercises.exercises1 + exercises.exercises2 + exercises.exercises3}
      </p>
    </div>
  )

}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header course={course.name} />
      <Content 
        part1={course.parts[0].name} 
        exercises1={course.parts[0].exercises} 
        part2={course.parts[1].name} 
        exercises2={course.parts[1].exercises} 
        part3={course.parts[2].name} 
        exercises3={course.parts[2].exercises}/>
      <Total 
        exercises1={course.parts[0].exercises} 
        exercises2={course.parts[1].exercises} 
        exercises3={course.parts[2].exercises} />
      
    </div>
  )
}

export default App