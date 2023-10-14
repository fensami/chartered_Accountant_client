import { Link } from "react-router-dom";
import facebook from "../../assets/facebook.png";
import linkedIn from "../../assets/linkedin.png";
import whatsapp from "../../assets/whatapp.png";
import instagram from "../../assets/instagram.png";
const FooterLogo = () => {
  return (
    <>
      <div className="md:flex justify-between mx-10">
        <p>
          Sambhaji Nagar, No2, St. Antony Road, Chembur, Mumbai - 400071,
          Maharashtra
        </p>

        <div className="flex gap-5 md:mt-0 mt-5">
          <Link>
            <img src={facebook} alt="" />
          </Link>
          <Link>
            <img src={whatsapp} alt="" />
          </Link>
          <Link>
            <img src={linkedIn} alt="" />
          </Link>
          <Link>
            <img src={instagram} alt="" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default FooterLogo;
