import { faGithub, faMedium, faYoutube } from "@fortawesome/free-brands-svg-icons";
import picExp from '../assets/exp_site.png'
import picLittleLemon from '../assets/littlelemon.png'

export const data = [
    {
        date: "Mini Project",
        title: "AdminLTE PHP",
        materials: [
            { type: faGithub, link: "https://github.com/peenchayadev/Admin_php" },
        ],
        descriptions: [
            "Using HTML, CSS, PHP"
        ],
        skills: [
            ["HTML", "CSS", "Bootstrap"],
            ["PHP", "JavaScript"],
        ],
    },
    {
        date: "2019-2020",
        title: "Fashion Ecommerce",
        materials: [
            { type: faGithub, link: "https://blackboy96.xyz/" },
            { type: faYoutube, link: "https://blackboy96.xyz/" },
            { type: faMedium, link: "https://blackboy96.xyz/" },
        ],
        descriptions: [
            "Designing and developing a sports data analysis system that scrapes data from various sports websites, processes it, and presents different profit-making possibilities in real-time for customers.",
        ],
        skills: [
            ["NginX", "NodeJS", "Express", "MongoDB"],
        ],
    },
    {
        date: "2018-2019",
        title: "Fashion Ecommerce",
        descriptions: [
            "Designing and developing a sports data analysis system that scrapes data from various sports websites, processes it, and presents different profit-making possibilities in real-time for customers.",
        ],
        skills: [
            ["NginX", "NodeJS", "Express", "MongoDB"],
        ],
    },
]