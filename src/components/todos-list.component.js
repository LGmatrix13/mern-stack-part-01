import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Listing = props => (  
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">{props.listing.listing_name}</h5>
            <p class="card-text">{props.lisitng.listing_description}></p>
            <h6 class="card-subtitle mb-2 text-muted">{props.listing.listing_location}</h6>
            <a href="#" class="card-link">{props.listing.listing_link}</a>
        </div>
    </div>
)

export default class ShowListings extends Component {

    constructor(props) {
        super(props);
        this.state = {Listings: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/listings/')
            .then(response => {
                this.setState({Listings: response.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    ShowListings() {
        return this.state.listings.map(function(currentListing, i) {
            return <Listing listing={currentListing} key={i} />;
        });
    }

    render() {
        return (
            <div>
                <p>Welcome to Cuivy!</p>
                <h3>Current Listings</h3>
                { this.todoList() }
            </div>
        )
    }
