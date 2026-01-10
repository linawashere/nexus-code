import Button from "../Button/Button"

const Results = () => {
  return (
    <div className="results">
        <h2 className="results__title">Мы не просто делаем сайты — мы создаём инструменты для роста</h2>
        
        <div className="results__grid">
          <div className="results__stat">
            <div className="results__number">40%</div>
            <p className="results__label">Средний рост конверсии после редизайна</p>
          </div>
          
          <div className="results__stat">
            <div className="results__number">2.5x</div>
            <p className="results__label">Ускорение загрузки страниц</p>
          </div>
          
          <div className="results__stat">
            <div className="results__number">0</div>
            <p className="results__label">Технических долгов в новых проектах</p>
          </div>
          
          <div className="results__stat">
            <div className="results__number">100%</div>
            <p className="results__label">Проектов сданных в срок</p>
          </div>
        </div>
        
        <div className="results__cta">
          <p className="results__text">
            Вместе мы создадим не просто интерфейс, а работающий бизнес-инструмент, 
            который будет расти и масштабироваться вместе с вашей компанией
          </p>
          <Button>
            Обсудить проект
          </Button>
        </div>
    </div>
  )
}

export default Results;