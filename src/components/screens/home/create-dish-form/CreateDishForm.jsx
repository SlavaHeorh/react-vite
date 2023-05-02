import './createDishForm.scss'
import {useState} from "react";

const clearData = {
    price: '',
    name: '',
    image: ''
}

function CreateDishForm({setDishes}) {
    const [data, setData] = useState(clearData)

    const addDish = (e) => {
        e.preventDefault()
        setDishes(prev => [{
            id: prev.length + 1, ...data}, ...prev
        ])

        setData(clearData)
    }

    return (
        <form className='form-creator'>
            <input
                placeholder='name'
                onChange={e => setData(prev => ({
                    ...prev, name: e.target.value
                }))}
                value={data.name}
            />
            <input
                placeholder='price'
                onChange={e => setData(prev => ({
                    ...prev, price: e.target.value
                }))}
                value={data.price}
            />
            <input
                placeholder='image'
                onChange={e => setData(prev => ({
                    ...prev, image: e.target.value
                }))}
                value={data.image}
            />

            <button onClick={e =>addDish(e)} className='button-global'>Add dish</button>
        </form>
    )
}

export default CreateDishForm;