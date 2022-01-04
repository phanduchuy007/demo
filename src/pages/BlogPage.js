import React, { Component } from 'react';
import Banner from '../components/Banner';

class BlogPage extends Component {
    render() {
        let pageName = 'Blog';
        return (
            <div>
                {/* banner */}
                <Banner pageName={pageName}/>
                {/* banner */}
                <div className="container">
                    <div className="spacer blog">
                        <div className="row">
                            <div className="col-lg-8 col-sm-12 ">
                                {/* blog list */}
                                <div className="row">
                                    <div className="col-lg-4 col-sm-4 "><a href="blogdetail.php" className="thumbnail"><img src="images/blog/4.jpg" alt="blog title" /></a></div>
                                    <div className="col-lg-8 col-sm-8 ">
                                        <h3><a href="blogdetail.php">Creative business to takeover the market</a></h3>
                                        <div className="info">Posted on: Jan 20, 2013</div>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                        <a href="blogdetail.php" className="more">Read More</a>
                                    </div>
                                </div>
                                {/* blog list */}
                                {/* blog list */}
                                <div className="row">
                                    <div className="col-lg-4 col-sm-4 "><a href="blogdetail.php" className="thumbnail"><img src="images/blog/2.jpg" alt="blog title" /></a></div>
                                    <div className="col-lg-8 col-sm-8 ">
                                        <h3><a href="blogdetail.php">Creative business to takeover the market</a></h3>
                                        <div className="info">Posted on: Jan 20, 2013</div>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                        <a href="blogdetail.php" className="more">Read More</a>
                                    </div>
                                </div>
                                {/* blog list */}
                                {/* blog list */}
                                <div className="row">
                                    <div className="col-lg-4 col-sm-4 "><a href="blogdetail.php" className="thumbnail"><img src="images/blog/1.jpg" alt="blog title" /></a></div>
                                    <div className="col-lg-8 col-sm-8 ">
                                        <h3><a href="blogdetail.php">Creative business to takeover the market</a></h3>
                                        <div className="info">Posted on: Jan 20, 2013</div>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                        <a href="blogdetail.php" className="more">Read More</a>
                                    </div>
                                </div>
                                {/* blog list */}
                                {/* blog list */}
                                <div className="row">
                                    <div className="col-lg-4 col-sm-4 "><a href="blogdetail.php" className="thumbnail"><img src="images/blog/4.jpg" alt="blog title" /></a></div>
                                    <div className="col-lg-8 col-sm-8 ">
                                        <h3><a href="blogdetail.php">Creative business to takeover the market</a></h3>
                                        <div className="info">Posted on: Jan 20, 2013</div>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                        <a href="blogdetail.php" className="more">Read More</a>
                                    </div>
                                </div>
                                {/* blog list */}
                                {/* blog list */}
                                <div className="row">
                                    <div className="col-lg-4 col-sm-4 "><a href="blogdetail.php" className="thumbnail"><img src="images/blog/3.jpg" alt="blog title" /></a></div>
                                    <div className="col-lg-8 col-sm-8 ">
                                        <h3><a href="blogdetail.php">Creative business to takeover the market</a></h3>
                                        <div className="info">Posted on: Jan 20, 2013</div>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                        <a href="blogdetail.php" className="more">Read More</a>
                                    </div>
                                </div>
                                {/* blog list */}
                            </div>
                            <div className="col-lg-4 visible-lg">
                                {/* tabs */}
                                <div className="tabbable">
                                    <ul className="nav nav-tabs">
                                        <li className><a href="#tab1" data-toggle="tab">Recent Post</a></li>
                                        <li className><a href="#tab2" data-toggle="tab">Most Popular</a></li>
                                        <li className="active"><a href="#tab3" data-toggle="tab">Most Commented</a></li>
                                    </ul>
                                    <div className="tab-content">
                                        <div className="tab-pane" id="tab1">
                                            <ul className="list-unstyled">
                                                <li>
                                                    <h5><a href="blogdetail.php">Real estate marketing growing</a></h5>
                                                    <div className="info">Posted on: Jan 20, 2013</div>
                                                </li>
                                                <li>
                                                    <h5><a href="blogdetail.php">Real estate marketing growing</a></h5>
                                                    <div className="info">Posted on: Jan 20, 2013</div>
                                                </li>
                                                <li>
                                                    <h5><a href="blogdetail.php">Real estate marketing growing</a></h5>
                                                    <div className="info">Posted on: Jan 20, 2013</div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="tab-pane" id="tab2">
                                            <ul className="list-unstyled">
                                                <li>
                                                    <h5><a href="blogdetail.php">Market update on new apartments</a></h5>
                                                    <div className="info">Posted on: Jan 20, 2013</div>
                                                </li>
                                                <li>
                                                    <h5><a href="blogdetail.php">Market update on new apartments</a></h5>
                                                    <div className="info">Posted on: Jan 20, 2013</div>
                                                </li>
                                                <li>
                                                    <h5><a href="blogdetail.php">Market update on new apartments</a></h5>
                                                    <div className="info">Posted on: Jan 20, 2013</div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="tab-pane active" id="tab3">
                                            <ul className="list-unstyled">
                                                <li>
                                                    <h5><a href="blogdetail.php">Creative business to takeover the market</a></h5>
                                                    <div className="info">Posted on: Jan 20, 2013</div>
                                                </li>
                                                <li>
                                                    <h5><a href="blogdetail.php">Creative business to takeover the market</a></h5>
                                                    <div className="info">Posted on: Jan 20, 2013</div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* tabs */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BlogPage;