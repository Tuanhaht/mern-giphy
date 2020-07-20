import React, { Component } from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

import { Layout, Menu, Dropdown, Button, Avatar } from 'antd';
import {
  LogoutOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer } = Layout;

class Dashboard extends Component {
  onLogoutClick = () => {
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;

    return (
      <Layout className="layout">
        <Header className="site-layout-background" style={{ "background": "white" }}>
          <Dropdown overlay={<Menu>
            <Menu.Item className="d-flex align-items-center" onClick={this.onLogoutClick}>
              <LogoutOutlined /><span>Đăng xuất</span>
            </Menu.Item>
          </Menu>} placement="bottomCenter">
            <Button
              style={{
                border: 'none',
                height: 64,
                position: "relative",
                float: "right"
              }}
              className="mx-3 d-flex align-items-center"
            >
              <Avatar src={"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"} />
              <span className="ml-1 text-uppercase ml-2" style={{ textTransform: "uppercase", marginLeft: "10px" }}>Hello, {user.name.split(" ")[0]}</span>
            </Button>
          </Dropdown>
        </Header>
        <Content style={{ padding: '50px 50px 0' }}>
          <div className="site-layout-content">Content</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>MERN-GIPHY Created by Trần Văn Tuấn</Footer>
      </Layout>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
