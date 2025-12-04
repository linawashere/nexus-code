import Button from '../Button/Button';

const Process = () => {
    return (
        <div className="process">
            <h2>Как мы создаём продукты</h2>
            <div className="process__grid">
                <div className="process__card">
                    <div className="process__number">01</div>
                    <h3 className="process__card-title">Анализ и аудит</h3>
                    <p className="process__card-text">
                        Изучаем бизнес-задачу, анализируем конкурентов, проводим UX-аудит существующих решений
                    </p>
                </div>
                <div className="process__card">
                    <div className="process__number">02</div>
                    <h3 className="process__card-title">Прототип и дизайн</h3>
                    <p className="process__card-text">
                        Создаём интерактивные прототипы, проектируем UI/UX, утверждаем визуальную концепцию
                    </p>
                </div>

                <div className="process__card">
                    <div className="process__number">03</div>
                    <h3 className="process__card-title">Разработка</h3>
                    <p className="process__card-text">
                        Пишем чистый, масштабируемый код. Еженедельные демо, code review, полная прозрачность
                    </p>
                </div>

                <div className="process__card">
                    <div className="process__number">04</div>
                    <h3 className="process__card-title">Тестирование</h3>
                    <p className="process__card-text">
                        QA на всех этапах, тестирование на реальных устройствах, нагрузочное тестирование
                    </p>
                </div>

                <div className="process__card">
                    <div className="process__number">05</div>
                    <h3 className="process__card-title">Запуск и интеграция</h3>
                    <p className="process__card-text">
                        Деплой, настройка CI/CD, подключение аналитики, интеграция с вашими системами
                    </p>
                </div>

                <div className="process__card">
                    <div className="process__number">06</div>
                    <h3 className="process__card-title">Поддержка и развитие</h3>
                    <p className="process__card-text">
                        Мониторинг, оперативная поддержка, регулярные обновления, масштабирование продукта
                    </p>
                </div>
            </div>

            <div className="process__cta">
                <p className="process__cta-text">Узнайте подробнее о нашем процессе создания продуктов</p>
                <Button>
                    Скачать презентацию методологии
                </Button>
            </div>

        </div>
    )
}

export default Process;