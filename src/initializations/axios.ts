import axios from "axios"

// Determine the environment and set the baseURL accordingly
const baseURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:10000"
    : "https://backend-test-api-n87r.onrender.com"

// Create the Axios instance with the appropriate baseURL
const Axios = axios.create({
  baseURL: baseURL,
})

export default Axios
