import React from 'react'

function QuizCard ({ isLoading, data, score, setScore }) {
  

  const handleAnswer = (e) => {
    const correctAns = data.map(ans => (ans.answer))
    if (correctAns.includes(e.target.textContent)) {
      setScore(score + 10)
      e.target.classList.add('correct')
    } else {
      setScore(score - 5)
      e.target.classList.add('incorrect')
    }
  }



  

  return (
    <>
      {!isLoading && data.map(card => (
        <div key={card.id} className="qwrapper container">
          <h2 className="title">{card.questions}</h2>
          <div>{card.options.map(answer => (
            <button key={answer} className="button" onClick={handleAnswer}>{answer}</button>
          ))}
          </div>
        </div>
      ))}
    </> 
  )
}

export default QuizCard