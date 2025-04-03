import AuthLayout from "@/components/layouts/auth-layout";
import SignUpView from "@/views/signup";

export default function Home() {
  return (
    <AuthLayout>
      <SignUpView />
    </AuthLayout>
  );
}
