// Embedded dishes data to avoid CORS issues
let dishesData = {
  "dishes": [
    {
      "name": "Ragi Sangati",
      "how_to_prepare": "Traditional finger millet balls served with spicy curries, a staple food of Rayalaseema region made by cooking ragi flour with water and salt",
      "stepwise_instructions": [
        "Boil 3 cups of water with salt in a heavy-bottomed pan",
        "Gradually add 1 cup ragi flour while stirring continuously to avoid lumps",
        "Cook on medium heat for 10-15 minutes, stirring frequently",
        "Cover and let it rest for 5 minutes",
        "Wet your hands and shape into small balls",
        "Serve hot with sambar, rasam, or spicy curries"
      ]
    },
    {
      "name": "Paya Curry",
      "how_to_prepare": "Spicy mutton trotters curry slow-cooked with aromatic spices, a signature dish of Rayalaseema known for its rich flavor and gelatinous texture",
      "stepwise_instructions": [
        "Clean and pressure cook 1kg mutton paya for 4-5 whistles",
        "Heat oil in a pan, add cumin seeds, bay leaves, and cinnamon",
        "Add sliced onions and fry until golden brown",
        "Add ginger-garlic paste, cook for 2 minutes",
        "Add tomatoes, red chili powder, turmeric, and coriander powder",
        "Add cooked paya with stock, simmer for 30 minutes",
        "Garnish with coriander leaves and serve with rice or roti"
      ]
    },
    {
      "name": "Kurnool Kodi Pulao",
      "how_to_prepare": "Aromatic chicken pulao from Kurnool district, cooked with basmati rice and traditional Rayalaseema spices in dum style",
      "stepwise_instructions": [
        "Marinate 500g chicken pieces with yogurt, chili powder, and turmeric for 30 minutes",
        "Soak 2 cups basmati rice for 30 minutes",
        "Heat ghee, add whole spices (bay leaves, cinnamon, cardamom, cloves)",
        "Add marinated chicken and cook until 70% done",
        "Boil water with whole spices and salt, add rice",
        "Layer partially cooked rice over chicken",
        "Cover with aluminum foil, then lid, cook on high heat for 3 minutes",
        "Reduce heat and cook for 45 minutes on dum",
        "Let it rest for 10 minutes before serving"
      ]
    },
    {
      "name": "Rayalaseema Chicken Fry",
      "how_to_prepare": "Dry chicken fry with bold spices including red chilies and black pepper, characteristic of the spicy cuisine of Rayalaseema region",
      "stepwise_instructions": [
        "Cut 1kg chicken into medium pieces",
        "Marinate with red chili powder, turmeric, ginger-garlic paste, and salt for 1 hour",
        "Heat oil in a heavy-bottomed pan",
        "Add curry leaves and green chilies",
        "Add marinated chicken pieces and cook on medium heat",
        "Stir frequently to avoid burning",
        "Cook until chicken is well-done and dry",
        "Sprinkle black pepper powder and serve hot"
      ]
    },
    {
      "name": "Ulavacharu",
      "how_to_prepare": "Horse gram soup, a nutritious and flavorful soup made from sprouted horse gram, popular across Andhra Pradesh especially in Rayalaseema",
      "stepwise_instructions": [
        "Soak 1 cup horse gram overnight and sprout for 2 days",
        "Pressure cook sprouted horse gram with water for 3-4 whistles",
        "Strain and collect the clear soup",
        "Heat ghee in a pan, add cumin seeds and hing",
        "Add chopped onions, green chilies, and ginger",
        "Add turmeric powder and the horse gram soup",
        "Season with salt and simmer for 10 minutes",
        "Garnish with coriander leaves and serve hot"
      ]
    },
    {
      "name": "Bendakaya Pulusu",
      "how_to_prepare": "Tangy okra curry cooked in tamarind-based gravy with onions and traditional Andhra spices, a popular vegetarian dish",
      "stepwise_instructions": [
        "Cut 250g okra into 1-inch pieces",
        "Heat oil in a pan and fry okra until crispy, set aside",
        "In the same pan, add mustard seeds, cumin seeds, and curry leaves",
        "Add sliced onions and cook until translucent",
        "Add ginger-garlic paste and cook for 2 minutes",
        "Add tamarind extract, turmeric, red chili powder, and salt",
        "Add fried okra and simmer for 10 minutes",
        "Garnish with coriander leaves and serve with rice"
      ]
    },
    {
      "name": "Gongura Pachadi",
      "how_to_prepare": "Tangy chutney made from sorrel leaves (gongura), a signature condiment of Andhra cuisine known for its sour taste and health benefits",
      "stepwise_instructions": [
        "Clean and wash 2 cups fresh gongura leaves",
        "Heat oil in a pan, add red chilies and fry until crisp",
        "Add gongura leaves and cook until wilted",
        "Let it cool completely",
        "Grind with salt, garlic, and green chilies to a coarse paste",
        "Heat oil for tempering, add mustard seeds and curry leaves",
        "Pour tempering over the pachadi and mix well",
        "Serve with rice and ghee"
      ]
    },
    {
      "name": "Rayalaseema Kodi Pulusu",
      "how_to_prepare": "Traditional chicken curry from Rayalaseema region cooked in tangy tamarind gravy with aromatic spices and curry leaves",
      "stepwise_instructions": [
        "Cut 1kg chicken into pieces and marinate with turmeric and salt",
        "Heat sesame oil in a heavy-bottomed pan",
        "Add mustard seeds, cumin seeds, and curry leaves",
        "Add sliced onions and cook until golden brown",
        "Add ginger-garlic paste and cook for 2 minutes",
        "Add marinated chicken pieces and cook until sealed",
        "Add tamarind extract, red chili powder, and coriander powder",
        "Add tomatoes and cook until soft",
        "Simmer covered for 20-25 minutes until chicken is tender",
        "Garnish with fresh coriander and serve with rice"
      ]
    },
    {
      "name": "Pesarattu",
      "how_to_prepare": "Green gram dosa, a protein-rich breakfast dish made from whole green gram, popular across Andhra Pradesh as a healthy alternative to regular dosa",
      "stepwise_instructions": [
        "Soak 2 cups whole green gram for 4-6 hours",
        "Drain and grind with ginger, green chilies, and salt to a smooth batter",
        "Add finely chopped onions, coriander leaves, and cumin seeds to batter",
        "Heat a non-stick pan or tawa",
        "Pour a ladle of batter and spread in circular motion",
        "Drizzle oil around edges and cook until golden brown",
        "Flip and cook the other side for 1-2 minutes",
        "Serve hot with coconut chutney and sambar"
      ]
    },
    {
      "name": "Rayalaseema Mutton Curry",
      "how_to_prepare": "Spicy mutton curry cooked with onions, tomatoes and aromatic spices, known for its robust flavor and tender meat",
      "stepwise_instructions": [
        "Cut 1kg mutton into medium pieces",
        "Marinate with yogurt, red chili powder, turmeric, and salt for 1 hour",
        "Heat sesame oil in a pressure cooker",
        "Add whole spices (bay leaves, cinnamon, cardamom)",
        "Add sliced onions and cook until golden brown",
        "Add ginger-garlic paste and cook for 2 minutes",
        "Add marinated mutton and cook until sealed",
        "Add tomatoes and cook until soft",
        "Pressure cook for 4-5 whistles",
        "Garnish with mint and coriander leaves"
      ]
    },
    {
      "name": "Andhra Chicken Curry",
      "how_to_prepare": "Spicy chicken curry with coconut, curry leaves, and red chilies, representing the bold flavors of traditional Andhra cooking",
      "stepwise_instructions": [
        "Cut 1kg chicken into pieces and marinate with turmeric and salt",
        "Heat coconut oil in a heavy-bottomed pan",
        "Add curry leaves, dry red chilies, and onions",
        "Cook onions until golden brown",
        "Add ginger-garlic paste and cook for 2 minutes",
        "Add tomatoes and cook until mushy",
        "Add chicken pieces and cook until sealed",
        "Add coconut milk, red chili powder, and coriander powder",
        "Simmer covered for 20 minutes until chicken is cooked",
        "Garnish with fresh coriander and serve with rice"
      ]
    },
    {
      "name": "Gutti Vankaya Koora",
      "how_to_prepare": "Stuffed baby eggplant curry filled with spiced paste, a popular vegetarian dish showcasing the art of Andhra vegetarian cooking",
      "stepwise_instructions": [
        "Make slits in 250g baby brinjals keeping stem intact",
        "Roast peanuts, sesame seeds, coriander seeds, and red chilies",
        "Grind roasted ingredients with tamarind, jaggery, and salt",
        "Stuff the ground paste into brinjals",
        "Heat oil in a pan, add mustard seeds and curry leaves",
        "Add stuffed brinjals and cook covered on low heat",
        "Turn occasionally to cook evenly",
        "Cook for 20-25 minutes until brinjals are tender",
        "Serve hot with rice and dal"
      ]
    },
    {
      "name": "Chepa Pulusu",
      "how_to_prepare": "Fish curry in tangy tamarind gravy, a coastal Andhra delicacy prepared with fresh fish and traditional spices",
      "stepwise_instructions": [
        "Clean and cut 500g fish into pieces",
        "Marinate fish with turmeric and salt for 15 minutes",
        "Heat oil and shallow fry fish pieces until golden",
        "In the same pan, add mustard seeds and curry leaves",
        "Add sliced onions and cook until soft",
        "Add tamarind extract, red chili powder, and turmeric",
        "Add tomatoes and cook until mushy",
        "Gently add fried fish and simmer for 10 minutes",
        "Garnish with coriander leaves and serve with rice"
      ]
    },
    {
      "name": "Pappu Charu",
      "how_to_prepare": "Thin lentil soup tempered with spices, a comfort food in Andhra households, light and flavorful accompaniment to rice",
      "stepwise_instructions": [
        "Cook 1/2 cup toor dal with turmeric until soft and mushy",
        "Extract tamarind juice from small lemon-sized ball",
        "Heat ghee in a pan, add mustard seeds and cumin seeds",
        "Add curry leaves, dry red chilies, and hing",
        "Add chopped onions and green chilies",
        "Add tamarind extract and bring to boil",
        "Add cooked dal and mix well",
        "Season with salt and simmer for 10 minutes",
        "Garnish with coriander leaves and serve with rice"
      ]
    },
    {
      "name": "Pootharekulu",
      "how_to_prepare": "Paper-thin sweet crepes layered with ghee and sugar, a traditional Andhra dessert from Atreyapuram, known for its delicate texture",
      "stepwise_instructions": [
        "Make a thin batter with rice flour and water",
        "Heat a non-stick pan on low heat",
        "Pour a thin layer of batter and spread evenly",
        "Cook until the edges start lifting",
        "Carefully peel off the paper-thin crepe",
        "Brush with ghee and sprinkle powdered sugar",
        "Layer multiple sheets with ghee and sugar",
        "Cut into desired shapes",
        "Store in airtight containers"
      ]
    },
    {
      "name": "Ariselu",
      "how_to_prepare": "Traditional rice flour and jaggery sweet prepared during festivals, deep-fried until golden and crispy, a must-have during celebrations",
      "stepwise_instructions": [
        "Dry roast 2 cups rice flour until aromatic",
        "Make jaggery syrup by boiling 1 cup jaggery with little water",
        "Mix hot jaggery syrup with roasted rice flour gradually",
        "Add sesame seeds and cardamom powder",
        "Knead into a smooth dough when warm",
        "Make small balls and flatten between banana leaves",
        "Heat oil for deep frying",
        "Fry ariselu until golden brown on both sides",
        "Drain on paper towels and store when cool"
      ]
    },
    {
      "name": "Natukodi Pulusu",
      "how_to_prepare": "Country chicken curry, a specialty of Rayalaseema prepared with free-range chicken in spicy tamarind gravy with traditional spices",
      "stepwise_instructions": [
        "Cut 1kg country chicken into pieces",
        "Marinate with turmeric powder and salt for 30 minutes",
        "Heat sesame oil in a heavy-bottomed pan",
        "Add curry leaves, dry red chilies, and onions",
        "Cook onions until golden brown",
        "Add ginger-garlic paste and cook for 2 minutes",
        "Add marinated chicken and cook until sealed",
        "Add tamarind extract, red chili powder, and coriander powder",
        "Add tomatoes and cook until soft",
        "Simmer covered for 25-30 minutes until chicken is tender",
        "Garnish with coriander leaves and serve with rice"
      ]
    },
    {
      "name": "Kandi Pachadi",
      "how_to_prepare": "Toor dal chutney, a tangy and spicy accompaniment made with roasted toor dal and red chilies, popular across Rayalaseema",
      "stepwise_instructions": [
        "Dry roast 1/2 cup toor dal until golden and aromatic",
        "Roast 4-5 red chilies until crisp",
        "Let both cool completely",
        "Grind roasted dal and chilies with salt to a coarse powder",
        "Add tamarind extract and grind to a thick paste",
        "Heat oil for tempering, add mustard seeds and curry leaves",
        "Add hing and pour over the pachadi",
        "Mix well and serve with rice and ghee"
      ]
    },
    {
      "name": "Bobbatlu (Puran Poli)",
      "how_to_prepare": "Sweet stuffed flatbread filled with jaggery and lentil mixture, a traditional festive dessert especially popular during Ugadi",
      "stepwise_instructions": [
        "Cook 1 cup chana dal until soft and drain excess water",
        "Mash the dal and add 1 cup jaggery",
        "Cook the mixture until thick, add cardamom powder",
        "Make dough with maida, oil, and water",
        "Roll small portions of dough, place filling in center",
        "Seal edges and roll gently into flatbread",
        "Cook on tawa with ghee until golden spots appear",
        "Serve hot with milk or ghee"
      ]
    },
    {
      "name": "Gongura Mutton",
      "how_to_prepare": "Mutton cooked with sorrel leaves (gongura), a signature dish of Rayalaseema combining tangy gongura with spicy mutton",
      "stepwise_instructions": [
        "Clean and chop 2 cups fresh gongura leaves",
        "Cut 750g mutton into pieces and marinate with turmeric and salt",
        "Heat oil in a heavy-bottomed pan",
        "Add red chilies and fry until crisp",
        "Add mutton pieces and cook until sealed",
        "Add ginger-garlic paste and cook for 3 minutes",
        "Add gongura leaves and cook until wilted",
        "Add red chili powder and coriander powder",
        "Cook covered for 45 minutes until mutton is tender",
        "Serve hot with rice or roti"
      ]
    },
    {
      "name": "Nalla Karam",
      "how_to_prepare": "Black sesame seed powder mixed with spices, a traditional condiment of Rayalaseema region served with rice and ghee",
      "stepwise_instructions": [
        "Dry roast 1 cup black sesame seeds until aromatic",
        "Roast 3-4 red chilies until crisp",
        "Let both cool completely",
        "Grind sesame seeds to a fine powder",
        "Grind red chilies separately",
        "Mix both powders with salt and hing",
        "Store in airtight container",
        "Serve mixed with rice, ghee, and a pinch of salt"
      ]
    },
    {
      "name": "Kadapa Kodi Kura",
      "how_to_prepare": "Spicy chicken curry from Kadapa district, cooked with coconut and special blend of roasted spices unique to the region",
      "stepwise_instructions": [
        "Cut 1kg chicken into pieces",
        "Roast coriander seeds, cumin seeds, and red chilies",
        "Grind roasted spices with coconut to a paste",
        "Marinate chicken with turmeric and salt",
        "Heat coconut oil in a pan",
        "Add curry leaves and onions, cook until golden",
        "Add ginger-garlic paste and cook for 2 minutes",
        "Add chicken and cook until sealed",
        "Add ground spice paste and cook for 5 minutes",
        "Add water as needed and simmer until chicken is cooked",
        "Garnish with coriander leaves"
      ]
    },
    {
      "name": "Chintakaya Pappu",
      "how_to_prepare": "Tamarind dal, a tangy lentil curry made with tamarind and vegetables, a comfort food staple in Rayalaseema households",
      "stepwise_instructions": [
        "Cook 1 cup toor dal with turmeric until soft",
        "Soak tamarind in water and extract thick juice",
        "Heat oil in a pan, add mustard seeds and cumin seeds",
        "Add curry leaves, dry red chilies, and hing",
        "Add chopped onions and green chilies",
        "Add any vegetables like drumsticks or okra if desired",
        "Add tamarind extract and bring to boil",
        "Add cooked dal and mix well",
        "Season with salt and red chili powder",
        "Simmer for 15 minutes and serve with rice"
      ]
    },
    {
      "name": "Rayalaseema Bellam Paravannam",
      "how_to_prepare": "Traditional jaggery rice pudding from Rayalaseema, made with aromatic rice, jaggery, and ghee, often prepared during festivals and special occasions",
      "stepwise_instructions": [
        "Cook 1 cup basmati rice with 4 cups milk until soft and creamy",
        "In a pan, melt 200g jaggery with 2 tbsp water to make syrup",
        "Strain the jaggery syrup to remove impurities",
        "Add the jaggery syrup to the cooked rice and milk",
        "Heat 3 tbsp ghee and fry 10 cashews and 15 raisins until golden",
        "Add the fried nuts to the pudding",
        "Add 1/2 tsp cardamom powder and a pinch of salt",
        "Simmer for 10 minutes until thick consistency",
        "Garnish with more fried nuts and serve warm or cold"
      ]
    },
    {
      "name": "Ariselu",
      "how_to_prepare": "Traditional Rayalaseema sweet made with rice flour and jaggery, deep-fried until golden and crispy, a must-have during Sankranti festival",
      "stepwise_instructions": [
        "Soak 2 cups rice for 4 hours, drain and spread to dry for 2 hours",
        "Grind the rice to fine flour and sieve it",
        "Make thick jaggery syrup with 300g jaggery and 1/4 cup water",
        "Cook until it reaches soft ball consistency",
        "Add 1 tsp sesame seeds to the syrup",
        "Mix the rice flour gradually into hot jaggery syrup",
        "Knead into smooth dough while warm, cover and rest for 30 minutes",
        "Heat oil for deep frying on medium heat",
        "Take small portions, flatten into discs using banana leaf",
        "Deep fry until golden brown and crispy",
        "Drain on paper towels and store in airtight container"
      ]
    },
    {
      "name": "Rayalaseema Pongal Sweet",
      "how_to_prepare": "Sweet version of pongal made with broken wheat, jaggery, and ghee, popular in Rayalaseema during harvest festivals",
      "stepwise_instructions": [
        "Dry roast 1 cup broken wheat until aromatic and golden",
        "Boil 3 cups water with a pinch of salt",
        "Add roasted broken wheat and cook until soft",
        "In another pan, melt 200g jaggery with 1/4 cup water",
        "Cook jaggery syrup until it reaches thread consistency",
        "Mix the cooked broken wheat with jaggery syrup",
        "Heat 4 tbsp ghee and add to the mixture",
        "Add 1/2 tsp cardamom powder and mix well",
        "Fry 10 cashews and 15 raisins in ghee until golden",
        "Garnish with fried nuts and serve hot"
      ]
    },
    {
      "name": "Kajjikayalu",
      "how_to_prepare": "Crescent-shaped sweet dumplings filled with coconut and jaggery, deep-fried until crispy, a traditional Rayalaseema festival sweet",
      "stepwise_instructions": [
        "Make dough with 2 cups refined flour, 2 tbsp oil, and water",
        "Knead into smooth dough, cover and rest for 30 minutes",
        "For filling: grate 1 cup fresh coconut",
        "Cook coconut with 150g jaggery until moisture evaporates",
        "Add 1/4 tsp cardamom powder and let it cool",
        "Roll dough into small circles, place filling in center",
        "Fold into crescent shape and seal edges with water",
        "Heat oil for deep frying on medium heat",
        "Fry kajjikayalu until golden brown and crispy",
        "Drain on paper towels and serve when cooled"
      ]
    },
    {
      "name": "Nuvvula Laddu",
      "how_to_prepare": "Sesame seed laddus made with roasted sesame seeds and jaggery, a nutritious sweet from Rayalaseema region, especially popular in winter",
      "stepwise_instructions": [
        "Dry roast 2 cups sesame seeds until they turn golden and aromatic",
        "Let them cool and grind coarsely, keeping some texture",
        "Make jaggery syrup with 200g jaggery and 2 tbsp water",
        "Cook until it reaches soft ball consistency",
        "Add the ground sesame seeds to hot jaggery syrup",
        "Mix well and add 1/4 tsp cardamom powder",
        "Let the mixture cool slightly until you can handle it",
        "Apply ghee to your palms and shape into round laddus",
        "Place on a greased plate and let them set",
        "Store in airtight container when completely cooled"
      ]
    },
    {
      "name": "Bellam Burelu",
      "how_to_prepare": "Jaggery-stuffed rice flour pancakes from Rayalaseema, crispy outside and sweet inside, often made during special occasions",
      "stepwise_instructions": [
        "Make filling by melting 150g jaggery with 1 tbsp water",
        "Add 1/2 cup grated coconut and cook until thick",
        "Add 1/4 tsp cardamom powder and let it cool",
        "Make batter with 1 cup rice flour, 1/4 tsp salt, and water",
        "Mix to smooth, thick batter consistency",
        "Heat oil in a pan, pour batter to make small pancakes",
        "Cook until one side is done, add filling in center",
        "Fold the pancake and seal edges",
        "Cook both sides until golden brown and crispy",
        "Serve hot as a sweet snack"
      ]
    },
    {
      "name": "Rayalaseema Semiya Payasam",
      "how_to_prepare": "Vermicelli pudding made with jaggery instead of sugar, coconut milk, and nuts, a traditional dessert from Rayalaseema region",
      "stepwise_instructions": [
        "Roast 1 cup vermicelli in 1 tbsp ghee until golden",
        "Boil 3 cups milk and add roasted vermicelli",
        "Cook until vermicelli is soft and milk thickens",
        "Make jaggery syrup with 150g jaggery and 1/4 cup water",
        "Strain and add to the cooked vermicelli",
        "Add 1/2 cup coconut milk for rich flavor",
        "Heat 2 tbsp ghee and fry cashews, raisins, and almonds",
        "Add fried nuts to the payasam",
        "Add 1/2 tsp cardamom powder and simmer for 5 minutes",
        "Serve hot or chilled as preferred"
      ]
    },
    {
      "name": "Kunda",
      "how_to_prepare": "Slow-cooked milk sweet from Rayalaseema, similar to rabri but thicker, flavored with cardamom and garnished with nuts",
      "stepwise_instructions": [
        "Boil 1 liter full-fat milk in a heavy-bottomed pan",
        "Simmer on low heat, stirring occasionally",
        "Cook for 45 minutes until milk reduces to half",
        "Keep scraping the sides and mixing back into milk",
        "Add 100g sugar or jaggery when milk is thick",
        "Continue cooking until very thick consistency",
        "Add 1/2 tsp cardamom powder and mix well",
        "Heat 1 tbsp ghee and fry chopped almonds and pistachios",
        "Garnish with fried nuts and serve warm or cold",
        "Can be stored in refrigerator for 2-3 days"
      ]
    }
  ],
  "metadata": {
    "region": "Rayalaseema",
    "cuisine": "Andhra",
    "description": "A collection of traditional dishes from the Rayalaseema region of Andhra Pradesh, known for its rich flavors and unique cooking techniques."
  }
};

