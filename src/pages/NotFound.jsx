
const NotFound = () => { 
    return (
        <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
            <h1 className="text-4xl font-bold text-center text-red-500">404</h1>
            <p className="text-lg text-gray-700 text-center mt-4">This page is not available.</p>
            <a href="/" className="mt-8 px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700">
                Go Back Home
            </a>
        </div>
    );
};

export default NotFound;
