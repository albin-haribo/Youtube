import Axios from "@/initializations/axios"

export const createCompany = async (payload: any) => {
  const response = await Axios.post("/company", payload)
  return response.data
}
export const updateCompany = async (payload: { bookId: string; updateData: any }) => {
  const response = await Axios.patch(`/company/${payload.bookId}`, payload.updateData)
  return response.data
}

export const deleteCompany = async (bookId: string) => {
  const response = await Axios.delete(`/company/${bookId}`)
  return response.data
}
