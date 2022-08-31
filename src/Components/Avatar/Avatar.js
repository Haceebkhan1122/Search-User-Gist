import axios from "axios";
import React, { useEffect, useState } from "react";

const Avatar = ({ gistId }) => {
  const [avatars, setAvatars] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.github.com/gists/${gistId}/forks`, {
        params: { per_page: 3 },
      })
      .then(({ data }) => {
        const avatars = data.map(({ html_url, owner }) => {
          return { gistForkUrl: html_url, avatarUrl: owner.avatar_url };
        });
        setAvatars(avatars);
      });
  }, [gistId]);

  return (
    <>
      {avatars.length ? (
        <div className="avatars">
          <div className="avatar_item">
            {avatars.map((avatar) => {
              return (
                <a
                  key={avatar.gistForkUrl}
                  target="blank"
                  href={avatar.gistForkUrl}
                >
                  <img src={avatar.avatarUrl} alt="avatar" />
                </a>
              );
            })}
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Avatar;
