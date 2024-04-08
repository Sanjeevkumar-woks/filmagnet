"use client";
import { useTheme } from "next-themes";
import { FaRegStar } from "react-icons/fa";
import { BiMoviePlay } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";
import { FaClock } from "react-icons/fa";
import { motion } from "framer-motion";
import MovieCard from "./MOviesCard";
import { useFilms } from "@/src/hooks/useFilms";

// const movies: any[] = [
//   {
//     title: "Avengers: Age of Ultron",
//     year: 2015,
//     cast: [
//       "Robert Downey Jr.",
//       "Chris Hemsworth",
//       "Mark Ruffalo",
//       "Chris Evans",
//       "Scarlett Johansson",
//       "Jeremy Renner",
//       "Don Cheadle",
//       "Aaron Taylor-Johnson",
//       "Elizabeth Olsen",
//       "Paul Bettany",
//       "Cobie Smulders",
//       "Anthony Mackie",
//       "Hayley Atwell",
//       "Idris Elba",
//       "Stellan Skarsgård",
//       "James Spader",
//       "Samuel L. Jackson",
//     ],
//     genres: ["Superhero"],
//     href: "Avengers:_Age_of_Ultron",
//     extract:
//       "Avengers: Age of Ultron is a 2015 American superhero film based on the Marvel Comics superhero team the Avengers. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the sequel to The Avengers (2012) and the 11th film in the Marvel Cinematic Universe (MCU). Written and directed by Joss Whedon, the film features an ensemble cast including Robert Downey Jr., Chris Hemsworth, Mark Ruffalo, Chris Evans, Scarlett Johansson, Jeremy Renner, Don Cheadle, Aaron Taylor-Johnson, Elizabeth Olsen, Paul Bettany, Cobie Smulders, Anthony Mackie, Hayley Atwell, Idris Elba, Linda Cardellini, Stellan Skarsgård, James Spader, and Samuel L. Jackson. In the film, the Avengers fight Ultron (Spader)—an artificial intelligence created by Tony Stark (Downey) and Bruce Banner (Ruffalo) who plans to bring about world peace by causing human extinction.",
//     thumbnail:
//       "https://upload.wikimedia.org/wikipedia/en/f/ff/Avengers_Age_of_Ultron_poster.jpg",
//     thumbnail_width: 220,
//     thumbnail_height: 326,
//   },
//   // ...
//   {
//     title: "The Avengers",
//     year: 2012,
//     cast: [
//       "Robert Downey Jr.",
//       "Chris Evans",
//       "Chris Hemsworth",
//       "Mark Ruffalo",
//       "Jeremy Renner",
//       "Scarlett Johansson",
//       "Tom Hiddleston",
//       "Samuel L. Jackson",
//       "Stellan Skarsgård",
//       "Cobie Smulders",
//       "Clark Gregg",
//       "Gwyneth Paltrow",
//       "Maximiliano Hernández",
//       "Paul Bettany",
//       "Alexis Denisof",
//       "Damion Poitier",
//       "Powers Boothe",
//       "Jenny Agutter",
//       "Stan Lee",
//       "Harry Dean Stanton",
//       "Jerzy Skolimowski",
//       "Warren Kole",
//       "Enver Gjokaj",
//     ],
//     genres: ["Superhero"],
//     href: "The_Avengers_(2012_film)",
//     extract:
//       "Marvel's The Avengers, or simply The Avengers, is a 2012 American superhero film based on the Marvel Comics superhero team of the same name. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the sixth film in the Marvel Cinematic Universe (MCU). Written and directed by Joss Whedon, the film features an ensemble cast including Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth, Scarlett Johansson, and Jeremy Renner as the Avengers, alongside Tom Hiddleston, Stellan Skarsgård, and Samuel L. Jackson. In the film, Nick Fury and the spy agency S.H.I.E.L.D. recruit Tony Stark, Steve Rogers, Bruce Banner, Thor, Natasha Romanoff, and Clint Barton to form a team capable of stopping Thor's brother Loki from subjugating Earth.",
//     thumbnail:
//       "https://upload.wikimedia.org/wikipedia/en/8/8a/The_Avengers_%282012_film%29_poster.jpg",
//     thumbnail_width: 220,
//     thumbnail_height: 326,
//   },
//   {
//     title: "Avengers: Age of Ultron",
//     year: 2015,
//     cast: [
//       "Robert Downey Jr.",
//       "Chris Hemsworth",
//       "Mark Ruffalo",
//       "Chris Evans",
//       "Scarlett Johansson",
//       "Jeremy Renner",
//       "Don Cheadle",
//       "Aaron Taylor-Johnson",
//       "Elizabeth Olsen",
//       "Paul Bettany",
//       "Cobie Smulders",
//       "Anthony Mackie",
//       "Hayley Atwell",
//       "Idris Elba",
//       "Stellan Skarsgård",
//       "James Spader",
//       "Samuel L. Jackson",
//     ],
//     genres: ["Superhero"],
//     href: "Avengers:_Age_of_Ultron",
//     extract:
//       "Avengers: Age of Ultron is a 2015 American superhero film based on the Marvel Comics superhero team the Avengers. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the sequel to The Avengers (2012) and the 11th film in the Marvel Cinematic Universe (MCU). Written and directed by Joss Whedon, the film features an ensemble cast including Robert Downey Jr., Chris Hemsworth, Mark Ruffalo, Chris Evans, Scarlett Johansson, Jeremy Renner, Don Cheadle, Aaron Taylor-Johnson, Elizabeth Olsen, Paul Bettany, Cobie Smulders, Anthony Mackie, Hayley Atwell, Idris Elba, Linda Cardellini, Stellan Skarsgård, James Spader, and Samuel L. Jackson. In the film, the Avengers fight Ultron (Spader)—an artificial intelligence created by Tony Stark (Downey) and Bruce Banner (Ruffalo) who plans to bring about world peace by causing human extinction.",
//     thumbnail:
//       "https://upload.wikimedia.org/wikipedia/en/f/ff/Avengers_Age_of_Ultron_poster.jpg",
//     thumbnail_width: 220,
//     thumbnail_height: 326,
//   },
//   {
//     title: "The Avengers",
//     year: 2012,
//     cast: [
//       "Robert Downey Jr.",
//       "Chris Evans",
//       "Chris Hemsworth",
//       "Mark Ruffalo",
//       "Jeremy Renner",
//       "Scarlett Johansson",
//       "Tom Hiddleston",
//       "Samuel L. Jackson",
//       "Stellan Skarsgård",
//       "Cobie Smulders",
//       "Clark Gregg",
//       "Gwyneth Paltrow",
//       "Maximiliano Hernández",
//       "Paul Bettany",
//       "Alexis Denisof",
//       "Damion Poitier",
//       "Powers Boothe",
//       "Jenny Agutter",
//       "Stan Lee",
//       "Harry Dean Stanton",
//       "Jerzy Skolimowski",
//       "Warren Kole",
//       "Enver Gjokaj",
//     ],
//     genres: ["Superhero"],
//     href: "The_Avengers_(2012_film)",
//     extract:
//       "Marvel's The Avengers, or simply The Avengers, is a 2012 American superhero film based on the Marvel Comics superhero team of the same name. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the sixth film in the Marvel Cinematic Universe (MCU). Written and directed by Joss Whedon, the film features an ensemble cast including Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth, Scarlett Johansson, and Jeremy Renner as the Avengers, alongside Tom Hiddleston, Stellan Skarsgård, and Samuel L. Jackson. In the film, Nick Fury and the spy agency S.H.I.E.L.D. recruit Tony Stark, Steve Rogers, Bruce Banner, Thor, Natasha Romanoff, and Clint Barton to form a team capable of stopping Thor's brother Loki from subjugating Earth.",
//     thumbnail:
//       "https://upload.wikimedia.org/wikipedia/en/8/8a/The_Avengers_%282012_film%29_poster.jpg",
//     thumbnail_width: 220,
//     thumbnail_height: 326,
//   },
//   {
//     title: "Avengers: Age of Ultron",
//     year: 2015,
//     cast: [
//       "Robert Downey Jr.",
//       "Chris Hemsworth",
//       "Mark Ruffalo",
//       "Chris Evans",
//       "Scarlett Johansson",
//       "Jeremy Renner",
//       "Don Cheadle",
//       "Aaron Taylor-Johnson",
//       "Elizabeth Olsen",
//       "Paul Bettany",
//       "Cobie Smulders",
//       "Anthony Mackie",
//       "Hayley Atwell",
//       "Idris Elba",
//       "Stellan Skarsgård",
//       "James Spader",
//       "Samuel L. Jackson",
//     ],
//     genres: ["Superhero"],
//     href: "Avengers:_Age_of_Ultron",
//     extract:
//       "Avengers: Age of Ultron is a 2015 American superhero film based on the Marvel Comics superhero team the Avengers. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the sequel to The Avengers (2012) and the 11th film in the Marvel Cinematic Universe (MCU). Written and directed by Joss Whedon, the film features an ensemble cast including Robert Downey Jr., Chris Hemsworth, Mark Ruffalo, Chris Evans, Scarlett Johansson, Jeremy Renner, Don Cheadle, Aaron Taylor-Johnson, Elizabeth Olsen, Paul Bettany, Cobie Smulders, Anthony Mackie, Hayley Atwell, Idris Elba, Linda Cardellini, Stellan Skarsgård, James Spader, and Samuel L. Jackson. In the film, the Avengers fight Ultron (Spader)—an artificial intelligence created by Tony Stark (Downey) and Bruce Banner (Ruffalo) who plans to bring about world peace by causing human extinction.",
//     thumbnail:
//       "https://upload.wikimedia.org/wikipedia/en/f/ff/Avengers_Age_of_Ultron_poster.jpg",
//     thumbnail_width: 220,
//     thumbnail_height: 326,
//   },
//   {
//     title: "The Avengers",
//     year: 2012,
//     cast: [
//       "Robert Downey Jr.",
//       "Chris Evans",
//       "Chris Hemsworth",
//       "Mark Ruffalo",
//       "Jeremy Renner",
//       "Scarlett Johansson",
//       "Tom Hiddleston",
//       "Samuel L. Jackson",
//       "Stellan Skarsgård",
//       "Cobie Smulders",
//       "Clark Gregg",
//       "Gwyneth Paltrow",
//       "Maximiliano Hernández",
//       "Paul Bettany",
//       "Alexis Denisof",
//       "Damion Poitier",
//       "Powers Boothe",
//       "Jenny Agutter",
//       "Stan Lee",
//       "Harry Dean Stanton",
//       "Jerzy Skolimowski",
//       "Warren Kole",
//       "Enver Gjokaj",
//     ],
//     genres: ["Superhero"],
//     href: "The_Avengers_(2012_film)",
//     extract:
//       "Marvel's The Avengers, or simply The Avengers, is a 2012 American superhero film based on the Marvel Comics superhero team of the same name. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the sixth film in the Marvel Cinematic Universe (MCU). Written and directed by Joss Whedon, the film features an ensemble cast including Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth, Scarlett Johansson, and Jeremy Renner as the Avengers, alongside Tom Hiddleston, Stellan Skarsgård, and Samuel L. Jackson. In the film, Nick Fury and the spy agency S.H.I.E.L.D. recruit Tony Stark, Steve Rogers, Bruce Banner, Thor, Natasha Romanoff, and Clint Barton to form a team capable of stopping Thor's brother Loki from subjugating Earth.",
//     thumbnail:
//       "https://upload.wikimedia.org/wikipedia/en/8/8a/The_Avengers_%282012_film%29_poster.jpg",
//     thumbnail_width: 220,
//     thumbnail_height: 326,
//   },
//   {
//     title: "Avengers: Age of Ultron",
//     year: 2015,
//     cast: [
//       "Robert Downey Jr.",
//       "Chris Hemsworth",
//       "Mark Ruffalo",
//       "Chris Evans",
//       "Scarlett Johansson",
//       "Jeremy Renner",
//       "Don Cheadle",
//       "Aaron Taylor-Johnson",
//       "Elizabeth Olsen",
//       "Paul Bettany",
//       "Cobie Smulders",
//       "Anthony Mackie",
//       "Hayley Atwell",
//       "Idris Elba",
//       "Stellan Skarsgård",
//       "James Spader",
//       "Samuel L. Jackson",
//     ],
//     genres: ["Superhero"],
//     href: "Avengers:_Age_of_Ultron",
//     extract:
//       "Avengers: Age of Ultron is a 2015 American superhero film based on the Marvel Comics superhero team the Avengers. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the sequel to The Avengers (2012) and the 11th film in the Marvel Cinematic Universe (MCU). Written and directed by Joss Whedon, the film features an ensemble cast including Robert Downey Jr., Chris Hemsworth, Mark Ruffalo, Chris Evans, Scarlett Johansson, Jeremy Renner, Don Cheadle, Aaron Taylor-Johnson, Elizabeth Olsen, Paul Bettany, Cobie Smulders, Anthony Mackie, Hayley Atwell, Idris Elba, Linda Cardellini, Stellan Skarsgård, James Spader, and Samuel L. Jackson. In the film, the Avengers fight Ultron (Spader)—an artificial intelligence created by Tony Stark (Downey) and Bruce Banner (Ruffalo) who plans to bring about world peace by causing human extinction.",
//     thumbnail:
//       "https://upload.wikimedia.org/wikipedia/en/f/ff/Avengers_Age_of_Ultron_poster.jpg",
//     thumbnail_width: 220,
//     thumbnail_height: 326,
//   },
//   {
//     title: "The Avengers",
//     year: 2012,
//     cast: [
//       "Robert Downey Jr.",
//       "Chris Evans",
//       "Chris Hemsworth",
//       "Mark Ruffalo",
//       "Jeremy Renner",
//       "Scarlett Johansson",
//       "Tom Hiddleston",
//       "Samuel L. Jackson",
//       "Stellan Skarsgård",
//       "Cobie Smulders",
//       "Clark Gregg",
//       "Gwyneth Paltrow",
//       "Maximiliano Hernández",
//       "Paul Bettany",
//       "Alexis Denisof",
//       "Damion Poitier",
//       "Powers Boothe",
//       "Jenny Agutter",
//       "Stan Lee",
//       "Harry Dean Stanton",
//       "Jerzy Skolimowski",
//       "Warren Kole",
//       "Enver Gjokaj",
//     ],
//     genres: ["Superhero"],
//     href: "The_Avengers_(2012_film)",
//     extract:
//       "Marvel's The Avengers, or simply The Avengers, is a 2012 American superhero film based on the Marvel Comics superhero team of the same name. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the sixth film in the Marvel Cinematic Universe (MCU). Written and directed by Joss Whedon, the film features an ensemble cast including Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth, Scarlett Johansson, and Jeremy Renner as the Avengers, alongside Tom Hiddleston, Stellan Skarsgård, and Samuel L. Jackson. In the film, Nick Fury and the spy agency S.H.I.E.L.D. recruit Tony Stark, Steve Rogers, Bruce Banner, Thor, Natasha Romanoff, and Clint Barton to form a team capable of stopping Thor's brother Loki from subjugating Earth.",
//     thumbnail:
//       "https://upload.wikimedia.org/wikipedia/en/8/8a/The_Avengers_%282012_film%29_poster.jpg",
//     thumbnail_width: 220,
//     thumbnail_height: 326,
//   },
//   {
//     title: "Avengers: Age of Ultron",
//     year: 2015,
//     cast: [
//       "Robert Downey Jr.",
//       "Chris Hemsworth",
//       "Mark Ruffalo",
//       "Chris Evans",
//       "Scarlett Johansson",
//       "Jeremy Renner",
//       "Don Cheadle",
//       "Aaron Taylor-Johnson",
//       "Elizabeth Olsen",
//       "Paul Bettany",
//       "Cobie Smulders",
//       "Anthony Mackie",
//       "Hayley Atwell",
//       "Idris Elba",
//       "Stellan Skarsgård",
//       "James Spader",
//       "Samuel L. Jackson",
//     ],
//     genres: ["Superhero"],
//     href: "Avengers:_Age_of_Ultron",
//     extract:
//       "Avengers: Age of Ultron is a 2015 American superhero film based on the Marvel Comics superhero team the Avengers. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the sequel to The Avengers (2012) and the 11th film in the Marvel Cinematic Universe (MCU). Written and directed by Joss Whedon, the film features an ensemble cast including Robert Downey Jr., Chris Hemsworth, Mark Ruffalo, Chris Evans, Scarlett Johansson, Jeremy Renner, Don Cheadle, Aaron Taylor-Johnson, Elizabeth Olsen, Paul Bettany, Cobie Smulders, Anthony Mackie, Hayley Atwell, Idris Elba, Linda Cardellini, Stellan Skarsgård, James Spader, and Samuel L. Jackson. In the film, the Avengers fight Ultron (Spader)—an artificial intelligence created by Tony Stark (Downey) and Bruce Banner (Ruffalo) who plans to bring about world peace by causing human extinction.",
//     thumbnail:
//       "https://upload.wikimedia.org/wikipedia/en/f/ff/Avengers_Age_of_Ultron_poster.jpg",
//     thumbnail_width: 220,
//     thumbnail_height: 326,
//   },
//   {
//     title: "The Avengers",
//     year: 2012,
//     cast: [
//       "Robert Downey Jr.",
//       "Chris Evans",
//       "Chris Hemsworth",
//       "Mark Ruffalo",
//       "Jeremy Renner",
//       "Scarlett Johansson",
//       "Tom Hiddleston",
//       "Samuel L. Jackson",
//       "Stellan Skarsgård",
//       "Cobie Smulders",
//       "Clark Gregg",
//       "Gwyneth Paltrow",
//       "Maximiliano Hernández",
//       "Paul Bettany",
//       "Alexis Denisof",
//       "Damion Poitier",
//       "Powers Boothe",
//       "Jenny Agutter",
//       "Stan Lee",
//       "Harry Dean Stanton",
//       "Jerzy Skolimowski",
//       "Warren Kole",
//       "Enver Gjokaj",
//     ],
//     genres: ["Superhero"],
//     href: "The_Avengers_(2012_film)",
//     extract:
//       "Marvel's The Avengers, or simply The Avengers, is a 2012 American superhero film based on the Marvel Comics superhero team of the same name. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the sixth film in the Marvel Cinematic Universe (MCU). Written and directed by Joss Whedon, the film features an ensemble cast including Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth, Scarlett Johansson, and Jeremy Renner as the Avengers, alongside Tom Hiddleston, Stellan Skarsgård, and Samuel L. Jackson. In the film, Nick Fury and the spy agency S.H.I.E.L.D. recruit Tony Stark, Steve Rogers, Bruce Banner, Thor, Natasha Romanoff, and Clint Barton to form a team capable of stopping Thor's brother Loki from subjugating Earth.",
//     thumbnail:
//       "https://upload.wikimedia.org/wikipedia/en/8/8a/The_Avengers_%282012_film%29_poster.jpg",
//     thumbnail_width: 220,
//     thumbnail_height: 326,
//   },
//   {
//     title: "Avengers: Age of Ultron",
//     year: 2015,
//     cast: [
//       "Robert Downey Jr.",
//       "Chris Hemsworth",
//       "Mark Ruffalo",
//       "Chris Evans",
//       "Scarlett Johansson",
//       "Jeremy Renner",
//       "Don Cheadle",
//       "Aaron Taylor-Johnson",
//       "Elizabeth Olsen",
//       "Paul Bettany",
//       "Cobie Smulders",
//       "Anthony Mackie",
//       "Hayley Atwell",
//       "Idris Elba",
//       "Stellan Skarsgård",
//       "James Spader",
//       "Samuel L. Jackson",
//     ],
//     genres: ["Superhero"],
//     href: "Avengers:_Age_of_Ultron",
//     extract:
//       "Avengers: Age of Ultron is a 2015 American superhero film based on the Marvel Comics superhero team the Avengers. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the sequel to The Avengers (2012) and the 11th film in the Marvel Cinematic Universe (MCU). Written and directed by Joss Whedon, the film features an ensemble cast including Robert Downey Jr., Chris Hemsworth, Mark Ruffalo, Chris Evans, Scarlett Johansson, Jeremy Renner, Don Cheadle, Aaron Taylor-Johnson, Elizabeth Olsen, Paul Bettany, Cobie Smulders, Anthony Mackie, Hayley Atwell, Idris Elba, Linda Cardellini, Stellan Skarsgård, James Spader, and Samuel L. Jackson. In the film, the Avengers fight Ultron (Spader)—an artificial intelligence created by Tony Stark (Downey) and Bruce Banner (Ruffalo) who plans to bring about world peace by causing human extinction.",
//     thumbnail:
//       "https://upload.wikimedia.org/wikipedia/en/f/ff/Avengers_Age_of_Ultron_poster.jpg",
//     thumbnail_width: 220,
//     thumbnail_height: 326,
//   },
//   {
//     title: "The Avengers",
//     year: 2012,
//     cast: [
//       "Robert Downey Jr.",
//       "Chris Evans",
//       "Chris Hemsworth",
//       "Mark Ruffalo",
//       "Jeremy Renner",
//       "Scarlett Johansson",
//       "Tom Hiddleston",
//       "Samuel L. Jackson",
//       "Stellan Skarsgård",
//       "Cobie Smulders",
//       "Clark Gregg",
//       "Gwyneth Paltrow",
//       "Maximiliano Hernández",
//       "Paul Bettany",
//       "Alexis Denisof",
//       "Damion Poitier",
//       "Powers Boothe",
//       "Jenny Agutter",
//       "Stan Lee",
//       "Harry Dean Stanton",
//       "Jerzy Skolimowski",
//       "Warren Kole",
//       "Enver Gjokaj",
//     ],
//     genres: ["Superhero"],
//     href: "The_Avengers_(2012_film)",
//     extract:
//       "Marvel's The Avengers, or simply The Avengers, is a 2012 American superhero film based on the Marvel Comics superhero team of the same name. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the sixth film in the Marvel Cinematic Universe (MCU). Written and directed by Joss Whedon, the film features an ensemble cast including Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth, Scarlett Johansson, and Jeremy Renner as the Avengers, alongside Tom Hiddleston, Stellan Skarsgård, and Samuel L. Jackson. In the film, Nick Fury and the spy agency S.H.I.E.L.D. recruit Tony Stark, Steve Rogers, Bruce Banner, Thor, Natasha Romanoff, and Clint Barton to form a team capable of stopping Thor's brother Loki from subjugating Earth.",
//     thumbnail:
//       "https://upload.wikimedia.org/wikipedia/en/8/8a/The_Avengers_%282012_film%29_poster.jpg",
//     thumbnail_width: 220,
//     thumbnail_height: 326,
//   },
//   {
//     title: "Avengers: Age of Ultron",
//     year: 2015,
//     cast: [
//       "Robert Downey Jr.",
//       "Chris Hemsworth",
//       "Mark Ruffalo",
//       "Chris Evans",
//       "Scarlett Johansson",
//       "Jeremy Renner",
//       "Don Cheadle",
//       "Aaron Taylor-Johnson",
//       "Elizabeth Olsen",
//       "Paul Bettany",
//       "Cobie Smulders",
//       "Anthony Mackie",
//       "Hayley Atwell",
//       "Idris Elba",
//       "Stellan Skarsgård",
//       "James Spader",
//       "Samuel L. Jackson",
//     ],
//     genres: ["Superhero"],
//     href: "Avengers:_Age_of_Ultron",
//     extract:
//       "Avengers: Age of Ultron is a 2015 American superhero film based on the Marvel Comics superhero team the Avengers. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the sequel to The Avengers (2012) and the 11th film in the Marvel Cinematic Universe (MCU). Written and directed by Joss Whedon, the film features an ensemble cast including Robert Downey Jr., Chris Hemsworth, Mark Ruffalo, Chris Evans, Scarlett Johansson, Jeremy Renner, Don Cheadle, Aaron Taylor-Johnson, Elizabeth Olsen, Paul Bettany, Cobie Smulders, Anthony Mackie, Hayley Atwell, Idris Elba, Linda Cardellini, Stellan Skarsgård, James Spader, and Samuel L. Jackson. In the film, the Avengers fight Ultron (Spader)—an artificial intelligence created by Tony Stark (Downey) and Bruce Banner (Ruffalo) who plans to bring about world peace by causing human extinction.",
//     thumbnail:
//       "https://upload.wikimedia.org/wikipedia/en/f/ff/Avengers_Age_of_Ultron_poster.jpg",
//     thumbnail_width: 220,
//     thumbnail_height: 326,
//   },
//   {
//     title: "The Avengers",
//     year: 2012,
//     cast: [
//       "Robert Downey Jr.",
//       "Chris Evans",
//       "Chris Hemsworth",
//       "Mark Ruffalo",
//       "Jeremy Renner",
//       "Scarlett Johansson",
//       "Tom Hiddleston",
//       "Samuel L. Jackson",
//       "Stellan Skarsgård",
//       "Cobie Smulders",
//       "Clark Gregg",
//       "Gwyneth Paltrow",
//       "Maximiliano Hernández",
//       "Paul Bettany",
//       "Alexis Denisof",
//       "Damion Poitier",
//       "Powers Boothe",
//       "Jenny Agutter",
//       "Stan Lee",
//       "Harry Dean Stanton",
//       "Jerzy Skolimowski",
//       "Warren Kole",
//       "Enver Gjokaj",
//     ],
//     genres: ["Superhero"],
//     href: "The_Avengers_(2012_film)",
//     extract:
//       "Marvel's The Avengers, or simply The Avengers, is a 2012 American superhero film based on the Marvel Comics superhero team of the same name. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the sixth film in the Marvel Cinematic Universe (MCU). Written and directed by Joss Whedon, the film features an ensemble cast including Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth, Scarlett Johansson, and Jeremy Renner as the Avengers, alongside Tom Hiddleston, Stellan Skarsgård, and Samuel L. Jackson. In the film, Nick Fury and the spy agency S.H.I.E.L.D. recruit Tony Stark, Steve Rogers, Bruce Banner, Thor, Natasha Romanoff, and Clint Barton to form a team capable of stopping Thor's brother Loki from subjugating Earth.",
//     thumbnail:
//       "https://upload.wikimedia.org/wikipedia/en/8/8a/The_Avengers_%282012_film%29_poster.jpg",
//     thumbnail_width: 220,
//     thumbnail_height: 326,
//   },
//   {
//     title: "Avengers: Age of Ultron",
//     year: 2015,
//     cast: [
//       "Robert Downey Jr.",
//       "Chris Hemsworth",
//       "Mark Ruffalo",
//       "Chris Evans",
//       "Scarlett Johansson",
//       "Jeremy Renner",
//       "Don Cheadle",
//       "Aaron Taylor-Johnson",
//       "Elizabeth Olsen",
//       "Paul Bettany",
//       "Cobie Smulders",
//       "Anthony Mackie",
//       "Hayley Atwell",
//       "Idris Elba",
//       "Stellan Skarsgård",
//       "James Spader",
//       "Samuel L. Jackson",
//     ],
//     genres: ["Superhero"],
//     href: "Avengers:_Age_of_Ultron",
//     extract:
//       "Avengers: Age of Ultron is a 2015 American superhero film based on the Marvel Comics superhero team the Avengers. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the sequel to The Avengers (2012) and the 11th film in the Marvel Cinematic Universe (MCU). Written and directed by Joss Whedon, the film features an ensemble cast including Robert Downey Jr., Chris Hemsworth, Mark Ruffalo, Chris Evans, Scarlett Johansson, Jeremy Renner, Don Cheadle, Aaron Taylor-Johnson, Elizabeth Olsen, Paul Bettany, Cobie Smulders, Anthony Mackie, Hayley Atwell, Idris Elba, Linda Cardellini, Stellan Skarsgård, James Spader, and Samuel L. Jackson. In the film, the Avengers fight Ultron (Spader)—an artificial intelligence created by Tony Stark (Downey) and Bruce Banner (Ruffalo) who plans to bring about world peace by causing human extinction.",
//     thumbnail:
//       "https://upload.wikimedia.org/wikipedia/en/f/ff/Avengers_Age_of_Ultron_poster.jpg",
//     thumbnail_width: 220,
//     thumbnail_height: 326,
//   },
//   {
//     title: "The Avengers",
//     year: 2012,
//     cast: [
//       "Robert Downey Jr.",
//       "Chris Evans",
//       "Chris Hemsworth",
//       "Mark Ruffalo",
//       "Jeremy Renner",
//       "Scarlett Johansson",
//       "Tom Hiddleston",
//       "Samuel L. Jackson",
//       "Stellan Skarsgård",
//       "Cobie Smulders",
//       "Clark Gregg",
//       "Gwyneth Paltrow",
//       "Maximiliano Hernández",
//       "Paul Bettany",
//       "Alexis Denisof",
//       "Damion Poitier",
//       "Powers Boothe",
//       "Jenny Agutter",
//       "Stan Lee",
//       "Harry Dean Stanton",
//       "Jerzy Skolimowski",
//       "Warren Kole",
//       "Enver Gjokaj",
//     ],
//     genres: ["Superhero"],
//     href: "The_Avengers_(2012_film)",
//     extract:
//       "Marvel's The Avengers, or simply The Avengers, is a 2012 American superhero film based on the Marvel Comics superhero team of the same name. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the sixth film in the Marvel Cinematic Universe (MCU). Written and directed by Joss Whedon, the film features an ensemble cast including Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth, Scarlett Johansson, and Jeremy Renner as the Avengers, alongside Tom Hiddleston, Stellan Skarsgård, and Samuel L. Jackson. In the film, Nick Fury and the spy agency S.H.I.E.L.D. recruit Tony Stark, Steve Rogers, Bruce Banner, Thor, Natasha Romanoff, and Clint Barton to form a team capable of stopping Thor's brother Loki from subjugating Earth.",
//     thumbnail:
//       "https://upload.wikimedia.org/wikipedia/en/8/8a/The_Avengers_%282012_film%29_poster.jpg",
//     thumbnail_width: 220,
//     thumbnail_height: 326,
//   },
//   {
//     title: "Avengers: Age of Ultron",
//     year: 2015,
//     cast: [
//       "Robert Downey Jr.",
//       "Chris Hemsworth",
//       "Mark Ruffalo",
//       "Chris Evans",
//       "Scarlett Johansson",
//       "Jeremy Renner",
//       "Don Cheadle",
//       "Aaron Taylor-Johnson",
//       "Elizabeth Olsen",
//       "Paul Bettany",
//       "Cobie Smulders",
//       "Anthony Mackie",
//       "Hayley Atwell",
//       "Idris Elba",
//       "Stellan Skarsgård",
//       "James Spader",
//       "Samuel L. Jackson",
//     ],
//     genres: ["Superhero"],
//     href: "Avengers:_Age_of_Ultron",
//     extract:
//       "Avengers: Age of Ultron is a 2015 American superhero film based on the Marvel Comics superhero team the Avengers. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the sequel to The Avengers (2012) and the 11th film in the Marvel Cinematic Universe (MCU). Written and directed by Joss Whedon, the film features an ensemble cast including Robert Downey Jr., Chris Hemsworth, Mark Ruffalo, Chris Evans, Scarlett Johansson, Jeremy Renner, Don Cheadle, Aaron Taylor-Johnson, Elizabeth Olsen, Paul Bettany, Cobie Smulders, Anthony Mackie, Hayley Atwell, Idris Elba, Linda Cardellini, Stellan Skarsgård, James Spader, and Samuel L. Jackson. In the film, the Avengers fight Ultron (Spader)—an artificial intelligence created by Tony Stark (Downey) and Bruce Banner (Ruffalo) who plans to bring about world peace by causing human extinction.",
//     thumbnail:
//       "https://upload.wikimedia.org/wikipedia/en/f/ff/Avengers_Age_of_Ultron_poster.jpg",
//     thumbnail_width: 220,
//     thumbnail_height: 326,
//   },
//   {
//     title: "The Avengers",
//     year: 2012,
//     cast: [
//       "Robert Downey Jr.",
//       "Chris Evans",
//       "Chris Hemsworth",
//       "Mark Ruffalo",
//       "Jeremy Renner",
//       "Scarlett Johansson",
//       "Tom Hiddleston",
//       "Samuel L. Jackson",
//       "Stellan Skarsgård",
//       "Cobie Smulders",
//       "Clark Gregg",
//       "Gwyneth Paltrow",
//       "Maximiliano Hernández",
//       "Paul Bettany",
//       "Alexis Denisof",
//       "Damion Poitier",
//       "Powers Boothe",
//       "Jenny Agutter",
//       "Stan Lee",
//       "Harry Dean Stanton",
//       "Jerzy Skolimowski",
//       "Warren Kole",
//       "Enver Gjokaj",
//     ],
//     genres: ["Superhero"],
//     href: "The_Avengers_(2012_film)",
//     extract:
//       "Marvel's The Avengers, or simply The Avengers, is a 2012 American superhero film based on the Marvel Comics superhero team of the same name. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the sixth film in the Marvel Cinematic Universe (MCU). Written and directed by Joss Whedon, the film features an ensemble cast including Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth, Scarlett Johansson, and Jeremy Renner as the Avengers, alongside Tom Hiddleston, Stellan Skarsgård, and Samuel L. Jackson. In the film, Nick Fury and the spy agency S.H.I.E.L.D. recruit Tony Stark, Steve Rogers, Bruce Banner, Thor, Natasha Romanoff, and Clint Barton to form a team capable of stopping Thor's brother Loki from subjugating Earth.",
//     thumbnail:
//       "https://upload.wikimedia.org/wikipedia/en/8/8a/The_Avengers_%282012_film%29_poster.jpg",
//     thumbnail_width: 220,
//     thumbnail_height: 326,
//   },
// ];

