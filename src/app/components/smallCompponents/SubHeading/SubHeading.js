
function SubHeading(props) {
  return (
    <div className="flex items-center justify-center">
        <h2 className="text-[1.8rem] font-semibold"> 
            {props.title}
            <span className="text-[#00A831]"> { props.highlightedText} </span>
        </h2>
    </div>
  )
}

export default SubHeading