import { useEffect, useState } from "react"

function InfiniteScroll() {
     const [imageData, setImageData] = useState({ loading: true, page: 1, data: [] });
     const accessKey = "0LCXjmq66l6RXbIsZKBhfYrF3iwFVraCuE8cCSreJ3o";

     const debounce = (func, delay) => {
          let timeout;
          return (...args) => {
               if (timeout) clearTimeout(timeout);
               timeout = setTimeout(() => {
                    func(...args);
               }, delay);
          };
     };
     useEffect(() => {
          const handleScroll = debounce(() => {
               if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 && !imageData.loading) {
                    setImageData(prev => ({ ...prev, page: prev.page + 1 }));
               }
          }, 200);
          window.addEventListener('scroll', handleScroll);
          return () => window.removeEventListener('scroll', handleScroll);
     }, [imageData.loading]);
     useEffect(() => {
          const fetchPhotos = async () => {
               try {
                    setImageData(prev => ({ ...prev, data: prev.page === 1 ? [] : prev.data, loading: true }));
                    const response = await fetch(
                         `https://api.unsplash.com/photos?page=${imageData.page}&per_page=30&client_id=${accessKey}`
                    );
                    if (!response.ok) throw new Error('Failed to fetch images');
                    const photos = await response.json();
                    setImageData(prev => ({ ...prev, loading: false, data: [...prev.data, ...photos] }));
               } catch (error) {
                    console.error('Error fetching images:', error);
                    setImageData(prev => ({ ...prev, loading: false }));
               }
          };
          fetchPhotos();
     }, [imageData.page]);

     return (
          <>
               <div className="p-7">
                    <div className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mb-7">Endless Scrolling</div>
                    {imageData.loading ?
                         <div className="text-center text-sky-600 font-semibold text-xl">Loading...</div>
                         :
                         <div className="columns-5 gap-4">
                              {imageData.data.map(item =>
                                   <img src={item.urls.small} alt={item.alt_description} key={item.id} className="w-full mb-4 shadow rounded" />
                              )}
                         </div>
                    }
               </div>
          </>
     );
}

export default InfiniteScroll;
