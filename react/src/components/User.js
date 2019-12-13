import React, { Component } from 'react';
import PropTypes from 'prop-types';

 class User extends Component {
     state = {
         isVisible : false
     }
     onClickEvent=(e) => {
       this.setState({
           isVisible:!this.state.isVisible
       })
     }
    render() {
        const {name,department,salary}= this.props;
        const {isVisible} = this.state;
        return (
            
                
                <div className="col-md-6 mb-4">
                    <div className="card">
                        <div className="card-header d-flex justify-content-between">
                        <h4 className="d-inline" >{name}</h4>
                        <i className="fas fa-arrow-down float-right" style={{cursor:"pointer"}} onClick= {this.onClickEvent}></i>
                        </div>
                        {
                            isVisible ? <div className="card-body"> 
                            <p className="card-text">Departman: {department} </p>
                            <p className="card-text">Maaş: {salary}</p>
                            </div> : null
                        }
                    </div>
                </div>
           
        )
    }
}

User.defaultProps = {
    name:"Bilgi yok",
    department:"Bilgi yok",
    salary:"Bilgi yok"
}

User.propTypes = {
    name : PropTypes.string.isRequired,
    department : PropTypes.string.isRequired,
    salary : PropTypes.string.isRequired
}

export default User;