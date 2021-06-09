import React, {Component} from 'react';
import '../CSS/Home.css';
import add_image from '../Images/Plus_symbol.svg';
import delete_image from '../Images/delete_icon.svg';
import getIP_image from '../Images/info_no_backgr.png';
import update_image from '../Images/update_ip_api.png';

class HomePage extends Component {
    render(){
        return(
            <div className="main-page">
                <div className="header_zone">
                    <h1>IP Service</h1>
                    <h2>An easy way to find if an IP belongs to AWZ, Azure or GCP.</h2>
                </div>
                <div className="operations">
                    <div className="operations__content">
                        <h1 className="operations__content-heading">Supported operations</h1>

                        <div className="operations__content-items">
                            <div className="operations__add">
                                <img src={add_image} alt="Adding an IP" class="operations__content-img"/>
                                <div className="operations__text">
                                    <h2>Add IP</h2>
                                    <p>   
                                    Once an IP has been added, the service catalogs it so that it is
                                    known it belongs to one of the following cloud service providers: 
                                    Amazon Web Services, Google Cloud Platform,
                                    Azure.
                                    </p>
                                </div>
                            </div>
                            <div className="operations__get">
                                <img src={getIP_image} alt="Getting an IP" class="operations__content-img"/>
                                <div className="operations__text">
                                    <h2>Get IP</h2>
                                    <p>
                                    Querying the service with an IP will indicate if the IP
                                    belongs to one of three cloud service providers-Amazon Web Services, 
                                    Google Cloud Platform, Azure.
                                    </p>
                                </div>
                            </div>
                            <div className="operations__update">
                                <img src={update_image} alt="Updating an IP" class="operations__content-img"/>
                                <div className="operations__text">
                                    <h2>Update IP</h2>
                                    <p>      
                                    Update details about an IP because there may be a switch from
                                    one cloud provider to another.
                                    </p>
                                </div>
                            </div>
                            <div className="operations__delete">
                                <img src={delete_image} alt="Deleting an IP" class="operations__content-img"/>
                                <div className="operations__text">
                                    <h2>Delete IP</h2>
                                    <p>      
                                    Delete an IP from the service.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;