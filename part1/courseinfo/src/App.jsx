const Header = (props) => {
  return <h1>{props.name}</h1>;
};

const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercice}
    </p>
  );
};

const Content = (props) => {
  console.log(props.part[0]);
  return (
    <div>
      <Part name={props.part[0].name} exercice={props.part[0].exercises} />
      <Part name={props.part[1].name} exercice={props.part[1].exercises} />
      <Part name={props.part[2].name} exercice={props.part[2].exercises} />
    </div>
  );
};

const Total = (props) => {
  return (
    <p>
      Number of exercises{" "}
      {props.part[0].exercises +
        props.part[1].exercises +
        props.part[2].exercises}
    </p>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header name={course.name} />

      <Content part={course.parts} />

      <Total part={course.parts} />
    </div>
  );
};

export default App;
