export const getTravelDates = (start, end) => {
  const startArr = start.split('-');
  const endArr = end.split('-');
  const months = {
    '01': 'Jan',
    '02': 'Feb',
    '03': 'Mar',
    '04': 'Apr',
    '05': 'May',
    '06': 'Jun',
    '07': 'Jul',
    '08': 'Aug',
    '09': 'Sep',
    '10': 'Oct',
    '11': 'Nov',
    '12': 'Dec'
  }
  const startMonth = months[startArr[1]]
  const endMonth = months[endArr[1]]
  let startDate = startArr[2]
  let endDate = endArr[2]

  if (startDate[0] == 0) {
    startDate = startDate[1];
  };
  if (endDate[0] == 0) {
    endDate = endDate[1];
  };

  if (startMonth === endMonth) {
    return `${startMonth} ${startDate}-${endDate}, ${startArr[0]}`
  } else {
    return `${startMonth} ${startDate}-${endMonth} ${endDate}, ${startArr[0]}`
  };
};

export const getHumanMonth = (index) => {
  const months = {
    0: 'January',
    1: 'February',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December'
  }
  return months[index.toString()]
}

export const getHumanDate = (start) => {
  const startArr = start.split('-');
  const months = {
    '01': 'Jan',
    '02': 'Feb',
    '03': 'Mar',
    '04': 'Apr',
    '05': 'May',
    '06': 'Jun',
    '07': 'Jul',
    '08': 'Aug',
    '09': 'Sep',
    '10': 'Oct',
    '11': 'Nov',
    '12': 'Dec'
  }
  const startMonth = months[startArr[1]]
  let startDate = startArr[2]

  if (startDate[0] == 0) {
    startDate = startDate[1];
  };
  return `${startMonth} ${startDate}, ${startArr[0]}`
};

