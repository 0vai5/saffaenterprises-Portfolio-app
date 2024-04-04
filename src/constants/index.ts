
import { faEnvelope, faGear, faHandshake, faLock, faPaperPlane, faPhoneAlt, faTeletype } from "@fortawesome/free-solid-svg-icons";

export const Clients = [
  {
    name: 'ADM',
    logo: 'https://www.admdenim.com/_next/static/media/adm-logo-dark.c3c12edf.svg',
    classes: 'ml-12 h-14'
  },
  {
    name: 'AlKaram',
    logo: 'https://alkaram.com/wp-content/themes/ak/images/logo-alkaram-black.png',
    classes: 'h-10'
  },
  {
    name: 'GareebSons',
    logo: 'http://garibsons.com/wp-content/uploads/2020/03/Garibsons-Logo-name.jpg',
    classes: 'h-10 md:block hidden'
  },
  {
    name: 'AMNA Textile',
    logo: 'https://amnatextile.com/images/logo.png',
    classes: 'h-14'
  },
  {
    name: 'UnionFabrics',
    logo: 'https://www.unionfabrics.com/images/demo/logo.png',
    classes: 'h-14'
  },
  {
    name: 'ZamanTextile',
    logo: 'https://www.zamantextile.com/wp-content/uploads/2022/11/logo-2.png',
  },
  {
    name: 'Orient',
    logo: './orient.svg'
  },
  {
    name: 'Ibrahim Textile',
    logo: 'https://www.ibrahimtex.com/Welcome%20to%20Ibrhaim%20Textile%20Textile,%20Pakistan_files/logo.jpg',
    classes: 'h-14'
  },
  {
    name: 'Soya Supreme',
    logo: 'https://apag.com.pk/wp-content/themes/apag_new/assets/images/soya-suprem-logo.png',
    classes: 'h-16'
  },
  {
    name: 'Igloo',
    logo: 'https://igloofun.com/wp-content/uploads/2023/03/igloo_logo.png',
    classes: 'h-14'
  },
  {
    name: 'PSL - Pakistan Synthetic Limited',
    logo: 'https://pslpet.com/wp-content/uploads/2022/01/PSL-Logo-New.png',
    classes: 'h-14'
  },
  {
    name: 'AlRaheem',
    logo: 'https://www.alrahimtextile.com/images/logo.jpg',
    classes: 'h-12'
  }
  
];

export const goals = [
  {
    icon: faGear,
    title: "Innovation and Product Development",
    description: "Our focus on innovation extends to developing sustainable solutions that meet the evolving needs of our customers and the planet, ensuring a brighter future for all.",
    cardClass: 'max-w-full md:max-w-[30%]',
    cardDescClass: 'text-[#1065DC] text-center font-semibold',
    titleClass: 'text-center text-[]'
  },
  {
    icon: faLock,
    title: "Honesty and Commitment",
    description: "We are committed to delivering excellence through our unwavering dedication to our customers' needs, striving to exceed expectations and build long-lasting relationships based on trust and reliability.",
    cardClass: 'bg-[#1065DC] text-white max-w-full md:max-w-[30%]',
    cardDescClass: 'text-white text-center font-semibold',
    titleClass: 'text-center text-black'

  },
  {
    icon: faHandshake,
    title: "Customer Satisfaction and Partnership",
    description: "Prioritize customer satisfaction by delivering exceptional products and services. Proactively engage with clients to understand their needs and provide tailored solutions.",
    cardClass: 'max-w-full md:max-w-[30%]',
    cardDescClass: 'text-[#1065DC] text-center font-semibold',
    titleClass: 'text-center'
  },
];

export const records = [
  {
    title: 'Years of Experience',
    description: 'For more than 20 years, we have navigated the intricacies of the textile sector, adapting to changing trends and technologies to better serve our clients. Our extensive experience ensures that we bring unparalleled expertise to every project we undertake.',
    count: 20
  },
  {
    title: 'Orders Fulfilled',
    description: 'Having successfully executed over 500 orders, we understand the importance of precision and efficiency in meeting our clients demands. Each order fulfilled is a testament to our commitment to delivering quality solutions on time, every time.',
    count: 500
  },
  {
    title: 'Product Range',
    description: 'We take pride in our diverse range of machinery parts, offering comprehensive solutions to meet the varied needs of textile manufacturers. From dyeing vats to bleaching valves and temperature sensors, our extensive product range ensures that our clients have access to the tools they need to succeed.',
    count: 30
  },
];

export const products = [
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzlA9VpeosAl1gccrF-b_l2CQtb4rTV9MIQib2HAjRBA&s',
    alt: 'THERMOCOUPLE',
  },
  {
    image: 'https://res.cloudinary.com/rsc/image/upload/b_rgb:FFFFFF,c_pad,dpr_2.625,f_auto,h_493,q_auto,w_875/c_pad,h_493,w_875/C3730372-01?pgw=1&pgwact=1',
    alt: 'PT-100 RTD Sensor',
  }
];

export const contactInfo = [
  {
    icon: faEnvelope,
    type: 'Email',
    items: 'saffaenterprises@gmail.com'
  },
  {
    icon: faPhoneAlt,
    type: 'Phone',
    items: ['+92334-3449019', '+92300-9296357']
  },
  {
    icon: faPaperPlane,
    type: 'Address',
    items: 'Lotia Chamber Aiwan -e- Tijarat Road Karachi, Pakistan  '
  },
  {
    icon: faTeletype,
    type: 'Fax',
    items: '+92(021)32400088'
  }
]
