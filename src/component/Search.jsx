

const Search = () => {
    return (
        <div>
            <div className="search-section">
                <div className="container">
                    <form action="cart.html" method="post">
                        <div className="inner">
                            <div className="row">

                                <div className="col-lg-2">
                                    <div className="form-group">
                                        <input type="text" name="checkin_checkout" className="form-control daterange1"
                                            placeholder="Lokasi Penjemputan" />
                                    </div>
                                </div>
                                <div className="col-lg-2">
                                    <div className="form-group">
                                        <input type="number" name="" className="form-control" min="1" max="30"
                                            placeholder="Tanggal Pengambilan" />
                                    </div>
                                </div>
                                <div className="col-lg-2">
                                    <div className="form-group">
                                        <input type="number" name="" className="form-control" min="1" max="30"
                                            placeholder="Jam" />
                                    </div>
                                </div>

                                <div className="col-lg-2">
                                    <div className="form-group">
                                        <input type="number" name="" className="form-control" min="1" max="30"
                                            placeholder="Tanggal Drop Off" />
                                    </div>
                                </div>


                                <div className="col-lg-2">
                                    <div className="form-group">
                                        <input type="text" name="checkin_checkout" className="form-control daterange1"
                                            placeholder="Lokasi Dropoff" />
                                    </div>
                                </div>


                                <div className="col-lg-2">
                                    <button type="submit" className="btn btn-primary">Book Now</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Search;