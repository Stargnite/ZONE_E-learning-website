import Img from '@/images/newsletter-img.svg';
import Image from 'next/image';

const RegisterDiscount = () => {
  return (
    <div>
      <div className="">
        <section>
          <h1>Register Now Forget 20% Discount Every Courses</h1>
          <p>
            Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus.
            Sed magna purus, fermentum eu
          </p>
		  <form action="" method="post" name="registerForm">
			<input type="hidden" value="" placeholder="Enter your Email" />
			<button>Register</button>
		  </form>
        </section>
      </div>

	  <Image src={Img} alt="" />
    </div>
  );
};

export default RegisterDiscount;
