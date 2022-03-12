

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  rating: number;
  imageSRC: string;
  link: string;
  href: string
}

export const products = [
  {
    id: 1,
    name: 'BENGOO G9000',
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
    price: 845,
    description: '10th Gen Intel Core i5-10300H,NVIDIA GeForce GTX 1650 Ti, 15.6" Full HD IPS 144Hz Display, 8GB DDR4,256GB NVMe SSD,WiFi 6, DTS X Ultra,Backlit Keyboard,AN515-55-59KS',
    rating: 4.5,
    imageSRC: '10th Gen Intel Core i5-10300H,NVIDIA GeForce GTX 1650 Ti, 15.6" Full HD IPS 144Hz Display, 8GB DDR4,256GB NVMe SSD,WiFi 6, DTS X Ultra,Backlit Keyboard,AN515-55-59KS',
    link: 'https://www.amazon.com/Acer-i5-10300H-GeForce-Keyboard-AN515-55-59KS/dp/B08H2H89K1/ref=sr_1_10?keywords=gaming+laptops&pf_rd_i=23508887011&pf_rd_m=ATVPDKIKX0DER&pf_rd_p=434db2ed-6d53-4c59-b173-e8cd550a2e4f&pf_rd_r=AVKQE07SCYJBZ1SKE7N0&pf_rd_s=merchandised-search-5&pf_rd_t=101&qid=1647097578&sr=8-10',
    href:'https://xn--r1a.link/share/url?url=https%3A%2F%2Fhttps://www.amazon.com/Acer-i5-10300H-GeForce-Keyboard-AN515-55-59KS/dp/B08H2H89K1/ref=sr_1_10?keywords=gaming+laptops&pf_rd_i=23508887011&pf_rd_m=ATVPDKIKX0DER&pf_rd_p=434db2ed-6d53-4c59-b173-e8cd550a2e4f&pf_rd_r=AVKQE07SCYJBZ1SKE7N0&pf_rd_s=merchandised-search-5&pf_rd_t=101&qid=1647097578&sr=8-10'
  },
 {
    id: 9,
    name: 'MSI GS75 Stealth Gaming Laptop',
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
    price: 900,
    description: 'Good but expensive',
    rating: 4,
    imageSRC: 'https://m.media-amazon.com/images/I/61-r9zOKBCL._FMwebp__.jpg',
    link: 'https://www.amazon.com/Apple-iPhone-Locked-Carrier-Subscription/dp/B09V3HQP7J/ref=sr_1_1?crid=15YD9X276IA8&keywords=iphone+13&qid=1647089797&sprefix=ip%2Caps%2C3040&sr=8-1',
    href: 'https://xn--r1a.link/share/url?url=https%3A%2F%2Fwww.amazon.com%2FApple-iPhone-Locked-Carrier-Subscription%2Fdp%2FB09V3HQP7J%2Fref%3Dsr_1_1%3Fcrid%3D15YD9X276IA8%26keywords%3Diphone%2B13%26qid%3D1647089797%26sprefix%3Dip%252Caps%252C3040%26sr%3D8-1'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/