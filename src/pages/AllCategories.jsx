import CategoryCard from "../components/CategoryCard"
import Navbar from "../components/Navbar"
import { useNavigate } from 'react-router-dom'

function AllCategories() {

    const navigate = useNavigate()

    function handleGoBack() {
        navigate('/')
    }

    return (
        <div className="flex flex-col h-screen">
            <div className="container mx-auto flex-grow border">
                <Navbar />

                <div className="p-4 w-full">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="font-medium text-lg text-gray-600">
                            All Categories
                        </h1>

                        <p className="block md:hidden font-medium px-2 text-sky-600"
                            onClick={handleGoBack}>
                            Go back
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-5 overflow-y-auto">
                        <CategoryCard />
                        <CategoryCard />
                        <CategoryCard />
                        <CategoryCard />
                        <CategoryCard />
                        <CategoryCard />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllCategories