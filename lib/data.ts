import { Album } from "@/types";
import {
  RiSpotifyFill,
  RiYoutubeFill,
  RiInstagramFill,
  RiSoundcloudFill,
} from "react-icons/ri";

export const navLinks = [
  { path: "home", label: "Home" },
  { path: "tours", label: "Tours" },
  { path: "discography", label: "Discography" },
  { path: "blog", label: "Blog" },
  { path: "contact", label: "Contact" },
];

export const events = [
  {
    id: "1",
    date: {
      month: "Oct",
      day: "20",
    },
    location: {
      city: "Los Angeles",
      country: "USA",
      address: "LA Convention Center",
    },
    priceRange: "60-250$",
  },
  {
    id: "2",
    date: {
      month: "Oct",
      day: "25",
    },
    location: {
      city: "Rio de Janeiro",
      country: "Brazil",
      address: "Sambadrome",
    },
    priceRange: "40-200$",
  },
  {
    id: "3",
    date: {
      month: "Oct",
      day: "30",
    },
    location: {
      city: "Paris",
      country: "France",
      address: "Palais Omnisports de Paris",
    },
    priceRange: "70-300$",
  },
  {
    id: "4",
    date: {
      month: "Nov",
      day: "01",
    },
    location: {
      city: "Berlin",
      country: "Germany",
      address: "Berlin Exhibition Hall",
    },
    priceRange: "55-280$",
  },
  {
    id: "5",
    date: {
      month: "Nov",
      day: "05",
    },
    location: {
      city: "Athens",
      country: "Greece",
      address: "Acropolis Amphitheater",
    },
    priceRange: "45-220$",
  },
  {
    id: "6",
    date: {
      month: "Nov",
      day: "05",
    },
    location: {
      city: "Bucharest",
      country: "Romania",
      address: "National Arena",
    },
    priceRange: "40-250$",
  },
  {
    id: "7",
    date: {
      month: "Nov",
      day: "05",
    },
    location: {
      city: "Warsaw",
      country: "Poland",
      address: "PGE Narodowy",
    },
    priceRange: "55-280$",
  },
];

export const albums: Album[] = [
  {
    id: "1",
    img: "/assets/albums/cover/cover-1.png",
    title: "Winds of Dawn",
    tracks: [
      { title: "Serenade in D Major", src: "/assets/freedom.mp3" },
      { title: "Crimson Horizon", src: "/assets/freedom.mp3" },
      { title: "Whisper of the Wind", src: "/assets/freedom.mp3" },
      { title: "Dance of the Fireflies", src: "/assets/freedom.mp3" },
      { title: "Silent Echo", src: "/assets/freedom.mp3" },
      { title: "Enchanted Dreams", src: "/assets/freedom.mp3" },
      { title: "Sunlight Serenity", src: "/assets/freedom.mp3" },
      { title: "Misty Moonlight Melody", src: "/assets/freedom.mp3" },
    ],
  },
  {
    id: "2",
    img: "/assets/albums/cover/cover-2.png",
    title: "Echoes Beyond Time",
    tracks: [
      { title: "Midnight Ride", src: "/assets/freedom.mp3" },
      { title: "Frozen Silence", src: "/assets/freedom.mp3" },
      { title: "Wandering Souls", src: "/assets/freedom.mp3" },
      { title: "Aurora’s Lullaby", src: "/assets/freedom.mp3" },
      { title: "Echoes of the Past", src: "/assets/freedom.mp3" },
      { title: "Velvet Horizons", src: "/assets/freedom.mp3" },
      { title: "Shoreline Reverie", src: "/assets/freedom.mp3" },
      { title: "Fading Stars", src: "/assets/freedom.mp3" },
    ],
  },
  {
    id: "3",
    img: "/assets/albums/cover/cover-3.png",
    title: "Starlit Whispers",
    tracks: [
      { title: "Celestial Waltz", src: "/assets/freedom.mp3" },
      { title: "Veil of Twilight", src: "/assets/freedom.mp3" },
      { title: "Echo Garden", src: "/assets/freedom.mp3" },
      { title: "Midnight Lanterns", src: "/assets/freedom.mp3" },
      { title: "Driftwood Memories", src: "/assets/freedom.mp3" },
      { title: "Silent Rainfall", src: "/assets/freedom.mp3" },
      { title: "Moonlit Mirage", src: "/assets/freedom.mp3" },
      { title: "Chasing Fireflies", src: "/assets/freedom.mp3" },
    ],
  },
  {
    id: "4",
    img: "/assets/albums/cover/cover-4.png",
    title: "Horizons of Silence",
    tracks: [
      { title: "Forgotten Shores", src: "/assets/freedom.mp3" },
      { title: "Silver Echoes", src: "/assets/freedom.mp3" },
      { title: "Autumn Reverie", src: "/assets/freedom.mp3" },
      { title: "Frostbound Path", src: "/assets/freedom.mp3" },
      { title: "Shadows of Dawn", src: "/assets/freedom.mp3" },
      { title: "Golden Drift", src: "/assets/freedom.mp3" },
      { title: "Rivers of Light", src: "/assets/freedom.mp3" },
      { title: "Eternal Gaze", src: "/assets/freedom.mp3" },
    ],
  },
  {
    id: "5",
    img: "/assets/albums/cover/cover-5.png",
    title: "Aurora Dreams",
    tracks: [
      { title: "Glacier’s Heart", src: "/assets/freedom.mp3" },
      { title: "Whispering Pines", src: "/assets/freedom.mp3" },
      { title: "Moonrise Ballad", src: "/assets/freedom.mp3" },
      { title: "Distant Echo", src: "/assets/freedom.mp3" },
      { title: "Frozen Petals", src: "/assets/freedom.mp3" },
      { title: "Wings of Silence", src: "/assets/freedom.mp3" },
      { title: "Northern Glow", src: "/assets/freedom.mp3" },
      { title: "Dreamcatcher", src: "/assets/freedom.mp3" },
    ],
  },
  {
    id: "6",
    img: "/assets/albums/cover/cover-6.png",
    title: "Nocturnal Reflections",
    tracks: [
      { title: "Silent Horizon", src: "/assets/freedom.mp3" },
      { title: "Crystal Night", src: "/assets/freedom.mp3" },
      { title: "Path of Shadows", src: "/assets/freedom.mp3" },
      { title: "Lanterns of the Lake", src: "/assets/freedom.mp3" },
      { title: "Whispered Secrets", src: "/assets/freedom.mp3" },
      { title: "Ashen Skies", src: "/assets/freedom.mp3" },
      { title: "Tides of Silence", src: "/assets/freedom.mp3" },
      { title: "Dawn’s Embrace", src: "/assets/freedom.mp3" },
    ],
  },
  {
    id: "7",
    img: "/assets/albums/cover/cover-7.png",
    title: "Celestial Pathways",
    tracks: [
      { title: "Serenade of Stars", src: "/assets/freedom.mp3" },
      { title: "Nebula Waltz", src: "/assets/freedom.mp3" },
      { title: "Cosmic Drift", src: "/assets/freedom.mp3" },
      { title: "Orbiting Dreams", src: "/assets/freedom.mp3" },
      { title: "Eclipse Reverie", src: "/assets/freedom.mp3" },
      { title: "Lunar Garden", src: "/assets/freedom.mp3" },
      { title: "Stellar Voyage", src: "/assets/freedom.mp3" },
      { title: "Infinity’s Edge", src: "/assets/freedom.mp3" },
    ],
  },
];

