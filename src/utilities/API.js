import axios from 'axios'

export default axios.create({
  baseURL: "https://sandbox-api.brewerydb.com/v2/",
  responseType: "json"
})
