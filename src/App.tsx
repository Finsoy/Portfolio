import React from 'react';
import './styles.scss'
import {BrowserRouter, Route} from 'react-router-dom';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Action_setA from "./Pages/Action_setA/Action_setA";
import Action_setB from "./Pages/Action_setB/Action_setB";
import Fruits_setA from "./Pages/Fruits_setA/Fruits_setA";
import Clothes from "./Pages/Clothes/Clothes";
import Animal_setA from "./Pages/Animal_setA/Animal_setA";
import Animal_setB from "./Pages/Animal_setB/Animal_setB";
import Emotions from "./Pages/Emotions/Emotions";
import Fruits_setB from "./Pages/Fruits_setB/Fruits_setB";
import Admin from "./Pages/Admin/Admin";
import {store} from "./redux/store";
import Footer from "./components/Footer/Footer";

class App extends React.Component<{}, { isGame: boolean }> {
    constructor(props: {}) {
        super(props);
        this.state = {
            isGame: false,
        };

        if (this.state.isGame !== store.getState().game.isGame) {
            this.setState({isGame: store.getState().game.isGame})
        }
    }

    render() {

        return (
            <BrowserRouter>
                <div className='app-wrapper'>
                    <div className="app container">
                        <Header/>
                        <div className='wrapper-content'>
                            <Route exact path="/" component={Main}/>
                            <Route path='/action-A' component={Action_setA}/>
                            <Route path='/action-B' component={Action_setB}/>
                            <Route path='/animal-A' component={Animal_setA}/>
                            <Route path='/animal-B' component={Animal_setB}/>
                            <Route path='/clothes' component={Clothes}/>
                            <Route path='/emotions' component={Emotions}/>
                            <Route path='/fruits-A' component={Fruits_setA}/>
                            <Route path='/fruits-B' component={Fruits_setB}/>
                            <Route path='/admin' component={Admin}/>
                        </div>
                    </div>
                    <Footer/>
                </div>
            </BrowserRouter>
        )
    }

};

export default App;
