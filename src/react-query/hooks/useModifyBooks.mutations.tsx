// Import your mutation functions

import { useMutation } from "react-query"
import { createBook, deleteBook, getYoutube, updateBook } from "../mutations/createbooks.mutation"
import {
  createSwipeContent,
  updateSwipeContent,
  deleteSwipeContent,
  deleteInvoice,
  updateInvoice,
  createInvoice,
  createService,
  deleteService,
  updateService,
  updateSwipeOrder,
} from "../mutations/createContent.mutations"

export const useCreateBook = () => {
  return useMutation(["create-book"], (payload: any) => createBook(payload))
}

// Hook for updating a book
export const useUpdateBook = () => {
  return useMutation(["update-book"], (payload: any) => updateBook(payload))
}

// Hook for removing a book
export const useRemoveBook = () => {
  return useMutation(["remove-book"], (payload: any) => deleteBook(payload))
}

export const useCreateContent = () => {
  return useMutation(["create-content"], (payload: any) => createSwipeContent(payload))
}

// Hook for updating a content
export const useUpdateContent = () => {
  return useMutation(["update-content"], (payload: any) => updateSwipeContent(payload))
}
export const useUpdateContentOrder = () => {
  return useMutation(["update-order"], (payload: any) => updateSwipeOrder(payload))
}

// Hook for removing a content
export const useRemoveContent = () => {
  return useMutation(["remove-content"], (payload: any) => deleteSwipeContent(payload))
}

export const useCreateInvoice = () => {
  return useMutation(["create-content"], (payload: any) => createInvoice(payload))
}

// Hook for updating a content
export const useUpdateInvoice = () => {
  return useMutation(["update-content"], (payload: any) => updateInvoice(payload))
}

// Hook for removing a content
export const useRemoveInvoice = () => {
  return useMutation(["remove-content"], (payload: any) => deleteInvoice(payload))
}

// Hook for creating a service
export const useCreateService = () => {
  return useMutation(["create-service"], (payload: any) => createService(payload))
}

// Hook for updating a service
export const useUpdateService = () => {
  return useMutation(["update-service"], (payload: any) => updateService(payload))
}

// Hook for removing a service
export const useRemoveService = () => {
  return useMutation(["remove-service"], (serviceId: string) => deleteService(serviceId))
}

export const useYoutubeDownload = () => {
  return useMutation(["youtube-service"], (payload: any) => getYoutube(payload))
}
