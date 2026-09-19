// 2026 Footcandle Film Festival sponsors.
// Logos live in public/images/sponsors/. Order roughly follows the printed
// program's prominence. To add/remove a sponsor, edit this list.

export type Sponsor = {
  name: string;
  logo: string; // filename in /public/images/sponsors/
  url: string;
};

export const sponsors: Sponsor[] = [
  { name: "Arts Culture Catawba", logo: "arts-culture-catawba.png", url: "https://www.artscatawba.org/" },
  { name: "North Carolina Arts Council", logo: "nc-arts-council.png", url: "https://www.ncarts.org/" },
  { name: "Pepsi", logo: "pepsi.png", url: "https://www.pepsihky.com" },
  { name: "Greater Hickory International Council", logo: "greater-hickory-international-council.png", url: "https://hickoryinternationalcouncil.com/" },
  { name: "City of Hickory", logo: "city-of-hickory.png", url: "https://www.hickorync.gov/" },
  { name: "Shurtape", logo: "shurtape.png", url: "https://www.shurtapetech.com/" },
  { name: "Catawba Valley Community College", logo: "catawba-valley-community-college.png", url: "https://www.cvcc.edu/" },
  { name: "Catawba Valley Insurance Agency", logo: "catawba-valley-insurance.png", url: "https://catawbavalleyinsurance.com/" },
  { name: "Lenoir-Rhyne University", logo: "lenoir-rhyne.png", url: "https://www.lr.edu/" },
  { name: "Hindsight Forward — Mitchell Gold Consulting", logo: "hindsight-forward.png", url: "https://mghindsightforward.com/" },
  { name: "Cranford Hospitality", logo: "cranford-hospitality.png", url: "https://www.cranfordhospitality.com/" },
  { name: "Vanguard Furniture", logo: "vanguard-furniture.png", url: "https://www.vanguardfurniture.com/" },
  { name: "Visit Hickory", logo: "visit-hickory.png", url: "https://www.visithickorync.com/" },
  { name: "Lake Hickory Realty", logo: "lake-hickory-realty.png", url: "https://lakehickoryrealty.com/" },
  { name: "Jackson Creative", logo: "jackson-creative.png", url: "https://www.thejacksoncreative.com/" },
  { name: "Catawba Women's Center", logo: "catawba-womens-center.png", url: "https://catawbawomenscenter.com/" },
  { name: "Martin Starnes & Associates, CPAs", logo: "martin-starnes.png", url: "https://www.martinstarnes.com/" },
  { name: "Imagine One Hospitality", logo: "imagine-one-hospitality.png", url: "https://imagineonehospitality.com/" },
  { name: "McKinney Graham Dental Arts", logo: "mckinney-graham-dental.png", url: "https://mckinneygraham.com/" },
  { name: "Broome Associates", logo: "broome-associates.png", url: "https://legacyinspartners.com/locations/broome-insurance/" },
  { name: "Catawba Insurance Agency", logo: "catawba-insurance-agency.png", url: "https://www.catawbainsurance.com/" },
  { name: "Courtyard by Marriott — Hickory", logo: "courtyard-marriott.png", url: "https://www.marriott.com/en-us/hotels/hkycy-courtyard-hickory/overview/" },
  { name: "Resource Partners", logo: "resource-partners.png", url: "https://www.raymondjames.com/resourcepartners/" },
  { name: "Graystone Eye", logo: "graystone-eye.png", url: "https://www.graystone-eye.com/" },
  { name: "True North Realty", logo: "true-north-realty.png", url: "https://www.nctruenorthrealty.com/" },
  { name: "Jason Herman Insurance", logo: "jason-herman-insurance.png", url: "https://jasonhermaninsurance.com/" },
  { name: "Richey May", logo: "richey-may.png", url: "https://richeymay.com/" },
  { name: "Taste Full Beans Coffeehouse", logo: "tfb-coffeehouse.png", url: "https://www.tastefullbeans.com/" },
];
