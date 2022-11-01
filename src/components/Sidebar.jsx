import Chats from "./Chats";
import Search from "./Search";
export default function Sidebar() {
  return (
    <div className="w-[400px] text-white">
      <div className="flex justify-between items-center  bg-[#2F2C53] py-2 px-4 rounded-tl-xl">
        <h1 className="font-bold text-xl">App Chat</h1>
        <div className="flex gap-4 items-center">
          <img
            src="/user.jpg"
            alt="img"
            className="h-[32px] w-[32px] rounded-full "
          />
          <h3>Tran Dai Nien</h3>
          <button className="p-2 rounded-xl bg-[#5F5B8F]">Log out</button>
        </div>
      </div>
      <Search />
      <Chats />
    </div>
  );
}
