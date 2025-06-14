import Sidebar from "@/components/commons/SidebarMenu";
import MyWallet from "@/components/pages/MyWallet";
import Header from "@/components/commons/Header";

export default function Home() {
    return (
        <div className="flex flex-col h-screen">
            <Header/>
            <div className="flex flex-1 overflow-hidden">
                <Sidebar/>
                <main className="flex-1 overflow-y-auto p-6">
                    <MyWallet/>
                </main>
            </div>
        </div>
    );
}
