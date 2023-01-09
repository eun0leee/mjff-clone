const mobileNav = document.querySelector('.mobile-nav-container');

// 드롭메뉴 열기 버튼
const openBtn = document.querySelector('.mobile-nav-container > button');

openBtn.addEventListener('click', (e) => {
  mobileNav.querySelector('nav').style.display = 'block';
});

// 드롭메뉴 닫기 버튼
const closeBtn = document.querySelector('.mobile-nav-top button:last-child');

closeBtn.addEventListener('click', () => {
  mobileNav.querySelector('nav').style.display = 'none';
});

// 드롭메뉴 리스트 토글
const mobileList = document.querySelectorAll('.mobile-nav-lists div');

mobileList.forEach((list) => {
  list.addEventListener('click', (e) => {
    const submenuUl = e.target.closest('.mobile-nav-lists').querySelector('.submenu');
    submenuUl.classList.toggle('submenu-clicked');
  });
});
