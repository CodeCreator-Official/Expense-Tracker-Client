import AddCategory from "../components/AddCategory"
import AddExpense from "../components/AddExpense"
import Card from "../components/Card"
import CategoryCard from "../components/CategoryCard"
import ExpenseTable from "../components/ExpenseTable"
import Navbar from "../components/Navbar"
import { useGetAllExpenses, useGetAllExpensesInGroup } from "../lib/tanstack/Queries"

function Home() {

  const { data: categories } = useGetAllExpensesInGroup()
  const { data: expenses, isLoading } = useGetAllExpenses()

  return (
    <div className="w-full h-full">
      <div className="container mx-auto h-full border">
        <Navbar />

        <div className="md:p-4 m-4 flex flex-col md:flex-row gap-5 items-center md:items-start">
          <div className="flex flex-col gap-5 px-4 w-full max-w-lg">
            <Card heading='Add new Category'>
              <AddCategory />
            </Card>

            <Card heading='Add new Expense'>
              <AddExpense />
            </Card>
          </div>

          <div className="md:p-4 m-4 w-full flex flex-col md:flex-row gap-5 items-center md:items-start">
            <Card heading='Your Categories'>
              <div className="flex flex-wrap gap-4 justify-center md:justify-normal">
                {
                  categories?.data?.length === 0 &&
                  <p className="text-base font-medium text-gray-400">
                    No Categories Added yet.
                  </p>
                }
                {
                  categories && categories.data.map((category, index) => (
                    index < 5 ? (
                      <CategoryCard
                        key={index}
                        categoryName={category.category}
                        CategoryAmount={category.budget_amount}
                        SpentAmount={category.total_spent}
                        totalExpenses={category.expenses.length}
                      />
                    ) : index === 5 ? (
                      <div key={index} className="group transition-all duration-200 font-sans rounded-lg w-full sm:max-w-sm">
                        <a href="/all-categories" key={index} className="border flex items-center justify-center w-full h-full rounded-lg group-hover:border-gray-400">
                          <i className='bx bx-chevron-right text-6xl group-hover:text-gray-400 text-gray-300'></i>
                        </a>
                      </div>
                    ) : null
                  ))
                }

              </div>
            </Card>
          </div>
        </div>


        <div className="px-8">
          <Card heading='Recent History'>
            <div className="overflow-x-auto">
              <ExpenseTable data={expenses} isloading={isLoading} />
            </div>
          </Card>
        </div>

      </div>
    </div >
  )
}

export default Home