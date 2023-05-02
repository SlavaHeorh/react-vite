import './createDishForm.scss'
import {useState} from "react";
import {useForm} from "react-hook-form";
import ErrorMessage from "./ErrorMessage.jsx";
import {useCreateDish} from "./useCreateDish.js";


function CreateDishForm({setDishes}) {

    const {register, reset, handleSubmit, formState: {errors}} = useForm({
        mode: 'onChange'
    })

    const {addDish} = useCreateDish(reset, setDishes)


    return (
        <form className='form-creator' onSubmit={handleSubmit(addDish)}>
            <input
                {...register('name', {required: 'Name is required'})}
                placeholder='name'
            />
            <ErrorMessage error={errors?.name?.message}/>

            <input
                {...register('price', {required: 'Price is required'})}
                placeholder='price'
            />
            <ErrorMessage error={errors?.price?.message}/>

            <input
                {...register('image', {required: 'Image is required'})}
                placeholder='image'
            />
            <ErrorMessage error={errors?.image?.message}/>

            <button className='button-global'>Add dish</button>
        </form>
    )
}

export default CreateDishForm;