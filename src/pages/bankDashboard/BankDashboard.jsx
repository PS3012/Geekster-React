import SelectInput from "../../components/bankDashboard/SelectInput"
import SliderInput from "../../components/bankDashboard/SliderInput"

function BankDashboard() {
     return (
          <>

               <header className="py-4 px-4 bg-sky-600 text-white">
                    <div className="max-w-7xl mx-auto">
                         <div className="text-2xl font-bold">Bank Dashboard</div>
                    </div>
               </header>

               <div className="py-4 px-3">
                    <div className="max-w-7xl mx-auto">
                         <div className="grid grid-cols-2 gap-5">
                              <div className="grid gap-3">
                                   <SliderInput title="Home Value" min={1000} max={10000} step={100} startValue={3000} unit="$" />
                                   <SliderInput title="Down Payment" min={0} max={3000} step={100} startValue={600} unit="$" />
                                   <SliderInput title="Loan Amount" min={0} max={3000} step={100} startValue={2400} unit="$" />
                                   <SliderInput title="Interest Rate" min={2} max={18} step={1} startValue={5} unit="%" />
                                   <SelectInput />
                              </div>
                         </div>
                    </div>
               </div>

          </>
     )
}

export default BankDashboard
