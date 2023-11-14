import React from "react";
import styles from "../../styles/styles";

const Sponsored = () => {
  return (
    <div
      className={`${styles.section} hidden sm:block bg-white py-10 px-5 mb-12 cursor-pointer rounded-xl`}
    >
      <div className="flex justify-between w-full">
        <div className="flex items-start">
          <img
            src="https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png"
            alt=""
            style={{width:"120px", objectFit:"fill"}}
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://findvectorlogo.com/wp-content/uploads/2020/07/sourceforge-vector-logo.png"
            style={{width:"200px", objectFit:"fill"}}
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://download.logo.wine/logo/Bitbucket/Bitbucket-Logo.wine.png"
            style={{width:"200px", objectFit:"fill"}}
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Codeberg_Logo.svg/800px-Codeberg_Logo.svg.png"
            style={{width:"100px", objectFit:"fill"}}
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://logos-world.net/wp-content/uploads/2020/10/WordPress-Logo.png"
            style={{width:"150px", objectFit:"contain"}}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsored;
