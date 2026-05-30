import { Service } from "@/types";

export const SERVICES_DATA: Service[] = [
  {
    slug: "dental-implants",
    title: "Dental Implants",
    shortDescription: "Permanent, natural-looking tooth replacements that restore function and confidence.",
    description: "Dental implants are the gold standard for replacing missing teeth. At Indore Dental Hospital, we use advanced 3D CBCT scanning and computer-guided surgery to place premium titanium implants with extreme precision. The result is a permanent, natural-looking replacement that functions exactly like your real tooth, preventing bone loss and restoring your perfect smile.",
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
    slug: "smile-makeover",
    title: "Digital Smile Makeover",
    shortDescription: "A comprehensive cosmetic transformation designed perfectly for your facial proportions.",
    description: "A Digital Smile Makeover is a custom-designed treatment plan combining multiple cosmetic procedures to achieve your dream smile. Using Digital Smile Design (DSD) technology, we analyze your facial proportions, lips, and teeth to design a smile that perfectly complements your unique features. You even get to 'test drive' your new smile before we begin any actual treatment.",
    icon: "sparkles",
    heroImage: "/services/smile-makeover.jpg",
    category: "cosmetic",
    featured: true,
    benefits: [
      "Completely personalized to your facial features",
      "Predictable results you can preview beforehand",
      "Combines veneers, whitening, and alignment seamlessly",
      "Massive boost to self-confidence"
    ],
    procedure: [
      {
        step: 1,
        title: "Digital Capture",
        description: "We take high-resolution photos, videos, and 3D digital scans of your mouth and face."
      },
      {
        step: 2,
        title: "Digital Design",
        description: "Our specialists digitally architect your perfect smile, analyzing symmetry and proportions."
      },
      {
        step: 3,
        title: "The 'Mock-up' Trial",
        description: "We place a temporary resin mock-up over your teeth so you can see and feel the final result before committing."
      },
      {
        step: 4,
        title: "Master Execution",
        description: "Once approved, we execute the exact treatment plan using premium ceramics and precision techniques."
      }
    ],
    faqs: [
      { question: "What does a smile makeover include?", answer: "A smile makeover combines multiple cosmetic treatments like teeth whitening, veneers, crowns, orthodontics, and gum contouring based on your needs. At Indore Dental Hospital, we create a customized plan after analyzing your facial structure, tooth alignment, and desired outcome. The goal is to achieve a natural, balanced, and confident smile." },
      { question: "How much does a complete smile makeover cost in Indore?", answer: "Smile makeover costs vary widely from ₹50,000 to ₹3,00,000+ depending on the procedures involved. A consultation will help determine which treatments you need and provide an accurate estimate. Many patients opt for phased treatment to manage costs over time." },
      { question: "How long does a smile makeover take?", answer: "Simple makeovers involving whitening and bonding can be completed in 2-3 visits over a few weeks. Comprehensive cases with veneers, crowns, or orthodontics may take 6-12 months. Your timeline depends on the complexity of treatments chosen." },
      { question: "Will a smile makeover look natural or fake?", answer: "Modern cosmetic dentistry focuses on natural-looking results that complement your facial features. We avoid overly white or uniform teeth that look artificial. Digital smile design technology allows you to preview and approve your new smile before any work begins." },
      { question: "Is smile makeover treatment permanent?", answer: "Most treatments like veneers and crowns last 10-15 years with proper care, while whitening may need touch-ups every 1-2 years. Orthodontic results are permanent if you wear retainers as directed. Regular maintenance and good oral hygiene extend the longevity of your makeover." },
      { question: "Can I get a smile makeover if I have missing teeth?", answer: "Yes, replacing missing teeth with implants, bridges, or dentures is often a key component of smile makeovers. We address functional issues like gaps and alignment before cosmetic enhancements. A comprehensive evaluation at Indore Dental Hospital will determine the best sequence of treatments for your case." }
    ]
  },
  {
    slug: "root-canal",
    title: "Painless Root Canal",
    shortDescription: "Advanced endodontic treatment to save severely infected teeth comfortably.",
    description: "Gone are the days of painful root canals. We utilize rotary endodontics, apex locators, and surgical microscopes to perform root canals with extreme precision and absolute zero pain. This treatment saves a tooth that is badly decayed or infected by removing the infected nerve tissue, cleaning the canal, and sealing it to prevent future issues.",
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
    title: "Advanced Teeth Whitening",
    shortDescription: "Professional, safe, and highly effective whitening for a brilliantly bright smile.",
    description: "Achieve a noticeably whiter smile in just one hour with our professional in-office whitening system. Unlike over-the-counter products that can damage enamel or cause severe sensitivity, our clinical-grade whitening uses specialized light-activated gels and protective barriers to safely lift deep stains caused by coffee, tea, tobacco, and aging.",
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
    title: "Braces / Orthodontics",
    shortDescription: "Straighten your teeth and correct your bite with modern, comfortable orthodontic solutions.",
    description: "Whether you need traditional metal braces, ceramic clear braces, or modern clear aligners (like Invisalign), our orthodontic treatments are designed to correct misaligned teeth and bite issues. Properly aligned teeth not only give you a stunning smile but also improve your overall oral health by making it easier to clean and reducing jaw strain.",
    icon: "stethoscope",
    heroImage: "https://images.unsplash.com/photo-1598409377488-81e592751f28?q=80&w=2000&auto=format&fit=crop",
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
    title: "Pediatric Dentistry",
    shortDescription: "Gentle, fun, and fear-free dental care specifically designed for infants, children, and teens.",
    description: "We believe a child's first dental visit shapes their lifelong attitude toward oral health. Our pediatric dentistry services focus on preventive care, early cavity detection, and establishing healthy habits in a playful, completely fear-free environment. From fluoride treatments to cavity fillings, we ensure your child feels safe and happy.",
    icon: "sun",
    heroImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2000&auto=format&fit=crop",
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
    title: "Tooth Extraction",
    shortDescription: "Safe, painless removal of damaged, decayed, or problematic wisdom teeth.",
    description: "When a tooth is too damaged to be saved by a root canal or crown, or if wisdom teeth are causing overcrowding and pain, an extraction is necessary. We perform extractions with the utmost care, using advanced local anesthesia and minimally invasive techniques to ensure you feel absolutely no pain and heal rapidly.",
    icon: "microscope",
    heroImage: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=2000&auto=format&fit=crop",
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
    slug: "veneers",
    title: "Veneers",
    shortDescription: "Ultra-thin, custom-made ceramic shells to instantly correct chips, gaps, and severe discoloration.",
    description: "Porcelain veneers are the secret behind Hollywood smiles. These ultra-thin, highly durable ceramic shells are permanently bonded to the front of your teeth. They instantly correct chips, cracks, stubborn discoloration, and minor misalignments, giving you a flawless, symmetrical, and permanently white smile in just a few visits.",
    icon: "sparkles",
    heroImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2000&auto=format&fit=crop",
    category: "cosmetic",
    featured: false,
    benefits: [
      "Instantly corrects multiple cosmetic flaws",
      "Highly stain-resistant compared to natural enamel",
      "Custom-matched to your desired tooth color",
      "Durable and long-lasting (10-15+ years)"
    ],
    procedure: [
      { step: 1, title: "Smile Design", description: "We digitally design the shape and shade of your new veneers." },
      { step: 2, title: "Preparation", description: "A microscopic layer of enamel is gently buffed to make room for the veneer." },
      { step: 3, title: "Custom Fabrication", description: "Your veneers are crafted in a high-end dental lab." },
      { step: 4, title: "Final Bonding", description: "The veneers are permanently bonded to your teeth using a specialized resin." }
    ],
    faqs: [
      { question: "What is the cost of dental veneers in Indore?", answer: "Composite veneers cost ₹3,000-₹6,000 per tooth, while porcelain veneers range from ₹8,000-₹18,000 per tooth in Indore. Porcelain veneers last longer (10-15 years) and resist staining better than composite (5-7 years). Most smile transformations require veneers on 6-10 front teeth." },
      { question: "Do veneers damage your natural teeth?", answer: "A thin layer (0.5mm) of enamel is removed to bond veneers, making the process irreversible but not damaging. Modern minimal-prep and no-prep veneers remove even less tooth structure. Once you get veneers, you'll need to maintain or replace them long-term, but your teeth remain healthy underneath." },
      { question: "How long do dental veneers last?", answer: "Porcelain veneers last 10-15 years with proper care, while composite veneers last 5-7 years. Longevity depends on oral hygiene, avoiding biting hard objects, and preventing grinding with a nightguard if needed. With good maintenance, many patients enjoy veneers for 20+ years." },
      { question: "Can veneers fix crooked or gapped teeth?", answer: "Veneers can correct minor alignment issues, small gaps, and slightly crooked teeth instantly without braces. For severe misalignment or large gaps, orthodontic treatment may be necessary first. A consultation at Indore Dental Hospital will determine if veneers alone can achieve your desired result." },
      { question: "Will veneers look fake or too white?", answer: "Modern veneers are highly customizable in shade, shape, and translucency to look completely natural. We match them to your facial features and desired brightness—not everyone wants Hollywood-white teeth. Digital smile design lets you preview and approve the look before fabrication begins." },
      { question: "Can I eat normally with veneers?", answer: "Yes, veneers function like natural teeth for eating most foods. Avoid biting very hard items like ice, nuts with shells, or opening packages with your teeth. Good oral hygiene, regular dental visits, and a nightguard if you grind teeth will keep your veneers looking great for years." }
    ]
  },
  {
    slug: "dentures",
    title: "Dentures",
    shortDescription: "Comfortable, natural-looking removable replacements for missing teeth and surrounding tissues.",
    description: "Whether you need partial dentures to replace a few missing teeth or full dentures to restore an entire arch, our custom-crafted dentures are designed for ultimate comfort, stability, and aesthetics. We use high-quality acrylics and resins to ensure your dentures look indistinguishable from natural teeth and allow you to eat and speak with confidence.",
    icon: "implant",
    heroImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2000&auto=format&fit=crop",
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
    title: "Gum Treatment",
    shortDescription: "Advanced periodontal therapy to treat bleeding gums, infections, and bone loss.",
    description: "Healthy gums are the foundation of a healthy mouth. Periodontal (gum) disease is the leading cause of tooth loss in adults. Our comprehensive gum treatments range from deep scaling and root planing to advanced laser therapy, designed to eradicate bacteria, halt bone loss, and restore your gums to a healthy pink state.",
    icon: "microscope",
    heroImage: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=2000&auto=format&fit=crop",
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
  {
    slug: "cosmetic-dentistry",
    title: "Cosmetic Dentistry",
    shortDescription: "A wide array of aesthetic procedures to enhance the symmetry, color, and shape of your teeth.",
    description: "Cosmetic dentistry is an art form. It encompasses treatments like composite bonding, gum contouring, enamel shaping, and minor alignment corrections. Whether you have a small chip, an uneven gumline, or a slightly misshapen tooth, our cosmetic procedures are designed to perfect the small details that make a huge difference in your smile's overall harmony.",
    icon: "sparkles",
    heroImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2000&auto=format&fit=crop",
    category: "cosmetic",
    featured: false,
    benefits: [
      "Fixes minor imperfections quickly",
      "Often requires zero anesthesia",
      "Highly affordable cosmetic upgrades",
      "Immediate, same-day results"
    ],
    procedure: [
      { step: 1, title: "Aesthetic Evaluation", description: "We identify the specific imperfections you wish to correct." },
      { step: 2, title: "Material Selection", description: "We match composite resins exactly to your natural tooth shade." },
      { step: 3, title: "Artistic Application", description: "The material is carefully sculpted and bonded to the tooth." },
      { step: 4, title: "Polishing", description: "The tooth is polished to a natural, high-gloss finish." }
    ],
    faqs: [
      { question: "What cosmetic dental treatments are available in Indore?", answer: "Popular cosmetic treatments include teeth whitening, veneers, bonding, crowns, gum contouring, orthodontics (braces/aligners), and smile makeovers combining multiple procedures. At Indore Dental Hospital, we customize treatment plans based on your goals, budget, and dental condition. Digital smile design helps you visualize results before starting." },
      { question: "Is cosmetic dentistry expensive?", answer: "Costs vary widely—teeth whitening starts at ₹8,000, bonding at ₹2,000-₹5,000 per tooth, veneers ₹3,000-₹18,000 per tooth, and comprehensive makeovers ₹50,000-₹3,00,000+. Many patients choose phased treatment over several months to manage costs. The investment improves confidence, appearance, and often functionality." },
      { question: "How long do cosmetic dental results last?", answer: "Whitening lasts 1-3 years, bonding 5-7 years, veneers 10-15 years, and crowns 10-20 years with proper care. Longevity depends on oral hygiene, avoiding damaging habits, and regular dental visits. Most treatments require eventual replacement or touch-ups, but many patients enjoy results for decades." },
      { question: "Can cosmetic dentistry fix my smile issues?", answer: "Cosmetic dentistry addresses stained, chipped, cracked, gapped, crooked, or misshapen teeth, as well as gummy smiles. If underlying decay or gum disease exists, these must be treated first. A comprehensive evaluation determines which cosmetic procedures will achieve your desired outcome realistically." },
      { question: "Is cosmetic dentistry only about appearance?", answer: "While aesthetics are primary, many cosmetic treatments also improve function—veneers protect worn teeth, crowns restore broken teeth, and orthodontics correct bite problems. A beautiful smile that's also healthy and functional is the goal. Cosmetic and restorative dentistry often overlap." },
      { question: "What's the difference between cosmetic and regular dentistry?", answer: "Regular dentistry focuses on oral health, treating decay, infections, and disease. Cosmetic dentistry enhances appearance of healthy teeth through elective procedures. Many dentists combine both—for example, a crown can be both functional (protecting a weak tooth) and cosmetic (looking natural). Indore Dental Hospital offers integrated treatment plans addressing health and aesthetics together." }
    ]
  },
  {
    slug: "fixed-teeth-placement",
    title: "Fixed Teeth Placement",
    shortDescription: "Secure, permanent teeth replacements using advanced bridges and implant-supported systems.",
    description: "Missing multiple teeth? Fixed teeth placement restores your smile with permanent prosthetics that never need to be removed. Whether through a traditional ceramic dental bridge or a full-arch implant-supported system (like All-on-4), we provide fixed, unmovable teeth that look, feel, and function exactly like your natural dentition.",
    icon: "implant",
    heroImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2000&auto=format&fit=crop",
    category: "restorative",
    featured: false,
    benefits: [
      "Permanent—never slips or falls out",
      "Restores 100% of your biting force",
      "No need for messy adhesives",
      "Prevents adjacent teeth from shifting"
    ],
    procedure: [
      { step: 1, title: "Structural Assessment", description: "We evaluate the health of adjacent teeth or jawbone for support." },
      { step: 2, title: "Preparation/Implant Placement", description: "We prepare the anchor teeth or surgically place the implants." },
      { step: 3, title: "Impression & Fabrication", description: "Custom fixed teeth are fabricated in a premium lab." },
      { step: 4, title: "Permanent Cementation", description: "The new teeth are permanently secured in your mouth." }
    ],
    faqs: [
      { question: "What are fixed teeth and how are they different from dentures?", answer: "Fixed teeth are permanent dental restorations that are cemented or screwed in place and cannot be removed by the patient, including crowns, bridges, and implant-supported prosthetics. Unlike removable dentures, they function and feel like natural teeth with superior stability and chewing efficiency. Fixed solutions prevent bone loss and don't require removal for cleaning." },
      { question: "What is the cost of fixed teeth in Indore?", answer: "Single tooth crowns cost ₹3,000-₹15,000 depending on material (metal, ceramic, zirconia). Dental bridges range ₹8,000-₹30,000 per unit. Implant-supported fixed teeth cost ₹25,000-₹50,000 per implant plus crown. Full-mouth fixed teeth on implants (All-on-4/All-on-6) range ₹2,50,000-₹6,00,000 per arch." },
      { question: "How long do fixed teeth last?", answer: "Fixed bridges typically last 10-15 years, individual crowns 10-20 years, and implant-supported fixed teeth can last 20+ years or a lifetime with proper care. Success depends on oral hygiene, regular check-ups, avoiding excessive force, and maintaining bone health around implants. At Indore Dental Hospital, we use high-quality materials for maximum longevity." },
      { question: "Can I get same-day fixed teeth?", answer: "Immediate loading is possible with certain implant systems, where temporary fixed teeth are attached the same day as implant placement. However, permanent fixed teeth typically require 3-6 months of healing for proper bone integration. Same-day crowns using CAD/CAM technology are available for single tooth restorations." },
      { question: "What's better—fixed bridge or dental implant?", answer: "Implants are superior long-term as they preserve bone, don't require cutting adjacent teeth, and last longer. Bridges are faster and more economical initially but require grinding down healthy neighboring teeth for support. If bone and budget allow, implants are the gold standard; otherwise, bridges are an excellent fixed alternative to removable dentures." },
      { question: "How do I care for fixed teeth?", answer: "Brush twice daily, floss around fixed teeth using threaders or water flossers, avoid biting extremely hard objects, and visit for professional cleanings every 6 months. For implant-supported fixed teeth, maintaining gum health is critical. Proper care ensures your fixed teeth function and look great for many years." }
    ]
  }
];
