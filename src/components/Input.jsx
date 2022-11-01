export default function Input() {
  return (
    <div className="w-full h-[80px] bg-white text-black flex justify-between items-center px-2 rounded-br-xl">
      <div className="flex-1">
        <input
          type="text"
          placeholder="type something..."
          className="focus:outline-none text-xl w-full"
        />
      </div>
      <div className="flex gap-4 items-center">
        <button className="h-[48px] w-[48px]">
          <img className="" src="/attach.svg" alt="icon" />
        </button>

        <button className="h-[48px] w-[48px]">
          <img className="" src="/add-img.svg" alt="icon" />
        </button>
        <button className="bg-[#A8BCFF] text-white text-center w-full py-2 font-semibold rounded-lg px-4">
          Send
        </button>
      </div>
    </div>
  );
}
