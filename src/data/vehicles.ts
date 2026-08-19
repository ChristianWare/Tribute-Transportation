// src/data/vehicles.ts
// The five fleet vehicle pages, rendered by the same template as the service
// pages. Reuses the ServiceContent interface so ServiceArticle and
// FaqAccordion work with zero new components.
//
// Notes:
// - `vehicleLine` carries the "pairs well with" sentence on these pages.
//   Pass vehicleHeading="Pairs well with" to ServiceArticle from the fleet route.
// - Images are the fleet cutout PNGs for now. When real photos land, swap the
//   path and change the hero image fit from contain to cover.
// - Specs stay soft on purpose: no model years, no luggage counts, until Steve
//   confirms them. Do not add numbers here before then.

import type { ServiceContent } from "./services";

export const vehicles: ServiceContent[] = [
  {
    slug: "luxury-sedan",
    title: "Lincoln Town Car Service in Tucson | Tribute Transportation",
    metaDescription:
      "The executive sedan the black-car trade was built on, with a professional chauffeur for airport runs, corporate travel, and point-to-point trips in Tucson.",
    primaryKeyword: "town car to airport",
    h1: "The Lincoln Town Car, the executive sedan the black-car trade was built on.",
    sub: "Quiet, comfortable, and easy to step out of looking like you meant to arrive. The right call for one to three riders with standard luggage, and the reason town car service still means something.",
    metaLine: "Up to 4 passengers · Airport & corporate · Always chauffeured",
    image: "/images/fleet/townCar.png",
    imageAlt: "Lincoln Town Car executive sedan in Tucson",
    intro: [
      "For thirty years the Town Car was the vehicle the livery industry ran on, and riders who book black cars recognize it the moment it pulls up. The ride is smooth, the cabin is quiet, and the back seat was designed for exactly this job.",
      "Every trip comes with a professional chauffeur, a flat rate quoted before you ride, and the communication promise that comes with every Tribute reservation: a written confirmation, a reminder the day before, and contact on the day of your trip.",
    ],
    includedHeading: "What riding the sedan includes",
    included: [
      "Seating for up to four passengers, most comfortable with one to three",
      "A professional chauffeur on every trip, with door and luggage service",
      "Leather interior, bottled water, WiFi, and phone chargers",
      "Child and booster seats installed on request",
      "Meet and greet inside the terminal on airport pickups",
      "A flat rate quoted and confirmed before the trip",
    ],
    whyHeading: "The trips it is built for",
    why: [
      "Airport runs where arriving composed matters more than arriving loud",
      "Corporate travel and client pickups where the vehicle is part of the impression",
      "Point-to-point trips across Tucson and the metro",
      "Medical appointments, where the easy entry and smooth ride earn their keep",
    ],
    vehicleLine:
      "The Town Car is the default for airport and corporate work. When the party grows past three or the luggage stacks up, the Suburban takes over.",
    ctaLine: "Tell us where you are going. The Town Car does the rest.",
    faqs: [
      {
        id: 1,
        q: "Why a Town Car instead of a newer sedan?",
        a: "Because it is the definitive livery sedan. The back seat, the ride, and the quiet were built for professional service, and riders who know black cars ask for it by name.",
      },
      {
        id: 2,
        q: "How many riders fit comfortably?",
        a: "Up to four, and one to three is the sweet spot once luggage comes along. If you are four with bags, the Suburban is the better call and we will say so.",
      },
      {
        id: 3,
        q: "Can I request a child seat?",
        a: "Yes. Tell us the ages when you book and the seats will be installed before pickup.",
      },
    ],
    related: [
      {
        label: "Airport transportation",
        href: "/services/airport-transportation",
      },
      { label: "The Executive SUV", href: "/fleet/executive-suv" },
    ],
  },
  {
    slug: "executive-suv",
    title: "Executive SUV Service in Tucson | Tribute Transportation",
    metaDescription:
      "A Chevrolet Suburban with a professional chauffeur, room for up to seven, and space for everything they packed. Airport runs, golf trips, and family travel in Tucson.",
    primaryKeyword: "executive suv tucson",
    h1: "An executive SUV in Tucson with room for seven and everything they packed.",
    sub: "The Suburban is the workhorse of the fleet: families, golf trips, ski gear, car seats, and any run where the luggage outnumbers the people.",
    metaLine: "Up to 7 passengers · Luggage-heavy travel · Always chauffeured",
    image: "/images/fleet/subZ71.png",
    imageAlt: "Chevrolet Suburban executive SUV in Tucson",
    intro: [
      "Some trips are really cargo problems wearing a passenger disguise. A family of five flying home from two weeks away, a golf foursome with full bags, a ski trip staging out of Tucson. The Suburban swallows all of it and still rides like an executive vehicle.",
      "Every trip comes with a professional chauffeur who loads the bags, a flat rate set before you ride, and the same three-contact communication promise as every Tribute reservation.",
    ],
    includedHeading: "What riding the SUV includes",
    included: [
      "Seating for up to seven passengers",
      "Cargo room for full-size luggage, golf bags, and gear",
      "A professional chauffeur who handles the loading and the road",
      "Leather interior, bottled water, WiFi, and phone chargers",
      "Child and booster seats installed on request",
      "A flat rate quoted and confirmed before the trip",
    ],
    whyHeading: "The trips it is built for",
    why: [
      "Airport runs for families and groups whose luggage would defeat a sedan",
      "Golf trips to the resort corridor with the clubs riding along",
      "The Sky Harbor run when four or more travel together",
      "Any day where car seats, strollers, or gear come standard",
    ],
    vehicleLine:
      "The Suburban covers four to seven. Past seven, the Sprinter takes the whole group in one vehicle, and couples traveling light step down to the Town Car.",
    ctaLine:
      "Count the people, then count the bags. If the answer is the Suburban, we are ready.",
    faqs: [
      {
        id: 1,
        q: "Will seven adults and their luggage fit?",
        a: "Seven adults fit. Seven adults with a full bag each is a squeeze, and we will tell you honestly when the Sprinter is the smarter call.",
      },
      {
        id: 2,
        q: "Do golf bags fit with passengers?",
        a: "Yes. A foursome with clubs is one of the most common trips this vehicle runs.",
      },
      {
        id: 3,
        q: "Can you install car seats?",
        a: "Yes, on request. Tell us the ages when you book and the seats will be ready before pickup.",
      },
    ],
    related: [
      {
        label: "Airport transportation",
        href: "/services/airport-transportation",
      },
      { label: "The Mercedes Sprinter", href: "/fleet/sprinter-van" },
    ],
  },
  {
    slug: "sprinter-van",
    title: "Sprinter Van with Driver in Tucson | Tribute Transportation",
    metaDescription:
      "A Mercedes-Benz Sprinter with a professional chauffeur for groups of up to twelve. Wine tours, corporate teams, and celebrations across Southern Arizona.",
    primaryKeyword: "sprinter van rental tucson",
    h1: "A Mercedes Sprinter van with a chauffeur, for Tucson groups of up to twelve.",
    sub: "Small groups moving together: wine tours, corporate teams, bachelorette parties, family reunions. Everyone rides in one vehicle and nobody has to drive home.",
    metaLine: "Up to 12 passengers · Wine tours & teams · Always chauffeured",
    image: "/images/fleet/sprinter.png",
    imageAlt: "Mercedes-Benz Sprinter van with chauffeur in Tucson",
    intro: [
      "The Sprinter exists for the trips where splitting into three cars would ruin the point. Twelve people, one vehicle, one conversation, and a chauffeur who handles the winding two-lane roads to Sonoita while the group handles the tasting notes.",
      "To be clear up front: we do not rent the Sprinter for you to drive. Every booking includes a professional chauffeur. If you were searching for a self-drive van rental, we are not the right fit and we are glad to say so. If you were searching for a group that rides together while someone else drives, this is the vehicle.",
    ],
    includedHeading: "What riding the Sprinter includes",
    included: [
      "Seating for up to twelve passengers",
      "A professional chauffeur on every booking, no self-drive rentals",
      "Bottled water, WiFi, phone chargers, and room in the back for the wine haul",
      "Door-to-door pickup and return anywhere in the Tucson area",
      "Hourly and as-directed booking for days that change shape",
      "A flat rate quoted and confirmed before the trip",
    ],
    whyHeading: "The trips it is built for",
    why: [
      "Sonoita and Elgin wine tours, the Sprinter's signature trip",
      "Corporate teams moving between sites or heading to Phoenix together",
      "Bachelorette and birthday celebrations where the ride is part of the party",
      "Airport runs for flight crews and groups too big for the Suburban",
    ],
    vehicleLine:
      "The Sprinter covers eight to twelve. Bigger guest lists move up to the mini coach, and the wine tour service page shows what a full day out looks like.",
    ctaLine: "Tell us who is coming. The Sprinter seats them all.",
    faqs: [
      {
        id: 1,
        q: "Can I rent the Sprinter without a driver?",
        a: "No. Every booking includes a professional chauffeur. That is true for the Sprinter and every vehicle in the fleet.",
      },
      {
        id: 2,
        q: "Is it comfortable for a full day?",
        a: "Yes. Wine tours run six to eight hours in this vehicle regularly, with the chauffeur waiting at every stop.",
      },
      {
        id: 3,
        q: "Does luggage fit with twelve riders?",
        a: "For day trips and events, easily. For twelve people with airport luggage, tell us the bag count and we will confirm the fit or recommend the mini coach.",
      },
    ],
    related: [
      {
        label: "Wine tours & day trips",
        href: "/services/wine-tours-sonoita-elgin",
      },
      { label: "The Mini Coach", href: "/fleet/mini-coach" },
    ],
  },
  {
    slug: "mini-coach",
    title: "Mini Coach & Guest Shuttles in Tucson | Tribute",
    metaDescription:
      "A 32-passenger mini coach with a professional driver for wedding guest shuttles, conference groups, and events across Tucson and Southern Arizona.",
    primaryKeyword: "15 passenger van rental tucson",
    h1: "A 32-passenger mini coach for guest shuttles and events across Southern Arizona.",
    sub: "Big enough for the crowd, small enough for a resort driveway. The mini coach is how thirty people arrive at the same place at the same time.",
    metaLine:
      "Up to 32 passengers · Guest shuttles & events · Always chauffeured",
    image: "/images/fleet/miniCoach.png",
    imageAlt: "32-passenger mini coach for guest shuttles in Tucson",
    intro: [
      "Weddings, conferences, and campus events share one logistics problem: a crowd that needs to move as a unit. The mini coach turns thirty separate arrivals into one schedule, one vehicle, and one driver who already knows the route.",
      "It also fits where the full motorcoach does not. Resort driveways, venue loading zones, and the tighter corners of foothills neighborhoods are exactly what this size exists for.",
    ],
    includedHeading: "What booking the mini coach includes",
    included: [
      "Seating for up to thirty-two passengers",
      "A professional driver on every booking",
      "Continuous-loop shuttle scheduling for events",
      "Room for luggage and event gear",
      "Bottled water on board",
      "A flat rate or event package quoted before the day",
    ],
    whyHeading: "The trips it is built for",
    why: [
      "Wedding guest shuttles between hotels and the venue",
      "Conference and corporate group transfers",
      "University events, game days, and campus programs",
      "Group airport arrivals that would otherwise take a fleet of SUVs",
    ],
    vehicleLine:
      "The mini coach covers up to thirty-two. Full guest lists move up to the motorcoach, and the wedding service page shows how shuttle schedules come together.",
    ctaLine:
      "Tell us the headcount and the venue. We will build the shuttle schedule.",
    faqs: [
      {
        id: 1,
        q: "Do you have a 15-passenger van?",
        a: "We seat fifteen comfortably two ways: the group splits across the Sprinter and an SUV, or everyone rides the mini coach with room to spare. Tell us the trip and we will recommend the better fit.",
      },
      {
        id: 2,
        q: "Can it run continuous loops for an event?",
        a: "Yes. Hotel-to-venue loops around a ceremony and reception schedule are the most common booking this vehicle takes.",
      },
      {
        id: 3,
        q: "Does it fit in a resort driveway?",
        a: "That is the reason to choose it over the motorcoach. It handles venue entrances and neighborhood streets the full coach cannot.",
      },
    ],
    related: [
      {
        label: "Wedding transportation",
        href: "/services/wedding-transportation",
      },
      { label: "The Motorcoach", href: "/fleet/charter-coach" },
    ],
  },
  {
    slug: "charter-coach",
    title: "Charter Bus Rental in Tucson, Chauffeured | Tribute",
    metaDescription:
      "A 52-passenger motorcoach with a professional driver for weddings, long-distance charters, and crew transport across Southern Arizona and into New Mexico.",
    primaryKeyword: "charter bus rental tucson",
    h1: "A 52-passenger motorcoach for charters, weddings, and crews across Southern Arizona.",
    sub: "The largest vehicle in the conversation, and the reason one call to Tribute can move an entire guest list, team, or crew in a single trip.",
    metaLine:
      "Up to 52 passengers · Charters & large groups · Always chauffeured",
    image: "/images/fleet/bus.png",
    imageAlt: "52-passenger motorcoach for charters in Southern Arizona",
    intro: [
      "Some groups do not split well. A full wedding guest list, a team traveling to a tournament, a crew rotating to a job site. The motorcoach moves fifty-two people as one group, with one driver, one schedule, and no caravan logistics.",
      "Every charter includes a professional driver. The coach books as a flat quote or a standing contract for recurring routes, and long-distance work into New Mexico is part of its normal territory, not a special request.",
    ],
    includedHeading: "What a coach charter includes",
    included: [
      "Seating for up to fifty-two passengers",
      "A professional driver on every charter",
      "Long-distance capability across Arizona and into New Mexico",
      "Event and shuttle scheduling built around your day",
      "Standing contracts for recurring crew and team routes",
      "A flat quote confirmed before the trip",
    ],
    whyHeading: "The trips it is built for",
    why: [
      "Full wedding guest lists moved in one vehicle instead of three",
      "Long-distance charters to Phoenix, Sedona, and beyond",
      "Crew rotations and shift changes in the Morenci and Safford corridor",
      "Team travel, tournaments, and organization outings",
    ],
    vehicleLine:
      "The motorcoach covers what nothing else can. Groups under thirty usually fit the mini coach, and the wedding and government service pages show its two most common jobs.",
    ctaLine: "Send the headcount and the route. We will send the quote.",
    faqs: [
      {
        id: 1,
        q: "Is the driver included in a charter?",
        a: "Always. We do not rent vehicles for self-drive, and a coach charter includes a professional driver from first pickup to last drop.",
      },
      {
        id: 2,
        q: "How far will the coach travel?",
        a: "Across Southern Arizona and into New Mexico as normal territory. Longer charters are quoted trip by trip, so ask.",
      },
      {
        id: 3,
        q: "Can we book it for a recurring route?",
        a: "Yes. Standing contracts for crew rotations and repeat routes are one of the main jobs this vehicle does.",
      },
    ],
    related: [
      {
        label: "Wedding transportation",
        href: "/services/wedding-transportation",
      },
      {
        label: "Government & industrial",
        href: "/services/dod-government-transportation",
      },
    ],
  },
];

export const vehicleSlugs = vehicles.map((v) => v.slug);

export function getVehicle(slug: string): ServiceContent | undefined {
  return vehicles.find((v) => v.slug === slug);
}
