import React, {Component} from  'react';
import classes from './Users.module.css';


class Users extends Component {

    userDisplayHandler = (id) => {
        const queryString = 'id=' + id
        this.props.history.push({
        pathname: '/user',
        search: '?'+ queryString
        });
    }


    render() {
        return(
            <div className={classes.User} onClick={()=>this.userDisplayHandler(this.props.id)}>
                <img src={this.props.img} alt='' />
                <pre>{this.props.firstname} {this.props.lastname}</pre>
                {this.props.email}
                
                
            </div>
        )
    }

}


export default Users;