const Picture = ({picture,title}) => {
    return(
        <div>
            <img src={picture} alt={title} className="w-5/6 rounded-lg border-2 border-gray-500 mt-4"/>
        </div>
    )
}
export default Picture;