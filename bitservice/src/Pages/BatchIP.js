import React, {Component} from 'react';
import '../CSS/Requests.css';

class BatchIPpage extends Component {

    state = {
        ip_array: [],
        arrayEmpty: true,
        providersPressed: false
    }

    constructor(props){
        super(props);
        this.IP_element = React.createRef();
    }

    

    addToIPList = (pageState) => {
        pageState.preventDefault();

        const ip_element = this.IP_element.current.value;
      
        console.log("form pressed");

        let newStateArray = this.state.ip_array.slice();
        newStateArray.push(ip_element);
        this.setState({ip_array: newStateArray});
        this.setState({arrayEmpty: false});
    }

    getProviders = (pageState) => {
        pageState.preventDefault();
        console.log("getProviders pressed");

        this.state.ip_array.forEach(element => {

            let endpoint = 'https://boiling-reef-38533.herokuapp.com/api/v1/categorize?ip=' + element;
            console.log("endpoints is", endpoint);

        });



        this.setState({ip_array: []});
    }

   showList = props => {
        return <ul>
            {
            this.state.ip_array.map((element) => (
                <li key={element}>{element}</li>
            ))
            }  
        </ul>;
   }


    render(){
        return(
            <React.Fragment>
                <form className="sendRequest" onSubmit={this.addToIPList}>
                    <h2>Add IPs to the list and get the provider for all of them.</h2>
                    <div className="sendRequest__element">
                        <label htmlFor="sendRequest__element-IP">IP:</label>
                        <input type="text" id="sendRequest__element-IP" className="input_ip" ref={this.IP_element}></input>
                    </div>
                    <div className="sendRequest__button">
                        <button type="submit" className="submit_btn">Submit</button>
                    </div>

                    {
                        this.state.arrayEmpty 
                        ?
                        <h2>No ip added so far!</h2>
                        :
                        <React.Fragment>
                        <h2>IPs added so far</h2>
                        <this.showList />
                        </React.Fragment>
                    }
                </form>

                <form className="sendRequest" onSubmit={this.getProviders}>
                    <div className="sendRequest__button">
                        <button type="submit" className="submit_btn">Get providers for the entire list</button>
                    </div>
                </form>


            </React.Fragment>
        );
    }
}

export default BatchIPpage;