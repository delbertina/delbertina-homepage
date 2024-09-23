import type { ImgCardData } from "../types/card-data.js";

export const DEV_DATA: ImgCardData[] = [
  {
    title: "Blissful Book Bin",
    subtitle: "Book cataloging app with React",
    description:
      "The user can CRUD books, tags, and categories with notifications that the actions were successful or not. Utilizes the Faker API to explore 'new books' and add to your list. Stores data to local storage of the browser.",
    cardDate: new Date("2024-06"),
    imgLink: "https://i.imgur.com/I9WCizO.png",
    imgAlt: "Editing the information for a book",
    cardLink: "https://delbertina.github.io/BlissfulBookBin/",
    tags: ["React", "MUI"],
  },
  {
    title: "Adept Quiz Wizard",
    subtitle: "Quiz CRUD application in React",
    description:
      "The user can CRUD quizzes and then take the quizzes for a recorded score. I focused on adding tests with Jest and React Testing Library to this project and a automaticly updating github badge to display the 100% code coverage that I was able to achieve.",
    cardDate: new Date("2024-05"),
    imgLink: "https://i.imgur.com/XJW7SeJ.png",
    imgAlt: "Editing an existing quiz",
    cardLink: "https://delbertina.github.io/AdeptQuizWizard/",
    tags: ["React", "MUI", "Jest"],
  },
  {
    title: "A Blinking Cursor",
    subtitle: "Idle clicker game inspired by A Dark Room",
    description:
      "Originally created in June 2019 to get up to speed in Vue before joining a startup. Uses Pinia for state management and was built with a focus on learning more about state management and modern development with Vue.",
    cardDate: new Date("2024-05"),
    imgLink: "https://i.imgur.com/so63wM8.png",
    imgAlt: "In-app image of main game page",
    cardLink: "https://delbertina.github.io/ABlinkingCursor/",
    tags: ["Vue", "Bootstrap", "Pinia", "Game"],
  },
  {
    title: "InfoTrack Take Home Test",
    subtitle:
      "Made as a take home project during the interview process with the company InfoTrack .",
    description:
      "I spent ~40 hours over the course of 2 weeks on the development of this project. This project was the final round of the ~5 round interview process, but the company decided to respond with a generic rejection email. The initial expectation was for the company to provide a completed backend of this project since the position was frontend focused, but that did not end up being the case. I had to spend the majority of my time getting up to speed on C#, .NET, and EF Core to complete this project.",
    cardDate: new Date("2024-04"),
    imgLink: "https://i.imgur.com/HxObp8k.png",
    imgAlt: "Search select dialog",
    cardLink: "https://github.com/delbertina/InfoTrackSEOApp",
    tags: ["React", "MUI", ".NET", "SQLite"],
  },
  {
    title: "Fish Are Friends",
    subtitle:
      "Fish pet simulator inspired by classic 90's web browsing and tamagotchi.",
    description:
      "Fish pet simulator inspired by classic 90's web browsing and tamagotchi. Built with Next.js with an emphasis on CSS animation. Created as part of an app jam with friends.",
    cardDate: new Date("2024-02"),
    imgLink: "https://i.imgur.com/uQuGWJi.png",
    imgAlt: "All actions unlocked and playing with fish",
    cardLink: "https://delbertina.github.io/FishAreFriends/",
    tags: ["Next.js", "React", "Game"],
  },
  {
    title: "Helpful Audio Chopper",
    subtitle: "Python application to split up an audio file and name the parts",
    description:
      "Originally made to split up YouTube video audio of 500+ sound effects, but built with reusability in mind.",
    cardDate: new Date("2024-01"),
    imgLink: "https://i.imgur.com/xt8TfZq.png",
    imgAlt: "Chunks found from audio file",
    cardLink: "https://github.com/delbertina/HelpfulAudioChopper",
    tags: ["Python"],
  },
  {
    title: "Multi Timer App",
    subtitle:
      "Android application build using Ionic React that can track multiple timers.",
    description:
      "Uses the Ionic framework with React to build a mobile application for Android devices. Allows the user to interact with multiple timers and modify the time on the fly with quick actions. Was developed for use with a game played with multiple teams where items in the game add or subtract from the time they're allowed to play the game. The app is currently pending approval to be listed on the Google Play Store for availability to Android devices worldwide!",
    cardDate: new Date("2023-12"),
    imgLink: "https://i.imgur.com/AD4FnwQ.png",
    imgAlt: "In-app images",
    cardLink: "https://github.com/delbertina/MultiTimerApp",
    tags: ["React", "Ionic", "Android", "Mobile"],
  },
  {
    title: "Flip Card Grid",
    subtitle:
      "A grid of cards that flip around made with React. For use with my version of the GMM flavor matching game.",
    description:
      "Two teams take turns tasting a dish of an unknown flavor and uses that info as well as previous answers to guess the correct flavor and the correct location of that flavor on the board. Each team can earn 1 point for guessing the correct flavor and 1 point for guessing the correct location. The plan is to add more pages with different uses for the reusable components. Made with the react-transition-group library.",
    cardDate: new Date("2023-11"),
    imgLink: "https://i.imgur.com/p2CYuCE.png",
    imgAlt: "In-app images",
    cardLink: "https://delbertina.github.io/FlipCardGrid/",
    tags: ["React", "Game", "Mobile", "MUI"],
  },
  {
    title: "Clip Clop Cam",
    subtitle: "Tiktok camera game filters for desktop webcams using WebGL",
    description:
      "Uses Angular as a framework to remake camera games from the Tiktok app for desktop. Currently includes a faithful recreation of the popular 'Avoid the Box' game. The goal is to have multiple different games and explore the features of WebGL.",
    cardDate: new Date("2023-02"),
    imgLink: "https://i.imgur.com/8A4AwAh.mp4",
    imgAlt: "In-app images",
    cardLink: "https://delbertina.github.io/ClipClopCam/",
    tags: ["Angular", "Game", "Desktop", "Camera"],
  },
  {
    title: "D3 Showcase",
    subtitle: "A simple Ionic React app showcasing the D3 library ",
    description:
      "A collection of proof of concepts for D3 graphs in Ionic React. Originally created to learn D3 for a professional project.",
    cardDate: new Date("2022-07"),
    imgLink: "https://i.imgur.com/LDDxxJY.png",
    imgAlt: "Annotation on selected node of graph",
    cardLink: "https://delbertina.github.io/d3-showcase/",
    tags: ["React", "Ionic", "D3.js"],
  },
  {
    title: "delbertina.com",
    subtitle: "The website you're on right now!",
    description:
      "This project was built using Svelte. It was chosen after researching different popular frameworks. Svelte is new and generally seems to be well-loved. That's how React started out and now it's more popular than the old hats of Angular & Vue.",
    cardDate: new Date("2022-06"),
    imgLink: "https://i.imgur.com/Ty2MCBq.png",
    imgAlt: "Homepage of this website",
    cardLink: "https://delbertina.com",
    tags: ["Svelte"],
  },
  {
    title: "Sound Cookies",
    subtitle: "React app of sounds that are a little bit more than a bite.",
    description:
      "Intended to be like a sound board, but with sounds from people the creator knows. Nearing all of the goal features set out for it. A great first project into learning React.",
    cardDate: new Date("2022-02"),
    imgLink: "https://i.imgur.com/ALzJgy3.mp4",
    imgAlt: "In-app images",
    cardLink: "https://delbertina.github.io/sound-cookies/",
    tags: ["React", "MUI"],
  },
  {
    title: "Player Headshot Grabber",
    subtitle:
      "Python script that uses selenium and pillow to get bust renders of Minecraft skins.",
    description:
      "Was used to get thousands of images for a fun yearbook. Selenium was chosen because the creator took a class in college that used it and knew it would work for this. Pillow library was used to put a background on the transparent image and crop to size. Necessary because the website that does these renders doesn't have an API for this.",
    cardDate: new Date("2020-11"),
    imgLink: "https://i.imgur.com/77N0AwR.png",
    imgAlt: "Final result used in a yearbook",
    cardLink: "https://github.com/delbertina/PlayerHeadshotGrabber",
    tags: ["Python", "Selenium"],
  },
  {
    title: "magnarisa.net",
    subtitle: "A website I made with friends for our internet community.",
    description:
      "Built using Angular 12 with mobile devices in mind. Originally started as a helper site for people to easily visit a list of vote links. Morphed into a full-blown website with a dynamic map and various info pages. Planned on trying to adapt it to be a PWA.",
    cardDate: new Date("2018-07"),
    imgLink: "https://i.imgur.com/ouJCatb.png",
    imgAlt: "The magnarisa website homepage",
    cardLink: "https://magnarisa.net",
    tags: ["Angular", "Material"],
  },
  {
    title: "Capacitor Plugin Pin Prompt",
    subtitle:
      "A capacitor plugin to prompt for Android device credentials and report results.",
    description:
      "Made to solve a bug in the existing bug in the capacitor framework. Made at work to solve an urgent customer issue.",
    cardDate: new Date("2021-06"),
    imgLink: "https://i.imgur.com/sZOkuGE.png",
    imgAlt: "Example of Android pin prompt",
    cardLink: "https://github.com/delbertina/capacitor-plugin-pin-prompt",
    tags: ["Android", "Capacitor", "Ionic"],
  },
  {
    title: "Start Page in Ember",
    subtitle: "My custom browser start page built with Ember",
    description:
      "Intentionally very bland and muted page to match the creator's desktop theme. Helps navigate quickly to frequently visited sites without cluttering up bookmarks bar.",
    cardDate: new Date("2022-06"),
    imgLink: "https://i.imgur.com/CSn3m0z.png",
    imgAlt: "My custom start page",
    cardLink: "https://github.com/delbertina/StartPageEmber",
    tags: ["Ember"],
  },
  {
    title: "MultiLauncher",
    subtitle: "Speed dial for Windows applications",
    description:
      "Created to be set up as an auto-run script on startup to pick which programs to quickly open up instead of setting all programs to open on startup.",
    cardDate: new Date("2019-06"),
    imgLink: "https://i.imgur.com/5sYGRpx.png",
    imgAlt: "MultiLauncher for Windows",
    cardLink: "https://github.com/delbertina/MultiLauncher",
    tags: ["Powershell", "Windows"],
  },
  {
    title: "RisaPages",
    subtitle: "Precursor to magnarisa.net",
    description:
      "Made with vanilla HTML, CSS & Javascript with Bootstrap. Was built before I was privy to modern frontend frameworks. Experimented with different color schemes based on URL parameters.",
    cardDate: new Date("2018-07"),
    imgLink: "https://i.imgur.com/crYvJI4.png",
    imgAlt: "Home page in default colors",
    cardLink: "https://github.com/delbertina/RisaPages",
    tags: ["Bootstrap"],
  },
  {
    title: "CardSuite",
    subtitle: "Card game suite using JavaFX ",
    description:
      "Originally part of a game suite for a school project, but with asperiations expanding into suite of only card games. The logic may be a little flawed as a result of having to simplify the game, but the gist of it is still correct.",
    cardDate: new Date("2017-11"),
    imgLink: "https://i.imgur.com/ZyJ911I.png",
    imgAlt: "Blackjack win senario",
    cardLink: "https://github.com/delbertina/CardSuite",
    tags: ["Java", "JavaFX", "Game"],
  },
  {
    title: "delario",
    subtitle: "My own personal version of the popular Agar.io game",
    description:
      "A simple JavaFX game made for an Advanced Java class in college. Kept adding to it for a while after. Made before the creator had much experience.",
    cardDate: new Date("2017-10"),
    imgLink: "https://i.imgur.com/1o9rd7z.gif",
    imgAlt: "My version of Agar.io",
    cardLink: "https://github.com/delbertina/delario",
    tags: ["Java", "JavaFX", "Game"],
  },
  {
    title: "Talented Typing Turtle",
    subtitle: "Script to print text using the turtle library",
    description:
      "Built in down time during Python class in college. I essentially finished the coursework in the first couple weeks so I had a lot of time to explore various cool libraries.",
    cardDate: new Date("2016-09"),
    imgLink: "https://i.imgur.com/4SJKqnD.png",
    imgAlt: "The output of talented displayed on the canvas",
    cardLink: "https://github.com/delbertina/TalentedTypingTurtle",
    tags: ["Python", "Turtle"],
  },
];
