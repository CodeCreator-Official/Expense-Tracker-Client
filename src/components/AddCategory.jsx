import { useState } from "react"
import Loader from "./ui/Loader"
import { useAddCategory } from "../lib/tanstack/Mutations"

function AddCategory() {

    const [formData, setformData] = useState({
        category_name: '',
        amount: 0
    })
    const { mutateAsync: SubmitForm, isPending } = useAddCategory()

    async function handleAddCategory() {
        try {
            if (!(
                formData.category_name.trim() &&
                formData.amount > 0
            )) {
                throw new Error('All Fields are required')
            }

            await SubmitForm(formData)

            setformData({
                ...formData,
                amount: 0,
                category_name: ''
            })

        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="outline-dashed outline-2 w-full max-w-lg px-4 py-4 rounded-md outline-gray-500 flex flex-col gap-4">
            <input value={formData.category_name} type="text" placeholder="Add Category Name"
                className="text-gray-600 border rounded-lg border-gray-400 outline-none w-full text-xl font-medium px-4 py-3"
                onChange={(e) => setformData({ ...formData, category_name: e.target.value })}
            />
            <input value={formData.amount} type="number" placeholder="Add Amount in INR"
                className="text-gray-600 border rounded-lg border-gray-400 outline-none w-full text-xl font-medium px-4 py-3"
                onChange={(e) => setformData({ ...formData, amount: e.target.value })}
            />

            <button className="bg-green-400 rounded-lg px-4 py-2 w-fit text-gray-100 font-medium active:bg-green-500 flex items-center gap-2" onClick={handleAddCategory}>
                {
                    isPending && <Loader />
                }
                Add Category
            </button>
        </div>
    )
}

export default AddCategory