/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Anup's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Anup Kamble Portfolio",
    type: "website",
    // url: "/",
  },
};

//Home Page
const greeting = {
  title: "Anup Kamble",
  logo_name: "Anup--Kamble",
  nickname: "Full Stack Web Developer",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1-ORldVEtCxXz60MoQGchG3q-ahjrsCo1/view?usp=share_link",
  portfolio_repository: "https://github.com/AnupKamble/PortFolio-Anup",
  githubProfile: "https://github.com/AnupKamble",
};

const socialMediaLinks = [
  

  {
    name: "Github",
    link: "https://github.com/AnupKamble",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/anupkamble207/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:anup.kamble.207@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/AnupKamble_207",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/anup.kamble.1996/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/a_n_u_p_k_a_m_b_l_e_1_3/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    // {
    //   title: "MERN Full Stack Wed Developer",
    //   fileName: "DataScienceImg",
    //   skills: [
    //     "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
    //     "⚡ Experience of working with Computer Vision and NLP projects",
    //     "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Tensorflow",
    //       fontAwesomeClassname: "logos-tensorflow",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Keras",
    //       fontAwesomeClassname: "simple-icons:keras",
    //       style: {
    //         backgroundColor: "white",
    //         color: "#D00000",
    //       },
    //     },
    //     {
    //       skillName: "PyTorch",
    //       fontAwesomeClassname: "logos-pytorch",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Python",
    //       fontAwesomeClassname: "ion-logo-python",
    //       style: {
    //         backgroundColor: "transparent",
    //         color: "#3776AB",
    //       },
    //     },
    //   ],
    // },
    {
      title: "MERN Full Stack Web Developer",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Creating the flow of application functionalities to optimize user experience",
        "⚡ Creating application backend in NodeJS, ExpressJS and MongoDB",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
       
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "JAVA",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#0000002",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Redux",
          fontAwesomeClassname: "simple-icons:redux",
          style: {
            color: "#CC6699",
          },
        },

        {
          skillName: "Chakra UI",
          fontAwesomeClassname: "simple-icons:chakraui",
          style: {
            color: "#65c4c7",
          },
        },
         {
          skillName: "Material UI",
          fontAwesomeClassname: "simple-icons:materialui",
          style: {
            color: "#0081cb",
          },
        },
        
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },

        {
          skillName: "ExpressJS",
          fontAwesomeClassname: "simple-icons:express",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "green",
          },
        },

        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
      ],
    },
    // {
    //   title: "Cloud Infra-Architecture",
    //   fileName: "CloudInfraImg",
    //   skills: [
    //     "⚡ Experience working on multiple cloud platforms",
    //     "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
    //     "⚡ Deploying deep learning models on cloud to use on mobile devices",
    //     "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "GCP",
    //       fontAwesomeClassname: "simple-icons:googlecloud",
    //       style: {
    //         color: "#4285F4",
    //       },
    //     },
    //     {
    //       skillName: "AWS",
    //       fontAwesomeClassname: "simple-icons:amazonaws",
    //       style: {
    //         color: "#FF9900",
    //       },
    //     },
    //     {
    //       skillName: "Azure",
    //       fontAwesomeClassname: "simple-icons:microsoftazure",
    //       style: {
    //         color: "#0089D6",
    //       },
    //     },
    //     {
    //       skillName: "Firebase",
    //       fontAwesomeClassname: "simple-icons:firebase",
    //       style: {
    //         color: "#FFCA28",
    //       },
    //     },
    //     {
    //       skillName: "PostgreSQL",
    //       fontAwesomeClassname: "simple-icons:postgresql",
    //       style: {
    //         color: "#336791",
    //       },
    //     },
    //     {
    //       skillName: "MongoDB",
    //       fontAwesomeClassname: "simple-icons:mongodb",
    //       style: {
    //         color: "#47A248",
    //       },
    //     },
    //     {
    //       skillName: "Docker",
    //       fontAwesomeClassname: "simple-icons:docker",
    //       style: {
    //         color: "#1488C6",
    //       },
    //     },
    //     {
    //       skillName: "Kubernetes",
    //       fontAwesomeClassname: "simple-icons:kubernetes",
    //       style: {
    //         color: "#326CE5",
    //       },
    //     },
    //   ],
    // },
    {
      title: "My Working Tools ",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Experience in deploying websites on Heroku,Netlify,Render and Vercel.",
      ],
      softwareSkills: [
       
        {
          skillName: "VS Code",
          fontAwesomeClassname: "simple-icons:visualstudiocode",
          style: {
            color: "#23a3eb",
          },
        },

        {
          skillName: "CodeSandBox",
          fontAwesomeClassname: "simple-icons:codesandbox",
          style: {
            color: "black",
          },
        },

        {
          skillName: "CodePen",
          fontAwesomeClassname: "simple-icons:codepen",
          style: {
            color: "#000000",
          },
        },

        {
          skillName: "PostMan",
          fontAwesomeClassname: "simple-icons:postman",
          style: {
            color: "#f56933",
          },
        },

        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#e84d31",
          },
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "#000000",
          },
        },
       
        {
          skillName: "NetliFy",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#3ea2b7",
          },
        },
       
        {
          skillName: "Vercel",
          fontAwesomeClassname: "simple-icons:vercel",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Render",
          fontAwesomeClassname: "simple-icons:render",
          style: {
            color: "#44dcb1",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#000000",
          },
        },
        
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [

    {
      siteName: "leetcode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "yello",
      },
      profileLink: "https://leetcode.com/Anup_kamble_207/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/anup_kamble_207",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4640",
      },
      profileLink: "https://www.codechef.com/users/anupkamble_207",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@anup.kamble.207",
    },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/laymanbrother",
    // },
  ],
};

