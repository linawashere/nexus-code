import logo from '../../../../public/images/logo.png';
import sound from '../../../../public/images/sound.png';
import Button from '../Button/Button';

const Hero = () => {
    return (
        <div className="hero">
            <div className='hero__buttons'>
                <Button>Связаться с нами</Button>
                <Button className="hero__buttons-sound">
                    <img src={sound} alt="sound"  />
                </Button>
            </div>
            <h1 className="hero__heading">Интерфейсы с характером</h1>
            <div className="hero__descr">
                <h3 className="hero__title">Работаем на стыке дизайна, технологий и бизнес-логики</h3>
                <div className="hero__logo">
                    <img src={logo} alt="logo" className="hero__logo-img" />
                    <span className="hero__logo-title">Nexus code</span>
                </div>
            </div>
        </div>
    )
}

export default Hero;