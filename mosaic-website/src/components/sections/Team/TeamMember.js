function TeamMember(props) {
  const email = "mailto:" + props.item.email;

  return (
    <div className="team-member-item">
      {/* Flip Container */}
      <div className="image-wrapper flip-container">
        <div className="flipper">
          {/* Front Side */}
          <div className="front">
            <img src={props.item.photo} className="member-photo" alt={`${props.item.name}`} />
          </div>
          {/* Back Side */}
          <div className="back">
            <img src={props.item.flipPhoto} className="member-photo" alt={`${props.item.name} (Flip)`} />
          </div>
        </div>
      </div>
      {/* Member Info */}
      <div className="team-member-info">
        <div className="team-member-name">
          <div
            className="highlight-name"
            style={{ backgroundColor: props.item.color }}
          ></div>
          <h3>{props.item.name}</h3>
        </div>
        <p className="team-member-position">
          <strong>{props.item.position} | {props.item.year}'</strong>
        </p>
        <p className="team-member-bio">{props.item.bio}</p>
        <ul className="social-icons">
          <li>
            <a href={email} target="_blank" rel="noreferrer">
              <span className="icon">
                <svg
                  version="1.1"
                  viewBox="0 0 512 512"
                  className="icon_svg"
                >
                  <g>
                    <g>
                      <path
                        d="M496.327,127.091l-15.673,9.613L281.83,258.623c-7.983,4.859-16.917,7.293-25.84,7.293s-17.826-2.424-25.778-7.262
			l-0.136-0.084L31.347,134.771l-15.673-9.759L0,115.242v302.717h512V117.488L496.327,127.091z"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path
                        d="M25.245,94.041l25.161,15.673l25.161,15.673l171.008,106.527c5.841,3.521,13.082,3.511,18.913-0.042l173.652-106.486
			l25.558-15.673l25.558-15.673H25.245z"
                      />
                    </g>
                  </g>
                </svg>
              </span>
            </a>
          </li>
          <li>
            <a
              href={props.item.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <span className="icon">
                <svg
                  version="1.1"
                  id="linkedin-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 310 310"
                  className="icon_svg"
                >
                  <g id="XMLID_801_">
                    <path
                      id="XMLID_802_"
                      d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73
		C77.16,101.969,74.922,99.73,72.16,99.73z"
                    />
                    <path
                      id="XMLID_803_"
                      d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4
		c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"
                    />
                  </g>
                </svg>
              </span>
            </a>
          </li>
          <li>
            <a
              href={props.item.github}
              target="_blank"
              rel="noreferrer"
            >
              <span className="icon">
                <svg
                  id="github-icon"
                  viewBox="0 0 32 32"
                  className="icon_svg"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z" />
                </svg>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TeamMember;
