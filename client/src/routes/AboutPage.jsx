
const AboutPage = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-900">About Us</h2>
          <p className="mt-4 text-lg text-gray-600">
            We are a passionate team dedicated to delivering innovative
            solutions that make a difference.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col items-center text-center">
            <img
              className="w-32 h-32 rounded-full object-cover"
              src="https://via.placeholder.com/150"
              alt="Founder"
            />
            <h3 className="mt-4 text-xl font-semibold text-gray-800">
              John Doe
            </h3>
            <p className="mt-2 text-gray-600">Founder & CEO</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <img
              className="w-32 h-32 rounded-full object-cover"
              src="https://via.placeholder.com/150"
              alt="Team Member"
            />
            <h3 className="mt-4 text-xl font-semibold text-gray-800">
              Jane Smith
            </h3>
            <p className="mt-2 text-gray-600">Lead Developer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
