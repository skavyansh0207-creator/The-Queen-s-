export interface SalonService {
  id: string;
  name: string;
  category: 'brows' | 'hair' | 'skin' | 'wellness' | 'bridal';
  duration: string;
  price: number;
  description: string;
  popular?: boolean;
}

export interface BridalPackage {
  id: string;
  title: string;
  price: number;
  duration: string;
  description: string;
  includes: string[];
  recommended?: boolean;
}

export const SALON_INFO = {
  name: "The Queen's: A Family Salon",
  shortName: "The Queen's Salon",
  type: 'Luxury Family Salon & Beauty Studio',
  tagline: 'Luxury Family Salon & Beauty Studio in Sector 28 D, Chandigarh',
  rating: 5.0,
  totalReviews: '379+',
  reviewsCount: 379,
  phone: '9888547548',
  formattedPhone: '+91 9888547548',
  whatsappUrl: 'https://wa.me/919888547548?text=Hi%20The%20Queen%27s%20Salon%2C%20I%20would%20like%20to%20book%20an%20appointment.',
  address: {
    shop: 'SCO-154, 2nd Floor',
    area: 'Sector 28 D',
    city: 'Chandigarh',
    state: 'Chandigarh',
    pincode: '160002',
    landmark: 'Near Pal Dhaba, Sector 28 D Market',
    full: 'SCO-154, 2nd Floor, Near Pal Dhaba, Sector 28 D, Chandigarh - 160002',
    mapsUrl: 'https://maps.google.com/?q=SCO-154+2nd+Floor+Near+Pal+Dhaba+Sector+28+D+Chandigarh+160002'
  },
  timings: 'Mon – Sun: 10:00 AM – 8:30 PM',
  heroImage: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80',
  featureImage: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=80',
  hairImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80',
  bridalImage: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80'
};

export const SALON_SERVICES: SalonService[] = [
  // 1. Brows, Lashes & Makeup
  {
    id: 'eyebrow-threading',
    name: 'Eyebrow Threading & Brow Shaping',
    category: 'brows',
    duration: '15 min',
    price: 150,
    description: 'Precision royal brow sculpting using organic hypoallergenic thread, followed by a soothing cooling aloe vera touch.',
    popular: true
  },
  {
    id: 'eyebrow-beautification',
    name: 'Eyebrow Beautification & Tinting',
    category: 'brows',
    duration: '30 min',
    price: 650,
    description: 'Custom tinting, lamination, and symmetrical brow arch definition for lush, flawlessly structured arches.',
    popular: true
  },
  {
    id: 'eyelashes',
    name: 'Eyelash Extensions (Classic & Volume)',
    category: 'brows',
    duration: '60 min',
    price: 2499,
    description: 'Ultra-lightweight silk and mink lash extensions individually customized for captivating eye depth and curl.',
    popular: true
  },
  {
    id: 'permanent-makeup',
    name: 'Permanent Makeup (Microblading & Lip Blush)',
    category: 'brows',
    duration: '90 min',
    price: 6999,
    description: 'High-end semi-permanent cosmetic tattooing including nano-stroke microblading, ombre shading, and rosy lip blush.',
    popular: true
  },

  // 2. Hair Studio (Extensions, Blow dry, Precision family haircuts, Styling)
  {
    id: 'blow-dry',
    name: 'Blow Dry & Signature Styling',
    category: 'hair',
    duration: '35 min',
    price: 550,
    description: 'Volumizing blowout, Hollywood cascading waves, textured beach curls, or high-gloss sleek finish.',
    popular: true
  },
  {
    id: 'hair-extensions',
    name: '100% Remy Hair Extensions',
    category: 'hair',
    duration: '90 min',
    price: 4999,
    description: 'Luxury 100% natural Remy human hair extensions with seamless micro-ring, tape-in, or clip-in blending.',
    popular: true
  },
  {
    id: 'family-haircut-styling',
    name: 'Precision Family Haircut & Styling',
    category: 'hair',
    duration: '45 min',
    price: 650,
    description: 'Tailored precision haircuts for women, men, and children by master stylists, finished with clarifying wash & blowout.',
    popular: true
  },
  {
    id: 'keratin-treatment',
    name: 'Keratin Smoothing & Protein Hair Spa',
    category: 'hair',
    duration: '120 min',
    price: 4200,
    description: 'Formaldehyde-free keratin protein therapy that eliminates humidity frizz, infuses shine, and seals split ends.',
    popular: true
  },
  {
    id: 'balayage-ombre',
    name: 'Balayage & Ombre Hair Color',
    category: 'hair',
    duration: '150 min',
    price: 4500,
    description: 'Bespoke hand-painted dimensional highlights, tonal glossing, and bond-protecting Olaplex treatment.',
    popular: true
  },

  // 3. Skincare & Waxing (Acne treatments, Brazilian waxing, Body waxing, Tanning)
  {
    id: 'acne-treatments',
    name: 'Targeted Clinical Acne Clearing Treatment',
    category: 'skin',
    duration: '55 min',
    price: 1899,
    description: 'Dermat-guided purifying facial with salicylic peel, ultrasound pore evacuation, high-frequency antibacterial therapy, and zinc mask.',
    popular: true
  },
  {
    id: 'brazilian-waxing',
    name: 'Brazilian Waxing (Italian Rica Wax)',
    category: 'skin',
    duration: '35 min',
    price: 1599,
    description: 'Ultra-hygienic strip-less Italian Rica white chocolate wax formulated for delicate zones in private sterilized suites.',
    popular: true
  },
  {
    id: 'body-waxing',
    name: 'Full Body Waxing (Rica Wax)',
    category: 'skin',
    duration: '75 min',
    price: 2499,
    description: 'Satin-smooth, prolonged hair removal for arms, legs, underarms, and back using soothing botanical Rica wax.',
    popular: true
  },
  {
    id: 'tanning-treatment',
    name: 'Sun Tanning & De-Tan Body Polish',
    category: 'skin',
    duration: '50 min',
    price: 1799,
    description: 'Exfoliating botanical de-tan polish that lifts stubborn sun tanning, dullness, and hyperpigmentation for an even golden glow.',
    popular: true
  },
  {
    id: 'hydrafacial-glow',
    name: 'HydraFacial Royal Glow Treatment',
    category: 'skin',
    duration: '50 min',
    price: 2699,
    description: 'Vortex vacuum pore extraction, antioxidant infusion, and hyaluronic plumping for glowing, red-carpet ready skin.'
  },

  // 4. Bridal & Wellness (Wedding & event prep, Relaxing therapeutic massage)
  {
    id: 'relaxing-massage',
    name: 'Relaxing Full Body Therapeutic Massage',
    category: 'wellness',
    duration: '60 min',
    price: 2199,
    description: 'Therapeutic aromatherapy massage with warm essential oils and Swedish pressure techniques to relieve fatigue and muscle knots.',
    popular: true
  },
  {
    id: 'head-shoulder-massage',
    name: 'Stress Relief Head & Shoulder Massage',
    category: 'wellness',
    duration: '35 min',
    price: 899,
    description: 'Deep restorative scalp massage with warm herbal oils and shoulder acupressure to alleviate stress and tension.'
  },
  {
    id: 'wedding-event-prep',
    name: 'Wedding & Event Preparation Makeover',
    category: 'bridal',
    duration: '150 min',
    price: 12500,
    description: 'Signature HD royal bridal makeover with designer hairstyle, jewelry & maang tikka setting, luxury lashes, and regal dupatta draping.',
    popular: true
  },
  {
    id: 'party-event-glam',
    name: 'Cocktail & Party Event Glam',
    category: 'bridal',
    duration: '75 min',
    price: 3499,
    description: 'Luminous base, smokey or shimmer eye styling, lash accentuation, and glamorous blowout for bridesmaids and festive parties.',
    popular: true
  }
];

