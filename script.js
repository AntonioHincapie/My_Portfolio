import dataProjects from './projectdata.js';

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

const works = document.getElementById('portfolio');
const printWorks = () => {
  let str = '';
  const srtProject = ['a', 'b', 'c', 'd', 'e', 'f'];
  for (let i = 0; i < dataProjects.length; i += 1) {
    const [a] = dataProjects[i].imgShow;
    const language = () => {
      let str = '';
      for (let j = 0; j < dataProjects[i].popupLanguages.length; j += 1) {
        str += `<li class="tags">${dataProjects[i].popupLanguages[j]}</li>`;
      }
      return str;
    };
    str += `<div class="projectdescription ${srtProject[i]}">
    <img src="${a}" alt="PROJECT${i + 1}">
    <div class="projectinfo${i + 1}">
      <h2 class="projectname">${dataProjects[i].projectTitle}</h2>
      <ul class="languages">
      ${language()}
      </ul>
      <button type="button" class="buttonproject">See this Project<img src="img/rightarrow.png" alt="ARROW"></button>
    </div>
  </div>`;
  }
  return str;
};

works.innerHTML = `
<h1 class="projecttitle">Projects</h1>
${printWorks()}
<div class="background1"></div>
<div class="background2"></div>
<div class="background3"></div>`;

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
    const [a] = dataProjects[i].imgShow;
    document.getElementById('popup-title').innerHTML = dataProjects[i].projectTitle;
    document.getElementById('languages').innerHTML = language();
    document.getElementById('main-img').src = a;
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

const contForm = document.getElementById('contact');
const emailForm = document.getElementById('mail');
const errorMessage = document.getElementById('error-message');

const emailLowercase = (mail) => {
  const itLowerc = new RegExp(/[A-Z]/g);
  if (itLowerc.test(mail)) {
    return false;
  }
  return true;
};

contForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (emailLowercase(emailForm.value.trim())) {
    contForm.submit();
    errorMessage.style.display = 'none';
  } else {
    errorMessage.style.display = 'block';
  }
});