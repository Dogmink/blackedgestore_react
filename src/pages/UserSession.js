import React from 'react'
import './UserSession.css'
import FormUserLog from '../components/formUserLog'

export default function UserSession(props){

    const { formname } = props.params

    return(
        <FormUserLog formname={formname} />
    );
}