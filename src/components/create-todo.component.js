import React, {Component} from 'react';

export default class CreateTodo extends Component {

    constructor(props) {
        super(props);

        this.onChangeListingDescription = this.onChangeListingDescription.bind(this);
        this.onChangeListingLocation = this.onChangeListingLocation.bind(this);
        this.onChangeListingLink = this.onChangeListingPriority.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            listing_description: '',
            listing_location: '',
            listing_link: '',
        }
    }

    onChangeListingDescription(e) {
        this.setState({
            listing_description e.target.value
        });
    }

    onChangeListingLocation(e) {
        this.setState({
            listing_location: e.target.value
        });
    }

    onChangeListingLink(e) {
        this.setState({
            listing_link: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`Listing Description: ${this.state.listing_description}`);
        console.log(`Listing Location: ${this.state.listing_location}`);
        console.log(`Listing Link: ${this.state.listing_link}`);

        this.setState({
            listing_description: '',
            listing_location: '',
            listing_link: '',
        })
    }

    render() {
        return (
            <div style={{marginTop: 20}}>
                <h3>Create New Todo</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Description: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.listing_description}
                                onChange={this.onChangeListingDescription}
                                />
                    </div>
                    <div className="form-group">
                        <label>Responsible: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.listing_Link}
                                onChange={this.onChangeListingLink}
                                />
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="locationOptions"
                                    id="locationAmazon"
                                    value="Amazon"
                                    checked={this.state.listing_location==='Amazon'}
                                    onChange={this.onChangeListingLocation}
                                    />
                            <label className="form-check-label">Amazon</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="locationOptions"
                                    id="locationWalmart"
                                    value="Walmart"
                                    checked={this.state.listing_location==='Walmart'}
                                    onChange={this.onChangeListingLocation}
                                    />
                            <label className="form-check-label">Walmart</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="locationOptions"
                                    id="locationOther"
                                    value="Other"
                                    checked={this.state.listing_location==='Other'}
                                    onChange={this.onChangeListingLocation}
                                    />
                            <label className="form-check-label">Other</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Listing" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}
