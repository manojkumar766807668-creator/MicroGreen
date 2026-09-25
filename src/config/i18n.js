import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { contactCopy } from "../data/contactContent";

export const languages = [
  ["en", "English"],
  ["hi", "हिन्दी"],
  ["te", "తెలుగు"]
];
const validLanguages = new Set(languages.map(([code]) => code));

const formHi = { "Name": "नाम", "Phone": "फोन", "Visit type": "विजिट का प्रकार", "Number of people": "लोगों की संख्या", "Preferred date": "पसंदीदा तारीख", "Note": "नोट", "Send on WhatsApp": "WhatsApp पर भेजें", "Enter your name": "अपना नाम दर्ज करें", "Enter a valid 10-digit mobile number": "मान्य 10 अंकों का मोबाइल नंबर दर्ज करें", "Enter a visit type": "विजिट का प्रकार दर्ज करें", "Enter number of people": "लोगों की संख्या दर्ज करें", "Choose a date": "तारीख चुनें", "Opening WhatsApp. Your details are not stored on this site.": "WhatsApp खुल रहा है। आपकी जानकारी इस साइट पर संग्रहीत नहीं होती।" };
const formTe = { "Name": "పేరు", "Phone": "ఫోన్", "Visit type": "సందర్శన రకం", "Number of people": "వ్యక్తుల సంఖ్య", "Preferred date": "ఇష్టమైన తేదీ", "Note": "గమనిక", "Send on WhatsApp": "WhatsAppలో పంపండి", "Enter your name": "మీ పేరును నమోదు చేయండి", "Enter a valid 10-digit mobile number": "చెల్లుబాటు అయ్యే 10 అంకెల మొబైల్ నంబర్ నమోదు చేయండి", "Enter a visit type": "సందర్శన రకాన్ని నమోదు చేయండి", "Enter number of people": "వ్యక్తుల సంఖ్యను నమోదు చేయండి", "Choose a date": "తేదీని ఎంచుకోండి", "Opening WhatsApp. Your details are not stored on this site.": "WhatsApp తెరవబడుతోంది. మీ వివరాలు ఈ సైట్‌లో నిల్వ చేయబడవు." };

