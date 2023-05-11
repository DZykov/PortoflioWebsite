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
        id: "projects",
        title: "Projects",
    },
    {
        id: "experience",
        title: "Experience",
    },
    {
        id: "skills",
        title: "Skills",
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
        description: "Experienced programmer in Flask, Django, Spring, Node.js, Nginx, and cloud services.",
    },
    {
        title: "Web Developer",
        icon: web,
        description: "Strong knowledge of Flutter, React, CSS, and Tailwind.",
    },
    {
        title: "Flutter Developer",
        icon: mobile,
        description: "Built full scaled applications and platforms ready for production.",
    },
    {
        title: "Game developer",
        icon: creator,
        description: "Experienced developer in Godot and Unity.",
    },
];

const header_me = ["I am a full stack developer with preference ", "to the backend technologies."];

const about_me = `As a skilled software developer, I have extensive experience in web, backend and platform development, focusing on technologies such as Flutter, Flame, React.js, Flask, Django, and Node.js frameworks.  

I also have significant experience with clouds, servers and version control systems such as DigitalOcean, Nginx and Git. I am using these technologies to launch small and full-scale applications.

My technical expertise extends to programming languages such as C/C++, Python, Java, Dart, and JavaScript, allowing me to work on various projects across multiple platforms. I am exceptionally skilled in Python and Java and passionate about delivering business solutions by designing and developing robust, securely structured. I am highly motivated, detail-oriented, and committed to staying up-to-date with the latest technologies. Additionally, I am passionate about security and optimization: it is critical for any great software to be optimized for the users and has protection by the highest standards. 

Practising Agile methodologies has enabled me to become an excellent collaborator. I am adept at functioning in a team setting, consistently producing top-quality work within deadlines. My skill set in web development, programming languages, cloud and distributed computing, expertise in Agile methodologies and proficiency in coding make me a valuable member of any team I collaborate with.`;

const technologies_min = [
    {
        name: "C",
        description: "My primary use of C has been for manipulating kernels, synchronization, and parallel programming. With my proficiency in the language, I am capable of developing intricate systems and designs.",
        icon: c,
    },
    {
        name: "Java",
        description: "I attained proficiency in programming through learning Java as my first language. I primarily employ Java for the development of applications and Artificial Intelligence (AI) systems.",
        icon: java,
    },
    {
        name: "Python",
        description: "Python is my second language in which I have attained proficiency, and it is also the language I use the most frequently. I apply Python to backend development, analysis, and application development.",
        icon: python,
    },
    {
        name: "Dart",
        description: "One year ago, I began utilizing Dart solely for frontend development purposes such as web, iOS, Android, and other related platforms.",
        icon: dart,
    },
    {
        name: "JavaScript",
        description: "Two years ago, I began utilizing Javascript, which I primarily apply to web development and building small servers.",
        icon: js,
    },
    {
        name: "Flask",
        description: "For backend development, Flask is my primary framework of choice, enabling me to construct sophisticated APIs and real-time servers.",
        icon: flask,
    },
    {
        name: "Node.js",
        description: "When it comes to small projects or real-time data transfers, Node.js is my preferred backend framework, which I frequently use for prototyping.",
        icon: nodejs,
    },
    {
        name: "Flutter",
        description: "Flutter serves as my primary frontend framework, empowering me to effortlessly construct web and mobile applications, as well as develop games.",
        icon: flutter,
    },
    {
        name: "React.js",
        description: "Although I am relatively new to React.js, I possess the proficiency to construct remarkable user interfaces for web applications and websites with ease.",
        icon: reactjs,
    },
    {
        name: "Nginx",
        description: "Nginx is the sole web server that I employ in a production environment for various platforms, including web apps and servers, and I am a proficient user of this software.",
        icon: nginx,
    },
    {
        name: "PostreSQL",
        description: "I hold a preference for PostgreSQL as a database management system and utilize it nearly every time as a data warehouse.",
        icon: postresql,
    },
    {
        name: "Bash",
        description: "For almost a decade, I have been using Bash as my primary shell due to my reliance on Linux as my main operating system. I leverage Bash to automate mechanical routines.",
        icon: terminal,
    },
    {
        name: "DigitalOcean",
        description: "DigitalOcean is the cloud service provider in which I possess considerable proficiency, having deployed several substantial projects on their platform.",
        icon: do_,
    },
];

