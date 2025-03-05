export const services = [
    {
        name: "Myofascial Release",
        description: "Yoga for your fascia. It’s all about releasing tension, boosting flexibility, and giving those stubborn knots the boot. Perfect for anyone who feels like their muscles have turned into cement."
    },
    {
        name: "Aromatherapy",
        description: "A love letter to your senses. Imagine being enveloped in a cloud of essential oils, each one chosen to melt away stress and transport you to a blissful oasis. It's the perfect blend of science and sensuality."
    },
    {
        name: "Hot Stones",
        description: "Nature’s heating pads, but better. These smooth, heated stones glide over your skin, melting away tension and stress. It’s the perfect way to warm up and unwind, all at once."
    },
    {
        name: "Cupping",
        description: "Like a gentle hug for your muscles. This ancient technique uses suction to increase blood flow, reduce pain, and leave you feeling rejuvenated. It’s a little bit of magic with a whole lot of benefits."
    },
    {
        name: "Prenatal",
        description: "The ultimate treat for expecting moms. It’s designed to ease the aches and pains of pregnancy while providing a relaxing escape. Think of it as a much-needed pit stop on the road to motherhood."
    },
    {
        name: "Therapeutic",
        description: "Your go-to for serious relaxation and relief. Whether you’re dealing with chronic pain or just need a break from the daily grind, this tailored treatment is all about addressing your specific needs."
    },
    {
        name: "Craniosacral",
        description: "Craniosacral therapy is like hitting the reset button for your nervous system. It’s a gentle, hands-on treatment that helps relieve tension and improve your body’s natural healing abilities. Perfect for those days when you need a total reboot."
    },
    {
        name: "Lymphatic Drainage",
        description: "Your detox BFF. This light, rhythmic massage helps flush out toxins, reduce swelling, and boost your immune system. It’s like a spring cleaning for your body, leaving you feeling fresh and fabulous."
    },
    {
        name: "Trigger Point",
        description: "Trigger point therapy is all about targeting those pesky knots that cause pain and discomfort. It’s a focused, therapeutic technique that zeroes in on problem areas, providing relief and restoring balance. Say goodbye to tension headaches and sore shoulders."
    },
    {
        name: "Neuromuscular",
        description: "Neuromuscular therapy is the detective of the massage world. It investigates and treats the root causes of chronic pain, using precise pressure and techniques to restore balance and function. Ideal for those who need a deep dive into muscle relief."
    },
    {
        name: "Deep Tissue",
        description: "A workout for your muscles, but without the sweat. It targets deeper layers of muscle and connective tissue to relieve chronic aches and pains. It’s intense, effective, and oh-so-satisfying."
    },
    {
        name: "Sports Massage",
        description: "Helping you stay at the top of your game. It’s designed to enhance athletic performance, prevent injuries, and speed up recovery. Whether you’re a weekend warrior or a pro athlete, this massage has got your back."
    }
] as const;


  export const rates = [
    {
      rate: "$90",
      duration: "60 minutes",
      description:
        "A personalized one-hour bodywork session, perfectly tailored to you. Prior to your session, we'll discuss your needs and preferences. Discover a customized wellness journey that prioritizes your well-being.",
      card: "./assets/slc_rates60.png",
    },
    {
      rate: "$105",
      duration: "90 minutes",
      description:
        "Personalized bodywork, tailored to your unique needs.",
      card: "./assets/slc_rates_075.png",
    },
    {
      rate: "$120",
      duration: "90 minutes",
      description:
        "90-minute customized bodywork and massage treatment designed to meet your unique needs. I will personalize the session based on your preferences and requirements, ensuring a relaxing and rejuvenating experience. Schedule your appointment today!",
      card: "./assets/slc_rates90.png",
    },
    {
      rate: "$160",
      duration: "120 minutes",
      description:
        "Indulge in a comprehensive TWO-HOUR customized bodywork session, tailored to address your unique needs and preferences.",
      card: "./assets/slc_rates_120.png",
    },
  ] as const;

export const RateCards = [
    "/assets/slc_rate060.png",
    "/assets/slc_rates_075.png",
    "/assets/slc_rate090.png",
    "/assets/slc_rates_120.png",
  ];

export const hours = [
    {
        day: "Monday",
        start: "9:00 AM",
        end: "- 3:00 PM",
    },
    {
        day: "Tuesday",
        start: "9:00 AM",
        end: "- 3:00 PM",
    },
    {
        day: "Wednesday",
        start: "11:00 AM",
        end: "- 5:00 PM",
    },
    {
        day: "Thursday",
        start: " C L O S E D ",
        end: "",
    },
    {
        day: "Friday",
        start: "10:00 AM",
        end: "- 4:00 PM",
    },
    {
        day: "Saturday",
        start: " C L O S E D ",
        end: " ",
    },
    {
        day: "Sunday",
        start: "9:00 AM",
        end: "- 3:00 PM",
    },
] as const;

export const location = {
    street: "603 S. 9th Street",
    city: "Wilmington",
    state: "NC",
    zip: "28401",
}; 

export const tel = {
    tel: "1-949-636-6227"
}

export const email = {
    email: "selfloveclubmassage@gmail.com"
}