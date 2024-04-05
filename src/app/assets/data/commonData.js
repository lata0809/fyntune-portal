const partnersImage = [
    {
        id:1,
        title : 'Aditya Birla',
        PartnerImg : 'images/AdityaBirla.svg',
    },
    {
        id:2,
        title: 'KMD',
        PartnerImg: 'images/KMD.svg',
    },
    {
        id:3,
        title: 'Renew Buy',
        PartnerImg: 'images/RenewBuy.svg',
    },
    {
        id:4,
        title: 'Ace',
        PartnerImg: 'images/Ace.svg',
    },
    {
        id:5,
        title: 'Bajaj Capital',
        PartnerImg: 'images/BajajCapital.svg',
    }
]

const CardData = [
    {
        id:1,
        CardImg: 'images/Card-1.svg',
        CardTitle: 'Digitally Led',
        CardDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type"
    },
    {
        id:2,
        CardImg: 'images/Card-2.svg',
        CardTitle: 'Cloud First Approch',
        CardDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type"
    },
    {
        id:3,
        CardImg: 'images/Card-3.svg',
        CardTitle: 'Highly Modular',
        CardDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type"
    },
    {
        id:4,
        CardImg: 'images/Card-4.svg',
        CardTitle: 'Low Code',
        CardDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type"
    },
]

const Products = [
    {
        id: 1,
        title: 'BroCore',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        ProductImg: 'images/Brocore.svg'
    },
    {
        id: 2,
        title: 'Health',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        ProductImg: 'images/Health.svg'
    },
    {
        id: 3,
        title: 'Motor',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        ProductImg: 'images/Motor.svg'
    },
    {
        id: 4,
        title: 'Corporate Travel',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        ProductImg: 'images/CorporateTravel.svg'
    },
    {
        id: 5,
        title: 'Motor Fleet',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        ProductImg: 'images/MotorFleet.svg'
    },
    {
        id: 6,
        title: 'Employee Benefits',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        ProductImg: 'images/EmployeeBenefits.svg'
    }
];
const FooterLinks = [
    {
        id: 1,
        Heading: 'our products',
        Links: [
            {
                title: 'motor',
                url: '/'
            },
            {
                title: 'employee benefits',
                url: '/'
            },
            {
                title: 'brocore',
                url: '/'
            },
            {
                title: 'motor fleet',
                url: '/'
            },
            {
                title: 'dashboard',
                url: '/'
            },
        ]
    },
    {
        id: 2,
        Heading: 'our customers',
        Links: [
            {
                title: 'testimonial',
                url:'/'
            },
            {
                title: 'about company',
                url:'/'
            },
            {
                title: 'our story',
                url:'/'
            },
        ]
    },
    {
        id: 3,
        Heading: 'company',
        Links: [
            {
                title: 'about company',
                url:'/'
            },
            {
                title: 'our story',
                url:'/'
            },
            {
                title: 'careers',
                url:'/'
            },
            {
                title: 'contact us',
                url:'/'
            },
        ]
    },
]

const ClientSection = [
    {
        id: 1,
        img: 'images/Icon-1.svg',
        firstTitle: '1000 +',
        secondTitle: 'API’S Integrated',
        BgColor: '#4090FF'
    },
    {
        id: 2,
        img: 'images/Icon-2.svg',
        firstTitle: '20 +',
        secondTitle: 'Clients',
        BgColor: '#005DB9'
    },
    {
        id: 3,
        img: 'images/Icon-3.svg',
        firstTitle: '50 +',
        secondTitle: 'Projects Completed',
        BgColor: '#0075E6'
    },
]
const commonData = {
    partnersImage: partnersImage,
    CardData: CardData,
    Products: Products,
    FooterLinks:FooterLinks,
    ClientSection: ClientSection,
};

export default commonData;