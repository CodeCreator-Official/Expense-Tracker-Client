import { Outlet } from "react-router-dom"

function AuthLayout() {
    return (
        <div className="border w-full h-screen">
            <div className="w-full h-full flex items-center justify-center">
                <Outlet/>
            </div>
        </div>
    )
}

export default AuthLayout