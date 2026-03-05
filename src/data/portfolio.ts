export interface GalleryItem {
    src: string;
    caption: string;
}

export interface Project {
    id: string;
    title: string;
    category: "Unity" | "Construct" | "Web";
    association: string;
    date: string;
    description: string;
    fullDescription: string;
    jobDesc: string[];
    role: string;
    challenges: { problem: string; solution: string }[];
    tech: string[];
    image: string;
    video: string;
    gallery: GalleryItem[];
    demoLink?: string;
    githubLink?: string;
}

export interface Education {
    institution: string;
    major: string;
    year: string;
    highlights: string[];
}

export interface Experience {
    company: string;
    role: string;
    duration: string;
    responsibilities: string[];
    tech: string[];
}

export const projects: Project[] = [
    {
        id: "power-kart-racing",
        title: "Power Kart Racing",
        association: "Polytron",
        category: "Unity",
        date: "Feb 2024 – Sept 2024",
        description: "Feel the excitement of racing in Power Kart Racing with your friends on Ayo Main!",
        fullDescription:
            "3D kart racing game with local multiplayer for 1-4 players. Featuring 5 unique upgradeable powerups like rocket launcher, boost, smoke, shield, and EMP. The game is exclusive on Polytron Android TV.",
        role: "Game Programmer",
        jobDesc: [
            "Programmed all main menu system, including UI and custom animations.",
            "Programmed all multiplayer logic in main menu and game for handling player connection, disconnection, and reconnection.",
            "Programmed spline calculation system used for race management, player tracking and AI movement.",
            "Programmed some of the parts/powerups including smoke and shield. Created custom shader using HLSL for shield animation.",
            "Programmed minimap system using camera and render texture.",
            "Programmed whole controller using Construct 3, implemented complex features like accelerometer and gyroscope.",
            "Optimized game performance for low end TV devices by extensively monitoring memory usage in profiler. ",
        ],
        challenges: [
            { problem: "Synchronizing physics-based racing across 8 players with minimal latency.", solution: "Implemented client-side prediction with server reconciliation using Photon's authoritative server model. Used interpolation and extrapolation to smooth out network jitter, achieving consistent 60fps gameplay even on unstable connections." },
        ],
        tech: ["Unity", "C#", "Optimization"],
        image: "/images/Feature Graphic/FG Power Kart Racing.png",
        video: "/videos/Power Kart Racing Game Trailer.webm",
        gallery: [
            { src: "/images/Gallery/Power Kart Racing-1.png", caption: "Gameplay screenshot - Racing on desert track" },
            { src: "/images/Gallery/Power Kart Racing-2.png", caption: "Multiplayer lobby with 4 players" }
        ],
        demoLink: "https://play.google.com/store/apps/details?id=com.hit.powerkartracing&hl=en_US",
    },
    {
        id: "meow-fishery",
        title: "Meow Fishery",
        association: "Polytron",
        category: "Construct",
        date: "Jul 2025 – Nov 2025",
        description: "Join the fisher cats on fun and cooperative fishing adventure in Meow Fishery!",
        fullDescription:
            "Join the fisher cats on fun and cooperative fishing adventure in Meow Fishery! Team up with your friends and sail the open ocean to catch as many fish as you can!",
        role: "Game Programmer",
        jobDesc: [
            "Developed cooperative fishing gameplay mechanics using Construct 3",
            "Implemented multiplayer synchronization for cooperative play sessions",
            "Created various fish AI behaviors and spawning systems",
            "Built UI systems for player inventory and progression",
            "Integrated game with AyoMain! gaming platform"
        ],
        challenges: [
        ],
        tech: ["Construct 3", "JavaScript"],
        image: "/images/Feature Graphic/FG Meow Fishery.png",
        video: "/videos/Power Kart Racing Game Trailer.webm",
        gallery: [
            { src: "/images/Gallery/Meow Fishery-1.png", caption: "Cooperative fishing gameplay" },
            { src: "/images/Gallery/Meow Fishery-2.png", caption: "Sailing the open ocean" },
        ],
        demoLink: "https://ayomain.games",

    },
    {
        id: "ayomain",
        title: "AyoMain! Gaming Platform",
        association: "Polytron",
        category: "Web",
        date: "Feb 2025 – Present",
        description: "Turn-based card battler with deck building and online matchmaking system.",
        fullDescription:
            "Card Battle Arena is a strategic turn-based card game featuring 200+ unique cards, deck building mechanics, and competitive online matchmaking. The game implements a custom card scripting system that allows designers to create new card effects without code changes, and uses an ELO-based ranking system for fair matchmaking.",
        role: "Full Stack Developer",
        jobDesc: [
            "Revamped the AyoMain! platform UI based on design mockups",
            "Developed RESTful APIs using Node.js for game management and analytics",
            "Implemented WebSocket-based real-time communication for multiplayer features",
            "Built and maintained MySQL database schemas for user and game data",
            "Deployed services using Docker and managed Redis for caching and session management",
            "Integrated analytics system and game rating system on the platform"
        ],
        challenges: [
            { problem: "Creating a flexible card effect system that supports complex interactions without hardcoding.", solution: "Designed a data-driven card scripting system using ScriptableObjects with a custom visual scripting tool, allowing game designers to compose card effects from reusable building blocks. This reduced new card creation time from days to hours." },
        ],
        tech: ["HTML", "JavaScript", "CSS", "Node.js", "MySQL", "Websocket", "Redis", "Docker"],
        image: "/images/Feature Graphic/FG AyoMain.png",
        video: "/videos/Power Kart Racing Game Trailer.webm",
        gallery: [
            { src: "/images/Gallery/AyoMain-1.png", caption: "Platform homepage" },
            { src: "/images/Gallery/AyoMain-2.png", caption: "Game store listing" },
        ],
        demoLink: "https://ayomain.games",
    },
    {
        id: "anthias-ark",
        title: "Anthia's Ark",
        association: "GameJam+ 2024",
        category: "Unity",
        date: "Nov 2024",
        description: "A relaxing adventure game in a 2.5D world with beautiful scenery",
        fullDescription:
            "Anthia's Ark is a relaxing adventure game in a 2.5D world with beautiful scenery where the player will be saving bugs by guiding them to their base. This game is a submission to GameJam+ 2024.",
        role: "Team Lead & Game Programmer",
        jobDesc: [
            "Led a team of developers and artists during GameJam+ 2024",
            "Designed and implemented core 2.5D gameplay mechanics in Unity",
            "Coordinated task distribution and maintained team communication",
            "Developed bug-guiding AI pathfinding system",
            "Managed project scope to fit within the GameJam time constraints",
            "Delivered a playable build and pitch deck within the deadline"
        ],
        challenges: [
            { problem: "Team coordination and communication.", solution: "I coordinated the team by dividing tasks and maintaining communication throughout the GameJam. We adjusted the scope when necessary to fit the limited timeframe. I handled the core gameplay programming in Unity and helped resolve technical issues. In the end, we managed to submit a pitch deck and a playable build." },
        ],
        tech: ["Unity", "C#"],
        image: "/images/Feature Graphic/FG Anthias Ark.png",
        video: "/videos/Power Kart Racing Game Trailer.webm",
        gallery: [
            { src: "/images/Gallery/Anthias Ark-1.jpg", caption: "2.5D world exploration" },
            { src: "/images/Gallery/Anthias Ark-2.jpg", caption: "Guiding bugs to their base" },
        ],
        demoLink: "https://namecdream.itch.io/anthias-ark",
    },
    {
        id: "mainan-kita",
        title: "Mainan Kita",
        association: "Polytron",
        category: "Construct",
        date: "Sept 2024 – Dec 2024",
        description: "A collection of 6 classic board games.",
        fullDescription:
            "Mainan Kita is a local multiplayer game that supports 1-4 players. Mainan Kita offers 6 classic board games including Snake&Ladder, Ludo, Dam Daman, Halma, Congklak and Marbles. Available on AyoMain!.",
        role: "Game Programmer",
        jobDesc: [
            "Developed 6 classic board games (Snake&Ladder, Ludo, Dam Daman, Halma, Congklak, Marbles) in Construct 3",
            "Built modular turn-based system to standardize player flow across all games",
            "Implemented AI opponents with varying difficulty levels for single-player mode",
            "Designed and coded custom pathfinding logic for different board mechanics",
            "Handled full development independently as the sole programmer",
            "Ensured local multiplayer support for 1-4 players across all games"
        ],
        challenges: [
            { problem: "Each board game had unique gameplay mechanics and AI behavior.", solution: "Built a modular turn-based system using a queue to standardize player flow across games. Implemented custom pathfinding logic for various board mechanics and handled full development independently as a sole programmer." },
        ],
        tech: ["Construct 3", "JavaScript"],
        image: "/images/Feature Graphic/FG Mainan Kita.png",
        video: "/videos/Power Kart Racing Game Trailer.webm",
        gallery: [
            { src: "/images/Gallery/Mainan Kita-1.png", caption: "Snake & Ladder. [Credit: @AyoMain!]" },
            { src: "/images/Gallery/Mainan Kita-2.png", caption: "Marbles. [Credit: @AyoMain!]" },
            { src: "/images/Gallery/Mainan Kita-3.png", caption: "Ludo. [Credit: @AyoMain!]" },
            { src: "/images/Gallery/Mainan Kita-4.png", caption: "Halma. [Credit: @AyoMain!]" },
            { src: "/images/Gallery/Mainan Kita-5.png", caption: "Dam Daman. [Credit: @AyoMain!]" },
            { src: "/images/Gallery/Mainan Kita-6.png", caption: "Congklak. [Credit: @AyoMain!]" },
        ],
        demoLink: "https://ayomain.games",
    },
    {
        id: "nagih-home-battle",
        title: "Nagih Home Battle",
        category: "Construct",
        association: "Polytron",
        date: "Feb 2025 – May 2025",
        description: "Player will play as a kids that willing to help their parents by doing household chore.",
        fullDescription:
            "Player will play as a kids that willing to help their parents by doing household chore. Nagih home battle serve more than 20 games that you can play together.",
        role: "Game Programmer",
        jobDesc: [
            "Developed over 20 household chore-themed minigames using Construct 3",
            "Implemented local multiplayer support for up to 4 players",
            "Created varied game mechanics for each minigame (tapping, swiping, timing-based)",
            "Integrated scoring and progression systems across all minigames",
            "Published the game on AyoMain! gaming platform"
        ],
        challenges: [
        ],
        tech: ["Construct 3", "JavaScript"],
        image: "/images/Feature Graphic/FG Nagih Home Battle.png",
        video: "/videos/Power Kart Racing Game Trailer.webm",
        gallery: [
            { src: "/images/Gallery/Nagih Home Battle-1.png", caption: "Minigames. [Credit: @AyoMain!]" },
        ],
        demoLink: "https://ayomain.games",
    },
    {
        id: "susun-kebaikan",
        title: "Susun Kebaikan",
        category: "Construct",
        association: "Polytron",
        date: "Jan 2026 – Feb 2026",
        description: "A mobile puzzle game for Eid charity campaign.",
        fullDescription:
            "Collaboration with Electric Vehicle (EV) department to develop a mobile puzzle game for Eid charity campaign, supporting 'Kilometer Kebaikan' program.",
        role: "Full Stack Developer",
        jobDesc: [
            "Developed mobile puzzle game for Eid charity campaign using Construct 3",
            "Built RESTful backend APIs using Golang with the Gin framework",
            "Implemented JWT-based authentication for CMS panel access control",
            "Developed CMS panel using React.js for campaign management",
            "Managed MySQL database and Redis caching for data persistence",
            "Resolved browser compatibility and caching issues across multiple devices",
            "Deployed application using Docker containers"
        ],
        challenges: [
            {
                problem: "My first time using Golang as backend. Under strict deadline, I needed to learn Go from scratch.",
                solution: "I started by learning the Go fundamentals and built RESTful APIs using the Gin framework. I implemented JWT-based authentication specifically for the CMS panel to secure access control. I also used Postman extensively to test, validate, and debug API endpoints."
            },
            {
                problem: "Browser incompability and caching issue",
                solution: "I implemented cache-control headers and versioning strategies for static assets to prevent stale files. Additionally, to resolve client-side inconsistencies, I cleared service worker cache logic and ensured proper build versioning to force updates when deploying new releases."
            }
        ],
        tech: ["Construct 3", "React.js", "Golang", "MySQL", "Redis", "Postman", "Docker"],
        image: "/images/Feature Graphic/FG Susun Kebaikan.png",
        video: "/videos/Power Kart Racing Game Trailer.webm",
        gallery: [
            { src: "/images/Gallery/Susun Kebaikan-1.jpg", caption: "Supporting Eid charity campaign. [Credit: @polytron.ev]" },
            { src: "/images/Gallery/Susun Kebaikan-2.jpg", caption: "Puzzle game tutorial. [Credit: @polytron.ev]" },
            { src: "/images/Gallery/Susun Kebaikan-3.jpg", caption: "Reward. [Credit: @polytron.ev]" },
        ],
        demoLink: "https://kepingkebaikan.games.nagihgames.com/play",
    },
];

