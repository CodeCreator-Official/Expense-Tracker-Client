import { useState } from "react";
import { useCreateAccount } from "../../lib/tanstack/Mutations";
import Loader from "../../components/ui/Loader";

function Signup() { 

    const [error, setError] = useState({ error: false, message: '' })
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        password: '',
    })
    const { mutate: SubmitForm, isPending, isError, data } = useCreateAccount()

    function handleSubmitForm(e) {
        e.preventDefault()
        try {
            setError({ ...error, error: false })

            if (!(formData.fullname.trim() &&
                formData.email.trim() &&
                formData.password.trim()
            )) {
                throw new Error('All Fields are required')
            }

            SubmitForm(formData)

        } catch (error) {
            console.error(error)
            setError({ error: true, message: error?.message })
        }
    }

    return (
        <div className="md:border py-4 px-6 rounded-lg w-full max-w-lg">
            <h1 className="text-2xl font-bold text-gray-600 mb-2">
                Welcome to Expense Tracker!!
            </h1>
            <h2 className="text-xl font-medium text-gray-600 mb-2">
                Create Account
            </h2>

            <form onSubmit={handleSubmitForm} className="py-2 flex flex-col gap-3">
                <input type="text" placeholder="Enter your Fullname"
                    className="text-gray-600 border rounded-lg border-gray-300 focus:border-gray-400 outline-none w-full text-lg font-normal px-3 py-2"
                    onChange={(e) => setFormData({ ...formData, fullname: e.target.value })}
                />
                <input type="email" placeholder="Enter your Email"
                    className="text-gray-600 border rounded-lg border-gray-300 focus:border-gray-400 outline-none w-full text-lg font-normal px-3 py-2"
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <input type="password" placeholder="Create a strong password"
                    className="text-gray-600 border rounded-lg border-gray-300 focus:border-gray-400 outline-none w-full text-lg font-normal px-3 py-2"
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />

                <button disabled={isPending} className="bg-green-400 active:bg-green-500 p-3 rounded-lg text-gray-100 font-medium text-base flex gap-2 items-center justify-center disabled:bg-green-600 disabled:text-gray-200" type="submit">
                    {
                        isPending && <Loader />
                    }
                    Create Account
                </button>
            </form>

            <p className="text-sm text-gray-700 tracking-wide">Already have account?
                <a href="/auth/signin" className="font-semibold text-sky-600"> Login </a>
            </p>

            <p className="text-red-500">
                {
                    error.error && `*${error.message}`
                }
                {
                    isError && `${data?.error}`
                }
            </p>
        </div>
    )
}

export default Signup