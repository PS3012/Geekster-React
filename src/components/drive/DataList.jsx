
function DataList() {
     const { origin } = location
     return (
          <>

               <div className="bg-white p-3 rounded-lg h-[calc(100vh-6rem)]">
                    <div className="flex items-center justify-between gap-4 mb-3">
                         <div className="text-2xl font-medium">Home</div>

                    </div>
                    <div className="py-5 text-center">
                         <div className="mx-auto max-w-xs mb-3">
                              <img src={`${origin}/images/no-files.svg`} alt="No Files" className="w-full" />
                         </div>
                         <div className="text-gray-700 text-xl mb-2 font-semibold">Welcome to Drive, the home for all your files</div>
                         <div className="text-gray-700 text-lg">Use the “New” button to upload</div>
                    </div>
               </div>

          </>
     )
}

export default DataList
