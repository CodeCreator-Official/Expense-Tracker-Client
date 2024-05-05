import ExpenseTable from "../components/ExpenseTable"
import Navbar from "../components/Navbar"
import { useNavigate, useParams } from "react-router-dom"
import { useGetAllExpensesByCategory } from "../lib/tanstack/Mutations"
import { useEffect, useState } from "react"
import Loader from "../components/ui/Loader"

function ExpensesByCategory() {

    const navigate = useNavigate()
    const categoryName = useParams()
    const { mutateAsync, isPending } = useGetAllExpensesByCategory()
    const [data, setData] = useState(null)

    function handleGoBack() {
        navigate('/')
    }

    useEffect(() => {
        (async () => {
            const res = await mutateAsync(categoryName.name)

            if (res.success) {
                setData(res)
            }
        })()
    }, [])


    return (
        <div className="flex flex-col h-screen">
            <div className="container mx-auto flex-grow border">
                <Navbar />

                <div className="p-4 w-full">
                    <div className="flex justify-between items-center mb-0">
                        <h1 className="font-medium text-lg text-gray-600">
                            All Categories
                        </h1>

                        <p className="block md:hidden font-medium px-2 text-sky-600"
                            onClick={handleGoBack}>
                            Go back
                        </p>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    {
                        isPending ?
                            <Loader /> :
                            <ExpenseTable data={data} />
                    }
                </div>
            </div>
        </div>
    )
}

export default ExpensesByCategory