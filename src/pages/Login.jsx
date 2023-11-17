import LoginForm from "../features/authentication/LoginForm";

function Login() {
  return (
    <div className=" flex h-screen  flex-col items-center justify-start gap-4   bg-yellow-50">
      <img className="mt-10" src="login-1.jpg" />
      <LoginForm />
    </div>
  );
}

export default Login;
