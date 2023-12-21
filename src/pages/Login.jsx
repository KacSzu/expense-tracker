import LoginForm from "../components/authentication/LoginForm";

function Login() {
  return (
    <div className="flex h-screen  flex-col items-center justify-start gap-4">
      <img className="mt-10" src="logo-transparent.png" />
      <LoginForm />
    </div>
  );
}

export default Login;
