import { useEffect, useState } from "react"
import toast from "react-hot-toast"

function GroceryBud() {
     const [productsList, setProductsList] = useState([])
     const [productName, setProductName] = useState("")
     useEffect(() => {
          document.title = "Grocery Bud"
          const savedProductsList = localStorage.getItem("savedProductsList")
          if (savedProductsList) {
               setProductsList(JSON.parse(savedProductsList))
          }
          return () => document.title = "React Project"
     }, [])
     const updateProductListToLocal = (list) => {
          localStorage.setItem("savedProductsList", JSON.stringify(list))
     }
     const handleAddProduct = () => {
          if (productName.trim() === "") {
               toast.error("Enter valid Product Name!")
          } else {
               const idx = productsList?.findIndex(item => item.name.toLowerCase() === productName.toLowerCase())
               if (idx >= 0) {
                    toast.error("Item already added! Try adding a new item.")
               } else {
                    setProductsList(prev => {
                         const updatedList = [...prev, { name: productName, isMarked: false }]
                         updateProductListToLocal(updatedList)
                         return updatedList
                    })
                    toast.success("Product added to the list.")
                    updateProductListToLocal()
               }
          }
          setProductName("")
     }
     const handleDeleteProduct = (event, index) => {
          event.stopPropagation()
          setProductsList(prev => {
               const updatedList = [...prev]
               updatedList.splice(index, 1)
               updateProductListToLocal(updatedList)
               return updatedList
          })
          toast.success("Product deleted.")
     }
     const handleProductMarked = (val, index) => {
          setProductsList(prev => {
               const updatedList = [...prev]
               updatedList[index].isMarked = val
               updateProductListToLocal(updatedList)
               return updatedList
          })
     }
     return (
          <>

               <div className="max-w-md mx-auto py-6 px-3">
                    <div className="top-block mb-10">
                         <div className="text-center font-bold text-4xl uppercase text-rose-600 mb-5">
                              Grocery Bud
                         </div>
                         <div className="grid grid-cols-3 gap-4">
                              <input
                                   type="text" placeholder="Product Name..."
                                   value={productName} onChange={(e) => setProductName(e.target.value)}
                                   className="col-span-2 border rounded outline-none focus:border-rose-600 px-3"
                              />
                              <button onClick={handleAddProduct} className="p-2 text-white rounded bg-rose-600 hover:bg-black">
                                   Add Item
                              </button>
                         </div>
                    </div>
                    {productsList && productsList.length > 0 &&
                         <div className="grid gap-3">
                              {productsList.map((item, index) =>
                                   <div key={index}
                                        onClick={() => handleProductMarked(!item.isMarked, index)}
                                        className={`border rounded p-2 flex items-center justify-between gap-3 cursor-pointer ${item.isMarked ? "bg-red-50" : ""}`}
                                   >
                                        <div className={item.isMarked ? "line-through" : ""}>{item.name}</div>
                                        <button onClick={(e) => handleDeleteProduct(e, index)} className="py-1 px-3 text-white rounded text-xs font-medium bg-rose-600 hover:bg-black">
                                             Delete
                                        </button>
                                   </div>
                              )}
                         </div>
                    }
               </div >

          </>
     )
}

export default GroceryBud