export const BRIDAL_PACKAGES: BridalPackage[] = [
  {
    id: 'pre-wedding-ritual',
    title: 'Pre-Wedding & Wellness Ritual',
    price: 8499,
    duration: '2 Days Preparation',
    description: 'Complete head-to-toe royal rejuvenation before the wedding and reception celebrations begin.',
    includes: [
      'Full Body Rica Waxing & Brow Beautification',
      'Relaxing Full Body Therapeutic Massage',
      'Targeted Acne Clearing & De-Tan Polishing',
      'HydraFacial Royal Glow Facial',
      'Luxury Spa Manicure & Pedicure'
    ]
  },
  {
    id: 'royal-hd-bridal',
    title: 'The Queen\'s Royal HD Wedding Package',
    price: 15500,
    duration: 'Main Wedding Day',
    description: 'Our flagship signature bridal experience crafted for 4K photography, emotional radiance, and all-day perfection.',
    includes: [
      'High-Definition Bridal Makeup (MAC / Huda Beauty / Dior)',
      'Bridal Hair Styling & 100% Remy Volume Extensions',
      'Dupatta Draping & Silhouette Pinning',
      'Jewelry & Maang Tikka Setting',
      '3D Mink Lashes & Brow Beautification'
    ],
    recommended: true
  },
  {
    id: 'grand-bridal-wellness',
    title: 'Grand Royal Bridal & Wellness Experience',
    price: 21000,
    duration: 'Pre-Wedding + Main Day',
    description: 'The ultimate royal pampering featuring pre-event therapeutic massages, skin glow treatments, and airbrush bridal artistry.',
    includes: [
      '60-min Relaxing Full Body Therapeutic Massage & De-Tan',
      'Waterproof Airbrush Bridal Makeover',
      'Permanent Makeup Touch-up / Brow Beautification',
      'Full Body Rica Waxing & HydraFacial Glow',
      'Luxury Hair Extensions & Dedicated Senior Artist Support'
    ]
  }
];

export const REVIEWS = [
  {
    name: 'Harpreet Kaur Gill',
    rating: 5,
    text: "The Queen's in Sector 28 D is exceptional! Got eyebrow beautification and permanent lip blush done. The ambience is royal, staff is extremely gentle, and hygiene is top notch.",
    service: 'Brows & Permanent Makeup'
  },
  {
    name: 'Amanpreet Singh',
    rating: 5,
    text: 'Visited The Queen\'s: A Family Salon near Pal Dhaba with my family. Precision haircuts for all of us, plus I took a relaxing therapeutic massage. Best family salon experience in Chandigarh!',
    service: 'Family Haircuts & Relaxing Massage'
  },
  {
    name: 'Dr. Jasleen Sandhu',
    rating: 5,
    text: 'Outstanding skin & waxing care! Their targeted acne treatment cleared my skin breakout, and Brazilian waxing with Italian Rica wax was gentle and quick. Highly recommended 5-star salon.',
    service: 'Acne Treatment & Brazilian Waxing'
  },
  {
    name: 'Ritu Vashisht',
    rating: 5,
    text: 'Booked The Queen\'s for my wedding preparation and blow dry styling. My bridal makeup was breathtaking and stayed pristine all night. Truly deserves their 5.0 rating!',
    service: 'Wedding & Event Preparation'
  }
];
