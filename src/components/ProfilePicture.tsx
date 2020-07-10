import React from "react";
import picture from "./profile_zoomed.png";

const ProfilePicture: React.FC = () => {
  return (
    <div>
      <svg
        preserveAspectRatio="xMidYMid meet"
        height="50"
        width="50"
        viewBox="0 0 100 100"
      >
        <defs>
          <pattern
            id="pattern3"
            height="100%"
            width="100%"
            patternContentUnits="objectBoundingBox"
            viewBox="0 0 1 1"
            preserveAspectRatio="xMidYMid slice"
          >
            <image
              height="1"
              width="1"
              preserveAspectRatio="xMidYMid slice"
              xlinkHref={picture}
            />
          </pattern>
        </defs>
        <path
          fill="url(#pattern3)"
          height="100%"
          width="100%"
          d=" M 92.953 75.797 C 89.016 90.563 72.063 97.875 49.641 98.016 C 27.219 98.156 13.7 96.307 5.203 79.313 C -3.294 62.318 7.172 39.234 17.297 25.031 C 27.422 10.828 53.297 -2.109 70.594 2.813 C 87.891 7.734 93.234 24.469 94.5 40.641 C 95.766 56.813 96.891 61.031 92.953 75.797 Z "
        />
      </svg>
    </div>
  );
};

export default ProfilePicture;