const technologies = [
    {
        name: "C",
        description: "My primary use of C has been for manipulating kernels, synchronization, and parallel programming. With my proficiency in the language, I am capable of developing intricate systems and designs.",
        icon: c,
    },
    {
        name: "C++",
        description: "While C++ is not my primary programming language, I utilize it specifically for robotics and simulating robots.",
        icon: c_,
    },
    {
        name: "Java",
        description: "I attained proficiency in programming through learning Java as my first language. I primarily employ Java for the development of applications and Artificial Intelligence (AI) systems.",
        icon: java,
    },
    {
        name: "Python",
        description: "Python is my second language in which I have attained proficiency, and it is also the language I use the most frequently. I apply Python to backend development, analysis, and application development.",
        icon: python,
    },
    {
        name: "Dart",
        description: "One year ago, I began utilizing Dart solely for frontend development purposes such as web, iOS, Android, and other related platforms.",
        icon: dart,
    },
    {
        name: "JavaScript",
        description: "Two years ago, I began utilizing Javascript, which I primarily apply to web development and building small servers.",
        icon: js,
    },
    {
        name: "Flask",
        description: "For backend development, Flask is my primary framework of choice, enabling me to construct sophisticated APIs and real-time servers.",
        icon: flask,
    },
    {
        name: "Django",
        description: "I solely employ Django in extensive projects that demand enhanced security, scalability, or server-side rendering. I possess adequate proficiency to use it in a production environment.",
        icon: django,
    },
    {
        name: "Node.js",
        description: "When it comes to small projects or real-time data transfers, Node.js is my preferred backend framework, which I frequently use for prototyping.",
        icon: nodejs,
    },
    {
        name: "Flutter",
        description: "Flutter serves as my primary frontend framework, empowering me to effortlessly construct web and mobile applications, as well as develop games.",
        icon: flutter,
    },
    {
        name: "React.js",
        description: "Although I am relatively new to React.js, I possess the proficiency to construct remarkable user interfaces for web applications and websites with ease.",
        icon: reactjs,
    },
    {
        name: "Flame",
        description: "Flame is a framework extension for Flutter that I utilize to build web and mobile games, and I particularly appreciate this framework for its simplicity and compatibility.",
        icon: flame,
    },
    {
        name: "Nginx",
        description: "Nginx is the sole web server that I employ in a production environment for various platforms, including web apps and servers, and I am a proficient user of this software.",
        icon: nginx,
    },
    {
        name: "PostreSQL",
        description: "I hold a preference for PostgreSQL as a database management system and utilize it nearly every time as a data warehouse.",
        icon: postresql,
    },
    {
        name: "Bash",
        description: "For almost a decade, I have been using Bash as my primary shell due to my reliance on Linux as my main operating system. I leverage Bash to automate mechanical routines.",
        icon: terminal,
    },
    {
        name: "DigitalOcean",
        description: "DigitalOcean is the cloud service provider in which I possess considerable proficiency, having deployed several substantial projects on their platform.",
        icon: do_,
    },
    {
        name: "Firebase",
        description: "Firebase serves as a valuable tool in my arsenal, enabling me to rapidly develop prototypes for various applications and platforms.",
        icon: firebase,
    },
    {
        name: "GitHub",
        description: "It's rare to come across someone who doesn't use GitHub these days, and you can find all of my projects on my GitHub account at github.com/DZykov.",
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
            "I graduated from a leading Canadian day and boarding school and an international independent school, Appleby College.",
            "I was a valuable student because I got leadership positions as Senior Leader and Deck Captain, a person who helps middle schoolers and other boarding students, respectively.",
            "I was responsible for organizing community gatherings, meetings, and events.",
            "Appleby College helped me to develop my character and skills, such as time management, responsibility, a sense of community and teamwork.",
        ],
    },
    {
        title: "Mentor",
        company_name: "Mentor Collective",
        icon: mentor,
        iconBg: "#383E56",
        date: "May 2018 - Jan 2020",
        points: [
            "Top alumni and student leaders have volunteered to prepare new students for success. Mentors help mentee expand their interests, navigate the school community, and build key skills.",
            "My aim was to create a sense of community and belonging for new students and to help them succeed academically and socially.",
            "Another goal was to integrate international students into Canadian society and help to build valuable connections.",
        ],
    },
    {
        title: "Student",
        company_name: "University of Toronot Mississauga",
        icon: uoft,
        iconBg: "#E6DEDD",
        date: "September 2018 - June 2023",
        points: [
            "I graduate with Honours Bachelor of Science: Computer Science, Philosophy, and Mathematics.",
            "I have acquired a firm grasp of essential computer science concepts such as data structures, algorithms, computer architecture, and software engineering principles.",
            "I have strong knowledge of algorithms, mathematical analysis, optimization, and abstract and intermediate logic.",
            "Additionally, I have acquired vital skills in analytical philosophy, such as logical analysis of concepts, meta-analysis, and structural analysis.",
            "I have practical exposure to development methodologies such as Agile, Scrum, and Waterfall, and I have effectively collaborated in teams to deliver top-notch software solutions.",
        ],
    },
];

