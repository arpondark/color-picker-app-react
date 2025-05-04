import React,{useState} from 'react'

const Color = () => {
    const handleColorChnage =(event)=>{
        setColor(event.target.value);
    }
    const [color, setColor] = useState('#FFFFFF');
  return (
    <div className='color-container'>
      <h1>Color Picker</h1>
      <div className='color-display' style={{backgroundColor: color}}>
    <p>Selecct Color:{color}</p>
      </div>
      <label>Select a Color:</label>
      <input type="color" value={color} onChange={handleColorChnage}/>
      <div>

      </div>
    </div>
  )
}

export default Color
