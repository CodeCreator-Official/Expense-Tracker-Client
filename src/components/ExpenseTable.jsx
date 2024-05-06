import { useDeleteExpense } from "../lib/tanstack/Mutations";
import convertTimestampToDate from "../functions/DateFormat";

function ExpenseTable(data) { 

    const { mutateAsync: DeleteExpense } = useDeleteExpense()

    async function handleDelete(id) {
        await DeleteExpense(id)
    } 

    return (
        <table className="table-auto w-full text-nowrap">
            <thead>
                <tr className="bg-gray-100 text-gray-700 text-left">
                    <th className="px-6 py-2">SrNo</th>
                    <th className="px-6 py-2">Date</th>
                    <th className="px-6 py-2">Expense Name</th>
                    <th className="px-6 py-2">Category Type</th>
                    <th className="px-6 py-2">Amount</th>
                    <th className="px-6 py-2">Action</th>
                </tr>
            </thead>
            <tbody>
                {data.data && data.data.data.map((expense, index) => {
                    return (
                        <tr key={index} className="text-left">
                            <td className="px-6 py-2 ">{index + 1}</td>
                            <td className="px-6 py-2">{
                                convertTimestampToDate(expense.date)
                            }</td>
                            <td className="px-6 py-2">{expense.expense_name}</td>
                            <td className="px-6 py-2">{expense.category}</td>
                            <td className="px-6 py-2">{expense.expense_amount}</td>
                            <td className="px-6 py-2">
                                <button
                                    type="button"
                                    className="text-red-500 active:text-red-600"
                                    onClick={() => handleDelete(expense.expense_id)}>Delete</button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    );
}

export default ExpenseTable