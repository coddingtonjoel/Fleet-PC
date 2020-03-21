import acer from "../../../images/acer.png";
import aoc from "../../../images/aoc.png";
import hp from "../../../images/hp.png";
import sceptre from "../../../images/sceptre.png";

const BuildPeripherals = {
    monitor: [
        {
            title: 'AOC C24G1 24.0"',
            type: "monitor",
            resolution: "1920x1080",
            price: 144.99,
            img: aoc
        },
        {
            title: 'Acer SB220Q 21.5"',
            type: "monitor",
            resolution: "1920x1080",
            price: 139.99,
            img: acer
        },
        {
            title: 'HP 22cwa 21.5"',
            type: "monitor",
            resolution: "1920x1080",
            price: 96.99,
            img: hp
        },
        {
            title: 'Sceptre E205W-1600 20.0"',
            type: "monitor",
            resolution: "1600x900",
            price: 66.99,
            img: sceptre
        }
    ]
};

export default BuildPeripherals;
