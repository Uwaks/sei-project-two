import axios from 'axios'

export function getQuizData() {
  return axios.get('https://opentdb.com/api.php?amount=10&type=multiple')
}