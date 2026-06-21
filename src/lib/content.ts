export const site = {
  name: "Wilson Partners",
  legalName: "Wilson Partners Inc.",
  tagline: "AI for humans. Humans for AI.",
  description:
    "Thought leadership for government and private-sector senior leaders committed to value-based leadership — translating AI capability into sound strategy, trustworthy governance, and practical workforce competency.",
  location: "Washington, D.C.",
  email: "ygibbons@thewilsonpartners.com",
  altEmail: "ygibbons@inclusionleadership.com",
  phone: "(202) 555-0140",
  website: "https://inclusionleadership.org/",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const credibilityMetrics = [
  { value: "75+", label: "Federal agencies & organizations" },
  { value: "2014", label: "Founded" },
  { value: "7", label: "Integrated practice areas" },
] as const;

export const clientSectors = [
  "Department of War",
  "Office of Personnel Management",
  "NASA",
  "Department of Commerce",
  "Department of Energy",
  "NIH · ODNI · USAID · GAO",
] as const;

export const practiceAreas = [
  {
    id: "research-analytics",
    title: "Research, Assessment & AI-Enabled Analytics",
    shortTitle: "Research & Analytics",
    summary:
      "Large-scale data analysis, survey methodology, and AI-enabled pattern recognition — with rigorous attention to bias, explainability, and action.",
    description:
      "Our Subject Matter Experts critically review and analyze large-scale data reports and trends, offer recommendations for resolving critical issues, and advance mission success. We bring fluency in machine learning, natural-language analysis, and generative AI to surface patterns at scale, while examining model accuracy, bias, and explainability. Our SMEs are trained as academicians in sociology, psychology, political science, management science, and law.",
    highlights: [
      "Survey methodology, data collection, analysis, and reporting",
      "AI readiness assessment and tool trustworthiness evaluation",
      "Workplace inclusion policy and behavior analytics",
      "Translation of analytic findings into executive action",
    ],
  },
  {
    id: "leadership-development",
    title: "Leadership & Professional Development in the AI Era",
    shortTitle: "Leadership Development",
    summary:
      "Build AI-capable leaders through competency models, experiential learning, coaching, and succession-ready pipelines.",
    description:
      "We advise emerging and advancing leaders on creating policies and procedures that lead to sustainable change. We help leaders build AI competency — from foundational literacy to the critical judgment required to deploy AI ethically and effectively. Our development models cultivate understanding of how AI works and where it fails, safeguarding human agency, recognizing algorithmic bias, and modeling lifelong learning.",
    highlights: [
      "Competency models from foundational to advanced AI leadership",
      "Experiential learning embedded in real work — not classroom alone",
      "Coaching, IDPs, and measurable growth assessment",
      "Succession frameworks that reduce key-person dependence",
    ],
  },
  {
    id: "strategy-implementation",
    title: "Strategic Planning, AI Strategy & Evaluation",
    shortTitle: "Strategy & Evaluation",
    summary:
      "Evidence-based roadmaps, cost–benefit analysis, and implementation planning aligned to organizational mission.",
    description:
      "Our work in strategic planning, implementation, and evaluation is built on a wealth of experience advising, writing, and implementing successful strategic plans. We help leaders weigh the value of AI against other priorities through evidence-based cost–benefit analysis, design AI adoption roadmaps, and build the enabling conditions — data, infrastructure, policy, and workforce — that make adoption succeed.",
    highlights: [
      "AI adoption roadmaps and phased implementation plans",
      "Cost–benefit analysis and priority alignment",
      "Enabling conditions: data, infrastructure, policy, workforce",
      "Visionary planning recognized for sustainable results",
    ],
  },
  {
    id: "ai-governance",
    title: "AI Governance & Responsible AI",
    shortTitle: "AI Governance",
    summary:
      "Governance frameworks for safe, lawful, human-accountable AI across the full lifecycle.",
    description:
      "WP advises leaders on the governance frameworks needed to use AI safely, lawfully, and in the public interest. We help organizations validate trustworthiness before deployment at scale, establish human accountability for AI-assisted decisions, and embed an ethics-by-design standard throughout the AI life cycle — addressing security, bias, privacy, explainability, and environmental impact.",
    highlights: [
      "Trustworthiness validation before scale deployment",
      "Human accountability chains and responsibility mapping",
      "Alignment with emerging regulation and federal standards",
      "Ethics-by-design across the AI lifecycle",
    ],
  },
  {
    id: "conflict-management",
    title: "Conflict Management & Resolution",
    shortTitle: "Conflict Management",
    summary:
      "Psychological safety, common language, and resolution strategies — including tensions AI adoption introduces.",
    description:
      "We advise senior leaders on developing and implementing conflict resolution and conflict management strategies that ensure psychological safety in the workplace. Our approach begins with an established common language to grow and sustain a work environment of trust and respect — including new tensions that AI adoption can introduce around workload, autonomy, and fairness.",
    highlights: [
      "Conflict resolution and management strategy design",
      "Psychological safety and trust-building frameworks",
      "Education and training on conflict triggers and behaviors",
      "Navigation of AI-related workplace tensions",
    ],
  },
  {
    id: "consultation",
    title: "Consultation & Advisement",
    shortTitle: "Consultation",
    summary:
      "One-on-one executive coaching, mentoring, and long-term stakeholder relationships.",
    description:
      "We believe in the importance of one-on-one consultation and advisement to grapple with the obstacles that impede organizational success. Our seasoned SMEs are adept advisors, mentors, and coaches who offer processes that lead to desired outcomes — including strategic problem-solving, stakeholder engagement, and executive briefings leaders need to lead confidently through AI-driven change.",
    highlights: [
      "Executive coaching and one-on-one advisement",
      "Long-term stakeholder relationship building",
      "Strategic problem-solving and executive briefings",
      "Mentoring through AI-driven organizational change",
    ],
  },
  {
    id: "institutes",
    title: "Institutes & Summits",
    shortTitle: "Institutes & Summits",
    summary:
      "Large-scale symposia, interactive sessions, and keynote programming grounded in research.",
    description:
      "Our team is recognized for executing large-scale symposia focused on leadership development and inclusion in the workplace. Through collaboration, our institutes and summits offer instruction, interaction, and engagement across every aspect of workplace inclusion and the responsible use of AI — whether face-to-face or virtual, grounded in theory and research evidence.",
    highlights: [
      "Large-scale leadership and inclusion symposia",
      "Interactive session design by expert SMEs",
      "Keynote speakers with provocative, research-based insights",
      "Face-to-face and virtual delivery",
    ],
  },
] as const;

/** @deprecated use practiceAreas — kept for gradual migration */
export const serviceCategories = practiceAreas;

export const leadershipWorkstreams = [
  {
    title: "AI Proficiency & Workforce Enablement",
    subtitle: "Developing AI-Capable Leaders",
    problem:
      "Leading an AI-enabled function demands new capabilities: interpreting data, exercising judgment over AI outputs, and guiding teams through new ways of working.",
    action:
      "Competency models spanning foundational to advanced skills, experiential learning in real work, progressive challenge across tracks, and feedback through IDPs — developing leaders, not just users.",
    result:
      "Leaders who interpret AI with confidence, exercise sound judgment, and build bench strength that continuously grows AI-capable leadership.",
  },
  {
    title: "Knowledge Systems & Workflow Integration",
    subtitle: "Building Bench Strength",
    problem:
      "Critical capability concentrated in a single person — with no succession, documentation, or structured way to grow others.",
    action:
      "Structured knowledge-transfer sessions, plain-language documentation that doubles as development content, and self-service systems that let staff learn independently.",
    result:
      "Distributed, developable knowledge — key-person dependence falls and succession readiness sustains the function through any personnel change.",
  },
  {
    title: "Operational Analytics & Process Optimization",
    subtitle: "Developing Data-Driven Decision Leaders",
    problem:
      "Leaders had powerful data but no development in the judgment to use it well — risking over-reliance on tools or reverting to instinct.",
    action:
      "Plain-language insights, human-in-the-loop standards, validated findings, and forecasting that develops proactive, anticipatory leadership.",
    result:
      "A durable, data-fluent leadership culture — leaders who act on evidence rather than defer to any single analyst or tool.",
  },
] as const;

export const fcpsFramework = {
  title: "AI Competency Framework for Teachers",
  client: "Fairfax County Public Schools · Virginia Department of Education",
  subtitle: "Grounded in the UNESCO AI Competency Framework (2024)",
  intro:
    "Wilson Partners developed a human-centered AI competency framework to close the learning gap in Fairfax County — connecting teacher AI capability to student outcomes in mathematics, science, and reading.",
  principles: [
    "Inclusive Digital Futures — equity-first AI that reaches every learner",
    "Human-Centred Approach — AI augments, never replaces, teacher judgment",
    "Teachers' Rights & Roles — redefine roles; protect rights in AI-rich classrooms",
    "Trustworthy & Sustainable AI — validate tools for safety, privacy, and do no harm",
    "Applicability for All Teachers — progressive path from beginner to advanced",
    "Lifelong Professional Learning — continuous growth, coaching, and community",
  ],
  domains: [
    {
      name: "Human-Centred Mindset",
      description:
        "Keeps relationships and judgment central — teaching stays human as AI accelerates recovery.",
    },
    {
      name: "Ethics of AI",
      description:
        "Inclusivity, bias mitigation, and privacy — directly targeting persistent equity gaps.",
    },
    {
      name: "AI Foundations & Applications",
      description:
        "Practical fluency with AI tools to address unrecovered math and science loss.",
    },
    {
      name: "AI Pedagogy",
      description:
        "Personalized, AI-supported instruction that meets rising SOL rigor with timely intervention.",
    },
    {
      name: "AI for Professional Development",
      description:
        "Continuous, reflective growth that sustains teacher capacity and confidence.",
    },
  ],
  levels: [
    { name: "Acquire", description: "Foundational AI literacy — understand core concepts and use trusted tools with guidance." },
    { name: "Deepen", description: "Applied practice — integrate AI into everyday teaching and personalize student learning." },
    { name: "Create", description: "Innovation & leadership — design new AI-enabled pedagogy and mentor fellow teachers." },
  ],
} as const;

export const partners = [
  {
    name: "Office of Personnel Management",
    summary:
      "Advised the Director on Executive Order 13583 — creating innovative strategies and training with Georgetown University's McDonough School of Business.",
  },
  {
    name: "NASA",
    summary:
      "Established inclusion strategic framework for Headquarters and Centers; developed agency-wide inclusion measurement survey tool.",
  },
  {
    name: "Department of Commerce",
    summary:
      "Advised the inclusion council and evaluated strategic inclusion efforts with the Associate Chief Human Capital Officer.",
  },
  {
    name: "Department of Energy",
    summary:
      "Created and advised a strategic thinking group of 23 Chief Inclusion Officers across the federal government.",
  },
  {
    name: "Department of War",
    summary:
      "Advises the Office of the Secretary on inclusion policy, EEO workforce development, leadership competency models, and the proposed Center of Excellence.",
  },
  {
    name: "NIH · ODNI · USAID · GAO",
    summary:
      "Strategic planning, AI-era leadership development, inclusion governance, and evidence-based training across the federal enterprise.",
  },
] as const;

export const team = {
  leadership: [
    { name: "Youlanda Gibbons, PhD", role: "Founder & CEO" },
    { name: "Bob Raleigh, PhD", role: "Founder, Pathways Predictive Science" },
    { name: "Cathleen Benko, MBA", role: "Board Member, NIKE" },
    { name: "Leslie Hinkson, PhD", role: "VP National Racial Justice and Equity, League of Conservation Voters" },
  ],
  extended:
    "Brendan Duebner · Neidy Hornsby · Patricia Johnson · Carolyn McMillon · Chrissie Nash · Lionel Scott Jr., PhD · Sandy Shuler · J. Bruce Stewart, PhD · Wanda Watson-Mays",
  universityPartners: [
    "Georgetown University",
    "Cornell University",
    "Arizona State University",
  ],
} as const;

export const recognitions = [
  "Featured in Forbes Magazine, 2024",
  "Featured in The Wall Street Journal, 2023",
  "Fortune 100 Most Powerful Women, 2023",
  "Stevie Awards — Woman of the Year in Government, 2025 & 2022",
  "Stevie Awards — Thought Leadership for Government, 2022",
  "Marquis Who's Who Distinguished Humanitarian Award, 2023",
  "Women Worth Watching · Profiles in Diversity Journal, 2022",
  "Author, The Business of Diversity: A View from the Corporate Suite, 2011",
] as const;

export const homeHighlights = [
  {
    title: "Value-Based Leadership",
    description:
      "We engage leaders who create policies and practices aligned with the values and behaviors that drive innovation and solve complex organizational challenges.",
  },
  {
    title: "Human-Centered AI",
    description:
      "AI must strengthen human capacity — keeping human agency, accountability, and inclusion at the center of every AI-enabled decision.",
  },
  {
    title: "Evidence-Based Practice",
    description:
      "Research grounded in sociology, psychology, and organizational science — translated into strategy, governance, and workforce competency.",
  },
] as const;

export const aboutContent = {
  headline: "Architecting human-centered, AI-capable institutions.",
  intro:
    "Dr. Youlanda Gibbons is a nationally recognized thought leader at the convergence of AI governance, federal transformation, and value-based leadership — advising cabinet officials, senior military leaders, and agency directors on AI governance, workforce competency, and organizational transformation.",
  bio: {
    name: "Dr. Youlanda Michelle Gibbons, Ph.D.",
    title: "Founder & CEO · Wilson Partners · Institute for Federal Leadership",
    paragraphs: [
      "Visionary scholar-practitioner building human-centered, AI-capable institutions — grounded in sociological research, driven by enduring conviction. Her career spans UMass Amherst and Harvard, through a U.S. Congressional Fellowship and Georgetown professorship, to founding Wilson Partners and the Institute for Federal Leadership.",
      "She architected multi-workstream federal digital transformation — advancing AI governance aligned to NIST AI RMF, DoW Responsible AI Strategy, and Executive Orders. She designed AI literacy curricula mapped to the DOL AI Literacy Framework, built scalable deployment playbooks, and created EEO Leadership Development Competency Models and JPME Leadership Learning Objectives.",
      "Her vision has touched every federal department and 75+ agencies nationwide and internationally — including Defense, Commerce, Energy, Health and Human Services, NASA, and Veterans Affairs. Recognized by Forbes, The Wall Street Journal, and Fortune's 100 Most Powerful Women.",
    ],
    credentials: [
      "Ph.D. & M.A., Sociology — University of Massachusetts Amherst",
      "M.S., Public Health — Harvard University",
      "M.S.W. — Boston University",
      "B.A., English & Human Development — Mercer University (cum laude)",
    ],
    impact: [
      { value: "75+", label: "Federal agencies" },
      { value: "5", label: "Graduate degrees" },
      { value: "2014", label: "Wilson Partners founded" },
    ],
  },
  values: [
    {
      title: "Human-Centered",
      description: "Technology must serve human capacity — not displace it.",
    },
    {
      title: "Evidence-Based",
      description: "Grounded in research, sociology, and proven federal practice.",
    },
    {
      title: "Transformative",
      description: "Enterprise-scale change — from recovery to excellence.",
    },
    {
      title: "Ethical",
      description: "Responsible AI governance woven into every engagement.",
    },
  ],
  federalAdvisory: [
    { agency: "Department of War", detail: "AI governance, EEO workforce development, Center of Excellence, and enterprise leadership competency models." },
    { agency: "OPM", detail: "Executive Order 13583 — OPM Inclusive Excellence Maturity Model with Georgetown McDonough." },
    { agency: "NASA", detail: "Inclusion strategic framework and agency-wide measurement survey tool." },
    { agency: "Department of Energy", detail: "Strategic group of 23 Chief Inclusion Officers across the federal government." },
    { agency: "NIH / NHLBI", detail: "Five-year inclusion strategic implementation plan to transform workplace culture." },
  ],
} as const;
