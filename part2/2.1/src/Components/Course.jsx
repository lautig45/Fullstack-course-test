import Header from './Header'
import Content from './Content'


const Course = ({ course }) => {
    console.log(course.name)
  if (!course || !course.name || !course.parts) {
    return <div>No course data available.</div>;
  }
  return (
    <div>

      <Header name={course.name} />
      <Content parts={course.parts} />
      <b>total of {course.parts.reduce((sum, part) => sum + part.exercises, 0)} exercises</b>
    </div>
  )
}
export default Course;