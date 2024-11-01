import { useState } from "react"
import { MultiplicationSignIcon } from "hugeicons-react"
import toast from "react-hot-toast";


function UploadModal(_props) {
     const { closeModal } = _props
     const [files, setFiles] = useState(null);
     const handleFileChange = (event) => {
          const selectedFile = event.target.files[0];
          setFiles(selectedFile);
     };
     const handleFileUpload = () => {
          if (!files) {
               toast.error("Please select a file to upload.");
               return;
          }
     };
     return (
          <>

               <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                         <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                              <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                   <div className="bg-white p-6 pb-4">
                                        <div className="flex justify-between gap-3 items-center mb-5">
                                             <div className="font-semibold text-xl">Upload File</div>
                                             <div onClick={closeModal} className="cursor-pointer"><MultiplicationSignIcon /></div>
                                        </div>
                                        <input type="file" onChange={handleFileChange} className="border w-full rounded p-1 font-light file:bg-transparent file:font-semibold file:text-sm file:border-0" />
                                   </div>
                                   <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                        <button type="button" onClick={handleFileUpload} className="inline-flex w-full justify-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto">Upload</button>
                                        <button type="button" onClick={closeModal} className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</button>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>

          </>
     )
}

export default UploadModal