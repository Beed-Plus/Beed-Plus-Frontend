export default function BgView({children, showBgImage=true}: any){
    return(
        <div 
            className={`${showBgImage ? "bg-[url(/hero-bg.jpg)] bg-cover bg-center" : ""} h-full`}
        >
            <div 
                className={`${showBgImage ? "bg-[#000]/60" : ""} h-full` }
            >
                {children}
            </div>
        </div>
    )
}