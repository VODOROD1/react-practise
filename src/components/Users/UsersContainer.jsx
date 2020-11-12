import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import Users from "./Users";
import { follow, unfollow, setCurrentPage, requestUsers } from '../../redux/users-reducer';
import Preloader from '../common/Preloader/Preloader.js';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {getUsers,getPageSize,getTotalUsersCount,
        getCurrentPage,getIsFetching,getFollowingInProgress} from '../../redux/users-selectors';

class UsersContainer extends React.Component {

  componentDidMount() {
    // обращаемся к серверу
    this.props.requestUsers(this.props.currentPage, this.props.pageSize);
  };

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    //  повторно обращаемся к серверу
    this.props.requestUsers(pageNumber, this.props.pageSize);
  }
  
  render() {

    console.log('USERS');
    
    return <>
      {this.props.isFetching ? 
            <Preloader /> : null }
      <Users onPageChanged={this.onPageChanged} 
            followingInProgress={this.props.followingInProgress}
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

UsersContainer = withAuthRedirect(UsersContainer);

let mapStateToProps = (state) => {
  console.log('mapStateToProps USERS-CONTAINER');
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
  }
}

let mapDispatchToProps = {
  follow,
  unfollow,
  setCurrentPage,
  requestUsers // Это thunkCreator
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect,
)(UsersContainer)

// export default compose(
//   connect(mapStateToProps, mapDispatchToProps),
//   withAuthRedirect
// )(UsersContainer)

// export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);







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