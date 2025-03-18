const nextBtn = document.querySelector('.travel-slider-next');
const prevBtn = document.querySelector('.travel-slider-prev');
const slider = document.querySelector('.travel-slider-slide');
let items = document.querySelectorAll('.travel-slider-item');

let autoSlideInterval;

// Function to move slider forward
function moveSliderForward() {
    slider.appendChild(items[0]); // pehla item end mein chala jaayega
    items = document.querySelectorAll('.travel-slider-item');
    updateSliderView();
}

// Function to move slider backward
function moveSliderBackward() {
    slider.prepend(items[items.length - 1]); // last item starting mein aa jaayega
    items = document.querySelectorAll('.travel-slider-item');
    updateSliderView();
}

// Function to update content visibility
function updateSliderView() {
    items.forEach((item, index) => {
        if (index === 1) {
            item.querySelector('.travel-slider-content').style.display = 'block';
        } else {
            item.querySelector('.travel-slider-content').style.display = 'none';
        }
    });
}

// ✅ Function to start or restart auto slide
function startAutoSlide() {
    // Pehle existing interval ko hatao
    clearInterval(autoSlideInterval);
    // Fir naya interval set karo
    autoSlideInterval = setInterval(moveSliderForward, 3000);
}

// Event listeners
nextBtn.addEventListener('click', () => {
    moveSliderForward();
    startAutoSlide(); // 🔁 Restart auto slide
});

prevBtn.addEventListener('click', () => {
    moveSliderBackward();
    startAutoSlide(); // 🔁 Restart auto slide
});

// Initial setup
updateSliderView();
startAutoSlide(); // ✅ Start auto slide initially