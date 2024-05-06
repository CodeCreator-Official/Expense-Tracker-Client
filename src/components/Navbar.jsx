import { useNavigate } from "react-router-dom"
import { useLogoutAccount } from "../lib/tanstack/Mutations"
import { useState } from "react"
import useAuthContext from "../context/AuthContext"

function Navbar() { 

    const [showInfo, setShowInfo] = useState(false)
    const { mutateAsync: LogoutUser } = useLogoutAccount()
    const { user } = useAuthContext()
    console.log(user)
    const navigate = useNavigate()

    async function handleLogout() {
        const res = await LogoutUser()

        if (res.success) {
            localStorage.removeItem('user')
            navigate('/auth/signin')
        }
    }

    return (
        <div className="px-5 py-3 flex items-center border-b justify-between">
            <h1 className="text-xl font-medium antialiased">ExpenseTracker</h1>

            <div className="flex items-center gap-5">
                <div className="relative">
                    <img
                        width={35}
                        height={35}
                        className="rounded-full cursor-pointer"
                        src="/public/images/profile-placeholder.png"
                        alt="profile-img"
                        onClick={() => setShowInfo(!showInfo)} // Toggle visibility of info card
                    />
                    {showInfo && (
                        <div className="bg-gray-100 p-4 absolute top-12 -right-28 sm:right-0 rounded shadow-md divide-y divide-gray-300">
                            <p className="py-1 text-gray-500 font-medium">User Info:</p>
                            <p className="py-1 text-gray-500 font-medium">
                                Name: {user.fullname}
                            </p>
                            <p className="py-1 text-gray-500 font-medium text-nowrap">
                                Email: {user.email}
                            </p>
                        </div>
                    )}
                </div>

                <button
                    className="bg-red-300 hover:bg-red-400 border border-red-600 px-5 py-2 text-base text-red-800 rounded font-semibold transition-all duration-200"
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </div>
        </div>
    )
}

export default Navbar