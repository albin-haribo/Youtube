import Axios from "@/initializations/axios"

export const fetchCompanies = async () => {
  const response = await Axios.get("/company")
  return response.data
}
