import barque from "./images/barque.png";
import submarine from "./images/submarine.png";
import battleship from "./images/battleship.png";
import galleon from "./images/galleon.png";
import yacht from "./images/yacht.png";
import clipper from "./images/clipper.png";
import cruiser from "./images/cruiser.png";
import tartane from "./images/tartane.png";

const Builds = [
    {
        title: "Cruiser",
        img: cruiser,
        subtitle: "Budget Everyday Desktop",
        cpu: {
            title: "AMD Ryzen 3 3200G",
            price: 99.99
        },
        graphics: {
            title: "Radeon Vega 8 (Built-in with CPU)",
            price: 0
        },
        motherboard: {
            title: "Gigabyte GA-A320M-S2H",
            price: 54.99
        },
        memory: {
            title: "8GB DDR4 RAM",
            price: 38.99
        },
        storage: {
            title: "120GB SSD",
            price: 28.99
        },
        case: {
            title: "Corsair Carbide Series 88R",
            price: 59.99
        },
        power: {
            title: "EVGA BR 450 W",
            price: 51.99
        },
        cooler: {
            title: "AMD Ryzen 3 Stock Fan",
            price: 0
        },
        os: {
            title: "Windows 10 Home",
            price: 109.99
        },
        adapter: {
            title: "TP-Link TL-WN881ND",
            price: 17.99
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
            price: 199.99
        },
        graphics: {
            title: "Intel HD Graphics 630 (Built-in with CPU)",
            price: 0
        },
        motherboard: {
            title: "ASRock H110M-HDS",
            price: 51.99
        },
        memory: {
            title: "8GB DDR4 RAM",
            price: 38.99
        },
        storage: {
            title: "240GB SSD",
            price: 39.99
        },
        case: {
            title: "Metallic Gear Neo Silent",
            price: 49.99
        },
        power: {
            title: "EVGA BR 450 W",
            price: 51.99
        },
        cooler: {
            title: "Cooler Master Hyper 212 EVO",
            price: 39.99
        },
        os: {
            title: "Windows 10 Home",
            price: 109.99
        },
        adapter: {
            title: "TP-Link TL-WN881ND",
            price: 17.99
        },
        overview:
            "The Barque is a true everyday PC. Whether used as a student computer or as a business workstation, the Intel i5 CPU, 8GB of RAM, and solid state drive will make your PC fast, efficient, and powerful while performing everyday tasks.",
        people: ["Students", "Businesses", "Employees", "Teachers"]
    },
    {
        title: "Tartane",
        img: tartane,
        subtitle: "Budget Desktop for Design",
        cpu: {
            title: "Intel Core i5-9600K",
            price: 224.99
        },
        graphics: {
            title: "GeForce GTX 1060 3GB",
            price: 159.99
        },
        motherboard: {
            title: "MSI H310-A PRO",
            price: 58.99
        },
        memory: {
            title: "16GB DDR4 RAM",
            price: 73.99
        },
        storage: {
            title: "240GB SSD",
            price: 39.99
        },
        case: {
            title: "Corsair 110R",
            price: 64.99
        },
        power: {
            title: "EVGA BR 450 W",
            price: 51.99
        },
        cooler: {
            title: "Cooler Master Hyper 212 EVO",
            price: 39.99
        },
        os: {
            title: "Windows 10 Home",
            price: 109.99
        },
        adapter: {
            title: "TP-Link TL-WN881ND",
            price: 17.99
        },
        overview:
            "The Tartane is great for people who need a powerful machine for design, but are on a budget. The Intel i5 processor and 16GB of RAM allow for a smooth creative workflow without the hassle of a slow PC.",
        people: [
            "Graphic Designers",
            "Video Producers",
            "3D Designers",
            "Audio Engineers"
        ]
    },
    {
        title: "Submarine",
        img: submarine,
        subtitle: "Powerful Desktop for Design",
        cpu: {
            title: "Intel Core i9-9900K",
            price: 529.99
        },
        graphics: {
            title: "GeForce GTX 1660 SUPER 6GB",
            price: 229.99
        },
        motherboard: {
            title: "Gigabyte Z390 AORUS PRO",
            price: 199.99
        },
        memory: {
            title: "32GB DDR4 RAM",
            price: 126.99
        },
        storage: {
            title: "500GB SSD",
            price: 94.99
        },
        case: {
            title: "Corsair 275R",
            price: 79.99
        },
        power: {
            title: "EVGA BR 500 W",
            price: 53.99
        },
        cooler: {
            title: "Cooler Master Hyper 212 EVO",
            price: 39.99
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
            price: 82.99
        },
        graphics: {
            title: "GeForce GTX 1060 3GB",
            price: 159.99
        },
        motherboard: {
            title: "MSI B360",
            price: 99.99
        },
        memory: {
            title: "8GB DDR4 RAM",
            price: 38.99
        },
        storage: {
            title: "240GB SSD",
            price: 39.99
        },
        case: {
            title: "Phanteks Eclipse P300A",
            price: 59.99
        },
        power: {
            title: "EVGA BR 500 W",
            price: 53.99
        },
        cooler: {
            title: "Cooler Master Hyper 212 EVO",
            price: 39.99
        },
        os: {
            title: "Windows 10 Home",
            price: 109.99
        },
        adapter: {
            title: "TP-Link TL-WN881ND",
            price: 17.99
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
            price: 159.99
        },
        graphics: {
            title: "GeForce GTX 1660 SUPER 6GB",
            price: 229.99
        },
        motherboard: {
            title: "Gigabyte Z390 AORUS PRO",
            price: 199.99
        },
        memory: {
            title: "16GB DDR4 RAM",
            price: 83.99
        },
        storage: {
            title: "500GB SSD",
            price: 94.99
        },
        case: {
            title: "Phanteks P300",
            price: 59.99
        },
        power: {
            title: "EVGA BR 500 W",
            price: 53.99
        },
        cooler: {
            title: "Cooler Master Hyper 212 EVO",
            price: 39.99
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
            "The Galleon, although a mid-tier gaming machine, is still a solid choice for playing graphically intensive video games. Using a GTX 1660 SUPER graphics card, this machine is able to run high-performance games such as The Witcher 3 and GTA V at around 60 FPS and medium-performance games such as League of Legends at around 180 FPS.",
        people: ["Gamers", "Streamers", "Content Creators"]
    },
    {
        title: "Yacht",
        img: yacht,
        subtitle: "Mid to High-Tier Gaming Desktop",
        cpu: {
            title: "Intel Core i5-9600K",
            price: 224.99
        },
        graphics: {
            title: "GeForce RTX 2070",
            price: 399.99
        },
        motherboard: {
            title: "Gigabyte Z390 AORUS PRO",
            price: 199.99
        },
        memory: {
            title: "16GB DDR4 RAM",
            price: 83.99
        },
        storage: {
            title: "500GB SSD",
            price: 94.99
        },
        case: {
            title: "Corsair Carbide 175R",
            price: 59.99
        },
        power: {
            title: "Corsair CXM 550 W",
            price: 79.99
        },
        cooler: {
            title: "Cooler Master Hyper 212 EVO",
            price: 39.99
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
            price: 384.99
        },
        graphics: {
            title: "GeForce RTX 2080 SUPER",
            price: 699.99
        },
        motherboard: {
            title: "Gigabyte Z390 AORUS PRO",
            price: 199.99
        },
        memory: {
            title: "16GB DDR4 RAM",
            price: 83.99
        },
        storage: {
            title: "500GB SSD",
            price: 94.99
        },
        case: {
            title: "Corsair 200R",
            price: 74.99
        },
        power: {
            title: "Corsair CXM 550",
            price: 79.99
        },
        cooler: {
            title: "Cooler Master Hyper 212 EVO",
            price: 39.99
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
            "The Battleship is a beast for running graphically intensive video games. Using a high-end, RTX 2080 SUPER graphics card, this machine is able to run high-performance games such as The Witcher 3: Wild Hunt and GTA V at around 120 FPS and medium-performance games such as League of Legends at around 250FPS.",
        people: ["Gamers", "Streamers", "Content Creators"]
    }
];

export default Builds;
