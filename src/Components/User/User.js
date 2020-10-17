import React, { Component } from 'react';
import axios from 'axios';
import classes from './User.module.css';
import { connect } from 'react-redux';
import * as userActions from '../../Store/Action/UserAction';
import withErrorHandler from '../../Hoc/withErrorHandler';
import Spinner from '../../UI/Spinner';

class User extends Component {


componentWillMount () {

    let id=0;
    const query = new URLSearchParams( this.props.location.search );

    for ( let param of query.entries() ) {
        // ['salad', '1']
        if (param[0] === 'id') {
            id = param[1];
        }
    }
    this.props.fecthUserData(id);

}
    
render() {
    
    let user =(
        <div className={classes.User}>
            <h1>{this.props.user.first_name} {this.props.user.last_name}</h1>
            <img className={classes.Img} src={this.props.user.avatar} alt='' />
            <div>{this.props.user.email}</div><br></br>
            <div className={classes.ad}> 
                <div>Company - {this.props.ad.company}</div>
                <div>{this.props.ad.url}</div>
                <div>{this.props.ad.text}</div>                       
            </div>
        </div>
    )
    let showUser = this.props.loading ? <Spinner /> : user
        
    return (
        <div>
            {showUser}
        </div>

    )
}
}

const mapStateToProps = state => {
    return {
        user : state.user,
        ad: state.ad,
        loading : state.loading,
        
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fecthUserData : (id) => dispatch (userActions.fetchUserData(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (withErrorHandler(User, axios));