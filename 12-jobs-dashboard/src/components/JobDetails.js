import defaultImage from "../default.png";

export default function JobDetails({ content }) {
  return (
    <div className="job-details">
      {content.featured ? <p className="featured-job">Featured</p> : null}
      <h2 className="heading-2">
        {" "}
        <img
          src={`${content.image ? content.image : defaultImage}`}
          alt={content.company}
          className="company-img"
        />
        {content.title}
      </h2>
      <span className="salary">
        {content.salary} &middot; {content.location} &middot; {content.type}{" "}
        &middot; {content.applicants} applicants
      </span>

      <p className="about">{content.about}</p>

      <div>
        <h3 style={{ marginTop: 24 }}>Responsibilities</h3>
        <ol>
          {content.responsibilities.map((resp, index) => (
            <li key={index} className="about">
              {resp}
            </li>
          ))}
        </ol>
      </div>

      <div>
        <h3 style={{ marginTop: 24 }}>Qualifications</h3>
        <ol>
          {content.qualifications.map((qual, index) => (
            <li key={index} className="about">
              {qual}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
