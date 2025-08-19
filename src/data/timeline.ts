import fpProjectImage from "../assets/timeline/fp-project.png";
import hackudc2023Image from "../assets/timeline/hackudc-2023.jpeg";
import hackupc2023Image from "../assets/timeline/hackupc-2023.jpeg";
import maltaImage from "../assets/timeline/malta.jpg";
import tizianoImage from "../assets/timeline/tiziano.jpeg";
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
      year: "2023",
      title: "Deep GPUL Involvement & First HackUDC",
      description:
        "2023 arrived and my involvement in GPUL was getting deeper. We traveled to FOSDEM with them for the first time (haven't missed one since) and helped organize the first edition of HackUDC, a hackathon like the one in Barcelona, but at our own university. The first year we got 70 participants and it was such a success!",
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
        "At the end of April 2022, we went to HackUPC in Barcelona with Álvaro. It was our first hackathon experience and we had so much fun! At the time, Wordle was the trendy game and we wanted to create an application to track competition between a group of friends, so we created the Wordle League. There we met some people from GPUL... that's where we connected more and got involved in the association more deeply.",
      location: "Barcelona, Spain",
      image: hackupc2023Image,
      imageCaption: "Álvaro sleeping while I was coding some of WordleLeague.",
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
        "University continued in the background—I skipped all the classes I could. The classes I couldn't skip, I'd sit in the last row, ignore the teacher, and work on my laptop. Then at night, I'd study and do all the uni homework by myself. If that wasn't enough, there was something that caught my attention: a group of people organizing workshops and small events. One day, with my new friend Álvaro that I'd met at uni, we went to one of the workshops. We really enjoyed it and started going to their meetups more often.",
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
        "In March 2021, during my first year of university, I got recommended by a colleague (Carlos) from previous studies to start working as a backend engineer at BizAway. I rocked the interview and mentioned that what I really like is system administration, so after a month I joined the (until then) one-person team: the infra team. The job was to migrate from a big monolith in Node.js to separate containerized applications that deploy in EKS (Managed AWS Kubernetes). That was my job for a couple of years, along with other housekeeping tasks and keeping the infra running. This was like a master's degree in Docker, containers, and so on—technologies I knew about but had never gone deep into. I got lots of responsibility and hands-on experience fast.",
      location: "Remote",
      image: tizianoImage,
      imageCaption: "Devirtualizing Tiziano, my infra mate.",
      tags: ["Infrastructure", "Docker", "Kubernetes", "AWS"],
    },
    {
      year: "2020-2021",
      title: "Computer Engineering Bachelor - Reality Check",
      description:
        "So I moved to A Coruña and started the Computer Engineering bachelor's degree. Not gonna lie, my main motivation to go to university was just to prove myself to all the people who said: 'university is not like this, it's harder, you won't get the easy good marks anymore...' Math was hard—I'd spent the last four years studying pure computers without a single calculation, and by the second week they were explaining derivatives and integrals, which I'd never heard of. I had to put my elbows on the table and study. But I even started to like math! On the other hand, since I'd skipped some basic classes, in my first year I already had subjects from the second year. I had to build a shell in C and the teacher was going so fast... I didn't even know how to compile a program! That was tricky, but I managed.",
      location: "A Coruña, Spain",
      image: uniNotesImage,
      imageCaption: "iPad notes of some university subjects.",
      tags: ["University", "Computer Engineering", "Math", "Challenge"],
      links: [
        {
          text: "C Assignment",
          url: "https://github.com/jorgeteixe/thatshell",
        },
      ],
    },
    {
      year: "2020",
      title: "BackStringBoys Project - COVID Lockdown",
      description:
        "I was planning on going on Erasmus again—everything was getting ready, I was going to go to the Netherlands but... COVID lockdown hit. So everything got cancelled. The alternative to not doing the internship was doing a longer project, so I paired with one of my mates from class and we decided to rock it. And for what they'd taught us, I think we did well. I still keep the project—we created a GitHub organization just for this: BackStringBoys. Between Counter-Strike matches, we spent the lockdown working on this project.",
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
        "After this, I had the option to choose between three different higher technician titles. I didn't want to go with the sysadmin one because I thought I'd get bored having to start over with networking and many other concepts, even though it was what I really liked. So I went with multiplatform applications development. Again, two years and an internship. The two years went by quickly—I learned a lot of stuff but spent most of the time in the bar and doing more advanced stuff like learning AngularJS (trendy at the time) and Spring Boot backend services. At the time I thought that was cool. Ok?",
      location: "Vigo, Spain",
      tags: ["AngularJS", "Spring Boot", "Self-Learning"],
    },
    {
      year: "2018",
      title: "First Erasmus - Malta Experience",
      description:
        "This is when I went to Malta for my first Erasmus experience. Note that I was 17 years old here... I barely spoke any English, so this was my first real-world going-away experience in a foreign language. But I got used to it pretty quickly—work was fun: I was taking care of the 'troubleticket@' email, handling IT Support, and whenever there were no new messages, setting up entire new floors (cabling, desks, computers, hardware and software...). It was a really nice experience and I learned a lot there!",
      location: "Malta",
      image: maltaImage,
      imageCaption: "Me, looking cool in Malta!",
      tags: ["Erasmus", "English", "IT Support"],
    },
    {
      year: "2016-2018",
      title: "Sistemas Microinformáticos y Redes",
      description:
        "So later that year I started \"Formación Profesional\" in Microcomputer Systems and Networks. I learned a lot: basics of networking, computers, how to crimp Ethernet cables, and configure Windows and Linux machines. Also how to assemble computers and so on. In the afternoons I worked as a telemarketer selling power and gas for homes for Repsol. During this time, I developed my first cool program: we had shared folders for the class, so I made a chat. One script in a hidden folder that opened two terminals—one did an infinite cat of a file with a sleep 1, and the other terminal had a prompt to choose a username and ask for messages. Then it would echo '[username]: [message]'. So cool, right?",
      location: "Vigo, Spain",
      tags: ["Networking", "Linux", "Chat Program", "Telemarketer"],
    },
    {
      year: "2016",
      title: "Finished Mandatory Education",
      description:
        "In 2016 I finished my mandatory education and it was clear to me that I wanted to do something with computers. At the time I was more into playing games than actually understanding computers, but hey, I think it worked out.",
      location: "Redondela, Spain",
      tags: ["Education", "Computers", "Gaming", "Career Start"],
    },
  ],
};
