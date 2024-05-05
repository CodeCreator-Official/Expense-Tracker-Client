import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { toast } from 'react-toastify'


// Auth
export function useCreateAccount() {
    return useMutation({
        mutationFn: async (formData) => {
            try {
                const { data } = await axios({
                    method: 'post',
                    url: '/api/auth/register',
                    data: formData
                })

                if (data) {
                    return data
                }

            } catch (error) {
                console.error(error)
                toast.error('Signup failed')
            }
        }
    })
}

export function useSigninAccount() {
    return useMutation({
        mutationFn: async (formData) => {
            try {
                const { data } = await axios({
                    method: 'post',
                    url: '/api/auth/login',
                    data: {
                        email: formData.email,
                        password: formData.password
                    }
                })

                if (data) {
                    return data
                }

            } catch (error) {
                console.error(error)
                toast.error('Signin failed')
            }
        }
    })
}

export function useLogoutAccount() {
    return useMutation({
        mutationFn: async () => {
            try {
                const { data } = await axios({
                    method: 'post',
                    url: '/api/auth/logout'
                })

                if (data) {
                    return data
                }

            } catch (error) {
                console.error(error)
                toast.error('Signin failed')
            }
        }
    })
}

// Category
export function useAddCategory() {

    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: async (formData) => {
            try {
                const { data } = await axios({
                    method: 'post',
                    url: '/api/category',
                    data: formData
                })

                if (data) {
                    return data
                }

            } catch (error) {
                console.log(error);
                toast.error('Adding category failed')
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['GET_ALL_EXPENSES_IN_GROUP']
            }),
                queryClient.invalidateQueries({
                    queryKey: ['GET_ALL_CATEGORIES']
                })
        }
    })
}

export function useGetAllExpensesByCategory() {
    return useMutation({
        mutationFn: async (categoryName) => {
            try {
                const { data } = await axios({
                    method: 'get',
                    url: `/api/expense/category/${categoryName}`
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

// Expense
export function useAddExpense() {

    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: async (formData) => {
            try {
                const { data } = await axios({
                    method: 'post',
                    url: '/api/expense',
                    data: formData
                })

                console.log(data)

                if (data) {
                    return data
                }

            } catch (error) {
                console.log(error);
                toast.error('Adding expense failed')
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['GET_ALL_EXPENSES'] }),
                queryClient.invalidateQueries({ queryKey: ['GET_ALL_EXPENSES_IN_GROUP'] })
        }
    }
    )
}

export function useDeleteExpense() {

    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: async (id) => {
            try {
                const { data } = await axios({
                    method: 'delete',
                    url: `/api/expense/${id}`
                })

                if (data) {
                    return data
                }

            } catch (error) {
                console.log(error);
                toast.error('Adding expense failed')
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['GET_ALL_EXPENSES'] }),
                queryClient.invalidateQueries({ queryKey: ['GET_ALL_EXPENSES_IN_GROUP'] })
        }
    })
}