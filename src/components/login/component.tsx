import { LoginForm } from "./LoginForm";

export const Login = () => {
  return (
    <div className="flex flex-col w-full max-w-md mt-10 px-4 py-8 bg-white border-t-2 border-green-400 rounded-lg shadow-xl sm:px-6 md:px-8 lg:px-10">
      <div className="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl">
        Login To Your Account
      </div>
      <LoginForm />
    </div>
  );
};
