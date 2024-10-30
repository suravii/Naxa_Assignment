import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { fetchServices } from '../servicesSlice';
import './Services.css';
import './ServiceNew.css';

interface Service {
  id: number;
  title: string;
  description1: string;
  description2: string;
  photo: string;
  icon: string;
  service_order: number;
}

const Services = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { services, status, error } = useSelector((state: RootState) => state.services);

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  // Sort services by `service_order`
  const sortedServices = [...services].sort((a, b) => a.service_order - b.service_order);

  return (
    <div className="outer-container">
      <div className="container mx-auto px-4 md:px-16 py-8 mt-8 grid gap-8">
        {sortedServices.map((service: Service) => {
          // Determine layout for each service based on ID
          const isImageLeft = [1, 2, 3, 5].includes(service.id); // Image left for these IDs
          const imagePositionClass = isImageLeft ? "md:flex-row" : "md:flex-row-reverse"; // Flex direction for larger screens

          return (
            <div key={service.id} className={`service-card ${imagePositionClass} flex flex-col items-center text-center md:text-left`}>
              {/* Image Section */}
              <div className="service-image mb-4 md:mb-0">
                <img 
                  src={service.icon} 
                  alt={`${service.title} icon`} 
                  className={`service-icon ${service.id === 4 ? 'max-h-[1000px]' : 'max-h-[600px]'}`}
                />
              </div>

              {/* Icon, Title, and Text Section */}
              <div className="service-content">
                <div className="service-header mb-2">
                  <img src={service.photo} alt={`${service.title} image`} className="object-cover" />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <div className="service-descriptions">
                  <p className="service-description_h" dangerouslySetInnerHTML={{ __html: service.description1 }} />
                  <br />
                  <p className="service-description" dangerouslySetInnerHTML={{ __html: service.description2 }} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
