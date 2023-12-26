import { useQuery } from "react-query"
import {
  fetchBooks,
  fetchInvoice,
  fetchService,
  fetchServiceById,
  fetchSwipeContents,
} from "../queries/fetchbooks.query"

export const useFetchBooks = () => {
  return useQuery(["books"], fetchBooks)
}

export const useFetchContents = () => {
  return useQuery(["content"], fetchSwipeContents)
}
export const useFetchInvoice = () => {
  return useQuery(["invoice"], fetchInvoice)
}

export const useFetchService = () => {
  return useQuery(["service"], fetchService)
}

export const useFetchServicebyId = (options = {}, payload: any) => {
  return useQuery(["service"], () => fetchServiceById(payload), {
    ...options,
  })
}
