/**
 * Rayalaseema Chef - Interactive Chatbot for Authentic Andhra Recipes
 * 
 * This chatbot provides an interactive experience for learning traditional
 * Rayalaseema cuisine with voice support and smart recipe management.
 * 
 * Features:
 * - 24+ authentic Rayalaseema recipes
 * - Voice recognition and text-to-speech
 * - Recipe scaling and favorites
 * - Ingredient-based search
 * - Mobile-optimized interface
 * 
 * @author Sainath Pulaganti
 * @version 2.0.0
 * @license MIT
 */

// Embedded dishes data to avoid CORS issues
let dishesData = {
  "dishes": [
    {
      "name": "Ragi Sangati",
      "ingredients": ["ragi flour", "water", "salt"],
      "servings": 4,
      "cooking_time": "25 minutes",
      "difficulty": "easy",
      "category": "main course",
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
      "ingredients": ["mutton paya (trotters)", "onions", "ginger-garlic paste", "tomatoes", "red chili powder", "turmeric powder", "coriander powder", "cumin seeds", "bay leaves", "cinnamon", "oil", "salt"],
      "servings": 4,
      "cooking_time": "60 minutes",
      "difficulty": "medium",
      "category": "main course",
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
      "ingredients": ["chicken pieces", "basmati rice", "yogurt", "red chili powder", "turmeric powder", "ghee", "bay leaves", "cinnamon", "cardamom", "cloves", "onions", "whole spices", "salt"],
      "servings": 4,
      "cooking_time": "90 minutes",
      "difficulty": "medium",
      "category": "main course",
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
      "ingredients": ["chicken pieces", "red chili powder", "turmeric powder", "ginger-garlic paste", "black pepper powder", "curry leaves", "green chilies", "oil", "salt"],
      "servings": 4,
      "cooking_time": "40 minutes",
      "difficulty": "easy",
      "category": "main course",
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
      "ingredients": ["horse gram", "cumin seeds", "hing (asafoetida)", "onions", "green chilies", "ginger", "turmeric powder", "ghee", "coriander leaves", "salt"],
      "servings": 4,
      "cooking_time": "35 minutes",
      "difficulty": "easy",
      "category": "soup",
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
      "ingredients": ["okra (bendakaya)", "onions", "ginger-garlic paste", "tamarind extract", "turmeric powder", "red chili powder", "mustard seeds", "cumin seeds", "curry leaves", "oil", "coriander leaves", "salt"],
      "servings": 4,
      "cooking_time": "30 minutes",
      "difficulty": "easy",
      "category": "vegetarian",
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
      "ingredients": ["gongura leaves (sorrel leaves)", "red chilies", "garlic", "green chilies", "mustard seeds", "curry leaves", "oil", "salt"],
      "servings": 6,
      "cooking_time": "20 minutes",
      "difficulty": "easy",
      "category": "chutney",
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
      "ingredients": ["chicken pieces", "turmeric powder", "sesame oil", "mustard seeds", "cumin seeds", "curry leaves", "onions", "ginger-garlic paste", "tamarind extract", "red chili powder", "coriander powder", "tomatoes", "coriander leaves", "salt"],
      "servings": 4,
      "cooking_time": "45 minutes",
      "difficulty": "medium",
      "category": "main course",
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
      "ingredients": ["whole green gram", "ginger", "green chilies", "onions", "coriander leaves", "cumin seeds", "oil", "salt"],
      "servings": 4,
      "cooking_time": "30 minutes",
      "difficulty": "easy",
      "category": "breakfast",
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
      "ingredients": ["mutton pieces", "yogurt", "red chili powder", "turmeric powder", "sesame oil", "bay leaves", "cinnamon", "cardamom", "onions", "ginger-garlic paste", "tomatoes", "mint leaves", "coriander leaves", "salt"],
      "servings": 4,
      "cooking_time": "75 minutes",
      "difficulty": "medium",
      "category": "main course",
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
      "ingredients": ["chicken pieces", "turmeric powder", "coconut oil", "curry leaves", "dry red chilies", "onions", "ginger-garlic paste", "tomatoes", "coconut milk", "red chili powder", "coriander powder", "coriander leaves", "salt"],
      "servings": 4,
      "cooking_time": "45 minutes",
      "difficulty": "medium",
      "category": "main course",
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
      "ingredients": ["baby brinjals", "peanuts", "sesame seeds", "coriander seeds", "red chilies", "tamarind", "jaggery", "mustard seeds", "curry leaves", "oil", "salt"],
      "servings": 4,
      "cooking_time": "40 minutes",
      "difficulty": "medium",
      "category": "vegetarian",
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
      "ingredients": ["fish pieces", "turmeric powder", "onions", "mustard seeds", "curry leaves", "tamarind extract", "red chili powder", "tomatoes", "oil", "coriander leaves", "salt"],
      "servings": 4,
      "cooking_time": "35 minutes",
      "difficulty": "easy",
      "category": "main course",
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
      "ingredients": ["toor dal", "turmeric powder", "tamarind", "ghee", "mustard seeds", "cumin seeds", "curry leaves", "dry red chilies", "hing (asafoetida)", "onions", "green chilies", "coriander leaves", "salt"],
      "servings": 4,
      "cooking_time": "30 minutes",
      "difficulty": "easy",
      "category": "dal",
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
      "ingredients": ["rice flour", "ghee", "powdered sugar"],
      "servings": 6,
      "cooking_time": "45 minutes",
      "difficulty": "hard",
      "category": "dessert",
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
      "name": "Natukodi Pulusu",
      "ingredients": ["country chicken pieces", "turmeric powder", "sesame oil", "curry leaves", "dry red chilies", "onions", "ginger-garlic paste", "tamarind extract", "red chili powder", "coriander powder", "tomatoes", "coriander leaves", "salt"],
      "servings": 4,
      "cooking_time": "55 minutes",
      "difficulty": "medium",
      "category": "main course",
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
      "ingredients": ["toor dal", "red chilies", "tamarind extract", "mustard seeds", "curry leaves", "hing (asafoetida)", "oil", "salt"],
      "servings": 6,
      "cooking_time": "25 minutes",
      "difficulty": "easy",
      "category": "chutney",
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
      "name": "Gongura Mutton",
      "ingredients": ["gongura leaves (sorrel leaves)", "mutton pieces", "turmeric powder", "oil", "red chilies", "ginger-garlic paste", "red chili powder", "coriander powder", "salt"],
      "servings": 4,
      "cooking_time": "70 minutes",
      "difficulty": "medium",
      "category": "main course",
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
      "ingredients": ["black sesame seeds", "red chilies", "hing (asafoetida)", "salt"],
      "servings": 8,
      "cooking_time": "20 minutes",
      "difficulty": "easy",
      "category": "condiment",
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
      "ingredients": ["chicken pieces", "coriander seeds", "cumin seeds", "red chilies", "coconut", "turmeric powder", "coconut oil", "curry leaves", "onions", "ginger-garlic paste", "coriander leaves", "salt"],
      "servings": 4,
      "cooking_time": "50 minutes",
      "difficulty": "medium",
      "category": "main course",
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
      "ingredients": ["toor dal", "turmeric powder", "tamarind", "oil", "mustard seeds", "cumin seeds", "curry leaves", "dry red chilies", "hing (asafoetida)", "onions", "green chilies", "red chili powder", "salt"],
      "servings": 4,
      "cooking_time": "35 minutes",
      "difficulty": "easy",
      "category": "dal",
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
      "ingredients": ["basmati rice", "milk", "jaggery", "ghee", "cashews", "raisins", "cardamom powder", "salt"],
      "servings": 6,
      "cooking_time": "45 minutes",
      "difficulty": "easy",
      "category": "dessert",
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
      "ingredients": ["rice", "jaggery", "sesame seeds", "oil"],
      "servings": 8,
      "cooking_time": "90 minutes",
      "difficulty": "hard",
      "category": "dessert",
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
      "ingredients": ["broken wheat", "jaggery", "ghee", "cashews", "raisins", "cardamom powder", "salt"],
      "servings": 6,
      "cooking_time": "40 minutes",
      "difficulty": "easy",
      "category": "dessert",
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
      "ingredients": ["refined flour", "oil", "fresh coconut", "jaggery", "cardamom powder"],
      "servings": 8,
      "cooking_time": "60 minutes",
      "difficulty": "medium",
      "category": "dessert",
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
      "ingredients": ["sesame seeds", "jaggery", "cardamom powder", "ghee"],
      "servings": 8,
      "cooking_time": "30 minutes",
      "difficulty": "easy",
      "category": "dessert",
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
      "ingredients": ["jaggery", "grated coconut", "cardamom powder", "rice flour", "salt", "oil"],
      "servings": 6,
      "cooking_time": "35 minutes",
      "difficulty": "medium",
      "category": "dessert",
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
      "ingredients": ["vermicelli", "milk", "jaggery", "coconut milk", "ghee", "cashews", "raisins", "almonds", "cardamom powder"],
      "servings": 6,
      "cooking_time": "30 minutes",
      "difficulty": "easy",
      "category": "dessert",
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
      "ingredients": ["full-fat milk", "sugar", "jaggery", "cardamom powder", "ghee", "almonds", "pistachios"],
      "servings": 4,
      "cooking_time": "60 minutes",
      "difficulty": "medium",
      "category": "dessert",
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
let playbackStartTime = 0;
let currentPlaybackPosition = 0;
let currentTextSegments = [];
let currentSegmentIndex = 0;
let segmentStartTimes = [];

// Check if device is mobile for optimized settings
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
           (window.innerWidth <= 768);
}

// Initialize the chatbot
document.addEventListener('DOMContentLoaded', function() {
    initializeSpeechRecognition();
    setupEventListeners();
    loadVoices();
    initializeMobileAudio();
});

// Initialize mobile audio support
function initializeMobileAudio() {
    // Enable audio on first user interaction (required for mobile)
    const enableAudio = () => {
        if (synthesis && synthesis.cancel) {
            synthesis.cancel();
        }
        // Remove the event listeners once audio is enabled
        document.removeEventListener('touchstart', enableAudio);
        document.removeEventListener('click', enableAudio);
    };
    
    // Add event listeners for first interaction
    document.addEventListener('touchstart', enableAudio, { once: true });
    document.addEventListener('click', enableAudio, { once: true });
}

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
        populateVoiceSelect(voices);
        return;
    }
    
    // Final fallback - use default
    selectedVoice = voices[0];
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
        // Hide voice button if speech recognition is not supported
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
    
    // Help responses - enhanced with new features
    if (lowerMessage.includes('help') || lowerMessage.includes('what can you do') || lowerMessage.includes('what do you know')) {
        return 'I can help you with traditional Rayalaseema recipes! You can ask me:\n\n🍛 **Recipe Search:**\n• "How to make [dish name]?"\n• "Tell me about [dish name]"\n• "Recipe for [dish name]"\n\n🥗 **Ingredient Search:**\n• "Dishes with chicken"\n• "Recipes with coconut"\n• "What can I make with rice?"\n\n⭐ **Favorites:**\n• "Show my favorites"\n• "Add to favorites"\n• "Remove from favorites"\n\n📏 **Recipe Scaling:**\n• "Scale recipe for 6 people"\n• "Double the recipe"\n• "Half the ingredients"\n\n🔍 **Quick Filters:**\n• "Easy recipes"\n• "Desserts"\n• "Quick dishes under 30 minutes"\n\nI know about dishes like Ragi Sangati, Paya Curry, Gongura Mutton, Rayalaseema Chicken Fry, Ariselu, Bellam Paravannam, and many more!';
    }

    // Phase 1 Feature Handlers
    
    // Favorites management
    if (lowerMessage.includes('favorite') || lowerMessage.includes('favourite')) {
        if (lowerMessage.includes('show') || lowerMessage.includes('list') || lowerMessage.includes('my')) {
            return formatFavoritesList();
        }
        if (lowerMessage.includes('add') || lowerMessage.includes('save')) {
            return 'To add a recipe to favorites, click the ❤️ button on any recipe I share with you!';
        }
    }
    
    // Ingredient-based search
    if (lowerMessage.includes('ingredient') || lowerMessage.includes('with ') || lowerMessage.includes('using ')) {
        const ingredientMatches = lowerMessage.match(/(?:ingredient|with|using)\s+(.+?)(?:\?|$|and|or)/);
        if (ingredientMatches) {
            return formatIngredientSearchResults(ingredientMatches[1]);
        }
    }
    
    // Recipe scaling
    const scaleMatch = lowerMessage.match(/(?:scale|for|serves?)\s+(\d+)\s*(?:people|person|serving)/);
    if (scaleMatch || lowerMessage.includes('double') || lowerMessage.includes('half')) {
        return 'To scale a recipe, first ask for the recipe, then I\'ll provide scaling options. Try "How to make Ragi Sangati for 6 people?"';
    }
    
    // Enhanced search with filters
    const searchResults = enhancedSearch(lowerMessage);
    if (searchResults.ingredient.length > 0 || searchResults.category.length > 0 || 
        searchResults.difficulty.length > 0 || searchResults.time.length > 0) {
        return formatEnhancedSearchResults(searchResults, lowerMessage);
    }
    
    // Check for servings in the original query
    const servingsMatch = lowerMessage.match(/(?:for|serves?)\s+(\d+)\s*(?:people|person|serving)/);
    
    // Search for matching dish
    const matchedDish = findMatchingDish(lowerMessage);
    
    if (matchedDish) {
        if (servingsMatch) {
            const newServings = parseInt(servingsMatch[1]);
            const scaledDish = scaleRecipe(matchedDish, newServings);
            return formatRecipeResponse(scaledDish, true);
        } else {
            return formatRecipeResponse(matchedDish);
        }
    }
    
    // List all dishes if asked
    if (lowerMessage.includes('list') || lowerMessage.includes('all dishes') || lowerMessage.includes('what dishes')) {
        return formatDishList();
    }
    
    // Default response for unmatched queries
    return `I couldn't find information about that dish. Here are some popular Rayalaseema dishes I know about:\n\n${getPopularDishes()}\n\nTry asking "How to make Ariselu?" or "Tell me about Bellam Paravannam" for sweets!\n\n💡 **New Features:**\n• Search by ingredients: "Dishes with chicken"\n• Filter by difficulty: "Easy recipes"\n• Scale recipes: "Ragi Sangati for 6 people"`;
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
function formatRecipeResponse(dish, isScaled = false) {
    let response = `🍛 **${dish.name}**`;
    
    // Add scaling info if applicable
    if (isScaled && dish.scaledFrom) {
        response += ` (Scaled from ${dish.scaledFrom} to ${dish.servings} servings)`;
    }
    
    response += '\n\n';
    
    // Add recipe metadata
    if (dish.difficulty || dish.cooking_time || dish.category) {
        response += '📊 **Recipe Info:**\n';
        if (dish.difficulty) response += `• Difficulty: ${dish.difficulty}\n`;
        if (dish.cooking_time) response += `• Cooking Time: ${dish.cooking_time}\n`;
        if (dish.category) response += `• Category: ${dish.category}\n`;
        if (dish.servings) response += `• Servings: ${dish.servings}\n`;
        response += '\n';
    }
    
    response += `${dish.how_to_prepare}\n\n`;
    
    // Add ingredients if available
    if (dish.ingredients && dish.ingredients.length > 0) {
        response += '🛒 **Ingredients:**\n';
        dish.ingredients.forEach(ingredient => {
            response += `• ${ingredient}\n`;
        });
        response += '\n';
    }
    
    response += '**Step-by-step Instructions:**\n';
    
    dish.stepwise_instructions.forEach((step, index) => {
        response += `${index + 1}. ${step}\n`;
    });
    
    response += `\n✨ Enjoy your delicious ${dish.name}!`;
    
    // Add interactive options
    response += '\n\n💡 **Quick Actions:**\n';
    response += `• Ask "Scale ${dish.name} for X people" to adjust servings\n`;
    response += `• Click the ❤️ below to add to favorites\n`;
    response += `• Ask about similar dishes or ingredients used`;
    
    return response;
}

// Formatting functions for Phase 1 features

function formatFavoritesList() {
    const favorites = getFavoriteRecipes();
    
    if (favorites.length === 0) {
        return '💔 You haven\'t added any recipes to your favorites yet!\n\nTo add favorites, click the ❤️ button on any recipe I share with you.';
    }
    
    let response = `⭐ **Your Favorite Recipes (${favorites.length}):**\n\n`;
    
    favorites.forEach((dish, index) => {
        response += `${index + 1}. **${dish.name}**\n`;
        if (dish.difficulty) response += `   Difficulty: ${dish.difficulty}\n`;
        if (dish.cooking_time) response += `   Time: ${dish.cooking_time}\n`;
        response += '\n';
    });
    
    response += 'Ask me about any of these dishes for the complete recipe!';
    return response;
}

function formatIngredientSearchResults(ingredient) {
    const matches = searchByIngredients(ingredient);
    
    if (matches.length === 0) {
        return `🔍 I couldn't find any recipes using "${ingredient}". Try searching for common ingredients like chicken, rice, coconut, or lentils.`;
    }
    
    let response = `🥗 **Recipes using "${ingredient}" (${matches.length} found):**\n\n`;
    
    matches.slice(0, 6).forEach((match, index) => {
        const dish = match.dish;
        response += `${index + 1}. **${dish.name}** (${Math.round(match.matchScore * 100)}% match)\n`;
        if (dish.difficulty) response += `   Difficulty: ${dish.difficulty}`;
        if (dish.cooking_time) response += ` | Time: ${dish.cooking_time}`;
        response += '\n\n';
    });
    
    response += `Ask me "How to make [dish name]?" for the complete recipe!`;
    return response;
}

function formatEnhancedSearchResults(results, originalQuery) {
    let response = `🔍 **Search Results for "${originalQuery}":**\n\n`;
    let hasResults = false;
    
    if (results.ingredient.length > 0) {
        response += `📝 **By Ingredients (${results.ingredient.length}):**\n`;
        results.ingredient.slice(0, 3).forEach(match => {
            response += `• ${match.dish.name}\n`;
        });
        response += '\n';
        hasResults = true;
    }
    
    if (results.category.length > 0) {
        response += `🏷️ **By Category (${results.category.length}):**\n`;
        results.category.slice(0, 3).forEach(dish => {
            response += `• ${dish.name}\n`;
        });
        response += '\n';
        hasResults = true;
    }
    
    if (results.difficulty.length > 0) {
        response += `⭐ **By Difficulty (${results.difficulty.length}):**\n`;
        results.difficulty.slice(0, 3).forEach(dish => {
            response += `• ${dish.name}\n`;
        });
        response += '\n';
        hasResults = true;
    }
    
    if (results.time.length > 0) {
        response += `⏱️ **By Cooking Time (${results.time.length}):**\n`;
        results.time.slice(0, 3).forEach(dish => {
            response += `• ${dish.name} (${dish.cooking_time})\n`;
        });
        response += '\n';
        hasResults = true;
    }
    
    if (!hasResults) {
        return `🔍 No specific results found for "${originalQuery}". Try asking about specific dishes or ingredients!`;
    }
    
    response += `Ask me about any dish for the complete recipe!`;
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

// Add bot message to chat with enhanced features
function addBotMessage(message) {
    const chatMessages = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message bot-message';
    
    // Generate unique ID for this message
    const messageId = 'msg-' + Date.now();
    
    // Format message with proper styling
    const formattedMessage = formatBotMessage(message);
    
    // Check if this message contains a recipe (for favorite button)
    const isRecipe = message.includes('Step-by-step Instructions:') || message.includes('🍛 **');
    let dishName = null;
    
    if (isRecipe) {
        const dishMatch = message.match(/🍛 \*\*(.+?)\*\*/);
        if (dishMatch) {
            dishName = dishMatch[1].replace(/ \(Scaled.*\)/, ''); // Remove scaling info from dish name
        }
    }
    
    let actionButtons = `
        <button class="play-pause-btn" onclick="togglePlayPause('${messageId}', this)" data-message="${encodeURIComponent(message)}">
            <i class="fas fa-play"></i>
            <span>Play</span>
        </button>
    `;
    
    // Add favorite button for recipes
    if (dishName) {
        const isFav = isFavorite(dishName);
        actionButtons += `
            <button class="favorite-btn ${isFav ? 'active' : ''}" onclick="handleFavoriteToggle('${dishName}', this)" data-dish="${dishName}" title="${isFav ? 'Remove from favorites' : 'Add to favorites'}">
                ${isFav ? '<i class="fas fa-heart"></i>' : '<i class="far fa-heart"></i>'}
            </button>
        `;
    }
    
    messageDiv.innerHTML = `
        <div class="message-avatar">
            <i class="fas fa-chef-hat"></i>
        </div>
        <div class="message-content">
            ${formattedMessage}
            <div class="message-actions">
                ${actionButtons}
            </div>
        </div>
    `;
    
    messageDiv.id = messageId;
    chatMessages.appendChild(messageDiv);
    
    // Add timer suggestions if recipe instructions contain timing information
    addTimerSuggestions(message);
    
    scrollToBottom();
}

// Handle favorite button toggle
function handleFavoriteToggle(dishName, buttonElement) {
    const wasAdded = toggleFavorite(dishName);
    
    // Update button appearance  
    buttonElement.innerHTML = wasAdded ? '<i class="fas fa-heart"></i>' : '<i class="far fa-heart"></i>';
    buttonElement.classList.toggle('active', wasAdded);
    buttonElement.title = wasAdded ? 'Remove from favorites' : 'Add to favorites';
    
    // Show feedback message (but avoid infinite loop)
    setTimeout(() => {
        const feedback = wasAdded ? `❤️ Added "${dishName}" to your favorites!` : `💔 Removed "${dishName}" from your favorites.`;
        const chatMessages = document.getElementById('chatMessages');
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message bot-message';
        messageDiv.innerHTML = `
            <div class="message-avatar">
                <i class="fas fa-chef-hat"></i>
            </div>
            <div class="message-content">
                <p>${feedback}</p>
            </div>
        `;
        chatMessages.appendChild(messageDiv);
        scrollToBottom();
    }, 100);
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
    
    return `<div>${formatted}</div>`;
}

// Scroll to bottom of chat
function scrollToBottom() {
    const chatMessages = document.getElementById('chatMessages');
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Toggle play/pause for individual messages with smart resume
function togglePlayPause(messageId, buttonElement) {
    const messageText = decodeURIComponent(buttonElement.getAttribute('data-message'));
    const icon = buttonElement.querySelector('i');
    const text = buttonElement.querySelector('span');
    
    // If a different message is playing, stop it first
    if (currentPlayingButton && currentPlayingButton !== buttonElement && isPlaying) {
        synthesis.cancel();
        resetButton(currentPlayingButton);
        // Reset state for new message
        currentPlayingButton = null;
        isPlaying = false;
        isPaused = false;
        currentPlaybackPosition = 0;
        currentTextSegments = [];
        currentSegmentIndex = 0;
    }
    
    // If this is the currently playing message
    if (currentPlayingButton === buttonElement) {
        if (isPlaying && !isPaused) {
            // Currently playing - pause it and track position
            synthesis.cancel();
            isPaused = true;
            isPlaying = false;
            buttonElement.classList.remove('playing');
            buttonElement.classList.add('paused');
            icon.className = 'fas fa-play';
            text.textContent = 'Resume';
            
            // Calculate how much time has elapsed
            const elapsedTime = Date.now() - playbackStartTime;
            currentPlaybackPosition = elapsedTime;
            
            // Store the current segment index for resume
            if (currentTextSegments.length > 0) {
                currentSegmentIndex = getCurrentSegmentIndex(currentTextSegments, elapsedTime);
            }
            
        } else if (isPaused) {
            // Currently paused - resume from where we left off
            isPaused = false;
            resumePlaybackFromPosition(messageText, buttonElement);
        }
        return;
    }
    
    // Start playing new message
    startPlayback(messageText, buttonElement);
}

// Resume playback from stored position with smart segment detection
function resumePlaybackFromPosition(messageText, buttonElement) {
    const icon = buttonElement.querySelector('i');
    const text = buttonElement.querySelector('span');
    
    // Clean text for speech
    const cleanText = messageText
        .replace(/\*\*(.*?)\*\*/g, '$1')
        .replace(/🍛|🍽️|✨|🙏/g, '')
        .replace(/\n/g, '. ');
    
    // Get remaining text from current segment
    let textToSpeak = cleanText;
    if (currentTextSegments.length > 0 && currentSegmentIndex < currentTextSegments.length) {
        // Resume from current segment onwards
        const remainingSegments = currentTextSegments.slice(currentSegmentIndex);
        textToSpeak = remainingSegments.join(' ');
        
        // Ensure proper spacing between sentences
        textToSpeak = textToSpeak.replace(/([.!?])([A-Z])/g, '$1 $2');
    }
    
    // Set button state
    currentPlayingButton = buttonElement;
    isPlaying = true;
    isPaused = false;
    playbackStartTime = Date.now();
    
    // Update button visual state
    buttonElement.classList.remove('paused');
    buttonElement.classList.add('playing');
    icon.className = 'fas fa-pause';
    text.textContent = 'Pause';
    
    // Start speech synthesis
    startSpeechWithText(textToSpeak, buttonElement);
}

// Start speech synthesis with given text
function startSpeechWithText(textToSpeak, buttonElement) {
    // Stop any current playback first
    synthesis.cancel();
    
    // Create new utterance
    currentUtterance = new SpeechSynthesisUtterance(textToSpeak);
    
    // Configure voice settings
    if (selectedVoice) {
        currentUtterance.voice = selectedVoice;
    }
    
    // Optimize settings for mobile and desktop
    if (isMobileDevice()) {
        currentUtterance.rate = 0.8;   // Slower for mobile
        currentUtterance.pitch = 1.1;  // Feminine tone  
        currentUtterance.volume = 1.0; // Full volume
    } else {
        currentUtterance.rate = 0.85;
        currentUtterance.pitch = 1.1;
        currentUtterance.volume = 1.0;
    }
    
    // Event handlers
    currentUtterance.onend = function() {
        resetButton(buttonElement);
        currentPlayingButton = null;
        isPlaying = false;
        isPaused = false;
        playbackStartTime = 0;
        currentPlaybackPosition = 0;
        currentTextSegments = [];
        currentSegmentIndex = 0;
    };
    
    currentUtterance.onerror = function(event) {
        console.error('Speech synthesis error:', event.error);
        resetButton(buttonElement);
        currentPlayingButton = null;
        isPlaying = false;
        isPaused = false;
        playbackStartTime = 0;
        currentPlaybackPosition = 0;
        currentTextSegments = [];
        currentSegmentIndex = 0;
    };
    
    // Start speaking with appropriate delay for mobile
    const delay = isMobileDevice() ? 300 : 100;
    setTimeout(() => {
        synthesis.speak(currentUtterance);
    }, delay);
}

// Helper function to calculate current segment index based on elapsed time
function getCurrentSegmentIndex(segments, elapsedTime) {
    // Estimate speaking rate (characters per millisecond)
    const speakingRate = isMobileDevice() ? 2.5 : 3.0; // chars per second, adjusted for device
    const elapsedSeconds = elapsedTime / 1000;
    const estimatedCharsSpoken = elapsedSeconds * speakingRate;
    
    let charCount = 0;
    for (let i = 0; i < segments.length; i++) {
        charCount += segments[i].length;
        if (charCount >= estimatedCharsSpoken) {
            return Math.max(0, i); // Return current or previous segment
        }
    }
    
    return Math.max(0, segments.length - 1);
}

// Now update the startPlayback function to initialize text segments
function startPlayback(messageText, buttonElement) {
    const icon = buttonElement.querySelector('i');
    const text = buttonElement.querySelector('span');
    
    // Clean text for speech
    const cleanText = messageText
        .replace(/\*\*(.*?)\*\*/g, '$1')
        .replace(/🍛|🍽️|✨|🙏/g, '')
        .replace(/\n/g, '. ');
    
    // Initialize tracking for new message
    currentPlaybackPosition = 0;
    currentTextSegments = segmentTextForResume(cleanText);
    currentSegmentIndex = 0;
    
    // Set button state
    currentPlayingButton = buttonElement;
    isPlaying = true;
    isPaused = false;
    playbackStartTime = Date.now();
    
    // Update button visual state
    buttonElement.classList.remove('paused');
    buttonElement.classList.add('playing');
    icon.className = 'fas fa-pause';
    text.textContent = 'Pause';
    
    // Start playback
    startSpeechWithText(cleanText, buttonElement);
}

// Reset button to initial state
function resetButton(buttonElement) {
    const icon = buttonElement.querySelector('i');
    const text = buttonElement.querySelector('span');
    
    buttonElement.classList.remove('playing', 'paused');
    icon.className = 'fas fa-play';
    text.textContent = 'Play';
}

// Segment text for smart resume functionality
function segmentTextForResume(text) {
    // Simple word-based segmentation for reliable cross-browser performance
    const words = text.split(/\s+/);
    const segments = [];
    
    // Create segments of approximately 15-25 words each
    const segmentSize = 20;
    
    for (let i = 0; i < words.length; i += segmentSize) {
        const segment = words.slice(i, i + segmentSize).join(' ');
        if (segment.trim()) {
            segments.push(segment.trim());
        }
    }
    
    return segments;
}

// Timer functionality (existing code preserved)
let timerInterval = null;
let timerSeconds = 0;
let timerRunning = false;

function setQuickTimer(seconds) {
    timerSeconds = seconds;
    updateTimerDisplay();
    expandTimer();
}

function setCustomTimer() {
    const minutes = parseInt(document.getElementById('customMinutes').value) || 0;
    const seconds = parseInt(document.getElementById('customSeconds').value) || 0;
    
    timerSeconds = (minutes * 60) + seconds;
    
    if (timerSeconds > 0) {
        updateTimerDisplay();
        expandTimer();
        
        // Clear inputs
        document.getElementById('customMinutes').value = '';
        document.getElementById('customSeconds').value = '';
    }
}

function startTimer() {
    if (timerSeconds <= 0) return;
    
    timerRunning = true;
    document.querySelector('.start-btn').style.display = 'none';
    document.querySelector('.pause-btn').style.display = 'inline-block';
    
    timerInterval = setInterval(() => {
        timerSeconds--;
        updateTimerDisplay();
        
        if (timerSeconds <= 0) {
            clearInterval(timerInterval);
            timerCompleted();
        }
    }, 1000);
}

function pauseTimer() {
    timerRunning = false;
    clearInterval(timerInterval);
    document.querySelector('.pause-btn').style.display = 'none';
    document.querySelector('.start-btn').style.display = 'inline-block';
}

function resetTimer() {
    timerRunning = false;
    clearInterval(timerInterval);
    timerSeconds = 0;
    updateTimerDisplay();
    document.querySelector('.pause-btn').style.display = 'none';
    document.querySelector('.start-btn').style.display = 'inline-block';
}

function updateTimerDisplay() {
    const minutes = Math.floor(timerSeconds / 60);
    const seconds = timerSeconds % 60;
    document.getElementById('timerDisplay').textContent = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function timerCompleted() {
    alert('⏰ Timer completed! Your cooking step is ready!');
    
    // Play notification sound if speech synthesis is available
    if (window.speechSynthesis) {
        const utterance = new SpeechSynthesisUtterance('Timer completed! Your cooking step is ready!');
        utterance.rate = 1;
        utterance.pitch = 1;
        if (selectedVoice) {
            utterance.voice = selectedVoice;
        }
        speechSynthesis.speak(utterance);
    }
    
    resetTimer();
}

function toggleTimer() {
    const timer = document.getElementById('cookingTimer');
    const isExpanded = timer.classList.contains('expanded');
    
    if (isExpanded) {
        timer.classList.remove('expanded');
    } else {
        expandTimer();
    }
}

function expandTimer() {
    const timer = document.getElementById('cookingTimer');
    timer.classList.add('expanded');
}

function addTimerSuggestions(messageText) {
    const suggestions = detectTimerInText(messageText);
    
    if (suggestions.length > 0) {
        const chatMessages = document.getElementById('chatMessages');
        const suggestionDiv = document.createElement('div');
        suggestionDiv.className = 'timer-suggestions';
        
        let suggestionHTML = '<div class="timer-suggestion-header">⏰ <strong>Quick Timer Suggestions:</strong></div>';
        suggestionHTML += '<div class="timer-suggestion-buttons">';
        
        suggestions.slice(0, 3).forEach((suggestion, index) => {
            suggestionHTML += `<button class="timer-suggestion-btn" onclick="setQuickTimer(${suggestion.seconds}); addBotMessage('Timer set for ${suggestion.text}! Click Start when ready.');">${suggestion.text}</button>`;
        });
        
        suggestionHTML += '</div>';
        suggestionDiv.innerHTML = suggestionHTML;
        
        chatMessages.appendChild(suggestionDiv);
        scrollToBottom();
    }
}

function detectTimerInText(text) {
    const timePatterns = [
        { pattern: /(\d+)\s*(?:hours?|hrs?)/gi, multiplier: 3600 },
        { pattern: /(\d+)\s*(?:minutes?|mins?)/gi, multiplier: 60 },
        { pattern: /(\d+)\s*(?:seconds?|secs?)/gi, multiplier: 1 }
    ];
    
    const suggestions = [];
    const foundTimes = new Set();
    
    timePatterns.forEach(({ pattern, multiplier }) => {
        let match;
        while ((match = pattern.exec(text)) !== null) {
            const time = parseInt(match[1]);
            const seconds = time * multiplier;
            
            if (seconds >= 30 && seconds <= 10800) { // 30 seconds to 3 hours
                const timeText = match[0].toLowerCase();
                if (!foundTimes.has(seconds)) {
                    foundTimes.add(seconds);
                    suggestions.push({ text: timeText, seconds: seconds });
                }
            }
        }
    });
    
    return suggestions;
}

// Phase 1 Features: Enhanced functionality for better user experience

// Favorites Management
let favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes') || '[]');

// Ingredient-based search functionality
function searchByIngredients(ingredients) {
    const searchTerms = ingredients.toLowerCase().split(/[\s,]+/).filter(term => term.length > 2);
    const matchingDishes = [];
    
    dishesData.dishes.forEach(dish => {
        if (dish.ingredients) {
            const dishIngredients = dish.ingredients.join(' ').toLowerCase();
            let matchCount = 0;
            
            searchTerms.forEach(term => {
                if (dishIngredients.includes(term)) {
                    matchCount++;
                }
            });
            
            if (matchCount > 0) {
                matchingDishes.push({
                    dish: dish,
                    matchScore: matchCount / searchTerms.length,
                    matchCount: matchCount
                });
            }
        }
    });
    
    // Sort by match score (highest first)
    return matchingDishes.sort((a, b) => b.matchScore - a.matchScore || b.matchCount - a.matchCount);
}

// Recipe scaling calculator
function scaleRecipe(dish, newServings) {
    if (!dish.servings || !newServings || newServings <= 0) {
        return dish;
    }
    
    const scaleFactor = newServings / dish.servings;
    const scaledDish = { ...dish };
    
    // Scale ingredients if they exist
    if (dish.ingredients) {
        scaledDish.ingredients = dish.ingredients.map(ingredient => {
            // Extract numbers and scale them
            return ingredient.replace(/(\d+(?:\.\d+)?)\s*(cups?|tbsp|tsp|kg|g|ml|l)/gi, (match, amount, unit) => {
                const scaledAmount = (parseFloat(amount) * scaleFactor).toFixed(1);
                return `${scaledAmount} ${unit}`;
            });
        });
    }
    
    // Scale step-by-step instructions
    scaledDish.stepwise_instructions = dish.stepwise_instructions.map(step => {
        return step.replace(/(\d+(?:\.\d+)?)\s*(cups?|tbsp|tsp|kg|g|ml|l)/gi, (match, amount, unit) => {
            const scaledAmount = (parseFloat(amount) * scaleFactor).toFixed(1);
            return `${scaledAmount} ${unit}`;
        });
    });
    
    scaledDish.servings = newServings;
    scaledDish.scaledFrom = dish.servings;
    
    return scaledDish;
}

// Favorites functionality
function toggleFavorite(dishName) {
    const index = favoriteRecipes.indexOf(dishName);
    
    if (index === -1) {
        favoriteRecipes.push(dishName);
    } else {
        favoriteRecipes.splice(index, 1);
    }
    
    localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
    updateFavoriteButtons();
    return index === -1; // Return true if added, false if removed
}

function isFavorite(dishName) {
    return favoriteRecipes.includes(dishName);
}

function getFavoriteRecipes() {
    return dishesData.dishes.filter(dish => favoriteRecipes.includes(dish.name));
}

function updateFavoriteButtons() {
    // Update all favorite buttons in the DOM
    document.querySelectorAll('.favorite-btn').forEach(btn => {
        const dishName = btn.getAttribute('data-dish');
        const isFav = isFavorite(dishName);
        btn.innerHTML = isFav ? '<i class="fas fa-heart"></i>' : '<i class="far fa-heart"></i>';
        btn.classList.toggle('active', isFav);
    });
}

// Enhanced search and filtering
function filterRecipesByCategory(category) {
    return dishesData.dishes.filter(dish => 
        dish.category && dish.category.toLowerCase().includes(category.toLowerCase())
    );
}

function filterRecipesByDifficulty(difficulty) {
    return dishesData.dishes.filter(dish => 
        dish.difficulty && dish.difficulty.toLowerCase() === difficulty.toLowerCase()
    );
}

function filterRecipesByCookingTime(maxMinutes) {
    return dishesData.dishes.filter(dish => {
        if (!dish.cooking_time) return false;
        
        // Extract minutes from cooking time string
        const timeMatch = dish.cooking_time.match(/(\d+)\s*(?:min|minute)/i);
        if (!timeMatch) return false;
        
        return parseInt(timeMatch[1]) <= maxMinutes;
    });
}

// Enhanced search function that combines multiple criteria
function enhancedSearch(query) {
    const results = {
        exact: [],
        ingredient: [],
        category: [],
        difficulty: [],
        time: []
    };
    
    const lowerQuery = query.toLowerCase();
    
    // Check for ingredient-based search
    if (lowerQuery.includes('ingredient') || lowerQuery.includes('with')) {
        const ingredientMatch = lowerQuery.match(/(?:ingredient|with)\s+(.+)/);
        if (ingredientMatch) {
            results.ingredient = searchByIngredients(ingredientMatch[1]);
        }
    }
    
    // Check for category search
    if (lowerQuery.includes('main course') || lowerQuery.includes('dessert') || lowerQuery.includes('sweet') || lowerQuery.includes('snack')) {
        const categories = ['main course', 'dessert', 'sweet', 'snack'];
        categories.forEach(cat => {
            if (lowerQuery.includes(cat)) {
                results.category = filterRecipesByCategory(cat);
            }
        });
    }
    
    // Check for difficulty search
    if (lowerQuery.includes('easy') || lowerQuery.includes('medium') || lowerQuery.includes('hard')) {
        const difficulties = ['easy', 'medium', 'hard'];
        difficulties.forEach(diff => {
            if (lowerQuery.includes(diff)) {
                results.difficulty = filterRecipesByDifficulty(diff);
            }
        });
    }
    
    // Check for time-based search
    const timeMatch = lowerQuery.match(/(?:under|less than|within)\s+(\d+)\s*(?:min|minute)/);
    if (timeMatch) {
        results.time = filterRecipesByCookingTime(parseInt(timeMatch[1]));
    }
    
    return results;
}
