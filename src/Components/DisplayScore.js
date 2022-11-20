import React from "react";
import {useLocation} from "react-router-dom";

const DisplayScore = () => {

    const location = useLocation();
    const score = location.state.quizScore;
    console.log(score);
    return (
        <>
        <h2>Your Score is {score}</h2>
        </>
    )
}

export default DisplayScore;