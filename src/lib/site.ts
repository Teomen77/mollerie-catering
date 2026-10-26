export const site = {
  name: "mollerie",
  title: "mollerie – Buffets & Catering",
  owner: "Willi Moll",
  street: "Liebigstraße 145",
  postalCode: "50823",
  city: "Köln",
  district: "Ehrenfeld",
  phoneDisplay: "0221 7165584",
  phoneTel: "+492217165584",
  mobileDisplay: "0170 5164327",
  mobileTel: "+491705164327",
  email: "kontakt@mollerie.de",
  oldSite: "http://mollerie.de/",
  since: "April 2009",
  taxNumber: "217/5197/2546",
  taxOffice: "Finanzamt Köln-Nord",
  lat: 50.9552201,
  lon: 6.9310921,
} as const;

export const mapLink = `https://www.openstreetmap.org/?mlat=${site.lat}&mlon=${site.lon}#map=17/${site.lat}/${site.lon}`;

export const addressLine = `${site.street}, ${site.postalCode} ${site.city}`;
