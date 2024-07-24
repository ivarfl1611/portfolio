import "./ProfileHeader.css";
import PropTypes from "prop-types";
import Image from "next/image";
import defaltImage from "./ProfileIcon/stormtrooper.png";
const ProfileHeader = ({ imageUrl, name, bio, linkedinUrl }) => {
  // const defaultImageUrl = "/src/components/ProfileHeader/ProfileIcon/stormtrooper.png";
  return (
    <div className="profile-header">
      <Image className="profile-icon" src={imageUrl || defaltImage} alt="Profile Icon" width={400} height={400} />
      <div className="profile-details"></div>
      <h1 className="home-head-title">{name}</h1>
      <p className="home-description">{bio}</p>
      <div className="social-links">
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        {}
      </div>
    </div>
  );
};

ProfileHeader.propTypes = {
  imageUrl: PropTypes.string,
  name: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  linkedinUrl: PropTypes.string.isRequired,
};

export default ProfileHeader;
