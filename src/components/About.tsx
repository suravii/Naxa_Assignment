
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="container mx-auto max-w-screen-lg py-8 px-4 md:px-8">
      <h2 className="text-lg font-semibold text-custom-orange uppercase mb-4 font-montserrat">
        Services
      </h2>
      <div className="max-w-[960px]">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-normal font-montserrat text-gray-900 mb-6 leading-snug md:leading-tight">
          At{' '}
          <Link to="/" className="text-blue-600" aria-label="Go to NAXA homepage">
            NAXA
          </Link>
          , we work on <span className="text-blue-600">ideas</span>; ideas that can provide{' '}
          <span className="text-blue-600">simple solutions</span> to{' '}
          <span className="text-blue-600">complex problems</span>.
        </h1>
      </div>
      <div className="max-w-[750px]">
      <p className="text-base md:text-lg font-medium font-montserrat text-gray-700 leading-relaxed">
          We work as a team to generate, explore, build, and validate ideas. We also contextualize
          innovations around the world to find the best fitting solutions to local problems.
        </p>
      </div>
    </section>
  );
};

export default About;
