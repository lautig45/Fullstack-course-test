
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
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3} />
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
    </div>
  )
}

export default App