// Speech Recognition and Synthesis
let recognition = null;
let synthesis = window.speechSynthesis;
let isListening = false;
let currentUtterance = null;
let isPlaying = false;
let isPaused = false;
let currentPlayingButton = null;
let selectedVoice = null;

// Initialize the chatbot
document.addEventListener('DOMContentLoaded', function() {
    console.log('Dishes data loaded successfully:', dishesData);
    initializeSpeechRecognition();
    setupEventListeners();
    loadVoices();
});

// Load and select the best female voice
function loadVoices() {
    // Wait for voices to be loaded
    if (synthesis.getVoices().length === 0) {
        synthesis.addEventListener('voiceschanged', selectBestFemaleVoice);
    } else {
        selectBestFemaleVoice();
    }
}

// Select the best available female voice
function selectBestFemaleVoice() {
    const voices = synthesis.getVoices();
    console.log('Available voices:', voices.map(v => `${v.name} (${v.lang}) - ${v.gender || 'unknown gender'}`));
    
    // Priority order for female voices (most preferred first)
    const preferredFemaleVoices = [
        // English female voices with better quality
        'Microsoft Zira - English (United States)',
        'Microsoft Hazel - English (Great Britain)',
        'Google UK English Female',
        'Google US English Female',
        'Microsoft Linda',
        'Microsoft Heera - English (India)', // Good for Indian accent
        'Microsoft Ravi - English (India)', // Alternative Indian voice
        'Samantha',
        'Victoria',
        'Karen',
        'Moira',
        'Tessa',
        'Veena', // Indian English
        'Fiona'
    ];
    
    // First, try to find exact matches from preferred list
    for (let preferredName of preferredFemaleVoices) {
        const voice = voices.find(v => 
            v.name.includes(preferredName) || 
            preferredName.includes(v.name)
        );
        if (voice) {
            selectedVoice = voice;
            console.log('Selected preferred voice:', voice.name);
            populateVoiceSelect(voices);
            return;
        }
    }
    
    // If no preferred voice found, look for any female voice
    const femaleVoice = voices.find(v => 
        v.name.toLowerCase().includes('female') ||
        v.name.toLowerCase().includes('woman') ||
        v.name.toLowerCase().includes('zira') ||
        v.name.toLowerCase().includes('hazel') ||
        v.name.toLowerCase().includes('linda') ||
        v.name.toLowerCase().includes('heera') ||
        v.name.toLowerCase().includes('samantha') ||
        v.name.toLowerCase().includes('victoria') ||
        v.name.toLowerCase().includes('karen') ||
        v.name.toLowerCase().includes('moira') ||
        v.name.toLowerCase().includes('tessa') ||
        v.name.toLowerCase().includes('veena') ||
        v.name.toLowerCase().includes('fiona')
    );
    
    if (femaleVoice) {
        selectedVoice = femaleVoice;
        console.log('Selected female voice:', femaleVoice.name);
        populateVoiceSelect(voices);
        return;
    }
    
    // As fallback, prefer English voices
    const englishVoice = voices.find(v => 
        v.lang.startsWith('en') && 
        !v.name.toLowerCase().includes('male')
    );
    
    if (englishVoice) {
        selectedVoice = englishVoice;
        console.log('Selected English voice:', englishVoice.name);
        populateVoiceSelect(voices);
        return;
    }
    
    // Final fallback - use default
    selectedVoice = voices[0];
    console.log('Using default voice:', selectedVoice?.name || 'System default');
    populateVoiceSelect(voices);
}