export const countries = [
	"Afghanistan",
	"Albania",
	"Algeria",
	"American Samoa",
	"Andorra",
	"Angola",
	"Anguilla",
	"Antarctica",
	"Antigua and Barbuda",
	"Argentina",
	"Armenia",
	"Aruba",
	"Australia",
	"Austria",
	"Azerbaijan",
	"Bahamas ",
	"Bahrain",
	"Bangladesh",
	"Barbados",
	"Belarus",
	"Belgium",
	"Belize",
	"Benin",
	"Bermuda",
	"Bhutan",
	"Bolivia (Plurinational State of)",
	"Bonaire, Sint Eustatius and Saba",
	"Bosnia and Herzegovina",
	"Botswana",
	"Bouvet Island",
	"Brazil",
	"British Indian Ocean Territory",
	"Brunei Darussalam",
	"Bulgaria",
	"Burkina Faso",
	"Burundi",
	"Cabo Verde",
	"Cambodia",
	"Cameroon",
	"Canada",
	"Cayman Islands",
	"Central African Republic",
	"Chad",
	"Chile",
	"China",
	"Christmas Island",
	"Cocos (Keeling) Islands",
	"Colombia",
	"Comoros",
	"Congo (Democratic Republic)",
	"Congo",
	"Cook Islands",
	"Costa Rica",
	"Croatia",
	"Cuba",
	"Curaçao",
	"Cyprus",
	"Czechia",
	"Côte d'Ivoire",
	"Denmark",
	"Djibouti",
	"Dominica",
	"Dominican Republic ",
	"Ecuador",
	"Egypt",
	"El Salvador",
	"Equatorial Guinea",
	"Eritrea",
	"Estonia",
	"Eswatini",
	"Ethiopia",
	"Falkland Islands",
	"Faroe Islands",
	"Fiji",
	"Finland",
	"France",
	"French Guiana",
	"French Polynesia",
	"French Southern Territories",
	"Gabon",
	"Gambia",
	"Georgia",
	"Germany",
	"Ghana",
	"Gibraltar",
	"Greece",
	"Greenland",
	"Grenada",
	"Guadeloupe",
	"Guam",
	"Guatemala",
	"Guernsey",
	"Guinea",
	"Guinea-Bissau",
	"Guyana",
	"Haiti",
	"Heard Island and McDonald Islands",
	"Holy See",
	"Honduras",
	"Hong Kong",
	"Hungary",
	"Iceland",
	"India",
	"Indonesia",
	"Iran (Islamic Republic of)",
	"Iraq",
	"Ireland",
	"Isle of Man",
	"Israel",
	"Italy",
	"Jamaica",
	"Japan",
	"Jersey",
	"Jordan",
	"Kazakhstan",
	"Kenya",
	"Kiribati",
	"Korea (People's Republic of)",
	"Korea (the Republic of)",
	"Kuwait",
	"Kyrgyzstan",
	"Lao People's Democratic Republic",
	"Latvia",
	"Lebanon",
	"Lesotho",
	"Liberia",
	"Libya",
	"Liechtenstein",
	"Lithuania",
	"Luxembourg",
	"Macao",
	"Madagascar",
	"Malawi",
	"Malaysia",
	"Maldives",
	"Mali",
	"Malta",
	"Marshall Islands ",
	"Martinique",
	"Mauritania",
	"Mauritius",
	"Mayotte",
	"Mexico",
	"Micronesia (Federated States of)",
	"Moldova (the Republic of)",
	"Monaco",
	"Mongolia",
	"Montenegro",
	"Montserrat",
	"Morocco",
	"Mozambique",
	"Myanmar",
	"Namibia",
	"Nauru",
	"Nepal",
	"Netherlands",
	"New Caledonia",
	"New Zealand",
	"Nicaragua",
	"Niger",
	"Nigeria",
	"Niue",
	"Norfolk Island",
	"Northern Mariana Islands",
	"Norway",
	"Oman",
	"Pakistan",
	"Palau",
	"Palestine, State of",
	"Panama",
	"Papua New Guinea",
	"Paraguay",
	"Peru",
	"Philippines",
	"Pitcairn",
	"Poland",
	"Portugal",
	"Puerto Rico",
	"Qatar",
	"Republic of North Macedonia",
	"Romania",
	"Russian Federation ",
	"Rwanda",
	"Réunion",
	"Saint Barthélemy",
	"Saint Helena",
	"Saint Kitts and Nevis",
	"Saint Lucia",
	"Saint Martin (French part)",
	"Saint Pierre and Miquelon",
	"Saint Vincent and the Grenadines",
	"Samoa",
	"San Marino",
	"Sao Tome and Principe",
	"Saudi Arabia",
	"Senegal",
	"Serbia",
	"Seychelles",
	"Sierra Leone",
	"Singapore",
	"Sint Maarten (Dutch part)",
	"Slovakia",
	"Slovenia",
	"Solomon Islands",
	"Somalia",
	"South Africa",
	"South Georgia",
	"South Sudan",
	"Spain",
	"Sri Lanka",
	"Sudan ",
	"Suriname",
	"Svalbard and Jan Mayen",
	"Sweden",
	"Switzerland",
	"Syrian Arab Republic",
	"Taiwan",
	"Tajikistan",
	"Tanzania, United Republic of",
	"Thailand",
	"Timor-Leste",
	"Togo",
	"Tokelau",
	"Tonga",
	"Trinidad and Tobago",
	"Tunisia",
	"Turkey",
	"Turkmenistan",
	"Turks and Caicos Islands",
	"Tuvalu",
	"Uganda",
	"Ukraine",
	"United Arab Emirates",
	"Northern Ireland",
	"United States Minor Outlying Islands",
	"United States of America",
	"Uruguay",
	"Uzbekistan",
	"Vanuatu",
	"Venezuela",
	"Viet Nam",
	"Virgin Islands (British)",
	"Virgin Islands (U.S.)",
	"Wallis and Futuna",
	"Western Sahara",
	"Yemen",
	"Zambia",
	"Zimbabwe",
	"Åland Islands"
];


