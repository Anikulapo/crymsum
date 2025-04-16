const Arrow = () => {
    return(
            <div className="group bg-black w-[11%] h-[40px] rounded-full 
            cursor-pointer hover:w-[90px] hover:px-[10px] transition-all duration-300 ease-[cubic-bezier(0.59, 0.13, 0.57, 0.98)]
             flex items-center justify-center
            ">
                <img src="/images/arrow.svg" alt=""  className="
                group-hover:translate-x-[20px]
                transform  
                transition-all duration-300 ease-[cubic-bezier(0.59, 0.13, 0.57, 0.98)]"/>
            </div>
    )

}

export default Arrow;