// Populate voice selection dropdown
function populateVoiceSelect(voices) {
    const voiceSelect = document.getElementById('voiceSelect');
    voiceSelect.innerHTML = '';
    
    // Filter to English voices and prioritize female voices
    const englishVoices = voices.filter(voice => voice.lang.startsWith('en'));
    const femaleVoices = englishVoices.filter(voice => 
        voice.name.toLowerCase().includes('female') ||
        voice.name.toLowerCase().includes('woman') ||
        voice.name.toLowerCase().includes('zira') ||
        voice.name.toLowerCase().includes('hazel') ||
        voice.name.toLowerCase().includes('linda') ||
        voice.name.toLowerCase().includes('heera') ||
        voice.name.toLowerCase().includes('samantha') ||
        voice.name.toLowerCase().includes('victoria') ||
        voice.name.toLowerCase().includes('karen') ||
        voice.name.toLowerCase().includes('moira') ||
        voice.name.toLowerCase().includes('tessa') ||
        voice.name.toLowerCase().includes('veena') ||
        voice.name.toLowerCase().includes('fiona')
    );
    
    const otherVoices = englishVoices.filter(voice => !femaleVoices.includes(voice));
    
    // Add female voices first
    if (femaleVoices.length > 0) {
        const femaleGroup = document.createElement('optgroup');
        femaleGroup.label = '👩 Female Voices (Recommended)';
        femaleVoices.forEach(voice => {
            const option = document.createElement('option');
            option.value = voice.name;
            option.textContent = `${voice.name} (${voice.lang})`;
            if (voice === selectedVoice) {
                option.selected = true;
            }
            femaleGroup.appendChild(option);
        });
        voiceSelect.appendChild(femaleGroup);
    }
    
    // Add other voices
    if (otherVoices.length > 0) {
        const otherGroup = document.createElement('optgroup');
        otherGroup.label = '🗣️ Other Voices';
        otherVoices.forEach(voice => {
            const option = document.createElement('option');
            option.value = voice.name;
            option.textContent = `${voice.name} (${voice.lang})`;
            if (voice === selectedVoice) {
                option.selected = true;
            }
            otherGroup.appendChild(option);
        });
        voiceSelect.appendChild(otherGroup);
    }
}

