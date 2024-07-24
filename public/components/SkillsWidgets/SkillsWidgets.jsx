import PropTypes from "prop-types";
import "./SkillsWidgets.css";
import Image from "next/image";

const SkillsWidget = ({ title, content, skills }) => {
  return (
    <section data-testid="skillsWidget" className="skills-widget">
      <h2 data-testid="skillsWidgetTitle">{title}</h2>
      <p data-testid="skillsWidgetContent">{content}</p>
      <ul>
        {skills.map((item, index) => (
          <li key={index} data-testid={`skillsWidgetItem${index}`}>
            <div className="work-item">
              <div className="work-item-icon">
                <Image
                  data-testid={`skillsWidgetItemLogo${index}`}
                  src={item.icon}
                  alt={`${item.name} Icon`}
                  width={52}
                  height={52}
                />
              </div>
              <div className="setItemWork">
                <h3 data-testid={`skillsWidgetItemName${index}`} className="work-item-title">
                  {item.name}
                </h3>
                <div className="work-item-content-details">
                  <div className="work-item-proficiency">
                    <div
                      data-testid={`skillsWidgetItemProficiency${index}`}
                      className="proficiency-bar"
                      style={{ width: `${item.proficiency}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

SkillsWidget.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      proficiency: PropTypes.number.isRequired,
    })
  ),
};

SkillsWidget.defaultProps = {
  skills: [],
};

export default SkillsWidget;
