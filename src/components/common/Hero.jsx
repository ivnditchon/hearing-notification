import hero from '../../images/hero.png';

const Hero = () => {
    return (  
        <div className='hidden xl:block'>
            <img src={hero} alt='Hero' />
        </div>
    );
}
 
export default Hero;