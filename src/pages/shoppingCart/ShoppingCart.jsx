import { useEffect, useState } from "react"
import { ShoppingBag03Icon } from "hugeicons-react"
import CartItem from "../../components/shoppingCart/CartItem"
import toast from "react-hot-toast"

function ShoppingCart() {
     const items = [
          { image: "/images/phones/phone-1.png", name: "Samsung Galaxy S8", price: 399.99, count: 1 },
          { image: "/images/phones/phone-2.png", name: "Google Pixel", price: 499.99, count: 1 },
          { image: "/images/phones/phone-3.png", name: "Xiaomi Redmi Note 2", price: 599.99, count: 1 },
          { image: "/images/phones/phone-4.png", name: "Samsung Galaxy S7", price: 699.99, count: 1 },
     ]
     const [cartItems, setCartItems] = useState(items)
     const handleCount = (index, operation) => {
          setCartItems(prev => {
               const previousList = prev.map(item => ({ ...item }))
               if (operation === "increase") {
                    previousList[index].count += 1
               } else {
                    previousList[index].count -= 1
                    if (previousList[index].count === 0) {
                         previousList.splice(index, 1)
                    }
               }
               return previousList
          })
     }
     const handleDelete = (index) => {
          setCartItems(prev => {
               const previousList = prev.map(item => ({ ...item }))
               previousList.splice(index, 1)
               return previousList
          })
          toast.success("Item removed from the cart!")
     }
     const handleClearCart = () => {
          setCartItems([])
          toast.success("Cart is empty!")
     }
     useEffect(() => {
          document.title = "Shopping Cart"
          return () => document.title = "React Project"
     }, [])
     return (
          <>

               <header className="py-7 px-4 bg-rose-600 text-white">
                    <div className="flex justify-between items-center max-w-3xl mx-auto">
                         <div className="text-4xl font-bold">UseReducer</div>
                         <div className="relative">
                              <ShoppingBag03Icon size={30} />
                              <div className="absolute top-0 right-0 text-sm w-6 h-6 rounded-full text-center font-bold bg-white/[0.34]" style={{ transform: "translate(50%, -50%)" }}>
                                   {(cartItems && cartItems.length > 0) ?
                                        cartItems.reduce((acc, item) => acc + Number(item.count), 0)
                                        : 0
                                   }
                              </div>
                         </div>
                    </div>
               </header>

               <div className="py-10 px-4">
                    <div className="max-w-3xl mx-auto">
                         <div className="head font-semibold text-5xl text-center uppercase mb-10">Your Bag</div>
                         {cartItems && cartItems.length > 0 ?
                              <div className="grid gap-4 mb-10">
                                   {cartItems.map((item, index) =>
                                        <CartItem
                                             key={index}
                                             index={index}
                                             image={item.image}
                                             name={item.name}
                                             price={item.price}
                                             count={item.count}
                                             handleItemCount={handleCount}
                                             handleItemDelete={handleDelete}
                                        />
                                   )}
                              </div>
                              :
                              <div className="text-center text-xl font-semibold text-rose-600 mb-10">You don&lsquo;t have any items in the cart.</div>
                         }
                         <div className="border-t border-gray-500 flex justify-between items-center gap-5 text-2xl pt-5 font-semibold mb-10">
                              <div>Total</div>
                              <div className="text-rose-600">
                                   {(cartItems && cartItems.length > 0) ?
                                        cartItems.reduce((acc, item) => acc + (Number(item.price) * Number(item.count)), 0)
                                        : 0
                                   }
                              </div>
                         </div>
                         {cartItems && cartItems.length > 0 &&
                              <div className="flex justify-center">
                                   <button onClick={handleClearCart} className="px-4 py-2 font-semibold text-white rounded bg-rose-600 hover:bg-black">Clear Cart</button>
                              </div>
                         }
                    </div>
               </div>

          </>
     )
}

export default ShoppingCart
