export default function WelcomeCard() {
    return (
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
    );
}