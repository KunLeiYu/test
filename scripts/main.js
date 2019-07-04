/* let myHeading = document.querySelector('h1');

myHeading.textContent = 'Hello world!'; */
/* let iceCream = 'chocolate';
if (iceCream === 'chocolate') {
  alert('我最喜欢巧克力冰激淋了。');    
} else {
  alert('但是巧克力才是我的最爱呀……');    
} */

/* function multiply(num1, num2) {
  let result = num1 * num2;
  return result;
}

alert(multiply(4, 7)); */

/* document.querySelector('html').onclick = function() {
    alert('别戳我，我怕疼。');
}
 */
 
// 图片切换代码
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute('src', 'images/sports.jpg');
    } else {
      myImage.setAttribute('src', 'images/firefox-icon.png');
    }
}
// 个性化欢迎信息
function setHeading(name) {
  let myHeading = document.querySelector('h1');
  myHeading.textContent = 'Mozilla 欢迎您，' + name + '！';
}

function setUserName() {
  let myName = prompt('请输入你的名字');
  localStorage.setItem('name', myName);
  setHeading(myName);
} 

let storedName = localStorage.getItem('name');
if(!storedName) {
   setUserName();
} else {
   setHeading(storedName);
}

let myButton = document.querySelector('button'); 
myButton.onclick = setUserName;