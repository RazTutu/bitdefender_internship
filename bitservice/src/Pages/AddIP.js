import React, {Component} from 'react';
import '../CSS/Requests.css';

class AddIPpage extends Component {

    constructor(props){
        super(props);
        this.IP = React.createRef();
    }

    sendRequest = (pageState) =>{
        pageState.preventDefault();
        const input_ip = this.IP.current.value;
        console.log("input ip is", input_ip);

        const requestBody = {
            ip: `${input_ip}`
        }

        fetch('https://boiling-reef-38533.herokuapp.com/api/v1/categorize', {
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            if(res.status !== 200){
                throw new Error("POST failed at fetch. The response code is not 200");
            }
            return res.json();
        }).then(responseData => {
           console.log(responseData);
        }).catch(err => {
            console.log(err);
        });

    }

    render(){
        return(
            <React.Fragment>
                <div className="sendRequest_container">
                <form className="sendRequest" onSubmit={this.sendRequest}>
                    <h2>Add an IP</h2>
                    <div className="sendRequest__element">
                        <label htmlFor="sendRequest__element-IP">IP:</label>
                        <input type="text" id="sendRequest__element-IP" ref={this.IP}></input>
                    </div>
                    <div className="sendRequest__button">
                        <button type="submit">Submit</button>
                    </div>
                </form>
                </div>
            </React.Fragment>
        );
    }
}

export default AddIPpage;