const translations = {
  hi: {
    ...formHi, ...contactCopy.hi,
    Home: "होम", Products: "उत्पाद", About: "हमारे बारे में", Contact: "संपर्क", Learn: "जानें", "What are Microgreens": "माइक्रोग्रीन्स क्या हैं", "How We Grow": "हम कैसे उगाते हैं", "How to Eat": "कैसे खाएं", "Find My Microgreens": "माइक्रोग्रीन्स खोजें", "Why Microgreens": "माइक्रोग्रीन्स क्यों", "Farm Visits": "फार्म विजिट",
    "Our greens": "हमारे साग", "Fresh ideas, grown naturally.": "ताज़े विचार, प्राकृतिक रूप से उगाए गए।", "Explore Products": "उत्पाद देखें", "Plan a Farm Visit": "फार्म विजिट की योजना बनाएं", "Plan Your Visit": "अपनी विजिट की योजना बनाएं", "See more products": "और उत्पाद देखें", "See our process": "हमारी प्रक्रिया देखें", "See more ways": "और तरीके देखें", "Read more": "और पढ़ें", "View Product": "उत्पाद देखें", "Share mini's greens": "मिनी ग्रीन्स साझा करें",
    "Why microgreens?": "माइक्रोग्रीन्स क्यों?", "What are microgreens?": "माइक्रोग्रीन्स क्या हैं?", "Our process": "हमारी प्रक्रिया", "From seed to harvest.": "बीज से कटाई तक।", "Make Every Meal A Little Greener": "हर भोजन में थोड़ी हरियाली जोड़ें", "Step inside the farm.": "फार्म के अंदर आइए।", "Fresh microgreens grown with care by mini's greens.": "मिनी ग्रीन्स द्वारा देखभाल से उगाए गए ताज़े माइक्रोग्रीन्स।",
    "Small plants with a lot to say.": "छोटे पौधे, बड़ी बात।", "Fresh ideas, grown naturally.": "ताज़े विचार, प्राकृतिक रूप से उगाए गए।", "Small Plants. Big Nutrition.": "छोटे पौधे। बड़ा पोषण।", "A little green goes a long way": "थोड़ी हरियाली बहुत कुछ कर सकती है", "Storage tips": "भंडारण के सुझाव", "Questions, answered": "आपके सवालों के जवाब", "Grown with intention.": "उद्देश्य के साथ उगाए गए।", "Fresh from the farm": "फार्म से ताज़ा",
    "Search microgreens, flavours or meals": "माइक्रोग्रीन्स, स्वाद या भोजन खोजें", "No greens found.": "कोई साग नहीं मिला।", "Try a different name, flavour, or meal.": "कोई दूसरा नाम, स्वाद या भोजन आज़माएं", "greens found": "साग मिले", "green found": "साग मिला", "Small greens. Big Nutrition.": "छोटे साग। बड़ा पोषण।", "Fresh microgreens grown for everyday meals.": "रोज़मर्रा के भोजन के लिए उगाए गए ताज़े माइक्रोग्रीन्स।", "Small greens.": "छोटे साग।", "Big everyday possibilities.": "रोज़मर्रा की बड़ी संभावनाएं।", "Discover fresh microgreens grown with care.": "देखभाल से उगाए गए ताज़े माइक्रोग्रीन्स खोजें।", "What are microgreens?": "माइक्रोग्रीन्स क्या हैं?", "Tiny plants.": "छोटे पौधे।", "Big stage.": "बड़ा सफर।", "See how a seed becomes a microgreen.": "देखें कि बीज माइक्रोग्रीन कैसे बनता है।", "Farm visits": "फार्म विजिट", "Come see where": "आइए देखें कि", "the greens begin.": "ये साग कहाँ से शुरू होते हैं।", "Plan a visit to the farm.": "फार्म विजिट की योजना बनाएं।", "Tiny Plants, Big Impact": "छोटे पौधे, बड़ा प्रभाव", "Microgreens vs sprouts": "माइक्रोग्रीन्स और स्प्राउट्स", "Tap a side to see the difference.": "अंतर देखने के लिए एक पक्ष चुनें।", "Fresh from the farm": "फार्म से ताज़ा", "Our featured greens.": "हमारे खास साग।", "From seed to harvest": "बीज से कटाई तक", "A little green goes a long way": "थोड़ी हरियाली बहुत कुछ कर सकती है", "Come see where the greens begin.": "आइए देखें कि साग कहाँ से शुरू होते हैं।", "Found something fresh?": "कुछ ताज़ा मिला?", "Questions, answered": "आपके सवालों के जवाब", "Seed": "बीज", "Sprout": "अंकुर", "Microgreen": "माइक्रोग्रीन", "Mature plant": "परिपक्व पौधा", "Where every plant begins.": "जहाँ हर पौधा शुरू होता है।", "The seed wakes up.": "बीज जागता है।", "First leaves open. This is the stage we harvest.": "पहली पत्तियाँ खुलती हैं। इसी अवस्था में कटाई होती है।", "The full-grown vegetable or herb.": "पूरा विकसित सब्ज़ी या जड़ी-बूटी।", "Farming": "खेती", "Nutrition": "पोषण", "Accessibility": "आसानी", "Wellness": "स्वास्थ्य", "Grown with care": "देखभाल से उगाए गए", "Small greens, real food": "छोटे साग, असली भोजन", "Easy to add": "आसानी से जोड़ें", "A fresh everyday choice": "रोज़मर्रा का ताज़ा विकल्प", "Careful growing": "सावधानी से उगाना", "Freshness": "ताज़गी", "Quality": "गुणवत्ता", "Transparency": "पारदर्शिता"
  },
  te: {
    ...formTe, ...contactCopy.te,
    Home: "హోమ్", Products: "ఉత్పత్తులు", About: "మా గురించి", Contact: "సంప్రదించండి", Learn: "తెలుసుకోండి", "What are Microgreens": "మైక్రోగ్రీన్స్ అంటే ఏమిటి", "How We Grow": "మేము ఎలా పెంచుతాము", "How to Eat": "ఎలా తినాలి", "Find My Microgreens": "మైక్రోగ్రీన్స్ కనుగొనండి", "Why Microgreens": "మైక్రోగ్రీన్స్ ఎందుకు", "Farm Visits": "ఫార్మ్ సందర్శనలు",
    "Our greens": "మా ఆకుకూరలు", "Fresh ideas, grown naturally.": "సహజంగా పెంచిన తాజా ఆలోచనలు.", "Explore Products": "ఉత్పత్తులను చూడండి", "Plan a Farm Visit": "ఫార్మ్ సందర్శనను ప్లాన్ చేయండి", "Plan Your Visit": "మీ సందర్శనను ప్లాన్ చేయండి", "See more products": "మరిన్ని ఉత్పత్తులు", "See our process": "మా ప్రక్రియను చూడండి", "See more ways": "మరిన్ని మార్గాలు", "Read more": "మరింత చదవండి", "View Product": "ఉత్పత్తిని చూడండి", "Share mini's greens": "మినీ గ్రీన్స్‌ను పంచుకోండి",
    "Why microgreens?": "మైక్రోగ్రీన్స్ ఎందుకు?", "What are microgreens?": "మైక్రోగ్రీన్స్ అంటే ఏమిటి?", "Our process": "మా ప్రక్రియ", "From seed to harvest.": "విత్తనం నుండి కోత వరకు.", "Make Every Meal A Little Greener": "ప్రతి భోజనంలో కొంచెం పచ్చదనం", "Step inside the farm.": "ఫార్మ్‌లోకి రండి.", "Fresh microgreens grown with care by mini's greens.": "మినీ గ్రీన్స్ శ్రద్ధతో పెంచిన తాజా మైక్రోగ్రీన్స్.",
    "Small plants with a lot to say.": "చిన్న మొక్కలు, పెద్ద సందేశం.", "Fresh ideas, grown naturally.": "సహజంగా పెంచిన తాజా ఆలోచనలు.", "Small Plants. Big Nutrition.": "చిన్న మొక్కలు. గొప్ప పోషణ.", "A little green goes a long way": "కొంచెం పచ్చదనం ఎంతో ఉపయోగకరం", "Storage tips": "నిల్వ సూచనలు", "Questions, answered": "మీ ప్రశ్నలకు సమాధానాలు", "Grown with intention.": "ఉద్దేశంతో పెంచినవి.", "Fresh from the farm": "ఫార్మ్ నుండి తాజా",
    "Search microgreens, flavours or meals": "మైక్రోగ్రీన్స్, రుచులు లేదా భోజనాలను వెతకండి", "No greens found.": "ఆకుకూరలు కనిపించలేదు.", "Try a different name, flavour, or meal.": "వేరే పేరు, రుచి లేదా భోజనాన్ని ప్రయత్నించండి", "greens found": "ఆకుకూరలు దొరికాయి", "green found": "ఆకుకూర దొరికింది", "Small greens. Big Nutrition.": "చిన్న ఆకుకూరలు. గొప్ప పోషణ.", "Fresh microgreens grown for everyday meals.": "రోజువారీ భోజనం కోసం పెంచిన తాజా మైక్రోగ్రీన్స్.", "Small greens.": "చిన్న ఆకుకూరలు.", "Big everyday possibilities.": "రోజువారీ పెద్ద అవకాశాలు.", "Discover fresh microgreens grown with care.": "శ్రద్ధతో పెంచిన తాజా మైక్రోగ్రీన్స్‌ను కనుగొనండి.", "What are microgreens?": "మైక్రోగ్రీన్స్ అంటే ఏమిటి?", "Tiny plants.": "చిన్న మొక్కలు.", "Big stage.": "పెద్ద దశ.", "See how a seed becomes a microgreen.": "విత్తనం మైక్రోగ్రీన్‌గా ఎలా మారుతుందో చూడండి.", "Farm visits": "ఫార్మ్ సందర్శనలు", "Come see where": "ఇవి ఎక్కడ మొదలవుతాయో", "the greens begin.": "చూడటానికి రండి.", "Plan a visit to the farm.": "ఫార్మ్ సందర్శనను ప్లాన్ చేయండి.", "Tiny Plants, Big Impact": "చిన్న మొక్కలు, పెద్ద ప్రభావం", "Microgreens vs sprouts": "మైక్రోగ్రీన్స్ మరియు మొలకలు", "Tap a side to see the difference.": "తేడా చూడటానికి ఒక వైపు ఎంచుకోండి.", "Our featured greens.": "మా ప్రత్యేక ఆకుకూరలు.", "From seed to harvest": "విత్తనం నుండి కోత వరకు", "A little green goes a long way": "కొంచెం పచ్చదనం ఎంతో ఉపయోగకరం", "Come see where the greens begin.": "ఆకుకూరలు ఎక్కడ మొదలవుతాయో చూడటానికి రండి.", "Found something fresh?": "ఏదైనా తాజాది దొరికిందా?", "Questions, answered": "మీ ప్రశ్నలకు సమాధానాలు", "Seed": "విత్తనం", "Sprout": "మొలక", "Microgreen": "మైక్రోగ్రీన్", "Mature plant": "పెరిగిన మొక్క", "Where every plant begins.": "ప్రతి మొక్క ప్రారంభమయ్యే స్థలం.", "The seed wakes up.": "విత్తనం మేల్కొంటుంది.", "First leaves open. This is the stage we harvest.": "మొదటి ఆకులు తెరుచుకుంటాయి. ఈ దశలో కోస్తాము.", "The full-grown vegetable or herb.": "పూర్తిగా పెరిగిన కూరగాయ లేదా మూలిక.", "Farming": "సాగు", "Nutrition": "పోషణ", "Accessibility": "సులభత", "Wellness": "ఆరోగ్యం", "Grown with care": "శ్రద్ధతో పెంచినవి", "Small greens, real food": "చిన్న ఆకుకూరలు, నిజమైన ఆహారం", "Easy to add": "సులభంగా కలపండి", "A fresh everyday choice": "రోజువారీ తాజా ఎంపిక", "Careful growing": "జాగ్రత్తగా సాగు", "Freshness": "తాజాదనం", "Quality": "నాణ్యత", "Transparency": "పారదర్శకత"
  }
};

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    const saved = localStorage.getItem("language");
    return validLanguages.has(saved) ? saved : "en";
  });
  const setLanguage = (next) => setLanguageState(validLanguages.has(next) ? next : "en");
  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.lang = language;
  }, [language]);
  const value = useMemo(() => ({ language, setLanguage, t: (text) => translations[language]?.[text] || text }), [language]);
  return React.createElement(LanguageContext.Provider, { value }, children);
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}
