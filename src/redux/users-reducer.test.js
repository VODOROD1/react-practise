import usersReducer, {setCurrentPage} from './users-reducer.js';

let usersState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 200,
  currentPage: 2,
  isFetching: true,
  followingInProgress: [],
  fake: 10
};

// it('change current Page', () => {
//   let action = setCurrentPage(5);
//   let newState = usersReducer(usersState,action);
//   expect(newState.currentPage).toBe(5);
// })

