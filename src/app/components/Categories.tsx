import { Barlow } from 'next/font/google'
 
const barlow = Barlow({
  weight: '700',
  subsets: ['latin'],
  display: 'swap',
})

const Categories = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between px-7 md:px-24 py-14 my-10 bg-slate-100">
      <div className="md:pr-5 flex flex-col items-center md:items-start md:text-start text-center">
        <h1 className={`text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 ${barlow.className}`}>
          Featured <br className="hidden md:block font-extrabold" /> Category
        </h1>
        <p className="w-80 text-gray-600 px-3">
          Since wire-frame renderings are relatively simple and fast to
          calculate, they are often used in cases
        </p>
        <button className="border bg-primary py-2 px-3 my-12 text-white rounded-md">
          Explore more
        </button>
      </div>

      <div className="cards flex flex-wrap justify-center lg:grid md:gap-4 md:grid-cols-3 md:grid-rows-3">
        <div className="card rounded-md border hover:text-primary hover:shadow-md p-5 h-24 mb-4 mr-3">
          <h3 className="font-bold pb-2">Python</h3>
          <p className="text-gray-500 whitespace-nowrap">28,965,389 students</p>
        </div>

        <div className="card rounded-md border hover:text-primary hover:shadow-md p-5 h-24 mb-4 mr-3">
          <h3 className="font-bold pb-2">Management</h3>
          <p className="text-gray-500 whitespace-nowrap">28,965,389 students</p>
        </div>

        <div className="card rounded-md border hover:text-primary hover:shadow-md p-5 h-24 mb-4 mr-3">
          <h3 className="font-bold pb-2 whitespace-nowrap">Web development</h3>
          <p className="text-gray-500 whitespace-nowrap">28,965,389 students</p>
        </div>

        <div className="card rounded-md border hover:text-primary hover:shadow-md p-5 h-24 mb-4 mr-3">
          <h3 className="font-bold pb-2">Photoshop</h3>
          <p className="text-gray-500 whitespace-nowrap">28,965,389 students</p>
        </div>

        <div className="card rounded-md border hover:text-primary hover:shadow-md p-5 h-24 mb-4 mr-3">
          <h3 className="font-bold pb-2 whitespace-nowrap">Machine Learning</h3>
          <p className="text-gray-500 whitespace-nowrap">28,965,389 students</p>
        </div>

        <div className="card rounded-md border hover:text-primary hover:shadow-md p-5 h-24 mb-4 mr-3">
          <h3 className="font-bold pb-2">Cyber Security</h3>
          <p className="text-gray-500 whitespace-nowrap">28,965,389 students</p>
        </div>

        <div className="card rounded-md border hover:text-primary hover:shadow-md p-5 h-24 mb-4 mr-3">
          <h3 className="font-bold pb-2">Marketing</h3>
          <p className="text-gray-500 whitespace-nowrap">28,965,389 students</p>
        </div>

        <div className="card rounded-md border hover:text-primary hover:shadow-md p-5 h-24 mb-4 mr-3">
          <h3 className="font-bold pb-2 whitespace-nowrap">Machine Learning</h3>
          <p className="text-gray-500 whitespace-nowrap">28,965,389 students</p>
        </div>

        <div className="card rounded-md border hover:text-primary hover:shadow-md p-5 h-24 mb-4 mr-3">
          <h3 className="font-bold pb-2">UX design</h3>
          <p className="text-gray-500 whitespace-nowrap">28,965,389 students</p>
        </div>

      </div>
    </div>
  );
};

export default Categories;
