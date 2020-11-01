import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Redirect } from 'react-router-dom';
import {Input} from '../common/FormsControls/FormsControls';
import {required} from '../../utils/validators/validators';
import s from './Login.module.css';

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Input} type='text' name='login' 
              placeholder='input login' validate={required}/>
      </div>
      <div>
        <Field component={Input} type='password' name='password' 
              placeholder='input password' validate={required}/>
      </div>
      <div>
        <Field component={Input} type='checkbox' name='rememberMe'/> remember me
      </div>
      { props.error && 
        <div className={s.formSummaryError}>
          {props.error}
        </div>
      }
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}


const LoginReduxForm = reduxForm({
  // a unique name for the form
  form: 'login'
})(LoginForm);


const Login = (props) => {
  
  const handleSubmit = (formData) => {
    props.login(formData.login, formData.password, formData.rememberMe);
  }
  return (

      // props.isAuth 
      //   ? (<Redirect to={'/profile/2'} />) 
      //   : (<div>
      //       <h1>LOGIN</h1>
      //       <LoginReduxForm onSubmit={handleSubmit}/>
      //     </div>)

      props.isAuth 
      ? (<Redirect to={props.currentURL} />) 
      : (<div>
          <h1>LOGIN</h1>
          <LoginReduxForm onSubmit={handleSubmit}/>
        </div>)

      // <div>
      //   <h1>LOGIN</h1>
      //   <LoginReduxForm onSubmit={handleSubmit}/>
      // </div>

      // props.isAuth 
      //   ? (<currentComponent />) 
      //   : (<div>
      //       <h1>LOGIN</h1>
      //       <LoginReduxForm onSubmit={handleSubmit}/>
      //     </div>)

  )
}

export default Login;



/////////////////////////////////////////////////////////////
//                              Login : SomeTestLogin
// email: vodorodo51@gmail.com
// password: R6n1gAZ43K9
/////////////////////////////////////////////////////////////