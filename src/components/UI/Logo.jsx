import logo from '../../images/logo.png'

const Logo = ({ setLogoStyle }) => {
    return ( 
        <div>
            <img src={logo} alt="Logo" className={`${setLogoStyle} object-contain`} />
        </div>
    );
}
 
export default Logo;