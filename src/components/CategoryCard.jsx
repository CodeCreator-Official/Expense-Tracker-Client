/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"

function CategoryCard({ 
    categoryName = 'Personal',
    totalExpenses,
    CategoryAmount,
    SpentAmount, 
}) {

    const calculation = Math.floor((Number(SpentAmount) / (Number(CategoryAmount))) * 100)

    return (
        <div className="border font-sans py-4 px-6 rounded-lg w-full sm:max-w-sm">
            <h1 className="text-2xl font-semibold text-gray-600">
                {categoryName || 'Personal'}
            </h1>
            <p className="text-sm font-medium text-gray-400 py-1">
                Total expenses {totalExpenses || '20'}
            </p>

            <div className="pb-4">
                <div className={`h-4 my-2 bg-green-100 ${calculation > 70 && 'bg-red-100'} rounded overflow-hidden`}>
                    <div className={`h-4 rounded bg-green-400 ${calculation > 70 && 'bg-red-400'} `} 
                    style={{ width: `${calculation}%` }}>
                        {/* Expense visualization */}
                    </div>
                </div>

                <div className="w-full flex items-center justify-between">
                    <p className="text-xs font-medium text-gray-500">
                        Total Amount : {CategoryAmount || '20K'} INR
                    </p>
                    <p className={`text-xs font-medium text-green-500 ${calculation > 70 &&'text-red-400'}`}>
                        Spent : {SpentAmount || '10K'} INR
                    </p>
                </div>
            </div>

            <p className="text-xs w-full font-medium text-blue-600 cursor-pointer pt-2 border-t">
                <Link to={`/expense/${categoryName}`}>View Expenses</Link>
            </p>
        </div>
    )
}

export default CategoryCard