
function ReviewCard(_props) {
     return (
          <>

               <div className="review-card mb-10 break-inside-avoid">
                    <div className="bg-gray-100 p-5 rounded-lg text-slate-700 mb-3 shadow">{_props.review}</div>
                    <div className="flex items-center gap-4">
                         <img src={_props.image} alt="Profile" className="w-12 aspect-square object-cover rounded-full" />
                         <div>
                              <div className="font-medium">{_props.name}</div>
                              <div className="text-slate-600 text-sm">{_props.designation}</div>
                         </div>
                    </div>
               </div>

          </>
     )
}

export default ReviewCard
