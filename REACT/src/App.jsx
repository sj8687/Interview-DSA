import { useState } from "react";


const countries = [
  {
    name: 'India',
    value: 'IN',
    cities: [
      'Delhi',
      'Mumbai',
      'Kolkata',
      'Chennai'
    ]
  },
  {
    name: 'Pakistan',
    value: 'PK',
    cities: [
      'Lahore',
      'Karachi',
      'Islamabad'
    ]
  },
  {
    name: 'Bangladesh',
    value: 'BG',
    cities: [
      'Dhaka',
      'Chittagong',
      'Khulna'
    ]
  },
  {
    name: 'Sri Lanka',
    value: 'SL',
    cities: [
      'Colombo',
      'Kandy',
      'Galle'
    ]
  }
];


export default function App() {

  const [country,setCountry] = useState(0);

  return (
    <div className="">
        <select onChange={(e) =>{
          setCountry(e.target.value);    
             
        }}>
          {
            countries.map((item,index)=>{
              return (<option value={index}>{item.name}</option>)
            })
          }
        </select>

        <select value={country}>
          {
            countries[country].cities.map((item,index)=>{
              return (<option value={index}>{item}</option>)
            })
          }
        </select>
    </div>
  )
}