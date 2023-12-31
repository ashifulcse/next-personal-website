import Layout from "../components/layout";
export default function Home() {
    return (
        <Layout >
            <div class="wrapper">

                <section class="lui-section lui-section-hero lui-gradient-top" id="started-section">
                    <div class="container">

                        <div class="lui-started v-line v-line-left">
                            <div class="section hero-started">
                                <div class="content scrolla-element-anim-1 scroll-animate" data-animate="active">
                                    <div class="titles">
                                        <div class="lui-subtitle">
                                            <span> Hello, <b>my name is</b>
                                            </span>
                                        </div>
                                        <h1 class="title splitting-text-anim-1 scroll-animate" data-splitting="chars"
                                            data-animate="active">
                                            <span>
                                                <b>Ashiful</b> Islam </span>
                                        </h1>
                                        <div class="label lui-subtitle"> I am <strong>Web Developer</strong>
                                        </div>
                                    </div>
                                    <div class="description">
                                        <div>
                                            <p>From France, Paris. I have rich experience in web design, also I am good at
                                                wordpress. I love to talk with you about our unique.</p>
                                        </div>
                                        <div class="social-links">
                                            <a target="_blank" rel="nofollow" href="#">
                                                <i aria-hidden="true" class="fab fa-twitter"></i>
                                            </a>
                                            <a target="_blank" rel="nofollow" href="#">
                                                <i aria-hidden="true" class="fab fa-dribbble"></i>
                                            </a>
                                            <a target="_blank" rel="nofollow" href="#">
                                                <i aria-hidden="true" class="fab fa-behance"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="bts">
                                        <a target="_blank" href="#" class="btn">
                                            <span>Download CV</span>
                                        </a>
                                        <a href="#skills-section" class="btn-lnk"> My Skills </a>
                                    </div>
                                </div>
                                <div class="slide scrolla-element-anim-1 scroll-animate" data-animate="active">
                                    <img decoding="async" src="assets/images/profile2.png"
                                        alt="&lt;b&gt;Zoé&lt;/b&gt; Miller" />
                                    <span class="circle circle-1"></span>
                                    <span class="circle img-1"
                                        style={{ backgroundImage: "url('assets/images/pat-1.png')" }}></span>
                                    <span class="circle img-2"
                                        style={{ backgroundImage: "url('assets/images/pat-2.png')" }}></span>
                                    <span class="circle img-3"
                                        style={{ backgroundImage: "url('assets/images/pat-2.png')" }}></span>
                                    <div class="info-list">
                                        <ul>
                                            <li>
                                                <span class="num">12 <strong>+</strong>
                                                </span>
                                                <span class="value">Years of <strong>Experience</strong>
                                                </span>
                                            </li>
                                            <li>
                                                <span class="num">330</span>
                                                <span class="value">Completed <strong>Projects</strong>
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="lui-bgtitle">
                                <span> Web Developer </span>
                            </div>
                        </div>

                    </div>
                </section>

                <section class="lui-section lui-gradient-bottom" id="services-section">

                    <div class="lui-heading">
                        <div class="container">

                            <div class="m-titles align-center">
                                <h2 class="m-title splitting-text-anim-1 scroll-animate" data-splitting="words"
                                    data-animate="active">
                                    <span> What I Do </span>
                                </h2>
                                <div class="m-subtitle splitting-text-anim-1 scroll-animate" data-splitting="words"
                                    data-animate="active">
                                    <span> my <b>Services</b> </span>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="v-line v-line-right">
                        <div class="container">

                            <div class="swiper-container js-services scrolla-element-anim-1 scroll-animate"
                                data-animate="active">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide">
                                        <div class="services-item">
                                            <div class="lui-subtitle">
                                                <span> Web Development </span>
                                            </div>
                                            <div class="icon"></div>
                                            <h5 class="lui-title">
                                                <span> Web Design &amp; Logo </span>
                                            </h5>
                                            <div class="lui-text">
                                                <div> Web designers craft the overall vision &amp; plan for a website
                                                    layout. Professional logo development: Business, Company, or Personal.
                                                </div>
                                            </div>
                                            <a href="#pricing-section" class="lnk"> See Pricing </a>
                                            <div class="image" style={{ backgroundImage: "url('assets/images/pat-2.png')" }}>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="services-item">
                                            <div class="lui-subtitle">
                                                <span> Apps Development </span>
                                            </div>
                                            <div class="icon"></div>
                                            <h5 class="lui-title">
                                                <span> iOS &amp; Android </span>
                                            </h5>
                                            <div class="lui-text">
                                                <div>
                                                    <p>Design Software applications to run on mobile devices. Modern and
                                                        mobile-ready application that will help you reach all of your
                                                        marketing.</p>
                                                </div>
                                            </div>
                                            <a href="#pricing-section" class="lnk"> See Pricing </a>
                                            <div class="image" style={{ backgroundImage: "url('assets/images/pat-2.png')" }}>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="services-item">
                                            <div class="lui-subtitle">
                                                <span> Game Development </span>
                                            </div>
                                            <div class="icon"></div>
                                            <h5 class="lui-title">
                                                <span> Unity &amp; Unreal Engine </span>
                                            </h5>
                                            <div class="lui-text">
                                                <div> Creating games &amp; describes the design, development and release of
                                                    a game. Developing unique mobile android and ios games. </div>
                                            </div>
                                            <a href="#pricing-section" class="lnk"> See Pricing </a>
                                            <div class="image" style={{ backgroundImage: "url('assets/images/pat-2.png')" }}>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="services-item">
                                            <div class="lui-subtitle">
                                                <span> Advertising </span>
                                            </div>
                                            <div class="icon"></div>
                                            <h5 class="lui-title">
                                                <span> Google Ads </span>
                                            </h5>
                                            <div class="lui-text">
                                                <div> Advertising services include: Google search result pages, gmails,
                                                    YouTube and other websites participated in Google Ads program. </div>
                                            </div>
                                            <a href="#pricing-section" class="lnk"> See Pricing </a>
                                            <div class="image" style={{ backgroundImage: "url('assets/images/pat-2.png')" }}>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="services-item">
                                            <div class="lui-subtitle">
                                                <span> Music Writing </span>
                                            </div>
                                            <div class="icon"></div>
                                            <h5 class="lui-title">
                                                <span> Sound Track </span>
                                            </h5>
                                            <div class="lui-text">
                                                <div>
                                                    <p>Music copying, writing, creating, transcription and composition
                                                        services.</p>
                                                </div>
                                            </div>
                                            <a href="#pricing-section" class="lnk"> See Pricing </a>
                                            <div class="image" style={{ backgroundImage: "url(assets/images/pat-2.png)" }}>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-pagination"></div>
                            </div>

                            <div class="lui-bgtitle">
                                <span> Services </span>
                            </div>

                        </div>
                    </div>

                </section>

                <section class="lui-section lui-gradient-center" id="skills-section">

                    <div class="lui-heading">
                        <div class="container">

                            <div class="m-titles align-center">
                                <h2 class="m-title splitting-text-anim-1 scroll-animate" data-splitting="words"
                                    data-animate="active">
                                    <span> Professional Skills </span>
                                </h2>
                                <div class="m-subtitle splitting-text-anim-1 scroll-animate" data-splitting="words"
                                    data-animate="active">
                                    <span> my <b>Talent</b> </span>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="v-line v-line-left">
                        <div class="container">

                            <div class="row">
                                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">

                                    <div class="skills-items">
                                        <div class="skills-item scrolla-element-anim-1 scroll-animate"
                                            data-animate="active">
                                            <h6 class="name">
                                                <span> PHP </span>
                                            </h6>
                                            <div class="text">
                                                <div>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                        eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                </div>
                                            </div>
                                            <div class="dots">
                                                <div class="dot" style={{ width: "85%" }}>
                                                    <span></span>
                                                </div>
                                            </div>
                                            <div class="value">
                                                <span class="num">85 <span>%</span>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="skills-item scrolla-element-anim-1 scroll-animate"
                                            data-animate="active">
                                            <h6 class="name">
                                                <span> Python </span>
                                            </h6>
                                            <div class="text">
                                                <div>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                        eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                </div>
                                            </div>
                                            <div class="dots">
                                                <div class="dot" style={{ width: "75%" }}>
                                                    <span></span>
                                                </div>
                                            </div>
                                            <div class="value">
                                                <span class="num">75 <span>%</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">

                                    <div class="skills-items">
                                        <div class="skills-item scrolla-element-anim-1 scroll-animate"
                                            data-animate="active">
                                            <h6 class="name">
                                                <span> JavaScript </span>
                                            </h6>
                                            <div class="text">
                                                <div>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                        eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                </div>
                                            </div>
                                            <div class="dots">
                                                <div class="dot" style={{ width: "75%" }}>
                                                    <span></span>
                                                </div>
                                            </div>
                                            <div class="value">
                                                <span class="num">75 <span>%</span>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="skills-item scrolla-element-anim-1 scroll-animate"
                                            data-animate="active">
                                            <h6 class="name">
                                                <span> React </span>
                                            </h6>
                                            <div class="text">
                                                <div>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                        eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                </div>
                                            </div>
                                            <div class="dots">
                                                <div class="dot" style={{ width: "70%" }}>
                                                    <span></span>
                                                </div>
                                            </div>
                                            <div class="value">
                                                <span class="num">70 <span>%</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">

                                    <div class="skills-items">
                                        <div class="skills-item scrolla-element-anim-1 scroll-animate"
                                            data-animate="active">
                                            <h6 class="name">
                                                <span> WordPress </span>
                                            </h6>
                                            <div class="text">
                                                <div>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                        eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                </div>
                                            </div>
                                            <div class="dots">
                                                <div class="dot" style={{ width: "90%" }}>
                                                    <span></span>
                                                </div>
                                            </div>
                                            <div class="value">
                                                <span class="num">90 <span>%</span>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="skills-item scrolla-element-anim-1 scroll-animate"
                                            data-animate="active">
                                            <h6 class="name">
                                                <span> Adobe XD </span>
                                            </h6>
                                            <div class="text">
                                                <div>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                        eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                </div>
                                            </div>
                                            <div class="dots">
                                                <div class="dot" style={{ width: "80%" }}>
                                                    <span></span>
                                                </div>
                                            </div>
                                            <div class="value">
                                                <span class="num">80 <span>%</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div class="lui-bgtitle">
                                <span> Skills </span>
                            </div>

                        </div>
                    </div>

                </section>

                <section class="lui-section lui-gradient-top" id="works-section">

                    <div class="lui-heading">
                        <div class="container">

                            <div class="m-titles align-center">
                                <h2 class="m-title splitting-text-anim-1 scroll-animate" data-splitting="words"
                                    data-animate="active">
                                    <span> Portfolio </span>
                                </h2>
                                <div class="m-subtitle splitting-text-anim-1 scroll-animate" data-splitting="words"
                                    data-animate="active">
                                    <span> my <b>Cases</b>
                                    </span>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="v-line v-line-right">
                        <div class="container">

                            <div class="works-box">
                                <div class="filter-links scrolla-element-anim-1 scroll-animate" data-animate="active">
                                    <a href="#" class="lui-subtitle active" data-href=".works-col"> All </a>
                                    <a href="#" class="lui-subtitle" data-href=".sorting-ui-ux-design"> UI UX Design </a>
                                    <a href="#" class="lui-subtitle" data-href=".sorting-photo"> Photography </a>
                                    <a href="#" class="lui-subtitle" data-href=".sorting-development"> Development </a>
                                    <a href="#" class="lui-subtitle" data-href=".sorting-branding"> Branding </a>
                                </div>
                                <div class="works-items works-masonry-items row">
                                    <div
                                        class="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-branding sorting-photo ">
                                        <div class="works-item scrolla-element-anim-1 scroll-animate" data-animate="active">
                                            <div class="image">
                                                <div class="img">
                                                    <a href="work-single.html">
                                                        <img decoding="async" src="assets/images/work4.jpg" alt="Zorro" />
                                                        <span class="overlay"></span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="desc">
                                                <span class="category"> Branding, Photography </span>
                                                <h5 class="name">
                                                    <a href="work-single.html">Zorro</a>
                                                </h5>
                                                <div class="text">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                        eiusmod tempor incididunt ut labore et dolore.</p>
                                                </div>
                                                <a href="work-single.html" class="lnk">See project</a>
                                            </div>
                                            <div class="bg-img" style={{ backgroundImage: "url(assets/images/pat-2.png)" }}>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-branding sorting-ui-ux-design ">
                                        <div class="works-item scrolla-element-anim-1 scroll-animate" data-animate="active">
                                            <div class="image">
                                                <div class="img">
                                                    <a href="work-single.html">
                                                        <img decoding="async" src="assets/images/work2.jpg" alt="Gooir" />
                                                        <span class="overlay"></span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="desc">
                                                <span class="category"> Branding, UI UX Design </span>
                                                <h5 class="name">
                                                    <a href="work-single.html">Gooir</a>
                                                </h5>
                                                <div class="text">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                        eiusmod tempor incididunt ut labore et dolore.</p>
                                                </div>
                                                <a href="work-single.html" class="lnk">See project</a>
                                            </div>
                                            <div class="bg-img" style={{ backgroundImage: "url(assets/images/pat-2.png)" }}>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-development sorting-ui-ux-design ">
                                        <div class="works-item scrolla-element-anim-1 scroll-animate" data-animate="active">
                                            <div class="image">
                                                <div class="img">
                                                    <a href="work-single.html">
                                                        <img decoding="async" src="assets/images/work7.jpg" alt="Explore" />
                                                        <span class="overlay"></span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="desc">
                                                <span class="category"> Development, UI UX Design </span>
                                                <h5 class="name">
                                                    <a href="work-single.html">Explore</a>
                                                </h5>
                                                <div class="text">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                        eiusmod tempor incididunt ut labore et dolore.</p>
                                                </div>
                                                <a href="work-single.html" class="lnk">See project</a>
                                            </div>
                                            <div class="bg-img" style={{ backgroundImage: "url(assets/images/pat-2.png)" }}>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-branding sorting-photo ">
                                        <div class="works-item scrolla-element-anim-1 scroll-animate" data-animate="active">
                                            <div class="image">
                                                <div class="img">
                                                    <a href="work-single.html">
                                                        <img decoding="async" src="assets/images/work1.jpg" alt="Mozar" />
                                                        <span class="overlay"></span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="desc">
                                                <span class="category"> Branding, Photography </span>
                                                <h5 class="name">
                                                    <a href="work-single.html">Mozar</a>
                                                </h5>
                                                <div class="text">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                        eiusmod tempor incididunt ut labore et dolore.</p>
                                                </div>
                                                <a href="work-single.html" class="lnk">See project</a>
                                            </div>
                                            <div class="bg-img" style={{ backgroundImage: "url(assets/images/pat-2.png)" }}>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-development sorting-ui-ux-design ">
                                        <div class="works-item scrolla-element-anim-1 scroll-animate" data-animate="active">
                                            <div class="image">
                                                <div class="img">
                                                    <a href="work-single.html">
                                                        <img decoding="async" src="assets/images/single8.jpg"
                                                            alt="Stay Fit" />
                                                        <span class="overlay"></span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="desc">
                                                <span class="category"> Development, UI UX Design </span>
                                                <h5 class="name">
                                                    <a href="work-single.html">Stay Fit</a>
                                                </h5>
                                                <div class="text">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                        eiusmod tempor incididunt ut labore et dolore.</p>
                                                </div>
                                                <a href="work-single.html" class="lnk">See project</a>
                                            </div>
                                            <div class="bg-img" style={{ backgroundImage: "url(assets/images/pat-2.png)" }}>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-development sorting-photo ">
                                        <div class="works-item scrolla-element-anim-1 scroll-animate" data-animate="active">
                                            <div class="image">
                                                <div class="img">
                                                    <a href="work-single.html">
                                                        <img decoding="async" src="assets/images/single6.jpg" alt="Kana" />
                                                        <span class="overlay"></span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="desc">
                                                <span class="category"> Development, Photography </span>
                                                <h5 class="name">
                                                    <a href="work-single.html">Kana</a>
                                                </h5>
                                                <div class="text">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                        eiusmod tempor incididunt ut labore et dolore.</p>
                                                </div>
                                                <a href="work-single.html" class="lnk">See project</a>
                                            </div>
                                            <div class="bg-img" style={{ backgroundImage: "url(assets/images/pat-2.png)" }}>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="load-more-link">
                                    <a href="works.html" class="btn scrolla-element-anim-1 scroll-animate"
                                        data-animate="active">
                                        <span>View More</span>
                                    </a>
                                </div>
                            </div>

                            <div class="lui-bgtitle">
                                <span> Portfolio </span>
                            </div>

                        </div>
                    </div>

                </section>

                <section class="lui-section lui-gradient-bottom" id="resume-section">

                    <div class="lui-heading">
                        <div class="container">

                            <div class="m-titles align-center">
                                <h2 class="m-title splitting-text-anim-1 scroll-animate" data-splitting="words"
                                    data-animate="active">
                                    <span> Resume </span>
                                </h2>
                                <div class="m-subtitle splitting-text-anim-1 scroll-animate" data-splitting="words"
                                    data-animate="active">
                                    <span> my <b>Story</b>
                                    </span>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="v-line v-line-left">
                        <div class="container">

                            <div class="row">
                                <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">

                                    <h5 class="history-title scrolla-element-anim-1 scroll-animate" data-animate="active">
                                        <span> Education </span>
                                    </h5>
                                    <div class="history-items">
                                        <div class="history-item lui-collapse-item opened scrolla-element-anim-1 scroll-animate"
                                            data-animate="active">
                                            <h6 class="name lui-collapse-btn active">
                                                <span> CoderHouse Courses </span>
                                            </h6>
                                            <div class="history-content">
                                                <div class="subname">
                                                    <span> Backend Programming </span>
                                                </div>
                                                <div class="date lui-subtitle">
                                                    <span> 2014 - 2016 </span>
                                                </div>
                                                <div class="text">
                                                    <div>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                            eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="history-item lui-collapse-item scrolla-element-anim-1 scroll-animate"
                                            data-animate="active">
                                            <h6 class="name lui-collapse-btn">
                                                <span> Lviv National Academy of Arts </span>
                                            </h6>
                                            <div class="history-content">
                                                <div class="subname">
                                                    <span> Faculty of Design </span>
                                                </div>
                                                <div class="date lui-subtitle">
                                                    <span> 2012 - 2014 </span>
                                                </div>
                                                <div class="text">
                                                    <div>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                            eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="history-item lui-collapse-item scrolla-element-anim-1 scroll-animate"
                                            data-animate="active">
                                            <h6 class="name lui-collapse-btn">
                                                <span> IT Future </span>
                                            </h6>
                                            <div class="history-content">
                                                <div class="subname">
                                                    <span> High School </span>
                                                </div>
                                                <div class="date lui-subtitle">
                                                    <span> 2010 - 2012 </span>
                                                </div>
                                                <div class="text">
                                                    <div>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                            eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">

                                    <h5 class="history-title scrolla-element-anim-1 scroll-animate" data-animate="active">
                                        <span> Experience </span>
                                    </h5>
                                    <div class="history-items">
                                        <div class="history-item lui-collapse-item opened scrolla-element-anim-1 scroll-animate"
                                            data-animate="active">
                                            <h6 class="name lui-collapse-btn active">
                                                <span> UI Head &amp; Manager </span>
                                            </h6>
                                            <div class="history-content">
                                                <div class="subname">
                                                    <span> Soft Tech Inc. </span>
                                                </div>
                                                <div class="date lui-subtitle">
                                                    <span> 2020 - <b>Present</b>
                                                    </span>
                                                </div>
                                                <div class="text">
                                                    <div>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                            eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="history-item lui-collapse-item scrolla-element-anim-1 scroll-animate"
                                            data-animate="active">
                                            <h6 class="name lui-collapse-btn">
                                                <span> UI / UX Specialist </span>
                                            </h6>
                                            <div class="history-content">
                                                <div class="subname">
                                                    <span> Kana Design Studio </span>
                                                </div>
                                                <div class="date lui-subtitle">
                                                    <span> 2018 - 2020 </span>
                                                </div>
                                                <div class="text">
                                                    <div>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                            eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="history-item lui-collapse-item scrolla-element-anim-1 scroll-animate"
                                            data-animate="active">
                                            <h6 class="name lui-collapse-btn">
                                                <span> Plugins Developer </span>
                                            </h6>
                                            <div class="history-content">
                                                <div class="subname">
                                                    <span> Fiverr.com </span>
                                                </div>
                                                <div class="date lui-subtitle">
                                                    <span> 2016 - 2018 </span>
                                                </div>
                                                <div class="text">
                                                    <div>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                            eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div class="lui-bgtitle">
                                <span> History </span>
                            </div>

                        </div>
                    </div>

                </section>

                <section class="lui-section lui-gradient-center" id="testimonials-section">

                    <div class="lui-heading">
                        <div class="container">

                            <div class="m-titles align-center">
                                <h2 class="m-title splitting-text-anim-1 scroll-animate" data-splitting="words"
                                    data-animate="active">
                                    <span> Testimonials </span>
                                </h2>
                                <div class="m-subtitle splitting-text-anim-1 scroll-animate" data-splitting="words"
                                    data-animate="active">
                                    <span> what <b>Customers Say</b>
                                    </span>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="v-line v-line-right">
                        <div class="container">

                            <div class="swiper-container js-testimonials scrolla-element-anim-1 scroll-animate"
                                data-animate="active">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide">
                                        <div class="testimonials-item">
                                            <div class="image">
                                                <img decoding="async" src="assets/images/testi4-2.jpg" alt="Barbara Wilson" />
                                                <div class="icon">
                                                    {/* <svg xmlns="http://www.w3.org/2000/svg"
                                                        xmlns: xlink="http://www.w3.org/1999/xlink" width="44px"
                                                        height="34px">
                                                        <path fill-rule="evenodd" stroke-width="2px" stroke="rgb(0, 0, 0)"
                                                            fill="rgb(41, 165, 135)"
                                                            d="M17.360,8.325 C15.490,5.563 11.616,4.762 8.705,6.536 C6.901,7.635 5.815,9.533 5.826,11.567 C5.828,14.854 8.637,17.516 12.101,17.515 C13.290,17.513 14.456,17.192 15.460,16.587 C14.967,17.975 14.049,19.457 12.537,20.942 C11.934,21.533 11.951,22.476 12.574,23.048 C13.198,23.619 14.192,23.604 14.794,23.012 C20.384,17.515 19.658,11.539 17.360,8.333 L17.360,8.325 ZM32.407,8.325 C30.538,5.563 26.663,4.762 23.752,6.536 C21.949,7.635 20.863,9.533 20.873,11.567 C20.875,14.854 23.685,17.516 27.148,17.515 C28.338,17.513 29.503,17.192 30.508,16.587 C30.015,17.975 29.097,19.457 27.585,20.942 C26.982,21.533 26.999,22.476 27.622,23.048 C28.245,23.619 29.239,23.604 29.842,23.012 C35.432,17.515 34.706,11.539 32.407,8.333 L32.407,8.325 Z" />
                                                    </svg> */}
                                                </div>
                                            </div>
                                            <div class="text lui-text">
                                                <div>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                        eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                </div>
                                            </div>
                                            <div class="info">
                                                <h6 class="name">
                                                    <span>Barbara Wilson</span>
                                                </h6>
                                                <div class="author">
                                                    <span>CEO Company</span>
                                                </div>
                                            </div>
                                            <div class="bg-img" style={{ backgroundImage: "url(assets/images/pat-2.png)" }}>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="testimonials-item">
                                            <div class="image">
                                                <img decoding="async" src="assets/images/testi4-1.jpg" alt="Charlie Smith" />
                                                <div class="icon">
                                                    {/* <svg xmlns="http://www.w3.org/2000/svg"
                                                        xmlns: xlink="http://www.w3.org/1999/xlink" width="44px"
                                                        height="34px">
                                                        <path fill-rule="evenodd" stroke-width="2px" stroke="rgb(0, 0, 0)"
                                                            fill="rgb(41, 165, 135)"
                                                            d="M17.360,8.325 C15.490,5.563 11.616,4.762 8.705,6.536 C6.901,7.635 5.815,9.533 5.826,11.567 C5.828,14.854 8.637,17.516 12.101,17.515 C13.290,17.513 14.456,17.192 15.460,16.587 C14.967,17.975 14.049,19.457 12.537,20.942 C11.934,21.533 11.951,22.476 12.574,23.048 C13.198,23.619 14.192,23.604 14.794,23.012 C20.384,17.515 19.658,11.539 17.360,8.333 L17.360,8.325 ZM32.407,8.325 C30.538,5.563 26.663,4.762 23.752,6.536 C21.949,7.635 20.863,9.533 20.873,11.567 C20.875,14.854 23.685,17.516 27.148,17.515 C28.338,17.513 29.503,17.192 30.508,16.587 C30.015,17.975 29.097,19.457 27.585,20.942 C26.982,21.533 26.999,22.476 27.622,23.048 C28.245,23.619 29.239,23.604 29.842,23.012 C35.432,17.515 34.706,11.539 32.407,8.333 L32.407,8.325 Z" />
                                                    </svg> */}
                                                </div>
                                            </div>
                                            <div class="text lui-text">
                                                <div>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                        eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                </div>
                                            </div>
                                            <div class="info">
                                                <h6 class="name">
                                                    <span>Charlie Smith</span>
                                                </h6>
                                                <div class="author">
                                                    <span>Designer</span>
                                                </div>
                                            </div>
                                            <div class="bg-img" style={{ backgroundImage: "url(assets/images/pat-2.png)" }}>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="testimonials-item">
                                            <div class="image">
                                                <img decoding="async" src="assets/images/testi4-4.jpg" alt="Roy Wang" />
                                                <div class="icon">
                                                    {/* <svg xmlns="http://www.w3.org/2000/svg"
                                                        xmlns: xlink="http://www.w3.org/1999/xlink" width="44px"
                                                        height="34px">
                                                        <path fill-rule="evenodd" stroke-width="2px" stroke="rgb(0, 0, 0)"
                                                            fill="rgb(41, 165, 135)"
                                                            d="M17.360,8.325 C15.490,5.563 11.616,4.762 8.705,6.536 C6.901,7.635 5.815,9.533 5.826,11.567 C5.828,14.854 8.637,17.516 12.101,17.515 C13.290,17.513 14.456,17.192 15.460,16.587 C14.967,17.975 14.049,19.457 12.537,20.942 C11.934,21.533 11.951,22.476 12.574,23.048 C13.198,23.619 14.192,23.604 14.794,23.012 C20.384,17.515 19.658,11.539 17.360,8.333 L17.360,8.325 ZM32.407,8.325 C30.538,5.563 26.663,4.762 23.752,6.536 C21.949,7.635 20.863,9.533 20.873,11.567 C20.875,14.854 23.685,17.516 27.148,17.515 C28.338,17.513 29.503,17.192 30.508,16.587 C30.015,17.975 29.097,19.457 27.585,20.942 C26.982,21.533 26.999,22.476 27.622,23.048 C28.245,23.619 29.239,23.604 29.842,23.012 C35.432,17.515 34.706,11.539 32.407,8.333 L32.407,8.325 Z" />
                                                    </svg> */}
                                                </div>
                                            </div>
                                            <div class="text lui-text">
                                                <div>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                        eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                </div>
                                            </div>
                                            <div class="info">
                                                <h6 class="name">
                                                    <span>Roy Wang</span>
                                                </h6>
                                                <div class="author">
                                                    <span>Manager GYM</span>
                                                </div>
                                            </div>
                                            <div class="bg-img" style={{ backgroundImage: "url(assets/images/pat-2.png)" }}>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="testimonials-item">
                                            <div class="image">
                                                <img decoding="async" src="assets/images/testi4-3.jpg" alt="Jennifer Smith" />
                                                <div class="icon">
                                                    {/* <svg xmlns="http://www.w3.org/2000/svg"
                                                        xmlns: xlink="http://www.w3.org/1999/xlink" width="44px"
                                                        height="34px">
                                                        <path fill-rule="evenodd" stroke-width="2px" stroke="rgb(0, 0, 0)"
                                                            fill="rgb(41, 165, 135)"
                                                            d="M17.360,8.325 C15.490,5.563 11.616,4.762 8.705,6.536 C6.901,7.635 5.815,9.533 5.826,11.567 C5.828,14.854 8.637,17.516 12.101,17.515 C13.290,17.513 14.456,17.192 15.460,16.587 C14.967,17.975 14.049,19.457 12.537,20.942 C11.934,21.533 11.951,22.476 12.574,23.048 C13.198,23.619 14.192,23.604 14.794,23.012 C20.384,17.515 19.658,11.539 17.360,8.333 L17.360,8.325 ZM32.407,8.325 C30.538,5.563 26.663,4.762 23.752,6.536 C21.949,7.635 20.863,9.533 20.873,11.567 C20.875,14.854 23.685,17.516 27.148,17.515 C28.338,17.513 29.503,17.192 30.508,16.587 C30.015,17.975 29.097,19.457 27.585,20.942 C26.982,21.533 26.999,22.476 27.622,23.048 C28.245,23.619 29.239,23.604 29.842,23.012 C35.432,17.515 34.706,11.539 32.407,8.333 L32.407,8.325 Z" />
                                                    </svg> */}
                                                </div>
                                            </div>
                                            <div class="text lui-text">
                                                <div>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                        eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                </div>
                                            </div>
                                            <div class="info">
                                                <h6 class="name">
                                                    <span>Jennifer Smith</span>
                                                </h6>
                                                <div class="author">
                                                    <span>CEO &amp; Founder</span>
                                                </div>
                                            </div>
                                            <div class="bg-img" style={{ backgroundImage: "url(assets/images/pat-2.png)" }}>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="testimonials-item">
                                            <div class="image">
                                                <img decoding="async" src="assets/images/testi4-5.jpg" alt="Paul Freeman" />
                                                <div class="icon">
                                                    {/* <svg xmlns="http://www.w3.org/2000/svg"
                                                        xmlns: xlink="http://www.w3.org/1999/xlink" width="44px"
                                                        height="34px">
                                                        <path fill-rule="evenodd" stroke-width="2px" stroke="rgb(0, 0, 0)"
                                                            fill="rgb(41, 165, 135)"
                                                            d="M17.360,8.325 C15.490,5.563 11.616,4.762 8.705,6.536 C6.901,7.635 5.815,9.533 5.826,11.567 C5.828,14.854 8.637,17.516 12.101,17.515 C13.290,17.513 14.456,17.192 15.460,16.587 C14.967,17.975 14.049,19.457 12.537,20.942 C11.934,21.533 11.951,22.476 12.574,23.048 C13.198,23.619 14.192,23.604 14.794,23.012 C20.384,17.515 19.658,11.539 17.360,8.333 L17.360,8.325 ZM32.407,8.325 C30.538,5.563 26.663,4.762 23.752,6.536 C21.949,7.635 20.863,9.533 20.873,11.567 C20.875,14.854 23.685,17.516 27.148,17.515 C28.338,17.513 29.503,17.192 30.508,16.587 C30.015,17.975 29.097,19.457 27.585,20.942 C26.982,21.533 26.999,22.476 27.622,23.048 C28.245,23.619 29.239,23.604 29.842,23.012 C35.432,17.515 34.706,11.539 32.407,8.333 L32.407,8.325 Z" />
                                                    </svg> */}
                                                </div>
                                            </div>
                                            <div class="text lui-text">
                                                <div>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                        eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                </div>
                                            </div>
                                            <div class="info">
                                                <h6 class="name">
                                                    <span>Paul Freeman</span>
                                                </h6>
                                                <div class="author">
                                                    <span>Photographer</span>
                                                </div>
                                            </div>
                                            <div class="bg-img" style={{ backgroundImage: "url(assets/images/pat-2.png)" }}>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-pagination"></div>
                            </div>

                            <div class="lui-bgtitle">
                                <span> Reviews </span>
                            </div>

                        </div>
                    </div>

                </section>

                <section class="lui-section lui-gradient-center" id="pricing-section">

                    <div class="lui-heading">
                        <div class="container">

                            <div class="m-titles align-center">
                                <h2 class="m-title splitting-text-anim-1 scroll-animate" data-splitting="words"
                                    data-animate="active">
                                    <span> Pricing </span>
                                </h2>
                                <div class="m-subtitle splitting-text-anim-1 scroll-animate" data-splitting="words"
                                    data-animate="active">
                                    <span> my <b>Price Board</b>
                                    </span>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="v-line v-line-left">
                        <div class="container">

                            <div class="pricing-items row">
                                <div class="pricing-col col-xs-12 col-sm-6 col-md-6 col-lg-4">
                                    <div class="pricing-item scrolla-element-anim-1 scroll-animate" data-animate="active">
                                        <div class="lui-subtitle">
                                            <span> Hourley Basis </span>
                                        </div>
                                        <div class="icon"></div>
                                        <div class="price">
                                            <span> 39 <b>$</b>
                                            </span>
                                            <em>Hour</em>
                                        </div>
                                        <div class="lui-text">
                                            <div>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                    tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
                                                    suspendisse ultrices gravida.</p>
                                            </div>
                                        </div>
                                        <div class="list">
                                            <div>
                                                <ul>
                                                    <li>
                                                        <i class="fas fa-check"></i>Brand Design
                                                    </li>
                                                    <li>
                                                        <i class="fas fa-check"></i>Web Development
                                                    </li>
                                                    <li>
                                                        <em>Advertising</em>
                                                    </li>
                                                    <li>
                                                        <em>Photography</em>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <a href="#contact-section" class="btn btn-solid">
                                            <span>Start Project</span>
                                        </a>
                                        <div class="bg-img" style={{ backgroundImage: "url(assets/images/pat-2.png)" }}></div>
                                    </div>
                                </div>
                                <div class="pricing-col center col-xs-12 col-sm-6 col-md-6 col-lg-4">
                                    <div class="label">
                                        <span> Popular </span>
                                    </div>
                                    <div class="pricing-item scrolla-element-anim-1 scroll-animate" data-animate="active">
                                        <div class="lui-subtitle">
                                            <span> Freelancing </span>
                                        </div>
                                        <div class="icon"></div>
                                        <div class="price">
                                            <span> 259 <b>$</b>
                                            </span>
                                            <em>Week</em>
                                        </div>
                                        <div class="lui-text">
                                            <div>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                    tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
                                                    suspendisse ultrices gravida.</p>
                                            </div>
                                        </div>
                                        <div class="list">
                                            <div>
                                                <ul>
                                                    <li>
                                                        <i class="fas fa-check"></i>Brand Design
                                                    </li>
                                                    <li>
                                                        <i class="fas fa-check"></i>Web Development
                                                    </li>
                                                    <li>
                                                        <i class="fas fa-check"></i>Advertising
                                                    </li>
                                                    <li>
                                                        <em>Photography</em>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <a href="#contact-section" class="btn btn-solid">
                                            <span>Start Project</span>
                                        </a>
                                        <div class="bg-img" style={{ backgroundImage: "url(assets/images/pat-2.png)" }}></div>
                                    </div>
                                </div>
                                <div class="pricing-col col-xs-12 col-sm-6 col-md-6 col-lg-4">
                                    <div class="pricing-item scrolla-element-anim-1 scroll-animate" data-animate="active">
                                        <div class="lui-subtitle">
                                            <span> Full Time </span>
                                        </div>
                                        <div class="icon"></div>
                                        <div class="price">
                                            <span> 1.249 <b>$</b>
                                            </span>
                                            <em>Month</em>
                                        </div>
                                        <div class="lui-text">
                                            <div>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                    tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
                                                    suspendisse ultrices gravida.</p>
                                            </div>
                                        </div>
                                        <div class="list">
                                            <div>
                                                <ul>
                                                    <li>
                                                        <i class="fas fa-check"></i>Brand Design
                                                    </li>
                                                    <li>
                                                        <i class="fas fa-check"></i>Web Development
                                                    </li>
                                                    <li>
                                                        <i class="fas fa-check"></i>Advertising
                                                    </li>
                                                    <li>
                                                        <i class="fas fa-check"></i>Photography
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <a href="#contact-section" class="btn btn-solid">
                                            <span>Start Project</span>
                                        </a>
                                        <div class="bg-img" style={{ backgroundImage: "url(assets/images/pat-2.png)" }}></div>
                                    </div>
                                </div>
                            </div>

                            <div class="lui-bgtitle">
                                <span> Pricing </span>
                            </div>

                        </div>
                    </div>

                </section>

                <section class="lui-section lui-gradient-top" id="blog-section">

                    <div class="lui-heading">
                        <div class="container">

                            <div class="m-titles align-center">
                                <h2 class="m-title splitting-text-anim-1 scroll-animate" data-splitting="words"
                                    data-animate="active">
                                    <span> Latest Blog </span>
                                </h2>
                                <div class="m-subtitle splitting-text-anim-1 scroll-animate" data-splitting="words"
                                    data-animate="active">
                                    <span> my <b>Articles and Advice</b>
                                    </span>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="v-line v-line-right">
                        <div class="container">

                            <div class="blog-items row">
                                <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                    <div class="archive-item scrolla-element-anim-1 scroll-animate" data-animate="active">
                                        <div class="image">
                                            <a href="blog-single.html">
                                                <img decoding="async" src="assets/images/single7.jpg"
                                                    alt="The Main Thing For The Designer" />
                                            </a>
                                        </div>
                                        <div class="desc">
                                            <div class="category lui-subtitle">
                                                <span>October 31, 2022</span>
                                            </div>
                                            <h5 class="lui-title">
                                                <a href="blog-single.html">The Main Thing For The Designer</a>
                                            </h5>
                                            <div class="lui-text">
                                                <p>Vivamus interdum suscipit lacus. Nunc ultrices accumsan mattis. Aliquam
                                                    vel sem vel velit efficitur malesuada. Donec arcu lacus, ornare
                                                    eget&#8230; </p>
                                                <div class="readmore">
                                                    <a href="blog-single.html" class="lnk">Read more</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                    <div class="archive-item scrolla-element-anim-1 scroll-animate" data-animate="active">
                                        <div class="image">
                                            <a href="blog-single.html">
                                                <img decoding="async" src="assets/images/blog-4-scaled-1.jpg"
                                                    alt="Follow Your Own Design Process" />
                                            </a>
                                        </div>
                                        <div class="desc">
                                            <div class="category lui-subtitle">
                                                <span>October 31, 2022</span>
                                            </div>
                                            <h5 class="lui-title">
                                                <a href="blog-single.html">Follow Your Own Design Process</a>
                                            </h5>
                                            <div class="lui-text">
                                                <p>Vivamus interdum suscipit lacus. Nunc ultrices accumsan mattis. Aliquam
                                                    vel sem vel velit efficitur malesuada. Donec arcu lacus, ornare
                                                    eget&#8230; </p>
                                                <div class="readmore">
                                                    <a href="blog-single.html" class="lnk">Read more</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                    <div class="archive-item scrolla-element-anim-1 scroll-animate" data-animate="active">
                                        <div class="image">
                                            <a href="blog-single.html">
                                                <img decoding="async" src="assets/images/blog-2.jpg"
                                                    alt="Usability Secrets to Create Better Interfaces" />
                                            </a>
                                        </div>
                                        <div class="desc">
                                            <div class="category lui-subtitle">
                                                <span>November 28, 2021</span>
                                            </div>
                                            <h5 class="lui-title">
                                                <a href="blog-single.html">Usability Secrets to Create Better Interfaces</a>
                                            </h5>
                                            <div class="lui-text">
                                                <p>Vivamus interdum suscipit lacus. Nunc ultrices accumsan mattis. Aliquam
                                                    vel sem vel velit efficitur malesuada. Donec arcu lacus, ornare
                                                    eget&#8230; </p>
                                                <div class="readmore">
                                                    <a href="blog-single.html" class="lnk">Read more</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="load-more">
                                <a href="blog.html" class="btn scrolla-element-anim-1 scroll-animate" data-animate="active">
                                    <span>View Blog</span>
                                </a>
                            </div>

                            <div class="lui-bgtitle">
                                <span> Blog </span>
                            </div>

                        </div>
                    </div>

                </section>

                <section class="lui-section lui-gradient-bottom" id="contact-section">

                    <div class="lui-heading">
                        <div class="container">

                            <div class="m-titles align-center">
                                <h2 class="m-title splitting-text-anim-1 scroll-animate" data-splitting="words"
                                    data-animate="active">
                                    <span> Contact Me </span>
                                </h2>
                                <div class="m-subtitle splitting-text-anim-1 scroll-animate" data-splitting="words"
                                    data-animate="active">
                                    <span> Let’s <b>Talk About Ideas</b>
                                    </span>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="lui-contacts v-line v-line-left">
                        <div class="container">

                            <div class="row">
                                <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5">

                                    <div class="numbers-items">
                                        <div class="numbers-item scrolla-element-anim-1 scroll-animate"
                                            data-animate="active">
                                            <div class="icon">
                                                <i aria-hidden="true" class="far fa-map"></i>
                                            </div>
                                            <div class="title">
                                                <span> Address </span>
                                            </div>
                                            <div class="lui-text">
                                                <span> North Tower, Toronto, Canada </span>
                                            </div>
                                        </div>
                                        <div class="numbers-item scrolla-element-anim-1 scroll-animate"
                                            data-animate="active">
                                            <div class="icon">
                                                <i aria-hidden="true" class="far fa-user"></i>
                                            </div>
                                            <div class="title">
                                                <span> Freelance </span>
                                            </div>
                                            <div class="lui-text">
                                                <span> Available Right Now </span>
                                            </div>
                                        </div>
                                        <div class="numbers-item scrolla-element-anim-1 scroll-animate"
                                            data-animate="active">
                                            <div class="icon">
                                                <i aria-hidden="true" class="far fa-envelope"></i>
                                            </div>
                                            <div class="title">
                                                <span> Email </span>
                                            </div>
                                            <div class="lui-text">
                                                <span> zoe.miller@mydomain.com </span>
                                            </div>
                                        </div>
                                        <div class="numbers-item scrolla-element-anim-1 scroll-animate"
                                            data-animate="active">
                                            <div class="icon">
                                                <i aria-hidden="true" class="far fa-address-book"></i>
                                            </div>
                                            <div class="title">
                                                <span> Phone </span>
                                            </div>
                                            <div class="lui-text">
                                                <span> +1 900 - 900 - 9000 </span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div class="col-xs-12 col-sm-12 col-md-7 col-lg-7">

                                    <div class="contacts-form scrolla-element-anim-1 scroll-animate" data-animate="active">
                                        <div class="bg-img" style={{ backgroundImage: "url(assets/images/pat-1.png)" }}></div>
                                        <div class="contacts-form">
                                            <form id="cform" method="post">
                                                <div class="row">
                                                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                                        <div class="group">
                                                            <label>
                                                                Your Full Name <b>*</b>
                                                                <input type="text" name="name" />
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                                        <div class="group">
                                                            <label>
                                                                Your Email Address <b>*</b>
                                                                <input type="email" name="email" />
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                        <div class="group">
                                                            <label>
                                                                Your Subject <b>*</b>
                                                                <input type="text" name="subject" />
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                        <div class="group">
                                                            <label>
                                                                Your Message <b>*</b>
                                                                <textarea name="message"></textarea>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 align-right">
                                                        <div class="terms-label">* Accept the terms and conditions.</div>
                                                        <a href="#" class="btn"
                                                            onclick="$('#cform').submit(); return false;">
                                                            <span>Send Message</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </form>
                                            <div class="alert-success" style={{ display: "none" }}>
                                                <p>Thanks, your message is sent successfully.</p>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>

                            <div class="lui-bgtitle">
                                <span> Contact Me </span>
                            </div>

                        </div>
                    </div>

                </section>

            </div>
        </Layout>
    )
}
