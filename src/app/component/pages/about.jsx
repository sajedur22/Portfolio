import React from 'react';


const about = () => {
    return (
        <section className="container py-5">
      <h2 className="text-center mb-4">About Me</h2>
      <div className="row align-items-center">
        <div className="col-md-4 text-center mb-4 mb-md-0">
          <img
            src="/images/profile.png"
            alt="Profile"
            className="profile-photo"
            style={{ maxWidth: '200px' }}
          />
        </div>
        <div className="col-md-8">
          <p>
            Hello! I'm <strong>Sajedur Rahman Shakil</strong>, a passionate full-stack developer with expertise in building responsive, user-friendly web applications.
            I enjoy solving real-world problems using modern web technologies like <strong>JavaScript</strong>, <strong>React.js</strong>,<strong>Next.js</strong><strong>,Node.js</strong>,<strong>Express.js </strong>,<strong>MongoDB</strong>.
          </p>
          <p>
            With a strong foundation in JavaScript and a keen eye for clean design, I strive to create elegant and maintainable code. Whether working solo or in a team,
            I am committed to delivering high-quality products that meet user needs.
          </p>
          <p>
            Feel free to explore my projects or reach out — I’m always open to exciting opportunities and collaborations!
          </p>
        </div>
      </div>
    </section>
    );
};

export default about;