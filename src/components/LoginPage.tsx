export default function SignUpPage() {
    return (
        <div className="min-h-screen flex">
            <div
                className="w-1/2 bg-gradient-to-br from-purple-700 to-black text-white flex flex-col justify-center items-center p-10 rounded-r-[2rem]">
                <h2 className="text-2xl font-bold mb-2">OnlyPipe</h2>
                <h1 className="text-4xl font-bold mb-6 text-center">Get Started with Us</h1>
                <p className="text-center text-gray-300 mb-10 max-w-sm">
                    Complete these easy steps to register your account.
                </p>

                <div className="space-y-4 w-full max-w-xs">
                    <div className="flex items-center gap-3 bg-white/10 p-4 rounded-xl border border-white/20">
                        <div className="w-4 h-4 rounded-full border-2 border-white flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-white"></div>
                        </div>
                        <span>Sign up your account</span>
                    </div>

                    <div className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                        <div className="w-4 h-4 rounded-full border-2 border-gray-400"></div>
                        <span>Set up your workspace</span>
                    </div>

                    <div className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                        <div className="w-4 h-4 rounded-full border-2 border-gray-400"></div>
                        <span>Set up your profile</span>
                    </div>
                </div>
            </div>

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
        </div>
    );
}