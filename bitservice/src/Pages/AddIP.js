import React, {Component} from 'react';
import '../CSS/Requests.css';

class AddIPpage extends Component {

    state = {
        ApiResponse: '',
        responseReceived: false
    }

    constructor(props){
        super(props);
        this.IP = React.createRef();
        this.selectedOption = React.createRef();
    }

    sendRequest = (pageState) =>{
        pageState.preventDefault();
        const input_ip = this.IP.current.value;
        const selected_option = this.selectedOption.current.value;

        const requestBody = {
            ip: `${input_ip}`
        }

        if(selected_option === 'postip'){

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
           this.setState({ApiResponse: responseData.data.message, responseReceived: true});

        }).catch(err => {
            console.log(err);
        });

        } else if(selected_option === 'getip' || selected_option === 'deleteip') {
            let methodFetch;
            let endpoint;
            if(selected_option === 'getip'){
                methodFetch = 'GET';
                endpoint = 'https://boiling-reef-38533.herokuapp.com/api/v1/categorize?ip=' + input_ip;
            } else if(selected_option === 'deleteip'){
                methodFetch = 'DELETE';
                endpoint = 'https://boiling-reef-38533.herokuapp.com/api/v1/categorize?ip=' + input_ip;
            }

            fetch(endpoint, {
            method: methodFetch,
            headers: {
                'Content-Type': 'application/json'
            }
            }).then(res => {
            if(res.status !== 200){
                throw new Error("POST failed at fetch. The response code is not 200");
            }
                return res.json();
            }).then(responseData => {
                if(selected_option === 'getip'){
                    this.setState({ApiResponse: responseData.data.company, responseReceived: true});
                } else {
                this.setState({ApiResponse: responseData.data.message, responseReceived: true});
                }
            }).catch(err => {
                console.log(err);
            });


        } else if(selected_option === 'putip'){
            const methodFetch = 'PUT';
            const endpoint = 'https://boiling-reef-38533.herokuapp.com/api/v1/categorize';
            fetch(endpoint, {
                method: methodFetch,
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
                    this.setState({ApiResponse: responseData.data.message, responseReceived: true});
                }).catch(err => {
                    console.log(err);
                });
        }

    }

    render(){
        return(
            <React.Fragment>
                <div className="sendRequest_container">
                <form className="sendRequest" onSubmit={this.sendRequest}>
                    <h2>Add, Update, Delete or check an IP</h2>
                    <div className="sendRequest__element">
                        <label htmlFor="sendRequest__element-IP">IP:</label>
                        <input type="text" id="sendRequest__element-IP" className="input_ip" ref={this.IP}></input>
                    </div>

                    <div className="sendRequest__options">
                            <select className="request_options" name="Options" ref={this.selectedOption}>
                                <option value="getip">Get IP provider</option>
                                <option value="postip">Post IP</option>
                                <option value="deleteip">Delete IP</option>
                                <option value="putip">Put IP</option>
                            </select>
                    </div>
                    <div className="sendRequest__button">
                        <button type="submit" className="submit_btn">Submit</button>
                    </div>
                </form>

                <div className="apiResponse">
                    {!this.state.responseReceived
                        ?
                        <h2>Response not received yet</h2>
                        :
                        <h2>{this.state.ApiResponse}</h2>
                    }
                </div>
                </div>


            </React.Fragment>
        );
    }
}

export default AddIPpage;