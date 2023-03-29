// import { TextField, Typography, Button, Grid } from "@mui/material";
// import { Box } from "@mui/system";
import { useState } from "react";
import ArrowForwardTwoToneIcon from "@mui/icons-material/ArrowForwardTwoTone";
import "./Form.css";
import questionArray from "../../Questions.json";

const Form = (props) => {
  const {questionsList} = questionArray;
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(questionsList[index]);
  const [typeStarted, setTypeStarted] = useState(false);
  const [value,setValue] = useState('');
  const[response,setResponse] = useState('')

  const onchange = (e) => {
    if (!typeStarted) {
      setTypeStarted(true);
      props.progressBar();
    }
    console.log(e.target.value)
    setValue(e.target.value)
    console.log(value)
  };

  const onsubmit = (e) => {
    if(questionsList.length>index){
      setIndex(index+1);
      setQuestion(questionsList[index]);
    }
  };

  return (
    <>
      <div className="container">
        <div className="qus">
          <div>
          {question.index}
            <span>
              <ArrowForwardTwoToneIcon />
            </span>
            {question.title}
          </div>
        </div>
        <div className="input">
          <input
            type={question.responseType}
            value={value}
            name='value'
            placeholder="Type your answer here.."
            onChange={onchange}
          />
        </div>
        <div className="button">
          <button type="submit" onClick={onsubmit}>
            OK ✓
          </button>
        </div>
      </div>
    </>
  );
};

export default Form;