export const posts = [
  {
    id: "1",
    date: "2025-05-10",
    title: "Rock Concert in Central Park",
    description:
      "Experience an unforgettable evening of high-energy rock under the open sky. Featuring powerful guitar riffs, legendary anthems, and a crowd that knows how to rock!",
    href: "/",
  },
  {
    id: "2",
    date: "2025-05-15",
    title: "Jazz Jam Session",
    description:
      "Immerse yourself in smooth improvisations and soulful melodies. Local jazz artists come together for a night of rhythm, swing, and pure groove.",
    href: "/",
  },
  {
    id: "3",
    date: "2025-05-20",
    title: "EDM Extravaganza",
    description:
      "Get ready for pulsating beats, dazzling lights, and non-stop dance vibes. Top DJs will keep the energy high all night long.",
    href: "/",
  },
  {
    id: "4",
    date: "2025-05-22",
    title: "Acoustic Coffeehouse",
    description:
      "Relax in a cozy atmosphere with warm coffee aromas and intimate acoustic sets by talented singer-songwriters.",
    href: "/",
  },
  {
    id: "5",
    date: "2025-05-25",
    title: "Classical Symphony Showcase",
    description:
      "Witness a breathtaking performance of timeless symphonies by a full orchestra. A night of elegance, harmony, and musical mastery.",
    href: "/",
  },
  {
    id: "6",
    date: "2025-05-27",
    title: "Hip-Hop Dance Battle",
    description:
      "Feel the rhythm, watch the moves, and cheer for your favorites as dancers face off in an epic hip-hop showdown.",
    href: "/",
  },
];

export const locationSequence = [
  "Los Angeles, USA",
  3000,
  "Rio de Janeiro, Brazil",
  3000,
  "Paris, France",
  3000,
  "Berlin, Germany",
  3000,
  "Athens, Greece",
  3000,
  "Bucharest, Romania",
  3000,
  "Warsaw, Poland",
  3000,
];

export const socialLinks = [
  { icon: RiYoutubeFill, link: "https://youtube.com" },
  { icon: RiInstagramFill, link: "https://instagram.com" },
  { icon: RiSpotifyFill, link: "https://spotify.com" },
  { icon: RiSoundcloudFill, link: "https://soundcloud.com" },
];
