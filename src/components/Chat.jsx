export default function Chat(props) {
  return (
    <div className="flex gap-4">
      <img
        src="/user.jpg"
        alt="img"
        className="h-[48px] w-[48px] rounded-full"
      />
      <div className="">
        <h1 className="font-semibold">Nguyen Thi My Kim</h1>
        <p className="text-sm">An nhong ha se yo</p>
      </div>
    </div>
  );
}
