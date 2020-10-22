import React from 'react';
import s from './User.module.css';
import defaultUserPhoto from '../../assets/images/default_avatar.jpg';
import {NavLink} from 'react-router-dom';

let User = (props) => {

  return (
    <div>
        <span>
            <div>
                <NavLink to={'/profile/' + props.state.id}>

                <img src={props.state.photos.small != null ? props.state.photos.small : defaultUserPhoto} 
                        alt='' className={s.avatar} />
                </NavLink>
            </div>
            <div>
                {props.state.followed
                ? <button disabled={props.followingInProgress.some(id => id === props.state.id)} 
                    onClick={() => { props.unfollow(props.state.id) }}> Unfollow </button> 
                : <button disabled={props.followingInProgress.some(id => id === props.state.id)} 
                    onClick={() => { props.follow(props.state.id) }}> Follow </button>
                }
            </div>
        </span>
        <span>
            <span>
                <div>{props.state.name}</div>
                <div>{props.state.status}</div>
            </span>
            <span>
                <div>{"props.state.location.country"}</div>
                <div>{"props.state.location.city"}</div>
            </span>
        </span>
    </div>
  )
}

export default User;