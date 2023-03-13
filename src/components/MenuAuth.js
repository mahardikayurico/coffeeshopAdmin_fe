import message from "../assets/img/chat.svg";
import profil from "../assets/img/profil.svg";
import { useNavigate } from "react-router-dom";

const MenuAuth = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex row ">
      <div className="ml-1">
        <form>
          <input
            type="text"
            className="bg-gray-200 rounded-lg p-1"
            placeholder="Search..."
          ></input>
        </form>
      </div>
      <img
        alt="Message"
        onClick={() => navigate("/message")}
        src={message}
        className="w-9 mx-auto p-1 hover:cursor-pointer"
      />
      <img
        alt="Profil"
        onClick={() => navigate("/user")}
        src={profil}
        className="w-9 rounded-full mx-auto p-1 hover:cursor-pointer"
      />
    </div>
  );
};

export default MenuAuth;
