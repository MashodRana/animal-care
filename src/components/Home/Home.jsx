import React, { useEffect, useState } from "react";
import useServices from "../../hooks/useServices";
import ServiceCard from "../ServiceCard/ServiceCard";
import './Home.css'

const Home = () => {
    // const [demoServices, setDemoServices] = useState([]);
    const [demoServices, setDemoServices] = useState([]);
    useEffect(() => {
        // const url = "https://mashodrana.github.io/json-data/services.json";
        const url = 'services.json'
        fetch(url)
            .then(result => result.json())
            .then(data => {
                setDemoServices(data);
            })
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
                    <div>
                        <h2>What People Says</h2>
                    </div>
                    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="..." class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src="..." class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src="..." class="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;