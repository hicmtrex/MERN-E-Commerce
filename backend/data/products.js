const products = [
    {
      name: "PlayStation 5",
      imageUrl:
        "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80",
      description:
        "PlayStation 5 (PS5) is a home video game console developed by Sony Interactive Entertainment. Announced in 2019 as the successor to the PlayStation 4, the PS5 was released on November 12, 2020 in Australia, Japan, New Zealand, North America, Singapore, and South Korea, and November 19, 2020 onwards in other major markets except China and India.",
      price: 499,
      countInStock: 15,
    },
    {
      name: "Iphone 12",
      imageUrl:
        "https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1463&q=80",
      description:
        "Welcome to a new era of iPhone. Beautifully bright 6.1-inch Super Retina XDR display.1 Ceramic Shield with 4x better drop performance.2 Incredible low-light photography with Night mode on all cameras. Cinema-grade Dolby Vision video recording, editing, and playback. Powerful A14 Bionic chip. And new MagSafe accessories for easy attach and faster wireless charging.3 Let the fun begin.",
      price: 1099,
      countInStock: 10,
    },
    {
      name: "Cannon EOS-1D",
      imageUrl:
        "https://images.unsplash.com/photo-1519183071298-a2962feb14f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description:
        "The EOS-1D X combines speed with image quality, to create the next generation camera for professionals. Full frame 18 megapixel sensor with Dual “DIGIC 5+” processors sets the standard, and up to 12 frames per second shooting takes it beyond.",
      price: 1300,
      countInStock: 5,
    },
    {
      name: "Amazon Alexa",
      imageUrl:
        "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
      description:
        "It is capable of voice interaction, music playback, making to-do lists, setting alarms, streaming podcasts, playing audiobooks, and providing weather, traffic, sports, and other real-time information, such as news. Alexa can also control several smart devices using itself as a home automation system.",
      price: 50,
      countInStock: 25,
    },
    {
      name: "Audio Technica Headphones",
      imageUrl:
        "https://images.unsplash.com/photo-1558756520-22cfe5d382ca?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description:
        "Outfitted with 45mm large-aperture dynamic drivers and an over-ear, closed-back design, the ATH-M50x headphones deliver clarity, deep bass, and extended bandwidth (15 Hz to 28 kHz) while isolating you from outside sounds.",
      price: 233,
      countInStock: 4,
    },
    {
      name: "JBL FLIP 4",
      imageUrl:
        "https://images.unsplash.com/photo-1564424224827-cd24b8915874?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
      description:
        "JBL Flip 4 is the next generation in the award-winning Flip series; it is a portable Bluetooth speaker that delivers surprisingly powerful stereo sound. This compact speaker is powered by a 3000mAh rechargeable Li-ion battery that offers up to 12 hours of continuous, high-quality audio playtime.",
      price: 140,
      countInStock: 10,
  },
  {
    name: "SteelSeries Arctis 3",
    imageUrl:
      "https://cdn.alzashop.com/ImgW.ashx?fd=f16&cd=MX043o21",
    description:
      "SteelSeries Arctis 3 - All-Platform Gaming Headset - for PC, PlayStation 4, Xbox One, Nintendo Switch, VR, Android, and iOS - Black.",
    price: 59.99,
    countInStock: 50,
  },
  {
    name: "Redragon S101",
    imageUrl:
      "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_SY450_.jpg",
    description:
      "Redragon S101 Wired Gaming Keyboard and Mouse Combo RGB Backlit Gaming Keyboard with Multimedia Keys Wrist Rest and Red Backlit Gaming Mouse 3200 DPI for Windows PC Gamers (Black).",
    price: 62.99,
    countInStock: 30,
  },
  {
    name: "Mad Catz The Authentic R.A.T. 6",
    imageUrl:
      "https://snpi.dell.com/snp/images/products/large/en-ca~AA998172_v1/AA998172_v1.jpg",
    description:
      " Multi-button functionality for maximum precision and control, including: scroll wheel, left click, right click, DPI button, forward, backward, precision button, profile button, and 2 side scroll wheels (customizable within software). Uses PIXART PMW3360 Sensor for precision control.",
    price: 66.99,
    countInStock: 60,
  },
  {
    name: "Seagate Portable 2TB",
    imageUrl:
      "https://epiccomputers.co.tz/wp-content/uploads/2020/09/seagate-2-tb-wired-external-hard-disk-drive-black.jpg",
    description:
      "Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PS4, & Xbox - 1-Year Rescue Service (STGX2000400).",
    price: 57.99,
    countInStock: 35,
  },
  {
    name: "Acer R240HY bidx 23.8-Inch",
    imageUrl:
      "https://m.media-amazon.com/images/I/91K9SyGiyzL._AC_SL1500_.jpg",
    description:
      'Acer R240HY bidx 23.8-Inch IPS HDMI DVI VGA (1920 x 1080) Widescreen Monitor, Black',
    price: 55.99,
    countInStock: 20,
  },
  {
    name: "ANBEGE Gaming Chair Ergonomic",
    imageUrl:
      "https://m.media-amazon.com/images/I/619sWFsXJ+L._AC_SS450_.jpg",
    description:
      "ANBEGE Gaming Chair Ergonomic Racing Style Game Chair Height Adjustable High Back with Massage Headrest and Lumbar Pillow Computer Chair (Blue).",
    price: 119.99,
    countInStock: 15,
},
    
  ];
  
  module.exports = products;