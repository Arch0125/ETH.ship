import React, { Component } from 'react';
import Navbar from './Navbar';
import Details from './Details/Details';
import Wallet from './Wallet/Wallet';
import Organizer from './Organizer';
import Home from './Home';
import Zapshome from './Zaps/Zapshome';
import Zpage1 from './Pages/Zpage1';
import Zpage2 from './Pages/Zpage2';

class App extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <Navbar/>
                <Zpage2/>
                
            </div>
            
        );
    }
}
 
export default App;