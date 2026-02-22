export interface Project {
    id: string;
    title: string;
    description: string;
    fullDescription: string;
    role: string;
    problemSolution: string;
    tech: string[];
    image: string;
    gallery: string[];
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
        id: "racing-mecha-legends",
        title: "Racing Mecha Legends",
        description: "Multiplayer battle racing game with real-time physics and competitive leaderboards.",
        fullDescription:
            "Racing Mecha Legends is a fast-paced multiplayer battle racing game where players pilot customizable mechas through procedurally designed tracks. The game features real-time physics simulation, power-up systems, and competitive leaderboards with ELO-based matchmaking. Built with Unity and Photon networking, it supports up to 8 players per race with sub-100ms latency.",
        role: "Lead Game Programmer",
        problemSolution:
            "Challenge: Synchronizing physics-based racing across 8 players with minimal latency. Solution: Implemented client-side prediction with server reconciliation using Photon's authoritative server model. Used interpolation and extrapolation to smooth out network jitter, achieving consistent 60fps gameplay even on unstable connections.",
        tech: ["Unity", "C#", "Photon PUN2", "PlayFab", "Firebase"],
        image: "/images/rml-cover.jpg",
        gallery: ["/images/rml-1.jpg", "/images/rml-2.jpg", "/images/rml-3.jpg"],
        demoLink: "https://play.google.com/store/apps/details?id=com.example.rml",
        githubLink: undefined,
    },
    {
        id: "dungeon-crawler-online",
        title: "Dungeon Crawler Online",
        description: "Co-op dungeon crawler with procedural level generation and real-time combat.",
        fullDescription:
            "Dungeon Crawler Online is a 4-player cooperative dungeon crawler featuring procedurally generated levels, real-time combat with combo systems, and persistent character progression. The game uses a custom ECS (Entity Component System) architecture for optimal performance and scalability.",
        role: "Gameplay Programmer",
        problemSolution:
            "Challenge: Procedural dungeon generation that feels hand-crafted while maintaining network sync. Solution: Developed a seed-based Wave Function Collapse algorithm that generates identical dungeons on all clients using shared seeds, eliminating the need to sync map data over the network.",
        tech: ["Unity", "C#", "Mirror Networking", "MongoDB", "Node.js"],
        image: "/images/dco-cover.jpg",
        gallery: ["/images/dco-1.jpg", "/images/dco-2.jpg"],
        githubLink: "https://github.com/joshuapunyanan/dungeon-crawler-online",
    },
    {
        id: "pixel-tower-defense",
        title: "Pixel Tower Defense",
        description: "Strategic tower defense with pixel art style and wave-based challenges.",
        fullDescription:
            "Pixel Tower Defense is a strategic tower defense game featuring hand-crafted pixel art, 50+ unique tower types with upgrade trees, and an endless wave mode with dynamic difficulty scaling. The game includes a level editor that allows players to create and share custom maps.",
        role: "Solo Developer",
        problemSolution:
            "Challenge: Managing hundreds of enemies per wave without frame drops. Solution: Implemented object pooling, spatial partitioning with quadtrees for collision detection, and DOTS-inspired job system for parallel pathfinding calculations, maintaining stable 60fps even with 500+ entities on screen.",
        tech: ["Unity", "C#", "Addressables", "SQLite"],
        image: "/images/ptd-cover.jpg",
        gallery: ["/images/ptd-1.jpg", "/images/ptd-2.jpg"],
        demoLink: "https://joshuapunyanan.itch.io/pixel-tower-defense",
    },
    {
        id: "multiplayer-quiz-platform",
        title: "Multiplayer Quiz Platform",
        description: "Real-time multiplayer quiz game with WebSocket-based synchronization.",
        fullDescription:
            "A real-time multiplayer quiz platform supporting up to 100 concurrent players per room. Features include live scoring, streak bonuses, admin dashboard for quiz management, and real-time analytics. The platform uses WebSocket for bidirectional communication and Redis for session management.",
        role: "Full-Stack Game Developer",
        problemSolution:
            "Challenge: Scaling real-time quiz sessions to handle 100+ concurrent users with sub-second response times. Solution: Implemented a horizontally scalable WebSocket architecture using Socket.IO with Redis adapter for cross-server pub/sub, achieving 99.9% uptime and <200ms average response time.",
        tech: ["Node.js", "Socket.IO", "React", "Redis", "PostgreSQL", "Docker"],
        image: "/images/mqp-cover.jpg",
        gallery: ["/images/mqp-1.jpg", "/images/mqp-2.jpg"],
        githubLink: "https://github.com/joshuapunyanan/quiz-platform",
    },
    {
        id: "ar-treasure-hunt",
        title: "AR Treasure Hunt",
        description: "Augmented reality mobile game with GPS-based treasure hunting mechanics.",
        fullDescription:
            "AR Treasure Hunt is a location-based augmented reality game where players explore real-world locations to find virtual treasures. The game uses AR Foundation for cross-platform AR experiences, GPS for location tracking, and cloud anchors for persistent AR objects that multiple players can interact with.",
        role: "AR/Mobile Developer",
        problemSolution:
            "Challenge: Accurate AR object placement in outdoor environments with GPS drift. Solution: Combined GPS positioning with visual-inertial odometry and cloud anchor persistence to achieve <1m placement accuracy. Implemented a hybrid tracking system that falls back gracefully between AR and GPS-only modes.",
        tech: ["Unity", "C#", "AR Foundation", "Google Cloud Anchors", "Firebase"],
        image: "/images/arth-cover.jpg",
        gallery: ["/images/arth-1.jpg", "/images/arth-2.jpg"],
    },
    {
        id: "card-battle-arena",
        title: "Card Battle Arena",
        description: "Turn-based card battler with deck building and online matchmaking system.",
        fullDescription:
            "Card Battle Arena is a strategic turn-based card game featuring 200+ unique cards, deck building mechanics, and competitive online matchmaking. The game implements a custom card scripting system that allows designers to create new card effects without code changes, and uses an ELO-based ranking system for fair matchmaking.",
        role: "Systems Programmer",
        problemSolution:
            "Challenge: Creating a flexible card effect system that supports complex interactions without hardcoding. Solution: Designed a data-driven card scripting system using ScriptableObjects with a custom visual scripting tool, allowing game designers to compose card effects from reusable building blocks. This reduced new card creation time from days to hours.",
        tech: ["Unity", "C#", "ScriptableObjects", "Nakama", "Firebase Analytics"],
        image: "/images/cba-cover.jpg",
        gallery: ["/images/cba-1.jpg", "/images/cba-2.jpg"],
        githubLink: "https://github.com/joshuapunyanan/card-battle-arena",
    },
];

