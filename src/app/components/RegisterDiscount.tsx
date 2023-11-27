import Img from "@/images/newsletter-img.svg";
import Image from "next/image";

const RegisterDiscount = () => {
  return (
    <div className="py-0 px-0 md:py-10 md:px-40">
      <div className="bg-light_primary flex flex-col-reverse lg:flex-row  rounded-3xl items-center p-8 justify-around">
        <div className="text-center">
          <section className="max-w-md">
            <h1 className="text-2xl md:text-3xl font-extrabold mb-5">
              Register Now Forget 20% Discount Every Courses
            </h1>
            <p className="">
              Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus.
              Sed magna purus, fermentum eu
            </p>
            <form
              action=""
              method="post"
              name="registerForm"
              className="bg-white mt-10 bg-slate-50 flex justify-between rounded-md  p-1"
            >
              <input
                type="email"
                placeholder="Enter your Email"
                className="focus:outline-none"
              />
              <button className="p-3 bg-primary text-white rounded-md">
                Register
              </button>
            </form>
          </section>
        </div>

        <Image src={Img} alt="" className="w-2/5 md:w-auto mb-5 lg:mb-0" />
      </div>
    </div>
  );
};

export default RegisterDiscount;
