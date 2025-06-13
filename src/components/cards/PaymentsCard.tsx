export default function PaymentsCard() {
    return (
        <div className="bg-[#111] p-6 rounded-2xl text-white">
            <p className="text-sm">Incoming payments</p>
            <div className="mt-4 flex justify-between">
                <div>
                    <p className="font-semibold">PLAN</p>
                    <p className="text-xs text-gray-400">PLAN.PAYMENT_DATE</p>
                </div>
                <p>$PLAN.PRICE</p>
            </div>
        </div>
    );
}