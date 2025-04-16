const Arrow = () => {
    return(
            <div className="group bg-black
             xl:w-[50px]
            w-[40px] h-[40px]
            md:w-[50px] md:h-[50px] 
            lg:w-[50px]  lg: rounded-full 
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