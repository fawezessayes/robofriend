// packages
import React, { Component } from 'react';
import { connect } from "react-redux";
//components
import Scroll from '../components/Scroll'
import { robots } from '../components/Robots';
import Cards from '../components/Cards'
import Search from '../components/Search';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            robots: robots,
            searchFeild: ""
        }
    }
    componentDidMount(){
        console.log(this.props.store)
    }
    onSearch = (event) =>{
        this.setState({searchFeild: event.target.value})
    }
    render(){
        const {robots, searchFeild} = this.state;
        const f_robots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchFeild.toLowerCase())
        });
        return(
            <section>
                <Search onSearch = {this.onSearch}></Search>
                <Scroll>
                    <Cards robots = {f_robots}></Cards>
                </Scroll>
            </section>
        )
    }
}
export default connect()(App);