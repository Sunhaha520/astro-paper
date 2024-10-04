document.addEventListener('DOMContentLoaded', function() {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.querySelector('.lightbox .close');
  const prevBtn = document.querySelector('.lightbox .prev');
  const nextBtn = document.querySelector('.lightbox .next');
  let currentIndex = 0;

  // 绑定事件函数
  function bindLightboxEvents() {
    const photos = Array.from(document.querySelectorAll('.gallery-photo img'));

    photos.forEach((photo, index) => {
      photo.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = photo.src;
        currentIndex = index;
      });
    });
  }

  // 初始化时绑定事件
  bindLightboxEvents();

  // 关闭 Lightbox
  closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });

  // 显示上一张图片
  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      lightboxImg.src = document.querySelectorAll('.gallery-photo img')[currentIndex].src;
    }
  });

  // 显示下一张图片
  nextBtn.addEventListener('click', () => {
    if (currentIndex < document.querySelectorAll('.gallery-photo img').length - 1) {
      currentIndex++;
      lightboxImg.src = document.querySelectorAll('.gallery-photo img')[currentIndex].src;
    }
  });

  // 点击 Lightbox 背景关闭 Lightbox
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
    }
  });
});