// Change voice based on user selection
function changeVoice() {
    const voiceSelect = document.getElementById('voiceSelect');
    const selectedVoiceName = voiceSelect.value;
    const voices = synthesis.getVoices();
    
    selectedVoice = voices.find(voice => voice.name === selectedVoiceName);
    console.log('Voice changed to:', selectedVoice?.name);
}

// Test the selected voice
function testVoice() {
    if (selectedVoice) {
        // Stop any current speech
        synthesis.cancel();
        
        const testUtterance = new SpeechSynthesisUtterance(
            "Hello! I'm your Rayalaseema Chef assistant. I'll help you with authentic Andhra recipes."
        );
        testUtterance.voice = selectedVoice;
        testUtterance.rate = 0.85;
        testUtterance.pitch = 1.1;
        testUtterance.volume = 0.9;
        
        synthesis.speak(testUtterance);
    }
}

// Initialize speech recognition
function initializeSpeechRecognition() {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        recognition = new SpeechRecognition();
        
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = 'en-US';
        
        recognition.onstart = function() {
            isListening = true;
            document.getElementById('voiceBtn').classList.add('recording');
            document.getElementById('voiceStatus').classList.remove('hidden');
        };
        
        recognition.onend = function() {
            isListening = false;
            document.getElementById('voiceBtn').classList.remove('recording');
            document.getElementById('voiceStatus').classList.add('hidden');
        };
        
        recognition.onresult = function(event) {
            const transcript = event.results[0][0].transcript;
            document.getElementById('messageInput').value = transcript;
            sendMessage();
        };
        
        recognition.onerror = function(event) {
            console.error('Speech recognition error:', event.error);
            addBotMessage('Sorry, I couldn\'t understand what you said. Please try again or type your question.');
        };
    } else {
        console.log('Speech recognition not supported');
        document.getElementById('voiceBtn').style.display = 'none';
    }
}

