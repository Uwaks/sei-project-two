import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './components/Home'
import Quiz from './components/Quiz'
import { getQuizData } from './lib/api'

function App() {
  const [data, setData] = React.useState(null)
  

  React.useEffect(() => {
    const getData = async () => {
      const response = await getQuizData() 
      const rawData = response.data.results
      const refData = rawData.map((item, index) => {
        const answer = decodeData(item.correct_answer)
        const options = [ 
          ...item.incorrect_answers.map(answer => decodeData(answer)), 
          answer
        ]
        return {
          id: `${index}-${Date.now()}`,
          questions: decodeData(item.question),
          answer: answer,
          options: options.sort(),
        }
      })
      setData(refData)
    }
    getData()
  }, [])
  
  
  // *** Data Decoding Function
  function decodeData(str) {
    const dataCleaner = document.createElement('textarea')
    dataCleaner.innerHTML = str
    return dataCleaner.value
  }


  return (
    <BrowserRouter>
      <Route exact path="/">
        <Home />   
      </Route>
      <Route exact path="/quiz">
        <Quiz data = {data} setData={setData}/>
      </Route>
    </BrowserRouter>
  )
}

export default App
