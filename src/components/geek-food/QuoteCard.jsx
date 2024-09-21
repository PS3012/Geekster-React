
function QuoteCard(_props) {
     return (
          <>

               <div className="quote-card bg-slate-800 text-white text-center py-5 px-7 rounded-lg">
                    <div className="text-2xl font-semibold mb-3">{_props.quote}</div>
                    <div className="text-gray-300 text-lg">- {_props.author}</div>
               </div>

          </>
     )
}

export default QuoteCard
