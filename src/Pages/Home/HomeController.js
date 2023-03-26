import React from 'react';
import HomeView from './HomeView'
import HomeModel from './HomeModel'
class HomeController extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0,
        }; //initialization o state
        this.homeModel = new HomeModel();//initialization o view
        this.homeModel.getSomeInfo();
        // Initialization o timeout
        setInterval(() => {
            this.setState({count: this.state.count + 1})
        },1000);
    }
    render() {
        console.log(" Count " + this.state.count);
        return (
            <HomeView count_info={this.state.count}>
                <div> Teste Info</div>
            </HomeView>
        )
    }
}
export default HomeController;