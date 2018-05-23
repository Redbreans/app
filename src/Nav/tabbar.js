import React, { Component } from 'react';
import { TabBar, Icon } from 'antd-mobile';
import { Link } from 'react-router-dom'
import './../../node_modules/antd-mobile/dist/antd-mobile'

/* eslint global-require: 0 */

class TabBarExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'blueTab',
      hidden: false,
    };
  }

  renderContent(pageText) {
    return (
      <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
        <div>
        </div>

      </div>
    );
  }
  render() {
    return (
      <TabBar
        unselectedTintColor="#ffffff"
        tintColor="#ff0066"
        barTintColor="darkgrey"
        hidden={this.state.hidden}
        id='tabbar'
      >
        <TabBar.Item
          title={<Link to="/home" activeclassname='active'>首页</Link>}
          key="首页"
          icon={<img src={require('../images/icon/first1.png')} />
          }
          selectedIcon={<img src={require('../images/icon/first2.png')} />
          }
          selected={this.state.selectedTab === 'blueTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'blueTab',
            });
          }}

        >
          {this.renderContent('首页')}
        </TabBar.Item>
        <TabBar.Item
          icon={<img src={require('../images/icon/newicon1.png')} />
          }
          selectedIcon={<img src={require('../images/icon/newicon2.png')} />
          }
          title={<Link to="/new" activeclassname='active'>新品</Link>}
          key="新品"

          selected={this.state.selectedTab === 'redTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'redTab',
            });
          }}

        >
          {this.renderContent('新品')}
        </TabBar.Item>
        <TabBar.Item
          title={<Link to="/cat" activeclassname='active'>购物车</Link>}
          key="购物车"
          icon={<img src={require('../images/icon/catC.png')} />
          }
          selectedIcon={<img src={require('../images/icon/catA.png')} />
          }
          selected={this.state.selectedTab === 'greeaTab'}

          onPress={() => {
            this.setState({
              selectedTab: 'greeaTab',
            });
          }}

        >
          {this.renderContent('购物车')}
        </TabBar.Item>
        <TabBar.Item
          title={<Link to="/user" activeclassname='active'>我的</Link>}
          key="我的"
          icon={<img src={require('../images/icon/MyA.png')} />
          }
          selectedIcon={<img src={require('../images/icon/myB.png')} />
          }
          selected={this.state.selectedTab === 'yellowTab'}

          onPress={() => {
            this.setState({
              selectedTab: 'yellowTab',
            });
          }}

        >
          {this.renderContent('我的')}
        </TabBar.Item>
      </TabBar>
    )
  }
}

export default TabBarExample;
