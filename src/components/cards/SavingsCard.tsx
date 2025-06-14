export default function SavingsCard() {
    return (
        <div className="bg-[#111] p-6 rounded-2xl text-white">
            <p className="text-sm mb-2">Saving goal</p>
            <h2 className="text-2xl font-bold">$PRICE</h2>
            <div className="mt-2 w-full h-2 bg-ou-green/20 rounded">
                <div className="h-full w-3/4 bg-ou-pink rounded"/>
            </div>
        </div>
    );
}