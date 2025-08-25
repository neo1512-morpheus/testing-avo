// Image utility system for reliable image loading - USING YOUR ORIGINAL IMAGES
export const imageUrls = {
  // Logo and branding images - YOUR ORIGINAL
  logo: "https://oyc9u5lfcg.ufs.sh/f/lRAiGHfLmtpEKLyHPPTxLMDIAT2lF91Zb3n4vp6BJteiEVSX",
  
  // Menu item images - YOUR ORIGINAL IMAGES
  menuItems: [
    "https://oyc9u5lfcg.ufs.sh/f/lRAiGHfLmtpEOn8pNcbshTW8QfYrSPweVc9NIBoGiDsJ7ECn", // Avocado sandwich
    "https://oyc9u5lfcg.ufs.sh/f/lRAiGHfLmtpEKLLr3LCxLMDIAT2lF91Zb3n4vp6BJteiEVSX", // Avocado toast
    "https://oyc9u5lfcg.ufs.sh/f/lRAiGHfLmtpENaLsecI1bClnv9iLZD0xEHa5uwm327JpcVdk", // Guacamole
    "https://oyc9u5lfcg.ufs.sh/f/lRAiGHfLmtpEpYzbDMSmV2SIraKe0WUujA76wYsQtqB31Dkx", // Salad bowl
    "https://oyc9u5lfcg.ufs.sh/f/lRAiGHfLmtpEG3FmdqypFArUYvkTyIa8314ueMEzB9KNQtco", // Pasta
    "https://oyc9u5lfcg.ufs.sh/f/lRAiGHfLmtpEzcGcMqt9fOESayYXKqrsZjCxLMPGJUe3N7F5", // Smoothie
  ],
  
  // Instagram gallery images - YOUR ORIGINAL IMAGES
  instagram: [
    "https://oyc9u5lfcg.ufs.sh/f/lRAiGHfLmtpEKLLr3LCxLMDIAT2lF91Zb3n4vp6BJteiEVSX",
    "https://oyc9u5lfcg.ufs.sh/f/lRAiGHfLmtpEOn8pNcbshTW8QfYrSPweVc9NIBoGiDsJ7ECn",
    "https://oyc9u5lfcg.ufs.sh/f/lRAiGHfLmtpENaLsecI1bClnv9iLZD0xEHa5uwm327JpcVdk",
    "https://oyc9u5lfcg.ufs.sh/f/lRAiGHfLmtpEpYzbDMSmV2SIraKe0WUujA76wYsQtqB31Dkx",
    "https://oyc9u5lfcg.ufs.sh/f/lRAiGHfLmtpEG3FmdqypFArUYvkTyIa8314ueMEzB9KNQtco",
    "https://oyc9u5lfcg.ufs.sh/f/lRAiGHfLmtpEzcGcMqt9fOESayYXKqrsZjCxLMPGJUe3N7F5",
  ],
  
  // Background images - YOUR ORIGINAL
  backgrounds: [
    "https://oyc9u5lfcg.ufs.sh/f/lRAiGHfLmtpEpYzbDMSmV2SIraKe0WUujA76wYsQtqB31Dkx",
  ]
};

// Function to get menu item image by index
export const getMenuItemImage = (index: number): string => {
  return imageUrls.menuItems[index % imageUrls.menuItems.length];
};

// Function to get Instagram image by index
export const getInstagramImage = (index: number): string => {
  return imageUrls.instagram[index % imageUrls.instagram.length];
};

// Function to get background image by index
export const getBackgroundImage = (index: number = 0): string => {
  return imageUrls.backgrounds[index % imageUrls.backgrounds.length];
};