// Setup event listeners
function setupEventListeners() {
    const messageInput = document.getElementById('messageInput');
    const sendBtn = document.getElementById('sendBtn');
    const voiceBtn = document.getElementById('voiceBtn');
    
    // Send message on Enter key
    messageInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
    
    // Send button click
    sendBtn.addEventListener('click', sendMessage);
    
    // Voice button click
    voiceBtn.addEventListener('click', toggleVoiceRecognition);
}

// Toggle voice recognition
function toggleVoiceRecognition() {
    if (!recognition) {
        addBotMessage('Sorry, voice recognition is not supported in your browser.');
        return;
    }
    
    if (isListening) {
        recognition.stop();
    } else {
        recognition.start();
    }
}

// Send message function
function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value.trim();
    
    if (!message) return;
    
    // Add user message to chat
    addUserMessage(message);
    messageInput.value = '';
    
    // Process the message and get bot response
    setTimeout(() => {
        const response = processMessage(message);
        addBotMessage(response);
    }, 500);
}

// Send suggestion
function sendSuggestion(suggestion) {
    document.getElementById('messageInput').value = suggestion;
    sendMessage();
}

// Process user message and return appropriate response
function processMessage(message) {
    const lowerMessage = message.toLowerCase();
    
    // Greeting responses - check for whole words only
    const greetingWords = ['hello', 'hi', 'namaste', 'hey'];
    const messageWords = lowerMessage.split(/\s+/);
    const hasGreeting = greetingWords.some(greeting => 
        messageWords.includes(greeting) || 
        messageWords.some(word => word === greeting || word.startsWith(greeting + ',') || word.startsWith(greeting + '!'))
    );
    
    if (hasGreeting) {
        return 'Namaste! 🙏 Welcome to Rayalaseema Chef! I can help you with authentic Andhra Rayalaseema recipes. What dish would you like to learn about today?';
    }
    
    // Help responses - more specific matching
    if (lowerMessage.includes('help') || lowerMessage.includes('what can you do') || lowerMessage.includes('what do you know')) {
        return 'I can help you with traditional Rayalaseema recipes! You can ask me:\n\n• "How to make [dish name]?"\n• "Tell me about [dish name]"\n• "Recipe for [dish name]"\n• "What is [dish name]?"\n\nI know about dishes like Ragi Sangati, Paya Curry, Gongura Mutton, Rayalaseema Chicken Fry, Ariselu, Bellam Paravannam, and many more including traditional sweets!';
    }
    
    // Search for matching dish
    const matchedDish = findMatchingDish(lowerMessage);
    
    if (matchedDish) {
        return formatRecipeResponse(matchedDish);
    }
    
    // List all dishes if asked
    if (lowerMessage.includes('list') || lowerMessage.includes('all dishes') || lowerMessage.includes('what dishes')) {
        return formatDishList();
    }
    
    // Default response for unmatched queries
    return `I couldn't find information about that dish. Here are some popular Rayalaseema dishes I know about:\n\n${getPopularDishes()}\n\nTry asking "How to make Ariselu?" or "Tell me about Bellam Paravannam" for sweets!`;
}

