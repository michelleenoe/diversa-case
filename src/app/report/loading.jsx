function App() {
    return (
        <>
            <div role="status"
                className="animate-pulse flex flex-col md:flex-row justify-center items-center min-h-screen space-y-6 md:space-y-0 md:space-x-16">

                <div className="w-full md:max-w-lg">
                    <div className="h-4 bg-gray-200 rounded-full w-72 mb-6"></div>
                    <div className="h-3 bg-gray-200 rounded-full max-w-xl mb-4"></div>
                    <div className="h-3 bg-gray-200 rounded-full mb-4"></div>
                    <div className="h-3 bg-gray-200 rounded-full max-w-xl mb-4"></div>
                    <div className="h-3 bg-gray-200 rounded-full max-w-xl mb-4"></div>
                    <div className="h-3 bg-gray-200 rounded-full max-w-lg"></div>
                </div>

                <div className="flex items-center justify-center w-full md:w-72 h-72 bg-gray-200 rounded">
                    <svg className="w-10 h-20 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <span className="sr-only">Loading...</span>
            </div>
        </>
    );
}

export default App;
