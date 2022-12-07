import { Address } from "./address"
import { Category } from "./category"

export class Product {
    id: number = 0
    name: string = ''
    price: number = 0
    category?: Category = new Category()
    catID: number = 0
    address?: Address = new Address();
}
