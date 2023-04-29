import './Home.scss'
import {dishes} from './dishes.data.js'
import DishItem from "./dish-item/DishItem.jsx";

function Home() {

    return (
        <div className='catalog'>
            <h1>Food Catalog</h1>
            <div>
                {dishes.length ? dishes.map(dish => (
                    <DishItem key={dish.id} dish={dish}/>
                ))
                : <p>Dish non-exist</p>
                }
            </div>
        </div>
    )
}

export default Home;
