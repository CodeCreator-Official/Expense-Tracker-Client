import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useGetCurrentUser() {
    return useQuery({
        queryKey: ['GET_CURRENT_USER'],
        queryFn: async () => {
            try {
                const { data } = await axios({
                    method: 'get',
                    url: '/auth/current-user'
                })

                return data

            } catch (error) {
                console.log(error);
            }
        }
    })
}

export function useGetAllCategories() {
    return useQuery({
        queryKey: ['GET_ALL_CATEGORIES'],
        queryFn: async () => {
            try {
                const { data } = await axios({
                    method: 'get',
                    url: '/api/category',
                })

                if (data) {
                    return data
                }

            } catch (error) {
                console.log(error);
            }
        }
    })
}

export function useGetAllExpenses() {
    return useQuery({
        queryKey: ['GET_ALL_EXPENSES'],
        queryFn: async () => {
            try {
                const { data } = await axios({
                    method: 'get',
                    url: '/api/expense',
                })

                console.log('Rendered')

                if (data) {
                    return data
                }

            } catch (error) {
                console.log(error);
            }
        },
        staleTime: 0
    })
}

export function useGetAllExpensesInGroup() {
    return useQuery({
        queryKey: ['GET_ALL_EXPENSES_IN_GROUP'],
        queryFn: async () => {
            try {
                const { data } = await axios({
                    method: 'get',
                    url: '/api/expense/group',
                })

                if (data) {
                    return data
                }

            } catch (error) {
                console.log(error);
            }
        }
    })
}
