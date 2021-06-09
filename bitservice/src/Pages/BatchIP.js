import React, {Component} from 'react';
import '../CSS/Requests.css';

class BatchIPpage extends Component {

    state = {
        ip_array: [],
        arrayEmpty: true,
        providersPressed: false,
        amazon_ip_array: [],
        azure_ip_array: [],
        google_ip_array: [],
        unknown_ip_array: [],
        arrays_loaded: false
    }

    constructor(props){
        super(props);
        this.IP_element = React.createRef();
    }

    

    addToIPList = (pageState) => {
        pageState.preventDefault();

        const ip_element = this.IP_element.current.value;
      

        let newStateArray = this.state.ip_array.slice();
        newStateArray.push(ip_element);
        this.setState({ip_array: newStateArray});
        this.setState({arrayEmpty: false});
    }

    getProviders = (pageState) => {
        pageState.preventDefault();

        this.state.ip_array.forEach(element => {

            let endpoint = 'https://boiling-reef-38533.herokuapp.com/api/v1/categorize?ip=' + element;
            
            fetch(endpoint, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
                }).then(res => {
                if(res.status !== 200){
                    throw new Error("POST failed at fetch. The response code is not 200");
                }
                    return res.json();
                }).then(responseData => {

                    if(responseData.data.company === 'Azure'){
                        let newStateAzure = this.state.azure_ip_array.slice();
                        newStateAzure.push(element);
                        this.setState({azure_ip_array: newStateAzure});


                    } else if(responseData.data.company === 'Amazon Web Services'){
                        let newStateAmazon = this.state.amazon_ip_array.slice();
                        newStateAmazon.push(element);
                        this.setState({amazon_ip_array: newStateAmazon});

                    } else if(responseData.data.company === 'Google Cloud Platform'){
                        let newStateGoogle = this.state.google_ip_array.slice();
                        newStateGoogle.push(element);
                        this.setState({google_ip_array: newStateGoogle});


                    } else if(responseData.data.company === 'UNKNOWN'){
                        let newStateUnknown = this.state.unknown_ip_array.slice();
                        newStateUnknown.push(element);
                        this.setState({unknown_ip_array: newStateUnknown});
                    }

                }).catch(err => {
                    console.log(err);
                });

        });

        this.setState({ip_array: [], arrays_loaded: true});
        
    }

   showList = props => {
        return <ul className="remove_ul_bullets">
            {
            this.state.ip_array.map((element) => (
                <li key={element}>{element}</li>
            ))
            }  
        </ul>;
   }

   showGoogleList = props => {
    return <ul className="remove_ul_bullets">
        {
            this.state.google_ip_array.map((element) => (
                <li key={element}>{element}</li>
            ))
        }  
    </ul>;
   }

   showAzureList = props => {
    return <ul className="remove_ul_bullets">
        {
            this.state.azure_ip_array.map((element) => (
                <li key={element}>{element}</li>
            ))
        }  
    </ul>;
   }

   showAmazonList = props => {
    return <ul className="remove_ul_bullets">
        {
            this.state.amazon_ip_array.map((element) => (
                <li key={element}>{element}</li>
            ))
        }  
    </ul>;
   }

   showUnknownList = props => {
    let temporary_ip_array = this.state.unknown_ip_array;
    
    return <ul className="remove_ul_bullets">
        {
            temporary_ip_array.map((element) => (
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

                <div className="show_providers">
                   
                    <div className="show_providers__google">
                        {this.state.arrays_loaded
                        ?
                        <React.Fragment>
                            <h2>Google IPs</h2>
                            <this.showGoogleList />
                        </React.Fragment>
                        :
                        <h2>Google IPs to be loaded below</h2>
                        }


                    </div>
                    <div className="show_providers__azure">
                        {
                           this.state.arrays_loaded
                           ?
                           <React.Fragment>
                               <h2>Azure IPs</h2>
                               <this.showAzureList />
                           </React.Fragment> 
                           :
                           <h2>Azure IPs to be loaded below</h2>
                        }
                    </div>
                    <div className="show_providers__amazon">
                        {
                            this.state.arrays_loaded
                            ?
                            <React.Fragment>
                                <h2>Amazon IPs</h2>
                                <this.showAmazonList />
                            </React.Fragment>
                            :
                            <h2>Amazon IPs to be loaded below</h2>
                        }
                        
                    </div>
                    <div className="show_providers__unknown">
                        {
                            this.state.arrays_loaded
                            ?
                            <React.Fragment>
                                <h2>Unknown IPs</h2>
                                <this.showUnknownList />
                            </React.Fragment>
                            :
                            <h2>Unknown IPs to be loaded below</h2>
                        }
                    </div>

                </div>

            </React.Fragment>
        );
    }
}

export default BatchIPpage;