export const educationData: Education[] = [
    {
        institution: "Institut Teknologi Bandung",
        major: "Teknik Informatika",
        year: "2018 – 2022",
        highlights: [
            "GPA: 3.75 / 4.00",
            "Thesis: Real-Time Multiplayer Game Architecture with Client Prediction",
            "Best Final Project Award — Game Development Track",
            "Teaching Assistant — Computer Graphics & Game Engine Architecture",
        ],
    },
    {
        institution: "Bangkit Academy — Google",
        major: "Mobile Development Learning Path",
        year: "2021",
        highlights: [
            "Distinction Graduate",
            "Capstone Project: AR-based Educational Game for Kids",
            "Learned Kotlin, Android Development, and Cloud Architecture",
        ],
    },
];

export const experienceData: Experience[] = [
    {
        company: "Agate International",
        role: "Game Programmer",
        duration: "Jan 2023 – Present",
        responsibilities: [
            "Develop and optimize multiplayer game systems using Unity and C#",
            "Implement real-time networking with Photon PUN2 and Mirror",
            "Build CI/CD pipeline for automated game builds and testing",
            "Collaborate with game designers on prototyping new game mechanics",
            "Mentor junior programmers on clean architecture patterns",
        ],
        tech: ["Unity", "C#", "Photon", "Jenkins", "Git", "Jira"],
    },
    {
        company: "Toge Productions",
        role: "Junior Game Developer",
        duration: "Jun 2022 – Dec 2022",
        responsibilities: [
            "Developed gameplay features for 2D platformer title",
            "Implemented save/load system with data encryption",
            "Created tools and editor extensions to streamline level design",
            "Participated in game jam events and rapid prototyping sessions",
        ],
        tech: ["Unity", "C#", "Spine 2D", "Aseprite", "Git"],
    },
    {
        company: "Freelance",
        role: "Full-Stack Game Developer",
        duration: "2020 – 2022",
        responsibilities: [
            "Built multiplayer quiz and trivia platforms for corporate clients",
            "Developed WebSocket-based real-time game backends with Node.js",
            "Created responsive web-based game UIs with React",
            "Deployed containerized game servers using Docker and cloud services",
        ],
        tech: ["Node.js", "Socket.IO", "React", "Docker", "PostgreSQL", "Redis"],
    },
];
