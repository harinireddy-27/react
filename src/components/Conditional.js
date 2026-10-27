import React from "react";
class UserGreeting extends React.Component {
    constructor(){
        super();
        this.state = {
            isLoggedIn: false
        }
    }
    /*state = {
        isLoggedIn: true
    }*/
    render () {
        if(this.state.isLoggedIn){
            return <h1>Welcome Harini Reddy</h1>
        } else {
            return <h1>Please Sign In</h1>
        }
    }
}
export default UserGreeting;