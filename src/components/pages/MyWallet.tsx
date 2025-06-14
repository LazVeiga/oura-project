import BalanceCard from "../cards/BalanceCard";
import CreditCard from "../cards/CreditCard";
import SpendingsCard from "../cards/SpendingsCard";
import PaymentsCard from "../cards/PaymentsCard";
import SavingsCard from "../cards/SavingsCard";
import TransactionsCard from "../cards/TransactionsCard";
import Link from "next/link";

export default function MyWallet() {
    return (
        <Link href="/myWallet">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-6">
                    <BalanceCard />
                    <SpendingsCard />
                    <PaymentsCard />
                </div>
                <div className="space-y-6">
                    <CreditCard />
                    <SavingsCard />
                </div>
                <div className="space-y-6">
                    <TransactionsCard />
                </div>
            </div>
        </Link>

    );
}