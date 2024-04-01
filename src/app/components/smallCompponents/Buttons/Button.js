
function Button(props) {
  return (
    <div className="flex justify-center p-4">
        <button className="text-[1.3rem] font-semibold h-10 w-[12.25rem] capitalize rounded flex items-center justify-center bg-[#005DB9] text-white px-[0.8rem] py-[1.5rem]">
            {props.title}
        </button>
    </div>
  )
}

export default Button