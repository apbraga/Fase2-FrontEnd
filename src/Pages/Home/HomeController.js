import React from 'react';
import HomeView from './HomeView'
import HomeModel from './HomeModel'
class HomeController extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0,
        }; //inicializando o state
        this.homeModel = new HomeModel();//inicializando o view
        this.homeModel.getSomeInfo();
        // Inicializando o timeout
        setInterval(() => {
            this.setState({count: this.state.count + 1})
        },1000);
    }
    render() {
        console.log(" Count " + this.state.count);
        return (
            <HomeView /> //Chamando o View
        )
    }
}
export default HomeController;