// Find matching dish in the data with improved algorithm
function findMatchingDish(message) {
    const dishes = dishesData.dishes;
    const cleanMessage = message.replace(/[^a-z\s]/g, '').trim();
    
    // Priority 1: Exact full name match
    for (let dish of dishes) {
        const dishName = dish.name.toLowerCase();
        if (cleanMessage === dishName) {
            return dish;
        }
        if (cleanMessage.includes(dishName)) {
            return dish;
        }
    }
    
    // Priority 2: Check if dish name contains the user's query (most important fix)
    for (let dish of dishes) {
        const dishName = dish.name.toLowerCase();
        if (dishName.includes(cleanMessage)) {
            return dish;
        }
    }
    
    // Priority 3: Multiple word matches (most specific first)
    let bestMatch = null;
    let bestMatchScore = 0;
    
    for (let dish of dishes) {
        const dishName = dish.name.toLowerCase();
        const dishWords = dishName.split(' ').filter(word => word.length > 2);
        const messageWords = cleanMessage.split(' ').filter(word => word.length > 2);
        
        let matchScore = 0;
        let matchedWords = 0;
        
        // Count how many words from the message are in the dish name
        for (let messageWord of messageWords) {
            for (let dishWord of dishWords) {
                if (dishWord.includes(messageWord) || messageWord.includes(dishWord)) {
                    matchScore += messageWord.length; // Give score based on query word length
                    matchedWords++;
                    break;
                }
            }
        }
        
        // For multi-word queries, require good coverage
        const queryWordCount = messageWords.length;
        const matchRatio = matchedWords / queryWordCount;
        
        // Accept if more than 60% of query words match and score is good
        if (matchRatio >= 0.6 && matchScore >= 6 && matchScore > bestMatchScore) {
            bestMatch = dish;
            bestMatchScore = matchScore;
        }
    }
    
    if (bestMatch) {
        return bestMatch;
    }
    
    // Priority 4: Single keyword match (only if very specific)
    for (let dish of dishes) {
        const dishName = dish.name.toLowerCase();
        const dishWords = dishName.split(' ').filter(word => word.length > 4); // Only longer words
        
        for (let dishWord of dishWords) {
            if (cleanMessage.includes(dishWord) && dishWords.length === 1) {
                // Only return single word matches if it's the only word in dish name
                return dish;
            }
        }
    }
    
    return null;
}

