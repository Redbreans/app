import React, { Component } from 'react';

class New extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      goodArr1: [],
      typeArr: [],
      goodArr2: [],
      goodArr3: [],
      goodArr4: [],
      goodArr5: []
    }
  }
  getTypeList1() {
    var that = this;
    fetch('http://localhost:8080/goodsTypeList', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      // body: JSON.stringify({ typeId:1 })
      // mode: 'cors'
    })
      .then(function (response) {
        return response.json()
      }).then(function (json) {
        let file = '';
        let type = [];
        for (var i = 0; i < json.data.length; i++) {
          file = json.data[i].typeImg.split('?')[0];
          var imglist = json.data[i].typeImg.split('?')[1].split('|');
          for (var j = 0; j < imglist.length; j++) {
            imglist[j] = file + imglist[j]
          }
          json.data[i].typeImg = imglist
          type.push(json.data[i].typeId)
        }
        that.setState({
          list: json.data,
          typeArr: type
        })
      }).catch(function (ex) {
        console.log('parsing failed', ex)
      })
  }


  // 商品列表
  getGoodsList() {
    console.log(11)
    var that = this;
    fetch('http://localhost:8080/goodsList', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      }
      // mode: 'cors'
    })
      .then(function (response) {
        return response.json()
      }).then(function (json) {
        console.log(that.state.typeArr)
        let arr = {}
        let arr1 = [], arr2 = [], arr3 = [], arr4 = [], arr5 = []
        for (var j = 0; j < json.data.length; j++) {
          if (json.data[j].typeId == 1) {
            arr1.push(json.data[j])
          } else if (json.data[j].typeId == 2) {
            arr2.push(json.data[j])
          } else if (json.data[j].typeId == 3) {
            arr3.push(json.data[j])
          } else if (json.data[j].typeId == 4) {
            arr4.push(json.data[j])
          } else if (json.data[j].typeId == 5) {
            arr5.push(json.data[j])
          }
        }
        that.setState({
          goodArr: json.data,
          goodArr1: arr1,
          goodArr2: arr2,
          goodArr3: arr3,
          goodArr4: arr4,
          goodArr5: arr5
        })
      }).catch(function (ex) {
        console.log('parsing failed', ex)
      })
  }
  componentWillMount() {
    this.getTypeList1();
    this.getGoodsList()
  }
  render() {
    console.log(this.state)
    // let goodsListNode = this.state.goodArr.map((item, index) => {
    //   return <div>55555</div>
    // })
    console.log(2222)
    let arr;
    let typeListNode = this.state.list.map((item, index) => {
      console.log(123)
      return <div key={index} className="typeLIst">
       
        <div className='titleImg'>
          <div id='leftImg'>
            <img src={require('../images/series/' + item.typeImg[0])} alt="" />
          </div>
          <div className='tRight'>
            <p className='tilteName'>{item.typeName}</p>
            <img src={require('../images/series/' + item.typeImg[1])} alt="" />
          </div>
        </div>
        <div>
          {(() => {
            console.log(44)
            if (item.typeId == 1) {
              arr = this.state.goodArr1.map((item, index) => {
                return <div key={index}>{item.goodsName}</div>
              })
            } else if (item.typeId == 2) {
              arr = this.state.goodArr2.map((item, index) => {
                return <div key={index}>{item.goodsName}</div>
              })
            } else if (item.typeId == 3) {
              arr = this.state.goodArr3.map((item, index) => {
                return <div key={index}>{item.goodsName}</div>
              })
            } else if (item.typeId == 4) {
              arr = this.state.goodArr4.map((item, index) => {
                return <div key={index}>{item.goodsName}</div>
              })
            } else if (item.typeId == 5) {
              arr = this.state.goodArr5.map((item, index) => {
                return <div key={index}>{item.goodsName}</div>
              })
            }
          })()}
          {arr}
        </div>
      </div>
    })
    return (
      <div>
        <div className='banImg'>
          <img src={require("../images/series/wild/wild_banner.jpg")} alt="" />
        </div>
        {typeListNode}
        <div className="typeLIst">

          <div className="goodsList">
            <div className="goods">
              <img src="" alt="" />
              <p>名字</p>
              <div>
                <span className='price'></span>
                <span>购物车</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default New;