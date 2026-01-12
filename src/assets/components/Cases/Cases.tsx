import Button from "../Button/Button"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import { useRef } from "react";

const caseItems = [
    {
        id: 1,
        badge: "Fintech",
        title: "Дашборд для банка с реальным временем",
        text: "Разработали систему мониторинга транзакций с отображением 10 000 + операций в секунду. WebSocket, Canvas-графика, сложная фильтрация",
        results: [
            "• Время отклика: 50ms → 5ms",
            "• Трафик: 2.5M операций/день",
            "• Команда: 3 разработчика, 4 месяца"
        ],
        photo: '../../../public/images/cases1.jpg'
    },
    {
        id: 2,
        badge: "E-commerce",
        title: "PWA для ритейлера с офлайн-работой",
        text: "Progressive Web App для сети магазинов. Работает без интернета, синхронизация при появлении сети, push-уведомления, быстрая загрузка",
        results: [
            "• Конверсия: +40%",
            "• Скорость: 0.8s FCP",
            "• Офлайн: полный функционал"
        ],
        photo: '../../../public/images/cases2.jpg'
    },
    {
        id: 3,
        badge: "HealthTech",
        title: "Телемедицинская платформа с видеоконсультациями",
        text: "Разработали защищённую систему для врачей и пациентов с end-to-end шифрованием, записью сессий, интеграцией с электронными картами и соответствием HIPAA",
        results: [
            "• Задержка видео: <300ms",
            "• Аптайм: 99.99%",
            "• Интеграция с 12 EMR-системами"
        ],
        photo: '../../../public/images/cases3.jpg'
    },
    {
        id: 4,
        badge: "Industry 4.0",
        title: "Мониторинг 10 000+ датчиков в реальном времени",
        text: "Система сбора и визуализации данных с промышленных датчиков. Обработка 500K событий/сек, алертинг, прогноз отказов оборудования на основе ML-моделей",
        results: [
            "• Снижение простоев: на 35%",
            "• Точность прогноза: 92%",
            "• Масштабируемость до 1M устройств"
        ],
        photo: '../../../public/images/cases4.jpg'
    }
];

const Cases = () => {
    const swiperRef = useRef();
    return (
        <div className="cases" id="cases">
            <h2 className="cases__subtitle">Примеры решения сложных технических задач</h2>
            <div className="cases__controls">
                <button
                    className="cases__nav cases__nav--prev"
                    onClick={() => swiperRef.current?.slidePrev()}>
                </button>
                <button
                    className="cases__nav cases__nav--next"
                    onClick={() => swiperRef.current?.slideNext()}
                >
                </button>
            </div>
            <Swiper
                onSwiper={(swiper) => { swiperRef.current = swiper; }}
                className="cases__slider"
                modules={[Autoplay]}
                spaceBetween={10}
                slidesPerView={1.2}
                // autoplay={{ delay: 5000 }}
                loop={true}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 20
                    },
                    768: {
                        slidesPerView: 1.2,
                        spaceBetween: 30
                    },
                    1024: {
                        slidesPerView: 1.2,
                        spaceBetween: 40
                    }
                }}
            >
                {caseItems.map((item, index) => (
                    <SwiperSlide key={item.id}>
                        <div className="cases__slide-container">
                            <div className={`cases__slide cases__slide--${index % 2 === 0 ? 'accent' : 'gray'}`}>
                                <h3 className="cases__badge">{item.badge}</h3>
                                <div className="cases__slide-title">{item.title}</div>
                                <p className="cases__slide-text">{item.text}</p>
                                <div className="cases__results">
                                    {item.results.map((r, i) => <span key={i}>{r}</span>)}
                                </div>
                                <Button>Подробнее о кейсе</Button>
                            </div>
                            <div className={`cases__photo`}>
                                <img src={item.photo}></img>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </div >
    )
}

export default Cases;