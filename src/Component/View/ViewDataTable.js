import React, { useEffect, useState} from 'react';
import "./ViewDataTable.css"
import axios from "axios";
import DevelopmentUrl from "../../data/api";
import imglogo from '../../image/logo.png'

function ViewDataTable() {

  const token = localStorage.getItem("token");

  const [datefrom, setDatefrom] = useState();
  const [dateto, setDateto] = useState();
  const [location, setLocation] = useState();
  const [consumeData, setConsumeData] = useState([]);
  const [filter, setFilter] = useState([]);
  const datefromHandleChange = (e) => {
    setDatefrom(e.target.value);
    console.log(e.target.value);
  }

  const datetoHandleChange = (e) => {
    setDateto(e.target.value);
    console.log(e.target.value);
  }

  const locationHandleChange = (e) => {
    setLocation(e.target.value);
    console.log(e.target.value);
  }

  
  
  
  // const showTable = () => {
  //   // console.log("sachin")
  //   // console.log(typeof(dateto))
   
  //     axios.get(DevelopmentUrl + `/consume/daterange/${dateto}/${datefrom}/${location}`, {
  //     headers: {
  //       // "Content-type": "application/json",
  //       "Authorization": `bearer ${token}`
    
  //     }
  //   })
  //     .then((res) => {
  //       setConsumeData(res.data)
  //       console.log(res)
  //     })
  // };
  // useEffect(showTable, []);

  useEffect(() => {
    axios.get(DevelopmentUrl + '/consume', {
      headers: {
        
        "Authorization": `bearer ${token}`
      }
    })
      .then(res => {
        setConsumeData(res.data);
        console.log(res.data);
      })
      .catch(err => console.error("YO YOU GOT AN ERROR IN AXIOS ", err))

  }, [])

  const submitHandler = () => {
    let filterArray = consumeData.filter(function (el) {
      return el.location ===  location &&
             el.date >= datefrom &&
             el.date <= dateto// Changed this so a home would match
    });
    setFilter(filterArray);
  }
  

  return (
    <>
<div className='mainContainer'>
<div className='logoimg2'>
              <img src={imglogo} />
          </div>
      <div className='table-responsive'>
      
          <div className='maindiv' style={{ display: "flex" }}>


            <div>
              <label style={{ color: "#F1844D", fontSize: "14px" }}>Choose Property</label>
              <br />
              <select name="Property" className='form-control' onChange={locationHandleChange}>
                <option >Select Property</option>
                <option value="Coorg">Coorg</option>
                <option value="Hampi">Hampi</option>
                <option value="Kabini">Kabini</option>

              </select>

            </div>
            <div className='lbl'>
              <label style={{ color: "#F1844D", fontSize: "14px" }}>From Date</label><br />
              <input type="date" className='form-control '  onChange={datefromHandleChange} />
            </div>
            <div className='lbl'>
              <label style={{ color: "#F1844D", fontSize: "14px" }}>To Date</label>
              <br />
              <input type="date" className='form-control ' onChange={datetoHandleChange} />
            </div>
            <button className='btnsearch' onClick={submitHandler}>Search</button>
          </div>
       
        <table >
          <tr>
            <th>Date</th>
            <th >Time</th>
            <th >KEB Consumption (in Units)</th>
            <th>Generator Usage

              <table>
                <th>Generator Name</th>
                <th>Capacity</th>
                <th>Generation</th>
                <th>Time Run</th>
                <th>Diesel Consumption</th>
              </table>

            </th>
            <th>Kitchen (PNG)</th>
            <th>Water consumption</th>
            <th>Weather Parameters</th>
            <th>Rate Matrix</th>
            <th>Solar Generation</th>
          </tr>

          <tbody>
            {filter.map((data) => {
              return (
                <>
                  <tr>
                    {/* {console.log(typeof(data.date))} */}
                    <td >{data.date}</td>
                    <td >{data.timeofrecording}</td>
                    <td>{data.keb}</td>
                    <td>
                      <table>

                        <tr>


                          <table>

                            {data.generator.map((details) => {
                              return (
                                <>
                                  <tr>
                                    <td>{details.generatorname}</td>
                                    <td>{details.capacity}</td>
                                    <td>{details.generation}</td>
                                    <td>{details.timerun} Hr</td>
                                    <td>{details.dieselconsumption.$numberDecimal} Ltrs</td>
                                  </tr>

                                </>
                              )
                            })}

                            <tr>
                              <td></td>
                              <td>Total</td>
                              <td>{data.total[0].totalGeneration}</td>
                              <td>{data.total[0].totalTimeRun} Hr</td>
                              <td>{data.total[0].dieselConsumption} Ltrs</td>
                            </tr>

                          </table>



                        </tr>
                      </table>
                    </td>
                    <td>{data.kitchenpng} Kg</td>
                    <td>{data.waterconsumption} Ltrs</td>
                    <td>
                      <table>
                        <tr>
                          <td>MIN </td>
                          <td>{data.weathermin}</td>
                        </tr>
                        <tr>
                          <td>MAX </td>
                          {data.weathermax}

                        </tr>
                        <tr>
                          <td>Humidity </td>
                          <td>{data.humidity}</td>
                        </tr>

                      </table>

                    </td>

                    <td>
                      <table >
                        <tr>
                          <td>KEB </td>
                          <td>{data.kebrate.$numberDecimal}</td>
                        </tr>
                        <tr><td>Fuel </td>
                          <td>{data.fuelrate.$numberDecimal}</td>
                        </tr>
                        <tr><td>Water </td>
                          <td>{data.waterrate.$numberDecimal}</td>
                        </tr>
                        <tr><td>PNG </td>
                          <td>{data.pngrate.$numberDecimal}</td>
                        </tr>
                      </table>

                    </td>
                    <td>{data.solargeneration}</td>
                  </tr>
                </>
              )
            })}

          </tbody>


        </table>
      </div>
      </div>
    </>
  )
}

export default ViewDataTable