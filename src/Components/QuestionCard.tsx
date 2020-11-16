import React, { useState } from 'react'
import {QuestionpropsType} from '../Types/quiz_type';
import '../App.css';

 const QuestionCard:React.FC<QuestionpropsType> = ({question, option, callBack,score,quiz  }) => {
        
    let [selectedAns, setSelectedAns] = useState("")

    const handleSelection = (e:any) => {
        // console.log(e.target.value)
        setSelectedAns(e.target.value)
        
        
        
    }
    return (
        <div className="question-container">
            <div className="question-div">
    <p>Your score is <b>{score}</b> out of <b>{quiz}</b></p>
                <h2>{question}</h2>
            </div>
            <form onSubmit={(e:React.FormEvent<EventTarget>)=>{callBack(e, selectedAns)}} className="question-form">
                {option.map((QuesOption: string, index:number) => {
                    return (
                        <div key={index}>
                        <label className="radio-style">
                            <input type="radio" name="QuesOption" value={QuesOption} required checked={selectedAns === QuesOption} onChange={handleSelection}/>
                            {QuesOption}
                        </label>
                        </div>
                    )
                })}
                <input type="submit" className="submit"  />
            </form>
        </div>
    )
}
export default QuestionCard