import React, { useState } from "react";
import ExercisesCard from "../components/ExercisesCard";
import { Container, Row } from "react-bootstrap";
function ExercisesWindow() {
  const [typeOfExercises, SetType] = useState([{rus:'Отжимания', eng:'push-ups',startCounts:[12,10,8,6,4,2]},{rus:'Приседания', eng:'squats', startCounts:[12,10,8,6,4,2]},{rus:'Пресс', eng:'crunches', startCounts:[12,10,8,6,4,2]},{rus:'Планка', eng:'plank' ,startCounts:[20,20,20]}]);
  return (
    <Container className="mt-5">
      <Row>
        {typeOfExercises.map(type => (
          <ExercisesCard item={type} key={type.eng} />
        ))}
      </Row>
    </Container>
  );
}

export default ExercisesWindow;
