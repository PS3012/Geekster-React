import { useState } from 'react'

function SliderInput(_props) {
     const [value, setValue] = useState(_props.startValue)
     const handleChange = (e) => {
          const value = e.target.value
          setValue(value)
          _props.updaterFunc(value)

     }
     return (
          <>

               <div className="slider-input">
                    <div className="head font-semibold mb-2">{_props.title}</div>
                    <div className="text-3xl font-semibold mb-2">{_props.unit} {value}</div>
                    <input
                         type="range"
                         className='w-full'
                         value={value} onChange={handleChange}
                         step={_props.step} min={_props.min} max={_props.max}
                    />
                    <div className="flex justify-between items-center gap-4 text-xs text-gray-600">
                         <div>{_props.unit} {_props.min}</div>
                         <div>{_props.unit} {_props.max}</div>
                    </div>
               </div>

          </>
     )
}

export default SliderInput
