import {
    backend,
    close,
    creator,
    herobg,
    logo,
    menu,
    mobile,
    web,
    chrono,
    cmd_todos,
    genalg,
    InfiniteFall,
    javaConsole,
    pyshell_va,
    tag_quiality,
    webchat,
    webshooter,
    django,
    flask,
    nodejs,
    flame,
    flutter,
    reactjs,
    c,
    c_,
    dart,
    java,
    js,
    python,
    do_,
    docker,
    firebase,
    git,
    github,
    nginx,
    postresql,
    terminal,
    ac,
    mentor,
    uoft
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "experience",
        title: "Experience",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Flutter Developer",
        icon: mobile,
    },
    {
        title: "Game developer",
        icon: creator,
    },
];

const technologies = [
    {
        name: "C",
        icon: c,
    },
    {
        name: "C++",
        icon: c_,
    },
    {
        name: "Java",
        icon: java,
    },
    {
        name: "Python",
        icon: python,
    },
    {
        name: "Dart",
        icon: dart,
    },
    {
        name: "JavaScript",
        icon: js,
    },
    {
        name: "Flask",
        icon: flask,
    },
    {
        name: "Django",
        icon: django,
    },
    {
        name: "Node.js",
        icon: nodejs,
    },
    {
        name: "Flutter",
        icon: flutter,
    },
    {
        name: "React.js",
        icon: reactjs,
    },
    {
        name: "Flame",
        icon: flame,
    },
    {
        name: "Docker",
        icon: docker,
    },
    {
        name: "Nginx",
        icon: nginx,
    },
    {
        name: "Git",
        icon: git,
    },
    {
        name: "PostreSQL",
        icon: postresql,
    },
    {
        name: "Bash",
        icon: terminal,
    },
    {
        name: "DigitalOcean",
        icon: do_,
    },
    {
        name: "Firebase",
        icon: firebase,
    },
    {
        name: "GitHub",
        icon: github,
    },
];

const experiences = [
    {
        title: "Student",
        company_name: "Appleby College",
        icon: ac,
        iconBg: "#383E56",
        date: "September 2015 - June 2018",
        points: [
            "I was a student at borading school Appleby College.",
            "Appleby College is a leading Canadian day and boarding school.",
        ],
    },
    {
        title: "Mentor",
        company_name: "Mentor Collective",
        icon: mentor,
        iconBg: "#383E56",
        date: "May 2018 - Jan 2020",
        points: [
            "Helping other students to joing Canadian culture and society.",
            "Providing mental help and assistance.",
            "Providing help with courses.",
        ],
    },
    {
        title: "Student",
        company_name: "University of Toronot Mississauga",
        icon: uoft,
        iconBg: "#E6DEDD",
        date: "September 2018 - June 2023",
        points: [
            "I was a student at University of Toronto Mississauga campus.",
            "I graduate with Honours Bachelor of Science: Computer Science, Phillosophy, and Mathematics.",
        ],
    },
];

const projects = [
    {
        name: "Chrono",
        description:
            "Web-based platform that allows users to post blogs/articles to the platform itself and internet. This is a full scaled project: web app was made with flutter, website pages were made with Node.js, and backend API was made with Flask. DigitalOcean was used to deploy the whole architecture.",
        tags: [
            {
                name: "flask",
                color: "blue-text-gradient",
            },
            {
                name: "node.js",
                color: "green-text-gradient",
            },
            {
                name: "flutter",
                color: "pink-text-gradient",
            },
            {
                name: "postresql",
                color: "blue-text-gradient",
            },
            {
                name: "nginx",
                color: "green-text-gradient",
            },
            {
                name: "digitalocean",
                color: "pink-text-gradient",
            },
        ],
        image: chrono,
        project_link: ["app.chrono.pw", "chrono.pw/demid_zykov"],
        source_code_link: "https://github.com/DZykov/Chrono_public",
    },
    {
        name: "IRC Web Chat",
        description:
            "Web application that allows users to create/join chat-rooms and text each other.",
        tags: [
            {
                name: "nodejs",
                color: "blue-text-gradient",
            },
            {
                name: "sql",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: webchat,
        project_link: ["webchat.zykov.xyz"],
        source_code_link: "https://github.com/DZykov/WebChat",
    },
    {
        name: "Life Evolution",
        description:
            "A visualization of Genetic Algorithm (Artificial Intelligence) that tries to create a creature that would survive in the provided model/world.",
        tags: [
            {
                name: "java",
                color: "blue-text-gradient",
            },
            {
                name: "ai",
                color: "green-text-gradient",
            },
            {
                name: "jwt",
                color: "pink-text-gradient",
            },
        ],
        image: genalg,
        project_link: [],
        source_code_link: "https://github.com/DZykov/java-gen-alg",
    },
    {
        name: "WebShooter Online",
        description:
            "A real-time game with multiplayer support.",
        tags: [
            {
                name: "node.js",
                color: "blue-text-gradient",
            },
            {
                name: "js",
                color: "green-text-gradient",
            },
            {
                name: "sockets",
                color: "pink-text-gradient",
            },
        ],
        image: webshooter,
        project_link: ["onlinegame.zykov.xyz"],
        source_code_link: "https://github.com/DZykov/MultiplayerWebGame",
    },
    {
        name: "Infinite Fall",
        description:
            "A game that supports all platforms: web, Android, iOS, linux, windows, etc.",
        tags: [
            {
                name: "flutter",
                color: "blue-text-gradient",
            },
            {
                name: "flame",
                color: "green-text-gradient",
            },
            {
                name: "game development",
                color: "pink-text-gradient",
            },
        ],
        image: webshooter,
        project_link: ["webgame.zykov.xyz"],
        source_code_link: "https://github.com/DZykov/InfiniteFall",
    },
    {
        name: "Voice Assistant PyShell",
        description:
            "This is my personal take on terminal and voice assistant. VA is higly customazble and works outside of the box.",
        tags: [
            {
                name: "python",
                color: "blue-text-gradient",
            },
            {
                name: "voice assistant",
                color: "green-text-gradient",
            },
            {
                name: "shell",
                color: "pink-text-gradient",
            },
        ],
        image: pyshell_va,
        project_link: [],
        source_code_link: "https://github.com/DZykov/PyShell",
    },
    {
        name: "TODO CLI",
        description:
            "CLI implementation of TODO app.",
        tags: [
            {
                name: "python",
                color: "blue-text-gradient",
            },
            {
                name: "json",
                color: "green-text-gradient",
            },
            {
                name: "todo",
                color: "pink-text-gradient",
            },
        ],
        image: cmd_todos,
        project_link: [],
        source_code_link: "https://github.com/DZykov/adventure-cli-todo",
    },
    {
        name: "Console",
        description:
            "Implementation of console/terminal in Java.",
        tags: [
            {
                name: "java",
                color: "blue-text-gradient",
            },
            {
                name: "console",
                color: "green-text-gradient",
            },
            {
                name: "shell",
                color: "pink-text-gradient",
            },
        ],
        image: javaConsole,
        project_link: [],
        source_code_link: "https://github.com/DZykov/Java-console",
    },
    {
        name: "Tags quality",
        description:
            "The algorithm that sorts user's tags by user's interests. Morever, user may indicate how many new tags should be in the feed.",
        tags: [
            {
                name: "python",
                color: "blue-text-gradient",
            },
            {
                name: "big data",
                color: "green-text-gradient",
            },
            {
                name: "data science",
                color: "pink-text-gradient",
            },
        ],
        image: tag_quiality,
        project_link: [],
        source_code_link: "https://github.com/DZykov/Userteam",
    },
];

export { services, technologies, experiences, projects };
