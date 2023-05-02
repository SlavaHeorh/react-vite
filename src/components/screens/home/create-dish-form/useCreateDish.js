export const useCreateDish = (reset, setDishes) => {
    const addDish = (data) => {
        setDishes(prev => [{
            id: prev.length + 1, ...data
        }, ...prev
        ])

        reset()
    }

    return {addDish}
}