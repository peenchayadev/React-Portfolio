const Tech = ({isHightLight,data}) => {
    return(
        <div className="flex gap-3 text-sm">
                {
                    data.map((e,i) => (
                        <div key={`${e}-tech-${i}`} className={`bg-primary text-black px-1 py-1 rounded-lg font-semibold transition-all ${isHightLight ? " hover:text-yellow-500":""}`}>{e}</div>
                    ))
                }
                    
                </div>
    )
}
export default Tech;