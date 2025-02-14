const Header = (props) => {
  // console.log(props)
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  // console.log("Parts ==>",props)
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  );
};

const Content = (props) => {
  // console.log("Content==>",props)
  return (
    <>
      <Part part={props.part[0].name} exercises={props.part[0].exercises} />
      <Part part={props.part[1].name} exercises={props.part[1].exercises} />
      <Part part={props.part[2].name} exercises={props.part[2].exercises} />
    </>
  );
};

const Total = (props) => {
  const total = props.total
  return <p>Number of exercises {total[0].exercises + total[1].exercises + total[2].exercises}</p>;
};

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
    <>
      <Header course={course.name} />
      <Content part={course.parts} />
      <Total total={course.parts}/> 
    </>
  );
};


export default App;
