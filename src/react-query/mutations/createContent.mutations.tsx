import Axios from "@/initializations/axios"

// CREATE: Create a new swipe content
export const createSwipeContent = async (payload: any) => {
  const response = await Axios.post("/content", payload)
  return response.data
}

// UPDATE: Update a swipe content by ID
export const updateSwipeContent = async (payload: { swipeContentId: string; updateData: any }) => {
  const response = await Axios.patch(`/content/${payload.swipeContentId}`, payload.updateData)
  return response.data
}
export const updateSwipeOrder = async (payload: { swipeContentId: string; newNumber: number }) => {
  const response = await Axios.patch(`/content/updateOrder/${payload.swipeContentId}`, {
    newNumber: payload.newNumber,
  })
  return response.data
}

// DELETE: Delete a swipe content by ID
export const deleteSwipeContent = async (swipeContentId: string) => {
  const response = await Axios.delete(`/content/${swipeContentId}`)
  return response.data
}

export const createInvoice = async (payload: any) => {
  const response = await Axios.post("/invoice", payload)
  return response.data
}

// UPDATE: Update a swipe content by ID
export const updateInvoice = async (payload: { invoiceId: string; updateData: any }) => {
  console.log(payload.invoiceId)
  const response = await Axios.patch(`/invoice/${payload.invoiceId}`, payload.updateData)
  return response.data
}

// DELETE: Delete a swipe content by ID
export const deleteInvoice = async (invoiceId: string) => {
  const response = await Axios.delete(`/invoice/${invoiceId}`)
  return response.data
}

// Create a service
export const createService = async (payload: any) => {
  const response = await Axios.post("/service", payload)
  return response.data
}

// Update a service by ID
export const updateService = async (payload: { serviceId: string; updateData: any }) => {
  console.log(payload.serviceId)
  const response = await Axios.patch(`/service/${payload.serviceId}`, payload.updateData)
  return response.data
}

// Delete a service by ID
export const deleteService = async (serviceId: string) => {
  const response = await Axios.delete(`/service/${serviceId}`)
  return response.data
}
