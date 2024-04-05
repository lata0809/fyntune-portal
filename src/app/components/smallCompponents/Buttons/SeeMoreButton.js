
function SeeMoreButton({ title }) {
    return (
      <div className="flex justify-center p-4">
          <button className="text-base font-semibold h-12 px-6 py-3 capitalize rounded border-2 border-[#0075E6] text-[#0075E6] hover:bg-[#0075E6] hover:text-white">
              {title}
          </button>
      </div>
    )
  }
  
  export default SeeMoreButton