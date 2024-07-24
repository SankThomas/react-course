import React from "react";
import { v4 as uuidv4 } from "uuid";
import { AiFillHome, AiFillFormatPainter } from "react-icons/ai";
import {
  BsFillBarChartFill,
  BsFillCartFill,
  BsFillPinAngleFill,
} from "react-icons/bs";
import { FaEnvelope, FaCommentAlt, FaUserAlt, FaWrench } from "react-icons/fa";
import { MdPermMedia, MdSettingsInputComposite } from "react-icons/md";
import { RiFilePaper2Fill } from "react-icons/ri";
import { GiTalk, GiPlug } from "react-icons/gi";

export const links = [
  {
    id: uuidv4(),
    title: "Home",
    url: "/",
    icon: <AiFillHome />,
    color: "#fecaca",
  },
  {
    id: uuidv4(),
    title: "Stats",
    url: "/stats",
    icon: <BsFillBarChartFill />,
    color: "#fed7aa",
  },
  {
    id: uuidv4(),
    title: "Upgrades",
    url: "/upgrades",
    icon: <BsFillCartFill />,
    color: "#fde68a",
  },
  {
    id: uuidv4(),
    title: "Inbox",
    url: "/inbox",
    icon: <FaEnvelope />,
    color: "#fef08a",
  },
  {
    id: uuidv4(),
    title: "Posts",
    url: "/posts",
    icon: <BsFillPinAngleFill />,
    color: "#d9f99d",
  },
  {
    id: uuidv4(),
    title: "Media",
    url: "/media",
    icon: <MdPermMedia />,
    color: "#bbf7d0",
  },
  {
    id: uuidv4(),
    title: "Pages",
    url: "/pages",
    icon: <RiFilePaper2Fill />,
    color: "#a7f3d0",
  },
  {
    id: uuidv4(),
    title: "Comments",
    url: "/comments",
    icon: <FaCommentAlt />,
    color: "#99f6e4",
  },
  {
    id: uuidv4(),
    title: "Feedback",
    url: "/feedback",
    icon: <GiTalk />,
    color: "#a5f3fc",
  },
  {
    id: uuidv4(),
    title: "Appearance",
    url: "/appearance",
    icon: <AiFillFormatPainter />,
    color: "#bae6fd",
  },
  {
    id: uuidv4(),
    title: "Plugins",
    url: "/plugins",
    icon: <GiPlug />,
    color: "#bfdbfe",
  },
  {
    id: uuidv4(),
    title: "Users",
    url: "/users",
    icon: <FaUserAlt />,
    color: "#c7d2fe",
  },
  {
    id: uuidv4(),
    title: "Tools",
    url: "/tools",
    icon: <FaWrench />,
    color: "#ddd6fe",
  },
  {
    id: uuidv4(),
    title: "Settings",
    url: "/settings",
    icon: <MdSettingsInputComposite />,
    color: "#e9d5ff",
  },
];

export const plans = [
  {
    id: uuidv4(),
    featured: false,
    title: "Personal",
    monthly: "7",
    yearly: "4",
    about: "Best for personal use:",
    desc: "Boost your website with a custom domain name, and remove all WordPress.com advertising. Unlock unlimited, expert customer support via email.",
    borderColor: "#399DE2",
    button: "Upgrade",
    features: [
      "Best-in-class hosting",
      "Jetpack essential features",
      "Unlimited customer support via email",
      "Dozens of free themes",
      "Basic design customization",
      "6 GB storage space",
      "Remove WordPress.com ads",
      "Payments",
      "Subscriber-only content",
    ],
  },
  {
    id: uuidv4(),
    featured: true,
    title: "Premium",
    monthly: "14",
    yearly: "8",
    about: "Best for freelancers:",
    desc: "Build a unique website with advanced design tools, CSS editing, lots of space for audio and video, Google Analytics support, and the ability to monetize your site with ads.",
    borderColor: "#DEB001",
    button: "Upgrade",
    features: [
      "Unlimited customer support via email",
      "Best-in-class hosting",
      "Jetpack essential features",
      "Premium themes",
      "Advanced design customization",
      "13 GB storage space",
      "Remove WordPress.com ads",
      "Payments",
      "Subscriber-only content",
      "Pay with PayPal",
      "Google Analytics integration",
      "Advanced social media",
      "Site monetization",
      "VideoPress support",
    ],
  },
  {
    id: uuidv4(),
    featured: false,
    title: "Business",
    monthly: "33",
    yearly: "25",
    about: "Best for small businesses:",
    desc: "Power your business website with custom plugins and themes, 200 GB storage, and the ability to remove WordPress.com branding.",
    borderColor: "#E78B29",
    button: "Upgrade",
    features: [
      "Unlimited customer support via email",
      "Best-in-class hosting",
      "Jetpack essential features",
      "Premium themes",
      "Advanced design customization",
      "200 GB storage space",
      "Remove WordPress.com ads",
      "Payments",
      "Subscriber-only content",
      "Pay with PayPal",
      "Google Analytics integration",
      "Advanced social media",
      "Site monetization",
      "VideoPress support",
      "SEO tools",
      "Install plugins",
      "Install themes",
      "Remove WordPress.com branding",
    ],
  },
  {
    id: uuidv4(),
    featured: false,
    title: "eCommerce",
    monthly: "59",
    yearly: "45",
    about: "Best for online stores:",
    desc: "Sell products or services with this powerful, all-in-one online store experience. This plan includes premium integrations and is extendable, so it’ll grow with you as your business grows.",
    borderColor: "#C475BD",
    button: "Upgrade",
    features: [
      "Unlimited customer support via email",
      "Best-in-class hosting",
      "Jetpack essential features",
      "Premium themes",
      "Advanced design customization",
      "200 GB storage space",
      "Remove WordPress.com ads",
      "Payments",
      "Subscriber-only content",
      "Pay with PayPal",
      "Google Analytics integration",
      "Advanced social media",
      "Site monetization",
      "VideoPress support",
      "SEO tools",
      "Install plugins",
      "Install themes",
      "Remove WordPress.com branding",
      "Accept payments in 60+ countries",
      "Integrations with top shipping carriers",
      "Unlimited products or services",
      "eCommerce marketing tools",
      "Premium customizable starter themes",
    ],
  },
];

