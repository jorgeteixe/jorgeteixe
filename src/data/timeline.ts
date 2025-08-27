import atlantica23Image from "../assets/timeline/atlantica23.jpeg";
import atlantica25Image from "../assets/timeline/atlantica25.jpeg";
import brokenVanImage from "../assets/timeline/broken-van.jpeg";
import codemotionImage from "../assets/timeline/codemotion.jpeg";
import fpProjectImage from "../assets/timeline/fp-project.png";
import hackudc2023Image from "../assets/timeline/hackudc-2023.jpeg";
import hackudc2024Image from "../assets/timeline/hackudc24.jpg";
import hackudc2025Image from "../assets/timeline/hackudc25.jpeg";
import hackupc2023Image from "../assets/timeline/hackupc-2023.jpeg";
import maltaImage from "../assets/timeline/malta.jpg";
import steamdeckImage from "../assets/timeline/steamdeck.jpeg";
import tizianoImage from "../assets/timeline/tiziano.jpeg";
import ukraineImage from "../assets/timeline/ukraine.jpeg";
import uniNotesImage from "../assets/timeline/uni-notes.jpeg";

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  location?: string;
  image?:
    | string
    | { src: string; width: number; height: number; format: string };
  imageCaption?: string;
  tags?: string[];
  links?: { text: string; url: string }[];
}

export interface TimelineData {
  timeline: TimelineItem[];
}

