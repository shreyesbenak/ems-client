import React, { useState } from 'react'
import './Form.css';
import axios from 'axios'
import DevelopmentUrl from '../../data/api';
import imglogo from '../../image/logo.png'
 const Form = () => {
    let data, dateToday;
  let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();
dateToday = yyyy + '-' +  mm+ '-' + dd;
  
    const token = localStorage.getItem("token");
    const [place, setPlace] = useState()
    const [capacity, setCapacity] = useState()
    const [generation, setGeneration] = useState()
    const [timerun, setRunTime] = useState()
    const [dieselconsumption, setDieselConsumption] = useState()

    const [capacity2, setCapacity2] = useState()
    const [generation2, setGeneration2] = useState()
    const [timerun2, setRunTime2] = useState()
    const [dieselconsumption2, setDieselConsumption2] = useState()

    const [capacity3, setCapacity3] = useState()
    const [generation3, setGeneration3] = useState()
    const [timerun3, setRunTime3] = useState()
    const [dieselconsumption3, setDieselConsumption3] = useState()

    const [kitchenpng, setPng] = useState()
    const [waterconsumption, setWaterConsumption] = useState()
    const [weathermin, setMinimumTempurature] = useState()
    const [weathermax, setMaxTemp] = useState()
    const [humidity, setHumidity] = useState()
    const [solargeneration, setSolarGeneration] = useState()
    const [kebconsumption, setKebConsumption] = useState()
    const [kebrate, setKebRate] = useState()
    const [fuelrate, setFuelRate] = useState()
    const [pngrate, setPngRte] = useState()
    const [waterrate, setWater] = useState()


const capacityHandle = async(e) =>{
  const res = await e.target.value;
  console.log(res)
  setCapacity(res)
}
const GenerationHandle = async(e) =>{
  const res = await e.target.value;
  console.log(res)
  setGeneration(res)
}
const runTimeHandle = async(e) =>{
  const res = await e.target.value;
  console.log(res)
  setRunTime(res)
}
const dieselConsumptionHandle = async(e) =>{
  const res = await e.target.value;
  console.log(res)
  setDieselConsumption(res)
}
const capacityHandle2 = async(e) =>{
  const res = await e.target.value;
  console.log(res)
  setCapacity2(res)
}
const GenerationHandle2 = async(e) =>{
  const res = await e.target.value;
  console.log(res)
  setGeneration2(res)
}
const runTimeHandle2 = async(e) =>{
  const res = await e.target.value;
  console.log(res)
  setRunTime2(res)
}
const dieselConsumptionHandle2 = async(e) =>{
  const res = await e.target.value;
  console.log(res)
  setDieselConsumption2(res)
}
const capacityHandle3 = async(e) =>{
  const res = await e.target.value;
  console.log(res)
  setCapacity3(res)
}
const GenerationHandle3 = async(e) =>{
  const res = await e.target.value;
  console.log(res)
  setGeneration3(res)
}
const runTimeHandle3 = async(e) =>{
  const res = await e.target.value;
  console.log(res)
  setRunTime3(res)
}
const dieselConsumptionHandle3 = async(e) =>{
  const res = await e.target.value;
  console.log(res)
  setDieselConsumption3(res)
}

const pngHandle3 = async(e) =>{
  const res = await e.target.value;
  console.log(res)
  setPng(res)
}
const WaterConsumptionHandle3 = async(e) =>{
  const res = await e.target.value;
  console.log(res)
  setWaterConsumption(res)
}
const MinimumTempuratureHandle3 = async(e) =>{
  const res = await e.target.value;
  console.log(res)
  setMinimumTempurature(res)
}
const maxTempHandle3 = async(e) =>{
  const res = await e.target.value;
  console.log(res)
  setMaxTemp(res)
}
const humudityHandle3 = async(e) =>{
  const res = await e.target.value;
  console.log(res)
  setHumidity(res)
}
const SolarGenerationHandle3 = async(e) =>{
  const res = await e.target.value;
  console.log(res)
  setSolarGeneration(res)
}
const kebRateHandle3 = async(e) =>{
  const res = await e.target.value;
  console.log(res)
  setKebRate(res)
}
const fuelRateHandle3 = async(e) =>{
  const res = await e.target.value;
  console.log(res)
  setFuelRate(res)
}
const pngRateHandle3 = async(e) =>{
  const res = await e.target.value;
  console.log(res)
  setPngRte(res)
}
const waterrateHandle3 = async(e) =>{
  const res = await e.target.value;
  console.log(res)
  setWater(res)
}

const kebHandle3 = async(e) => {
  const res = await e.target.value;
  console.log(res)
  setKebConsumption(res)

}

const submitForm = (e) => {
  e.preventDefault();
  if (place === 'Kabini') {
      data = {
          location: place,
          date: dateToday,
          keb: kebconsumption,
          generator: [
              {   
                  generatorname: "Generator 1",
                  capacity: capacity,
                  generation: generation,
                  timerun: timerun,
                  dieselconsumption: dieselconsumption
              },
              {
                generatorname: "Generator 2",
                  capacity: capacity2,
                  generation: generation2,
                  timerun: timerun2,
                  dieselconsumption: dieselconsumption2
              },
              {
                generatorname: "Generator 3",
                  capacity: capacity3,
                  generation: generation3,
                  timerun: timerun3,
                  dieselconsumption: dieselconsumption3
              }

          ],
          kitchenpng: kitchenpng,
          waterconsumption: waterconsumption,
          weathermin: weathermin,
          weathermax: weathermax,
          humidity: humidity,
          kebrate: kebrate,
          fuelrate: fuelrate,
          waterrate: waterrate,
          pngrate: pngrate,
          solargeneration: solargeneration,
          kebconsumption:kebconsumption

      }
  }
  else {
      data = {
          location: place,
          date: dateToday,
          keb: kebconsumption,
          generator: [
              {
                generatorname: "Generator 1",
                  capacity: capacity,
                  generation: generation,
                  timerun: timerun,
                  dieselconsumption: dieselconsumption
              },
              {
                generatorname: "Generator 2",
                  capacity: capacity2,
                  generation: generation2,
                  timerun: timerun2,
                  dieselconsumption: dieselconsumption2
              }

          ],
          kitchenpng: kitchenpng,
          waterconsumption: waterconsumption,
          weathermin: weathermin,
          weathermax: weathermax,
          humidity: humidity,
          kebrate: kebrate,
          fuelrate: fuelrate,
          waterrate: waterrate,
          pngrate: pngrate,
          solargeneration: solargeneration

      }
  }
  axios.post(`${DevelopmentUrl}/consume`, data, {
      headers: {
          "Content-type": "application/json",
          "Authorization": `bearer ${token}`
      }
  })
      .then(res => {
          console.log(res)
          alert("Form submitted successfully");
      }
      )

      .catch(err => {
          console.log(err)
          alert("Something went wrong!!");
      });

}

  return (
      <>
      <div className='mainContainer'>
      <div className='logoimg1'>
              <img src={imglogo} />
          </div>
      <div className='containermain'>
     
<div className='heading'>
<h2 className='title'>Daily Power Consumption Log {dateToday} </h2>
</div>
<form className='form ' onSubmit={submitForm}>
<div className='selectiondiv'>


  <input type="radio" checked={place === 'Coorg'} value="Coorg" onClick={() => setPlace('Coorg')}/>
  <label  className='property1'>Coorg</label>
  <input type="radio" checked={place === 'Hampi'} value="Hampi" onClick={() => setPlace('Hampi')}/>
  <label  className='property2'>Hampi</label>
  <input type="radio" checked={place === 'Kabini'} value="Kabini" onClick={() => setPlace('Kabini')}/>
  <label  className='property3'>Kabini</label>

{console.log(place)}
</div>

<div className='main2'>
<div className='heading'>  
<h4 className='subtitle1'>Generator Usage</h4>
</div>
<h6 className='generator1'> Generator 1</h6>
<div className='generator'>
<div>
<label  className='capacity'>Capacity:</label>
  <input type="text" id="capacity" name="capacity" placeholder="KVA" className='capacityinput' onChange={capacityHandle}/>

</div>
<div>
<label  className='capacity'>Generation:</label>
  <input type="text" id="capacity" name="capacity" placeholder="KVA" className='capacityinput' onChange={GenerationHandle}/>

    </div>
    <div>
    <label  className='capacity'>Time Run:</label>
  <input type="text" id="capacity" name="capacity" placeholder="KVA" className='capacityinput' onChange={runTimeHandle}/>

    </div>
    <div>
    <label  className='capacity'>Diesel Consumption:</label>
  <input type="text" id="capacity" name="capacity" placeholder="KVA" className='capacityinput' onChange={dieselConsumptionHandle}/> 
 
    </div>
    

</div>


  <h6 className='generator1'> Generator 2</h6> 
  <div className='generator'>
      <div>
         
         <label  className='capacity'>Capacity:</label>
        <input type="text" id="capacity" name="capacity" placeholder="KVA" className='capacityinput' onChange={capacityHandle2}/>
        </div>
         <div>
         <label  className='capacity'>Generation:</label>
         <input type="text" id="generation" name="generation" placeholder="unit" className='capacityinput' onChange={GenerationHandle2}/>
  
         </div>   
         <div>
         <label  className='capacity'>Time Run:</label>
            <input type="text" id="tr" name="Time Run" placeholder="HH:MM" className='capacityinput' onChange={runTimeHandle2}/>
 
         </div>
         <div>
         <label  className='capacity'>Diesel Consumption:</label>
            <input type="text" id="dc" name="Diesel Consumption" placeholder="In Liters" className='capacityinput' onChange={dieselConsumptionHandle2}/> 
 
         </div>
 </div>

{
    (place==='Kabini') ? 
    <>
    
    <h6 className='generator1'> Generator 3</h6> 
    <div className='generator'>
        <div>
           
           <label  className='capacity'>Capacity:</label>
          <input type="text" id="capacity" name="capacity" placeholder="KVA" className='capacityinput' onChange={capacityHandle3}/>
          </div>
           <div>
           <label  className='capacity'>Generation:</label>
           <input type="text" id="generation" name="generation" placeholder="unit" className='capacityinput' onChange={GenerationHandle3}/>
    
           </div>   
           <div>
           <label  className='capacity'>Time Run:</label>
              <input type="text" id="tr" name="Time Run" placeholder="HH:MM" className='capacityinput' onChange={runTimeHandle3}/>
   
           </div>
           <div>
           <label  className='capacity'>Diesel Consumption:</label>
              <input type="text" id="dc" name="Diesel Consumption" placeholder="In Liters" className='capacityinput' onChange={dieselConsumptionHandle3}/> 
   
           </div>
   </div>
   </>
   :
   null

}
 <div className='heading'>
  <h4 className='rate1'>Rate Matrix</h4>
  </div>
  <div className='generator'>
      <div className='margindiv'>
      <label   className='capacity'>KEB:</label> <br/>
  <input type="text" id="keb" name="KEB" placeholder="Rate/Unit" className='capacityinput' onChange={kebRateHandle3}/>
  
      </div>
      <div className='margindiv'>
      <label  className='capacity'>Fuel:</label><br/>
  <input type="text" id="fuel" name="Fuel" placeholder="Rate/Unit" className='capacityinput' onChange={fuelRateHandle3}/>
 
          </div>
          <div className='margindiv'>
          <label  className='capacity'>Water:</label><br/>
  <input type="text" id="water" name="Water" placeholder="Rate/Unit" className='capacityinput' onChange={waterrateHandle3}/>
 
          </div>
          <div className='margindiv'>
          <label  className='capacity'>PNG:</label><br/>
  <input type="text" id="png" name="PNG" placeholder="Rate/Unit" className='capacityinput' onChange={pngRateHandle3}/>
 
          </div>
      </div>
      <div className='heading'>
  <h4 className='weather1'>Weather Parameters</h4>
  </div>
  <div className='generator'>
<div className='margindiv'>
<label  className='capacity'>Min:</label> <br/>
  <input type="text" id="min" name="min" placeholder="Celsius" className='capacityinput' onChange={MinimumTempuratureHandle3}/>
  
    </div>
    <div className='margindiv'>
    <label  className='capacity'>Max:</label> <br/>
  <input type="text" id="max" name="max" placeholder="Celsius" className='capacityinput' onChange={maxTempHandle3}/>
 
    </div>
    <div className='margindiv'>
    <label  className='capacity'>Humidity:</label> <br/>
   
  <input type="text" id="humidity" name="humidity" placeholder="Percentage" className='capacityinput' onChange={humudityHandle3}/>
 
    </div>
      </div>

  <div className='flex-container'>
      <div >
      <h6 className='lastdivheading'>Kitchen PNG</h6>
    
   <label className='consumption'>PNG Consumption:</label>
 <input type="text" id="pc" name="pc" placeholder="KG" className='capacityinput' onChange={pngHandle3}/> 
      </div>
 <div>
 <h6 className='lastdivheading'>Water Consumption</h6>

  <label className='consumption'>water consumption:</label>
 <input type="text" id="wc" name="wc" placeholder="IN KL" className='capacityinput' onChange={WaterConsumptionHandle3} />
 </div>
 <div className='solar' >
 <h6 className='lastdivheading'>Solar Generation</h6>
 
  <label className='consumption' >Solar Generation:</label>
 <input type="text" id="sg" name="sg" placeholder="Units" className='capacityinput' onChange={SolarGenerationHandle3}/>
 </div>
<div className='kebc' >
<h6 className='lastdivheading' >KEB Consumption</h6>

  <label className='consumption'>KEB Consumption:</label>
 <input type="text" id="kc" name="kc" placeholder="Units" className='capacityinput' onChange={kebHandle3}/>
</div>
    </div>
  
    
 <div className='submitbtn'>
      
  <button type="submit" className='Button' >Submit</button>

 </div>
 
</div>
</form>
</div>
</div>
      </>

    
   
  )
}

export default Form;