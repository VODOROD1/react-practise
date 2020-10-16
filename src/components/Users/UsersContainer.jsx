import React from 'react';
import {connect} from 'react-redux';
import * as axios from "axios";
import Users from "./Users";
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching } from '../../redux/users-reducer';
import Preloader from '../common/Preloader/Preloader.js';

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.toggleIsFetching(true);
    //  обращаемся к серверу
    axios.get(`https://social-network.samuraijs.com/api/1.0/users` +
    `?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        })
    
  };

  onPageChanged = (pageNumber) => {
    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(pageNumber);
    //  повторно обращаемся к серверу
    axios.get(`https://social-network.samuraijs.com/api/1.0/users` +
    `?page=${pageNumber}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
        })
  }
  
  render() {
    return <>
      {this.props.isFetching ? 
            <Preloader /> : null }
      <Users onPageChanged={this.onPageChanged} 
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
      />
    </>
  }
}

let mapStateToProps = (state) => {
    return {
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUsersCount: state.usersPage.totalUsersCount,
      currentPage: state.usersPage.currentPage,
      isFetching: state.usersPage.isFetching
    }
}

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
})(UsersContainer);






//Теперь mapDispatchToProps не используется, т.к. мы напрямую
// передаем объект в connect
// let mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => {
//       dispatch(follow(userId));
//     },
//     unfollow: (userId) => {
//       dispatch(unfollow(userId));
//     },
//     setUsers: (users) => {
//       dispatch(setUsers(users));
//     },
//     setCurrentPage: (currentPage) => {
//       dispatch(setCurrentPage(currentPage));
//     },
//     setTotalUsersCount: (totalUsersCount) => {
//       dispatch(setTotalUsersCount(totalUsersCount));
//     },
//     toggleIsFetching: (isFetching) => {
//       dispatch(toggleIsFetching(isFetching))
//     }
//   }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);



  // let usersArr = [
  //     {id: 1, photoUrl: 'https://c7.hotpng.com/preview/304/305/226/web-development-computer-icons-avatar-business-user-profile.jpg', 
  //     fullname: 'Dmitry K.', followed: false,status: 'I am looking for a job right now', location: {country: 'Belarus', city: 'Minsk'}},
  //     {id: 2, photoUrl: 'https://f1.pngfuel.com/png/685/133/92/avatar-icon-user-profile-icon-design-skin-cartoon-technology-png-clip-art.png', 
  //     fullname: 'Svetlana D.', followed: true,status: 'I am so pretty', location: {country: 'Belarus', city: 'Minsk'}},
  //     {id: 3, photoUrl: 'https://c7.hotpng.com/preview/304/305/226/web-development-computer-icons-avatar-business-user-profile.jpg', 
  //     fullname: 'Sergei S.', followed: false,status: 'I like football',location: {country: 'Ukraine', city: 'Kiev'}},
  //     {id: 4, photoUrl: 'https://c7.hotpng.com/preview/304/305/226/web-development-computer-icons-avatar-business-user-profile.jpg', 
  //     fullname: 'Andrew T.', followed: true,status: 'I am free',location: {country: 'Russia', city: 'Moskow'}},
  //     {id: 5, photoUrl: 'https://c7.hotpng.com/preview/304/305/226/web-development-computer-icons-avatar-business-user-profile.jpg', 
  //     fullname: 'Mikhail С.', followed: true,status: 'I am good fron-end developer',location: {country: 'Russia', city: 'Engels'}},
  //     {id: 6, photoUrl: 'https://c7.hotpng.com/preview/304/305/226/web-development-computer-icons-avatar-business-user-profile.jpg.', 
  //     fullname: 'Aleksandr K.', followed: false,status: 'I am so tired',location: {country: 'Belarus', city: 'Minsk'}},
  //     {id: 7, photoUrl: 'https://f1.pngfuel.com/png/685/133/92/avatar-icon-user-profile-icon-design-skin-cartoon-technology-png-clip-art.png', 
  //     fullname: 'Daria Y.', followed: false,status: 'I like a sweet',location: {country: 'Russia', city: 'Samara'}},
  //     {id: 8, photoUrl: 'https://c7.hotpng.com/preview/304/305/226/web-development-computer-icons-avatar-business-user-profile.jpg', fullname: 'Igor K.', followed: true,
  //     status: 'I am a sportsman',location: {country: 'Belarus', city: 'Minsk'}}
  // ];