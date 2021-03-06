import React from 'react';
import {Field, reduxForm} from 'redux-form';
import s from './Users.module.css';
import User from './User';

const TestForm = (props) => {
  return (
    <Field component='input' type='text' name='testField' />
  )
}

const TestFieldForm = reduxForm({form:'testForm'}) (TestForm);

let Users = (props) => {

  // высчитываем количество страниц пагинации
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  
  for(let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map((page) => {
          let flag = props.currentPage === page;
          return (
            <span className={flag && s.selectedPage} key={page}
            onClick={(e) => {props.onPageChanged(page)}}> {page} </span>
          )
        })}
      </div>
      {props.users.map((user) => {return (<User state={user} key={user.id}
            followingInProgress={props.followingInProgress}
            follow={props.follow} 
            unfollow={props.unfollow} />)})}
      <TestFieldForm />
    </div>
  )
}

export default Users;