const Movies = () => {
  const { data: movies, isLoading, setSearchKeyword, setPage } = useFilms();

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };
  const { theme } = useTheme();
  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <section
          id="home"
          className={`${
            theme === "dark" && "bg-grey-900"
          } relative min-h-screen  p-10 overflow-hidden`}
        >
          <div className="flex flex-col gap-6">
            <h2>Upcoming Movies</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {movies.map((movie: any) => (
                <MovieCard
                  title={movie.Title}
                  year={movie.Year}
                  genres={movie.Genre}
                  thumbnail={movie.Images[1]}
                  extract={movie.Plot}
                  key={movie._id}
                />

                // <div
                //   className={` ${
                //     theme === "dark"
                //       ? "bg-black text-white shadow-dark"
                //       : "bg-white text-black shadow-light"
                //   } rounded-md overflow-hidden`}
                //   key={i}
                // >
                //   <img
                //     className="w-full h-auto object-cover"
                //     alt={movie.title}
                //     src={movie.thumbnail}
                //   />

                //   <div className="p-4 flex flex-col ">
                //     <div className="flex justify-between">
                //       <p className="text-sm font-semibold">{movie.title}</p>
                //       <p className="text-sm text-lime-300">
                //         <SlCalender style={{ color: "#CCFF00" }} /> {movie.year}
                //       </p>
                //     </div>
                //     <div className="flex justify-between">
                //       <p className="text-sm">
                //         <FaClock style={{ color: "#CCFF00" }} /> : 2:30
                //       </p>
                //       <p className="text-sm">
                //         <FaRegStar style={{ color: "#CCFF00" }} /> : 4.5
                //       </p>
                //     </div>
                //   </div>
                // </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};
export default Movies;
