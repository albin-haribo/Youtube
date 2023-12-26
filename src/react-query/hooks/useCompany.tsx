import { useMutation, useQuery } from "react-query"
import { fetchCompanies } from "../queries/fetchcompany.query"
import { createCompany, deleteCompany, updateCompany } from "../mutations/createCompany.mutation"

export const useFetchCompany = () => {
  return useQuery(["companies"], fetchCompanies)
}
export const useUpdateCompany = () => {
  return useMutation(["update-company"], (payload: any) => updateCompany(payload))
}

export const useRemoveCompany = () => {
  return useMutation(["remove-company"], (payload: any) => deleteCompany(payload))
}

export const useCreateCompany = () => {
  return useMutation(["create-company"], (payload: any) => createCompany(payload))
}