export const questions = [
  {
    id: uuidv4(),
    question: "Do you sell domains?",
    answer:
      "Yes! Annual and biannual Personal, Premium, Business, and eCommerce plans include a free custom domain for one year. That includes new domains purchased through WordPress.com or your own existing domain that you can map to your WordPress.com site. Does not apply to premium domains. Domain name should be registered within one year of the purchase of the plan to use this promotion. Registered domain names will renew at regular prices.",
  },
  {
    id: uuidv4(),
    question: "Can I install plugins?",
    answer:
      "Yes! With the WordPress.com Business or eCommerce plan you can search for and install external plugins. All plans already come with a custom set of plugins tailored just for them.",
  },
  {
    id: uuidv4(),
    question: "Can I install my own theme?",
    answer:
      "Yes! With the WordPress.com Business or eCommerce plan you can install any theme you'd like. All plans give you access to our directory of free and premium themes. These are among the highest-quality WordPress themes, hand-picked and reviewed by our team.",
  },
  {
    id: uuidv4(),
    question: "Do I need another web host?",
    answer:
      "No. All WordPress.com sites include our specially tailored WordPress hosting to ensure your site stays available and secure at all times. You can even use your own domain when you upgrade to the Personal, Premium, Business, or eCommerce plan.",
  },
  {
    id: uuidv4(),
    question: "Do you offer email accounts?",
    answer:
      "Yes. We offer Professional Email which is a robust hosted email solution for any custom domain registered through WordPress.com. You can also set up free email forwarding, or use our Google Workspace integration to power your emails.",
  },
  {
    id: uuidv4(),
    question: "What is included with advanced custom design?",
    answer:
      "Custom design is a toolset you can use to personalize your blog’s look and feel with custom colors & backgrounds, custom fonts, and even a CSS editor that you can use for more precise control of your site’s design.",
  },
  {
    id: uuidv4(),
    question: "Will upgrading affect my content?",
    answer:
      "Plans add extra features to your site, but they do not affect the content of your site or your site's followers.",
  },
  {
    id: uuidv4(),
    question: "Can I cancel my subscription?",
    answer:
      "Yes. We want you to love everything you do at WordPress.com, so we provide a 14-day refund on all of our annual plans and a 7-day refund on all of our monthly plans.",
  },
  {
    id: uuidv4(),
    question: "Have more questions?",
    answer:
      "Need help deciding which plan works for you? Our happiness engineers are available for any questions you may have.",
  },
];

export const posts = [
  {
    id: uuidv4(),
    title: "11 Front-end Projects – HTML, CSS, JavaScript",
    category: "Published",
  },
  {
    id: uuidv4(),
    title: "15 Front-end Projects – HTML, CSS, JavaScript",
    category: "Draft",
  },
  {
    id: uuidv4(),
    title: "20 Front-end Projects – HTML, CSS, JavaScript",
    category: "Scheduled",
  },
  {
    id: uuidv4(),
    title: "25 Front-end Projects – HTML, CSS, JavaScript",
    category: "Trashed",
  },
  {
    id: uuidv4(),
    title: "11 Front-end Projects – HTML, CSS, JavaScript",
    category: "Published",
  },
  {
    id: uuidv4(),
    title: "15 Front-end Projects – HTML, CSS, JavaScript",
    category: "Draft",
  },
  {
    id: uuidv4(),
    title: "20 Front-end Projects – HTML, CSS, JavaScript",
    category: "Scheduled",
  },
  {
    id: uuidv4(),
    title: "25 Front-end Projects – HTML, CSS, JavaScript",
    category: "Trashed",
  },
  {
    id: uuidv4(),
    title: "11 Front-end Projects – HTML, CSS, JavaScript",
    category: "Published",
  },
  {
    id: uuidv4(),
    title: "15 Front-end Projects – HTML, CSS, JavaScript",
    category: "Draft",
  },
  {
    id: uuidv4(),
    title: "20 Front-end Projects – HTML, CSS, JavaScript",
    category: "Scheduled",
  },
  {
    id: uuidv4(),
    title: "25 Front-end Projects – HTML, CSS, JavaScript",
    category: "Trashed",
  },
];
