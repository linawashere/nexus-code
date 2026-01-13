import { useState } from "react";

const Team = () => {
    const TeamMembers = [
        {
            id: 1,
            name: 'Алексей Воронин',
            photo: './images/photo-1.png',
            role: 'Tech Lead',
            experience: '10+ лет во фронтенде',
            description: 'Специализируется на архитектуре сложных SPA. Прошёл путь от верстальщика до руководителя отдела разработки в EdTech',
            stack: 'React, TypeScript, Node.js',
            funFact: 'Пишет технический блог с 5000+ читателей'
        },
        {
            id: 2,
            name: 'Марина Соколова',
            photo: './images/photo-2.png',
            role: 'Senior Frontend Developer',
            experience: '8 лет коммерческой разработки',
            description: 'Эксперт по производительности и оптимизации. Ускорила загрузку 50+ проектов на 30-70%',
            stack: 'Vue, Webpack, Performance',
            funFact: 'Бегает марафоны и оптимизирует код на бегу'
        },
        {
            id: 3,
            name: 'Дмитрий Ковалёв',
            photo: './images/photo-3.png',
            role: 'UX/UI Lead',
            experience: '12 лет в дизайне интерфейсов',
            description: 'Превращает сложные бизнес-процессы в интуитивные интерфейсы. Работал с банками, телекомом, гос. проектами',
            stack: 'Figma, Design Systems, UX Research',
            funFact: 'Собирает ретро-консоли и делает для них игры'
        },
        {
            id: 4,
            name: 'Иван Петров',
            photo: './images/photo-4.png',
            role: 'Fullstack Developer',
            experience: '6 лет fullstack разработки',
            description: 'Может сделать всё — от базы данных до анимаций в браузере. Любит сложные интеграции и нестандартные задачи',
            stack: 'React, Nest.js, PostgreSQL',
            funFact: 'Ведёт подкаст про разработку с гостями из FAANG'
        },
        {
            id: 5,
            name: 'Екатерина Морозова',
            photo: './images/photo-5.png',
            role: 'Project Manager',
            experience: '7 лет управления IT-проектами',
            description: 'Организует процессы так, что клиенты получают результат вовремя, а разработчики не горят',
            stack: 'Agile, Scrum, Communication',
            funFact: 'Переводит техническую документацию с 5 языков'
        },
        {
            id: 6,
            name: 'Артём Новиков',
            photo: './images/photo-6.png',
            role: 'QA Lead',
            experience: '9 лет тестирования веб-приложений',
            description: 'Находит баги там, где их быть не должно. Выстроил процесс QA, снизивший количество production-инцидентов на 90%',
            stack: 'Automation, Cypress, Load Testing',
            funFact: 'Пишет скрипты для автоматизации домашних задач'
        }
    ]

    const [currentSlide, setCurrentSlide] = useState(0);

    return (
        <div className="team" id="team">
            <div className="team__header">
                <h2>Наша команда</h2>
                <p className="team__header-subtitle">
                    Специалисты в frontend, UX/UI, performance и product management.
                    Глубоко погружаемся в бизнес-задачу и находим оптимальные технические решения.
                </p>
            </div>

            <div className="team__slider">
                <div className="team__main-photo">
                    <img src={`${TeamMembers[currentSlide].photo}`} alt={TeamMembers[currentSlide].name} />
                </div>
                <div className="team__slider-right">
                    <div className="team__gallery">
                            {TeamMembers.map(member => {
                                if (member.id === currentSlide + 1) return null;

                                return (
                                    <div
                                        key={member.id}
                                        className="team__gallery-item"
                                        onClick={() => setCurrentSlide(member.id)}
                                    >
                                        <img
                                            src={`${member.photo}`}
                                            alt={member.name}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    <div className="team__pagination">
                        <button
                            className="
                            team__pagination-btn
                            team__pagination-btn--prev
                        "
                            onClick={() => {
                                setCurrentSlide(prev => prev === 0 ? TeamMembers.length - 1 : prev - 1)
                            }}
                        >
                             <img src="./images/arrow.png" alt="button prev" />
                        </button>
                        <span className="team__pagination-counter">
                            {currentSlide + 1}/6
                        </span>
                        <button
                            className="
                            team__pagination-btn
                            team__pagination-btn--next
                        "
                            onClick={() => {
                                setCurrentSlide(prev => prev === TeamMembers.length - 1 ? 0 : prev + 1)
                            }}
                        >
                            <img src="./images/arrow.png" alt="button next" />
                        </button>
                    </div>
                    <div className="team__info">
                        <h3 className="team__info-name">{TeamMembers[currentSlide].name}</h3>
                        <div className="team__info-role">{TeamMembers[currentSlide].role}</div>
                        <div className="team__info-descr">{TeamMembers[currentSlide].description}</div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Team;