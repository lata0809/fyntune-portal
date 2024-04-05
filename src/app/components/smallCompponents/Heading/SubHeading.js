
function SubHeading({ title, highlightedText, LastTitle , width}) {
  return (
    <div className="flex items-center justify-center">
        <h2 className="text-[1.8rem] text-center text-[#46474A] font-semibold" style={{width:`${width}`}}> 
            {title}
            <span className="text-[#00A831]"> {highlightedText} </span>
            {LastTitle}
        </h2>
    </div>
  )
}

export default SubHeading