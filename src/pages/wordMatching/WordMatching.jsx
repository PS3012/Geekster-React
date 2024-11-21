import { ArrowDown01Icon, ArrowUp01Icon } from "hugeicons-react";
import { useEffect, useState } from "react";
import { randomWords } from "./data";

function WordMatching() {
     const [isOpen, setIsOpen] = useState(false);
     const [groupSize, setGroupSize] = useState(2);
     const [itemCount, setItemCount] = useState(8);
     const [columns, setColumns] = useState(4);
     const [attempts, setAttempts] = useState(0);
     const [selectedWords, setSelectedWords] = useState([]);
     const [matchedWords, setMatchedWords] = useState([]);
     const [words, setWords] = useState([]);
     const [error, setError] = useState(false);
     const toggleDropdown = () => setIsOpen(!isOpen);
     const shuffleArray = (array) => [...array].sort(() => Math.random() - 0.5);
     const handleWordClick = (word) => {
          if (matchedWords.includes(word.word) || selectedWords.includes(word)) return;
          const newSelection = [...selectedWords, word];
          if (newSelection.length === groupSize) {
               const isValid = newSelection.every((selectedWord) =>
                    newSelection.every((w) => selectedWord.matches.includes(w.word) || selectedWord.word === w.word)
               );
               setAttempts((prev) => prev + 1);
               if (isValid) {
                    setMatchedWords((prev) => [
                         ...prev,
                         ...newSelection.map((w) => w.word),
                    ]);
               } else {
                    setError(true);
                    setTimeout(() => {
                         setError(false);
                         setSelectedWords([]);
                    }, 500);
               }
          } else {
               setSelectedWords(newSelection);
          }
     };
     const handleReset = () => {
          const filteredWords = shuffleArray(
               randomWords.filter((word) =>
                    word.matches.some((match) =>
                         randomWords.map((w) => w.word).includes(match)
                    )
               )
          ).slice(0, itemCount * groupSize);
          setWords(filteredWords);
          setMatchedWords([]);
          setSelectedWords([]);
          setAttempts(0);
     };
     useEffect(() => {
          const filteredWords = shuffleArray(
               randomWords.filter((word) =>
                    word.matches.some((match) =>
                         randomWords.map((w) => w.word).includes(match)
                    )
               )
          ).slice(0, itemCount * groupSize);
          setWords(filteredWords);
          setMatchedWords([]);
          setSelectedWords([]);
     }, [groupSize, itemCount]);

     useEffect(() => {
          document.title = "Word Matching";
          return () => {
               document.title = "React Project";
          };
     }, []);

     return (
          <>
               <div className="px-3 py-4 border-b">
                    <div className="flex justify-between max-w-7xl mx-auto items-center">
                         <div className="text-3xl font-medium">Word Matching</div>
                         <div className="relative w-64">
                              <button
                                   onClick={toggleDropdown}
                                   className="bg-black text-white py-2 px-4 rounded-md flex justify-between items-center w-full"
                              >
                                   Config {isOpen ? <ArrowUp01Icon /> : <ArrowDown01Icon />}
                              </button>
                              {isOpen && (
                                   <div className="absolute top-12 left-0 bg-white shadow-lg rounded-md p-4 w-full z-50">
                                        <div className="mb-4">
                                             <label className="block text-gray-700 mb-2">Group Size: {groupSize}</label>
                                             <input
                                                  type="range" min="2" max="4" step="1" className="w-full"
                                                  value={groupSize} onChange={(e) => setGroupSize(Number(e.target.value))}
                                             />
                                        </div>
                                        <div className="mb-4">
                                             <label className="block text-gray-700 mb-2">Item Count: {itemCount}</label>
                                             <input
                                                  type="range" min="4" max="12" step="1" className="w-full"
                                                  value={itemCount} onChange={(e) => setItemCount(Number(e.target.value))}
                                             />
                                        </div>
                                        <div>
                                             <label className="block text-gray-700 mb-2">Columns: {columns}</label>
                                             <input
                                                  type="range" min="2" max="4" step="1" className="w-full"
                                                  value={columns} onChange={(e) => setColumns(Number(e.target.value))}
                                             />
                                        </div>
                                   </div>
                              )}
                         </div>
                    </div>
               </div>

               <div className="px-3 py-4">
                    <div className="max-w-7xl mx-auto">
                         <div className={`grid grid-cols-${columns} gap-5 mb-5`}>
                              {words.map((wordObj) =>
                                   <button key={wordObj.word}
                                        className={`p-4 text-center border rounded ${selectedWords.includes(wordObj)
                                             ? error
                                                  ? "bg-red-500"
                                                  : "bg-blue-500 text-white"
                                             : matchedWords.includes(wordObj.word)
                                                  ? "bg-green-500 text-white"
                                                  : "bg-gray-200"
                                             }`}
                                        onClick={() => handleWordClick(wordObj)}
                                   >
                                        {wordObj.word}
                                   </button>
                              )}
                         </div>
                         <div className="text-center text-xl font-medium mb-4">Attempts: {attempts}</div>
                         <div className="text-center">
                              <button onClick={handleReset} className="px-3 py-2 w-64 bg-black text-white rounded">Reset</button>
                         </div>
                    </div>
               </div>
          </>
     );
}

export default WordMatching;
