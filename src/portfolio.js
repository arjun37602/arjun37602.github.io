/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Arjun Balaji",
  title: "Welcome to Arjun's website!",
  subTitle: emoji(
    "A passionate highschooler with a strong interest and background in technology 🚀 Worked with several coding languages, clubs, non-profits, universties, and companies over the last few years 🖥"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/arjun37602",
  linkedin: "https://www.linkedin.com/in/arjun-balaji/",
  gmail: "arjun37602@gmail.com",
  instagram: "https://www.instagram.com/",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Enthustiastic, passionate high school student with a strong background in technology, entrepreneurship, communication, and graphic design",
  skills: [
    emoji(
      "⚡ Develop and design high-quality websites and mobile applications using react, html/css, java, javascript, python"
    ),
    emoji("⚡ Strong leadership, critical thinking, and communication skills through real-world experience"),
    emoji(
      "⚡ Skilled at predicting, modelling, and analyzing data using machine learning in an accurate manner"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fab fa-cuttlefish"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Irvington High School",
      logo: require("./assets/images/ihs.png"),
      subHeader: "High School Diploma",
      duration: "August 2018 - June 2022",
      descBullets: [
        "Played Junior Varsity Soccer for two consecutive years",
        "President of IHS Hack Club",
        "Publicity Officer at Computer Science Club and Bring Change to Mind Club",
        "Active award-winning member of Deca and Investment Club",
        "Relevant Course Work: AP Calculus AB, AP Biology, AP Computer Science A, Engineering and Design, AP Physics 1, AP Psychology"
      ]
    },
    {
      schoolName: "Dual Enrollment",
      logo: require("./assets/images/dual.png"),
      subHeader: "College Classes taken as a high school student",
      duration: "February 2020 - Present",
      descBullets: [
        "Mission College: Elementary Statistics, Entrepreneurship, Digital Photography, Engineering and Design",
        "De Anza College: Principles of Macroeconomics, Python",
        "Foothill College: Microeconomics, Social Psychology",
        "Ohlone College: Spanish 3"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "60%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Chief Executive Officer",
      company: "Tech4U",
      companylogo: require("./assets/images/tech4u.png"),
      date: "June 2018 – Present",
      descBullets: [
        "Founded and Started my own non-profit organization that provides free programming lessons to hundreds of historically underrepresented groups of students for free of cost.",
        "Organized an international hackathon, published technology related blogs, and launched a podcast to engage students",
        "Expanded to chapters around the globe in countries such as Italy, Ecuador, UK, Pakistan, USA, and India",
      ]
    },
    {
      role: "Research Assistant",
      company: "UC Berkeley",
      companylogo: require("./assets/images/berk.png"),
      date: "May 2020 – August 2020",
      descBullets: [
        "Only highschool student in research team of undergraduate and graduate students",
        "Utilized Python and Scikit to conduct machine learning analysis on voter data in order to increase turnout among minority and low propensity voters.",
        "Created a deep learning model that identified and predicted voter patterns among california residents"
      ]
    },
    {
      role: "Student Intern",
      company: "Stria Labs, LLC",
      companylogo: require("./assets/images/stria.png"),
      date: "July 2020 – Sep 2020",
      descBullets: ["Used Python and Pandas to develop a financial model to pattern and predict the company's expenses.", 
      "Worked on the Stria App to leverage the cloud to develop new veering thresholds and seamlessly integrate walking navigation into the blind walking stick.",
      "Procured grants for releasing a new product, spearheaded the marketing campaign and contacted blind centers",
    ]
    },
    {
      role: "Director of Technology",
      company: "Epsilon Hacks",
      companylogo: require("./assets/images/EH.png"),
      date: "Sep 2019 – June 2020",
      descBullets: ["Organized an international hackathon with over 350 high school students from around the world.",
      "Single-handedly designed and developed a large-scale responsive website for Epsilon Hacks.",
      "Aquired sponsors and organized workshops for the event."] 
    },
    {
      role: "Campaign Intern",
      company: "RishiForCongress",
      companylogo: require("./assets/images/rishi.jpeg"),
      date: "Apr 2021 – Aug 2021",
      descBullets: ["Played a critical role in helping Congress candidate Rishi Kumar win the district 18 California House of Representative elections. ",
    "Went door to door canvassing and conducted phone banking to persuade and flip Republican voters to support Rishi",
  "Sent mass emails to 1000+ people and helped organize Rishi's website"]
    },
    {
      role: "Chapter President | Lead Researcher",
      company: "HelyX Initiative",
      companylogo: require("./assets/images/hely.png"),
      date: "October 2018 – Present",
      descBullets: ["Responsible for all operations of HelyX's Bay Area Chapter, a bioinformatics based organization focused on providing AI/ML biology research opportunies to students.",
    "Contributed to efforts of helping to raise thousands of dollars for the coronavirus pandemic and also donated hundreds of faceshields to organizations in need"]
    },
    {
      role: "President | Founder",
      company: "Hack Club",
      companylogo: require("./assets/images/hack.jpeg"),
      date: "August 2020 - Present",
      descBullets: ["Created the largest technology club in my high school with over 90 active members.",
    "Supervised all activities and ensured smooth operation of club",
  "Created fun, engaging guestspeaker events and workshops for club members",
"Club members created websites and applications for other clubs on campus"]
    },
    {
      role: "Fellow",
      company: "VMware",
      companylogo: require("./assets/images/vm.jpeg"),
      date: "July 2019 – July 2019",
      descBullets: ["Participated in a highly-selective one-week program where I shadowed software engineers and attended professional career development workshops in a fortune 100 company.", 
      "Placed second in the mini-hackathon by developing a sustainability website that uses web-scraping to find ingredients for receipes that are in season."
    ]
    },
    {
      role: "Research Affliate",
      company: "University of Michigan",
      companylogo: require("./assets/images/mich.png"),
      date: "March 2020 – Aug 2021",
      descBullets:[ "Conducted Data Log Analysis using javascript @ The University of Michigan to enhance the APCSA e-book experience. ",
    "Created a feature in the APCSA ebook that can convert parsons style coding problems into active code editors where students can easily interact and learn. "]
    },
    {
      role: "Instructor",
      company: "Code Ninjas",
      companylogo: require("./assets/images/cn.png"),
      date: "May 2021 – Present",
      descBullets: ["Part-time job of teaching students programming concepts in a fun and interactive manner.",
      "Responsible for running the robotics and 3D printing summer camps.",
    "Had to answer student questions and design curiculum for classes"]
    },
    {
      role: "Chapter President",
      company: "Enagage Stem",
      companylogo: require("./assets/images/eng.png"),
      date: "Jan 2015 – Sep 2015",
      descBullets: ["Managed all operations of Fremont chapter of Engage STEM.", "Created mobile apps and websites for non-profits in the bay area for free of cost", "Went to libraries and taught senior citizens tech-literacy"]
    },
    {
      role: "Soccer Referee",
      company: "Referee Association",
      companylogo: require("./assets/images/ncra.png"),
      date: "Nov 2018 – Present",
      descBullets: ["Officiate at sporting events, games, and competitions, to maintain standards of play and ensure that game rules are enforced.", "Earned 45$ an hour as a high schooler.",
    "Ensured that game was played smoothly and dealt with players, coaches, and parents concerns to run soccer tournaments" ]
      
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "Some large scale companies and events that I launched",
  projects: [
    {
      image: require("./assets/images/tech4u.png"),
      projectName: "Tech4U",
      projectDesc: "Provided free programming lessons to hundreds of children and organized a hackathon with several hundred participants from around the world. Created a blog series, podcast, organized fundraisers, etc. Designed and developed the Tech4u official website.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://tech-4u.org/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/EH.png"),
      projectName: "Epsilon Hacks",
      projectDesc: "Designed and developed Epsilon Hack's official website. Organized an international hackathon with 350+ participants from around the world. Helped acquire sponsors and host workshops to run the event smoothly. ",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://epsilonhacks.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Hack Covid - Best Covid Hack",
      subtitle:
        "Developed a mobile appliction designed to combat the covid 19 virus. This application gained recogniziton from the National Hospital Service in UK and was later presented to a group on panelists to discuss possible implementation in the UK.",
      image: require("./assets/images/trophy.jpeg"),
      footerLink: [
        
      ]
    },
    {
      title: "Bay Hacks - 2nd place Winner",
      subtitle:
        "Won second place in an international hackathon with 1000 participants from around the world.",
      image: require("./assets/images/trophy.jpeg"),
      footerLink: [
        {
         
        }
      ]
    },

    {
      title: "Pilot City Program - Internship Winner",
      subtitle: "Won an internship position in Fab City Bay Area for designing an arduino based handwash timer",
      image: require("./assets/images/trophy.jpeg"),
      footerLink: [
        {name: "Certification", url: ""},
        {
        
        }
      ]
    },

  {
    title: "DECA - Multiple time Award Winner",
    subtitle: "Placed fourth place in SCDC and qualified for ICDC for BTDM event. Second place winner of Minicon and multiple time finalist at NorCal",
    image: require("./assets/images/trophy.jpeg"),
    footerLink: [
      {name: "Certification", url: ""},
      {
       
      }
    ]
  },
  {
    title: "Trinity School of Music - Grade 3 Distinction Certification",
    subtitle: "Passed grade 3 of presitigious Trinity School of Music's electronic keyboard certification with distinction",
    image: require("./assets/images/trophy.jpeg"),
    footerLink: [
      {name: "Certification", url: ""},
      {
     
      }
    ]
  },
],

  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3243454077",
  email_address: "arjun37602@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
