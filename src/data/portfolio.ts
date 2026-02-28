export interface GalleryItem {
    src: string;
    caption: string;
}

export interface Project {
    id: string;
    title: string;
    category: "Unity" | "Construct" | "Others";
    date: string;
    description: string;
    fullDescription: string;
    role: string;
    problemSolution: string;
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
        category: "Unity",
        date: "Jun 2024 – Feb 2025",
        description: "Feel the excitement of racing in Power Kart Racing with your friends on Ayo Main!",
        fullDescription:
            "3D kart racing game with local multiplayer for 1-4 players. Featuring 5 unique upgradeable powerups like rocket launcher, boost, smoke, shield, and EMP. The game is exclusive on Polytron Android TV..",
        role: "Game Programmer",
        problemSolution:
            "Challenge: Synchronizing physics-based racing across 8 players with minimal latency. Solution: Implemented client-side prediction with server reconciliation using Photon's authoritative server model. Used interpolation and extrapolation to smooth out network jitter, achieving consistent 60fps gameplay even on unstable connections.",
        tech: ["Unity", "C#", "Websocket", "JSON"],
        image: "/images/Feature Graphic/FG Power Kart Racing.png",
        video: "/videos/Power Kart Racing Game Trailer.webm",
        gallery: [
            { src: "/images/Gallery/Power Kart Racing-1.png", caption: "Gameplay screenshot - Racing on desert track" },
            { src: "/images/Gallery/Power Kart Racing-2.png", caption: "Multiplayer lobby with 4 players" }
        ],
        demoLink: "https://play.google.com/store/apps/details?id=com.hit.powerkartracing&hl=en_US",
    },
    {
        id: "anthias-ark",
        title: "Anthia's Ark",
        category: "Unity",
        date: "Oct 2024",
        description: "A relaxing adventure game in a 2.5D world with beautiful scenery",
        fullDescription:
            "Anthia's Ark is a relaxing adventure game in a 2.5D world with beautiful scenery where the player will be saving bugs by guiding them to their base. This game is a submission to GameJam+ 2024.",
        role: "Team Lead & Game Programmer",
        problemSolution:
            "Challenge: Procedural dungeon generation that feels hand-crafted while maintaining network sync. Solution: Developed a seed-based Wave Function Collapse algorithm that generates identical dungeons on all clients using shared seeds, eliminating the need to sync map data over the network.",
        tech: ["Unity", "C#"],
        image: "/images/Feature Graphic/FG Anthias Ark.png",
        video: "/videos/Power Kart Racing Game Trailer.webm",
        gallery: [
            { src: "/images/Gallery/Anthias Ark-1.png", caption: "2.5D world exploration" },
            { src: "/images/Gallery/Anthias Ark-2.png", caption: "Guiding bugs to their base" },
        ],
        demoLink: "https://namecdream.itch.io/anthias-ark",
    },
    {
        id: "ayomain",
        title: "AyoMain! Gaming Platform",
        category: "Others",
        date: "Feb 2025 – Present",
        description: "Turn-based card battler with deck building and online matchmaking system.",
        fullDescription:
            "Card Battle Arena is a strategic turn-based card game featuring 200+ unique cards, deck building mechanics, and competitive online matchmaking. The game implements a custom card scripting system that allows designers to create new card effects without code changes, and uses an ELO-based ranking system for fair matchmaking.",
        role: "Full Stack Developer",
        problemSolution:
            "Challenge: Creating a flexible card effect system that supports complex interactions without hardcoding. Solution: Designed a data-driven card scripting system using ScriptableObjects with a custom visual scripting tool, allowing game designers to compose card effects from reusable building blocks. This reduced new card creation time from days to hours.",
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
        id: "mainan-kita",
        title: "Mainan Kita",
        category: "Construct",
        date: "Apr 2024 – Oct 2024",
        description: "A collection of 6 classic board games.",
        fullDescription:
            "Mainan Kita is a local multiplayer game that supports 1-4 players. Mainan Kita offers 6 classic board games including Snake&Ladder, Ludo, Dam Daman, Halma, Congklak and Marbles. Available on AyoMain!.",
        role: "Game Programmer",
        problemSolution:
            "Challenge: Managing hundreds of enemies per wave without frame drops. Solution: Implemented object pooling, spatial partitioning with quadtrees for collision detection, and DOTS-inspired job system for parallel pathfinding calculations, maintaining stable 60fps even with 500+ entities on screen.",
        tech: ["Construct 3", "JavaScript"],
        image: "/images/Feature Graphic/FG Mainan Kita.png",
        video: "/videos/Power Kart Racing Game Trailer.webm",
        gallery: [
            { src: "/images/Gallery/Mainan Kita-1.png", caption: "Classic board game selection menu" },
            { src: "/images/Gallery/Mainan Kita-2.png", caption: "Multiplayer board game in progress" },
        ],
        demoLink: "https://ayomain.games",
    },
    {
        id: "nagih-home-battle",
        title: "Nagih Home Battle",
        category: "Construct",
        date: "Oct 2024 – Dec 2024",
        description: "Player will play as a kids that willing to help their parents by doing household chore.",
        fullDescription:
            "Player will play as a kids that willing to help their parents by doing household chore. Nagih home battle serve more than 20 games that you can play together.",
        role: "Game Programmer",
        problemSolution:
            "Challenge: Scaling real-time quiz sessions to handle 100+ concurrent users with sub-second response times. Solution: Implemented a horizontally scalable WebSocket architecture using Socket.IO with Redis adapter for cross-server pub/sub, achieving 99.9% uptime and <200ms average response time.",
        tech: ["Construct 3", "JavaScript"],
        image: "/images/Feature Graphic/FG Nagih Home Battle.png",
        video: "/videos/Power Kart Racing Game Trailer.webm",
        gallery: [
            { src: "/images/Gallery/Nagih Home Battle-1.png", caption: "Mini-game gameplay" },
            { src: "/images/Gallery/Nagih Home Battle-2.png", caption: "Household chore challenge" },
        ],
        demoLink: "https://ayomain.games",
    },
    {
        id: "meow-fishery",
        title: "Meow Fishery",
        category: "Construct",
        date: "Dec 2024 – Jan 2025",
        description: "Join the fisher cats on fun and cooperative fishing adventure in Meow Fishery!",
        fullDescription:
            "Join the fisher cats on fun and cooperative fishing adventure in Meow Fishery! Team up with your friends and sail the open ocean to catch as many fish as you can!",
        role: "Game Programmer",
        problemSolution:
            "Challenge: Accurate AR object placement in outdoor environments with GPS drift. Solution: Combined GPS positioning with visual-inertial odometry and cloud anchor persistence to achieve <1m placement accuracy. Implemented a hybrid tracking system that falls back gracefully between AR and GPS-only modes.",
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
        id: "susun-kebaikan",
        title: "Susun Kebaikan",
        category: "Construct",
        date: "Feb 2025 – Mar 2025",
        description: "A mobile puzzle game for Eid charity campaign.",
        fullDescription:
            "Collaboration with Electric Vehicle (EV) department to develop a mobile puzzle game for Eid charity campaign, supporting 'Kilometer Kebaikan' program.",
        role: "Full Stack Developer",
        problemSolution:
            "Challenge: Creating a flexible card effect system that supports complex interactions without hardcoding. Solution: Designed a data-driven card scripting system using ScriptableObjects with a custom visual scripting tool, allowing game designers to compose card effects from reusable building blocks. This reduced new card creation time from days to hours.",
        tech: ["Construct 3", "React.js", "Golang", "MySQL", "Redis", "Docker"],
        image: "/images/Feature Graphic/FG Susun Kebaikan.png",
        video: "/videos/Power Kart Racing Game Trailer.webm",
        gallery: [
            { src: "/images/Gallery/Susun Kebaikan-1.png", caption: "Puzzle gameplay" },
            { src: "/images/Gallery/Susun Kebaikan-2.png", caption: "Eid charity campaign integration" },
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