export const amenities = [
  {
    label: "Bathroom",
    options: [
      { label: "Bathtub", value: "bathtub" },
      { label: "Hair dryer", value: "hairDryer" },
      { label: "Shampoo", value: "shampoo" },
      { label: "Hot water", value: "hotWater" },
    ]
  },
  {
    label: "Bedroom and laundry",
    options: [
      { label: "Washer", value: "washer" },
      { label: "Dryer", value: "dryer" },
      { label: "Essentials", value: "essentials" },
      { label: "Hangers", value: "hangers" },
      { label: "Bed linens", value: "bedLinens" },
    ]
  },
  {
    label: "Entertainment",
    options: [
      { label: "TV", value: "tv" },
      { label: "Home Theatre", value: "homeTheatre" },
    ]
  },
  {
    label: "Heating and cooling",
    options: [
      { label: "Air conditioning", value: "airConditioning" },
      { label: "Indoor fireplace", value: "firePlace" },
      { label: "Heating", value: "heating" },
    ]
  },
  {
    label: "Internet and office",
    options: [
      { label: "Wifi", value: "wifi" },
      { label: "Home office", value: "homeOffice" },
    ]
  },
  {
    label: "Kitchen and dining",
    options: [
      { label: "Kitchen", value: "kitchen" },
      { label: "Refridgerator", value: "refridgerator" },
      { label: "Microwave", value: "microwave" },
      { label: "Cooking Basics", value: "cookingBasics" },
      { label: "Dishwasher", value: "dishWasher" },
      { label: "Coffee Maker", value: "coffeMaker" },
    ]
  },
  {
    label: "Services",
    options: [
      { label: "Pets Allowed", value: "petsAllowed" },
      { label: "Long term stays allowed", value: "longTerm" },
      { label: "Parking", value: "parking" },
      { label: "Self check-in", value: "selfCheckIn" },
      { label: "Keypad", value: "keyPad" },
      { label: "Coffee Maker", value: "coffeMaker" },
    ]
  },
  {
    label: "Outdoor",
    options: [
      { label: "Private patio or balcony", value: "patio" },
      { label: "Private backyard - Fully fenced", value: "backyard" },
      { label: "BBQ gril", value: "bbqGrill" },
      { label: "Swimming Pool", value: "swimmingPool" },
      { label: "Hot tub", value: "hotTub" },
      { label: "Waterfront", value: "waterFront" },
    ]
  },
];

export const amenitiesObj = {
  bathtub: ['bathtub', 'Bathtub'],
  shampoo: ['shower', 'Shampoo'],
  hotWater: ['faucet', 'Hot water'],
  hairDryer: ['air', 'Hair dryer'],
  essentials: ['inventory', 'Essentials'],
  hangers: ['checkroom', 'Hangers'],
  bedLinens: ['bed', 'Bed linens'],
  homeTheatre: ['theaters', 'Home theatre'],
  airConditioning: ['ac_unit', 'Air conditioned'],
  firePlace: ['fireplace', 'Fireplace'],
  heating: ['hvac', 'Heating'],
  wifi: ['wifi', 'Wifi'],
  tv: ['tv', 'Television'],
  homeOffice: ['computer', 'Home office'],
  kitchen: ['countertops', 'Kitchen'],
  washer: ['local_laundry_service', 'Washing machine'],
  dryer: ['local_laundry_service', 'Dryer'],
  refridgerator: ['kitchen', 'Fridge'],
  microwave: ['microwave_gen', 'Microwave'],
  cookingBasics: ['restaurant', 'Cooking basics'],
  dishWasher: ['dishwasher_gen', 'Dishwasher'],
  petsAllowed: ['pets', 'Pets allowed'],
  longTerm: ['event_available', 'Long-term stay Ok'],
  parking: ['directions_car', 'Parking'],
  selfCheckIn: ['done_outline', 'Self check-in'],
  keyPad: ['keyboard', 'Key pad entry'],
  coffeMaker: ['coffee_maker', 'Coffee maker'],
  patio: ['deck', 'Patio or balcony'],
  backyard: ['fence', 'Fenced yard'],
  bbqGrill: ['outdoor_grill', 'BBQ grill'],
  swimmingPool: ['pool', 'Swimming pool'],
  hotTub: ['hot_tub', 'Hot tub'],
  waterFront: ['water', 'Water front'],
};

export function getAddressObject(place) {
  const address = {}

  place.address_components.forEach(component => {
    let { long_name, types } = component

    if (types.includes('street_number')) {
      address.streetNumber = long_name
    } else if (types.includes('route')) {
      address.street = long_name
    } else if (types.includes('neighborhood')) {
      address.neighborhood = long_name
    } else if (types.includes('locality')) {
      address.city = long_name
    } else if (types.includes('administrative_area_level_2')) {
      address.county = long_name
    } else if (types.includes('administrative_area_level_1')) {
      address.state = long_name
    } else if (types.includes('country')) {
      address.country = long_name
    } else if (types.includes('postal_code')) {
      address.zip = long_name
    }
  })
  return address
}