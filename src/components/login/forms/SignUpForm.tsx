export default function SignUpForm() {
    return (
        <div className="w-1/2 bg-black flex flex-col justify-center px-16 py-12 text-white">
            <h2 className="text-2xl font-semibold mb-6">Sign Up Account</h2>
            <p className="text-sm text-gray-400 mb-8">
                Enter your personal data to create your account.
            </p>

            <div className="flex gap-4 mb-6">
                <button className="flex-1 bg-white text-black py-2 rounded-md font-medium">Google</button>
                <button className="flex-1 bg-white text-black py-2 rounded-md font-medium">Github</button>
            </div>

            <div className="flex items-center gap-4 mb-6">
                <div className="flex-1 h-px bg-gray-600"></div>
                <span className="text-gray-400 text-sm">Or</span>
                <div className="flex-1 h-px bg-gray-600"></div>
            </div>

            <form className="space-y-4">
                <div className="flex gap-4">
                    <input
                        type="text"
                        placeholder="eg. John"
                        className="flex-1 bg-gray-900 p-3 rounded-md border border-gray-700 placeholder-gray-400"
                    />
                    <input
                        type="text"
                        placeholder="eg. Francisco"
                        className="flex-1 bg-gray-900 p-3 rounded-md border border-gray-700 placeholder-gray-400"
                    />
                </div>

                <input
                    type="email"
                    placeholder="eg. johnferas@gmail.com"
                    className="w-full bg-gray-900 p-3 rounded-md border border-gray-700 placeholder-gray-400"
                />

                <input
                    type="password"
                    placeholder="Enter your password"
                    className="w-full bg-gray-900 p-3 rounded-md border border-gray-700 placeholder-gray-400"
                />

                <p className="text-sm text-gray-400">Must be at least 8 characters.</p>

                <button
                    type="submit"
                    className="w-full bg-white text-black py-3 rounded-md font-semibold mt-4"
                >
                    Sign Up
                </button>
            </form>

            <p className="text-sm text-center text-gray-400 mt-6">
                Already have an account?{' '}
                <a href="#" className="text-white underline">Log in</a>
            </p>
        </div>
    );
}