// All images use the local bride photos from /public/images/
// bride.jpg + bride1.jpg through bride11.jpg = 12 images total

const B = (n: number | string) => `/images/bride${n === 0 ? "" : n}.jpg`;

// All 12 images in order
export const allBrideImages: string[] = [
  B(0), B(1), B(2), B(3), B(4), B(5),
  B(6), B(7), B(8), B(9), B(10), B(11),
];

// Pick image by index, cycling through all 12
const pick = (i: number) => allBrideImages[i % 12];

export const images = {
  hero1:                 pick(0),
  hero2:                 pick(1),
  hero3:                 pick(2),
  collectionsHero:       pick(3),
  philosophy:            pick(4),
  appointmentBg:         pick(5),
  collectionBridal:      pick(0),
  collectionGroom:       pick(6),
  collectionCocktail:    pick(7),
  collectionResort:      pick(8),
  collectionBridesmaids: pick(9),
  collectionCelebrity:   pick(10),
  product1:  pick(0),
  product2:  pick(1),
  product3:  pick(2),
  product4:  pick(3),
  product5:  pick(4),
  product6:  pick(5),
  product7:  pick(6),
  product8:  pick(7),
  instagram1: pick(0),
  instagram2: pick(1),
  instagram3: pick(2),
  instagram4: pick(3),
  instagram5: pick(4),
  instagram6: pick(5),
  instagram7: pick(6),
  instagram8: pick(7),
  instagram9: pick(8),
  testimonial1: pick(9),
  testimonial2: pick(10),
  testimonial3: pick(11),
};

export const productImages: string[] = [
  pick(0), pick(1), pick(2), pick(3),
  pick(4), pick(5), pick(6), pick(7),
];

export const instagramImages: string[] = [
  pick(0), pick(1), pick(2),
  pick(3), pick(4), pick(5),
  pick(6), pick(7), pick(8),
];

export const testimonialImages: string[] = [
  pick(9), pick(10), pick(11),
];

export const categoryImages: Record<string, string> = {
  bridal:        pick(0),
  groom:         pick(6),
  cocktail:      pick(7),
  "resort-wear": pick(8),
  bridesmaids:   pick(9),
  celebrity:     pick(10),
};
