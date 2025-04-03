import AuthLayout from "@/components/layouts/auth-layout";
import SignUpView from "@/views/signup";

export default function SignUp() {
  return (
    <AuthLayout>
      <SignUpView />
    </AuthLayout>
  );
}
