import { MinusSignIcon, PlusSignIcon } from "hugeicons-react"
import React from "react"

function CartItem(_props) {
     const { image, name, price, count, handleItemCount, handleItemDelete, index } = _props
     return (
          <>

               <div className="flex items-center gap-2 border p-3 rounded-xl">
                    <img src={image} alt="Mobile" className="w-16" />
                    <div className="flex-auto">
                         <div className="text-2xl font-semibold">{name}</div>
                         <div className="text-gray-600">${price}</div>
                         <div onClick={() => handleItemDelete(index)} className="text-rose-600 font-medium text-sm inline-block transition-colors cursor-pointer border-b-2 hover:border-rose-600">Remove</div>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-1">
                         <div onClick={() => handleItemCount(index, "increase")} className="w-5 h-5 rounded bg-rose-100 grid place-items-center cursor-pointer"><PlusSignIcon size={12} /></div>
                         <div>{count}</div>
                         <div onClick={() => handleItemCount(index, "decrease")} className="w-5 h-5 rounded bg-rose-100 grid place-items-center cursor-pointer"><MinusSignIcon size={12} /></div>
                    </div>
               </div>

          </>
     )
}

export default React.memo(CartItem)
