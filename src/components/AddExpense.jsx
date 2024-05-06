import { useState } from "react"
import { useGetAllCategories } from "../lib/tanstack/Queries"
import { useAddExpense } from "../lib/tanstack/Mutations"
import Loader from "./ui/Loader"

function AddExpense() { 

    const { data } = useGetAllCategories()
    const { mutateAsync: SubmitForm, isPending } = useAddExpense()
    const [formData, setFormData] = useState({
        expense_name: '',
        category_name: 'Select Category',
        amount: 0
    })

    async function handleAddExpense() {
        try {

            console.log(formData)

            if (!(formData.expense_name.trim() &&
                formData.category_name.trim() &&
                formData.amount > 0
            )) {
                throw new Error('All Fields are required')
            }

            await SubmitForm(formData)

            setFormData({
                ...formData,
                expense_name: '',
                category_name: '',
                amount: 0
            })

        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="outline-dashed outline-2 w-full max-w-lg px-4 py-4 rounded-md outline-gray-500 flex flex-col gap-4">
            <input value={formData.expense_name} type="text" placeholder="Add Expense Name"
                className="text-gray-600 border rounded-lg border-gray-400 outline-none w-full text-xl font-medium px-4 py-3"
                onChange={(e) => setFormData({ ...formData, expense_name: e.target.value })} />

            <select
                defaultValue={formData.category_name}
                className="text-gray-600 border rounded-lg border-gray-400 outline-none w-full text-xl font-medium px-4 py-3 cursor-pointer"
                onChange={(e) => setFormData({ ...formData, category_name: e.target.value })}>
                <option hidden value=''>Select Category</option>
                {
                    data && data.data.map((category, index) => (
                        <option
                            key={index}
                            className="text-gray-600 cursor-pointer border rounded-lg border-gray-400 outline-none w-full text-xl font-medium px-4 py-3">
                            {
                                category?.name
                            }
                        </option>

                    ))
                }
            </select>

            <input value={formData.amount} type="number" placeholder="Add Amount in INR"
                className="text-gray-600 border rounded-lg border-gray-400 outline-none w-full text-xl font-medium px-4 py-3"
                onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
            />

            <button className="bg-sky-400 rounded-lg px-4 py-2 w-fit text-gray-100 font-medium active:bg-sky-500 flex items-center gap-2" onClick={handleAddExpense}>
                {
                    isPending && <Loader />
                }
                Add Expense
            </button>
        </div>
    )
}

export default AddExpense