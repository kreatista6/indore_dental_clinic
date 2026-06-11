import { Service } from "@/types";

export const SERVICES_DATA: Service[] = [
  {
    slug: "dental-implants",
    title: "Fixed Crowns & Bridges with Dental Implants",
    shortDescription: "Permanent fixed crowns and bridges anchored on dental implants — restoring your smile with strength, stability, and a completely natural look.",
    description: "Fixed crowns and bridges anchored on dental implants are the gold standard for replacing missing teeth. Unlike removable dentures, these prosthetics are permanently secured onto titanium implant roots — giving you teeth that look, feel, and function exactly like natural ones. A single implant crown replaces one missing tooth, while an implant-supported bridge can replace multiple teeth in a row without disturbing adjacent healthy teeth.\n\nAt Indore Dental Hospital, every implant procedure is performed by Dr. Sugandh Shrivastava, who holds a Postgraduate Certification in Oral Implantology from Israel and has placed hundreds of implants with exceptional success rates. We use internationally certified, premium-grade implant systems and employ advanced 3D imaging (CBCT scans) to plan each placement with surgical precision — minimising risk and maximising long-term outcomes.\n\nPatients choose us for implant-based restorations because of our transparent pricing, pain-managed protocols, and comprehensive aftercare. Whether you need a single crown or a full-mouth fixed bridge, we create a personalised treatment plan so you know exactly what to expect — at every step of your journey.",
    icon: "implant",
    heroImage: "/services/dental-implants.jpg",
    category: "restorative",
    featured: true,
    benefits: [
      "Permanent solution that can last a lifetime",
      "Restores full chewing power",
      "Prevents jawbone loss and facial sagging",
      "Look, feel, and function like natural teeth"
    ],
    procedure: [
      {
        step: 1,
        title: "Comprehensive 3D Consultation",
        description: "We perform a CBCT scan to evaluate your bone density and plan the exact placement digitally."
      },
      {
        step: 2,
        title: "Precision Placement",
        description: "Using computer-guided surgery, the titanium implant is placed into the jawbone painlessly under local anesthesia."
      },
      {
        step: 3,
        title: "Healing & Integration",
        description: "Over a few months, the implant naturally fuses with your jawbone in a process called osseointegration."
      },
      {
        step: 4,
        title: "Custom Crown Placement",
        description: "A custom-crafted, color-matched ceramic crown is attached, completing your new smile."
      }
    ],
    faqs: [
      { question: "What is the cost of dental implants in Indore?", answer: "Dental implant costs in Indore typically range from ₹25,000 to ₹50,000 per tooth, depending on the brand and complexity. At Indore Dental Hospital, we offer transparent pricing with detailed treatment plans before you begin. The final cost includes the implant fixture, abutment, and crown." },
      { question: "Is dental implant surgery painful?", answer: "The procedure is performed under local anesthesia, so you won't feel pain during surgery. Most patients report mild discomfort for 2-3 days afterward, which is easily managed with prescribed painkillers. Many describe it as less painful than a tooth extraction." },
      { question: "How long do dental implants last?", answer: "With proper care and oral hygiene, dental implants can last 20-25 years or even a lifetime. Success rates are above 95% when maintained well. Regular dental check-ups and good brushing habits are essential for longevity." },
      { question: "What is the complete timeline for getting dental implants?", answer: "The entire process takes 3-6 months from implant placement to final crown fitting. After placing the implant, we wait 3-4 months for osseointegration (bone fusion), then attach the abutment and crown. Immediate loading implants can sometimes reduce this timeline." },
      { question: "Am I too old for dental implants?", answer: "Age is rarely a barrier—patients in their 70s and 80s successfully receive implants. The key factors are adequate jawbone density and good overall health. Our dentists at Indore Dental Hospital will assess your bone quality through X-rays and CT scans before recommending treatment." },
      { question: "What happens if I don't have enough bone for implants?", answer: "Bone grafting or sinus lift procedures can create adequate bone volume for implant placement. These add 3-6 months to the treatment timeline but significantly improve success rates. Alternatives like mini implants or removable dentures may also be considered based on your situation." }
    ]
  },
  {
    slug: "root-canal",
    title: "Single-Sitting Root Canal Treatment",
    shortDescription: "Complete root canal therapy in a single, comfortable sitting — save your natural tooth and walk out pain-free on the same day.",
    description: "Root canal treatment has an unfair reputation. The truth is, with modern anaesthesia and advanced techniques, most cases can now be completed comfortably in a single sitting — saving your natural tooth in just one extended appointment. A root canal becomes necessary when the soft tissue (pulp) inside a tooth becomes infected due to deep decay, a crack, or trauma. Left untreated, this infection spreads, causes severe pain, and can result in tooth loss.\n\nAt Indore Dental Hospital, we perform single-sitting root canal treatments using the latest rotary endodontic technology — a motorised, highly precise system that cleans and shapes the root canals faster and more thoroughly than traditional hand files. Combined with our pain-managed protocols and effective local anaesthesia, most patients are genuinely surprised by how comfortable the experience is. Many complete the entire procedure in a single extended appointment and walk out pain-free.\n\nWe always follow root canal treatment with a high-quality ceramic crown to protect and strengthen the treated tooth, ensuring it lasts for many years. Dr. Shrivastava and his team take the time to explain every step of the process, so you arrive informed and leave relieved — with your natural tooth saved.",
    icon: "microscope",
    heroImage: "/services/root-canal.jpg",
    category: "restorative",
    featured: false,
    benefits: [
      "Saves your natural tooth from extraction",
      "Immediately relieves severe tooth pain",
      "Prevents infection from spreading",
      "Completed comfortably in 1-2 visits"
    ],
    procedure: [
      {
        step: 1,
        title: "Profound Anesthesia",
        description: "We ensure the tooth is completely numb using advanced local anesthetics."
      },
      {
        step: 2,
        title: "Infection Removal",
        description: "Using precision rotary instruments, the infected pulp is gently removed from the canals."
      },
      {
        step: 3,
        title: "Sterilization & Sealing",
        description: "The canals are disinfected with specialized solutions and sealed with a biocompatible material."
      },
      {
        step: 4,
        title: "Final Restoration",
        description: "A custom dental crown is placed over the treated tooth to restore its strength and appearance."
      }
    ],
    faqs: [
      { question: "Is root canal treatment very painful?", answer: "Modern root canal treatments are virtually painless due to effective local anesthesia and advanced techniques. Most patients report feeling pressure but no pain during the procedure. The discomfort from the infected tooth before treatment is typically worse than the treatment itself." },
      { question: "What is the cost of root canal treatment in Indore?", answer: "Root canal costs in Indore range from ₹2,000 to ₹8,000 depending on which tooth (front, premolar, or molar) and complexity. This typically includes the root canal procedure, temporary filling, and X-rays. A permanent crown, recommended afterward, costs additional ₹3,000-₹8,000." },
      { question: "How many sittings are required for root canal?", answer: "Most root canals are completed in 1-2 appointments, each lasting 45-90 minutes. Simple cases with no infection can be done in a single visit. Complex cases or teeth with severe infection may need 2-3 visits spaced a week apart for proper cleaning and medication." },
      { question: "Can I avoid root canal treatment and just extract the tooth?", answer: "While extraction is an option, saving your natural tooth through root canal is almost always preferable. Extraction leads to bone loss, shifting teeth, and chewing problems requiring expensive implants or bridges later. Root canal treatment has a 85-95% success rate and preserves your natural tooth structure." },
      { question: "What happens if I delay or avoid root canal treatment?", answer: "Delaying treatment allows infection to spread, causing severe pain, swelling, abscess formation, and potential bone loss. The infection can enter your bloodstream and affect overall health. What could have been a simple root canal may progress to requiring extraction or more complex surgical procedures." },
      { question: "How long does a root canal-treated tooth last?", answer: "A properly treated tooth with a crown can last 10-15 years or even a lifetime with good care. Success depends on getting a permanent crown within 2-3 weeks of root canal, maintaining oral hygiene, and regular dental check-ups. At Indore Dental Hospital, we use rotary endodontics for better cleaning and higher success rates." }
    ]
  },
  {
    slug: "teeth-whitening",
    title: "Teeth Stain Removal with Professional Teeth Whitening",
    shortDescription: "Professionally remove deep-set stains and discolouration with clinical-grade whitening — noticeably brighter teeth in as little as one visit.",
    description: "Teeth naturally accumulate stains over time from tea, coffee, wine, tobacco, and certain foods — making even the healthiest smiles look dull or discoloured. Professional teeth whitening is the safest and most effective way to remove these deep-set stains, delivering results that are significantly better than any over-the-counter whitening product.\n\nAt Indore Dental Hospital, we offer in-clinic power whitening using clinically approved, prescription-strength whitening agents that are activated to lift deep stains and brighten your enamel by several shades in a single session. For patients who prefer a more gradual approach, we also offer custom take-home whitening kits with professional-grade trays moulded to your teeth for even, comfortable results.\n\nAll our whitening treatments are supervised by Dr. Shrivastava to ensure your enamel is protected and your results are consistent. We also provide guidance on post-whitening care to extend the brightness of your smile for as long as possible. Because a whiter smile isn't just cosmetic — it's a confidence boost that shows the moment you walk into a room.",
    icon: "sun",
    heroImage: "/services/teeth-whitening.jpg",
    category: "cosmetic",
    featured: false,
    benefits: [
      "Instant results (up to 8 shades whiter in one visit)",
      "Safe for enamel under professional supervision",
      "Minimal to no sensitivity",
      "Removes deep, stubborn stains"
    ],
    procedure: [
      {
        step: 1,
        title: "Shade Assessment",
        description: "We determine your current tooth shade and discuss your desired results."
      },
      {
        step: 2,
        title: "Gum Protection",
        description: "A protective barrier is carefully applied to your gums to prevent any irritation."
      },
      {
        step: 3,
        title: "Whitening Gel Application",
        description: "Clinical-grade whitening gel is applied to the teeth and activated with a specialized LED light."
      },
      {
        step: 4,
        title: "Final Polish",
        description: "After 3-4 cycles of 15 minutes each, the gel is removed, and teeth are polished and treated for sensitivity."
      }
    ],
    faqs: [
      { question: "What is the cost of teeth whitening in Indore?", answer: "Professional in-office teeth whitening in Indore costs between ₹8,000 to ₹15,000 per session. Take-home whitening kits range from ₹5,000 to ₹10,000. Results from professional treatments are significantly better and safer than over-the-counter products." },
      { question: "Is teeth whitening safe for enamel?", answer: "Professional teeth whitening is safe when done under dental supervision and doesn't damage enamel. You may experience temporary sensitivity for 24-48 hours, which resolves on its own. At Indore Dental Hospital, we use clinically approved whitening agents with proper concentration to ensure safety." },
      { question: "How many shades whiter will my teeth become?", answer: "Most patients see results of 3-8 shades lighter after professional whitening, depending on original tooth color and staining type. Results vary individually—yellow-toned teeth typically whiten better than grey-toned teeth. A consultation helps set realistic expectations based on your teeth." },
      { question: "How long do teeth whitening results last?", answer: "Whitening results typically last 1-3 years depending on lifestyle habits. Avoiding staining foods like coffee, tea, red wine, and tobacco helps maintain results longer. Touch-up treatments every 6-12 months can extend the brightness indefinitely." },
      { question: "Can I whiten teeth with crowns, veneers, or fillings?", answer: "Whitening only works on natural tooth enamel—it won't change the color of crowns, veneers, or fillings. If you have visible restorations, you may need to replace them after whitening to match your new shade. We recommend whitening before getting cosmetic dental work done." },
      { question: "What's the difference between in-office and at-home whitening?", answer: "In-office whitening uses stronger bleaching agents with light activation, delivering results in one 60-90 minute session. At-home kits with custom trays provide gradual whitening over 2-3 weeks with milder gels. In-office treatment offers immediate, more dramatic results, while at-home kits offer convenience and lower cost." }
    ]
  },
  {
    slug: "braces-orthodontics",
    title: "Teeth Alignment with Invisible Aligners",
    shortDescription: "Straighten your smile discreetly with custom clear aligners — virtually invisible, removable, and comfortable for all ages.",
    description: "Clear aligners have transformed orthodontic treatment — offering a discreet, removable, and highly comfortable way to straighten teeth without the look or feel of traditional metal braces. Each set of custom-made transparent trays gradually shifts your teeth into alignment, with a new tray worn every one to two weeks. They are virtually invisible, making them the preferred choice for adults and teens who want to improve their smile without anyone knowing they are in treatment.\n\nAt Indore Dental Hospital, we offer advanced clear aligner systems for a wide range of cases — from mild crowding and spacing to more moderate bite corrections. Each treatment begins with a thorough digital assessment using 3D扫描 technology to map your teeth and plan the exact movement sequence. You can see a virtual preview of your final smile before the first tray is even made.\n\nDr. Shrivastava and his team bring the same precision and care to aligner therapy that they do to every other treatment. Unlike generic mail-order aligners, our in-clinic supervision ensures your teeth move safely, your bite stays healthy, and your results are lasting. Straighter teeth are closer than you think.",
    icon: "stethoscope",
    heroImage: "/services/braces.jpg",
    category: "orthodontic",
    featured: false,
    benefits: [
      "Corrects crooked or crowded teeth",
      "Improves chewing and speech",
      "Boosts long-term self-esteem",
      "Prevents uneven tooth wear"
    ],
    procedure: [
      { step: 1, title: "Initial Consultation & X-Rays", description: "We assess your jaw structure and tooth alignment using digital imaging." },
      { step: 2, title: "Custom Treatment Plan", description: "We present the best options (metal, ceramic, or clear aligners) tailored for you." },
      { step: 3, title: "Appliance Placement", description: "Your braces or aligners are fitted comfortably." },
      { step: 4, title: "Adjustments & Retainers", description: "Regular checkups ensure progress, followed by a retainer to maintain your new smile." }
    ],
    faqs: [
      { question: "What is the cost of braces in Indore?", answer: "Metal braces cost ₹25,000-₹40,000, ceramic braces ₹35,000-₹60,000, and clear aligners (Invisalign-type) ₹1,50,000-₹3,50,000 for complete treatment. The price includes braces, monthly adjustments, and retainers. At Indore Dental Hospital, we offer flexible payment plans to make orthodontic treatment affordable." },
      { question: "How long will I need to wear braces?", answer: "Average treatment time is 18-24 months, but can range from 12 months to 36 months depending on complexity. Mild crowding may resolve in under a year, while severe cases need longer. Wearing rubber bands and retainers as instructed helps achieve results faster." },
      { question: "Are braces painful?", answer: "Braces cause mild soreness for 3-5 days after initial placement and each monthly adjustment. This discomfort is manageable with soft foods and over-the-counter pain relievers. Most patients adapt quickly and report only minor irritation from brackets rubbing the cheeks initially." },
      { question: "What is the right age to get braces?", answer: "While 10-14 years is ideal when jaw growth is active, braces work at any age—25% of orthodontic patients today are adults. Early treatment in children (age 7-9) can prevent more serious problems later. Adult treatment may take slightly longer but achieves equally successful results." },
      { question: "Can I eat normally with braces?", answer: "You can eat most foods but should avoid sticky, hard, and chewy items like toffees, popcorn, nuts, and hard fruits that can break brackets. Cutting food into smaller pieces helps. The dietary restrictions become second nature after the first few weeks." },
      { question: "What are clear aligners and are they better than braces?", answer: "Clear aligners are removable transparent trays that straighten teeth discreetly without metal brackets. They're ideal for mild to moderate cases and offer better aesthetics and easier cleaning. Traditional braces remain more effective for complex misalignment, severe crowding, and offer better cost-effectiveness." }
    ]
  },
  {
    slug: "pediatric-dentistry",
    title: "Specialized Pediatric Dentistry (Dentist for Kids)",
    shortDescription: "Specialist dental care designed for little ones — gentle, reassuring, and built to make every child feel safe and comfortable at the dentist.",
    description: "A child's first few visits to the dentist can shape their relationship with oral health for life. That's why we've designed our paediatric dental service to be as welcoming, warm, and fear-free as possible. From the moment a young patient walks into Indore Dental Hospital, our team goes out of their way to make them feel at ease — explaining everything in simple, friendly language and moving at a pace the child is comfortable with.\n\nWe provide comprehensive dental care for children from the time their first tooth erupts through their teenage years. Services include routine check-ups and cleanings, fluoride treatments, dental sealants to prevent cavities, cavity fillings, interceptive orthodontics, and guidance for parents on diet, habits, and oral hygiene at home. We also manage common childhood dental concerns like early tooth loss, thumb-sucking effects, and teeth grinding.\n\nDr. Shrivastava and his team understand that parents are often more anxious than the children themselves. We keep you fully informed at every step and always explain our findings and recommendations in clear, honest terms — so you can make confident decisions for your child's dental health. Building good habits early is one of the best investments you can make for your child.",
    icon: "sun",
    heroImage: "/services/dental-smile.jpg",
    category: "preventive",
    featured: false,
    benefits: [
      "Child-friendly, fear-free environment",
      "Early detection of developmental issues",
      "Preventive fluoride and sealant treatments",
      "Builds lifelong positive dental habits"
    ],
    procedure: [
      { step: 1, title: "Gentle Introduction", description: "We introduce the child to the clinic environment to build trust." },
      { step: 2, title: "Painless Examination", description: "A quick, comfortable checkup of baby teeth and gums." },
      { step: 3, title: "Preventive Care", description: "Application of sealants or fluoride if needed." },
      { step: 4, title: "Parent Education", description: "We guide parents on proper brushing techniques and dietary habits." }
    ],
    faqs: [
      { question: "At what age should my child first visit the dentist?", answer: "The first dental visit should occur by age 1 or within 6 months of the first tooth erupting. Early visits help catch problems like bottle tooth decay, establish good oral hygiene habits, and make children comfortable with dental visits. At Indore Dental Hospital, our pediatric dentists create a friendly, fear-free environment for young patients." },
      { question: "Are dental treatments painful for children?", answer: "We use child-friendly techniques, topical numbing gels, and gentle anesthesia to ensure pain-free treatments. Most children tolerate procedures well when they feel safe and understood. Our pediatric specialists are trained in behavior management to reduce anxiety and fear." },
      { question: "Should we treat cavities in baby teeth if they'll fall out anyway?", answer: "Yes, untreated cavities in baby teeth can cause pain, infection, eating difficulty, and damage to developing permanent teeth underneath. Baby teeth also hold space for permanent teeth—premature loss causes crowding. Early treatment prevents pain and protects long-term oral health." },
      { question: "How can I prevent tooth decay in my child?", answer: "Brush twice daily with fluoride toothpaste, limit sugary snacks and drinks, avoid putting baby to bed with milk bottle, and ensure regular dental check-ups every 6 months. Dental sealants on molars provide additional protection. Teaching good habits early sets the foundation for lifelong oral health." },
      { question: "What are dental sealants and does my child need them?", answer: "Sealants are thin protective coatings applied to chewing surfaces of back teeth (molars) to prevent cavities. They're highly recommended for children aged 6-14 when permanent molars erupt, reducing cavity risk by 80%. The application is quick, painless, and lasts several years." },
      { question: "My child is afraid of the dentist—what should I do?", answer: "Avoid using dental visits as threats or punishment, read positive books about dentist visits, and stay calm yourself as children sense parental anxiety. Our child-friendly clinic at Indore Dental Hospital uses tell-show-do techniques, colorful environments, and rewards to build trust. Starting with simple check-ups before any treatment is needed also helps." }
    ]
  },
  {
    slug: "tooth-extraction",
    title: "Painless Tooth Extraction",
    shortDescription: "Safe, painless removal of damaged, decayed, or problematic teeth — performed with advanced anaesthesia for your complete comfort.",
    description: "When a tooth is too damaged to be saved by a root canal or crown, or if wisdom teeth are causing overcrowding and pain, an extraction is necessary. We perform extractions with the utmost care, using advanced local anesthesia and minimally invasive techniques to ensure you feel absolutely no pain and heal rapidly.",
    icon: "microscope",
    heroImage: "/services/tooth_extraction.webp",
    category: "restorative",
    featured: false,
    benefits: [
      "Immediate relief from severe tooth pain",
      "Prevents the spread of infection to other teeth",
      "Creates space for orthodontic treatment",
      "Completely painless procedure"
    ],
    procedure: [
      { step: 1, title: "Digital X-Ray Assessment", description: "We analyze the tooth roots and surrounding bone." },
      { step: 2, title: "Profound Anesthesia", description: "The area is completely numbed so you feel zero pain." },
      { step: 3, title: "Gentle Removal", description: "The tooth is carefully extracted using specialized instruments." },
      { step: 4, title: "Post-Op Care", description: "We provide detailed aftercare instructions and pain management." }
    ],
    faqs: [
      { question: "Is tooth extraction painful?", answer: "The extraction itself is painless as it's done under local anesthesia—you'll feel pressure but no pain. Post-extraction discomfort for 2-3 days is normal and manageable with prescribed painkillers. Most patients return to normal activities within 24-48 hours." },
      { question: "What is the cost of tooth extraction in Indore?", answer: "Simple extractions cost ₹500-₹1,500, while surgical extractions (impacted wisdom teeth) range from ₹2,000-₹5,000 per tooth. The cost depends on tooth location, complexity, and whether bone removal is needed. X-rays and medications are typically additional." },
      { question: "How long does it take to recover from tooth extraction?", answer: "Initial healing takes 7-10 days, with complete bone healing in 3-6 months. Follow post-extraction instructions carefully: avoid spitting, smoking, and using straws for 24-48 hours to prevent dry socket. Stick to soft foods for the first few days and maintain gentle oral hygiene." },
      { question: "What is a dry socket and how can I prevent it?", answer: "Dry socket occurs when the blood clot dislodges from the extraction site, exposing bone and causing severe pain 3-4 days post-extraction. Prevent it by avoiding smoking, not using straws, gentle rinsing, and following all aftercare instructions. If it occurs, immediate dental treatment provides relief." },
      { question: "Should I replace an extracted tooth?", answer: "Yes, replacing missing teeth prevents neighboring teeth from shifting, bone loss, bite problems, and chewing difficulties. Options include dental implants (permanent, natural-looking), bridges (fixed on adjacent teeth), or partial dentures (removable, economical). Front teeth affect appearance, while back teeth affect chewing function." },
      { question: "When should wisdom teeth be removed?", answer: "Wisdom teeth should be removed if impacted, causing pain, damaging adjacent teeth, developing cysts, or causing repeated infections. If wisdom teeth erupt properly with adequate space and no pain, removal isn't necessary. At Indore Dental Hospital, we use OPG X-rays to assess wisdom teeth position and recommend removal only when medically indicated." }
    ]
  },
  {
    slug: "dentures",
    title: "Implant-Supported Complete Dentures",
    shortDescription: "Permanently fixed, implant-supported full dentures that never slip or click — eat, speak, and smile with total confidence.",
    description: "Implant-supported complete dentures are the ultimate solution for patients who have lost all or most of their teeth. Unlike traditional removable dentures that rest on the gums and can slip, click, or cause sore spots, implant-supported dentures are securely anchored onto 4–6 strategically placed dental implants. The result is a full arch of teeth that stays completely stable — you can eat, speak, and smile with absolute confidence.\n\nAt Indore Dental Hospital, we offer both bar-retained and ball-retained implant denture systems, as well as fixed hybrid options like All-on-4. Each case is planned using CBCT imaging and digital impressions to ensure precise fit and optimal aesthetics. The implants preserve your jawbone health, prevent the sunken facial appearance associated with bone loss, and provide significantly better chewing efficiency than conventional dentures.\n\nDr. Shrivastava personally places every implant and oversees the fabrication of your custom dentures using high-quality, natural-looking materials. Whether you are upgrading from an existing denture or getting teeth for the first time after extractions, we guide you through every stage — from the initial consultation to your final confident smile.",
    icon: "implant",
    heroImage: "/services/dentures.webp",
    category: "restorative",
    featured: false,
    benefits: [
      "Restores your ability to chew and speak",
      "Supports facial muscles to prevent sagging",
      "Custom-fitted for extreme comfort",
      "Removable for easy cleaning"
    ],
    procedure: [
      { step: 1, title: "Impressions", description: "We take highly accurate digital or physical molds of your gums." },
      { step: 2, title: "Bite Registration", description: "We measure how your upper and lower jaws align." },
      { step: 3, title: "Wax Try-In", description: "You try a wax model to check the fit, color, and shape." },
      { step: 4, title: "Final Delivery", description: "Your permanent dentures are fitted and final adjustments are made." }
    ],
    faqs: [
      { question: "What is the cost of dentures in Indore?", answer: "Complete acrylic dentures cost ₹8,000-₹15,000 per arch (upper or lower), while flexible dentures range ₹15,000-₹30,000, and metal-based partial dentures cost ₹10,000-₹25,000. Implant-supported dentures are premium options at ₹1,50,000-₹3,00,000 but offer superior stability. At Indore Dental Hospital, we help you choose the best option for your budget and needs." },
      { question: "How long does it take to get used to dentures?", answer: "Most people adapt to new dentures in 2-4 weeks, though speaking and eating feel awkward initially. Practice reading aloud, start with soft foods, and use small bites. Mild soreness and increased saliva production are normal initially but resolve as your mouth adjusts." },
      { question: "Can I sleep with my dentures on?", answer: "It's recommended to remove dentures at night to let your gums rest and prevent fungal infections. Soak them overnight in denture cleaning solution to keep them moist and clean. Wearing dentures 24/7 accelerates bone loss and causes gum inflammation." },
      { question: "How long do dentures last?", answer: "Dentures typically last 5-8 years before needing replacement due to wear and changes in mouth shape. You'll need periodic adjustments and relines every 2-3 years as gums and bone naturally shrink. Proper care—cleaning daily, avoiding hot water, and handling carefully—extends their lifespan." },
      { question: "What's the difference between partial and complete dentures?", answer: "Complete dentures replace all teeth in an arch (upper or lower) and rest directly on gums, while partial dentures replace some missing teeth and clip onto remaining natural teeth. Partial dentures preserve remaining teeth and provide better chewing function than complete dentures if you still have healthy teeth." },
      { question: "Can I eat normally with dentures?", answer: "You can eat most foods with dentures, though very sticky or hard items may be challenging. Start with soft foods, cut items into small pieces, and chew evenly on both sides. Implant-supported dentures provide significantly better chewing efficiency than traditional dentures. With practice, most people regain 50-70% of natural chewing ability." }
    ]
  },
  {
    slug: "gum-treatment",
    title: "Gum Treatment for Bad Breath and Unpleasant Taste",
    shortDescription: "Advanced periodontal therapy to treat bleeding gums, eliminate bad breath, and restore your oral health from the roots up.",
    description: "Persistent bad breath and an unpleasant taste in your mouth are often early signs of gum disease. Periodontal (gum) disease is caused by bacterial plaque buildup below the gumline, leading to inflammation, bleeding, receding gums, and eventually bone loss. It is the leading cause of tooth loss in adults — and a common source of chronic halitosis that mouthwash alone cannot fix.\n\nAt Indore Dental Hospital, we provide comprehensive gum treatments that target the root cause of bad breath and gum infection. Our services range from deep scaling and root planing (a thorough cleaning of the tooth root surfaces below the gumline) to advanced laser therapy for removing infected tissue. These treatments eradicate the bacteria responsible for bad odour and bleeding, allowing your gums to heal and return to a healthy pink state.\n\nHealthy gums are the foundation of a healthy mouth. Our periodontal therapy not only freshens your breath and eliminates unpleasant taste — it halts bone loss, tightens loose teeth, and reduces your risk of systemic health problems linked to gum disease, including heart disease and diabetes complications.",
    icon: "microscope",
    heroImage: "/services/gum_treatment.jpg",
    category: "preventive",
    featured: false,
    benefits: [
      "Stops bleeding and swollen gums",
      "Eliminates persistent bad breath (halitosis)",
      "Prevents tooth mobility and loss",
      "Improves overall systemic health"
    ],
    procedure: [
      { step: 1, title: "Periodontal Probing", description: "We measure the depth of the pockets around your teeth." },
      { step: 2, title: "Deep Cleaning", description: "Scaling removes tartar above and below the gumline." },
      { step: 3, title: "Root Planing", description: "Tooth roots are smoothed to help gums reattach properly." },
      { step: 4, title: "Laser Therapy", description: "If needed, dental lasers are used to safely remove infected tissue." }
    ],
    faqs: [
      { question: "What are the signs that I need gum treatment?", answer: "Red, swollen, or bleeding gums, persistent bad breath, receding gums exposing tooth roots, loose teeth, and pus between teeth indicate gum disease. Early-stage gingivitis causes bleeding during brushing, while advanced periodontitis leads to bone loss and tooth mobility. At Indore Dental Hospital, we diagnose gum problems through examination and X-rays to determine the appropriate treatment level." },
      { question: "Is gum treatment painful?", answer: "Basic scaling and root planing are minimally uncomfortable and done with local anesthesia if needed. Advanced procedures like flap surgery or bone grafting use anesthesia for pain-free treatment. Post-treatment sensitivity for a few days is normal and manageable with prescribed medications." },
      { question: "What is the cost of gum treatment in Indore?", answer: "Scaling and polishing cost ₹1,000-₹2,500 for routine cleaning, deep cleaning (root planing) ₹3,000-₹8,000 per quadrant, and surgical treatments like flap surgery ₹8,000-₹15,000 per quadrant. Laser gum treatment ranges ₹15,000-₹30,000. Cost depends on disease severity and extent of treatment needed." },
      { question: "How can I prevent gum disease?", answer: "Brush twice daily with proper technique, floss daily to remove plaque between teeth, get professional cleaning every 6 months, avoid tobacco, and manage diabetes if present. Early intervention prevents progression from reversible gingivitis to irreversible bone loss. Regular dental check-ups catch problems before symptoms appear." },
      { question: "Can gum disease be completely cured?", answer: "Early-stage gingivitis is completely reversible with professional cleaning and improved home care. Advanced periodontitis can be controlled and stabilized but not fully cured—bone loss is permanent. Ongoing maintenance cleanings every 3-4 months and excellent oral hygiene prevent further damage." },
      { question: "What happens if I ignore gum disease?", answer: "Untreated gum disease progresses to bone loss, tooth loosening, tooth loss, and can affect overall health by increasing risk of heart disease, diabetes complications, and stroke. The bacteria from gum infections enter the bloodstream, causing systemic inflammation. Treatment becomes more complex and expensive as disease advances." }
    ]
  },
];
