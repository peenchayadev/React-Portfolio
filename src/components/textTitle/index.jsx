const textTitle = (isHightLight,children) => {
    return(
        <div>
            <span className={`text-sm pl-7 font-semibold ${isHightLight['exp1'] ? "text-primaryUse":""}`}>
                {children}
            </span>
        </div>
    )
}
export default textTitle;