import Axios from "@/initializations/axios"

export const fetchBooks = async () => {
  const response = await Axios.get("/books")
  return response.data
}

export const fetchSwipeContents = async () => {
  const response = await Axios.get("/content")
  return response.data
}

export const fetchInvoice = async () => {
  const response = await Axios.get("/invoice")
  return response.data
}
export const fetchService = async () => {
  const response = await Axios.get("/service")
  return response.data
}
export const fetchServiceById = async (id: string) => {
  const response = await Axios.get(`/service/byInvoice/${id}`)
  return response.data
}
