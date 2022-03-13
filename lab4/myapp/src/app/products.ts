

export interface Product {
  id: number;
  name: string;
    category:string;
  price: number;
  description: string;
  rating: number;
  imageSRC: string;
  link: string;
  href: string;

}
// category: 'laptops',
// category: 'smartphone',
// category: 'other',
// category: 'techaccesories',
export const products = [
  {
    id: 1,
    name: 'BENGOO G9000',
      category: 'techaccesories',
    price: 49.99,
    description: 'Stereo Gaming Headset for PS4 PC Xbox One PS5 Controller, Noise Cancelling Over Ear Headphones with Mic,' +
        ' LED Light, Bass Surround, Soft Memory Earmuffs for Laptop Mac Nintendo NES Games',
    rating: 4.3,
    imageSRC: 'https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_SL1000_.jpg',
    link: 'https://www.amazon.com/BENGOO-G9000-Controller-Cancelling-Headphones/dp/B01H6GUCCQ/ref=sr_1_4?keywords=gaming%2Bheadsets&pd_rd_r=8cd9b4eb-cfee-4d94-bbad-a7d190576880&pd_rd_w=XwvdG&pd_rd_wg=Sa4BZ&pf_rd_p=12129333-2117-4490-9c17-6d31baf0582a&pf_rd_r=SK63V88BRH098J40Q9ZE&qid=1647047703&sr=8-4&th=1',
    href: 'https://xn--r1a.link/share/url?url=https%3A%2F%2Fwww.amazon.com%2FBENGOO-G9000-Controller-Cancelling-Headphones%2Fdp%2FB01H6GUCCQ%2Fref%3Dsr_1_4%3Fkeywords%3Dgaming%252Bheadsets%26pd_rd_r%3D8cd9b4eb-cfee-4d94-bbad-a7d190576880%26pd_rd_w%3DXwvdG%26pd_rd_wg%3DSa4BZ%26pf_rd_p%3D12129333-2117-4490-9c17-6d31baf0582a%26pf_rd_r%3DSK63V88BRH098J40Q9ZE%26qid%3D1647047703%26sr%3D8-4%26th%3D1'
  },

  {
    id: 2,
    name: 'Respawn 110 Chair',
      category: 'techaccesories',
    price: 187.50,
    description: 'You’re a gamer first, you shouldn’t have to spend the cost of an ultrawide monitor to get an ergonomic gaming chair. The RESPAWN 110, in Red, delivers comfort and cost savings in one package. The chair tilt and lift levers are located on the right, beneath the chair, and the fixed armrests are padded for elbow relief. The RSP-110 features bonded leather and a 155-degree tilt, with infinite angle lock, allowing you to choose your best angle. The adjustable lumbar and head pillow gives you the support you need for long hours in any game. Put your feet up and relax with a built-in extendable footrest. An award-nominated brand, RESPAWN is committed to your satisfaction and covers this desk with our RESPAWN 5-Year Limited Warranty. With a 275 lb weight capacity, this RESPAWN gaming chair helps you bring your ‘A’ game to every match.',
    rating:4.3,
    imageSRC: 'https://m.media-amazon.com/images/I/71y8rPagzDL._AC_SX679_.jpg',
    link: 'https://www.amazon.com/RESPAWN-110-Racing-Style-Gaming-Chair/dp/B076HTJRMZ/ref=sr_1_5?keywords=gaming%2Bchairs&pd_rd_r=3338b582-3139-4c94-8ecf-b456d0c37266&pd_rd_w=N6jMb&pd_rd_wg=1Eriq&pf_rd_p=12129333-2117-4490-9c17-6d31baf0582a&pf_rd_r=PRZFN1AY5JS9WEFKWB17&qid=1647095865&sr=8-5&th=1',
    href: 'https://xn--r1a.link/share/url?url=https%3A%2F%2Fwww.amazon.com/RESPAWN-110-Racing-Style-Gaming-Chair/dp/B076HTJRMZ/ref=sr_1_5?keywords=gaming%2Bchairs&pd_rd_r=3338b582-3139-4c94-8ecf-b456d0c37266&pd_rd_w=N6jMb&pd_rd_wg=1Eriq&pf_rd_p=12129333-2117-4490-9c17-6d31baf0582a&pf_rd_r=PRZFN1AY5JS9WEFKWB17&qid=1647095865&sr=8-5&th=1'
  },
  {
    id: 3,
    name: 'Leather Bound Journal',
      category: 'other',
    price: 30,
    description: 'Handmade Antique Deckle Edge Paper - Leather Sketchbook - Book of Shadows Journal - Thick Journal - Vintage Journal for Men and Women Handcrafted Journal Travel Diary',
    rating: 4.8,
    imageSRC: 'https://m.media-amazon.com/images/I/81V-uv0hULS._AC_SX466_.jpg',
    link: 'https://www.amazon.com/Leather-Bound-Journal-Sketchbook-Handcrafted/dp/B08BCPS5SB?ref_=Oct_DLandingS_D_3b0b9294_76&smid=A11ZONG3SFCFWG',
    href:'https://xn--r1a.link/share/url?url=https%3A%2F%2Fwww.amazon.com/Leather-Bound-Journal-Sketchbook-Handcrafted/dp/B08BCPS5SB?ref_=Oct_DLandingS_D_3b0b9294_76&smid=A11ZONG3SFCFWG'
  },
 {
    id: 4,
    name: '50Ft LED Strip Lights',
     category: 'techaccesories',
    price: 14.43,
    description: 'Music Sync Color Changing RGB LED Strip 44-Key Remote, Sensitive Built-in Mic, App Controlled LED Lights Rope Lights, 5050 RGB LED Light Strip(APP+Remote+Mic+3 Button Switch)',
    rating: 4.6,
    imageSRC: 'https://m.media-amazon.com/images/I/71iFORSf5PL._AC_SX679_.jpg',
    link: 'https://www.amazon.com/Lights-Changing-44-Key-Sensitive-Controlled/dp/B07Z4ZRNPP/ref=lp_21217035011_1_1?th=1',
    href:'https://xn--r1a.link/share/url?url=https%3A%2F%2Fhttps://www.amazon.com/Lights-Changing-44-Key-Sensitive-Controlled/dp/B07Z4ZRNPP/ref=lp_21217035011_1_1?th=1'
  },
 {
    id: 5,
    name: 'Listerine Total Care',
     category: 'other',
    price: 6.87,
    description: 'Anticavity Fluoride Mouthwash, 6 Benefit Oral Rinse Helps Kill 99% of Bad Breath Germs, Prevents Cavities, Strengthens Teeth, ADA-Accepted, Fresh Mint, 1 L',
    rating: 4.8,
    imageSRC: 'https://m.media-amazon.com/images/I/81vNiROdiIL._SL1500_.jpg',
    link: 'https://www.amazon.com/Listerine-Anticavity-Mouthwash-Fluoride-Packaging/dp/B00495Q5OW/ref=sr_1_8?pd_rd_r=ebcc810b-1481-431b-a3dd-fd8236312c07&pd_rd_w=ru7V1&pd_rd_wg=Imkbd&pf_rd_p=eab778f7-37cf-4c6b-9552-5370900592a9&pf_rd_r=JZT2ZQG6E6FC9B01MHB8&qid=1647097370&s=beauty-intl-ship&sr=1-8',
    href:'https://xn--r1a.link/share/url?url=https%3A%2F%2Fhttps://www.amazon.com/Listerine-Anticavity-Mouthwash-Fluoride-Packaging/dp/B00495Q5OW/ref=sr_1_8?pd_rd_r=ebcc810b-1481-431b-a3dd-fd8236312c07&pd_rd_w=ru7V1&pd_rd_wg=Imkbd&pf_rd_p=eab778f7-37cf-4c6b-9552-5370900592a9&pf_rd_r=JZT2ZQG6E6FC9B01MHB8&qid=1647097370&s=beauty-intl-ship&sr=1-8'
  },
 {
    id: 6,
    name: 'ASUS TUF Gaming F17 Gaming Laptop',
     category: 'laptops',
     price: 885,
    description: '17.3” 144Hz FHD IPS-Type Display, Intel Core i5-10300H, GeForce GTX 1650 Ti, 8GB DDR4, 512GB PCIe SSD, RGB Keyboard, Windows 10, Bonfire Black, FX706LI-ES53',
    rating: 4.7,
    imageSRC: 'https://m.media-amazon.com/images/I/91P7uBC9DML._AC_SX679_.jpg',
    link: 'https://www.amazon.com/ASUS-IPS-Type-i5-10300H-Keyboard-FX706LI-ES53/dp/B08ZLC661T/ref=sr_1_6?keywords=gaming+laptops&pf_rd_i=23508887011&pf_rd_m=ATVPDKIKX0DER&pf_rd_p=434db2ed-6d53-4c59-b173-e8cd550a2e4f&pf_rd_r=AVKQE07SCYJBZ1SKE7N0&pf_rd_s=merchandised-search-5&pf_rd_t=101&qid=1647097578&sr=8-6',
    href:'https://xn--r1a.link/share/url?url=https%3A%2F%2Fhttps://www.amazon.com/ASUS-IPS-Type-i5-10300H-Keyboard-FX706LI-ES53/dp/B08ZLC661T/ref=sr_1_6?keywords=gaming+laptops&pf_rd_i=23508887011&pf_rd_m=ATVPDKIKX0DER&pf_rd_p=434db2ed-6d53-4c59-b173-e8cd550a2e4f&pf_rd_r=AVKQE07SCYJBZ1SKE7N0&pf_rd_s=merchandised-search-5&pf_rd_t=101&qid=1647097578&sr=8-6'
  },
 {
    id: 7,
    name: 'Acer Predator Helios 300 Gaming Laptop',
     category: 'laptops',
    price: 1475,
    description: 'Intel i7-10750H, NVIDIA GeForce RTX 3060 Laptop GPU, 15.6" Full HD 144Hz 3ms IPS Display, 16GB DDR4, 512GB NVMe SSD, WiFi 6, RGB Keyboard, PH315-53-71HN',
    rating: 4.6,
    imageSRC: 'https://m.media-amazon.com/images/I/7183SjkrSnL._AC_SX466_.jpg',
    link: 'https://www.amazon.com/Acer-Predator-i7-10750H-Keyboard-PH315-53-71HN/dp/B08VKV5WQ1/ref=sr_1_7?keywords=gaming+laptops&pf_rd_i=23508887011&pf_rd_m=ATVPDKIKX0DER&pf_rd_p=434db2ed-6d53-4c59-b173-e8cd550a2e4f&pf_rd_r=AVKQE07SCYJBZ1SKE7N0&pf_rd_s=merchandised-search-5&pf_rd_t=101&qid=1647097578&sr=8-7',
    href:'https://xn--r1a.link/share/url?url=https%3A%2F%2Fhttps://www.amazon.com/Acer-Predator-i7-10750H-Keyboard-PH315-53-71HN/dp/B08VKV5WQ1/ref=sr_1_7?keywords=gaming+laptops&pf_rd_i=23508887011&pf_rd_m=ATVPDKIKX0DER&pf_rd_p=434db2ed-6d53-4c59-b173-e8cd550a2e4f&pf_rd_r=AVKQE07SCYJBZ1SKE7N0&pf_rd_s=merchandised-search-5&pf_rd_t=101&qid=1647097578&sr=8-7'
  },
 {
    id: 8,
    name: 'Acer Nitro 5 Gaming Laptop',
     category: 'laptops',
    price: 845,
    description: '10th Gen Intel Core i5-10300H,NVIDIA GeForce GTX 1650 Ti, 15.6" Full HD IPS 144Hz Display, 8GB DDR4,256GB NVMe SSD,WiFi 6, DTS X Ultra,Backlit Keyboard,AN515-55-59KS',
    rating: 4.5,
    imageSRC:'https://images-na.ssl-images-amazon.com/images/I/81bc8mA3nKL.__AC_SY300_SX300_QL70_FMwebp_.jpg',
    link: 'https://www.amazon.com/Acer-i5-10300H-GeForce-Keyboard-AN515-55-59KS/dp/B08H2H89K1/ref=sr_1_10?keywords=gaming+laptops&pf_rd_i=23508887011&pf_rd_m=ATVPDKIKX0DER&pf_rd_p=434db2ed-6d53-4c59-b173-e8cd550a2e4f&pf_rd_r=AVKQE07SCYJBZ1SKE7N0&pf_rd_s=merchandised-search-5&pf_rd_t=101&qid=1647097578&sr=8-10',
    href:'https://xn--r1a.link/share/url?url=https%3A%2F%2Fhttps://www.amazon.com/Acer-i5-10300H-GeForce-Keyboard-AN515-55-59KS/dp/B08H2H89K1/ref=sr_1_10?keywords=gaming+laptops&pf_rd_i=23508887011&pf_rd_m=ATVPDKIKX0DER&pf_rd_p=434db2ed-6d53-4c59-b173-e8cd550a2e4f&pf_rd_r=AVKQE07SCYJBZ1SKE7N0&pf_rd_s=merchandised-search-5&pf_rd_t=101&qid=1647097578&sr=8-10'
  },
 {
    id: 9,
    name: 'MSI GS75 Stealth Gaming Laptop',
     category: 'laptops',
     price: 1594.48,
    description: '17.3" 240Hz Display, Intel Core i7-10875H, NVIDIA GeForce RTX 2060, 16GB RAM, 512GB NVMe SSD, Win10 Pro, Black (10SE-620)',
    rating: 4.4,
    imageSRC: 'https://m.media-amazon.com/images/I/71RBOvgFy6L._AC_SX466_.jpg',
    link: 'https://www.amazon.com/MSI-GS75-Stealth-10SE-620-i7-10875H/dp/B08965WD75/ref=sr_1_11?keywords=gaming+laptops&pf_rd_i=23508887011&pf_rd_m=ATVPDKIKX0DER&pf_rd_p=434db2ed-6d53-4c59-b173-e8cd550a2e4f&pf_rd_r=AVKQE07SCYJBZ1SKE7N0&pf_rd_s=merchandised-search-5&pf_rd_t=101&qid=1647097578&sr=8-11',
    href:'https://xn--r1a.link/share/url?url=https%3A%2F%2Fhttps://www.amazon.com/MSI-GS75-Stealth-10SE-620-i7-10875H/dp/B08965WD75/ref=sr_1_11?keywords=gaming+laptops&pf_rd_i=23508887011&pf_rd_m=ATVPDKIKX0DER&pf_rd_p=434db2ed-6d53-4c59-b173-e8cd550a2e4f&pf_rd_r=AVKQE07SCYJBZ1SKE7N0&pf_rd_s=merchandised-search-5&pf_rd_t=101&qid=1647097578&sr=8-11'
  },

    {
    id: 10,
    name: 'iPhone 13',
      category: 'smartphone',
    price: 900,
    description: 'Good but expensive',
    rating: 4,
    imageSRC: 'https://m.media-amazon.com/images/I/61-r9zOKBCL._FMwebp__.jpg',
    link: 'https://www.amazon.com/Apple-iPhone-Locked-Carrier-Subscription/dp/B09V3HQP7J/ref=sr_1_1?crid=15YD9X276IA8&keywords=iphone+13&qid=1647089797&sprefix=ip%2Caps%2C3040&sr=8-1',
    href: 'https://xn--r1a.link/share/url?url=https%3A%2F%2Fwww.amazon.com%2FApple-iPhone-Locked-Carrier-Subscription%2Fdp%2FB09V3HQP7J%2Fref%3Dsr_1_1%3Fcrid%3D15YD9X276IA8%26keywords%3Diphone%2B13%26qid%3D1647089797%26sprefix%3Dip%252Caps%252C3040%26sr%3D8-1'
  },
  {
    id: 11,
    name: 'iPhone 13 Pro Max',
    category: 'smartphone',
    price: 1299.99,
    description: 'very good but very expensive',
    rating: 4.1,
    imageSRC:'https://m.media-amazon.com/images/I/61GtmYgx8QL._FMwebp__.jpg' ,
    link: 'https://www.amazon.com/Apple-iPhone-Alpine-Carrier-Subscription/dp/B09V3KDW63/ref=sr_1_1?crid=QUNBNR9371PD&keywords=iphone+13+pro+max&qid=1647166242&sprefix=iphone+13+pro+max+cas%2Caps%2C1610&sr=8-1',
    href: 'https://xn--r1a.link/share/url?url=https%3A%2F%2Fhttps://www.amazon.com/Apple-iPhone-Alpine-Carrier-Subscription/dp/B09V3KDW63/ref=sr_1_1?crid=QUNBNR9371PD&keywords=iphone+13+pro+max&qid=1647166242&sprefix=iphone+13+pro+max+cas%2Caps%2C1610&sr=8-1'
  },
 {
    id: 12,
    name: 'Samsung Galaxy S22 Smartphone',
    category: 'smartphone',
    price: 999.99,
    description: 'Factory Unlocked Android Cell Phone, 256GB, 8K Camera & Video, Brightest Display, Long Battery Life, Fast 4nm Processor, US Version',
    rating: 3.4,
    imageSRC:'https://m.media-amazon.com/images/I/71vq85GMg0L._AC_SX466_.jpg' ,
    link: 'https://www.amazon.com/Samsung-Smartphone-Unlocked-Brightest-Processor/dp/B09MVZLWKJ/ref=sr_1_1?keywords=smartphone&qid=1647166419&sr=8-1&th=1',
    href: 'https://xn--r1a.link/share/url?url=https%3A%2F%2Fhttps://www.amazon.com/Samsung-Smartphone-Unlocked-Brightest-Processor/dp/B09MVZLWKJ/ref=sr_1_1?keywords=smartphone&qid=1647166419&sr=8-1&th=1'
  },
 {
    id: 13,
    name: 'Motorola One 5G Ace',
    category: 'smartphone',
    price: 299,
    description: '2021 | 2-Day battery | Unlocked | Made for US by Motorola | 6/128GB | 48MP Camera ',
    rating: 4.4,
    imageSRC:'https://m.media-amazon.com/images/I/71GbORP-umL._AC_SX466_.jpg' ,
    link: 'https://www.amazon.com/Motorola-battery-Unlocked-Camera-Silver/dp/B08NWD7K8H/ref=sr_1_2?keywords=smartphone&qid=1647166487&sr=8-2&th=1',
    href: 'https://xn--r1a.link/share/url?url=https%3A%2F%2Fhttps://www.amazon.com/Motorola-battery-Unlocked-Camera-Silver/dp/B08NWD7K8H/ref=sr_1_2?keywords=smartphone&qid=1647166487&sr=8-2&th=1'
  },
 {
    id: 14,
    name: 'OnePlus 8 ',
    category: 'smartphone',
    price: 599,
    description: '5G Unlocked Android Smartphone U.S Version, 8GB RAM+128GB Storage, 90Hz Fluid Display,Triple Camera, with Alexa Built-in',
    rating: 4.5,
    imageSRC:'https://m.media-amazon.com/images/I/51uEwkqjZTL._AC_SX679_.jpg' ,
    link: 'https://www.amazon.com/OnePlus-Glacial-Unlocked-Android-Smartphone/dp/B08723759H/ref=sr_1_3?keywords=smartphone&qid=1647166487&sr=8-3&th=1',
    href: 'https://xn--r1a.link/share/url?url=https%3A%2F%2Fhttps://www.amazon.com/OnePlus-Glacial-Unlocked-Android-Smartphone/dp/B08723759H/ref=sr_1_3?keywords=smartphone&qid=1647166487&sr=8-3&th=1'
  },
 {
    id: 15,
    name: 'Razer DeathAdder Essential Gaming Mouse',
    category: 'techaccesories',
    price: 19.49,
    description: '6400 DPI Optical Sensor - 5 Programmable Buttons - Mechanical Switches - Rubber Side Grips - Classic Black',
    rating: 4.5,
    imageSRC:'https://images-na.ssl-images-amazon.com/images/I/8189uwDnMkL.__AC_SX300_SY300_QL70_FMwebp_.jpg' ,
    link: 'https://www.amazon.com/Razer-DeathAdder-Essential-Gaming-Mouse/dp/B094PS5RZQ/ref=sr_1_6?keywords=gaming+mouse&pd_rd_r=ee0a12d2-2772-457e-bbfa-a6f3110feafc&pd_rd_w=tG2vh&pd_rd_wg=15iNG&pf_rd_p=12129333-2117-4490-9c17-6d31baf0582a&pf_rd_r=8MDD8C6Z5R13PZA9ZDDG&qid=1647164917&s=videogames&sr=1-6',
    href: 'https://xn--r1a.link/share/url?url=https%3A%2F%2Fhttps://www.amazon.com/Razer-DeathAdder-Essential-Gaming-Mouse/dp/B094PS5RZQ/ref=sr_1_6?keywords=gaming+mouse&pd_rd_r=ee0a12d2-2772-457e-bbfa-a6f3110feafc&pd_rd_w=tG2vh&pd_rd_wg=15iNG&pf_rd_p=12129333-2117-4490-9c17-6d31baf0582a&pf_rd_r=8MDD8C6Z5R13PZA9ZDDG&qid=1647164917&s=videogames&sr=1-6'
  },
 {
    id: 16,
    name: 'Razer Cynosa Chroma Gaming Keyboard',
    category: 'techaccesories',
    price: 34.99,
    description: 'Individually Backlit RGB Keys - Spill-Resistant Design - Programmable Macro Functionality - Quiet & Cushioned',
    rating: 4.7,
    imageSRC:'https://m.media-amazon.com/images/I/61MJ5NBG2pL._AC_SY450_.jpg' ,
    link: 'https://www.amazon.com/Razer-Cynosa-Chroma-Gaming-Keyboard/dp/B075KMZ4MX/ref=sr_1_5?keywords=gaming+keyboard&pd_rd_r=ee0a12d2-2772-457e-bbfa-a6f3110feafc&pd_rd_w=tG2vh&pd_rd_wg=15iNG&pf_rd_p=12129333-2117-4490-9c17-6d31baf0582a&pf_rd_r=8MDD8C6Z5R13PZA9ZDDG&qid=1647165035&sr=8-5',
    href: 'https://xn--r1a.link/share/url?url=https%3A%2F%2Fhttps://www.amazon.com/Razer-Cynosa-Chroma-Gaming-Keyboard/dp/B075KMZ4MX/ref=sr_1_5?keywords=gaming+keyboard&pd_rd_r=ee0a12d2-2772-457e-bbfa-a6f3110feafc&pd_rd_w=tG2vh&pd_rd_wg=15iNG&pf_rd_p=12129333-2117-4490-9c17-6d31baf0582a&pf_rd_r=8MDD8C6Z5R13PZA9ZDDG&qid=1647165035&sr=8-5'
  },
 {
    id: 17,
    name: 'Paper Mate Flair Felt Tip Pens',
    category: 'other',
    price: 11.94,
    description: 'Medium Point 0.7 Millimeter Marker Pens | School Supplies for Teachers & Students | Assorted Colors, 12 Count',
    rating: 4.9,
    imageSRC:'https://m.media-amazon.com/images/I/81Ehfpi3aPL._AC_SY355_.jpg' ,
    link: 'https://www.amazon.com/Paper-Mate-Medium-Assorted-Colors/dp/B000J09CO6/ref=sr_1_3?qid=1647165613&s=arts-crafts-intl-ship&sr=1-3',
    href: 'https://xn--r1a.link/share/url?url=https%3A%2F%2Fhttps://www.amazon.com/Paper-Mate-Medium-Assorted-Colors/dp/B000J09CO6/ref=sr_1_3?qid=1647165613&s=arts-crafts-intl-ship&sr=1-3'
  },
 {
    id: 18,
    name: '2020 Apple MacBook Air Laptop',
    category: 'laptops',
    price: 1249,
    description: 'Apple M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad;',
    rating: 4.8,
    imageSRC:'https://m.media-amazon.com/images/I/81AkdxBCVpL._AC_SX342_.jpg' ,
    link: 'https://www.amazon.com/Apple-MacBook-13-inch-256GB-Storage/dp/B08N5LLDSG/ref=sr_1_1?crid=3K4GU4UHL2DV7&keywords=macbook&qid=1647165336&sprefix=mac%2Caps%2C1976&sr=8-1',
    href: 'https://xn--r1a.link/share/url?url=https%3A%2F%2Fhttps://www.amazon.com/Apple-MacBook-13-inch-256GB-Storage/dp/B08N5LLDSG/ref=sr_1_1?crid=3K4GU4UHL2DV7&keywords=macbook&qid=1647165336&sprefix=mac%2Caps%2C1976&sr=8-1'
  },
 {
    id: 19,
    name: 'One Piece Shanks Touching Luffy Figures',
    category: 'other',
    price: 29.99,
    description: 'Cake Topper Birthday Cake Decoration Anime Ninja Theme Doll Figure',
    rating: 5,
    imageSRC:'https://m.media-amazon.com/images/I/51c6AaZGKNL._AC_SX679_.jpg' ,
    link: 'https://www.amazon.com/Touching-Figures-FigureFigures-Birthday-Decoration/dp/B09GFRY2F5/ref=sr_1_27?keywords=gaming+action+figures+anime&qid=1647165848&refinements=p_n_feature_browse-bin%3A3233064011&rnid=373456011&s=toys-and-games-intl-ship&sr=1-27',
    href: 'https://xn--r1a.link/share/url?url=https%3A%2F%2Fhttps://www.amazon.com/Touching-Figures-FigureFigures-Birthday-Decoration/dp/B09GFRY2F5/ref=sr_1_27?keywords=gaming+action+figures+anime&qid=1647165848&refinements=p_n_feature_browse-bin%3A3233064011&rnid=373456011&s=toys-and-games-intl-ship&sr=1-27'
  },
  {
    id: 20,
    name: 'Roronoa Zoro Figure',
    category: 'other',
    price: 67.11,
    description: 'Banpresto One Piece World Figure Colosseum Vol. 1 Figure - Roronoa Zoro - Roronoa Zoro',
    rating: 5,
    imageSRC:'https://m.media-amazon.com/images/I/81Hok5EdqFL._AC_SX679_.jpg' ,
    link: 'https://www.amazon.com/Banpresto-Piece-World-Figure-Colosseum/dp/B076VKHWCX/ref=sr_1_2?crid=2J2E6T4DIGIT7&keywords=Zoro+one+piece+figure&qid=1647166076&sprefix=yamato+one+piece+figure%2Caps%2C2078&sr=8-2',
    href: 'https://xn--r1a.link/share/url?url=https%3A%2F%2Fhttps://www.amazon.com/Banpresto-Piece-World-Figure-Colosseum/dp/B076VKHWCX/ref=sr_1_2?crid=2J2E6T4DIGIT7&keywords=Zoro+one+piece+figure&qid=1647166076&sprefix=yamato+one+piece+figure%2Caps%2C2078&sr=8-2'
  },

];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/