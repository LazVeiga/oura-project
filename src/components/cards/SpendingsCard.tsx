export default function SpendingsCard() {
    return (
        <div className="bg-[#111] p-6 rounded-2xl text-white">
            <p className="text-sm mb-2">Spending this month</p>
            <div className="w-full h-2 rounded bg-ou-green/20">
                <div className="h-full w-1/2 bg-ou-pink rounded"></div>
            </div>
        </div>
    );
}