import { dataProjects } from './projectdata.js';

const btnMenu = document.getElementById('btnmenu');
const menu = document.getElementById('menu');
const exitBtn = document.getElementById('exitbtn');
const menuElements = document.querySelectorAll('#mobile-menu a');

btnMenu.addEventListener('click', () => {
  menu.style.display = 'flex';
});

exitBtn.addEventListener('click', () => {
  menu.style.display = 'none';
});

for (let i = 0; i < menuElements.length; i += 1) {
  menuElements[i].addEventListener('click', () => {
    menu.style.display = 'none';
  });
}

const popupWindow = document.getElementById('popup-window');
const buttonsProject = document.getElementsByClassName('buttonproject');
const popupExitButton = document.getElementById('popup-exitbtn');
const backGround = document.getElementById('popup-background');

for (let i = 0; i < buttonsProject.length; i += 1) {
  buttonsProject[i].addEventListener('click', () => {
    const language = () => {
      let str = '';
      for (let j = 0; j < dataProjects[i].popupLanguages.length; j += 1) {
        str += `<li class="langstyle">${dataProjects[i].popupLanguages[j]}</li>`;
      }
      return str;
    };
    const showImg = () => {
      let str = '';
      for (let j = 0; j < dataProjects[i].imgShow.length; j += 1) {
        str += `<img src="${dataProjects[i].imgShow[j]}" alt="PROJECT">`;
      }
      return str;
    };
    document.getElementById('popup-title').innerHTML = dataProjects[i].projectTitle;
    document.getElementById('languages').innerHTML = language();
    document.getElementById('main-img').src = dataProjects[i].imgShow[0];
    document.getElementById('text').innerHTML = dataProjects[i].pText;
    document.getElementById('miniatures').innerHTML = showImg();
    document.getElementById('live').href = dataProjects[i].liveUrl;
    document.getElementById('source').href = dataProjects[i].sourceUrl;
    popupWindow.style.top = `${window.scrollY}px`;
    popupWindow.style.display = 'flex';
    backGround.style.display = 'block';
  });
}

popupExitButton.addEventListener('click', () => {
  popupWindow.style.display = 'none';
  backGround.style.display = 'none';
});