import { useEffect, useState } from "react"
import toast from "react-hot-toast";

function ParagraphGenerator() {
     const [paragraphs, setParagraphs] = useState([]);
     const [numberOfParagraphs, setNumberOfParagraphs] = useState();

     const generateRandomParagraph = () => {
          const words = [
               'technology', 'innovation', 'future', 'explore', 'digital', 'network', 'discovery',
               'knowledge', 'adventure', 'ideas', 'growth', 'science', 'platform', 'creative', 'design',
               'progress', 'experience', 'solution', 'development', 'strategy', 'insight', 'opportunity'
          ];

          let paragraph = '';
          const sentenceCount = Math.floor(Math.random() * 5) + 3;

          for (let i = 0; i < sentenceCount; i++) {
               const sentenceLength = Math.floor(Math.random() * 10) + 5;
               let sentence = '';
               for (let j = 0; j < sentenceLength; j++) {
                    const randomWord = words[Math.floor(Math.random() * words.length)];
                    sentence += randomWord + ' ';
               }
               paragraph += sentence.trim() + '. ';
          }
          return paragraph;
     };

     const handleInputChange = (event) => {
          setNumberOfParagraphs(Number(event.target.value));
     };

     const generateParagraphs = () => {
          if (!numberOfParagraphs || numberOfParagraphs < 1) {
               toast.error("Enter valid number of paragraphs.")
               return false;
          } else if (numberOfParagraphs > 15) {
               toast.error("You are demanding very much paragraph in one go, kindly provide small number of paragraphs 😀")
               setNumberOfParagraphs(15)
          }
          const newParagraphs = Array.from({ length: numberOfParagraphs }, () => generateRandomParagraph());
          setParagraphs(newParagraphs);
     };
     useEffect(() => {
          document.title = "Paragraph Generator"
          return () => document.title = "React Project"
     }, [])
     return (
          <>

               <div className="py-6 max-w-7xl mx-auto px-4">
                    <div className="text-center text-4xl font-bold uppercase text-rose-700 mb-6">Tired of boring lorem ipsum.</div>
                    <div className="mx-auto grid grid-cols-5 gap-3 max-w-xl mb-10">
                         <input type="number" value={numberOfParagraphs} onChange={handleInputChange} placeholder="Paragraphs" className="col-span-3 border rounded px-4 py-2 focus:border-rose-700 outline-none" />
                         <button onClick={generateParagraphs} className="col-span-2 rounded px-4 py-2 text-white transition-colors bg-rose-700 hover:bg-black">Generate</button>
                    </div>
                    <div className="paragraphs-container text-center grid gap-4 capitalize">
                         {paragraphs.map((para, index) => (
                              <div key={index}>{para}</div>
                         ))}
                    </div>
               </div>

          </>
     )
}

export default ParagraphGenerator
