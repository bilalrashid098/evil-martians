import LoginForm from "@/components/forms/login";
import AuthLayout from "@/components/layouts/auth-layout";

export default function Login() {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
}
