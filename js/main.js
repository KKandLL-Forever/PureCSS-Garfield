!function () {
  let code = `
/*Hi，我是王凯。
 *今天给大家用纯css来画一只加菲猫
 */
 
/*首先准备一些样式*/

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  transition: all 1s;
}
#code {
  padding: 32px;
}

/*来一点代码高亮*/
.token.comment{
  color: #999;
}
.token.selector{
  color: #cc99cd;
}
.token.punctuation{
  color: #ccc;
}
.token.property{
  color: #f8c555;
}

/*把我们写代码和画画的地方分开*/
.code-wrapper{
  flex: 1;
  height: 50%;
  width: 96%;
  margin-top: 16px;
  margin-bottom: 16px;
  margin-left: 2%;
  margin-right: 2%;
  background: #2D2D2D;
  color: white;
  box-shadow: 6px 4px 5px 0px rgba(0,0,0,0.75);
}
body{
  background: #999999;
}
.preview-wrapper{
  flex: 1;
  height: 50%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #FBA91A;
}
/*现在我们就开始画吧，先是加菲猫的眼眶*/
.leftEye, .rightEye{
  position: absolute;
  border: 3px solid black;
  height: 214px;
  width: 130px;
  overflow: hidden;
  z-index: 2;
}
/*左边的眼眶*/
.leftEye{
  right: 50%;
  border-top-left-radius: 65% 50%;
  border-top-right-radius: 35% 15%;
  border-bottom-left-radius: 55% 50%;
}
/*右边的眼眶*/
.rightEye{
  left: 49.5%;
  border-top-right-radius: 65% 50%;
  border-top-left-radius: 35% 15%;
  border-bottom-right-radius: 55% 50%;
}
/*再给他加上眼珠*/
.eyeball{
  width: 24px;
  height: 10px;
  position: absolute;
  background: black;
  top: 173px;
  border-bottom-left-radius: 50% 100%;
  border-bottom-right-radius: 50% 100%;
  z-index: 1;
}
.leftEye .eyeball{
  right: 4px;
}
.rightEye .eyeball {
  left: 4px;
}
/*眼睛看起来有点呆板，调整一下*/
.leftEye::before, .rightEye::before{
  content: '';
  position: absolute;
  height: 214px;
  width: 130px;
  top: -41px;
  border-bottom: 4px solid black;
  border-top-left-radius: 0 5%;
  border-top-right-radius: 0 5%;
  z-index: 1;
}
.leftEye::before{
  right: -10px;
  transform: rotate(3deg);
  border-bottom-left-radius: 100px 5%;
}
.rightEye::before{
  right: 10px;
  transform: rotate(-3deg);
  border-bottom-right-radius: 100px 5%;
}
/*涂上眼白*/
.leftEye:after, .rightEye:after{
  content: '';
  position: absolute;
  height: 214px;
  width: 130px;
  top: 169px;
  background: white;
}
.leftEye:after{
  right: 2px;
  transform: rotate(4deg);
}
.rightEye:after{
  right: -2px;
  transform: rotate(-5deg);
}
/*画上他的鼻子*/
.nose{
  width: 56px;
  height: 34px;
  background: #FBBFCB;
  border: 3px solid black;
  position: absolute;
  left: 50%;
  top: 198px;
  border-radius: 50%;
  margin-left: -28px;
  z-index: 3;
}
/*画上他脸上的胡子*/
div.special, div.sm1, div.sm2, div.sm3, div.sm4{
  width: 12px;
  height: 55px;
  background: black;
  border-bottom-right-radius: 220%;
  border-bottom-left-radius: 302%;
  border-top-right-radius: 70px 140px;
  border-top-left-radius: 10%;
}
/*先来一个小胡子*/
.mustache-r1{
  top: 23px;
  right: 25px;
  transform: rotate(-30deg);
}
/*再来三个大胡子*/
.mustache-r2{
  top: 80px;
  right: 3px;
  transform: rotate(-6deg);
}
.mustache-r3{
  top: 154px;
  right: 4px;
  transform: rotate(13deg);
}
.mustache-r4{
  top: 230px;
  right: 49px;
  transform: rotate(46deg);
}
/*再来左边的小胡子*/
.mustache-l1{
  top: 23px;
  left: 25px;
  right: unset;
  transform: rotate(210deg);
}
/*左边的大胡子*/
.mustache-l2{
  top: 80px;
  left: 3px;
  right: unset;
  transform: rotate(186deg);
}
.mustache-l3{
  top: 147px;
  left: 3px;
  right: unset;
  transform: rotate(170deg);
}
.mustache-l4{
  top: 230px;
  left: 49px;
  right: unset;
  transform: rotate(136deg);
}
/*调整一下胡子，看起来更自然*/
div.special{
  transform: scale(0.4);
  margin-right: -2px;
}
div.sm1{
  transform: scale(0.3);
  margin-right: -2px;
}
div.sm2{
  transform: scale(0.6);
}
div.sm3{
  transform: scale(0.8);
}
/*然后是他的嘴唇*/
.noseMustache-left, .noseMustache-right{
  position: relative;
  width: 55px;
  height: 14px;
  transform: rotate(-35deg);
  border: 3px solid black;
  border-top: transparent;
  border-right: transparent;
  border-bottom: transparent;
  background: #FFFD78;
  border-top-left-radius: 50% 100%;
  border-bottom-left-radius: 50% 100%;
  z-index: 1;
}
.noseMustache-right{
  transform: rotate(-140deg);
}
.noseMustache-left > div {
  background: black;
}
.noseMustache-right > div {
  background: black;
}
/*他的左右脸颊*/
.leftCheek, .rightCheek{
  position: relative;
  width: 70px;
  height: 45px;
  background: #FFFD78;
  border: 3px solid black;
  border-top-left-radius: 60% 60%;
  border-bottom-left-radius: 70% 80%;
}

/*脸颊上的几根胡子*/
.whiskerL1, .whiskerL2, .whiskerL3, .whiskerR1, .whiskerR2, .whiskerR3{
  position: absolute;
  width: 0;
  height: 0;
  border-top: 5px solid black;
  border-left: 3px solid transparent;
  border-right: 3px solid transparent;
}
/*1个*/
.whiskerL1{
  top: 220px;
  left: 33%;
}
/*2个*/
.whiskerL2{
  top: 230px;
  left: 30%;
}
/*3个，左边搞定*/
.whiskerL3{
  top: 242px;
  left: 31%;
}
/*同样右边也来三个*/
.whiskerR1{
  top: 220px;
  right: 33%;
}
.whiskerR2{
  top: 230px;
  right: 30%;
}
.whiskerR3{
  top: 242px;
  right: 31%;
}
/*ok!大功告成！
  谢谢观看！
*/
`
  let duration = 20
  function writeCSS(code,fn) {
    let domCode = document.querySelector('#code')
    let domStyle = document.querySelector('#styleTag')
    let n = 0
    setTimeout(function repeat(){
      n += 1
      domCode.innerHTML = Prism.highlight(code.substring(0,n), Prism.languages.css, 'css')
      domStyle.innerHTML = code.substring(0,n)
      domCode.scrollTop = domCode.scrollHeight
      if (n < code.length){
        setTimeout(repeat,duration)
      }else {
        fn && fn.call()
      }
    },duration)
  }
  writeCSS(code)

  function changeSpeed() {
    let xx = document.querySelectorAll('button')
    for(let i=0; i<xx.length;i++){
      xx[i].onclick = function() {
        if(xx[i].className === 'slow'){
          duration = 100
        }else if(xx[i].className === 'normal'){
          duration = 50
        }else{
          duration = 0
        }
      }
    }
  }
  changeSpeed()




}.call()



