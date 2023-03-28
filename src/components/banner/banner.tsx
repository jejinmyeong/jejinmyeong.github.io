import { banner } from "assets/images";

const Banner: React.FC = () => {
  return (
    <div>
      <img className='w-full h-72 object-cover' alt='banner' src={banner} />
    </div>
  );
};

export default Banner;