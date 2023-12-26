import Axios from "@/initializations/axios"

export const createBook = async (payload: any) => {
  const response = await Axios.post("/books", payload)
  return response.data
}
export const updateBook = async (payload: { bookId: string; updateData: any }) => {
  const response = await Axios.patch(`/books/${payload.bookId}`, payload.updateData)
  return response.data
}

export const deleteBook = async (bookId: string) => {
  const response = await Axios.delete(`/books/${bookId}`)
  return response.data
}

export const getYoutube = async (payload: { url: string; title: string }) => {
  const response = await Axios.get("/youtube/download", {
    params: { url: payload.url, title: payload.title },
    responseType: "blob",
  })
  return response.data
}
