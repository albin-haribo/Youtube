export interface Service {
  service: string
  quantity: number
  unitPrice: number
  totalPrice: number
  invoiceId: string
}

// InvoiceData.ts
export interface Invoice {
  _id?: string
  invoiceNo?: string
  date?: string
  dueDate?: string
  type?: boolean
  clientName?: string
  clientAddress?: string
  clientCity?: string
  clientState?: string
  clientZip?: string
  totalAmount?: number
  services?: Service[]
}
