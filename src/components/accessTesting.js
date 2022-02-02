import { Component } from "react";
import Testing from "./testing";

import { io } from "socket.io-client";

class AccessTesting extends Component {
    constructor() {
        super();

        // Set up web socket
        this.socket = io()

        this.state = {
            unlocked: false,
            timerInfo: null
        }
    }

    accessAssessmemt() {
        if (this.state.unlocked) {
            return <Testing timerInfo={this.state.timerInfo} assessment={this.props.assessment}/>
        }

        return <h2>Please wait for the instructor to unlock this test</h2>
    }

    componentDidMount() {
        // fetch('/unlocked-testing')
        // .then(res => {
        //     if(res.ok) {
        //         return res.json();
        //     }
        // }).then(data => {
        //     if(data) {
        //         this.setState({
        //             unlocked: data.unlocked
        //         })

        //         // console.log(this.state);
        //     }
        // }).catch(err => console.error(err));

        fetch('/users/get-username')
            .then(res => {
                if (res.ok) return res.json();
            })
            .then(data => {
                if (data.username) {
                    this.socket.emit('new user', {
                        assessment: this.props.assessment,
                        joined: new Date().toLocaleString(),
                        username: data.username
                    })
                }
            })

        this.socket.on('unlock testing', (timerInfo) => {
            console.log(timerInfo)

            this.setState({
                unlocked: true,
                timerInfo: timerInfo
            })
        })
    }

    render() {
        return this.accessAssessmemt()
    }
}

export default AccessTesting;