import profileImage from "../assests/profileImage.jpg";
import laptop from "../assests/laptop.jpg";
import watch from "../assests/watch.avif";
import heroBanner from "../assests/banner-2.webp";
import team1 from "../assests/team1.avif";
import team2 from "../assests/team2.avif";
import team3 from "../assests/team3.avif";
import team4 from "../assests/team4.avif";

// nav item static names
export const navItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "",
  },
];

export const heroData = {
  photo: heroBanner,
  heading:
    "Shine a Spotlight on Your Lost Treasures: Uncover and Reclaim What`s Yours",
  // heading:
  //   "Discovering Lost Treasures: Essential Skills for Successful Retrieval"
  subHeading:
    "With our 100% secure finding and searching method, you_ll find your lost treasures",
  title1: "Lost Report",
  des1: "If you've lost something and need to report it, simply click on the Lost Report button below.",
  title2: "Found Report",
  des2: "If you've found something and need to report it, simply click on the Found Report button below.",
};

export const aboutUs = {
  heading: "About Us",
  data: [
    {
      title: "Our Mission",
      des: "Our mission is to create a safe and effective space for individuals report and find lost items. We strive to build a community of trust where everyone can help each other out.",
    },
    {
      title: "Our Vision",
      des: "  We envision a world where lost items are quickly and easily returned to their owners reducing stress and bringing peace of mind. Our platform is designed to facilitate this process through advanced technology and a supportive community.",
    },
    {
      title: "How It Works",
      des: "Simply report a lost or found item on our platform. Provide as much detail as possible, including photos, location, and time. Our system will match reports and notify you of any potential matches.",
    },
    // {
    //   title: "Join Us",
    //   des: "Become part of our growing community. Sign up today to help  others and stay informed about lost and found items in your area. Together, we can make a difference."
    // },
  ],
};

export const teamMembers = [
  {
    title: "team1",
    photo: team1,
  },
  {
    title: "team2",
    photo: team2,
  },
  {
    title: "team3",
    photo: team3,
  },
  {
    title: "team4",
    photo: team4,
  },
];


// ---------------------------------------------user-----------------------------------------------------
// collection

const user = [
  {
    id: '1',
    name: "AH Fahim",
    email: "ahfba009@gmail.com",
    role: "user",
    userProfile: {
      profileImage: profileImage,
      bio: "",
      age: "",
    },
  }
]


// ..................user login...................
const authInfo = {
  userId: "1",
  userName: "AH Fahim",
  email: "ahfba009@gmail.com",
  role: "USER"
}



// single user data
export const userProfile = {
  id: '1',
  name: "AH Fahim",
  email: "ahfba009@gmail.com",
  role: "user",
  userProfile: {
    profileImage: profileImage,
    bio: "",
    age: "",
  },
};

export const userActivity = {
  totalFoundReport: 2,
  totalLostReport: 2,
  totalClaimReport: {
    total: 4,
    pending: 2,
    approved: 2,
  },
};

// ------------------------------------------lost report-----------------------------------------------------
// collection
export const myLostReport = [
  {
    id: "1",
    lostProductName: "Dell Laptop",
    location: "Dhaka, savar",
    lostDate: "2024-05-25",
    description:
      "My laptop color is black. It has no any stretch .My laptop keyboard is loss so i add some paper to tight it. ",
    photo: watch,
  },
  {
    id: "2",
    lostProductName: "Dell Laptop",
    location: "Dhaka, savar",
    lostDate: "2024-05-25",
    description:
      "My laptop color is black. It has no any stretch .My laptop keyboard is loss so i add some paper to tight it. ",
    photo: laptop,
  },
  {
    id: "3",
    lostProductName: "Dell Laptop",
    location: "Dhaka, savar",
    lostDate: "2024-05-25",
    description:
      "My laptop color is black. It has no any stretch .My laptop keyboard is loss so i add some paper to tight it. ",
    photo: laptop,
  },
  {
    id: "4",
    lostProductName: "Dell Laptop",
    location: "Dhaka, savar",
    lostDate: "2024-05-25",
    description:
      "My laptop color is black. It has no any stretch .My laptop keyboard is loss so i add some paper to tight it. ",
    photo: laptop,
  },
]

// single lost report data
export const lostReportDetail = {
  lostProductName: "Dell Laptop",
  location: "Dhaka, savar",
  lostDate: "2024-05-25",
  description:
    "My laptop color is black. It has no any stretch .My laptop keyboard is loss so i add some paper to tight it. ",
  photo: watch,
};

// ------------------------------------------found report-----------------------------------------------------
// collection
export const myFoundData = {
  myFoundReport: "My Found Item Report",
  allFoundReport: "All Found Report",
  data: [
    {
      id: "1",
      foundProductName: "Dell Laptop",
      location: "Dhaka, savar",
      foundDate: "2024-05-25",
      description:
        "My laptop color is black. It has no any stretch .My laptop keyboard is loss so i add some paper to tight it. ",
      photo: laptop,
    },
    {
      id: "2",
      foundProductName: "Dell Laptop",
      location: "Dhaka, savar",
      foundDate: "2024-05-25",
      description:
        "My laptop color is black. It has no any stretch .My laptop keyboard is loss so i add some paper to tight it. ",
      photo: laptop,
    },
    {
      id: "3",
      foundProductName: "Dell Laptop",
      location: "Dhaka, savar",
      foundDate: "2024-05-25",
      description:
        "My laptop color is black. It has no any stretch .My laptop keyboard is loss so i add some paper to tight it. ",
      photo: laptop,
    },
  ],
};

// ------------------------------------------claim -----------------------------------------------------
// collection
export const myClaimReport = [
  {
    id: "1",
    status: "PENDING",
    distinguishingFeatures:
      "My laptop color is black. It has no any stretch .My laptop keyboard is loss so i add some paper to tight it. ",
    lostDate: "2024-05-25",
    photo: laptop,
  },
]