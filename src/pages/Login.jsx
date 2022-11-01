import { NavLink } from "react-router-dom";

export default function Login() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submit");
  }

  return (
    <div className="bg-[#A8BCFF] h-screen w-full flex items-center justify-center">
      <form
        className="bg-white rounded-xl px-6 py-4 shadow-xl"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <h1 className="font-bold text-xl text-center mb-6 text-[#A8BCFF]">
          Chat
        </h1>
        <div className="flex flex-col gap-6">
          <input
            type="text"
            placeholder="Email "
            className="border-b-2  focus:outline-none py-2 text-[#A8BCFF] font-semibold"
          />
          <input
            type="password"
            placeholder="Password"
            className="border-b-2 focus:outline-none py-2 text-[#A8BCFF] font-semibold"
          />
          <button className="bg-[#A8BCFF] text-white text-center w-full py-2 font-semibold rounded-lg mb-4">
            Sign In
          </button>
          <div>
            You don't have an account?{" "}
            <NavLink to="/register" className="text-[#A8BCFF] underline">
              Register
            </NavLink>
          </div>
        </div>
      </form>
    </div>
  );
}