const degrees = {
  degrees: [

    {
      title: "Masai School,Banglore",
      subtitle: "Full Stack Web Developer",
      logo_path: "masai.png",
      alt_name: "Masai School",
      duration: "April-2022 - Present",
      descriptions: [
        "⚡ I have studied deep in Data Structure, Algorithms, FrontEnd and BackEnd Development",
        "⚡ Apart from this,I got hands on experience in the FrontEnd and BackEnd tech Stacks",
        "⚡ I have buliding some colaborative and indivisual projects which is part of Masai School",
      ],
      website_link: "https://www.masaischool.com/",
    },
    {
      title: "Sharadchandraji pawar college of Engineering & Technology,Pune",
      subtitle: "B.E. in Mechanical Engineering",
      logo_path: "Unipune.png",
      alt_name: "SPCE'Baramati",
      duration: "2021 -Completed",
      descriptions: [
        "⚡ I have studied mechanical engineering subjects like SOM,DOM,RAC etc",
        "⚡ Apart from this, I have done courses on Deep Learning Cad,Cam,creao and solidworks which are useful in industry.",
        "⚡ During the Engineering we are build a colaborative project of 4 members which on dehydration of vegetables and fruits by using reverse refrigeration system and remove the moisture in the fruits and vegetables and increase shell life  which is most useful in these days"],
      website_link: "https://www.secsomeshwar.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
  
    {
      title: "Basics of Web Development Certificate Course",
      subtitle: "Masai School",
      logo_path: "masai.png",
      certificate_link:
        "https://drive.google.com/file/d/1Lb3BfHWVcRu2bT2nbQhfW4i4oeDOeU6D/view?usp=share_link",
      alt_name: "masai",
      color_code: "#2A73CC",
    }, 
  ],
};


// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Full Stack projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};


// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "Anup_pic.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with MERN Full Stack development, Opensource Development and Data Structure and Algorithms.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://sahyadrihillsagro.wixsite.com/tech-anup",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      " Nimbut, T.A.-Baramati, Dist.- Pune, Maharashtra - 412102",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://www.google.com/maps/place/Nimbut,+Maharashtra+412102/@18.1033578,74.2328595,17z/data=!3m1!4b1!4m5!3m4!1s0x3bc3aad8ce3bb585:0x65a9770a51ad617a!8m2!3d18.1033943!4d74.2348067",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 7350885458",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  projectsHeader,
  contactPageData,
};
