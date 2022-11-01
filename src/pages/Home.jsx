import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Message from "../components/Message";
import Input from "../components/Input";
export default function Home() {
  return (
    <div className="bg-[#A8BCFF] h-screen w-full flex items-center justify-center shadow-xl">
      <div className="flex">
        <Sidebar />
        <div className="w-[640px]">
          <Navbar />
          <div className="h-[480px] bg-[#DDDCF7] w-full px-2">
            <Message isReverse={false} />
            <Message isReverse={true} />
          </div>
          <Input />
        </div>
      </div>
    </div>
  );
}
