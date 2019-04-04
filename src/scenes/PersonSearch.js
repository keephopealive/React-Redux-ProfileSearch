import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

import { setCurrentProfile } from '../redux';

class PersonSearch extends Component {
    constructor(props){
        super(props);
        this.state = {
            redirectToDetails: false,
            searchField: "",
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleRedirect = (person) => {
        this.props.setCurrentProfileProp(person);
        this.setState({
            redirectToDetails: true
        })
    }

    render() {
        if (this.state.redirectToDetails){
            return <Redirect to={"/profile"} />
        }

        return (
            <div>
                <h1>PersonSearch</h1>
                <input type="text" name="searchField" value={this.props.searchField} onChange={this.handleChange}/>
                {
                    this.props.people
                    .filter( (person) => person.name.toLowerCase().includes(this.state.searchField.toLowerCase()) )
                    .map( (person, index) => {
                        return (
                            <li key={index}>
                                {person.name}
                                <button onClick={ () => { this.handleRedirect(person) }}>Details</button>
                                <Link to={`/profile/${person.id}`} >Details by Id</Link>
                            </li>
                        )
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    people: state.people
})

const mapDispatchToProps = (dispatch) => ({
    setCurrentProfileProp: (profile) => dispatch(setCurrentProfile(profile)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PersonSearch);
