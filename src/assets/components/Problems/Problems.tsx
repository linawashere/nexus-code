import Button from '../Button/Button';

const Problems = () => {
    return (
        <div className="problems">
            <div className="problems__text">
                <h2 className="problems__text-title">У многих компаний есть сайт</h2>
                <span className="problems__text-span">но нет результата</span>
            </div>

            <ul className="problems__list">
                <li className="problems__list-item">Запускали сайт, а он не конвертит</li>
                <li className="problems__list-item">Технический долг не даёт развиваться</li>
                <li className="problems__list-item">Нужна сложная логика, а подрядчики боятся</li>
            </ul>
        </div>
    )
}

export default Problems;