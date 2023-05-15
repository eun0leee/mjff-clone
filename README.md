# 📇 무주산골영화제 사이트 클론

무주산골영화제 사이트의 메인페이지를 따라 퍼블리싱 해보았습니다.

## 👉 사이트

- [무주산골영화제 사이트](https://www.mjff.or.kr/)
- [배포 사이트](https://mjffclone.netlify.app)

## 👉 기술스택

<img alt="Html" src ="https://img.shields.io/badge/HTML-E34F26.svg?&style=for-the-badge&logo=HTML5&logoColor=white"/> <img alt="CSS3" src ="https://img.shields.io/badge/CSS3-FF9933.svg?&style=for-the-badge&logo=CSS3&logoColor=white"/> <img alt="JavaScript" src ="https://img.shields.io/badge/JavaScript-F7DF1E.svg?&style=for-the-badge&logo=JavaScript&logoColor=white"/>

## 👉 구현기능
### ✔️ 반응형
![](https://velog.velcdn.com/images/eun0leee/post/ab3c718d-dc99-40f0-985c-70495f7ab959/image.gif)
- 1024px 이하면 navigation 바를 숨기고, 햄버거 버튼이 등장합니다. media query를 사용하여 구현했습니다.

![](https://velog.velcdn.com/images/eun0leee/post/0adf0533-1f48-4c52-aa9e-312cadcbeece/image.gif)
- 1024px 이하일 때, 햄버거 버튼을 누르면 사이드바가 보입니다. 버튼 클릭과 사이드바 안의 리스트 토글은 JavaScript로 구현하였습니다. 클릭될 항목들은 querySelector로 선택했고, 이벤트리스너를 사용하여 클릭 후에 일어날 동작들을 설정해줬습니다.

![](https://velog.velcdn.com/images/eun0leee/post/563fcdaf-48d0-4b53-b373-deba4ab7a3ff/image.gif)
- 오른쪽에 있던 사이드바는 767px 이하가 되면 하단의 고정된 사이드바 형태로 변경됩니다. 창크기에 따른 변화는 media query를 사용하여 구현했고, 하단에 사이드바를 고정시킨 것은 `position: fixed`로 구현하였습니다.

### ✔️ hover

![](https://velog.velcdn.com/images/eun0leee/post/f4a336b7-4cfd-482e-aa5c-c5d7ec4ebfd2/image.gif)
- main menu인 `top-nav-lists`에 마우스를 올리면`submenu` 가 등장합니다. submenu에 해당하는 것을 `display:none`으로 해뒀다가 hover 했을 때 `display: block`으로 설정해주어 구현했습니다.
