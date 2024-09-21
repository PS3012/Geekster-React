import { useState, useEffect } from "react"
import QuoteCard from "../../components/geek-food/QuoteCard"

function Quote() {
     const [quotes, setQuotes] = useState([])
     useEffect(() => {
          const fetchData = async () => {
               const response = await fetch("https://dummyjson.com/quotes")
               const result = await response.json()
               setQuotes(result.quotes)
          }
          fetchData()
     }, [])
     return (
          <>

               <div className="grid gap-7 max-w-7xl mx-auto px-4 py-6 sm:py-10 md:py-16">
                    {quotes.length > 0 ? quotes.map((item) =>
                         <QuoteCard key={item.id} quote={item.quote} author={item.author} />
                    )
                         :
                         <div className="text-3xl font-bold text-center">No Quotes to show.</div>
                    }
               </div>

          </>
     )
}

export default Quote
