import { useState, useEffect } from 'react';

const useForm = () => {
 const [values, setValues] = useState(
   {
     name:'',
     email:'',
     password:''
   }
 )

const handleChange = (e)=> {
  setValues({
    ...values,
    [e.target.name]:[e.target.value]
  }
  )
  console.log(e.target.value)
}

return {handleChange,values}

}

export default useForm;