const projects = [
    {
        name: "Chrono",
        description:
            "A comprehensive project has been developed that involves a web-based platform for posting blogs/articles on both the platform itself and the internet. The platform has been implemented using various technologies, such as Flutter for developing the web app, Node.js for creating website pages, and Flask for building the backend API. Additionally, DigitalOcean has been utilized to deploy the entire architecture.",
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
        project_link: ["https://app.chrono.pw", "https://chrono.pw/demid_zykov"],
        source_code_link: "https://github.com/DZykov/Chrono_public#Index",
    },
    {
        name: "IRC Web Chat",
        description:
            "A web application has been created to enable users to create and join chat-rooms where they can send text messages to each other. The application allows users to create their own chat-rooms and invite others to join or join existing chat-rooms. Users can send text messages to each other within the chat-rooms and view the messages in real-time. The application has been designed to be user-friendly and easy to use, with a simple and intuitive interface. Additionally, the application has been optimized for scalability and performance to ensure a smooth and seamless experience for users, even as the number of users and chat-rooms grows.",
        tags: [
            {
                name: "node.js",
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
        project_link: ["https://webchat.zykov.xyz"],
        source_code_link: "https://github.com/DZykov/WebChat#Index",
    },
    {
        name: "Life Evolution",
        description:
            "An Artificial Intelligence project has been developed which involves the visualization of a Genetic Algorithm. The goal of this algorithm is to create a creature that can survive in a given model or world. The algorithm starts with a population of random creatures and then applies genetic operators such as selection, crossover, and mutation to evolve the population over generations. The fitness of each creature is determined by how well it performs in the given model, such as by avoiding obstacles or collecting resources. The visualization aspect allows users to see the creatures evolve and compete for survival in real-time. The project has been designed to be scalable, allowing users to modify the model and adjust the parameters of the algorithm to explore different scenarios and optimize the performance of the creatures.",
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
        source_code_link: "https://github.com/DZykov/java-gen-alg#Index",
    },
    {
        name: "WebShooter Online",
        description:
            "A real-time web shooter game has been developed with multiplayer support. The game allows players to compete against each other in real-time, testing their shooting skills and reflexes. The game can be played from any web browser, with no need to download any additional software. The game includes option of creating public or private servers or rooms. The multiplayer support allows players to join together and play against each other in real-time. The game has been optimized for performance and scalability to ensure a smooth and seamless experience, even with large numbers of players.",
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
        project_link: ["https://onlinegame.zykov.xyz"],
        source_code_link: "https://github.com/DZykov/MultiplayerWebGame#Index",
    },
    {
        name: "Infinite Fall",
        description:
            "A never-ending game platform has been developed that supports a wide range of platforms, including web, Android, iOS, Linux, Windows, and more. The game has been optimized to run on a wide range of devices and platforms, ensuring that players can enjoy the game regardless of their preferred device. The game has been designed with a user-friendly interface, making it easy for players to access the game on any platform they prefer.",
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
        image: InfiniteFall,
        project_link: ["https://webgame.zykov.xyz"],
        source_code_link: "https://github.com/DZykov/InfiniteFall#Index",
    },
    {
        name: "Voice Assistant PyShell",
        description:
            "I have developed a unique approach to combining a terminal interface with a voice assistant that offers unparalleled customization options. This voice assistant is designed to work seamlessly with the terminal, providing users with an intuitive interface that allows for quick and easy access to a wide range of functions. The voice assistant is highly customizable, allowing users to tailor it to their specific needs and preferences. Additionally, this voice assistant is designed to work 'outside of the box', meaning it can be used with a wide range of software and hardware configurations, making it an ideal solution for a wide range of users. The combination of the terminal and voice assistant provides users with an unprecedented level of control and flexibility, allowing them to perform a wide range of tasks quickly and efficiently.",
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
        source_code_link: "https://github.com/DZykov/PyShell#Index",
    },
    {
        name: "TODO CLI",
        description:
            "I have developed a Command Line Interface (CLI) implementation of a TODO app, designed to help users manage their daily tasks and prioritize their workload. This CLI-based application offers a simple and intuitive interface, enabling users to easily create, edit, and manage their to-do lists without the need for a graphical user interface (GUI). With this app, users can quickly add new tasks, set due dates, and mark completed tasks, all through the convenience of a terminal interface. The TODO app has been designed to be easily portable and platform-independent, enabling users to run it on a wide range of operating systems and devices. The app is also open-source, making it easy for developers to contribute to the project and add new features to the app. With its powerful features and intuitive interface, this CLI-based TODO app is the perfect tool for anyone looking to streamline their workflow and boost their productivity.",
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
        source_code_link: "https://github.com/DZykov/adventure-cli-todo#Index",
    },
    {
        name: "Console",
        description:
            "I have developed a robust and reliable console/terminal implementation in Java, providing users with a powerful and versatile command-line interface for interacting with their applications. This console/terminal implementation offers a wide range of features, including support for command history, tab completion, and customizable prompts. It also supports a variety of different output formats, including text, colors, and special symbols. Additionally, the console/terminal is highly customizable, with options to modify the font, size, and color of the text, as well as the background color. Additionally, the console support encryption/decryption of the files.",
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
            {
                name: "encryption",
                color: "blue-text-gradient",
            },
        ],
        image: javaConsole,
        project_link: [],
        source_code_link: "https://github.com/DZykov/Java-console#Index",
    },
    {
        name: "Tags quality",
        description:
            "I have developed an advanced algorithm that uses machine learning to sort a user's tags based on their interests, providing a highly personalized and tailored experience. The algorithm analyzes a user's past behavior, including their search history and engagement with content, to identify patterns and determine their interests. Based on this analysis, the algorithm sorts the user's tags by relevance and importance, ensuring that the most interesting and relevant tags appear at the top of the feed. This algorithm was presented at Hackathon, and received special mentions.",
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
        source_code_link: "https://github.com/DZykov/Userteam#Tprogger",
    },
];

export { header_me, about_me, services, technologies, technologies_min, experiences, projects };
