import barque from "./images/barque.png";
import submarine from "./images/submarine.png";
import battleship from "./images/battleship.png";
import galleon from "./images/galleon.png";
import yacht from "./images/yacht.png";
import clipper from "./images/clipper.png";
import cruiser from "./images/cruiser.png";

const Builds = [
    {
        title: "Cruiser",
        img: cruiser,
        subtitle: "Budget Everyday Desktop",
        cpu: {
            title: "AMD Athlon 200GE",
            price: 70.99
        },
        graphics: {
            title: "Radeon Vega 3 (Built-in with CPU)",
            price: 0
        },
        motherboard: {
            title: "Gigabyte GA-A320M-S2H",
            price: 54.99
        },
        memory: {
            title: "8GB DDR4 RAM",
            price: 34.99
        },
        storage: {
            title: "120GB SSD",
            price: 27.99
        },
        case: {
            title: "Corsair Carbide Series 88R",
            price: 59.99
        },
        power: {
            title: "EVGA BR 450 W",
            price: 36.99
        },
        cooler: {
            title: "AMD Athlon 200GE Stock Fan (Comes with CPU)",
            price: 0
        },
        os: {
            title: "Windows 10 Home",
            price: 109.99
        },
        adapter: {
            title: "TP-Link TL-WN881ND",
            price: 18.99
        },
        overview:
            "The Cruiser may be a budget everyday PC, but it still gets the job done. The Intel i3 CPU, 8GB of RAM, and solid state drive will make your PC fast and efficient while performing everyday tasks.",
        people: ["Students", "Businesses", "Employees", "Teachers"]
    },
    {
        title: "Barque",
        img: barque,
        subtitle: "Robust Everyday Desktop",
        cpu: {
            title: "Intel Core i5-7400",
            price: 182.99
        },
        graphics: {
            title: "Intel HD Graphics 630 (Built-in with CPU)",
            price: 0
        },
        motherboard: {
            title: "Gigabyte GA-H110-D3A",
            price: 59.99
        },
        memory: {
            title: "8GB DDR4 RAM",
            price: 34.99
        },
        storage: {
            title: "240GB SSD",
            price: 39.99
        },
        case: {
            title: "Deepcool MATREXX 50",
            price: 45.99
        },
        power: {
            title: "EVGA BR 500 W",
            price: 40.99
        },
        cooler: {
            title: "Cooler Master Hyper 212 EVO",
            price: 33.99
        },
        os: {
            title: "Windows 10 Home",
            price: 109.99
        },
        adapter: {
            title: "TP-Link TL-WN881ND",
            price: 18.99
        },
        overview:
            "The Barque is a true everyday PC. Whether used as a student computer or as a business workstation, the Intel i5 CPU, 8GB of RAM, and solid state drive will make your PC fast, efficient, and powerful while performing everyday tasks.",
        people: ["Students", "Businesses", "Employees", "Teachers"]
    },
    {
        title: "Submarine",
        img: submarine,
        subtitle: "Powerful Desktop for Design",
        cpu: {
            title: "Intel Core i9-9900K",
            price: 504.99
        },
        graphics: {
            title: "GeForce GTX 1660 6GB",
            price: 203.99
        },
        motherboard: {
            title: "Gigabyte B360 AORUS 3",
            price: 119.99
        },
        memory: {
            title: "32GB DDR4 RAM",
            price: 125.99
        },
        storage: {
            title: "500GB SSD",
            price: 79.99
        },
        case: {
            title: "Corsair 275R Airflow",
            price: 79.99
        },
        power: {
            title: "EVGA BR 500 W",
            price: 40.99
        },
        cooler: {
            title: "Cooler Master Hyper 212 EVO",
            price: 33.99
        },
        os: {
            title: "Windows 10 Home",
            price: 109.99
        },
        adapter: {
            title: null,
            price: 0
        },
        overview:
            "The Submarine is a perfect match for designers that need a machine with powerful capabilities. PCs with lower specs have trouble performing tasks that put pressure on the CPU and memory, but with an Intel i9 processor and 32GB of RAM, creative design has never been smoother.",
        people: [
            "Graphic Designers",
            "Video Producers",
            "3D Designers",
            "Audio Engineers"
        ]
    },
    {
        title: "Clipper",
        img: clipper,
        subtitle: "Budget Gaming Desktop",
        cpu: {
            title: "Intel Core i3-9100F",
            price: 78.99
        },
        graphics: {
            title: "GeForce GTX 1050 Ti",
            price: 150.99
        },
        motherboard: {
            title: "MSI B360",
            price: 97.99
        },
        memory: {
            title: "8GB DDR4 RAM",
            price: 34.99
        },
        storage: {
            title: "240GB SSD",
            price: 38.99
        },
        case: {
            title: "Phanteks Eclipse P300A",
            price: 49.99
        },
        power: {
            title: "EVGA BR 500 W",
            price: 49.99
        },
        cooler: {
            title: "Cooler Master Hyper 212 EVO",
            price: 33.99
        },
        os: {
            title: "Windows 10 Home",
            price: 109.99
        },
        adapter: {
            title: "TP-Link TG-3468",
            price: 14.99
        },
        overview:
            "The Clipper is a budget PC choice for playing graphically intensive video games. Using a GTX 1050 Ti graphics card, this machine is able to run high-performance games such as The Witcher 3 and GTA V at around 45 FPS and medium-performance games such as League of Legends at around 130 FPS.",
        people: ["Gamers", "Streamers", "Content Creators"]
    },
    {
        title: "Galleon",
        img: galleon,
        subtitle: "Mid-Tier Gaming Desktop",
        cpu: {
            title: "Intel Core i5-9400F",
            price: 149.99
        },
        graphics: {
            title: "GeForce GTX 1660 6GB",
            price: 203.99
        },
        motherboard: {
            title: "Gigabyte Z390 AORUS PRO",
            price: 186.99
        },
        memory: {
            title: "16GB DDR4 RAM",
            price: 69.99
        },
        storage: {
            title: "500GB SSD",
            price: 79.99
        },
        case: {
            title: "Phanteks P300",
            price: 49.99
        },
        power: {
            title: "EVGA BR 500 W",
            price: 40.99
        },
        cooler: {
            title: "Cooler Master Hyper 212 EVO",
            price: 33.99
        },
        os: {
            title: "Windows 10 Home",
            price: 109.99
        },
        adapter: {
            title: null,
            price: 0
        },
        overview:
            "The Galleon, although a mid-tier gaming machine, is still a solid choice for playing graphically intensive video games. Using a GTX 1660 graphics card, this machine is able to run high-performance games such as The Witcher 3 and GTA V at around 60 FPS and medium-performance games such as League of Legends at around 180 FPS.",
        people: ["Gamers", "Streamers", "Content Creators"]
    },
    {
        title: "Yacht",
        img: yacht,
        subtitle: "Mid to High-Tier Gaming Desktop",
        cpu: {
            title: "Intel Core i5-9600K",
            price: 219.99
        },
        graphics: {
            title: "GeForce RTX 2070",
            price: 389.99
        },
        motherboard: {
            title: "Gigabyte Z390 AORUS PRO",
            price: 186.99
        },
        memory: {
            title: "16GB DDR4 RAM",
            price: 69.99
        },
        storage: {
            title: "500GB SSD",
            price: 79.99
        },
        case: {
            title: "Corsair Carbide 175R",
            price: 69.99
        },
        power: {
            title: "Corsair CXM 550 W",
            price: 74.99
        },
        cooler: {
            title: "Cooler Master Hyper 212 EVO",
            price: 33.99
        },
        os: {
            title: "Windows 10 Home",
            price: 109.99
        },
        adapter: {
            title: null,
            price: 0
        },
        overview:
            "The Yacht is a strong mid-tier to high-tier PC choice for playing graphically intensive video games. Using a RTX 2070 graphics card, this machine is able to run high-performance games such as The Witcher 3 and GTA V at around 95 FPS and medium-performance games such as League of Legends at around 230 FPS.",
        people: ["Gamers", "Streamers", "Content Creators"]
    },
    {
        title: "Battleship",
        img: battleship,
        subtitle: "High-Tier Gaming Desktop",
        cpu: {
            title: "Intel Core i7-9700K",
            price: 369.99
        },
        graphics: {
            title: "GeForce RTX 2080",
            price: 674.99
        },
        motherboard: {
            title: "Gigabyte Z390 AORUS PRO",
            price: 186.99
        },
        memory: {
            title: "16GB DDR4 RAM",
            price: 69.99
        },
        storage: {
            title: "500GB SSD",
            price: 79.99
        },
        case: {
            title: "Corsair 200R",
            price: 70.99
        },
        power: {
            title: "Corsair CXM 550",
            price: 74.99
        },
        cooler: {
            title: "Cooler Master Hyper 212 EVO",
            price: 33.99
        },
        os: {
            title: "Windows 10 Home",
            price: 109.99
        },
        adapter: {
            title: null,
            price: 0
        },
        overview:
            "The Battleship is a beast for running graphically intensive video games. Using a high-end graphics card, this machine is able to run high-performance games such as The Witcher 3: Wild Hunt and GTA V at around 120 FPS and medium-performance games such as League of Legends at around 250FPS.",
        people: ["Gamers", "Streamers", "Content Creators"]
    }
];

export default Builds;
