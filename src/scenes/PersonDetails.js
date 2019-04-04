import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const PersonDetails = (props) => {
    // if (!props.profile) {
    //     return <Redirect to={"/"} />
    // }

    const id = parseInt(props.match.params.id);
    const person = props.people.find( person => person.id === id );

    return (
        <div>
            <h1>PersonDetails</h1>
            <div>
                <p>{person.name}</p>
                <p>{person.email}</p>
                <p>{person.hobbies}</p>
                <p>{person.industry}</p>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    people: state.people
})

const mapDispatchToProps = (dispatch) => ({
    // setCurrentProfileProp: (profile) => dispatch(setCurrentProfile(profile)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PersonDetails);
