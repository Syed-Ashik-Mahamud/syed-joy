AOS.init();

//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Vice President",
    cardImage: "assets/images/experience-page/bn it.jpg",
    place: "BNCD IT CLUB",
    time: "(June, 2018 - July,2020)",
    desp: "<li>I Basically Plans, coordinates, and recruits committees to manage a series of meetings and programs</li> <li>Coordinates programs with the president and the executive committee</li> <li>Provides or coordinates information on forthcoming events to the secretary for inclusion in meeting notices, newsletters or electronic distribution lists.</li>",
  },
  {
    title: "President",
    cardImage: "assets/images/experience-page/bbn.jpg",
    place: "BBNSC DEBATING SOCIETY",
    time: "(Mar,2016 - Aug,2017)",
    desp: "<li>I joined as a General Member of BBNSC DEBATING SOCIEY in 2015 and retired as a President.</li><li>I Along With My team participate In Bangladesh  Natinal Debate Fest and Ma O shishu Debate Organized by BTV. And We are the winning team of BTV Ma o Shishu debate competition.</li>",
  },
  {
    title: "General Member",
    cardImage: "assets/images/experience-page/bndebate.png",
    place: "Navians Debating Society",
    time: "(June, 2018 - July,2020)",
    desp:"It Was a Great Experience for me . I join as a general member of Navians Debating Society in 2017 and retired in 2019.                                                           ",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);


// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Junior | Of Network & Vision",
    cardImage: "assets/images/experience-page/mt.jpg  ",
    description:
      "Mongol Tori is a next-generation Mars rover.Mongol Tori was specifically made for the purpose of competing at the prestigious Mars rover competition -URC",
  },
  {
    title: "General Member   RPM",
    cardImage: "assets/images/experience-page/robu.png",
    description:
      " I work as a General Member | Department Of Research & Project Management | Of Robotics Club of Brac University",
  },
  {
    title: "General Member   Creative",
    cardImage: "assets/images/experience-page/bucc.jpg",
    description:
      "I work as a General Member | Department Of Creative | Of Brac University Computer Club",
  },
  {
    title: "Junior Executive | IT & Publication",
    cardImage: "assets/images/experience-page/buedf.jpg",
    description:
      "I work as a Junior Executive | Department Of IT & Publication| Of Brac University Entrepreneurship Development Forum-BUEDF.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


// Hackathon Section


const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "Ma O Shishu Debate",
    subtitle: "Organized By BTV",
    image: "assets/images/experience-page/debate2.jpg",
    desp: "I was the first speaker of BBNSC Debate team for this competetion. And We did Great.",
  },
  {
    title: "Ma O Shishu Debate",
    subtitle: "Organized By BTV",
    image: "assets/images/experience-page/debate2.jpg",
    desp: "I was the first speaker of BBNSC Debate team for this competetion. And We did Great.",
  },
  {
    title: "Vice President",
    subtitle: "Session on Arduino & c,c++ ",
    image: "assets/images/experience-page/ex.jpg",
    desp: "It Was a Casual Session day Of Our IT club.Where We have to Discuss About IT related Subjects.",
  },
  {
    title: "Freshers Doing Tech Session ",
    subtitle: "Session on Arduino & c,c++ ",
    image: "assets/images/experience-page/ex11.jpg",
    desp: "It Was a Casual Session day Of Our IT club.Where We have to Discuss About IT related Subjects.",
  },
  {
    title: "co-curricular activities",
    subtitle: "Winner",
    image: "assets/images/experience-page/ex1.jpg",
    desp: "I was recieving the First Price Of a event in 2016 .It was the Annual Sports Day",
  },
  {
    title: "Picture With My Teachers",
    subtitle: "Memories",
    image: "assets/images/experience-page/pic1.jpg",
    desp: "My all Favourite Teachers with me",
  },
  {
    title: "ICT Instructor",
    subtitle: " at-Harriken",
    image: "assets/images/experience-page/tutor.jpg",
    desp: "I joined Harriken The Online Teaching Platform in 2019 as a Ict Instructor.",
  },
  {
    title: "ICT Instructor",
    subtitle: " at-Harriken",
    image: "assets/images/experience-page/tutor1.jpg",
    desp: "I joined Harriken The Online Teaching Platform in 2019 as a Ict Instructor.",
  },
  {
    title: "Achievement",
    subtitle: "achievement",
    image: "assets/images/experience-page/untitled.png",
    desp: "You never change your life until you step out of your comfort zone; change begins at the end of your comfort zone ― Roy T. Bennett",
  },
  
  

];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp}) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="#" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
