// ? =============> Global ===============>
let saturateInput = document.getElementById("saturate"),
  contrastInput = document.getElementById("contrast"),
  brightnessInput = document.getElementById("brightness"),
  sepiaInput = document.getElementById("sepia"),
  grayScaleInput = document.getElementById("grayScale"),
  blurInput = document.getElementById("blur"),
  hueRotateInput = document.getElementById("hue-rotate"),
  uploadBtn = document.getElementById("upload"),
  downloadBtn = document.getElementById("download"),
  img = document.getElementById("uploadImg"),
  resetBtn = document.getElementById("reset"),
  imgBox = document.getElementById("imgBox"),
  filters = document.querySelectorAll("ul li input"),
  canvas = document.getElementById("canvas"),
  ctx = canvas.getContext("2d");

// * =============> Events ===============>
// onload Event
window.onload = function () {
  downloadBtn.style.display = "none";
  resetBtn.style.display = "none";
  imgBox.style.display = "none";
};

// onchange event occurs when the value of an img element is changed
uploadBtn.onchange = function () {
  resetValue();
  downloadBtn.style.display = "block";
  resetBtn.style.display = "block";
  imgBox.style.display = "block";

  // To read files
  let file = new FileReader();
  file.readAsDataURL(uploadBtn.files[0]);

  file.onload = function () {
    img.src = file.result;
  };

  img.onload = function () {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    img.style.display = "none";
  };
};

resetBtn.onclick = function () {
  resetValue();
  ctx.filter = "none";
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
};

downloadBtn.onclick = function () {
  const link = document.createElement("a");
  link.download = "image.png";
  link.href = canvas.toDataURL();
  link.click();
};

// ! =============> Function ===============>
filters.forEach((filter) => {
  filter.addEventListener("input", () => {
    ctx.filter = `
      saturate(${saturateInput.value}%)
      contrast(${contrastInput.value}%)
      brightness(${brightnessInput.value}%)
      sepia(${sepiaInput.value}%)
      grayscale(${grayScaleInput.value})
      blur(${blurInput.value}px)
      hue-rotate(${hueRotateInput.value}deg)
    `;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  });
});

function resetValue() {
  saturateInput.value = "100";
  contrastInput.value = "100";
  brightnessInput.value = "100";
  sepiaInput.value = "0";
  grayScaleInput.value = "0";
  blurInput.value = "0";
  hueRotateInput.value = "0";
}
