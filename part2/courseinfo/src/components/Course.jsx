const Header = (props) => {
  return <h2>{props.name}</h2>;
};

const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  );
};

const Total = ({ parts }) => {
  const sum = parts.reduce((sumUp, part) => {
    return sumUp + part.exercises;
  }, 0);
  return <b>Total of {sum} exercises</b>;
};

const Course = ({ course }) => {
  return (
    <div>
      {course.map((individualCourse) => (
        <div key={individualCourse.id}>
          <Header name={individualCourse.name} />
          {individualCourse.parts.map((part) => (
            <Part key={part.id} name={part.name} exercises={part.exercises} />
          ))}
          <Total parts={individualCourse.parts} />
        </div>
      ))}
    </div>
  );
};
export default Course;
