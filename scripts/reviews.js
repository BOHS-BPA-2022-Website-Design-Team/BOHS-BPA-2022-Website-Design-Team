const testimonials = [{
    image: "images/2616451236_56e5a21b0f_b.jpg",
    name: "John Williker",
    testimonial:
      "BPA Auto Sales was there for me when my old car broke down. They hooked my up with a sweet new ride fast and at a reasonable price!",
  },
  {

    image: "images/PIXNIO-2568248-3840x5760.jpg",
    name: "Joey Droop",
    testimonial:
      "As a busy business man and father of 4, I don't have a lot of time. BPA helped me purchase a new car extremely quickly. I am very impressed with their customer service.",
  },
  {
    image: "images/Testimonial_1.jpg",
    name: "Malanie Milintoff",
    testimonial:
      "It's hard to find affordable cars these days. I am fortunate to have found BPA so that I can have a car that fits my budget!",
  },
  {
    image: "images/winniethepooh_egmont.jpg",
    name: "Anonymous",
    testimonial:
      "Hmm, well I must say I enjoy the hunny car I purchased. Talking about hunny, I could really go for a smackeral right about now...",
  },
];
//Current Slide
let i = 0;
//Total Slides
let j = testimonials.length;
let testimonialContainer = document.getElementById("testimonial-container");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");
nextBtn.addEventListener("click", () => {
  i = (j + i + 1) % j;
  displayTestimonial();
});
prevBtn.addEventListener("click", () => {
  i = (j + i - 1) % j;
  displayTestimonial();
});
let displayTestimonial = () => {
  testimonialContainer.innerHTML = `
    <img src=${testimonials[i].image}>
    <p>${testimonials[i].testimonial}</p>
    <h3>${testimonials[i].name}</h3>
  `;
};
window.onload = displayTestimonial;