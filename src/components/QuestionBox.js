import React from 'react'

function QuestionBox ({ question, answers }) {
  

  return (
    <div>
      <div>
        {question}
      </div>
      {answers.map(answer => {
        <button className="button">{answer}</button>
      })}
    </div>
  )
}

export default QuestionBox