export const timelineData: TimelineData = {
  timeline: [
    {
      year: "2025",
      title: "LareiraConf & AtlanticaConf - Conference Organization",
      description:
        "Organizing one conference wasn't enough apparently! I also helped organize the first LareiraConf the same year. We got more than 200 people together and created something completely new in A Coruña. Then I got involved with AtlanticaConf as well, bringing over 400 participants to the Faculty of Informatics. The production level was insane. Two days, more than 60 talks, with speakers from Google to local aerospace companies. Pretty crazy stuff!",
      location: "A Coruña, Spain",
      image: atlantica25Image,
      imageCaption: "Me, managing the video production of AtlanticaConf.",
      tags: ["LareiraConf", "AtlanticaConf", "500+ attendees", "60 talks"],
      links: [
        {
          text: "LareiraConf",
          url: "https://www.lareiraconf.es/",
        },
        {
          text: "AtlanticaConf",
          url: "https://atlanticaconf.com/",
        },
        {
          text: "AtlanticaConf Aftermovie",
          url: "https://www.youtube.com/watch?v=sPpY_uSnSrM",
        },
      ],
    },
    {
      year: "2025",
      title: "Open Source Advocacy",
      description:
        "At the start of 2025, I made a big career move and started working at the Inditex Open Source Office. This is Spain's largest company and the biggest fashion retailer globally, so I'm helping them with their open source strategy. It was an opportunity I couldn't pass up. Helping shape open source adoption in a company with almost ten thousand developers? Yeah, that's pretty exciting. I'm working on building awareness, making sure we consume open source responsibly, and releasing new projects to the world. Making change happen one commit at a time.",
      location: "A Coruña, Spain",
      tags: ["Open Source", "Corporate", "Awareness"],
      links: [
        {
          text: "Inditex GitHub",
          url: "https://github.com/inditextech",
        },
      ],
    },
    {
      year: "2025",
      title: "HackUDC 2025 - Crossing borders",
      description:
        "The third edition of HackUDC! Leading the organization again, we managed to bring together more than 300 participants from seven different countries. More than 70 new open source projects came out of it. This was probably the hardest thing I've ever organized. It took hundreds of hours, but seeing what the event has become makes all those sleepless nights worth it. When you see participants get this excited about what they're building, you know you're doing something right.",
      location: "A Coruña, Spain",
      image: hackudc2025Image,
      imageCaption:
        "Getting almost 100 participants to play WikiRace at 4:00 AM.",
      tags: ["HackUDC", "300 participants", "International"],
      links: [
        {
          text: "Website",
          url: "https://hackudc2025.gpul.org/",
        },
        {
          text: "Projects",
          url: "https://hackudc2025.devpost.com/project-gallery",
        },
        {
          text: "Aftermovie",
          url: "https://www.youtube.com/watch?v=EDIGMHPDKsI",
        },
        {
          text: "News Article",
          url: "https://www.elespanol.com/quincemil/cultura/educacion/20250225/hackudc-concluye-coruna-implicacion-sin-precedentes-estudiantado/926907573_0.html",
        },
      ],
    },
    {
      year: "2024",
      title: "Van Life Project - DIY Camper Conversion",
      description:
        "I bought a van. A Fiat Ducato. The plan was to convert it into a camper myself and then hack around Europe as a digital nomad. Fun idea, but turns out the execution was way trickier than I expected. The project is still ongoing... hopefully it'll be road-ready soon!",
      location: "Redondela, Spain",
      image: brokenVanImage,
      imageCaption: "My dad checking out the broken van I bought!",
      tags: ["Van Conversion", "DIY", "Digital Nomad"],
    },
    {
      year: "2024",
      title: "Erasmus, Freelancing and Travel!",
      description:
        "The Tuesday after HackUDC weekend, I packed up and moved to Timișoara, Romania for Erasmus to finish my last two university subjects. Also started a new professional adventure by going freelance, helping John and Lukas at RundownStudio build their timing management tool for event producers. Very different from infrastructure work, but it gave me lots of flexibility to travel. And did I travel! In those 5 months in Romania, I also hit Norway, Sweden, Italy (again), Bulgaria, Turkey, Ukraine, Austria, Slovenia, Croatia, Denmark, and Serbia. There wasn't a week without a trip somewhere!",
      image: ukraineImage,
      imageCaption:
        "Coding on the train on our way to Kyiv, Ukraine. Mañu's asleep.",
      location: "Romania (+ 11 countries)",
      tags: ["Erasmus", "RundownStudio", "Travel", "Digital Nomad"],
      links: [
        {
          text: "Some of the Features I Shipped",
          url: "https://rundownstudio.app/blog/new-in-2-0/",
        },
      ],
    },
    {
      year: "2024",
      title: "HackUDC 2024 - 150 participants?",
      description:
        "Second edition of HackUDC! We improved a lot and got 150 participants this time. The hackathon created huge interest in the association, spread the word about open source among students, and resulted in 40 new open source projects plus over 2000 euros in prizes. This took hundreds of hours of work from a small team of volunteers. Leading was challenging but completely worth it after talking to participants. Some learned a ton, others even got jobs from it!",
      location: "A Coruña, Spain",
      image: hackudc2024Image,
      imageCaption: "Group picture from the event.",
      tags: ["HackUDC", "Open Source", "Leadership"],
      links: [
        {
          text: "Website",
          url: "https://hackudc2024.gpul.org/",
        },
        {
          text: "Projects",
          url: "https://hackudc-2024.devpost.com/project-gallery",
        },
        {
          text: "Aftermovie",
          url: "https://www.youtube.com/watch?v=Z4itLbMdTYM",
        },
        {
          text: "News Article",
          url: "https://www.lavozdegalicia.es/noticia/educacion/2024/02/16/ano-pasado-contratamos-5-estudiantes-esperamos-emplear-tantos/00031708107507440696583.htm",
        },
      ],
    },
    {
      year: "2024",
      title: "University Meetups & FOSDEM Tradition",
      description:
        "We were organizing regular meetups at university that brought new people to the association and got people interested in what we were doing. I went to FOSDEM again with new members, continuing the association's tradition of going to Europe's biggest open source conference!",
      location: "A Coruña, Spain & Brussels, Belgium",
      image: steamdeckImage,
      imageCaption: "Talk about Steam Deck by Berto from Igalia.",
      tags: ["Meetups", "GPUL", "FOSDEM"],
      links: [
        {
          text: "Meetup Event",
          url: "https://www.meetup.com/gpul-labs/events/297375864/",
        },
        {
          text: "Berto's Profile",
          url: "https://www.igalia.com/team/berto",
        },
      ],
    },
    {
      year: "2023",
      title: "Conference Travels & Infrastructure Maturity",
      description:
        "By the end of 2023, I was traveling constantly, hitting conferences and working while treating university as background noise. BizAway's infrastructure was fully migrated to Kubernetes by then. Everything was properly containerized and deployed automatically following DevOps best practices, with full observability. Things had become stable, so my work was mostly maintenance and optimization.",
      location: "Italy & Spain",
      image: codemotionImage,
      imageCaption: "Talk by Salvatore Sanfilippo (creator of Redis) in Milan.",
      tags: ["Conferences", "Kubernetes", "DevOps"],
      links: [
        {
          text: "Linkedin Post",
          url: "https://www.linkedin.com/posts/jorge-teixeira-crespo_codemotionmilano2023-devops-bizaway-activity-7123297968719282177-9Iul?utm_source=share&utm_medium=member_desktop&rcm=ACoAACodppUBYUfak2yjcJ4IdYS_2Lw5-7FKvRM",
        },
      ],
    },
    {
      year: "2023",
      title: "GPUL President & First AtlanticaConf",
      description:
        "In April 2023, GPUL had elections and I became president! Maximum level of involvement unlocked. Later that year, I also volunteered at the second AtlanticaConf (organized by past board members) and started planning the second HackUDC. The responsibility was exciting, and I was ready to take the association to the next level.",
      location: "A Coruña, Spain",
      image: atlantica23Image,
      imageCaption: "AtlanticaConf volunteers group picture.",
      tags: ["GPUL President", "AtlanticaConf", "HackUDC Planning"],
      links: [
        {
          text: "AtlanticaConf Website",
          url: "https://atlanticaconf.com/2023/",
        },
        {
          text: "AtlanticaConf Aftermovie",
          url: "https://www.youtube.com/watch?v=JgvzxdY4Qm0",
        },
      ],
    },
    {
      year: "2023",
      title: "Deep GPUL Involvement & First HackUDC",
      description:
        "2023 arrived and I was getting really involved with GPUL. We traveled to FOSDEM together for the first time (haven't missed one since) and helped organize the first HackUDC. A hackathon like the one in Barcelona, but at our own university. The first year brought 70 participants and it was such a success that we knew we had to keep going.",
      location: "A Coruña, Spain & Brussels, Belgium",
      image: hackudc2023Image,
      imageCaption: "Some friends participating in HackUDC 2023.",
      tags: ["GPUL", "FOSDEM", "HackUDC"],
      links: [
        {
          text: "HackUDC Webpage",
          url: "https://hackudc2023.gpul.org",
        },
        {
          text: "HackUDC Submissions",
          url: "https://hackudc.devpost.com/project-gallery",
        },
      ],
    },
    {
      year: "2022",
      title: "HackUPC & Wordle League",
      description:
        "At the end of April 2022, Álvaro and I went to HackUPC in Barcelona. Our first hackathon and we had a blast! Wordle was super trendy at the time, and we wanted to create an app to track competition between friends, so we built the Wordle League. That's where we met some people from GPUL, which led to us getting more involved with the association.",
      location: "Barcelona, Spain",
      image: hackupc2023Image,
      imageCaption: "Álvaro sleeping while I coded some of WordleLeague.",
      tags: ["HackUPC", "Wordle League", "GPUL"],
      links: [
        {
          text: "Wordle League",
          url: "https://devpost.com/software/wordle-league",
        },
        {
          text: "Alvaro's Linkedin Post",
          url: "https://www.linkedin.com/posts/alvvarofreire_i-cant-even-explain-how-much-i-enjoyed-last-activity-6927743826560229376-VDRr",
        },
      ],
    },
    {
      year: "2021-2022",
      title: "University Life & GPUL Discovery",
      description:
        "University continued in the background. I skipped all the classes I could manage to. For the ones I couldn't skip, I'd sit in the back row, ignore the teacher, and work on my laptop. Then at night, I'd study and do all the homework by myself. But there was something that caught my attention: a group of people organizing workshops and small events. One day, my new friend Álvaro (who I'd met at university) and I went to one of their workshops. We really enjoyed it and started going to their meetups regularly.",
      location: "A Coruña, Spain",
      tags: ["University", "Self-Study", "GPUL", "Workshops"],
      links: [
        {
          text: "My First GPUL Meetup",
          url: "https://www.meetup.com/gpul-labs/events/283608954/",
        },
      ],
    },
    {
      year: "2021",
      title: "First Real Job - BizAway Infrastructure Team",
      description:
        "In March 2021, during my first year of university, I got recommended by a colleague (Carlos) from my previous studies to start working as a backend engineer at BizAway. I nailed the interview and mentioned that what I really loved was system administration. After a month, I joined what had been a one-person team: the infrastructure team. Our job was to migrate from a big Node.js monolith to separate containerized applications deployed on EKS (Managed AWS Kubernetes). This became my focus for the next couple of years, along with other tasks and keeping the infrastructure running smoothly. It was like getting a master's degree in Docker, containers, and cloud technologies. Things I knew about but had never gone deep into. I got tons of responsibility and hands-on experience quickly.",
      location: "Remote",
      image: tizianoImage,
      imageCaption: "Finally meeting Tiziano, my infra teammate, in person.",
      tags: ["Infrastructure", "Docker", "Kubernetes", "AWS"],
      links: [
        {
          text: "BizAway",
          url: "https://www.bizaway.com/",
        },
        {
          text: "LinkedIn Post",
          url: "https://www.linkedin.com/posts/jorge-teixeira-crespo_workaniversary-bizaway-1year-activity-6914564326171299842-bJfW",
        },
      ],
    },
    {
      year: "2020-2021",
      title: "Computer Engineering Bachelor - Reality Check",
      description:
        "I moved to A Coruña and started the Computer Engineering bachelor's degree. I won't lie, my main motivation for going to university was to prove myself to all the people who said 'university is not like this, it's harder, you won't get those easy good marks anymore.' Math was brutal. I'd spent the last four years studying pure computer science without a single calculation, and by the second week they were explaining derivatives and integrals, which I'd never even heard of. I had to really buckle down and study. But I actually started enjoying math! Since I'd skipped some basic classes, my first year included subjects from the second year. I had to build a shell in C and the teacher was moving so fast that I didn't even know how to compile a program! It was challenging, but I figured it out.",
      location: "A Coruña, Spain",
      image: uniNotesImage,
      imageCaption: "iPad notes from some university subjects.",
      tags: ["University", "Computer Engineering", "Math", "Challenge"],
      links: [
        {
          text: "C Assignment",
          url: "https://github.com/jorgeteixe/thatshell",
        },
        {
          text: "Algorithm Notes",
          url: "https://github.com/jorgeteixe/udc-prep-algoritmos/tree/main/tema2",
        },
      ],
    },
    {
      year: "2020",
      title: "BackStringBoys Project - COVID Lockdown",
      description:
        "I was planning another Erasmus. Everything was set up for the Netherlands, but then COVID lockdown hit and everything got cancelled. The alternative to not doing an internship was a longer project, so I paired up with one of my classmates and we decided to make it awesome. For what they'd taught us, I think we did pretty well. I still keep the project around. We even created a GitHub organization just for it: BackStringBoys. Between Counter-Strike matches during lockdown, we spent our time building this project.",
      location: "Redondela, Spain (Lockdown)",
      image: fpProjectImage,
      imageCaption: "Web interface of the BackStringBoys project.",
      tags: ["COVID", "Final Project", "BackStringBoys"],
      links: [
        {
          text: "BackStringBoys GitHub",
          url: "https://github.com/BackStringBoys",
        },
        {
          text: "Project Document",
          url: "https://cloud.gpul.org/s/kyYBzaiJnTPYd2i",
        },
      ],
    },
    {
      year: "2018-2020",
      title: "Multiplatform Applications Development",
      description:
        "I had the option to choose between three different higher technician degrees. I didn't want the sysadmin one because I thought I'd get bored starting over with networking and other concepts, even though it was what I really enjoyed. So I chose multiplatform applications development. Another two years plus an internship. Time flew by. I learned plenty but spent most of my time in the campus bar while teaching myself more advanced stuff like AngularJS (trendy at the time) and Spring Boot backend services. I thought I was pretty cool back then!",
      location: "Vigo, Spain",
      tags: ["AngularJS", "Spring Boot", "Self-Learning"],
      links: [
        {
          text: "Milleiro Project (Learning Angular)",
          url: "https://github.com/jorgeteixe/milleiro",
        },
      ],
    },
    {
      year: "2018",
      title: "First Erasmus - Malta Experience",
      description:
        "This is when I went to Malta for my first Erasmus experience. Keep in mind I was only 17 years old and barely spoke any English, so this was my first real experience living abroad in a foreign language. But I adapted pretty quickly. Work was fun! I handled the 'troubleticket@' email for IT support, and when there were no new messages, I'd set up entire new floors with cabling, desks, computers, and all the hardware and software setup. It was an amazing experience and I learned so much!",
      location: "Malta",
      image: maltaImage,
      imageCaption: "Me, looking cool in Malta!",
      tags: ["Erasmus", "English", "IT Support"],
    },
    {
      year: "2016-2018",
      title: "The Computer Journey Begins",
      description:
        "Later that year I started \"Formación Profesional\" in Microcomputer Systems and Networks. I learned tons: networking basics, computer fundamentals, how to crimp Ethernet cables, and configure both Windows and Linux machines. I also learned computer assembly and troubleshooting. In the afternoons, I worked as a telemarketer selling power and gas contracts for homes through Repsol. During this time, I created my first cool program: we had shared class folders, so I built a chat system. One script in a hidden folder opened two terminals. One running an infinite cat loop on a file with sleep 1, and another with a prompt for username and messages that would echo '[username]: [message]'. I thought it was the coolest thing ever!",
      location: "Vigo, Spain",
      tags: ["Networking", "Linux", "Chat Program", "Telemarketer"],
    },
    {
      year: "2016",
      title: "Finished Mandatory Education",
      description:
        "In 2016 I finished my mandatory education and it was clear that I wanted to do something with computers. At the time I was more interested in playing games than actually understanding how computers worked, but hey, I think it all worked out in the end!",
      location: "Redondela, Spain",
      tags: ["Education", "Computers", "Gaming", "Career Start"],
    },
  ],
};
