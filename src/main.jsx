import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Demo from './UseState/Demo'
//import Sample1 from './UseContext/Sample1'
//import Demo from './UseCallback/Demo'
//import Demo from './UseMemo/Demo'
//import Demo1 from './UseEffect/Demo1'
//import Demo from './UseEffect/Demo'
//import Demo from './UseRef/demo'
//import Demo1 from './UseRef/Demo1'
//import Demo from './UseEffect/Demo'
//import Demo1 from './UseEffect/Demo1'
//import './index.css'

//import Demo from './UseCallback/Demo.jsx'
//import Demo1 from './UseCallback/Demo1.jsx'
//import Demo2 from './UseCallback/Demo2.jsx'
//import Demo from './UseCallback/Demo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Demo/>
  </StrictMode>
)
