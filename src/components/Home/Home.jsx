import React from "react";
import useServices from "../../hooks/useServices";
import ServiceCard from "../ServiceCard/ServiceCard";
import './Home.css'

const Home = () => {
    // const [demoServices, setDemoServices] = useState([]);
    const demoServices = useServices();
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
                        <div className="col-6">
                            <h2>Services</h2>
                            <h5>We ensure Best care through our services.</h5>
                            <p>
                                We are very much careful about your pet and we try to give our best for your pets.
                                We understand that at some point your work schedule, or daily routine won’t allow you to stay for your pets physical examination, and diagnostics. We offer a convenient drop off policy that allows you to drop off your pet during the day and pick up at your earliest convenience.
                            </p>
                        </div>
                        <div className="col-6">
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
        </>
    );
};

export default Home;