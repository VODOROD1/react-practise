import React from 'react';
import s from './FormsControls.module.css';

export const FormControl = ({input, meta, ...props}) => {
  let errorFlag = meta.touched && meta.error;
  return (
    <div className={s.formControl + ' ' + (errorFlag ? s.error : '')}>
      <div>
        {props.children}
      </div>
  { errorFlag && <span>{meta.error}</span> }
    </div>
  )
}

export const Textarea = (props) => {
  return (
    <FormControl {...props}><textarea {...props.input} {...props}/></FormControl>
  )
}

export const Input = (props) => {
  return (
    <FormControl {...props}><input {...props.input} {...props}/></FormControl>
  )
}



// export const Input = ({input, meta, ...props}) => {

//   let errorFlag = meta.touched && meta.error;
//   return (
//     <div className={s.formControl + ' ' + (errorFlag ? s.error : '')}>
//       <div>
//         <input {...input} {...props}/>
//       </div>
//   { errorFlag && <span>{meta.error}</span> }
//     </div>
//   )
// }

// meta.dispatch({
//   type: @@redux-form/CHANGE,
//   payload: null,
//   meta: { ...meta, field: name },
// })