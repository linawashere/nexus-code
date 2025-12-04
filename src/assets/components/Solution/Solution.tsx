const Solution = () => {
  return (
    <section className="solution">
        <h2 className="solution__title">С Nexus Code вы сможете</h2>
        
        <div className="solution__grid">
          <div className="solution__item">
            <div className="solution__number">01</div>
            <h3>Понять, почему сайт не работает</h3>
            <p>Проведём аудит, найдём узкие места и предложим конкретные решения</p>
          </div>
          
          <div className="solution__item">
            <div className="solution__number">02</div>
            <h3>Создать продукт, а не «просто сайт»</h3>
            <p>Разработаем SPA, дашборд или сложный интерфейс с продуманной логикой</p>
          </div>
          
          <div className="solution__item">
            <div className="solution__number">03</div>
            <h3>Избавиться от технического долга</h3>
            <p>Перепишем кривой код, настроим CI/CD, сделаем код поддерживаемым</p>
          </div>
          
          <div className="solution__item">
            <div className="solution__number">04</div>
            <h3>Работать с командой, а не подрядчиками</h3>
            <p>Мы становимся частью вашего проекта, а не просто исполняем ТЗ</p>
          </div>
        </div>
    </section>
  )
}

export default Solution;