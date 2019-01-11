import React, { Component } from "react"


//import axios from 'axios'
//https://alligator.io/react/axios-react/

class Fetch extends Component {
    constructor() {
        super()
        this.state = {
            loading:false,
            character:{}
        }
    }

    componentDidMount() {
        //Get data from API
        this.setState({
            loading: true
        });

        fetch("https://swapi.co/api/people/1")
        .then(response =>
            response.json()
        )
        .then(data => {
            this.setState({
            loading: false,
            character: data
            });
        });

        /*
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                const persons = res.data;
                this.setState({ persons });
            })
            
            axios.get()
            axios.post()
            axios.delete()
            axios.create({baseURL : 'https://etc'})
        */
                        }

    render() {
        const text = this.state.loading ? "Loading..." : this.state.character.name
        return (
            <div>
                {text}  
                
            </div>
        )
    }
}

export default Fetch;
