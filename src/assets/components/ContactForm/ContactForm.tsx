import { useForm } from 'react-hook-form';

interface FormData {
    name: string;
    tel: string;
}

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    return (
        <div className="form">
            <h2>Обсудим?</h2>
            <p className="form__descr">В процессе работы вы получите комплексный анализ технического состояния проекта, выявление архитектурных проблем и практические рекомендации по созданию производительных интерфейсов. Мы покажем, как превратить ваш сайт из затратной статьи в рабочий бизнес-инструмент.</p>
            <form
                onSubmit={handleSubmit(onsubmit)}
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
                        {...register("tel", {
                            required: "Поле обязательно",
                            pattern: {
                                value: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
                                message: "Некорректный номер телефона"
                            }
                        })}
                        className={errors.name ? 'error' : ''}
                        placeholder="Телефон"
                    />
                </div>
            </form>
        </div>
    )
}

export default ContactForm;