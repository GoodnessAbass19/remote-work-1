const Button = () => {
    return (
        <div className="md:flex grid w-full px-4">
            <button className="text-lg text-gray-500 hover:text-black mx-4">
                <a href="/">Login</a>
            </button>
            <button className="px-3 py-2 text-gray-500 text-lg border-2 border-gray-500 rounded-xl hover:border-black hover:text-black">
                <a href="/">Register</a>
            </button>
        </div>
    );
}
 
export default Button;