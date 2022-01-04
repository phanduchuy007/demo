import React, { Component } from 'react';
import Banner from '../components/Banner';

class CategoryPage extends Component {
    render() {
        return (
            <div>
                {/* banner */}
                <Banner />
                {/* banner */}
                <div className="container">
                    <div className="properties-listing spacer">
                        <div className="row">
                            <div className="col-lg-3 col-sm-4 ">
                                <div className="search-form"><h4><span className="glyphicon glyphicon-search" /> Search for</h4>
                                    <input type="text" className="form-control" placeholder="Search of Properties" />
                                    <div className="row">
                                        <div className="col-lg-5">
                                            <select className="form-control">
                                                <option>Buy</option>
                                                <option>Rent</option>
                                            </select>
                                        </div>
                                        <div className="col-lg-7">
                                            <select className="form-control">
                                                <option>Price</option>
                                                <option>$150,000 - $200,000</option>
                                                <option>$200,000 - $250,000</option>
                                                <option>$250,000 - $300,000</option>
                                                <option>$300,000 - above</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <select className="form-control">
                                                <option>Property Type</option>
                                                <option>Apartment</option>
                                                <option>Building</option>
                                                <option>Office Space</option>
                                            </select>
                                        </div>
                                    </div>
                                    <button className="btn btn-primary">Find Now</button>
                                </div>
                                <div className="hot-properties hidden-xs">
                                    <h4>Hot Properties</h4>
                                    <div className="row">
                                        <div className="col-lg-4 col-sm-5"><img src="images/properties/1.jpg" className="img-responsive img-circle" alt="properties" /></div>
                                        <div className="col-lg-8 col-sm-7">
                                            <h5><a href="property-detail.php">Integer sed porta quam</a></h5>
                                            <p className="price">$300,000</p> </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-4 col-sm-5"><img src="images/properties/1.jpg" className="img-responsive img-circle" alt="properties" /></div>
                                        <div className="col-lg-8 col-sm-7">
                                            <h5><a href="property-detail.php">Integer sed porta quam</a></h5>
                                            <p className="price">$300,000</p> </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-4 col-sm-5"><img src="images/properties/1.jpg" className="img-responsive img-circle" alt="properties" /></div>
                                        <div className="col-lg-8 col-sm-7">
                                            <h5><a href="property-detail.php">Integer sed porta quam</a></h5>
                                            <p className="price">$300,000</p> </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-4 col-sm-5"><img src="images/properties/1.jpg" className="img-responsive img-circle" alt="properties" /></div>
                                        <div className="col-lg-8 col-sm-7">
                                            <h5><a href="property-detail.php">Integer sed porta quam</a></h5>
                                            <p className="price">$300,000</p> </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9 col-sm-8">
                                <div className="sortby clearfix">
                                    <div className="pull-left result">Showing: 12 of 100 </div>
                                    <div className="pull-right">
                                        <select className="form-control">
                                            <option>Sort by</option>
                                            <option>Price: Low to High</option>
                                            <option>Price: High to Low</option>
                                        </select></div>
                                </div>
                                <div className="row">
                                    {/* properties */}
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="properties">
                                            <div className="image-holder"><img src="images/properties/1.jpg" className="img-responsive" alt="properties" />
                                                <div className="status sold">Sold</div>
                                            </div>
                                            <h4><a href="property-detail.php">Royal Inn</a></h4>
                                            <p className="price">Price: $234,900</p>
                                            <div className="listing-detail"><span data-toggle="tooltip" data-placement="bottom" data-original-title="Bed Room">5</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Living Room">2</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Parking">2</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Kitchen">1</span> </div>
                                            <a className="btn btn-primary" href="property-detail.php">View Details</a>
                                        </div>
                                    </div>
                                    {/* properties */}
                                    {/* properties */}
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="properties">
                                            <div className="image-holder"><img src="images/properties/2.jpg" className="img-responsive" alt="properties" />
                                                <div className="status sold">Sold</div>
                                            </div>
                                            <h4><a href="property-detail.php">Royal Inn</a></h4>
                                            <p className="price">Price: $234,900</p>
                                            <div className="listing-detail"><span data-toggle="tooltip" data-placement="bottom" data-original-title="Bed Room">5</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Living Room">2</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Parking">2</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Kitchen">1</span> </div>
                                            <a className="btn btn-primary" href="property-detail.php">View Details</a>
                                        </div>
                                    </div>
                                    {/* properties */}
                                    {/* properties */}
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="properties">
                                            <div className="image-holder"><img src="images/properties/3.jpg" className="img-responsive" alt="properties" />
                                                <div className="status sold">Sold</div>
                                            </div>
                                            <h4><a href="property-detail.php">Royal Inn</a></h4>
                                            <p className="price">Price: $234,900</p>
                                            <div className="listing-detail"><span data-toggle="tooltip" data-placement="bottom" data-original-title="Bed Room">5</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Living Room">2</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Parking">2</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Kitchen">1</span> </div>
                                            <a className="btn btn-primary" href="property-detail.php">View Details</a>
                                        </div>
                                    </div>
                                    {/* properties */}
                                    {/* properties */}
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="properties">
                                            <div className="image-holder"><img src="images/properties/1.jpg" className="img-responsive" alt="properties" />
                                                <div className="status sold">Sold</div>
                                            </div>
                                            <h4><a href="property-detail.php">Royal Inn</a></h4>
                                            <p className="price">Price: $234,900</p>
                                            <div className="listing-detail"><span data-toggle="tooltip" data-placement="bottom" data-original-title="Bed Room">5</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Living Room">2</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Parking">2</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Kitchen">1</span> </div>
                                            <a className="btn btn-primary" href="property-detail.php">View Details</a>
                                        </div>
                                    </div>
                                    {/* properties */}
                                    {/* properties */}
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="properties">
                                            <div className="image-holder"><img src="images/properties/4.jpg" className="img-responsive" alt="properties" />
                                                <div className="status sold">Sold</div>
                                            </div>
                                            <h4><a href="property-detail.php">Royal Inn</a></h4>
                                            <p className="price">Price: $234,900</p>
                                            <div className="listing-detail"><span data-toggle="tooltip" data-placement="bottom" data-original-title="Bed Room">5</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Living Room">2</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Parking">2</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Kitchen">1</span> </div>
                                            <a className="btn btn-primary" href="property-detail.php">View Details</a>
                                        </div>
                                    </div>
                                    {/* properties */}
                                    {/* properties */}
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="properties">
                                            <div className="image-holder"><img src="images/properties/1.jpg" className="img-responsive" alt="properties" />
                                                <div className="status sold">Sold</div>
                                            </div>
                                            <h4><a href="property-detail.php">Royal Inn</a></h4>
                                            <p className="price">Price: $234,900</p>
                                            <div className="listing-detail"><span data-toggle="tooltip" data-placement="bottom" data-original-title="Bed Room">5</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Living Room">2</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Parking">2</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Kitchen">1</span> </div>
                                            <a className="btn btn-primary" href="property-detail.php">View Details</a>
                                        </div>
                                    </div>
                                    {/* properties */}
                                    {/* properties */}
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="properties">
                                            <div className="image-holder"><img src="images/properties/4.jpg" className="img-responsive" alt="properties" />
                                                <div className="status sold">Sold</div>
                                            </div>
                                            <h4><a href="property-detail.php">Royal Inn</a></h4>
                                            <p className="price">Price: $234,900</p>
                                            <div className="listing-detail"><span data-toggle="tooltip" data-placement="bottom" data-original-title="Bed Room">5</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Living Room">2</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Parking">2</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Kitchen">1</span> </div>
                                            <a className="btn btn-primary" href="property-detail.php">View Details</a>
                                        </div>
                                    </div>
                                    {/* properties */}
                                    {/* properties */}
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="properties">
                                            <div className="image-holder"><img src="images/properties/3.jpg" className="img-responsive" alt="properties" />
                                                <div className="status sold">Sold</div>
                                            </div>
                                            <h4><a href="property-detail.php">Royal Inn</a></h4>
                                            <p className="price">Price: $234,900</p>
                                            <div className="listing-detail"><span data-toggle="tooltip" data-placement="bottom" data-original-title="Bed Room">5</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Living Room">2</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Parking">2</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Kitchen">1</span> </div>
                                            <a className="btn btn-primary" href="property-detail.php">View Details</a>
                                        </div>
                                    </div>
                                    {/* properties */}
                                    {/* properties */}
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="properties">
                                            <div className="image-holder"><img src="images/properties/2.jpg" className="img-responsive" alt="properties" />
                                                <div className="status sold">Sold</div>
                                            </div>
                                            <h4><a href="property-detail.php">Royal Inn</a></h4>
                                            <p className="price">Price: $234,900</p>
                                            <div className="listing-detail"><span data-toggle="tooltip" data-placement="bottom" data-original-title="Bed Room">5</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Living Room">2</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Parking">2</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Kitchen">1</span> </div>
                                            <a className="btn btn-primary" href="property-detail.php">View Details</a>
                                        </div>
                                    </div>
                                    {/* properties */}
                                    {/* properties */}
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="properties">
                                            <div className="image-holder"><img src="images/properties/1.jpg" className="img-responsive" alt="properties" />
                                                <div className="status sold">Sold</div>
                                            </div>
                                            <h4><a href="property-detail.php">Royal Inn</a></h4>
                                            <p className="price">Price: $234,900</p>
                                            <div className="listing-detail"><span data-toggle="tooltip" data-placement="bottom" data-original-title="Bed Room">5</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Living Room">2</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Parking">2</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Kitchen">1</span> </div>
                                            <a className="btn btn-primary" href="property-detail.php">View Details</a>
                                        </div>
                                    </div>
                                    {/* properties */}
                                    {/* properties */}
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="properties">
                                            <div className="image-holder"><img src="images/properties/4.jpg" className="img-responsive" alt="properties" />
                                                <div className="status sold">Sold</div>
                                            </div>
                                            <h4><a href="property-detail.php">Royal Inn</a></h4>
                                            <p className="price">Price: $234,900</p>
                                            <div className="listing-detail"><span data-toggle="tooltip" data-placement="bottom" data-original-title="Bed Room">5</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Living Room">2</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Parking">2</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Kitchen">1</span> </div>
                                            <a className="btn btn-primary" href="property-detail.php">View Details</a>
                                        </div>
                                    </div>
                                    {/* properties */}
                                    {/* properties */}
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="properties">
                                            <div className="image-holder"><img src="images/properties/3.jpg" className="img-responsive" alt="properties" />
                                                <div className="status sold">Sold</div>
                                            </div>
                                            <h4><a href="property-detail.php">Royal Inn</a></h4>
                                            <p className="price">Price: $234,900</p>
                                            <div className="listing-detail"><span data-toggle="tooltip" data-placement="bottom" data-original-title="Bed Room">5</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Living Room">2</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Parking">2</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Kitchen">1</span> </div>
                                            <a className="btn btn-primary" href="property-detail.php">View Details</a>
                                        </div>
                                    </div>
                                    {/* properties */}
                                    <div className="center">
                                        <ul className="pagination">
                                            <li><a href="#">«</a></li>
                                            <li><a href="#">1</a></li>
                                            <li><a href="#">2</a></li>
                                            <li><a href="#">3</a></li>
                                            <li><a href="#">4</a></li>
                                            <li><a href="#">5</a></li>
                                            <li><a href="#">»</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CategoryPage;