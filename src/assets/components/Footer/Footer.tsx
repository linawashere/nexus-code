const GeometricDetails = () => {
    return (
        <div className="geometric-container">
            <svg width="170" height="180" xmlns="http://www.w3.org/2000/svg">
                <rect x="15" y="80" width="100" height="100" fill="#A8B1C244" />

                <rect x="50" y="60" width="80" height="80" className="cube" />

                <polygon points="130,60 160,40 160,120 130,140" className="cube" />

                <polygon points="50,60 80,40 160,40 130,60" className="cube" />

                <g className="dots">
                    {Array.from({ length: 5 }).map((_, row) =>
                        Array.from({ length: 5 }).map((_, col) => (
                            <circle
                                key={`${row}-${col}`}
                                cx={1 + col * 20}
                                cy={65 + row * 20}
                                r="1.5"
                                fill="#000"
                            />
                        ))
                    )}
                </g>
            </svg>
        </div >
    );
};

const Footer = () => {
    return (
        <footer className="footer">
            <ul className="footer__nav">
                <li><a href="#team">Команда</a></li>
                <li><a href="#process">Наш подход</a></li>
                <li><a href="#cases">Кейсы</a></li>
                <li><a href="#contact-form">Связаться с нами</a></li>
            </ul>
            <ul className="footer__contacts">
                <li><a href="mailto:info@nexuscode.ru">info@nexuscode.ru</a></li>
                <li><a href="tel:+79999999999">+7 (999) 999-99-99</a></li>
            </ul>
            <div className="footer__socials">
                <a href="#">Переходите в наш Telegram-канал</a>
                <a href="#">Подписывайтесь в Instagram*</a>
            </div>

            <div className="footer__bottom">
                <span>*Запрещенная в РФ соцсеть</span>
                <span>Copyright: © 2026 Nexus code</span>
                <a href="#">Политика конфиденциальности и условия использования</a>
            </div>
            <GeometricDetails></GeometricDetails>
        </footer>
    )
}

export default Footer;