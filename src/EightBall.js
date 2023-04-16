import "./EightBall.css";

import { useState } from "react";


const EightBall = ({answers}) => {

    const update = () => {
        const newAnswer = randomProperty(answers);
        
        setAnswer(newAnswer.msg);
        setColor(newAnswer.color);
      };


      const restart = () => {
        
        setAnswer("Think of a Question");
        setColor("black");
      };


    

    const randomProperty = function (answers) {

        let keys = Object.keys(answers);

        return answers[keys[ keys.length * Math.random() << 0]];
    };


      const [answer, setAnswer] = useState("Think of a Question");
      const [color, setColor] = useState("black");





 return (
    <div className="EightBall">

      <div className="EightBall-h1">  
         <h1 className = {color}>{answer}</h1>
      </div>

      <div className="EightBall-answer">
      <button onClick={update}>Answer</button>
      </div>
      
      <div className="EightBall-restart">
      <button onClick={restart}>Restart</button>
      </div>
    </div>
  );
};

export default EightBall;