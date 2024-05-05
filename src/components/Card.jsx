/* eslint-disable react/prop-types */

function Card({ children, heading }) {
    return (
        <div className="p-4 w-full">
            <h1 className="font-medium text-lg text-gray-600 mb-6">
                {heading}
            </h1>
            {children}
        </div>
    )
}

export default Card