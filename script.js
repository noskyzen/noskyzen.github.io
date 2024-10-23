/* logo-animation */

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('animation-container');

  function animationLoop() {
    container.classList.add('animate');

    setTimeout(() => {
      container.classList.remove('animate');
    }, 3000);

    setTimeout(animationLoop, 6000);
  }

  animationLoop();
});

/* updates-button */

document.addEventListener('DOMContentLoaded', () => {
  // 处理动态中的图片展开和隐藏
  const updatesContainers = document.querySelectorAll('.updates-container');
  updatesContainers.forEach(container => {
    const toggleButton = container.querySelector('.toggle-image-button');
    const image = container.querySelector('.toggle-image');

    if (toggleButton && image) {
      toggleButton.addEventListener('click', () => {
        image.classList.toggle('show');
        // 可选：切换按钮文字
        if (image.classList.contains('show')) {
          toggleButton.textContent = 'hide';
        } else {
          toggleButton.textContent = 'show';
        }
      });

      // 点击图片时隐藏图片
      image.addEventListener('click', () => {
        image.classList.remove('show');
        toggleButton.textContent = 'show';
      });
    }
  });
});

/* album-animation */

document.addEventListener('DOMContentLoaded', () => {
  const mainImage = document.querySelector('.mcserver-image');
  const hiddenImagesContainer = document.getElementById('hidden-images');
  const hiddenImages = hiddenImagesContainer.querySelectorAll('.album-image');
  let imagesRevealed = false; // 用于跟踪图片是否已显示

  mainImage.addEventListener('click', () => {
    if (!imagesRevealed) {
      // 显示隐藏的图片容器
      hiddenImagesContainer.style.opacity = '1';
      hiddenImagesContainer.style.pointerEvents = 'auto';

      // 为每张隐藏的图片添加动画类，并设置延迟
      hiddenImages.forEach((img, index) => {
        setTimeout(() => {
          img.classList.add('show');
        }, index * 200); // 每张图片延迟200毫秒
      });

      imagesRevealed = true;
    } else {
      // 如果图片已显示，再次点击时隐藏它们
      hiddenImages.forEach((img) => {
        img.classList.remove('show');
      });

      setTimeout(() => {
        hiddenImagesContainer.style.opacity = '0';
        hiddenImagesContainer.style.pointerEvents = 'none';
      }, hiddenImages.length * 200); // 等待所有动画完成

      imagesRevealed = false;
    }
  });
});

/* blogs */

document.addEventListener('DOMContentLoaded', () => {
  const blogPosts = document.querySelectorAll('.blog-post');

  blogPosts.forEach((post) => {
    post.addEventListener('click', () => {
      post.classList.toggle('expanded');
    });
  });
});
