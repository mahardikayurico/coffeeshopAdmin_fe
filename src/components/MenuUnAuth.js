import { useNavigate } from "react-router-dom";

const MenuUnAuth = () => {
  const navigate = useNavigate();
  return (
    <div className="space-x-6 flex flex-row items-center mb-2">
      <button className="font-bold" onClick={() => navigate("/login")}>
        Login
      </button>
      <button
        className="border bg-amber-500 rounded-full py-2 px-6 text-amber-900 "
        onClick={() => navigate("/signup")}
      >
        Sign Up
      </button>
    </div>
  );
};

export default MenuUnAuth;
