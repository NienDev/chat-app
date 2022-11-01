export default function Message(props) {
  const yourClass = "";
  const friendClass = "";

  return (
    <div>
      <div
        className={`flex ${
          props.isReverse ? `flex-row-reverse` : ``
        } items-center gap-4`}
      >
        <div>
          <img
            className="h-[60px] w-[60px] rounded-full object-cover object-center"
            src="/user.jpg"
            alt="img"
          />
        </div>
        <div
          className={`bg-white p-2 ${
            props.isReverse
              ? `rounded-b-xl rounded-tl-xl`
              : `rounded-b-xl rounded-tr-xl`
          } max-w-[90%] ${
            props.isReverse ? `bg-[#5F5B8F] text-white` : `bg-white`
          }`}
        >
          Hello My name is Dai Nien
        </div>
      </div>
      <div className={`${props.isReverse ? `text-right` : `text-left`}`}>
        just now
      </div>
    </div>
  );
}
