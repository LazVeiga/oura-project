import WelcomeCard from "@/components/login/cards/WelcomeCard";
import SignUpForm from "@/components/login/forms/SignUpForm";

export default function LoginPage() {
    return (
        <div className="min-h-screen flex">
            <WelcomeCard/>
            <SignUpForm/>
        </div>
    );
}