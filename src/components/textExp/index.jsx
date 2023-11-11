const TextExp =({isHightLight, children})=> {
    return(
        <div>
            <span className={`text-sm pl-6 font-semibold ${isHightLight ? "text-primaryUse": " "}`}>
                {children}
            </span>
        </div>
    )
}
export default TextExp;