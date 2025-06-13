// 요소 페이드인 효과 (화살표 함수 + forEach + 클래스 조작)
document.addEventListener('DOMContentLoaded', () => {
  const fadeElements = document.querySelectorAll('.fade-in')
  fadeElements.forEach((element, index) => {
    setTimeout(() => {
      element.classList.add('visible')
    }, index * 300)
  })

  // 버튼 효과 초기화
  initButtonAnimations()
})

// 버튼 호버 시 애니메이션 효과 적용 (함수 선언식 사용)
function initButtonAnimations() {
  const buttons = document.querySelectorAll('button')

  for (let btn of buttons) {
    btn.addEventListener('mouseover', () => {
      btn.style.transform = 'scale(1.05)'
      btn.style.transition = 'transform 0.2s ease'
    })

    btn.addEventListener('mouseout', () => {
      btn.style.transform = 'scale(1)'
    })
  }
}

// 햄버거 메뉴 toggle 기능
document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.menu-toggle')
  const navMenu = document.querySelector('.nav-links')

  menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active')
  })
})
