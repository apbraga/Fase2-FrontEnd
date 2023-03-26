import React, {useState, useEffect, useRef} from 'react';
import HomeView from './HomeView'
import HomeModel from './HomeModel'

const HomeController = () => {
    const [count, setCount] = useState(0);
    const homeModel = useRef(null);
    useEffect(() => {
        homeModel.current = new HomeModel();
        homeModel.current.getSomeInfo();
        const interval = setInterval(() => {
            setCount(count + 1)
        }, 1000);
        return() =>{
            clearInterval(interval);
        };
    },[])
    console.log(" Count " + count);
    return (
        <HomeView count_info={count}>
            <div> Teste Info </div>
        </HomeView>
    )
}
export default HomeController;