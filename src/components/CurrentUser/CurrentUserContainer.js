import { connect } from 'react-reduxt';
import { CurrentUser } from './CurrentUser';

const mapStateToprops = (state) => {
  const currentUser = state.get(`currentUser`);
  return{
      name: currentUser.get(`name`),
      status: currentUser.get(`status`),
    id:currentUser.get(`id`)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateStatus:({target:{value}}) => {
      console.log("Updating status...:",status);
    }
  }
};

export const CurrentUserContainer = connect(
    mapStateToprops,
    mapDispatchToProps
)(CurrentUser);