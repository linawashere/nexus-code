import photo1 from '../../../../public/images/struggle-1.jpg';
import photo2 from '../../../../public/images/struggle-2.jpg';
import photo3 from '../../../../public/images/struggle-3.jpg';

const Struggle = () => {
    return (
        <div className="struggle">
            <div className="struggle__text">
                <h2>Каждый проект — это люди</h2>
                <p className="struggle__text-title">
                    Люди, которые теряют время на бесконечные правки, несогласованность
                    и непонимание между дизайнерами, разработчиками и клиентами
                </p>
            </div>

            <div className="struggle__images">
                <img src={photo1} alt="photo" className='struggle__images-item' />
                <img src={photo2} alt="photo" className='struggle__images-item' />
                <img src={photo3} alt="photo" className='struggle__images-item' />
            </div>
        </div>
    )
}

export default Struggle;