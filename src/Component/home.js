import React, { Component } from 'react';
import { Button, Flex, WingBlank } from 'antd-mobile';
import { Carousel } from 'antd-mobile';
class Home extends Component {

  render() {
    return (
      <div className='homeLb'>
        <Carousel autoplay="true" className='Carousel'>
          <div><img src={require('./../images/indexImage/index_banner/index_banner1.jpg')} alt="" /></div>
          <div><img src={require('./../images/indexImage/index_banner/index_banner2.jpg')} alt="" /></div>
          <div><img src={require('./../images/indexImage/index_banner/index_banner3.jpg')} alt="" /></div>
        </Carousel>
        <div className='wild'>
          <div className='textBtn'>
            <p>野性魅惑</p>
            <button>前往查看</button>
          </div>
          <p className='text'>野性魅惑系列产品，以清新浅色为主打，展现女性青春之美</p>
          <div className="img">
            <img src={require('./../images/indexImage/index_content/wild/index_wild1.jpg')} alt="" />
            <img src={require('./../images/indexImage/index_content/wild/index_wild2.jpg')} alt="" />
          </div>
        </div>
        <div className='fresh'>
          <div className='textBtn'>
            <button>前往查看</button>
            <p>清新自然</p>
          </div>
          <p className='text'>清新自然系列产品，以清新浅色为主打，展现女性清新自然之美</p>
          <div className='freshImg'>
            <img src={require('./../images/indexImage/index_content/fresh/index_fresh1.jpg')} alt="" />
            <div className="freshRight">
              <div className="samllImg" id="samllImg">
                <img src={require('./../images/indexImage/index_content/fresh/index_fresh2.jpg')} alt="" />
                <img src={require('./../images/indexImage/index_content/fresh/index_fresh3.jpg')} alt="" />
                <p>无法爱上，这般随意的绽放</p>
              </div>
              <img src={require('./../images/indexImage/index_content/fresh/index_fresh4.jpg')} alt="" />
            </div>
          </div>
        </div>
        <div className='sport'>
          <div className='textBtn'>
            <p>活力少女</p>
            <button>前往查看</button>
          </div>
          <p className='text'>活力少女系列产品，给人活力，让人蠢蠢欲动</p>
        </div>
        <div className='imgSport'>
          <div className='top'>
            <img src={require('./../images/indexImage/index_content/sports/index_sports2.jpg')} alt="" />
            <div className='topRight'>
              <img src={require('./../images/indexImage/index_content/sports/index_sports3.jpg')} alt="" />
              <p>人生总要有一场充满活力的旅行 Energeti</p>
            </div>
          </div>
          <div className='bottomImg'><img src={require('./../images/indexImage/index_content/sports/index_sports4.jpg')} alt="" /></div>
        </div>
      </div>
    )
  }
}

export default Home;