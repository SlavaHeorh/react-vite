export interface IDish {
    id: number,
    image: string,
    name: string,
    price: string
}

export interface IDishData extends Omit<IDish, 'id'> {

}