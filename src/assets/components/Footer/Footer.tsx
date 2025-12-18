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

        </footer>
    )
}

export default Footer;