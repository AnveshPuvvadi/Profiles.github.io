import React, {Component} from 'react';
import classes from './Users.module.css';
import axios from 'axios';
import Users from './Users';
import Spinner from '../../UI/Spinner';


class UsersProfile extends Component { 


state = {
     users : [],
     usersUnsort: [],
     loading : true

}

componentDidMount() {
    axios.get('https://reqres.in/api/users')
    .then ( response => {
        this.setState ({ users : response.data.data, usersUnsort: response.data.data, loading: false})
    })
    .catch(error => {
         this.setState ({ error : error})
    })

};

onSortHandler = (e) => {
    if(e.target.value === 'FirstName'){
        const myData = [].concat(this.state.users)
        .sort((a, b) => a.first_name > b.first_name ? 1 : -1)
    
        this.setState({
            users : myData
        });
    }
    if(e.target.value === 'LastName'){
        const myData = [].concat(this.state.users)
        .sort((a, b) => a.last_name > b.last_name ? 1 : -1)
        
        this.setState({
            users : myData
        });

    }

    if(e.target.value === 'none'){
        const myData = [].concat(this.state.usersUnsort)
        
        this.setState({
            users : myData
        });

    }
    
}

    render() {   
        
        let user = (
                
                 <div className={classes.Grid}>  
                        {this.state.users.map (user => (
                            <Users key={user.id}
                                id={user.id} 
                             email = {user.email}
                             firstname= {user.first_name}
                             lastname = {user.last_name}
                             img= {user.avatar}
                             {...this.props}/>
                        ))}
                </div>
        )

        let spin = this.state.loading ? <Spinner /> : user
        return (
            <div>
            
            <div className={classes.Profiles}>
            <div className={classes.Sort}>
            Sort by : <select  name="sorted" onChange={(e) => this.onSortHandler(e)}>
                    <option value="none" >none</option>
                    <option value="FirstName" >FirstName</option>
                    <option value="LastName" >LastName</option>
            </select>
            </div>
                {spin}
            </div>
            </div>
        )
    }

}

export default UsersProfile;