// Format recipe response
function formatRecipeResponse(dish) {
    let response = `🍛 **${dish.name}**\n\n`;
    response += `${dish.how_to_prepare}\n\n`;
    response += `**Step-by-step Instructions:**\n`;
    
    dish.stepwise_instructions.forEach((step, index) => {
        response += `${index + 1}. ${step}\n`;
    });
    
    response += `\n✨ Enjoy your delicious ${dish.name}! Let me know if you need help with any other Rayalaseema dishes.`;
    
    return response;
}

// Format dish list
function formatDishList() {
    let response = '🍽️ **Here are all the Rayalaseema dishes I know:**\n\n';
    
    dishesData.dishes.forEach((dish, index) => {
        response += `${index + 1}. **${dish.name}**\n`;
    });
    
    response += '\nJust ask me about any of these dishes and I\'ll share the complete recipe with you!';
    return response;
}

// Get popular dishes for suggestions
function getPopularDishes() {
    const popular = ['Ragi Sangati', 'Paya Curry', 'Gongura Mutton', 'Rayalaseema Chicken Fry', 'Ulavacharu', 'Ariselu', 'Bellam Paravannam', 'Kajjikayalu'];
    return popular.map((dish, index) => `${index + 1}. ${dish}`).join('\n');
}

// Add user message to chat
function addUserMessage(message) {
    const chatMessages = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message user-message';
    messageDiv.innerHTML = `
        <div class="message-avatar">
            <i class="fas fa-user"></i>
        </div>
        <div class="message-content">
            <p>${message}</p>
        </div>
    `;
    chatMessages.appendChild(messageDiv);
    scrollToBottom();
}

