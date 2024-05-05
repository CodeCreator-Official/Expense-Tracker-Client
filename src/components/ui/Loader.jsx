/* eslint-disable react/prop-types */

function Loader({ className }) {
    return (
        <div className="w-fit">
            <i className={`bx bx-loader text-lg bx-spin bx-rotate-90 ${className}`} ></i>
        </div>
    )
}

export default Loader