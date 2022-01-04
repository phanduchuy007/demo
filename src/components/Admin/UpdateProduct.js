import React, { Component } from "react";
import getAPI from "../../api/getAPI";
import axios from "axios";

export class UpdateProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: [],
      district: [],
      ward: [],
      postType: [],
      property_type: [],
      kindNews: [],

      caption: "",
      apartment_number: "",
      street: "",
      estimated_price: "",
      land_area: "",
      description: "",
      city_id: "",
      district_id: "",
      ward_id: "",
      ptype_id: "",
      chouse_id: "",
      kind_id: "",
      property_id: "",
    };
  }

  componentDidMount() {
    if (this.props.match.params.note === "0") {
      this.callDetailPostAPI()
        .then((res) => {
          this.setState({
            caption: res.data.caption,
            apartment_number: res.data.apartment_number,
            street: res.data.street,
            estimated_price: res.data.estimated_price,
            land_area: res.data.land_area,
            description: res.data.description,
            city_id: res.data.city_id,
            district_id: res.data.district_id,
            ward_id: res.data.ward_id,
            ptype_id: res.data.ptype_id,
            chouse_id: res.data.chouse_id,
            kind_id: res.data.kind_id,
            property_id: res.data.property_id,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      this.callDetailApproved()
        .then((res) => {
          this.setState({
            caption: res.data.caption,
            apartment_number: res.data.apartment_number,
            street: res.data.street,
            estimated_price: res.data.estimated_price,
            land_area: res.data.land_area,
            description: res.data.description,
            city_id: res.data.city_id,
            district_id: res.data.district_id,
            ward_id: res.data.ward_id,
            ptype_id: res.data.ptype_id,
            chouse_id: res.data.chouse_id,
            kind_id: res.data.kind_id,
            property_id: res.data.property_id,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }

    this.callCityAPI()
      .then((res) => {
        this.setState({
          city: res.data.list,
        });
      })
      .catch((err) => {
        console.log(err);
      });

    this.callDistrict()
      .then((res) => {
        this.setState({
          district: res.data.list,
        });
      })
      .catch((err) => {
        console.log(err);
      });

    this.callWardAPI()
      .then((res) => {
        this.setState({
          ward: res.data.list,
        });
      })
      .catch((err) => {
        console.log(err);
      });

    this.callPostTypeAPI()
      .then((res) => {
        this.setState({
          postType: res.data.list,
        });
      })
      .catch((err) => {
        console.log(err);
      });

    this.callProperty_type()
      .then((res) => {
        this.setState({
          property_type: res.data.list,
        });
      })
      .catch((err) => {
        console.log(err);
      });

    this.callKindNews()
      .then((res) => {
        this.setState({
          kindNews: res.data.list,
        });
        console.log(this.state.kindNews);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  onChange = (e) => {
    e.preventDefault();
    let target = e.target;
    let name = target.name;
    let value = target.value;
    this.setState({
      [name]: value,
    });
  };

  callDetailPostAPI = async () => {
    return await getAPI(
      "http://localhost/BatDongSanTest/House-Rental-System-main/renthouse/api/admin_api/confirm/details.php?id=94",
      "GET",
      `${sessionStorage.getItem("token_admin")}`,
      null,
      this.props.match.params.id
    );
  };

  callDetailApproved = async () => {
    return await getAPI(
      "http://localhost/BatDongSanTest/House-Rental-System-main/renthouse/api/admin_api/approved/details.php?id",
      "GET",
      `${sessionStorage.getItem("token_admin")}`,
      null,
      this.props.match.params.id
    );
  };

  callProperty_type = async () => {
    return await axios.get(
      "http://localhost/BatDongSanTest/House-Rental-System-main/renthouse/api/add_property/dropdown_list/property_type.php"
    );
  };

  callCityAPI = async () => {
    return axios.get(
      "http://localhost/BatDongSanTest/House-Rental-System-main/renthouse/api/add_property/dropdown_list/city.php"
    );
  };

  callDistrict = async () => {
    return axios.get(
      "http://localhost/BatDongSanTest/House-Rental-System-main/renthouse/api/add_property/dropdown_list/district.php"
    );
  };

  callWardAPI = async () => {
    return axios.get(
      "http://localhost/BatDongSanTest/House-Rental-System-main/renthouse/api/add_property/dropdown_list/ward.php"
    );
  };

  callPostTypeAPI = async () => {
    return axios.get(
      "http://localhost/BatDongSanTest/House-Rental-System-main/renthouse/api/add_property/dropdown_list/post_type.php"
    );
  };

  callKindNews = async () => {
    return axios.get(
      "http://localhost/BatDongSanTest/House-Rental-System-main/renthouse/api/add_property/dropdown_list/kind_news.php"
    );
  };

  city = () => {
    return this.state.city.map((item) => {
      return <option value={item.city_id}>{item.cityName}</option>;
    });
  };

  district = () => {
    return this.state.district.map((item) => {
      if (this.state.city_id === item.city_id) {
        return <option value={item.district_id}>{item.districtName}</option>;
      }
    });
  };

  ward = () => {
    return this.state.ward.map((item) => {
      if (this.state.district_id === item.district_id) {
        return <option value={item.ward_id}>{item.wardName}</option>;
      }
    });
  };

  postType = () => {
    return this.state.postType.map((item) => {
      return <option value={item.ptype_id}>{item.name}</option>;
    });
  };

  property_type = () => {
    return this.state.property_type.map((item) => {
      return <option value={item.chouse_id}>{item.name}</option>;
    });
  };

  kindNews = () => {
    return this.state.kindNews.map((item) => {
      return <option value={item.id}>{item.name}</option>;
    });
  };

  onChangeFile = (e) => {
    const file = e.target.files;

    const images = [];
    for (const key of file) {
      images.push(key);
    }
    if (file.length > 5) {
      alert("Vui lòng chọn dưới 5 ảnh");
    } else {
      this.setState({
        p_photo: images,
      });
    }
  };

  handleOnSubmitPost = (e) => {
    e.preventDefault();
    const {
      chouse_id,
      ptype_id,
      caption,
      kind_id,
      city_id,
      district_id,
      ward_id,
      street,
      apartment_number,
      estimated_price,
      land_area,
      description,
      day_number,
      p_photo,
    } = this.state;

    const token_admin = sessionStorage.getItem("token_admin");
    const url =
      this.props.match.params.note === "0"
        ? "http://localhost/BatDongSanTest/House-Rental-System-main/renthouse/api/admin_api/edit.php?id=144"
        : "http://localhost/BatDongSanTest/House-Rental-System-main/renthouse/api/admin_api/update.php?id=141";
    const formData = new FormData();
    formData.append("chouse_id", chouse_id);
    formData.append("ptype_id", ptype_id);
    formData.append("caption", caption);
    formData.append("kind_id", kind_id);
    formData.append("city_id", city_id);
    formData.append("district_id", district_id);
    formData.append("ward_id", ward_id);
    formData.append("street", street);
    formData.append("apartment_number", apartment_number);
    formData.append("estimated_price", estimated_price);
    formData.append("land_area", land_area);
    formData.append("description", description);
    formData.append("day_number", day_number);
    p_photo.map((img) => {
      formData.append("p_photo[]", img);
    });
    axios({
      url: url,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        token_admin: token_admin,
      },
      params: {
        id: this.state.property_id,
      },
      data: formData,
    })
      .then((res) => {
        console.log(res);
        this.setState({
          openModal: true,
          modalDatas: res.data,
        });
      })
      .catch((err) => {
        console.log(err.data);
      });
  };

  render() {
    let {
      caption,
      apartment_number,
      street,
      estimated_price,
      land_area,
      description,
      city_id,
      district_id,
      ward_id,
      ptype_id,
      chouse_id,
      kind_id,
    } = this.state;

    const thousand = "000";
    const milion = "000000";
    const bilion = "000000000";

    estimated_price = estimated_price.split(" ")[0];
    let unit = estimated_price.split(" ")[1];
    // if (unit === "nghìn") {
    //   estimated_price = estimated_price + thousand;
    // } else if (unit === "triệu") {
    //   estimated_price = estimated_price + milion;
    // } else {
    //   estimated_price = estimated_price + bilion;
    // }

    return (
      <div className="container">
        <div className="row mt-40 mb-40 update-profile">
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"></div>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="mt-10 center">
              <h3>CẬP NHẬT BÀI ĐĂNG</h3>
            </div>
            <form
              onSubmit={this.handleOnSubmitPost}
              encType="multipart/form-data"
            >
              <div className="form-group">
                <label>
                  Tiêu đề(<span className="star-color">*</span>)
                </label>
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder="Nhập vào tiêu đề"
                  name="caption"
                  value={caption}
                  onChange={this.onChange}
                  maxlength="100"
                  title="Tiêu đề không nhập quá 100 từ"
                />
              </div>
              <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                  <div className="form-group">
                    <label>
                      Hình thức(<span className="star-color">*</span>)
                    </label>
                    <select
                      className="form-control"
                      name="ptype_id"
                      value={ptype_id}
                      onChange={this.onChange}
                    >
                      <option>-- Hình thức --</option>
                      {this.postType()}
                    </select>
                  </div>
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                  <div className="form-group">
                    <label>
                      Loại(<span className="star-color">*</span>)
                    </label>
                    <select
                      className="form-control"
                      name="chouse_id"
                      value={chouse_id}
                      onChange={this.onChange}
                    >
                      <option>-- Loại --</option>
                      {this.property_type()}
                    </select>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label>
                  Thành phố(<span className="star-color">*</span>)
                </label>
                <select
                  className="form-control"
                  name="city_id"
                  value={city_id}
                  onChange={this.onChange}
                >
                  <option>-- Chọn Tỉnh --</option>
                  {this.city()}
                </select>
              </div>
              <div className="form-group">
                <label>Quận / Huyện</label>
                <select
                  className="form-control"
                  name="district_id"
                  value={district_id}
                  onChange={this.onChange}
                >
                  <option>-- Chọn Thành phố / Quận / Huyện --</option>
                  {this.district()}
                </select>
              </div>
              <div className="form-group">
                <label>Thị Trấn / Xã</label>
                <select
                  className="form-control"
                  required
                  name="ward_id"
                  value={ward_id}
                  onChange={this.onChange}
                >
                  <option>-- Chọn Thị Trấn / Xã --</option>
                  {this.ward()}
                </select>
              </div>
              <div class="row">
                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                  <label>Số nhà</label>
                  <input
                    type="text"
                    className="form-control"
                    name="apartment_number"
                    value={apartment_number}
                    onChange={this.onChange}
                    placeholder="Nhập vào số nhà"
                    pattern="[0-9]{1,8}"
                    title="Vui lòng nhập 'số' và '/' và không quá 8 ký tự"
                  />
                </div>
                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                  <label>
                    Đường(<span className="star-color">*</span>)
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="street"
                    value={street}
                    onChange={this.onChange}
                    placeholder="Nhập vào đường"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                  <div className="form-group">
                    <label>
                      Giá(<span className="star-color">*</span>):{" "}
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      name="estimated_price"
                      value={estimated_price}
                      onChange={this.onChange}
                      required
                      placeholder="Nhập vào giá"
                    />
                  </div>
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                  <div className="form-group">
                    <label>
                      Diện tích(<span className="star-color">*</span>)
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      name="land_area"
                      value={land_area}
                      onChange={this.onChange}
                      placeholder="m2"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label>
                  Mô tả về bài đăng(
                  <span className="star-color">không quá 4000 từ</span>)
                </label>
                <textarea
                  className="form-control"
                  rows="3"
                  required
                  placeholder="Nhập vào mô tả"
                  name="description"
                  value={description}
                  onChange={this.onChange}
                ></textarea>
              </div>
              <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                  <div className="form-group">
                    <label>
                      Tải ảnh lên (
                      <span className="star-color">không quá 5 ảnh</span>)
                    </label>
                    <input
                      type="file"
                      multiple
                      accept=".png, .jpg, .jpeg"
                      name="p_photo"
                      onChange={this.onChangeFile}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                  <div className="form-group">
                    <label>
                      Loại tin(<span className="star-color">*</span>)
                    </label>
                    <select
                      className="form-control"
                      required
                      name="kind_id"
                      value={kind_id}
                      onChange={this.onChange}
                    >
                      <option>-- Chọn loại tin --</option>
                      {this.kindNews()}
                    </select>
                  </div>
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                  <div className="form-group">
                    <label>
                      Số ngày đăng(<span className="star-color">*</span>)
                    </label>
                    <select
                      className="form-control"
                      required
                      name="day_number"
                      //   value={day_number}
                      //   onChange={this.onChange}
                    >
                      <option>-- Chọn số ngày đăng --</option>
                      <option value={5}>5 Ngày</option>
                      <option value={10}>10 Ngày</option>
                      <option value={15}>15 Ngày</option>
                      <option value={20}>20 Ngày</option>
                      <option value={30}>30 Ngày</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 confirm_box">
                  <h4>
                    <span className="glyphicon glyphicon-exclamation-sign"></span>{" "}
                    Vui lòng kiểm tra chính xác các thông tin trước khi đăng bài
                  </h4>
                </div>
              </div>
              <br />
              <button type="submit" className="btn btn-primary">
                Cập nhập
              </button>
            </form>
          </div>
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"></div>
        </div>
      </div>
    );
  }
}

export default UpdateProduct;
