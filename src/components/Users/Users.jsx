import React from 'react';
import s from './Users.module.css';
import User from './User';

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
            <span className={flag && s.selectedPage}
            onClick={(e) => {props.onPageChanged(page)}}> {page} </span>
          )
        })}
      </div>
      {props.users.map((user) => {return (<User state={user} key={user.id}
            followingInProgress={props.followingInProgress}
            follow={props.follow} 
            unfollow={props.unfollow} />)})}
    </div>
  )
}

export default Users;