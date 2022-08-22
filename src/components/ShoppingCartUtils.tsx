import { Product } from "@prisma/client"
import { image_check } from "../utils/image_check"
interface ShoppingCarProps {
    name?: string
    images?: string[],
    price?: string
    quantity?: string

}

export const CalculatePrice =(quantity: {price_id: string, quantity: string}[], price: (Product | null)[] | undefined)=> {

    if (price !== undefined) {

        if (price.every(val=> val !== null)) {
    
    let return_price = 0

    price.forEach((val, index)=> {

        return_price += parseInt(val!.price) * parseInt(quantity[index]!.quantity)
    })

    return `${return_price} EUR`
        }

        return 'Shopping cart is empty'


}
return 'Shopping cart is empty'

}
export const ShoppingCartUtils = ({name, price, images, quantity}: ShoppingCarProps)=> {

    return (
        <li className="flex items-center justify-between py-4">
        <div className="flex items-start">
          <img
            className="flex-shrink-0 object-cover w-16 h-16 rounded-lg"
            src={image_check(images)}
            alt=""
          />

          <div className="ml-4">
            <p className="text-sm">{name}</p>

            <dl className="mt-1 space-y-1 text-xs text-gray-500">
              <div>
                <dt className="inline">Color:</dt>
                <dd className="inline">Blue</dd>
              </div>

              <div>
                <dt className="inline">Size:</dt>
                <dd className="inline">UK 10</dd>
              </div>
            </dl>
          </div>
        </div>

        <div>
          <p className="text-sm">
            {`${price} €`}
            <small className="text-gray-500">{`x${quantity}`}</small>
          </p>
        </div>
      </li>
    )
}