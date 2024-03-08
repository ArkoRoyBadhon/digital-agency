import { DropIcon } from "../icons/dropboxIcon"
import { SlackIcon } from "../icons/slackIcon"
import { SpotifyIcon } from "../icons/spotifyIcon"
import { ZoomIcon } from "../icons/zoomIcon"



export const navLink = [
    {
        name: "home",
        link_name: "/"
    },
    {
        name: "about",
        link_name: "/"
    },
    {
        name: "testimonials",
        link_name: "/"
    },
    {
        name: "contact",
        link_name: "/"
    },
]

 // companies logo

 export const companyLogo = [
    {
        name: "spotify",
        logo: <SpotifyIcon />
    },
    {
        name: "slack",
        logo: <SlackIcon />
    },
    {
        name: "dropbox",
        logo: <DropIcon />
    },
    {
        name: "zoom",
        logo: <ZoomIcon />
    },
 ]

 export const companyLogoMobile = [
    {
        name: "spotify",
        logo: <SpotifyIcon width={70} height={24} />
    },
    {
        name: "slack",
        logo: <SlackIcon width={60} height={24} />
    },
    {
        name: "dropbox",
        logo: <DropIcon width={80} height={24} />
    },
    {
        name: "zoom",
        logo: <ZoomIcon width={49} height={24} />
    },
 ]


 export const testimonialMocks = [
    {
        img: "/images/western-man-4975942-4159828 1.png",
        name: "Andrew Rathore",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel."
    },
    {
        img: "/images/western-man-4975942-4159828 2.png",
        name: "Vera Duncan",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel."
    },
    {
        img: "/images/western-man-4975942-4159828 3.png",
        name: "Mark Smith",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel."
    },
 ]


 export const footerLinks = [
    {
        header: "Digital Agency",
        links: [
            {
                name: "Building digital products, brands & experience",
                link: "/"
            },
        ]
    },
    {
        header: "Resources",
        links: [
            {
                name: "Guides",
                link: "/"
            },
            {
                name: "Blog",
                link: "/"
            },
            {
                name: "Customer Stories",
                link: "/"
            },
            {
                name: "Glossery",
                link: "/"
            },
        ]
    },
    {
        header: "Company",
        links: [
            {
                name: "About Us",
                link: "/"
            },
            {
                name: "Careers",
                link: "/"
            },
            {
                name: "Partners",
                link: "/"
            },
            {
                name: "Contact Us",
                link: "/"
            },
        ]
    },
    {
        header: "Social Media",
        links: [
            {
                name: "LinkedIn",
                link: "/"
            },
            {
                name: "Facebook",
                link: "/"
            },
            {
                name: "Instagram",
                link: "/"
            },
            {
                name: "Twitter",
                link: "/"
            },
        ]
    },
 ]