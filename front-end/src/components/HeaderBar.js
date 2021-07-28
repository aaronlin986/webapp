
const HeaderBar = ({name, loginPopup}) => {
    return (
        <div>
            <h1>{name}<button style={{float: 'right'}} onClick={loginPopup}>Sign In</button></h1>
        </div>
    )
}

export default HeaderBar