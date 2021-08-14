import React from 'react'

function QuizCard () {
  

  return (
    <section className="section">
      <div className="container is-max-desktop">
        {!isLoading && data.map(card => (
          <div key={card.id} className="qwrapper container">
            <h2 className="title">{card.questions}</h2>
            <button className="button" onClick={handleAnswer}>{card.options[0]}</button>
            <button className="button" onClick={handleAnswer}>{card.options[1]}</button>
            <button className="button" onClick={handleAnswer}>{card.options[2]}</button>
            <button className="button" onClick={handleAnswer}>{card.options[3]}</button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default QuizCard