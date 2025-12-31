export interface CityData {
    name: string;
    metaTitle: string;
    metaDescription: string;
    heroLine: string;
    intro: string;
    marketInsights: string;
    neighborhoods?: string[];
    situations: string[];
    testimonials?: {
        name: string;
        text: string;
        location: string;
    }[];
}

export const cityData: Record<string, CityData> = {
    "indianapolis": {
        name: "Indianapolis",
        metaTitle: "Sell My House Fast Indianapolis | We Buy Houses Indianapolis | HudREI",
        metaDescription: "Need to sell your house fast in Indianapolis? HudREI buys homes in Marion County in any condition. Cash offers in 24 hours. Close in 7 days. No fees.",
        heroLine: "We Buy Houses in Indianapolis – Fast Cash Offers for Marion County Homes",
        intro: "HudREI is Indianapolis's trusted cash home buyer, serving all neighborhoods across Marion County. Whether you're in Broad Ripple, Fountain Square, Irvington, or any other Indy neighborhood, we buy houses in any condition and close on your timeline.",
        marketInsights: "The Indianapolis real estate market has seen significant appreciation over the past decade, but many older neighborhoods contain properties that need substantial updates. Homes built in the early 1900s—common in areas like Irvington, Fountain Square, and Old Northside—often require foundation work, electrical upgrades, and roof replacements. Selling as-is to HudREI often nets you the same or more money—in a fraction of the time.",
        neighborhoods: ["Broad Ripple", "Fountain Square", "Irvington", "Meridian-Kessler", "Butler-Tarkington", "Downtown", "Massachusetts Avenue", "Fletcher Place", "Holy Cross", "Cottage Home", "Martindale-Brightwood", "Garfield Park", "Beech Grove", "Southport", "Perry Township", "Haughville", "Mars Hill", "Riverside", "Speedway", "Clermont"],
        situations: [
            "Foreclosure in Indianapolis: Selling before the sheriff sale can save your credit.",
            "Inherited Properties: We buy inherited houses in any condition and handle all estate coordination.",
            "Rental Property Problems: We'll buy your rental property even with problematic tenants in place.",
            "Divorce Property Sales: We help couples liquidate their marital home quickly for a clean break."
        ],
        testimonials: [
            {
                name: "Rachel M.",
                location: "Fountain Square",
                text: "HudREI bought our house in Fountain Square in just 10 days. We inherited it from my grandfather and it needed so much work. They made the whole process simple."
            },
            {
                name: "David K.",
                location: "Far Eastside",
                text: "I was facing foreclosure on my rental property in the Far Eastside. HudREI stepped in and closed before the sheriff sale. They saved me from a foreclosure judgment."
            }
        ]
    },
    "fort-wayne": {
        name: "Fort Wayne",
        metaTitle: "Sell My House Fast Fort Wayne | We Buy Houses Fort Wayne IN | HudREI",
        metaDescription: "Sell your house fast in Fort Wayne. HudREI buys homes in Allen County in any condition. Fair cash offers, close in 7 days, zero fees.",
        heroLine: "We Buy Houses in Fort Wayne – Cash Offers for Allen County Homes",
        intro: "Fort Wayne homeowners trust HudREI for fast, fair cash offers on properties in any condition. Whether you're in Waynedale, Northside, or anywhere else in Allen County, we buy houses quickly and handle all the details.",
        marketInsights: "Fort Wayne's housing stock is predominantly older homes built between 1940-1980, with many properties needing updates to electrical, plumbing, and HVAC systems. The city has seen steady appreciation, but neighborhoods like the Southeast and Southwest contain significant distressed inventory. If you own a property in Fort Wayne that needs $20,000+ in repairs, selling on the traditional market becomes challenging.",
        neighborhoods: ["Waynedale", "Northside", "Aboite", "Huntertown", "Grabill", "Leo-Cedarville", "New Haven", "Woodburn", "West Central", "South Wayne"],
        situations: [
            "Industrial Job Loss: We help residents facing financial hardship sell quickly.",
            "Aging Housing Stock: We buy outdated properties and renovate them as-is.",
            "Inheritance: We buy homes from heirs who don't want to deal with decades of updates."
        ],
        testimonials: [
            {
                name: "James & Linda R.",
                location: "Fort Wayne",
                text: "We were behind on our mortgage and facing foreclosure. HudREI stepped in and bought our house before the sheriff sale. They saved our credit and treated us with respect."
            }
        ]
    },
    "evansville": {
        name: "Evansville",
        metaTitle: "Sell My House Fast Evansville | We Buy Houses Evansville IN | HudREI",
        metaDescription: "Need to sell your house fast in Evansville? HudREI buys Vanderburgh County homes in any condition. Cash offers in 24 hours. No fees, no repairs.",
        heroLine: "We Buy Houses in Evansville – Cash for Vanderburgh County Homes",
        intro: "Evansville homeowners choose HudREI when they need to sell quickly without the hassle of traditional listings. We buy houses throughout Vanderburgh County in any condition, from historic properties downtown to suburban homes on the west side.",
        marketInsights: "Evansville's housing market features a mix of historic Victorian homes, mid-century suburban properties, and newer developments. The older neighborhoods—particularly Jacobsville and areas near downtown—contain many investment properties that need significant rehab. We specialize in buying these fixer-uppers that traditional buyers avoid.",
        neighborhoods: ["Downtown Evansville", "Jacobsville", "Riverside Historic District", "Goosetown", "West Evansville", "East Evansville", "Newburgh"],
        situations: [
            "Historic Home Challenges: We take on the structural issues of older Evansville homes.",
            "Distressed Rentals: Sell your unwanted rental property for a fair cash price.",
            "Inherited Houses: We handle the cleanout and paperwork for your inherited property."
        ],
        testimonials: [
            {
                name: "Patricia W.",
                location: "Evansville",
                text: "My mother was a hoarder, and when she went into assisted living, I was left with a house filled floor to ceiling. HudREI didn't judge. They made an offer and handled the entire cleanout."
            }
        ]
    },
    "south-bend": {
        name: "South Bend",
        metaTitle: "Sell My House Fast South Bend | We Buy Houses South Bend IN | HudREI",
        metaDescription: "Sell your South Bend house fast for cash. HudREI buys St. Joseph County homes in any condition. Fair offers, quick closing, zero fees.",
        heroLine: "We Buy Houses in South Bend – Fast Cash for St. Joseph County Properties",
        intro: "South Bend homeowners trust HudREI to buy their properties quickly and fairly. Whether you're near Notre Dame, in downtown South Bend, or anywhere in St. Joseph County, we make cash offers and close on your timeline.",
        marketInsights: "South Bend's real estate market has been impacted by population decline in certain areas, leading to distressed inventory. Many older homes built in the early-to-mid 1900s need substantial renovation. We buy these properties and help revitalize South Bend neighborhoods through renovation and responsible ownership.",
        neighborhoods: ["Downtown South Bend", "Near Northwest", "Rum Village", "Northeast neighborhoods", "West Side", "Mishawaka", "Granger", "Notre Dame area"],
        situations: [
            "Revitalization Projects: We buy homes that need major structural or cosmetic work.",
            "Inherited Properties: Skip the probate stress and sell your inherited home fast.",
            "Avoiding Listings: Skip the showings and open houses in South Bend."
        ],
        testimonials: [
            {
                name: "David A.",
                location: "South Bend",
                text: "Fast, fair, and professional. They did exactly what they said they would do. No surprises, no games. Would definitely recommend to anyone needing to sell quickly in the South Bend area."
            }
        ]
    },
    "carmel": {
        name: "Carmel",
        metaTitle: "Sell My House Fast Carmel | Cash Home Buyers Carmel IN | HudREI",
        metaDescription: "Looking to sell your house fast in Carmel? HudREI is a local, family-owned company buying homes in any condition. No fees, no repairs, and cash offers in 24 hours.",
        heroLine: "We Buy Houses in Carmel – Get Your Fair Cash Offer Today",
        intro: "HudREI is Carmel's trusted cash home buyer. Whether you're near the Arts and Design District or in the surrounding neighborhoods, we buy houses in any condition and close on your timeline.",
        marketInsights: "Even in upscale Carmel, homes can become a burden. Whether it's an outdated property that needs modernization or a divorce situation, we provide a discrete and fast solution.",
        situations: [
            "Divorce Sales: We help Carmel couples liquidate their property quickly.",
            "Outdated Properties: No need to renovate your high-value home to sell.",
            "Fast Relocation: Sell your Carmel home in days to accommodate your next move."
        ],
        testimonials: [
            {
                name: "Michelle T.",
                location: "Carmel",
                text: "After my divorce, I needed to sell our marital home quickly. HudREI gave me a cash offer the next day and closed in 10 days. The process was straightforward and professional."
            }
        ]
    },
    "fishers": {
        name: "Fishers",
        metaTitle: "Sell My House Fast Fishers | Cash Home Buyers Fishers IN | HudREI",
        metaDescription: "Sell your house fast in Fishers. HudREI buys homes in any condition. Fair cash offers, close in 7 days, zero fees.",
        heroLine: "We Buy Houses in Fishers – Sell Your House Fast for Cash",
        intro: "Need to sell your house fast in Fishers? HudREI provides a straightforward solution with no hassles, no fees, and no repairs required. We buy as-is.",
        marketInsights: "Fishers is one of Indiana's fastest-growing areas. We understand the local market and provide competitive cash offers for homes in any condition.",
        situations: [
            "Avoiding Showings: Sell without the stress of constant open houses in Fishers.",
            "Quick Equity Release: Access the cash in your home without waiting months.",
            "Simplifying Life: We handle everything, including the paperwork and closing costs."
        ]
    },
    "bloomington": {
        name: "Bloomington",
        metaTitle: "Sell My House Fast Bloomington | Cash Home Buyers Bloomington IN | HudREI",
        metaDescription: "Looking to sell your house fast in Bloomington? HudREI buys homes in any condition. No fees, no repairs, and cash offers in 24 hours.",
        heroLine: "We Buy Houses in Bloomington – Get a Fair Cash Offer in 24 Hours",
        intro: "HudREI is Bloomington's local real estate investor. We buy houses in any condition, including student rentals and family homes, and close on your timeline.",
        marketInsights: "In Bloomington, we deal with everything from outdated family homes to student housing in need of major repairs. We buy it all for cash.",
        situations: [
            "Rental Property Headaches: Tired of managing student rentals? We'll take them off your hands.",
            "Inherited Estate: We help families settle estates quickly in Bloomington.",
            "No Repair Sales: Don't spend a dime on fixing up your house before selling."
        ],
        testimonials: [
            {
                name: "Robert C.",
                location: "Bloomington",
                text: "I had a rental property near IU that my tenants had absolutely destroyed. HudREI bought it as-is, and I didn't have to fix a single thing. Fair offer, quick closing."
            }
        ]
    },
    "hammond": {
        name: "Hammond",
        metaTitle: "Sell My House Fast Hammond | Cash Home Buyers Hammond IN | HudREI",
        metaDescription: "Sell your house fast in Hammond. HudREI buys homes in any condition. Fair cash offers, close in 7 days, zero fees.",
        heroLine: "We Buy Houses in Hammond – Sell Your House Fast for Cash",
        intro: "HudREI provides fast cash offers for homes in Hammond and throughout Lake County. Skip the repairs and the wait—sell your house as-is today.",
        marketInsights: "Hammond features many older properties that require significant maintenance. We buy these homes directly, saving you from expensive contractor bills.",
        situations: [
            "Foreclosure Prevention: Sell fast to stop the sheriff sale in Lake County.",
            "Inherited Property: We buy inherited homes in Hammond in any condition.",
            "Relocation: Need to move out of state quickly? We can close in a week."
        ],
        testimonials: [
            {
                name: "Tom B.",
                location: "Hammond",
                text: "Inherited my grandparents' house and it needed a new roof and major plumbing. I couldn't afford to fix it. HudREI bought it as-is and closed in two weeks."
            }
        ]
    },
    "muncie": {
        name: "Muncie",
        metaTitle: "Sell My House Fast Muncie | Cash Home Buyers Muncie IN | HudREI",
        metaDescription: "Looking to sell your house fast in Muncie? HudREI buys homes in any condition. No fees, no repairs, and cash offers in 24 hours.",
        heroLine: "We Buy Houses in Muncie – Get Your Fair Cash Offer Today",
        intro: "In Muncie and Delaware County, HudREI is your go-to local home buyer. We buy houses in any situation—foreclosure, inheritance, or unwanted rentals.",
        marketInsights: "Muncie has a lot of potential, but many homes need significant investment to meet modern standards. We take on that risk so you don't have to.",
        situations: [
            "Tax Liens: We buy properties with back taxes and settle them at closing.",
            "Unwanted Rentals: Sell your Muncie rental property fast without repairs.",
            "Probate Sales: We guide you through the process of selling an estate property."
        ],
        testimonials: [
            {
                name: "Jennifer M.",
                location: "Muncie",
                text: "I was skeptical of 'we buy houses' companies, but HudREI proved me wrong. They explained their offer clearly and the closing was smooth."
            }
        ]
    },
    "lafayette": {
        name: "Lafayette",
        metaTitle: "Sell My House Fast Lafayette | Cash Home Buyers Lafayette IN | HudREI",
        metaDescription: "Sell your house fast in Lafayette. HudREI buys homes in any condition. Fair cash offers, close in 7 days, zero fees.",
        heroLine: "We Buy Houses in Lafayette – Sell Your House Fast for Cash",
        intro: "HudREI provides fast, fair cash offers for homes in Lafayette and Tippecanoe County. No repairs needed, no commissions, just a clean sale.",
        marketInsights: "Lafayette's market is steady, but distressed properties can sit for months. We provide immediate liquidity for homeowners who need to sell now.",
        situations: [
            "Job Relocation: Move for your new career without worrying about your old house.",
            "Inherited Homes: We make it easy to divide estate assets among heirs.",
            "Financial Stress: Get the cash you need from your house in as little as 7 days."
        ]
    },
    "marion-county": {
        name: "Marion County",
        metaTitle: "We Buy Houses in Marion County | Sell House Fast Indianapolis | HudREI",
        metaDescription: "Looking to sell your house fast in Marion County? HudREI buys homes throughout Indianapolis and surrounding areas in any condition.",
        heroLine: "We Buy Houses Throughout Marion County – Get a Cash Offer Today",
        intro: "HudREI is the leading cash buyer in Marion County. We serve all of Indianapolis and the surrounding townships, providing fast solutions for homeowners.",
        marketInsights: "Marion County is the heart of Indiana's real estate market. We have extensive experience with properties in every condition across the county.",
        situations: ["Foreclosure", "Probate", "Tax Liens", "Divorce", "Hoarder Houses", "Structural Issues"]
    },
    "allen-county": {
        name: "Allen County",
        metaTitle: "We Buy Houses in Allen County | Sell House Fast Fort Wayne | HudREI",
        metaDescription: "Sell your house fast in Allen County. HudREI buys homes in Fort Wayne and surrounding communities in any condition.",
        heroLine: "We Buy Houses in Allen County – Sell Your House Fast for Cash",
        intro: "In Fort Wayne and throughout Allen County, HudREI buys houses for cash. No repairs, no cleaning, no fees—just a straightforward sale.",
        marketInsights: "Allen County homeowners value our transparency and local presence. We buy houses in Fort Wayne and the surrounding rural areas.",
        situations: ["Foreclosure", "Inherited Property", "Behind on Taxes", "Relocating", "Bankruptcy", "Bad Tenants"]
    },
    "vanderburgh-county": {
        name: "Vanderburgh County",
        metaTitle: "We Buy Houses in Vanderburgh County | Sell House Fast Evansville | HudREI",
        metaDescription: "Looking to sell your house fast in Vanderburgh County? HudREI buys homes in Evansville and surrounding areas in any condition.",
        heroLine: "We Buy Houses in Vanderburgh County – Get a Fair Cash Offer",
        intro: "HudREI serves all of Vanderburgh County, helping homeowners sell their properties quickly and fairly, regardless of condition.",
        marketInsights: "Vanderburgh County has a unique mix of properties. We provide fair cash offers based on the specific market of Evansville and its suburbs.",
        situations: ["Probate", "Foreclosure", "Divorce", "Relocation", "Extensive Repairs", "Inherited Estate"]
    },
    "st-joseph-county": {
        name: "St. Joseph County",
        metaTitle: "We Buy Houses in St. Joseph County | Sell House Fast South Bend | HudREI",
        metaDescription: "Sell your house fast in St. Joseph County. HudREI buys homes in South Bend, Mishawaka, and surrounding areas in any condition.",
        heroLine: "We Buy Houses Throughout St. Joseph County – Cash Offers Fast",
        intro: "HudREI is your local real estate solution in St. Joseph County. We provide fast cash offers for homes in South Bend and beyond.",
        marketInsights: "In St. Joseph County, we specialize in helping homeowners liquidate distressed assets quickly and without the hassle of a traditional market.",
        situations: ["Short Sales", "Foreclosure", "Job Loss", "Estate Settlement", "Hoarder Situations"]
    },
    "hamilton-county": {
        name: "Hamilton County",
        metaTitle: "We Buy Houses in Hamilton County | Sell House Fast Carmel & Fishers | HudREI",
        metaDescription: "Looking to sell your house fast in Hamilton County? HudREI buys homes in Carmel, Fishers, Noblesville, and Westfield in any condition.",
        heroLine: "We Buy Houses in Hamilton County – Sell Your House Fast for Cash",
        intro: "In Carmel, Fishers, and all of Hamilton County, HudREI provides a fast and professional way to sell your home without the stress of a traditional listing.",
        marketInsights: "Hamilton County is a premium market, but even here, homes can become difficult to sell. We offer a fast, all-cash alternative.",
        situations: ["Divorce", "Bankruptcy", "Job Transfer", "Inherited Property", "Senior Transition"]
    },
    "lake-county": {
        name: "Lake County",
        metaTitle: "We Buy Houses in Lake County | Sell House Fast Hammond & Gary | HudREI",
        metaDescription: "Sell your house fast in Lake County. HudREI buys homes in Hammond, Gary, and surrounding communities in any condition.",
        heroLine: "We Buy Houses Throughout Lake County – Get a Cash Offer Today",
        intro: "HudREI serves homeowners throughout Lake County, offering fair cash prices and quick closings for properties in any condition.",
        marketInsights: "Lake County has a diverse range of neighborhoods. We understand the specific needs of homeowners in Hammond, Gary, and surrounding areas.",
        situations: ["Foreclosure", "Code Violations", "Hoarder House", "Fire Damage", "Bad Tenants"]
    },
    "tippecanoe-county": {
        name: "Tippecanoe County",
        metaTitle: "We Buy Houses in Tippecanoe County | Sell House Fast Lafayette | HudREI",
        metaDescription: "Looking to sell your house fast in Tippecanoe County? HudREI buys homes in Lafayette and surrounding areas in any condition.",
        heroLine: "We Buy Houses in Tippecanoe County – Fast Cash for Your Home",
        intro: "HudREI is the trusted choice for homeowners in Tippecanoe County. Skip the realtor fees and repairs—get a cash offer today.",
        marketInsights: "In Tippecanoe County, we provide a reliable alternative to listing. We buy houses for cash and handle all the paperwork locally.",
        situations: ["Relocation", "Probate", "Foreclosure", "Behind on Mortgage", "Unwanted Rental"]
    },
    "delaware-county": {
        name: "Delaware County",
        metaTitle: "We Buy Houses in Delaware County | Sell House Fast Muncie | HudREI",
        metaDescription: "Sell your house fast in Delaware County. HudREI buys homes in Muncie and surrounding communities in any condition.",
        heroLine: "We Buy Houses Throughout Delaware County – Sell Fast for Cash",
        intro: "In Muncie and across Delaware County, HudREI provides homeowners with a fair and convenient way to sell their property quickly.",
        marketInsights: "Delaware County homeowners appreciate our straightforward process. We buy as-is and close on your schedule.",
        situations: ["Tax Liens", "Inherited Property", "Foreclosure", "Empty Nest", "Downsizing"]
    },
    "monroe-county": {
        name: "Monroe County",
        metaTitle: "We Buy Houses in Monroe County | Sell House Fast Bloomington | HudREI",
        metaDescription: "Looking to sell your house fast in Monroe County? HudREI buys homes in Bloomington and surrounding areas in any condition.",
        heroLine: "We Buy Houses in Monroe County – Get a Fair Cash Offer Today",
        intro: "In Bloomington and throughout Monroe County, HudREI is helping homeowners move forward by purchasing their properties for cash, as-is.",
        marketInsights: "Monroe County has a vibrant market, and we're active participants. We buy student housing, family homes, and rural properties for cash.",
        situations: ["Student Rental Problems", "Estate Sales", "Foreclosure", "Divorce", "Relocation"]
    },
    "porter-county": {
        name: "Porter County",
        metaTitle: "We Buy Houses in Porter County | Sell House Fast Valparaiso | HudREI",
        metaDescription: "Sell your house fast in Porter County. HudREI buys homes in Valparaiso, Portage, and surrounding communities in any condition.",
        heroLine: "We Buy Houses Throughout Porter County – Cash Offers in 24 Hours",
        intro: "HudREI is your local real estate partner in Porter County. We buy houses in any condition and coordinate every step of the closing for you.",
        marketInsights: "Porter County's proximity to Chicago and Lake Michigan makes it a unique market. We offer fair cash prices for homes in any neighborhood.",
        situations: ["Moving", "Bankruptcy", "Inherited House", "Code Liens", "Job Loss"]
    }
};