export const educationData: Education[] = [
    {
        institution: "Binus University",
        major: "Computer Science",
        year: "2021 – 2025",
        highlights: [
            "GPA: 3.40 / 4.00",
            "Thesis: Development of Couch Cooperative Video Game to Enhance Communication and Social Awareness Among Players Through Asymmetric Gameplay. [Published by IEEE and indexed by Scopus]",
        ],
    }
];

export const experienceData: Experience[] = [
    {
        company: "Polytron Indonesia",
        role: "Game Developer",
        duration: "Feb 2025 – Present",
        responsibilities: [
            "Primarily working on AyoMain! gaming platform (https://ayomain.games), revamped the platform UI based on mockup and implemented new features such as analytics system, game rating system, gamepad integration support, store listing, and more.",
        ],
        tech: ["Unity", "C#", "JavaScript", "Node.js", "Golang", "React.js", "MySQL", "Construct 3", "WebSocket", "Redis", "Postman", "Docker", "Git"],
    },
    {
        company: "Polytron Indonesia",
        role: "Game Developer Intern",
        duration: "Feb 2024 – Feb 2025",
        responsibilities: [
            "Part of the Binus Enrichment Program. Contributed on a 3D kart racing game using Unity and C# within a team of 3 programmers. I also developed 6 classic board games using Construct 3 that was later published on AyoMain! gaming platform."
        ],
        tech: ["Unity", "C#", "Construct 3", "Git"],
    }
];
