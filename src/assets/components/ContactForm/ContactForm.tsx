import { useForm } from 'react-hook-form';

interface FormData {
    name: string;
    tel: string;
    agreement: boolean;
}

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<FormData>({
        defaultValues: {
            agreement: false,
        }
    });

    const onSubmit = (data: FormData) => {
        console.log('Форма отправлена:', data);
    };

    return (
        <div className="form">
            <h2>Обсудим?</h2>
            <p className="form__descr">В процессе работы вы получите комплексный анализ технического состояния проекта, выявление архитектурных проблем и практические рекомендации по созданию производительных интерфейсов. Мы покажем, как превратить ваш сайт из затратной статьи в рабочий бизнес-инструмент</p>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="contact-form"
                id="contact-form"
            >
                <div className="form-group">
                    <input
                        id="name"
                        {...register("name", {
                            required: "Имя обязательно",
                            minLength: { value: 2, message: "Минимум 2 символа" }
                        })}
                        className={errors.name ? 'error' : ''}
                        placeholder="Имя"
                    />
                    {errors.name && <span className="error-message">{errors.name.message}</span>}
                </div>
                <div className="form-group">
                    <input
                        id="tel"
                        type="tel"
                        {...register("tel", {
                            required: "Поле обязательно",
                            pattern: {
                                value: /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/,
                                message: "Некорректный номер телефона"
                            }
                        })}
                        className={errors.tel ? 'error' : ''}
                        placeholder="+7 (___) ___-__-__"
                    />
                    {errors.tel && <span className="error-message">{errors.tel.message}</span>}
                </div>
                <div className="form-group">
                    <label className="checkbox-label">
                        <input
                            type="checkbox"
                            id="agreement"
                            {...register("agreement", {
                                required: "Необходимо согласие"
                            })}
                            className={`checkbox-input ${errors.agreement ? 'error' : ''}`}
                        />
                        <span className="checkbox-text">
                            Я соглашаюсь на обработку моих персональных данных
                        </span>
                    </label>
                    {errors.agreement && (
                        <span className="error-message">
                            {errors.agreement.message}
                        </span>
                    )}
                </div>
                <button
                    type="submit"
                    className="submit-btn"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Отправка...' : 'Отправить'}
                </button>
            </form>
        </div>
    )
}

export default ContactForm;