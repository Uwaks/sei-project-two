import React from 'react'
import { useHistory } from 'react-router-dom'

import QuizCard from './QuizCard'

function Quiz ({ data, setData, score, setScore, isLoading }) {
  const [options, setOptions] = React.useState(null)
  const [currQuest, setCurrQuest] = React.useState(0)

  const history = useHistory()

  React.useEffect(() => {
    setOptions(data && data[currQuest].options)
  }, [data, currQuest])

  const handleMoreQs = () => {
    location.href = '/quiz'
  }

  const handleHome = () => {
    history.push('/')
  }

  return (
    <section className="section">
      <div className="container is-max-desktop">
        <div>
          <h2 id="score" className="title">Score: {score}</h2>
        </div>
        <QuizCard 
          isLoading = {isLoading}
          data = {data}
          setData = {setData}
          score = {score} 
          setScore = {setScore}/>
      </div>
      <button className="button" onClick={handleMoreQs}>Play Again!</button>
      <button className="button" onClick={handleHome}>Take me home!</button>
    </section>
  )
}

export default Quiz