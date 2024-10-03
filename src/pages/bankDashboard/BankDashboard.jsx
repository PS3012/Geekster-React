import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import SelectInput from "../../components/bankDashboard/SelectInput";
import SliderInput from "../../components/bankDashboard/SliderInput";

function BankDashboard() {
     const [data, setData] = useState({
          homeValue: 3000,
          downPayment: 600,
          loanAmount: 2400,
          interestRate: 5,
          tenure: "5",
          interestPerMonth: 0,
          monthlyPayment: 0,
          totalInterestGenerated: 0,
     });
     const handleUpdateData = (key, value) => {
          if (key === "homeValue") {
               setData((prev) => {
                    const newLoanAmount = value - prev.downPayment;
                    return { ...prev, homeValue: value, loanAmount: newLoanAmount };
               });
          } else if (key === "downPayment") {
               setData((prev) => {
                    const newLoanAmount = prev.homeValue - value;
                    return { ...prev, downPayment: value, loanAmount: newLoanAmount };
               });
          } else {
               setData((prev) => ({ ...prev, [key]: value }));
          }
     };

     useEffect(() => {
          document.title = "Bank Dashboard"
          return () => document.title = "React Project"
     }, [])

     useEffect(() => {
          const interestPerMonth = data.interestRate / 100 / 12;
          const monthlyPayment =
               (data.loanAmount * interestPerMonth) /
               (1 - Math.pow(1 + interestPerMonth, -Number(data.tenure) * 12));
          const totalInterestGenerated =
               monthlyPayment * Number(data.tenure) * 12 - data.loanAmount;

          setData((prev) => ({
               ...prev,
               interestPerMonth: interestPerMonth,
               monthlyPayment: monthlyPayment,
               totalInterestGenerated: totalInterestGenerated,
          }));
     }, [data.interestRate, data.loanAmount, data.tenure]);

     const testData = [
          ["", ""],
          ["Principal", data.loanAmount],
          ["Interest", data.totalInterestGenerated],
     ];

     const options = {
          title: `Monthly Payment: $${data.monthlyPayment.toFixed(2)}`,
     };

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
                                   <SliderInput
                                        title="Home Value"
                                        min={1000}
                                        max={10000}
                                        step={100}
                                        startValue={data.homeValue}
                                        updaterFunc={(val) => handleUpdateData("homeValue", val)}
                                        unit="$"
                                   />
                                   <SliderInput
                                        title="Down Payment"
                                        min={0}
                                        max={data.homeValue}
                                        step={100}
                                        startValue={data.downPayment}
                                        updaterFunc={(val) => handleUpdateData("downPayment", val)}
                                        unit="$"
                                   />
                                   <SliderInput
                                        title="Loan Amount"
                                        min={0}
                                        max={data.homeValue}
                                        step={100}
                                        startValue={data.loanAmount}
                                        updaterFunc={(val) => handleUpdateData("loanAmount", val)}
                                        unit="$"
                                   />
                                   <SliderInput
                                        title="Interest Rate"
                                        min={2}
                                        max={18}
                                        step={1}
                                        startValue={data.interestRate}
                                        updaterFunc={(val) => handleUpdateData("interestRate", val)}
                                        unit="%"
                                   />
                                   <SelectInput
                                        title="Tenure"
                                        startValue={data.tenure}
                                        updaterFunc={(val) => handleUpdateData("tenure", val)}
                                   >
                                        <option value="5">5 Years</option>
                                        <option value="10">10 Years</option>
                                        <option value="15">15 Years</option>
                                        <option value="20">20 Years</option>
                                        <option value="25">25 Years</option>
                                   </SelectInput>
                              </div>
                              <div>
                                   <Chart
                                        chartType="PieChart"
                                        data={testData}
                                        options={options}
                                        width={"100%"}
                                        height={"400px"}
                                   />
                              </div>
                         </div>
                    </div>
               </div>
          </>
     );
}

export default BankDashboard;
