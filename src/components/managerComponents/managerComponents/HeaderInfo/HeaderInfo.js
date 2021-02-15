import React from "react";
import {Component} from "react";
import "./HeaderInfo.css";
import {connect} from "react-redux";

class HeaderInfoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className='header_info'>
        <div className="header__missing-message-block">
          {this.props.dataUser.missedMessages}
        </div>
        <div className="header__info-user-block">
          <p>{this.props.dataUser.name}</p>
          <p>{this.props.dataUser.surname}</p>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    dataUser: state.userData.user
  }
}

const HeaderInfo = connect(mapStateToProps, null)(HeaderInfoComponent)


export default HeaderInfo;
