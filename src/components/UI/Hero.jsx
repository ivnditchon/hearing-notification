import hero from '../../images/hero.png';

const Hero = () => {
    return (  
        <div className='hidden h-auto lg:flex lg:justify-end xl:justify-center'>
            <img src={hero} alt='Hero' className='lg:w-[90%] xl:w-[100%] h-auto' />
        </div>
    );
}
 
export default Hero;