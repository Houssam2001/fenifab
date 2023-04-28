import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "ESCALIER DE QUAI",
    paragraph:
      "Améliorer la sécurité en séparant les flux de piétons des flux de véhicules grâce aux escaliers de quai. Installation rapide sur les quais de chargement.",
    image: "/images/projet/escalier/escalier1.jpg",
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-01.png",
      designation: "Graphic Designer",
    },
    tags: ["creative"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "Plateforme personnalisée pour un deuxième échangeur de chaleur",
    paragraph:
      "Conception et modélisation 3D de lignes repipées.",
    image: "/images/projet/system/system2.jpg",
    author: {
      name: "Musharof Chy",
      image: "/images/",
      designation: "Content Writer",
    },
    tags: ["dessin"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Mélangeurs pour cuves de traitement",
    paragraph:
      "Les mélangeurs sont principalement utilisés dans la transformation des aliments dans l'industrie laitière et les brasseries.",
    image: "/images/projet/bottle/bottle.jpg",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["demande"],
    publishDate: "2025",
  },
];
export default blogData;
