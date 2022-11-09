import React from 'react';

const About = () => {
  return (
    <div>
      <h3>About</h3>
      <h4>
        Welcome to cat paradise, where you can learn more about any cat breed
      </h4>
      <p>
        Notice: Some API endpoints does not work due to API provider, for
        example American Bobtail, American Curl, Shorthair, Australian Mist ...,
        otherwise, the rest works like a charm. If you had any problem accessing
        an endpoint, please try another one!
      </p>

      <hr />
      <h5>If you have any question, please feel free to contact me via:</h5>
      <p>Gmail: cuongvu3009@gmail.com</p>
      <p>Phone: +358465339075</p>
      <p>
        Linkedin:
        <a href='https://www.linkedin.com/in/cuong-vu-duc/'>
          https://www.linkedin.com/in/cuong-vu-duc/
        </a>{' '}
      </p>
    </div>
  );
};

export default About;
