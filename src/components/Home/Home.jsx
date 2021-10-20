import React, { useEffect, useState } from "react";
import useServices from "../../hooks/useServices";
import ServiceCard from "../ServiceCard/ServiceCard";
import SliderItem from "../SliderItem/SliderItem";
import './Home.css'

const Home = () => {
    const [demoServices, setDemoServices] = useState([]);
    // const demoServices = useServices();
    const [reviews, setReviews] = useState(null);
    useEffect(() => {
        const url = "https://mashodrana.github.io/json-data-api/services.json";
        // const url = 'services.json'
        fetch(url)
            .then(result => result.json())
            .then(data => {
                setDemoServices(data);
            })
    }, [])

    useEffect(() => {
        const url = 'reviews.json';
        // const url = "https://gist.githubusercontent.com/MashodRana/1bfbfb36faa866ad6bf1057ac3eca4ae/raw/67ab5f4b7c78a7da99c06b58d90c0bb688c471ba/reviews.json"
        fetch(url)
            .then(res => res.json())
            .then(data => setReviews(data))
            .catch(error => console.log(error.message));
    }, [])

    return (
        <>
            <div className="intro-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col">
                            <h2><span>Best Care</span> <br /> for your <span>Pets</span></h2>
                            <p>
                                Your beloved one deserve excellent care. We are always fully focused on helping your pet and you to overcame any hurdle. Love is the best medicine.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="demo-services my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-5">
                            <h2 className="fs-1">Services</h2>
                            <h5>We ensure <span className="custom-color-1">best care</span> through our services.</h5>
                            <p className="w-75">
                                We are very much careful about your pet and we try to give our best for your pets.
                                We understand that at some point your work schedule, or daily routine won’t allow you to stay for your pets physical examination, and diagnostics. We offer a convenient drop off policy that allows you to drop off your pet during the day and pick up at your earliest convenience.
                            </p>
                        </div>
                        <div className="col-7">
                            <div className="row">
                                {demoServices.length && demoServices.map(demoService => <ServiceCard
                                    key={demoService.id}
                                    title={demoService.service_title}
                                    _id={demoService.id}
                                    image={demoService.icon}
                                ></ServiceCard>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="reason-section my-5 pt-2 px-2">
                <div className="container mt-3">
                    <div className="row">
                        <div className="col left-side">

                            <h2 className="fs-1 mt-md-5 mt-2">
                                <span className="custom-color-1">We</span> are <span className="custom-color-1">Different</span>
                            </h2>
                            <p className="w-75">
                                Animal Care is an animal clinic designed around you and your pet.
                                Because that’s how we think pet care should work.
                            </p>
                        </div>
                        <div className="col mt-md-5 mt-3">
                            <div className="d-flex ">
                                <h1 className="fs-md-2 text-warning"><i class="fas fa-hand-point-right"></i></h1>
                                <div className="ms-md-5 ms-sm-2">
                                    <h6>Easy Appointments</h6>
                                    <p>A friendly place to bring your pet for urgent care.</p>
                                </div>

                            </div>
                            <div className="d-flex ">
                                <h1 className="fs-md-2 text-warning"><i class="fas fa-hand-point-right"></i></h1>
                                <div className="ms-md-5 ms-sm-2">
                                    <h6>Convenient Hours</h6>
                                    <p>We’re open 10am – 8pm every day, even holidays.</p>
                                </div>
                            </div>
                            <div className="d-flex ">
                                <h1 className="fs-md-2 text-warning"><i class="fas fa-hand-point-right"></i></h1>

                                <div className="ms-md-5 ms-sm-2">
                                    <h6>Virtual Visits
                                    </h6>
                                    <p>Chat with our vets online. Book A Telehealth Visit.</p>
                                </div>
                            </div>
                            <div className="d-flex ">
                                <h1 className="fs-md-2 text-warning"><i class="fas fa-hand-point-right"></i></h1>

                                <div className="ms-md-5 ms-sm-2">
                                    <h6>Compassionate Vets</h6>
                                    <p>We provide top-notch
                                        care for your furry BFFs.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="reviews-section my-5">
                <div className="container">
                    <div className="text-center">
                        <h2>What <span className="custom-color-1">People</span> Says</h2>
                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-6 col-md-8 col-sm-10 col-12 mx-auto">
                            <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                                <div class="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>
                                <div class="carousel-inner">
                                    <div class="carousel-item active" data-bs-interval="10000">
                                        <div className="row">
                                            <div className="col-5">
                                                <img src={reviews && reviews[0].image} alt="..." />
                                            </div>
                                            <div className="col-7">
                                                <div>
                                                    <h5>{reviews && reviews[0].name}</h5>
                                                    <p>{reviews && reviews[0].review}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item" data-bs-interval="2000">
                                        <div className="row">
                                            <div className="col-5">
                                                <img src={reviews && reviews[1].image} alt="..." />
                                            </div>
                                            <div className="col-7">
                                                <div >
                                                    <h5>{reviews && reviews[1].name}</h5>
                                                    <p>{reviews && reviews[1].review}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div className="row">
                                            <div className="col-5">
                                                <img src={reviews && reviews[2].image} alt="..." />
                                            </div>
                                            <div className="col-7">
                                                <div >
                                                    <h5>{reviews && reviews[2].name}</h5>
                                                    <p>{reviews && reviews[2].review}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;