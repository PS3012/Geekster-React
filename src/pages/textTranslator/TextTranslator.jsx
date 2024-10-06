import axios from "axios"
import { useEffect, useRef, useState } from "react"
import toast from "react-hot-toast"

function TextTranslator() {
     const [inputText, setInputText] = useState("")
     const [outputText, setOutputText] = useState("")
     const [selectedLanguages, setSelectedLanguages] = useState({ source: "en", target: "en" })
     const [languages, setLanguages] = useState([])
     const debounceTimeout = useRef(null);
     const handleTranslate = async (value) => {
          if (selectedLanguages.source === selectedLanguages.target) {
               toast.error("Source and Target Languages cannot be the same!");
               return "Source and Target Languages cannot be the same!";
          }

          const url = "https://text-translator2.p.rapidapi.com/translate";
          const data = new FormData();
          data.append("source_language", selectedLanguages.source);
          data.append("target_language", selectedLanguages.target);
          data.append("text", value);

          const options = {
               headers: {
                    "x-rapidapi-key":
                         "003ecf1befmsh4ee3a9098d3f881p129d8ejsnc352f047a149",
                    "x-rapidapi-host": "text-translator2.p.rapidapi.com",
               },
          };

          try {
               const response = await axios.post(url, data, options);
               return response.data.data.translatedText;
          } catch (error) {
               console.error(error);
               return "Translation failed";
          }
     };
     useEffect(() => {
          const getLanguages = async () => {
               const url = "https://text-translator2.p.rapidapi.com/getLanguages";
               const options = {
                    headers: {
                         "x-rapidapi-key":
                              "003ecf1befmsh4ee3a9098d3f881p129d8ejsnc352f047a149",
                         "x-rapidapi-host": "text-translator2.p.rapidapi.com",
                    },
               };

               try {
                    const response = await axios.get(url, options);
                    setLanguages(response.data.data.languages);
               } catch (error) {
                    console.error(error);
               }
          };

          getLanguages();
     }, [])
     const handleChangeInputText = async (value) => {
          setInputText(value);
          setOutputText("")
          if (debounceTimeout.current) {
               clearTimeout(debounceTimeout.current);
          }
          debounceTimeout.current = setTimeout(async () => {
               if (value && value.trim() !== "") {
                    const result = await handleTranslate(value);
                    setOutputText(result);
               }
          }, 500);
     }
     useEffect(() => {
          document.title = "Text Translator"
          return () => {
               document.title = "React Project"
               if (debounceTimeout.current) {
                    clearTimeout(debounceTimeout.current);
               }
          }
     }, [])
     return (
          <>

               <div className="w-dvw h-screen flex items-center justify-center px-4 py-6">
                    <div className="max-w-5xl w-full grid sm:grid-cols-2 gap-5">
                         <div className="shadow-lg rounded overflow-hidden">
                              {languages && languages.length > 0 &&
                                   <div className="bg-sky-400 p-3 flex justify-end">
                                        <select
                                             value={selectedLanguages.source}
                                             onChange={e => setSelectedLanguages(prev => ({ ...prev, source: e.target.value }))}
                                             className="w-full max-w-60 rounded border outline-none px-2 py-1 text-gray-600 font-light"
                                        >
                                             {languages.map((item, index) =>
                                                  <option value={item.code} key={index}>{item.name}</option>
                                             )}
                                        </select>
                                   </div>
                              }
                              <div className="p-3">
                                   <textarea
                                        value={inputText}
                                        onChange={e => handleChangeInputText(e.target.value)}
                                        className="border outline-none p-2 rounded text-gray-600 font-light w-full h-36"
                                        placeholder="Enter you Text"
                                   ></textarea>
                              </div>
                         </div>
                         <div className="shadow-lg rounded overflow-hidden">
                              {languages && languages.length > 0 &&
                                   <div className="bg-sky-400 p-3 flex justify-end">
                                        <select
                                             value={selectedLanguages.target}
                                             onChange={e => setSelectedLanguages(prev => ({ ...prev, target: e.target.value }))}
                                             className="w-full max-w-60 rounded border outline-none px-2 py-1 text-gray-600 font-light"
                                        >
                                             {languages.map((item, index) =>
                                                  <option value={item.code} key={index}>{item.name}</option>
                                             )}
                                        </select>
                                   </div>
                              }
                              <div className="p-3">
                                   <textarea
                                        value={outputText}
                                        disabled={true} readOnly
                                        className="border outline-none p-2 rounded text-gray-600 font-light w-full h-36"
                                        placeholder="Translated Text"
                                   ></textarea>
                              </div>
                         </div>
                    </div>
               </div>

          </>
     )
}

export default TextTranslator
