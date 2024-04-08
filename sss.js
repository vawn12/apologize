const wrapper = document.querySelector(".wrapper");
const question = document.querySelectorAll(".question");
const img = document.querySelector(".img");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const newBtn = document.querySelector(".new-btn");

yesBtn.addEventListener("click", () => {
  question[0].innerHTML = "Cuối cùng Lạc cũng tha thứ cho mình rồi sao😊";
  question[1].innerHTML = "Cảm ơn bạn lạc đã hỉu và cảm thông cho mình😓"; 
  img.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExN3E1d2pnMjJmeXAwemlkMTMyZWgzejZxbTFyMndic3IxNnJkYmM2ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/Js27mGWPIUs9V0mjcd/giphy.gif";

  // Ẩn nút Yes và No
  yesBtn.style.display = "none";
  noBtn.style.display = "none";

  // Hiển thị nút mới
  newBtn.style.display = "block";

  // Thực hiện chuyển hướng đến đường dẫn Facebook
  newBtn.addEventListener("click", () => {
    window.location.href = "https://www.messenger.com/e2ee/t/7177360998984644";
  });
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
