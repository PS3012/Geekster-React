import axios from 'axios';
import { useState } from 'react'
import toast from 'react-hot-toast';

function ImageGenerator() {
     const [generatedImages, setGeneratedImages] = useState([])
     const [query, setQuery] = useState("")
     const accessKey = "0LCXjmq66l6RXbIsZKBhfYrF3iwFVraCuE8cCSreJ3o";
     const generateImage = async () => {
          setGeneratedImages([])
          if (!query && query.trim() === "") {
               toast.error("Enter search query first!")
          }
          const response = await axios.get(`https://api.unsplash.com/search/photos?page=1&per_page=2&query=${query}&client_id=${accessKey}`);
          const photos = response.data.results
          setGeneratedImages(photos)
     }
     return (
          <>

               <div className="max-w-3xl mx-auto text-center px-4 py-8">
                    <div className="text-3xl font-bold mb-5">Image Generation App</div>
                    <div className="grid md:grid-cols-4 gap-3 mb-5">
                         <input
                              type="text" placeholder='Enter Text'
                              value={query} onChange={e => setQuery(e.target.value)}
                              className="border rounded px-3 py-2 text-gray-600 font-light focus:border-rose-700 md:col-span-3 focus:outline-none"
                         />
                         <button onClick={generateImage} className='p-2 text-center text-white rounded bg-rose-700 focus:outline-none hover:bg-black'>Generate</button>
                    </div>
                    <div className="image">
                         {generatedImages && generatedImages.length > 0 &&
                              <div className="grid md:grid-cols-2 gap-4">
                                   {generatedImages.map(item =>
                                        <div key={item.id}>
                                             <img src={item.urls.full} alt={item.alt_description} className='w-full rounded shadow aspect-square object-cover' />
                                        </div>
                                   )}
                              </div>
                         }
                    </div>
               </div>

          </>
     )
}

export default ImageGenerator
