import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import './from.css'


const Form = ({ onSubmit, buyerData, setBuyerData}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch
    } = useForm();

    const formRef = useRef();

    const watchEmail = watch('email');
    const watchConfirmEmail = watch('confirmEmail');

    // const messageOrder = 
    //   Swal.fire({
    //     position: 'top-end',
    //     icon: 'success',
    //     title: 'Successful purchase! order number: ',
    //     showConfirmButton: false,
    //     timer: 1500
    //   })
       

    return (
        <div className='form-compra'>
            <form onSubmit={handleSubmit(onSubmit)} className="form-estilos">
                <div>
                    <label>Name</label>
                    <input
                        name="name"
                        placeholder='Name'
                        defaultValue={buyerData.name}
                        type="text"
                        {...register('name', {
                            required: true,
                        })}
                    />
                </div>
                <div>
                    <label>Adress</label>
                    <input
                        name="adress"
                        placeholder='Adress'
                        defaultValue={buyerData.adress}
                        type="text"
                        {...register('adress', {
                            required: true,
                        })}
                    />
                </div>
                <div>
                    <label>Phone</label>
                    <input
                        name="phone"
                        placeholder='Phone'
                        defaultValue={buyerData.phone}
                        type="text"
                        {...register('phone', {
                            required: true,
                        })}
                    />
                </div>
                <div>
                    <label>Email</label>
                    <input
                        name="email"
                        placeholder='Email'
                        defaultValue={buyerData.email}
                        type="text"
                        {...register('email', {
                            required: true,
                            pattern: /^\w+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/,
                        })}
                    />
                    {errors.Email?.type === 'pattern' && (
                        <p>El formato de email es incorrecto</p>
                    )}
                </div>
                <div>
                    <label>Confirm Email</label>
                    <input
                        name="confirmEmail"
                        placeholder='Confirm Email'
                        type="text"
                        {...register('confirmEmail', {
                            required: true,
                            validate: value =>
                                value === watchEmail || "Los correos electrónicos no coinciden"
                        })}
                    />
                    {errors.confirmEmail && (
                        <p>{errors.confirmEmail.message}</p>
                    )}
                </div>
                <button type="submit" className='button-submit' disabled={!watchEmail || !watchConfirmEmail}>Submit</button>
            </form>
        </div>
    );
};

export default Form;
