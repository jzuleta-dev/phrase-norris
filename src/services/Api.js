import apisauce from 'apisauce'

const create = (baseURL = 'http://api.icndb.com/jokes/random/') => {
  const api = apisauce.create({
    baseURL,
    timeout: 10000
  })

  const getPhrases = (amount) => api.get(`${amount}`)

  return {
    getPhrases
  }
}

export default {
  create
}
