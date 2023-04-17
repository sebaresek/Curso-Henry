import React from "react";
import { connect } from 'react-redux';
import { getUsers } from "../redux/actions";

class Cards extends React.Component{
    constructor(props){
        super(props)
        console.log(this.props);
    }

    componentDidMount(){
        this.props.getUsers()
    }

    render(){
        return(
            <>
                <h1>Este es el componente SMART</h1>
                {
                    this.props.users?.map(user => {
                        return(
                            <ul key={user.id}>
                                {user.name}
                            </ul>
                        )
                    })
                }
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: () => { dispatch(getUsers()) }
    }
}


export default connect(
    mapStateToProps,//me permite acceder al estado global
    mapDispatchToProps//me permite despachar actions
)(Cards);