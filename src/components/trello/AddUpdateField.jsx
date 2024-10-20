
function AddUpdateField(_props) {
     const { handleKeyDown, handleAdd, handleCancel, fieldValue, handleChange, btnText, placeholder } = _props
     return (
          <>

               <div>
                    <textarea
                         onKeyDown={handleKeyDown}
                         placeholder={placeholder}
                         value={fieldValue} onChange={e => handleChange(e.target.value)}
                         className="w-full rounded p-2 text-sm mb-2 outline-none border border-gray-300 focus:border-black"
                    ></textarea>
                    <div className="flex gap-2 items-center">
                         <div onClick={handleAdd} className="text-white px-3 py-1 text-sm font-medium rounded bg-green-600 cursor-pointer">{btnText}</div>
                         <div onClick={handleCancel} className="text-white px-3 py-1 text-sm font-medium rounded bg-red-600 cursor-pointer">Cancel</div>
                    </div>
               </div>

          </>
     )
}

export default AddUpdateField
