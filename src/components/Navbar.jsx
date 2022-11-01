export default function Navbar(props) {
  return (
    <div className="flex justify-between rounded-tr-xl items-center bg-[#5F5B8F] px-4">
      <div className="text-white py-4 font-medium">Nguyen Thi My Kim</div>
      <div className="flex gap-2">
        <button>
          <img className="h-[24px] w-[24px]" src="/video.svg" alt="icon" />
        </button>
        <button>
          <img className="h-[24px] w-[24px]" src="/add-user.svg" alt="icon" />
        </button>
        <button>
          <img className="h-[24px] w-[24px]" src="/dots.svg" alt="icon" />
        </button>
      </div>
    </div>
  );
}
