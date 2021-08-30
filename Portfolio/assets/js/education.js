AOS.init();




/* Badges*/

const bagdes = document.querySelector(".badges");
const badgesection = [
  {
    title: "Google Developer Essentials",
    image: "assets/images/education-page/badge1.png",
    description: "Earned May 20, 2020",
  },
  {
    title: "VM Migration",
    image: "assets/images/education-page/badge2.png",
    description: "Earned June 20, 2020",
  },
  {
    title: "G Suite Essentials",
    image: "assets/images/education-page/badge3.png",
    description: "Earned July 20, 2020",
  },
];

const showCards1 = () => {
  let output = "";
  badgesection.forEach(
    ({ title, image, description }) =>
    (output += `       
      <div class="col-lg-4 col-md-6 p-2" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600"> 
        <img class="img-fluid d-block mb-3 mx-auto hvr-grow" src="${image}" alt="Card image cap" width="200">
          <div class="text-center font-weight-bolder" style="font-size: 1.3em;">${title}</div>
          <div class="text-center text-muted font-weight-bolder p-2">${description}</div>
      </div>`)
  );
  bagdes.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards1);


/* Timeline Section*/

const timeline = document.querySelector(".timeline-container");
const timelinesection = [
  {
    heading: "Banani Bidyaniketan school and college",
    image: "assets/images/education-page/scl.png",
    subheading: "School (2012-2017)",
    description:  " ",
  },

  {
    heading: "Bangladesh Navy College Dhaka",
    image: "assets/images/education-page/clg.jpg",
    subheading: "College (2017-2020)",
    description:  " ",
    
  },

  {
    heading: "Brac University  &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp",
    image: "assets/images/education-page/uni.jpg",
    subheading: "University (2020-Present)",
    description:  " ",
    
    
  },


];

const showCards2 = () => {
  let output = "";
  timelinesection.forEach(
    ({ heading, image, subheading, description }) =>
    (output += `       
    <div class="timeline-item">
    <div class="timeline-img">
        
    </div>

    <div class="timeline-content js--fadeInLeft">
        <img src="${image}">
    <div class="timeline-content-text">
      <h2>${heading}</h2>
      <h6>${subheading}</h6>
      <p>${description}</p>
     
    </div>
    </div>
  </div>`)
  );
  timeline.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);