// Add bot message to chat
function addBotMessage(message) {
    const chatMessages = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message bot-message';
    
    // Generate unique ID for this message
    const messageId = 'msg-' + Date.now();
    
    // Format message with proper styling
    const formattedMessage = formatBotMessage(message);
    
    messageDiv.innerHTML = `
        <div class="message-avatar">
            <i class="fas fa-chef-hat"></i>
        </div>
        <div class="message-content">
            ${formattedMessage}
            <div class="message-actions">
                <button class="play-pause-btn" onclick="togglePlayPause('${messageId}', this)" data-message="${encodeURIComponent(message)}">
                    <i class="fas fa-play"></i>
                    <span>Play</span>
                </button>
            </div>
        </div>
    `;
    
    messageDiv.id = messageId;
    chatMessages.appendChild(messageDiv);
    scrollToBottom();
}

// Format bot message with proper HTML
function formatBotMessage(message) {
    let formatted = message;
    
    // Convert **text** to bold
    formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Convert line breaks to HTML
    formatted = formatted.replace(/\n/g, '<br>');
    
    // Check if it's a recipe with steps
    if (formatted.includes('Step-by-step Instructions:')) {
        const parts = formatted.split('**Step-by-step Instructions:**');
        if (parts.length === 2) {
            const steps = parts[1].trim();
            const stepsList = steps.split('<br>').filter(step => step.trim() && /^\d+\./.test(step.trim()));
            
            if (stepsList.length > 0) {
                const stepsHtml = stepsList.map(step => `<li>${step.replace(/^\d+\.\s*/, '')}</li>`).join('');
                formatted = parts[0] + '<div class="recipe-steps"><h4>Step-by-step Instructions:</h4><ol>' + stepsHtml + '</ol></div>';
            }
        }
    }
    
    return `<p>${formatted}</p>`;
}

// Scroll to bottom of chat
function scrollToBottom() {
    const chatMessages = document.getElementById('chatMessages');
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Toggle play/pause for individual messages
function togglePlayPause(messageId, buttonElement) {
    const messageText = decodeURIComponent(buttonElement.getAttribute('data-message'));
    const icon = buttonElement.querySelector('i');
    const text = buttonElement.querySelector('span');
    
    // If a different message is playing, stop it first
    if (currentPlayingButton && currentPlayingButton !== buttonElement && isPlaying) {
        synthesis.cancel();
        resetButton(currentPlayingButton);
    }
    
    // If this is the currently playing message
    if (currentPlayingButton === buttonElement) {
        if (isPlaying && !isPaused) {
            // Currently playing - pause it
            synthesis.pause();
            isPaused = true;
            isPlaying = false;
            buttonElement.classList.remove('playing');
            buttonElement.classList.add('paused');
            icon.className = 'fas fa-play';
            text.textContent = 'Resume';
        } else if (isPaused) {
            // Currently paused - resume it
            synthesis.resume();
            isPaused = false;
            isPlaying = true;
            buttonElement.classList.remove('paused');
            buttonElement.classList.add('playing');
            icon.className = 'fas fa-pause';
            text.textContent = 'Pause';
        }
        return;
    }
    
    // Start playing new message
    startPlayback(messageText, buttonElement);
}

// Start playback for a new message
function startPlayback(messageText, buttonElement) {
    const icon = buttonElement.querySelector('i');
    const text = buttonElement.querySelector('span');
    
    // Clean text for speech
    const cleanText = messageText
        .replace(/\*\*(.*?)\*\*/g, '$1')
        .replace(/🍛|🍽️|✨|🙏/g, '')
        .replace(/\n/g, '. ');
    
    currentUtterance = new SpeechSynthesisUtterance(cleanText);
    
    // Configure voice settings for authentic female voice
    if (selectedVoice) {
        currentUtterance.voice = selectedVoice;
    }
    
    // Optimize settings for natural female speech
    currentUtterance.rate = 0.85;  // Slightly slower for clarity
    currentUtterance.pitch = 1.1;  // Slightly higher pitch for feminine tone
    currentUtterance.volume = 0.9; // Good volume level
    
    // Set current playing button
    currentPlayingButton = buttonElement;
    isPlaying = true;
    isPaused = false;
    
    // Update button state to playing
    buttonElement.classList.remove('paused');
    buttonElement.classList.add('playing');
    icon.className = 'fas fa-pause';
    text.textContent = 'Pause';
    
    // Handle speech events
    currentUtterance.onend = function() {
        resetButton(buttonElement);
        currentPlayingButton = null;
        isPlaying = false;
        isPaused = false;
    };
    
    currentUtterance.onerror = function(event) {
        console.error('Speech synthesis error:', event.error);
        resetButton(buttonElement);
        currentPlayingButton = null;
        isPlaying = false;
        isPaused = false;
    };
    
    // Handle pause event (for browsers that support it)
    currentUtterance.onpause = function() {
        buttonElement.classList.remove('playing');
        buttonElement.classList.add('paused');
        icon.className = 'fas fa-play';
        text.textContent = 'Resume';
    };
    
    // Handle resume event (for browsers that support it)
    currentUtterance.onresume = function() {
        buttonElement.classList.remove('paused');
        buttonElement.classList.add('playing');
        icon.className = 'fas fa-pause';
        text.textContent = 'Pause';
    };
    
    synthesis.speak(currentUtterance);
}

// Reset button to initial state
function resetButton(buttonElement) {
    const icon = buttonElement.querySelector('i');
    const text = buttonElement.querySelector('span');
    
    buttonElement.classList.remove('playing', 'paused');
    icon.className = 'fas fa-play';
    text.textContent = 'Play';
}
