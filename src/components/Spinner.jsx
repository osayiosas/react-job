import { ClipLoader } from "react-Spinners"

const ovrride = {
    display: 'block',
    margin: '100px auto',
    borderColor: 'red'
    
}

const Spinner = ({loading}) => {
  return (
   <ClipLoader 

   color="#4338ca"
   loading={loading}
   cssOverride={ovrride}
   size={150}
   />
  )
}

export default Spinner