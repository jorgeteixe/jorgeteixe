import fpProjectImage from "../assets/timeline/fp-project.png";
import maltaImage from "../assets/timeline/malta.jpg";

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
      year: "2020",
      title: "Computer Engineering Bachelor - A Coruña",
      description:
        "So I decided to move to A Coruña and start the Computer Engineering bachelor degree. Not gonna lie, main motivation to go to university was just to prove myself to all the people that said: 'university is not like Formación Profesional, it's harder, you won't get the easy good marks anymore...'",
      location: "A Coruña, Spain",
      tags: ["University", "Computer Engineering", "Challenge"],
    },
    {
      year: "2020",
      title: "BackStringBoys Project - COVID Lockdown",
      description:
        "I was planning on going on Erasmus again, everything was getting ready, I was going to to go to the Netherlands but... COVID lockdown appeared. So everything got cancelled. The alternative to not doing the internship was doing a longer project, so I paired with one of my mates from class and we decided to rock it. And for what they had taught us, I think we did well. I even keep the project - we created a GitHub organization just for this: BackStringBoys. Between Counter-Strike plays we spent the lockdown doing this project.",
      location: "Redondela, Spain (Lockdown)",
      image: fpProjectImage,
      imageCaption: "Web interface of the BackStringBoys project.",
      tags: ["COVID", "Final Project", "BackStringBoys", "Teamwork"],
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
        "After this, I had the option to choose between three different higher technician titles. I didn't want to go with the sysadmin one as I thought I was going to get bored having to start over with networking and many other concepts, even tho it was what I really liked. So I went with multiplatform applications development. Again, two years and internship. The two years went by quickly, learned a lot of stuff but spent most of the time in the bar and doing more advanced stuff like learning AngularJS (trendy at the time) and Spring Boot backend services. At the time I thought that was cool. Ok?",
      location: "Vigo, Spain",
      tags: ["AngularJS", "Spring Boot", "Self-Learning"],
    },
    {
      year: "2018",
      title: "First Erasmus - Malta Experience",
      description:
        "This is when I went to Malta to do my first Erasmus experience. Note that I was 17 years old here... I barely spoke any English so this was my first real-world going-away experience and in a foreign language. But I got used to it pretty quickly, work was fun: I was taking care of 'troubleticket@' email handling the IT Support and whenever there were no new messages, setting up a new floor completely (cabling, desks, computers, hardware and software...). It was a really nice experience and I learned a lot there!",
      location: "Malta",
      image: maltaImage,
      imageCaption: "Me, looking cool in Malta!",
      tags: ["Erasmus", "English", "IT Support"],
    },
    {
      year: "2016-2018",
      title: "Sistemas Microinformáticos y Redes",
      description:
        "So later that year I started \"Formación Profesional\" in Microcomputer System and Networks. I learned a lot: basics of networking, computers, how to crimp Ethernet cables and configure Windows and Linux machines. Also how to assemble computers and so on. In the afternoons I worked as a telemarketer selling power and gas for homes for Repsol. During this time, I developed my first cool program: we had shared folders for the class, so I made a chat. One script in a hidden folder that opened two terminals - one did an infinite cat of a file with a sleep 1, and the other terminal had a prompt to choose a username and asked for messages. Then it did echo '[username]: [message]'. So cool, right?",
      location: "Vigo, Spain",
      tags: ["Networking", "Linux", "Chat Program", "Telemarketer"],
    },
    {
      year: "2016",
      title: "Finished Mandatory Education",
      description:
        "In 2016 I finished my mandatory education and I had it clear that I wanted to do something with computers. At the time I was more into playing games than actually understanding computers, but hey, I think it worked out.",
      location: "Redondela, Spain",
      tags: ["Education", "Computers", "Gaming", "Career Start"],
    },
  ],
};
