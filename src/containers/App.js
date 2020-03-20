// packages
import React, { Component } from 'react';
import { connect } from "react-redux";

//components
import { changeSearchFeild } from "../redux/reducers";
import Scroll from '../components/Scroll'
import { robots } from '../components/Robots';
import Cards from '../components/Cards'
import Search from '../components/Search';

// code
const mapStateToProps = state =>({
    searchFeild: changeSearchFeild.searchFeild
})
const mapDispatchToProps = dispatch =>({
    onSearch: event => dispatch(changeSearchFeild(event.target.value))
})
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
export default connect(mapStateToProps, mapDispatchToProps)(App);