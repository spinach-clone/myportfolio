export type Project = {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  role: string;
  tags: string[];
  year: string;
  color: string;
  problem: string;
  solution: string;
  process: {
    research: string;
    design: string;
    development: string;
  };
  features: string[];
  learned: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  presentationUrl?: string;
  image?: string;
  screenshots?: string[];
  featured?: boolean;
  designOnly?: boolean;
  prototypeUrl?: string;
  underReconstruction?: boolean;
  likes: number;
};

export const projects: Project[] = [
  {
    slug: "nutrio",
    name: "Nutrio",
    shortDescription:
      "An AI-powered pantry tracker, meal planner, and food waste reduction app.",
    description:
      "Nutrio is an AI-powered smart meal planning and food waste reduction system built around a household's real pantry inventory — logged via manual entry, barcode scanning, or image recognition — with AI-generated meal recommendations, a weekly planner, and food waste insights.",
    role: "Developer & Designer",
    tags: ["Mobile App", "UI/UX"],
    year: "2026",
    color: "#A29BFE",
    problem:
      "Households, students managing their own groceries, and busy professionals routinely lose track of what's in the fridge and pantry — food expires unnoticed, meals get planned without checking what's actually on hand, and grocery spending creeps up from rebuying things already in stock. Filipino households alone waste millions of tonnes of food a year, with rice, vegetables, and meat among the most commonly wasted items.",
    solution:
      "Nutrio lets users log pantry items across the refrigerator, freezer, and pantry through manual entry, barcode scanning, or image recognition, then tracks expiration dates, recommends meals based on what's actually available, builds a weekly meal plan with a cost-estimated grocery list, and visualizes food waste patterns over time — with an AI chatbot on hand for quick pantry and meal-planning questions.",
    process: {
      research:
        "Looked at who actually struggles with this — households wasting food they forgot about, students managing groceries on a tight budget, and professionals with no time to plan — to shape which features would matter most to each group.",
      design:
        "Designed the pantry logging flow around three ways of adding items — manual entry, barcode scanning, and image recognition — so tracking inventory could fit whatever was fastest in the moment, not just one method.",
      development:
        "Built with React Native and Expo for the mobile app, Express.js and Supabase for the backend and data layer, Claude Haiku 4.5 for AI-generated meal recommendations and the chatbot assistant, and the Edamam API for nutrition and recipe data.",
    },
    features: [
      "Pantry inventory tracking via manual entry, barcode scanning, or image recognition",
      "Expiration alerts before food goes to waste",
      "AI-generated meal recommendations based on what's on hand",
      "Weekly meal planner with a cost-estimated grocery list generator",
      "Food waste insights that visualize waste patterns over time",
      "AI chatbot assistant for quick pantry and meal-planning questions",
    ],
    learned:
      "React Native and Expo helped me build and ship a cross-platform app quickly. But working with Claude Haiku 4.5 for image recognition, the chatbot, and nutrition fallbacks taught me that using one AI API across different features still means solving each one differently, especially when it comes to prompts and handling failures.",
    techStack: ["React Native", "Expo", "Express.js", "Supabase", "Claude API", "Edamam API"],
    image: "/Nutrio Main Image.png",
    screenshots: ["/Nutrio1.png", "/Nutrio2.png"],
    featured: true,
    prototypeUrl:
      "https://www.figma.com/proto/9jQtFyGLAX0gftsu6C2lAj/NUTRIO?node-id=50-85&t=DQvR3QkFRTFEeJi8-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=50%3A85",
    likes: 71,
  },
  {
    slug: "chew",
    name: "Chew",
    shortDescription:
      "A personalized meal-planning app that makes everyday food decisions easier and more intentional.",
    description:
      "Chew is a personalized meal-planning mobile app designed to help users discover meals that fit their preferences while making everyday food decisions easier and more intentional.",
    role: "UI/UX Designer",
    tags: ["Mobile App", "UI/UX"],
    year: "2026",
    color: "#4F46E5",
    problem:
      "Deciding what to eat can be surprisingly difficult. People may have dietary restrictions, allergies, specific food preferences, or simply have no idea what to cook for the day. At the same time, poor meal planning can lead to unnecessary grocery purchases, duplicate ingredients, and food being left unused until it spoils — wasting money and contributing to a larger environmental problem. We wanted to create an experience that makes meal discovery more personal while helping users make better use of the food they already have.",
    solution:
      "Chew is a smart meal-planning application that personalizes the experience around each user's needs and preferences. During setup, users provide information such as their allergies, height, weight, and food preferences, which is then used to tailor the meals presented on their home feed. Users can browse recipes, save meals to their meal plan, discover nutritional information, and use AI to identify food from a photo — helping users move from \"What should I eat today?\" to a more intentional and personalized meal-planning experience.",
    process: {
      research:
        "We explored common challenges surrounding everyday meal decisions, particularly the difficulty of finding suitable meals and planning what to cook, and identified personalization as an important part of the experience — instead of presenting everyone with the same recipes, we wanted Chew to understand the user and recommend based on their individual preferences and dietary needs.",
      design:
        "I collaborated with Marcin and Kiana to design Chew in Figma for the CCS Days competition, focusing on making meal discovery feel simple and personal — an easily browsable recipe feed, clear recipe details, meal planning, and interactive AI features, with nutritional insights and ingredients presented in a way that's easy to understand without overwhelming the user.",
      development:
        "Chew was designed around AI-powered food recognition and personalized recommendations. Users can photograph a meal, letting the AI surface nutritional insights and identify potential ingredients, then surface a corresponding recipe — creating a seamless path from discovering a food, to understanding it, to learning how to prepare it, alongside a YouTube section for cooking videos.",
    },
    features: [
      "Personalized Recommendations — meal suggestions based on allergies, body information, food preferences, and other personal details",
      "Recipe Discovery — browse recipes and explore meals that match your preferences",
      "Meal Planner — add recipes to a meal plan so you always have an idea of what to cook",
      "AI Food Recognition — photograph a meal to get AI-generated nutritional insights and potential ingredients",
      "Recipe Generation — discover a recipe for preparing an identified meal yourself",
      "Cooking Videos — access YouTube cooking videos to learn how to prepare selected meals",
    ],
    learned:
      "Chew taught me that personalization can make an application feel less like a tool and more like something that understands the person using it. I also learned that solving a problem like food waste doesn't necessarily mean focusing only on food waste — sometimes the better approach is to address the everyday decisions that contribute to it, since making meal planning easier and recommendations more relevant helps users make more intentional choices before they even reach the point of wasting food. Working on Chew with Marcin and Kiana also strengthened my experience with collaborative UI/UX design, particularly in turning a broad idea into a focused and cohesive mobile experience.",
    techStack: ["Figma"],
    image: "/Chew Main Image.png",
    screenshots: ["/Chew1.png", "/Chew2.png"],
    designOnly: true,
    prototypeUrl:
      "https://www.figma.com/proto/GQsry4a2UP5MapALYoFhZU/TEAM-FIGMEYMS?node-id=0-1&p=f&t=FcuI1LDawvWIkjr8-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=312%3A314&show-proto-sidebar=1",
    featured: false,
    likes: 0,
  },
  {
    slug: "zura",
    name: "Zura",
    shortDescription:
      "A gamified waste-management app concept that rewards proper disposal via IoT-enabled trash bins.",
    description:
      "Zura is a gamified waste-management mobile app concept designed to encourage proper waste disposal through IoT-enabled trash bins, rewards, and community engagement.",
    role: "UI/UX Designer",
    tags: ["Mobile App", "UI/UX"],
    year: "2026",
    color: "#8B7FF7",
    problem:
      "Proper waste disposal can feel like a routine responsibility with little immediate motivation or recognition. We envisioned Zura as a way to make responsible waste disposal more engaging by connecting physical trash bins with a mobile experience. The challenge was to design an experience that makes disposing of waste feel simple and rewarding while encouraging users to contribute consistently to a cleaner community.",
    solution:
      "Zura connects a mobile application with IoT-enabled trash bins to create a rewarding waste-disposal experience. Users scan the QR code of a Zura bin to pair with it, dispose of their waste, and complete the session through the app. Their contribution is then converted into Echo Points, which can be redeemed for rewards such as transportation vouchers, mobile load, and other incentives. Beyond individual rewards, Zura uses leaderboards and location-based features to encourage continued participation and make community contributions more visible.",
    process: {
      research:
        "We explored how gamification, rewards, and accessibility could make responsible waste disposal more engaging. This led us to focus on three key areas: rewarding individual contributions, recognizing community participation, and making disposal locations easy to find.",
      design:
        "I designed the mobile experience in Figma alongside Marcin and Kiana, focusing on creating an interface that felt approachable, interactive, and connected to the environmental purpose of the product. We used green as the primary visual direction, reflecting nature and sustainability, and incorporated animations and interactive elements to make the experience feel more dynamic rather than simply functional.",
      development:
        "Zura was envisioned as a mobile application connected to IoT-enabled trash bins. The core interaction was designed around scanning a bin's QR code, pairing with it, recording the user's disposal activity, and rewarding the completed session with Echo Points.",
    },
    features: [
      "IoT Bin Pairing — scan a trash bin's QR code to connect the mobile app with the physical bin",
      "Echo Points — earn points for properly disposing of waste",
      "Rewards — redeem Echo Points for vouchers, mobile load, transportation, and other incentives",
      "Leaderboards — see how your contributions compare with other users and encourage friendly competition",
      "Zura Bin Map — find nearby Zura bins and view directions to their locations",
      "Interactive UI — animations and micro-interactions make the disposal and reward experience more engaging",
    ],
    learned:
      "Zura taught me that designing for sustainability isn't only about making an interface look environmentally friendly — the experience needs to give users a reason to participate and make their contribution feel meaningful. Through Zura, I learned how gamification, visual feedback, rewards, and accessibility can work together to turn a simple action into an engaging user experience, and how important it is to design the digital experience around the physical product it interacts with, especially when the concept involves IoT.",
    techStack: ["Figma"],
    image: "/Zura Main Image.png",
    screenshots: ["/Zura1.png", "/Zura2.png"],
    designOnly: true,
    prototypeUrl:
      "https://www.figma.com/proto/CA0PTO9pATWMmpGaRjmF9v/App-design?node-id=265-443&t=cIAjyQ5xwEzqn6Ig-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=265%3A443",
    featured: false,
    likes: 0,
  },
  {
    slug: "angay",
    name: "Angay",
    shortDescription:
      "A demographic-informed coordination system that helps foodbanks match aid to barangay-level need.",
    description:
      "Angay (Accessible Nutrition & Goods Assistance for You) is a demographic-informed food assistance coordination system that helps foodbanks match inventory to barangay-level need through structured profiling, an interactive map, and a transparent distribution workflow.",
    role: "Developer & UI/UX Designer",
    tags: ["Web App", "Social Good"],
    year: "2025",
    color: "#6C63FF",
    problem:
      "Food assistance across barangays is often allocated with limited demographic visibility and informal coordination — child-focused goods end up in low-child-density areas, documentation is manual and inconsistent, some barangays get served repeatedly while others are overlooked, and allocation history is rarely tracked. Foodbanks may have the inventory to help, but no structured way to see which communities actually need what.",
    solution:
      "Angay gives barangay officials a structured profile — population, seniors, PWDs, children, poverty classification — that the system turns into demographic summaries and vulnerability indicators. Foodbanks browse an interactive map of barangays, sort by highest need (child population, senior density, poverty level, or longest since last served), and propose a distribution that the barangay reviews and confirms. Every completed distribution is logged, giving both sides a transparent, comparable history instead of informal, undocumented coordination.",
    process: {
      research:
        "Looked at where barangay-level food assistance actually breaks down — not a lack of coordination effort, but a lack of shared demographic visibility, which was causing goods to land in the wrong barangays and the same communities to get served, or skipped, repeatedly.",
      design:
        "Scoped the system deliberately narrow — structured coordination and documentation, not delivery, payments, or reservations — and designed the barangay map and profile views around the handful of filters that actually drive an equitable distribution decision.",
      development:
        "Built with React, Tailwind CSS, and Supabase, modeling barangay demographic profiles, foodbank inventory, and a distribution proposal-and-approval workflow that only stores aggregated data, not individual household records.",
    },
    features: [
      "Barangay demographic profiling with auto-generated summaries and vulnerability indicators",
      "Foodbank inventory encoding by goods type, quantity, and target beneficiary category",
      "Interactive map of barangays, sortable by child population, senior density, poverty level, or last served",
      "Distribution proposal and approval workflow between foodbanks and barangays",
      "Distribution logging with a transparent, per-barangay allocation history",
    ],
    learned:
      "The easiest way to make a coordination tool useless is to let its scope creep into logistics, delivery, or predictive AI it was never meant to handle. Deciding early that Angay would only do structured coordination and documentation — not delivery, payments, or reservations — kept it focused on the one problem that was actually broken: barangays and foodbanks making allocation decisions blind to each other's data.",
    techStack: ["React", "HTML", "Tailwind CSS", "Supabase"],
    liveUrl: "https://angay.vercel.app/",
    presentationUrl: "https://canva.link/uxh9l1erie32heo",
    image: "/angay img.png",
    featured: true,
    likes: 64,
  },
  {
    slug: "fundar",
    name: "Fundar",
    shortDescription:
      "A gamified donation platform helping verified University of Cebu students fund tuition, healthcare, and daily needs.",
    description:
      "Fundar is a gamified web-based donation platform for verified University of Cebu students, pairing AI-assisted campaign storytelling and a content-based recommendation algorithm with donor gamification to fund tuition, healthcare, and daily expenses.",
    role: "Developer & Designer",
    tags: ["Web App", "Crowdfunding"],
    year: "2025",
    color: "#A29BFE",
    problem:
      "The Philippines' higher-education dropout rate sits at 39% nationally — 60.7% in Central Visayas — driven largely by financial hardship that existing aid doesn't fully cover. Students who turn to general-purpose platforms like GoFundMe or Kickstarter find that success there depends mostly on social reach and storytelling ability, leaving students with smaller networks or weaker narratives at a disadvantage, while donor engagement on those platforms tends to fade fast.",
    solution:
      "Fundar is a donation platform built specifically for verified University of Cebu students, covering tuition, healthcare, and daily expenses. A content-based recommendation algorithm surfaces similar-need campaigns after each donation so less-visible students still get seen, gamification — badges, leaderboards, challenges — keeps donors coming back, and an AI writing assistant built on the Hugging Face Inference API's T5 model helps students sharpen their campaign story's grammar and clarity regardless of their natural writing ability.",
    process: {
      research:
        "Looked at why general-purpose platforms like GoFundMe, Kickstarter, Cropital, and GoGetFunding fall short for students specifically — donor engagement fades fast, and campaign visibility depends on social reach and storytelling skill rather than actual need.",
      design:
        "Designed campaign creation around a semester-based student verification step — prospectus, grades, school ID — so trust didn't rest on storytelling alone, and built the recommendation and gamification systems to work quietly in the background rather than turning donating into a spectacle.",
      development:
        "Built with React, Tailwind CSS, and Supabase, with a content-based recommendation algorithm for campaign visibility, real-time donation tracking, and an AI writing assistant powered by the Hugging Face Inference API (T5-base) for campaign storytelling.",
    },
    features: [
      "Verified student accounts, re-verified every semester via prospectus, grades, and school ID",
      "Content-based recommendation algorithm that surfaces similar-need campaigns after each donation",
      "AI writing assistant (Hugging Face T5) that improves campaign storytelling",
      "Badge, leaderboard, and challenge-based donor gamification",
      "Real-time donation tracking per campaign",
      "Direct messaging between donors and students",
    ],
    learned:
      "The instinct with any fundraising product is to reward good storytelling — but that just repeats the exact problem GoFundMe already has, where the most polished pitch wins regardless of need. Building the recommendation algorithm to surface similar-need campaigns after every donation, independent of how well-written the pitch was, taught me that fairness sometimes means designing against your own engagement metrics, not for them.",
    liveUrl: "https://angay.vercel.app/",
    image: "/fundar.png",
    techStack: ["React", "Tailwind CSS", "Supabase", "Hugging Face Inference API"],
    featured: true,
    likes: 47,
  },
  {
    slug: "pitch-it",
    name: "Pitch It!",
    shortDescription:
      "A speech-practice platform that gives real-time AI coaching and structured feedback.",
    description:
      "Pitch It! is a web-based, mobile-responsive platform for practicing pitches and interview-style answers out loud, using the browser's built-in speech recognition to transcribe responses in real time and AI-generated hints to help you recover when you hesitate or blank.",
    role: "Developer & UI/UX Designer",
    tags: ["Web App", "AI Coaching"],
    year: "2026",
    color: "#4F46E5",
    problem:
      "Practicing a pitch or interview answer alone doesn't reveal the moments that actually trip people up — going blank mid-answer — or give any structured sense of what a stronger answer would look like.",
    solution:
      "I built a web platform that listens as someone speaks, transcribing in real time, and steps in with an AI-generated coaching hint the moment it detects hesitation, then closes each session with structured feedback based on a speaking framework — STAR, PREP, OREO, or AREM.",
    process: {
      research:
        "Looked into established speaking frameworks — STAR, PREP, OREO, AREM — so the feedback was grounded in something structured rather than vague notes on delivery.",
      design:
        "Designed the session flow to feel like a real conversation rather than a quiz, keeping the coaching hint quick and unobtrusive so it helps without breaking focus.",
      development:
        "Built full-stack using the browser's native speech recognition for real-time transcription, paired with an AI model that detects hesitation and generates coaching hints and framework-based feedback.",
    },
    features: [
      "Real-time speech-to-text transcription",
      "AI-generated coaching hints on hesitation",
      "Structured feedback using STAR, PREP, OREO, or AREM",
      "Mobile-responsive practice sessions",
    ],
    learned:
      "Real-time interaction lives or dies on perceived latency — even a slight delay in the coaching hint made it feel disconnected from what I'd just said, so timing became as important as the hint's content.",
    techStack: ["React", "Tailwind CSS", "Web Speech API", "AI API"],
    underReconstruction: true,
    featured: false,
    likes: 0,
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured);
}

export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  const previous = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  return { previous, next };
}
