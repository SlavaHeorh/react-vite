const Price = ({price}) => {
    return (
        <p className='catalog__card-text'>
            {new Intl.NumberFormat('ru-RU', {
                style: 'currency',
                currency: 'USD'
            }).format(price)}
        </p>
    )
}
export default Price