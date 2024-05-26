import Title from "@/components/reusable/Title";
import ServiceCard from "./ServicesCard";

const ServicesSection: React.FunctionComponent = () => {
    const serviceCards = [
        {
            number: "01",
            title: "Emergency Services",
            description: "Access our emergency services for urgent medical assistance anytime, anywhere.",
            imageUrl: "https://images.pexels.com/photos/8460349/pexels-photo-8460349.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            buttonText: "Read More",
        },
        {
            number: "02",
            title: "Medical Consultation",
            description: "Consult with our experienced medical professionals for personalized health advice.",
            imageUrl: "https://images.pexels.com/photos/5340269/pexels-photo-5340269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            buttonText: "Read More",
        },
        {
            number: "03",
            title: "Health Check",
            description: "Get regular health checks to ensure your well-being and catch any potential issues early.",
            imageUrl: "https://images.pexels.com/photos/5327865/pexels-photo-5327865.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            buttonText: "Read More",
        },
        {
            number: "04",
            title: "Blood Donation",
            description: "Join us and make a difference by donating blood to those in need.",
            imageUrl: "https://images.pexels.com/photos/6823567/pexels-photo-6823567.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&dpr=1",
            buttonText: "Read More",
        },
    ];

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <Title firstTitle="What we do" secondTitle="our best services" />


                {serviceCards.map((service, index) => (
                    <ServiceCard
                        key={index}
                        number={Number(service.number)}
                        title={service.title}
                        description={service.description}
                        imageUrl={service.imageUrl}
                        buttonText={service.buttonText}
                    />
                ))}
            </div>
        </section>
    );
};

export default ServicesSection;