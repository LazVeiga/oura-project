export default function TransactionsCard() {
    return (
        <div className="bg-[#111] p-6 rounded-2xl text-white">
            <p className="text-sm mb-4">Recent Transactions</p>
            <ul className="space-y-2">
                <li className="flex justify-between">
                    <span>money out</span>
                    <span className="text-red-400">- $PRICE</span>
                </li>
                <li className="flex justify-between">
                    <span>money in</span>
                    <span className="text-green-400">+ $PRICE</span>
                </li>
            </ul>
        </div>
    );
}