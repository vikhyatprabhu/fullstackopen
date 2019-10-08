import React from "react";
import Part from "./Part";

const Total=({total})=>{
  return <h2> Total of {total} exercises </h2>
}

const Course = ({ course }) => {
  const rows = () =>
    course.parts.map(part => {
      return <Part key={part.id} part={part} />;
    });
  const totalExercises=()=> course.parts.map(part => part.exercises).reduce((acc,exercises)=> acc+exercises,0)
  return (
    <div>
      <h1>{course.name}</h1>
      {rows()}
      <Total total={totalExercises()}/>
    </div>
  );
};

export default Course;
