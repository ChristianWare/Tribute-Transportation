// One source of truth for the eight service pages.
// Shape notes:
// - `primaryKeyword` is documentation for us, not rendered. It records what the page ranks for.
// - `metaLine` renders as the uppercase mono line under the sub (middot separated).
// - `image` is a public path string so swapping photos later is a one-line edit.
//   These match the photos used in the ServicesPreview grid, so the slug hero
//   shows the same image the visitor clicked.
// - All copy follows the site rules: no em dashes, no prices, no invented facts.

export interface ServiceFaqItem {
  id: number;
  q: string;
  a: string;
}

export interface RelatedLink {
  label: string;
  href: string;
}

export interface ServiceContent {
  slug: string;
  title: string; // <title> tag
  metaDescription: string;
  primaryKeyword: string; // reference only
  h1: string;
  sub: string;
  metaLine: string;
  image: string;
  imageAlt: string;
  intro: string[];
  includedHeading: string;
  included: string[];
  whyHeading: string;
  why: string[];
  vehicleLine: string;
  ctaLine: string;
  faqs: ServiceFaqItem[];
  related: RelatedLink[];
}

export const services: ServiceContent[] = [
  {
    slug: "airport-transportation",
    title: "Airport Transportation in Tucson | Tribute Transportation",
    metaDescription:
      "Private airport transfers at Tucson International, Sky Harbor, Mesa Gateway, and four regional fields. Flight tracking, meet and greet, and 60 minutes of wait time included.",
    primaryKeyword: "airport transportation tucson",
    h1: "Tucson airport transportation that watches your flight and waits when it is late.",
    sub: "Tucson International, Phoenix Sky Harbor, Mesa Gateway, and four regional fields. Your chauffeur tracks the flight, meets you inside at arrivals with a sign, and helps with the bags.",
    metaLine: "Meet and greet included · 60-minute wait · 7 airports",
    image: "/images/services/airport.jpg",
    imageAlt: "Private airport transportation in Tucson",
    intro: [
      "Meet and greet comes standard on every arrival, not as an upgrade. So does sixty minutes of complimentary wait time after you land, which means a slow customs line or a gate delay never costs you your ride. We track your flight ourselves, and if it moves, we move with it.",
      "Departures run the same way in reverse: a confirmed pickup time, a chauffeur who arrives early, and a flat-rate quote you approved before anyone drove anywhere.",
    ],
    includedHeading: "What every airport trip includes",
    included: [
      "Flight tracking handled by us, with your pickup adjusting automatically",
      "Meet and greet inside the terminal at arrivals, with a sign, on every pickup",
      "Sixty minutes of complimentary wait time after you land",
      "Help with luggage from the carousel to the vehicle",
      "Coverage at Tucson International, Sky Harbor, Mesa Gateway, Marana Regional, Pinal Airpark, Sierra Vista Municipal, and Nogales International",
      "A flat rate quoted and confirmed before the trip",
    ],
    whyHeading: "Why riders book Tribute for the airport",
    why: [
      "You hear from us three times before pickup: a written confirmation, a reminder the day before, and contact on the day of your trip",
      "Owner-operated since 2011, so the person who confirms your ride is responsible for it",
      "Available around the clock, including the 4 a.m. departures nobody else wants",
      "A delay never costs you your ride, because we are watching the flight, not the clock",
    ],
    vehicleLine:
      "Most airport trips ride in the Town Car or the Suburban, depending on passengers and luggage. Larger crews and flight teams book the Sprinter.",
    ctaLine:
      "Tell us your flight and your address. We will handle everything between them.",
    faqs: [
      {
        id: 1,
        q: "Is this a shared shuttle?",
        a: "No. Every reservation is a private vehicle for you and your party only. No other passengers, no extra stops, no waiting for a van to fill.",
      },
      {
        id: 2,
        q: "What happens if my flight is delayed?",
        a: "We are watching it. Your pickup adjusts automatically, and the first sixty minutes after landing are included at no charge.",
      },
      {
        id: 3,
        q: "Do you meet me inside the terminal?",
        a: "Yes, at arrivals, with a sign, on every airport pickup. It is included in the rate.",
      },
    ],
    related: [
      {
        label: "The Sky Harbor run",
        href: "/services/tucson-to-phoenix-sky-harbor",
      },
      { label: "The fleet", href: "/fleet" },
    ],
  },
  {
    slug: "tucson-to-phoenix-sky-harbor",
    title: "Tucson to Phoenix Sky Harbor Car Service, Flat Rate | Tribute",
    metaDescription:
      "A private car from Tucson to Phoenix Sky Harbor. Door to door, one flat rate, any hour. No shared van, no fixed departure times, no stops along the way.",
    primaryKeyword: "transportation from tucson to phoenix az",
    h1: "A private car from Tucson to Phoenix Sky Harbor, door to door on your schedule.",
    sub: "No shared van, no fixed departure times, no stops along the way. One flat rate for the whole trip, quoted before you ride, at any hour you need to leave.",
    metaLine: "Flat rate · Door to door · Any hour, any day",
    image: "/images/services/skyHarbor.jpeg",
    imageAlt: "Private car service from Tucson to Phoenix Sky Harbor",
    intro: [
      "The scheduled shuttles between Tucson and Phoenix run on their timetable, fill their seats, and drop you where the route says. A private car leaves when you need it to, carries only your party, and pulls up to your door on one end and your terminal on the other.",
      "The trip is one flat rate, set when you book. Not a meter, not a surge price, not an estimate that grows in traffic on I-10. The number you approve is the number you pay, and it covers the vehicle, the chauffeur, the door-to-door routing, and the flight tracking.",
    ],
    includedHeading: "What the Sky Harbor run includes",
    included: [
      "Door-to-door service between your address and your terminal",
      "One flat rate for the whole trip, quoted before you ride",
      "Departures at any hour, including the 3 a.m. runs for dawn flights",
      "Flight tracking on every airport leg",
      "The return trip works the same way: we meet you at Sky Harbor arrivals and drive you home",
      "Groups up to twelve ride together in the Sprinter for one rate",
    ],
    whyHeading: "Why riders choose the private car over the shuttle",
    why: [
      "You leave at whatever hour makes your flight easy instead of whatever hour the schedule offers",
      "Your party rides alone, with no pickups along the way and no waiting for a van to fill",
      "For two or more people, the flat rate divided by your group is often cheaper per person than shuttle seats",
      "The same communication promise as every Tribute trip: confirmation, reminder, and contact on the day",
    ],
    vehicleLine:
      "Solo travelers and couples take the Town Car. Families and golf trips take the Suburban. Groups up to twelve ride the Sprinter together for one rate.",
    ctaLine: "Tell us your flight time. We will tell you when we should leave.",
    faqs: [
      {
        id: 1,
        q: "How long is the drive?",
        a: "About two hours door to door, depending on your pickup point and traffic through Phoenix.",
      },
      {
        id: 2,
        q: "Do you pick up in the middle of the night?",
        a: "Yes. The corridor runs at whatever hour your flight requires, including the 3 a.m. departures nobody else wants.",
      },
      {
        id: 3,
        q: "Is a private car worth it over the shuttle?",
        a: "For one traveler on a flexible schedule, the shuttle can be the budget answer, and we will say so. For two or more people, tight timing, or a dawn flight, the flat rate divided by your group usually makes the private car the better ride and often the cheaper one per person.",
      },
    ],
    related: [
      {
        label: "Airport transportation",
        href: "/services/airport-transportation",
      },
      { label: "The fleet", href: "/fleet" },
    ],
  },
  {
    slug: "corporate-car-service",
    title: "Corporate Car Service in Tucson | Tribute Transportation",
    metaDescription:
      "Executive transportation in Tucson with standing accounts, card on file, roadshow support, and a chauffeur standard that treats your client's time as the deliverable.",
    primaryKeyword: "corporate car service tucson",
    h1: "Corporate car service in Tucson built for schedules that cannot slip.",
    sub: "Point-to-point rides, hourly service, roadshows, and standing accounts with a card on file. The same standard on every trip, with the discretion your clients and executives expect.",
    metaLine: "Corporate accounts · Hourly available · 24/7",
    image: "/images/services/corpTravel.jpg",
    imageAlt: "Corporate and executive car service in Tucson",
    intro: [
      "Open an account once and booking becomes a text or a call. Card on file, receipts that make expense reports easy, and trip records when your office needs them. Changes route through one person who already knows your account instead of a call center that does not.",
      "When your company puts an employee in a vehicle, who is driving matters. Tribute is owner-operated with a known chauffeur, a maintained fleet, and trip records on request, which is a different level of accountability than whichever rideshare driver accepts the ping.",
    ],
    includedHeading: "What corporate service includes",
    included: [
      "Standing accounts with a card on file and consolidated receipts",
      "Recurring airport runs held as a schedule, not rebooked every week",
      "Hourly and as-directed service for roadshows and client days",
      "Meet and greet for visiting executives and client pickups",
      "Trip records and documentation on request",
      "One point of contact who knows your account",
    ],
    whyHeading: "Why companies keep the account open",
    why: [
      "The duty-of-care answer: a known chauffeur and a maintained fleet, with accountability a rideshare cannot match",
      "Punctuality treated as a requirement, shaped by years of defense-contract work",
      "Flat rates that make travel budgets predictable",
      "Discretion as a default on every trip",
    ],
    vehicleLine:
      "Executives ride the Town Car. Teams of up to seven take the Suburban, and site visits move groups of up to twelve in the Sprinter.",
    ctaLine:
      "Opening an account takes minutes. Booking after that takes a text.",
    faqs: [
      {
        id: 1,
        q: "Can we set up monthly billing?",
        a: "Yes. Standing accounts run on a card on file with consolidated receipts. Call to set it up, it takes minutes.",
      },
      {
        id: 2,
        q: "Can you handle a full-day roadshow?",
        a: "Yes. Book hourly, hand your chauffeur the schedule, and change it as the day changes.",
      },
      {
        id: 3,
        q: "Do you sign vendor or compliance paperwork?",
        a: "Bring us what your company requires and we will review it. Most standard vendor forms are no problem.",
      },
    ],
    related: [
      {
        label: "Hourly chauffeur service",
        href: "/services/hourly-chauffeur-service",
      },
      {
        label: "Airport transportation",
        href: "/services/airport-transportation",
      },
    ],
  },
  {
    slug: "hourly-chauffeur-service",
    title: "Hourly Chauffeur Service in Tucson | Tribute Transportation",
    metaDescription:
      "A private chauffeur by the hour in Tucson. Your vehicle waits, your plans can change, and the whole day runs on your schedule instead of the next pickup's.",
    primaryKeyword: "chauffeur service tucson az",
    h1: "Hourly chauffeur service in Tucson, as directed, for as long as you need.",
    sub: "Book the vehicle and the chauffeur by the hour, then change plans as the day unfolds. The car waits at every stop, so the schedule is yours instead of the other way around.",
    metaLine: "By the hour · Your itinerary · Wait-and-return",
    image: "/images/services/hourly.jpg",
    imageAlt: "Hourly chauffeur service in Tucson",
    intro: [
      "There is no fixed itinerary. Your personal chauffeur takes direction as the day develops: a meeting that runs long, a stop that was not on the list, dinner that moves across town. You are not booking rides between points, you are booking a chauffeur and a vehicle that stay with you.",
      "The days people book it: medical days with several appointments, an afternoon of errands that would otherwise be four separate rides, a night out where nobody wants to think about the drive home, and visiting family who need a patient driver for a full day.",
    ],
    includedHeading: "What hourly service includes",
    included: [
      "The vehicle and chauffeur reserved for your block of time",
      "Waiting at every stop, included in the hourly rate",
      "An itinerary that can change as the day does",
      "Wait-and-return service for appointments and events",
      "The same vehicle and chauffeur for the whole booking",
      "Extensions during the day whenever the schedule allows",
    ],
    whyHeading: "Why hourly beats booking four separate rides",
    why: [
      "No waiting for the next pickup to accept, because your car is already outside",
      "One flat hourly rate instead of four unpredictable fares",
      "A chauffeur who learns your day instead of a stranger every leg",
      "Plans can change mid-afternoon without re-planning the transportation",
    ],
    vehicleLine:
      "Most hourly days ride in the Town Car or the Suburban. Group days out take the Sprinter, and the same as-directed booking applies to every vehicle in the fleet.",
    ctaLine: "Tell us the shape of the day. We will hold the hours.",
    faqs: [
      {
        id: 1,
        q: "Is there a minimum number of hours?",
        a: "Call for the current minimum for your date and vehicle. Evenings and event dates can differ.",
      },
      {
        id: 2,
        q: "Does the chauffeur wait while I am inside?",
        a: "Yes. Waiting at each stop is the whole point of hourly service, and it is included in the hourly rate.",
      },
      {
        id: 3,
        q: "Can I extend during the day?",
        a: "Usually yes, subject to what is booked after you. Tell your chauffeur as early as you can and we will make it work whenever the schedule allows.",
      },
    ],
    related: [
      {
        label: "Corporate car service",
        href: "/services/corporate-car-service",
      },
      { label: "The fleet", href: "/fleet" },
    ],
  },
  {
    slug: "wedding-transportation",
    title: "Wedding Transportation in Tucson | Tribute Transportation",
    metaDescription:
      "Wedding transportation in Tucson from the couple's sedan to a 52-passenger coach for the guest list. One call, one timeline, everyone where they need to be.",
    primaryKeyword: "wedding charter bus",
    h1: "Wedding transportation in Tucson, from the couple's sedan to a coach for every guest.",
    sub: "Guest shuttles are the hardest part of wedding logistics, and they are the part we do best. One call covers the couple, the wedding party, and everyone on the list.",
    metaLine: "Guest shuttles · Up to 52 passengers · Timeline planning",
    image: "/images/services/wedding.jpg",
    imageAlt: "Wedding transportation and guest shuttles in Tucson",
    intro: [
      "A wedding charter bus turns your guest list into one moving group instead of forty separate navigation problems. We build the shuttle schedule around your ceremony and reception times, run continuous loops between hotels and the venue when the night calls for it, and make sure the last guests get back safely after the last dance.",
      "You get one point of contact from the first call to the last pickup. We confirm the timeline in writing, reconfirm the day before, and stay reachable on the day itself, which is the same communication promise every Tribute trip gets, applied to the one day it matters most.",
    ],
    includedHeading: "What wedding transportation includes",
    included: [
      "A shuttle schedule built around your ceremony and reception times",
      "Continuous loops between hotels and the venue when the night calls for it",
      "The mini coach for up to thirty-two guests and the motorcoach for up to fifty-two",
      "The Town Car for the couple's exit and the Suburban for the wedding party",
      "Morning-of shuttles between hotel, salon, and venue in the Sprinter",
      "Written timeline confirmation and a reachable contact on the day",
    ],
    whyHeading: "Why couples hand us the guest list",
    why: [
      "One vehicle often covers what three shuttles from anyone else would",
      "One call and one point of contact for every vehicle on the day",
      "The last-dance pickup is planned, not improvised at midnight",
      "The same vehicles and planning cover quinceañeras, proms, and every occasion worth dressing up for",
    ],
    vehicleLine:
      "Most weddings combine a sedan or SUV for the couple with the mini coach or motorcoach for guests.",
    ctaLine:
      "Send us the date and the venue. We will draft the timeline with you.",
    faqs: [
      {
        id: 1,
        q: "How far ahead should we book?",
        a: "As soon as you have a date and venue. Peak season Saturdays go first, and coaches are the first vehicles to sell out.",
      },
      {
        id: 2,
        q: "Can the shuttle run multiple trips?",
        a: "Yes. Continuous loops between hotels and the venue are the most common setup, and we schedule them around your ceremony and reception times.",
      },
      {
        id: 3,
        q: "Do you do quinceañeras, proms, and other events?",
        a: "Yes. The same vehicles and the same planning apply to every occasion worth dressing up for.",
      },
    ],
    related: [
      { label: "The motorcoach", href: "/fleet/charter-coach" },
      { label: "The fleet", href: "/fleet" },
    ],
  },
  {
    slug: "wine-tours-sonoita-elgin",
    title: "Sonoita Wine Tours with a Private Chauffeur | Tribute",
    metaDescription:
      "Private wine tour transportation from Tucson to Sonoita and Elgin. You pick the wineries, we handle the road, and everyone gets to enjoy the tasting room.",
    primaryKeyword: "sonoita wine tours",
    h1: "Sonoita wine tours with a private chauffeur, from your door to the tasting room.",
    sub: "Arizona's original wine country is an hour southeast of Tucson. You pick the wineries, we handle the road, and nobody in your group has to be the one who skips the pours.",
    metaLine: "Sonoita & Elgin · Tombstone & Bisbee · Custom itineraries",
    image: "/images/services/wine.jpg",
    imageAlt: "Private wine tour transportation to Sonoita and Elgin",
    intro: [
      "Tell us your group size and roughly what you want from the day, and we will help shape the route. Pickup at your door, your first tasting by late morning, lunch in Sonoita or Elgin, two or three more stops at your pace, and home by evening.",
      "The vehicle waits at every winery, the cooler and water are stocked, and the schedule bends when a tasting room turns out to be worth an extra hour. The same day-trip format covers Tombstone and Bisbee for the history, and Sedona for the long spectacular day north.",
    ],
    includedHeading: "What a wine tour day includes",
    included: [
      "Door-to-door pickup and return anywhere in the Tucson area",
      "A route shaped around your group, with suggestions if you want them",
      "The vehicle waiting at every winery, all day",
      "Stocked water and room in the back for every case you buy",
      "A pace that bends when a tasting room deserves an extra hour",
      "The same format for Tombstone, Bisbee, and Sedona day trips",
    ],
    whyHeading: "Why groups book the chauffeur",
    why: [
      "Everyone in the group gets to enjoy the tastings, because nobody is the designated driver",
      "The winding two-lane roads of wine country are our job, not yours",
      "One flat rate for the day instead of guessing at rideshare coverage an hour from town",
      "Hourly at heart, so a six-hour plan can become an eight-hour day",
    ],
    vehicleLine:
      "Couples and small groups take the Town Car or Suburban. Most wine tours ride the Sprinter, which carries up to twelve, and larger celebrations book the mini coach.",
    ctaLine: "Tell us who is coming. We will help you build the day.",
    faqs: [
      {
        id: 1,
        q: "Do you pick the wineries or do we?",
        a: "You do, and we are glad to suggest. If you want a route built for you, say so and we will draft one around your group's taste.",
      },
      {
        id: 2,
        q: "How long is a typical tour?",
        a: "Six to eight hours door to door covers three or four wineries with lunch. Shorter and longer days both work, the trip is hourly at heart.",
      },
      {
        id: 3,
        q: "Can we bring purchases home?",
        a: "Yes. Cases ride in the back, and the Suburban and Sprinter both have room for a serious haul.",
      },
    ],
    related: [
      {
        label: "Hourly chauffeur service",
        href: "/services/hourly-chauffeur-service",
      },
      { label: "The Sprinter", href: "/fleet/sprinter-van" },
    ],
  },
  {
    slug: "medical-transportation",
    title: "Medical Transportation in Tucson | Tribute Transportation",
    metaDescription:
      "Dependable rides to appointments, treatments, and procedures in Tucson, including long-distance medical travel to Phoenix. Not an ambulance, a reliable ride.",
    primaryKeyword: "medical transportation tucson",
    h1: "Medical transportation in Tucson for the appointments that matter most.",
    sub: "Dependable rides to appointments, treatments, and procedures, including long-distance medical travel to Phoenix and beyond. We are not an ambulance service. We are the reliable ride.",
    metaLine: "Long-distance available · Door to door · Companion welcome",
    image: "/images/services/medical.jpg",
    imageAlt: "Non-emergency medical transportation in Tucson",
    intro: [
      "This is non-emergency medical transportation: a professional chauffeur and a comfortable vehicle for passengers who can travel by ordinary car. Appointments, imaging, treatments, procedures with a required driver, and hospital discharges where the medical team has cleared ordinary transportation. A companion rides along at no extra passenger logic, and the chauffeur waits or returns depending on what the appointment needs.",
      "Specialist care often means Phoenix. We run the corridor as one flat-rate trip, wait through the appointment when the schedule calls for it, and drive you home the same day. For treatment schedules that repeat, standing arrangements keep the same routine and, whenever possible, the same chauffeur.",
    ],
    includedHeading: "What medical transportation includes",
    included: [
      "Door-to-door rides to appointments, imaging, treatments, and procedures",
      "A companion welcome on every trip",
      "Wait-and-return or waiting through the appointment, whichever fits",
      "Long-distance medical travel to Phoenix as one flat-rate trip",
      "Standing reservations for recurring treatment schedules",
      "The same chauffeur trip to trip whenever possible",
    ],
    whyHeading: "What this service is, and what it is not",
    why: [
      "We do not provide medical care, stretcher transport, or emergency response",
      "If the trip requires medical staff or equipment, an ambulance or specialized medical transport is the right call, and we will say so",
      "What we provide is reliability: the ride is confirmed, the chauffeur is early, and the appointment is never missed for transportation reasons",
      "The communication promise holds here most of all: confirmation, reminder, and contact on the day",
    ],
    vehicleLine:
      "Most medical trips ride in the Town Car for its easy entry and smooth ride, or the Suburban when family comes along.",
    ctaLine: "Tell us the appointment time. We will build the trip around it.",
    faqs: [
      {
        id: 1,
        q: "Is this an ambulance or wheelchair van?",
        a: "No. This is professional car service for passengers who can ride in an ordinary vehicle. If your trip requires a lift, a ramp, or medical staff, call anyway and we will point you to a provider who can help.",
      },
      {
        id: 2,
        q: "Will the driver wait during my appointment?",
        a: "Yes, when you book it that way. Waiting works as hourly service, and for shorter appointments a scheduled return pickup often costs less. We will recommend whichever fits.",
      },
      {
        id: 3,
        q: "Can you handle recurring treatment schedules?",
        a: "Yes. Standing reservations hold your schedule, and we keep the routine consistent trip to trip.",
      },
    ],
    related: [
      {
        label: "Hourly chauffeur service",
        href: "/services/hourly-chauffeur-service",
      },
      {
        label: "The Sky Harbor run",
        href: "/services/tucson-to-phoenix-sky-harbor",
      },
    ],
  },
  {
    slug: "dod-government-transportation",
    title: "Government & Industrial Transportation, Southern AZ | Tribute",
    metaDescription:
      "Contract transportation for government agencies, defense-related travel, and industrial crews across Southern Arizona and into New Mexico, including mine-site work.",
    primaryKeyword: "fort huachuca transportation",
    h1: "Contract transportation for government, defense, and industrial teams across Southern Arizona.",
    sub: "Built on the founder's years as a Department of Defense contractor, Tribute handles the transportation that comes with paperwork: agencies, defense-related travel, and industrial crews.",
    metaLine: "Contract accounts · Crew transport · Southern AZ into NM",
    image: "/images/services/government.jpg",
    imageAlt:
      "Government and industrial contract transportation in Southern Arizona",
    intro: [
      "Sierra Vista and Fort Huachuca sit inside our regular coverage, and defense-related work shaped how this company operates: punctuality treated as a requirement rather than a goal, discretion as a default, and documentation when the contract calls for it. Visiting officials, site visits, and recurring routes all run on standing arrangements with consolidated billing.",
      "The Morenci and Safford corridor moves a lot of workers, and moving them safely is a logistics problem we are built for. Crew rotations, shift changes, and site transfers run in the Sprinter, the mini coach, or the motorcoach depending on headcount, with schedules that repeat reliably for as long as the project runs.",
    ],
    includedHeading: "What contract transportation includes",
    included: [
      "Standing schedules for crew rotations, shift changes, and site transfers",
      "Coverage across Southern Arizona and into New Mexico, including Morenci, Safford, and Silver City",
      "Vendor registration, insurance documentation, and invoicing in your required format",
      "Consolidated billing under a contract rather than per-trip fares",
      "One point of contact who already knows the account",
      "Vehicles sized to the headcount, from a sedan to a 52-passenger coach",
    ],
    whyHeading: "Why agencies and operators contract with Tribute",
    why: [
      "The founder's background as a Department of Defense contractor shaped the standard: punctuality as a requirement, discretion as a default",
      "Trip records and compliance documentation available on request",
      "Fort Huachuca and Sierra Vista are inside regular coverage, not a special trip",
      "Reliability priced as a contract, so the route runs the same in month nine as it did in week one",
    ],
    vehicleLine:
      "Individual officials ride the Town Car or Suburban. Crews move in the Sprinter, mini coach, or motorcoach, up to fifty-two per vehicle.",
    ctaLine: "Bring us the scope and the paperwork. We will handle the rest.",
    faqs: [
      {
        id: 1,
        q: "Do you handle recurring crew schedules?",
        a: "Yes. Standing schedules for rotations and shift changes are the core of this service, priced as a contract rather than per trip.",
      },
      {
        id: 2,
        q: "Can you provide documentation for compliance?",
        a: "Yes. Trip records, insurance certificates, and invoicing in your required format are available on request.",
      },
      {
        id: 3,
        q: "How far will you run a crew route?",
        a: "Across Southern Arizona and into New Mexico, including the Morenci, Safford, and Silver City corridor.",
      },
    ],
    related: [
      {
        label: "Corporate car service",
        href: "/services/corporate-car-service",
      },
      { label: "The motorcoach", href: "/fleet/charter-coach" },
    ],
  },
];

export const serviceSlugs = services.map((s) => s.slug);

export function getService(slug: string): ServiceContent | undefined {
  return services.find((s) => s.slug === slug);
}
