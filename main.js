document.addEventListener('DOMContentLoaded', () => {
  // 페이드인 효과
  const fadeElements = document.querySelectorAll('.fade-in')
  fadeElements.forEach((element, index) => {
    setTimeout(() => {
      element.classList.add('visible')
    }, index * 300)
  })

  // 버튼 애니메이션
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

  // 햄버거 메뉴 토글
  const menuBtn = document.querySelector('.menu-toggle')
  const navMenu = document.querySelector('.nav-links')
  if (menuBtn && navMenu) {
    menuBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active')
    })
  }
})
