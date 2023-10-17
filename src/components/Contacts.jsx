import PlaceIcon from "@mui/icons-material/Place";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";

const Contacts = () => {
  return (
    <div id="contacts" className="contacts">
      <h1 className="h1">Contact us</h1>
      <div className="container">
        <div className="address">
          <div>
            <PlaceIcon className="icon" />
            <h2>Address:</h2>
          </div>
          <p>
            Abadi Bhattian Post Office Same, Tehsil Jaranwala, District
            Faisalabad 37000
          </p>
        </div>
        <div className="phone">
          <div>
            <LocalPhoneIcon className="icon" />
            <h2>Phone:</h2>
          </div>
          <p>+92 3268821210</p>
          <p>+92 3424488335</p>
        </div>
        <div className="email">
          <div>
            <EmailIcon className="icon" />
            <h2>Email:</h2>
          </div>
          <p>hassaamfreelancing2@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
