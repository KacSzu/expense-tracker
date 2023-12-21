import { useState } from "react";
import Button from "../ui/Button";
import FormRow from "../ui/FormRow";
import Loader from "../ui/Loader";
import { useLogin } from "./useLogin";
function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading } = useLogin();
  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      },
    );
  }
  if (isLoading) return <Loader />;
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <FormRow label="E-mail">
        <input
          id="email"
          type="email"
          placeholder="Type your e-mail"
          value={email}
          autoComplete="username"
          onChange={(e) => setEmail(e.target.value)}
          className="w-48 rounded-xl border border-stone-500 px-2 py-3 xl:w-64 "
          disabled={isLoading}
        />
      </FormRow>
      <FormRow label="Password">
        <input
          id="password"
          className="w-48 rounded-xl border border-stone-500 px-2 py-3 disabled:cursor-not-allowed xl:w-64 "
          type="password"
          placeholder="Type your password"
          value={password}
          autoComplete="current-password"
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        />
      </FormRow>
      <div className=" flex justify-center">
        <Button disabled={isLoading} variation="primary">
          Login
        </Button>
      </div>
    </form>
  );
}

export default LoginForm;
