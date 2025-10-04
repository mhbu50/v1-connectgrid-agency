import {
  BarChart,
  Megaphone,
  Paintbrush,
  Search,
  Settings,
  Users,
  Briefcase,
  Mail,
  PenTool,
  TrendingUp,
  LayoutGrid,
  Palette,
  LineChart,
  Target,
} from 'lucide-react';
export const NAV_LINKS = [
  { href: '/#our-work', key: 'ourWork' },
  { href: '/case-studies', key: 'caseStudies' },
  { href: '/packages', key: 'packages' },
  { href: '/about', key: 'about' },
  { href: '/blog', key: 'blog' },
  { href: '/careers', key: 'careers' },
  { href: '/contact', key: 'contact' },
];
export const SERVICES = [
    { name: 'Digital Marketing Strategy', slug: 'digital-marketing-strategy', icon: Briefcase },
    { name: 'Social Media Management', slug: 'social-media-management', icon: Users },
    { name: 'Search Engine Optimization (SEO)', slug: 'search-engine-optimization', icon: Search },
    { name: 'Pay-Per-Click Advertising (PPC)', slug: 'pay-per-click-advertising', icon: Megaphone },
    { name: 'Content Marketing', slug: 'content-marketing', icon: PenTool },
    { name: 'Email Marketing', slug: 'email-marketing', icon: Mail },
    { name: 'Web Design & Development', slug: 'web-design-development', icon: LayoutGrid },
    { name: 'Brand Identity & Design', slug: 'brand-identity-design', icon: Palette },
    { name: 'Analytics & Reporting', slug: 'analytics-reporting', icon: LineChart },
    { name: 'Conversion Rate Optimization', slug: 'conversion-rate-optimization', icon: Target },
];
export const HOMEPAGE_SERVICES = [
  { slug: 'digital-marketing-strategy', icon: Settings },
  { slug: 'social-media-management', icon: Users },
  { slug: 'search-engine-optimization', icon: Search },
  { slug: 'pay-per-click-advertising', icon: Megaphone },
  { slug: 'content-marketing', icon: Paintbrush },
  { slug: 'web-design-development', icon: BarChart },
];
export const TESTIMONIALS = [
  {
    quote: "ConnectGrid transformed our online presence. Their SEO strategy doubled our organic traffic in just three months. Highly recommended!",
    name: "Sarah L.",
    company: "CEO of InnovateTech",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    quote: "The social media campaigns crafted by ConnectGrid were phenomenal. Our engagement rates went through the roof, and we saw a direct impact on sales.",
    name: "Michael B.",
    company: "Marketing Director at FashionForward",
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    quote: "Working with ConnectGrid felt like having an in-house marketing team. They are responsive, data-driven, and truly care about our success.",
    name: "Emily C.",
    company: "Founder of EcoGoods",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
  {
    quote: "Their PPC expertise is unmatched. We saw a 200% ROI within the first month. They optimized our ad spend and delivered incredible results.",
    name: "David R.",
    company: "Owner of BuildRight Construction",
    avatar: "https://i.pravatar.cc/150?img=4",
  },
  {
    quote: "The new website they designed is not only beautiful but also highly functional. Our conversion rates have improved by 40% since the launch.",
    name: "Jessica P.",
    company: "Manager at The Gourmet Kitchen",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
];
export const PORTFOLIO_ITEMS = [
  {
    title: "E-commerce SEO Overhaul",
    category: "SEO & Content Marketing",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
    link: "/case-studies/ecommerce-seo-overhaul",
  },
  {
    title: "B2B Social Media Campaign",
    category: "Social Media Management",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop",
    link: "/case-studies/b2b-social-media-campaign",
  },
  {
    title: "Brand Identity for a Startup",
    category: "Branding & Web Design",
    image: "https://images.unsplash.com/photo-1559028006-44a3a5f031d8?q=80&w=1935&auto=format&fit=crop",
    link: "/case-studies/brand-identity-for-startup",
  },
];
export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/company/connect-grid/",
  facebook: "#",
  instagram: "#",
  x: "#",
};
export const TEAM_MEMBERS = [
  {
    name: "Hisham Ar-Rassy",
    title: "CEO & Founder",
    avatar: "https://i.pravatar.cc/150?img=11",
    bio: "Visionary leader with a passion for digital innovation and strategic growth.",
  },
  {
    name: "Ahmed Hesham",
    title: "Chief Operations Officer",
    avatar: "https://i.pravatar.cc/150?img=12",
    bio: "Expert in optimizing processes and ensuring operational excellence across all projects.",
  },
  {
    name: "Hassan ElSayed",
    title: "Marketing Director",
    avatar: "https://i.pravatar.cc/150?img=13",
    bio: "Creative strategist who crafts compelling campaigns that captivate audiences.",
  },
  {
    name: "Omar AlKhateb",
    title: "Creative Director",
    avatar: "https://i.pravatar.cc/150?img=14",
    bio: "The artistic force behind our stunning designs and impactful brand identities.",
  },
];
export const PACKAGES_DATA = [
  {
    name: "Starter",
    price: "$499",
    priceSuffix: "/mo",
    description: "Perfect for new businesses looking to establish a social media presence.",
    features: [
      "2 Social Media Platforms",
      "12 Posts per Month",
      "Basic Community Management",
      "Monthly Performance Report",
      "Content Calendar",
    ],
    cta: "Choose Starter",
    isPopular: false,
  },
  {
    name: "Growth",
    price: "$999",
    priceSuffix: "/mo",
    description: "Ideal for growing businesses aiming to increase engagement and reach.",
    features: [
      "3 Social Media Platforms",
      "20 Posts per Month",
      "Pro Community Management",
      "Bi-Weekly Performance Report",
      "Content & Strategy",
      "Basic Ad Management",
    ],
    cta: "Choose Growth",
    isPopular: true,
  },
  {
    name: "Scale",
    price: "$1999",
    priceSuffix: "/mo",
    description: "Comprehensive solution for established brands seeking market leadership.",
    features: [
      "4+ Social Media Platforms",
      "30+ Posts per Month",
      "Dedicated Community Manager",
      "Weekly Performance Report",
      "Advanced Content & Strategy",
      "Full Ad Campaign Management",
      "Influencer Outreach",
    ],
    cta: "Choose Scale",
    isPopular: false,
  },
];
export const SERVICES_DETAILS = {
  'digital-marketing-strategy': {
    title: 'Digital Marketing Strategy',
    subtitle: 'A Roadmap to Your Digital Success',
    description: 'We develop comprehensive, data-driven digital marketing strategies tailored to your unique business goals. Our strategic plans provide a clear roadmap for sustainable growth, ensuring every marketing effort is aligned and effective.',
    keyFeatures: ['Market & Competitor Analysis', 'Audience Persona Development', 'Multi-Channel Funnel Strategy', 'KPI & Goal Setting', 'Budget Allocation Planning', 'Performance Measurement Framework'],
    benefits: ['Achieve cohesive marketing efforts across all channels.', 'Maximize ROI with targeted and efficient campaigns.', 'Gain a clear understanding of your target audience.', 'Make informed decisions based on robust data and analytics.'],
    process: [
      { title: 'Discovery & Goal Setting', description: 'We start by understanding your business, objectives, and challenges.' },
      { title: 'Research & Analysis', description: 'In-depth analysis of your market, competitors, and audience.' },
      { title: 'Strategy Formulation', description: 'Crafting a tailored, actionable strategy with clear milestones.' },
      { title: 'Implementation & Optimization', description: 'Executing the plan and continuously optimizing for best results.' },
    ],
  },
  'social-media-management': {
    title: 'Social Media Management',
    subtitle: 'Building and Engaging Your Online Community',
    description: 'Our team creates and manages high-impact social media campaigns that build brand awareness, foster engagement, and drive conversions. We handle everything from content creation to community management, turning your social channels into powerful marketing assets.',
    keyFeatures: ['Content Creation & Curation', 'Community Engagement', 'Social Media Advertising', 'Influencer Marketing', 'Platform-Specific Strategies', 'Analytics & Reporting'],
    benefits: ['Increase brand loyalty and customer engagement.', 'Reach a wider, more targeted audience.', 'Drive website traffic and generate qualified leads.', 'Gain valuable insights into customer behavior and preferences.'],
    process: [
      { title: 'Platform Audit & Strategy', description: 'Analyzing your current presence and defining a path forward.' },
      { title: 'Content Calendar Creation', description: 'Planning engaging and relevant content for your audience.' },
      { title: 'Execution & Engagement', description: 'Posting content and actively engaging with your community.' },
      { title: 'Reporting & Refinement', description: 'Analyzing performance and refining the strategy for growth.' },
    ],
  },
  'search-engine-optimization': {
    title: 'Search Engine Optimization (SEO)',
    subtitle: 'Climb the Ranks, Drive Organic Traffic',
    description: 'Boost your visibility on search engines and attract high-quality organic traffic. Our SEO services cover all aspects of optimization, from technical audits and on-page content to link building and local SEO, ensuring you rank for the keywords that matter most.',
    keyFeatures: ['Technical SEO Audit', 'Keyword Research & Strategy', 'On-Page & Off-Page SEO', 'Content Optimization', 'Link Building', 'Local SEO'],
    benefits: ['Achieve higher rankings in search results.', 'Increase organic, high-intent website traffic.', 'Build long-term brand authority and credibility.', 'Generate a sustainable stream of leads and sales.'],
    process: [
      { title: 'SEO Audit & Keyword Research', description: 'Identifying opportunities and foundational keywords.' },
      { title: 'On-Page Optimization', description: 'Optimizing site structure, content, and meta tags.' },
      { title: 'Content & Link Building', description: 'Creating valuable content and earning authoritative backlinks.' },
      { title: 'Performance Tracking', description: 'Monitoring rankings, traffic, and conversions to guide strategy.' },
    ],
  },
  'pay-per-click-advertising': {
    title: 'Pay-Per-Click Advertising (PPC)',
    subtitle: 'Instant Traffic, Measurable Results',
    description: 'Get immediate visibility and drive targeted traffic to your website with our expert PPC management services. We create, manage, and optimize campaigns across Google Ads, Bing, and social media platforms to maximize your return on ad spend.',
    keyFeatures: ['Campaign Strategy & Setup', 'Keyword Management', 'Ad Copywriting & A/B Testing', 'Landing Page Optimization', 'Conversion Tracking', 'Performance Reporting'],
    benefits: ['Generate leads and sales quickly.', 'Control your budget with precision.', 'Reach customers at the exact moment they are searching.', 'Gain valuable data on keywords and customer behavior.'],
    process: [
      { title: 'Strategy & Account Setup', description: 'Defining campaign goals and structuring the ad account.' },
      { title: 'Campaign Launch', description: 'Creating ads and landing pages, then launching the campaign.' },
      { title: 'Monitoring & Optimization', description: 'Continuously tracking performance and making data-driven adjustments.' },
      { title: 'Reporting', description: 'Providing clear, concise reports on campaign performance and ROI.' },
    ],
  },
  'content-marketing': {
    title: 'Content Marketing',
    subtitle: 'Engage, Educate, and Convert',
    description: 'Fuel your marketing funnel with high-quality, relevant content that attracts your target audience and builds trust. From blog posts and case studies to videos and infographics, we create content that positions you as an industry leader.',
    keyFeatures: ['Content Strategy', 'Blog & Article Writing', 'Video & Visual Content', 'Ebooks & Whitepapers', 'Content Distribution', 'Performance Analysis'],
    benefits: ['Attract and retain a clearly defined audience.', 'Establish brand authority and thought leadership.', 'Improve SEO rankings and organic traffic.', 'Nurture leads through the sales funnel.'],
    process: [
      { title: 'Strategy & Topic Ideation', description: 'Planning content that aligns with business goals and audience needs.' },
      { title: 'Content Creation', description: 'Producing high-quality, engaging content in various formats.' },
      { title: 'Distribution & Promotion', description: 'Ensuring your content reaches the right audience on the right channels.' },
      { title: 'Measurement & ROI', description: 'Tracking content performance and its impact on business objectives.' },
    ],
  },
  'email-marketing': {
    title: 'Email Marketing',
    subtitle: 'Directly Connecting with Your Audience',
    description: 'Nurture leads and build lasting customer relationships with targeted email marketing campaigns. We design, write, and manage everything from newsletters to complex automation sequences that drive engagement and revenue.',
    keyFeatures: ['Campaign Strategy', 'Email Design & Copywriting', 'List Segmentation', 'Marketing Automation', 'A/B Testing', 'Analytics & Reporting'],
    benefits: ['Achieve one of the highest ROIs in digital marketing.', 'Build direct relationships with your customers.', 'Drive repeat business and increase customer lifetime value.', 'Deliver personalized messages at scale.'],
    process: [
      { title: 'Strategy & List Growth', description: 'Defining goals and implementing strategies to grow your email list.' },
      { title: 'Campaign Development', description: 'Designing and writing compelling email campaigns and automations.' },
      { title: 'Deployment & Testing', description: 'Sending campaigns and A/B testing for optimal performance.' },
      { title: 'Analysis & Optimization', description: 'Reviewing results to continuously improve future campaigns.' },
    ],
  },
  'web-design-development': {
    title: 'Web Design & Development',
    subtitle: 'Your Digital Storefront, Perfected',
    description: 'We design and build beautiful, responsive, and high-performing websites that provide an exceptional user experience and convert visitors into customers. Our focus is on creating a perfect blend of aesthetics and functionality.',
    keyFeatures: ['UI/UX Design', 'Responsive Web Development', 'E-commerce Solutions', 'Content Management Systems (CMS)', 'Performance Optimization', 'Website Maintenance'],
    benefits: ['Make a powerful first impression with a professional design.', 'Provide a seamless experience across all devices.', 'Increase conversion rates with a user-centric design.', 'Easily manage and update your website content.'],
    process: [
      { title: 'Discovery & Planning', description: 'Understanding your needs and planning the site architecture.' },
      { title: 'Design & Prototyping', description: 'Creating wireframes and visual designs for your approval.' },
      { title: 'Development & CMS Integration', description: 'Building the website with clean, efficient code.' },
      { title: 'Launch & Training', description: 'Deploying the site and training your team on how to use it.' },
    ],
  },
  'brand-identity-design': {
    title: 'Brand Identity & Design',
    subtitle: 'Crafting a Memorable Brand Presence',
    description: 'Your brand is more than just a logo. We develop comprehensive brand identities that communicate your values and resonate with your target audience. From logo design to brand guidelines, we create a cohesive and powerful brand presence.',
    keyFeatures: ['Logo Design', 'Color Palette & Typography', 'Brand Guidelines', 'Marketing Collateral Design', 'Visual Style Development', 'Brand Messaging'],
    benefits: ['Stand out from the competition with a unique identity.', 'Build brand recognition and trust.', 'Ensure consistency across all marketing materials.', 'Create an emotional connection with your audience.'],
    process: [
      { title: 'Brand Workshop', description: 'Defining your brand’s mission, vision, and values.' },
      { title: 'Concept Development', description: 'Exploring visual directions and creating initial concepts.' },
      { title: 'Design Refinement', description: 'Developing the chosen concept into a full brand identity system.' },
      { title: 'Guideline Creation', description: 'Creating a comprehensive brand book for consistent application.' },
    ],
  },
  'analytics-reporting': {
    title: 'Analytics & Reporting',
    subtitle: 'Turning Data into Actionable Insights',
    description: 'Make smarter marketing decisions with our analytics and reporting services. We set up advanced tracking, analyze performance data, and deliver clear, actionable reports that reveal what’s working and where to improve.',
    keyFeatures: ['Analytics Implementation', 'Custom Dashboards', 'Conversion Tracking', 'Data Analysis & Insights', 'Performance Reporting', 'Attribution Modeling'],
    benefits: ['Understand your marketing ROI with clarity.', 'Identify opportunities for growth and optimization.', 'Gain a deep understanding of your customer journey.', 'Align your marketing efforts with business outcomes.'],
    process: [
      { title: 'Setup & Configuration', description: 'Implementing and configuring analytics tools for accurate data collection.' },
      { title: 'Data Analysis', description: 'Digging into the data to identify trends, patterns, and insights.' },
      { title: 'Dashboard Creation', description: 'Building custom dashboards for easy, at-a-glance performance monitoring.' },
      { title: 'Reporting & Recommendations', description: 'Delivering regular reports with actionable recommendations.' },
    ],
  },
  'conversion-rate-optimization': {
    title: 'Conversion Rate Optimization (CRO)',
    subtitle: 'Maximizing the Value of Your Traffic',
    description: 'Turn more of your website visitors into customers. Our CRO services use a data-driven approach of testing and analysis to improve your website’s user experience and increase conversion rates, maximizing the value of every visitor.',
    keyFeatures: ['User Behavior Analysis', 'A/B & Multivariate Testing', 'Landing Page Optimization', 'Funnel Analysis', 'Heatmap & Session Recording', 'UX/UI Improvements'],
    benefits: ['Increase leads, sales, and revenue from your existing traffic.', 'Improve your website’s user experience.', 'Gain valuable insights into visitor behavior.', 'Achieve a higher return on your marketing spend.'],
    process: [
      { title: 'Data Analysis & Research', description: 'Analyzing user data to identify conversion barriers.' },
      { title: 'Hypothesis & Test Planning', description: 'Formulating data-backed hypotheses for A/B testing.' },
      { title: 'Test Implementation', description: 'Designing, developing, and launching tests on your website.' },
      { title: 'Analysis & Iteration', description: 'Analyzing test results and iterating for continuous improvement.' },
    ],
  },
};
export const CASE_STUDIES_DETAILS = {
  'ecommerce-seo-overhaul': {
    title: "E-commerce SEO Overhaul for InnovateTech",
    category: "SEO & Content Marketing",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
    challenge: "InnovateTech, a growing e-commerce store for consumer electronics, was struggling with low organic visibility. Despite having great products, they were outranked by larger competitors for crucial keywords, leading to stagnant organic traffic and sales.",
    solution: "ConnectGrid conducted a comprehensive SEO audit, identifying technical issues, content gaps, and backlink opportunities. We implemented a multi-faceted strategy that included: a complete technical SEO fix, a keyword-driven content plan for the blog and product categories, and a targeted link-building campaign to build domain authority.",
    results: {
      summary: "The campaign dramatically improved InnovateTech's search engine rankings, leading to a significant and sustainable increase in organic traffic and revenue.",
      stats: [
        { value: "120%", label: "Increase in Organic Traffic" },
        { value: "75%", label: "Increase in Organic Revenue" },
        { value: "Top 3", label: "Ranking for 50+ Keywords" },
      ],
    },
    services: ['Search Engine Optimization (SEO)', 'Content Marketing', 'Digital Marketing Strategy'],
  },
  'b2b-social-media-campaign': {
    title: "B2B Social Media Campaign for TechSolutions",
    category: "Social Media Management",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop",
    challenge: "TechSolutions, a B2B software provider, wanted to leverage LinkedIn to generate high-quality leads. Their existing social media presence was inconsistent and failed to engage their target audience of C-level executives and IT managers.",
    solution: "We developed a sophisticated LinkedIn strategy focused on thought leadership. This involved creating and sharing in-depth articles, case studies, and video content. We also launched a targeted LinkedIn Ads campaign aimed at key decision-makers, using precise audience segmentation and compelling ad copy.",
    results: {
      summary: "The campaign successfully positioned TechSolutions as an industry leader on LinkedIn, resulting in a substantial increase in qualified leads and a lower cost-per-acquisition.",
      stats: [
        { value: "300%", label: "Increase in LinkedIn Engagement" },
        { value: "4x", label: "More Marketing Qualified Leads" },
        { value: "40%", label: "Decrease in Cost-Per-Lead" },
      ],
    },
    services: ['Social Media Management', 'Pay-Per-Click Advertising (PPC)', 'Content Marketing'],
  },
  'brand-identity-for-startup': {
    title: "Brand Identity for EcoGoods Startup",
    category: "Branding & Web Design",
    image: "https://images.unsplash.com/photo-1559028006-44a3a5f031d8?q=80&w=1935&auto=format&fit=crop",
    challenge: "EcoGoods, a new startup offering sustainable home products, needed a brand identity and e-commerce website that would communicate their eco-friendly values and appeal to a conscious consumer base in a crowded market.",
    solution: "ConnectGrid created a complete brand identity, including a logo, color palette, and typography that reflected nature and sustainability. We then designed and developed a user-friendly Shopify website with a clean, minimalist aesthetic, focusing on storytelling and product transparency to build trust with customers.",
    results: {
      summary: "The new brand identity and website gave EcoGoods a professional and compelling market presence, contributing to a highly successful launch and strong initial sales.",
      stats: [
        { value: "500+", label: "Pre-launch Signups" },
        { value: "3.5%", label: "E-commerce Conversion Rate" },
        { value: "25%", label: "Higher Average Order Value" },
      ],
    },
    services: ['Brand Identity & Design', 'Web Design & Development', 'Digital Marketing Strategy'],
  },
};
export const BLOG_POSTS = {
  'the-ultimate-guide-to-seo-in-2024': {
    title: 'The Ultimate Guide to SEO in 2024',
    author: 'Hassan ElSayed',
    date: '2024-05-15',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?q=80&w=2070&auto=format&fit=crop',
    excerpt: 'Search Engine Optimization is constantly evolving. In this guide, we break down the most critical ranking factors and strategies you need to know to dominate the SERPs in 2024.',
    content: [
      'The digital landscape is in a perpetual state of flux, and SEO is no exception. What worked last year might not be as effective today. As we navigate 2024, understanding the core pillars of modern SEO is crucial for any business looking to increase its online visibility. This guide will walk you through the essential components of a successful SEO strategy.',
      'First and foremost, user experience (UX) has become a cornerstone of SEO. Google\'s algorithm increasingly favors websites that provide a seamless, intuitive, and engaging experience for visitors. This includes fast loading times (Core Web Vitals), mobile-friendliness, and easy navigation. A user who enjoys their time on your site is more likely to stay longer, reducing bounce rates and signaling to search engines that your content is valuable.',
      'Content remains king, but the kingdom has new rules. High-quality, in-depth, and authoritative content is non-negotiable. E-E-A-T (Experience, Expertise, Authoritativeness, and Trustworthiness) is a critical concept, especially for "Your Money or Your Life" (YMYL) topics. Your content must not only be well-written and relevant but also demonstrate a deep understanding of the subject matter, backed by credible sources and author credentials.',
      'Finally, technical SEO forms the foundation upon which great content and UX can shine. This includes a logical site structure, clean URLs, proper use of header tags, schema markup for rich snippets, and an optimized robots.txt file. Without a solid technical foundation, even the best content may struggle to rank. By focusing on these three pillars—User Experience, High-Quality Content, and Technical SEO—you can build a robust strategy that stands the test of time and algorithm updates.'
    ],
  },
  '5-social-media-trends-to-watch': {
    title: '5 Social Media Trends Your Business Can\'t Ignore',
    author: 'Omar AlKhateb',
    date: '2024-05-10',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop',
    excerpt: 'From the rise of AI-driven content to the dominance of short-form video, we explore the top 5 social media trends that will shape marketing strategies this year.',
    content: [
      'Social media is a fast-paced world where trends can emerge and fade in the blink of an eye. For businesses, staying ahead of the curve is essential to maintaining relevance and effectively engaging with their audience. Here are five key trends that are defining the social media landscape this year.',
      '1. The Dominance of Short-Form Video: Platforms like TikTok, Instagram Reels, and YouTube Shorts continue to capture user attention. These bite-sized videos are perfect for storytelling, tutorials, and behind-the-scenes content. Businesses that can create authentic and entertaining short-form video will have a significant advantage.',
      '2. AI in Content Creation: Artificial intelligence is no longer a futuristic concept; it\'s a practical tool for social media managers. AI can help with generating content ideas, writing copy, creating images, and even analyzing performance data to suggest optimizations. Leveraging AI can save time and enhance creativity.',
      '3. The Shift to Niche Communities: Users are increasingly seeking more meaningful connections in smaller, private communities (e.g., Discord servers, Facebook Groups). Brands that can foster or participate in these niche communities can build deeper relationships and brand loyalty.',
      '4. Social Commerce is Maturing: The line between social media and e-commerce is blurring. In-app shopping features are becoming more sophisticated, allowing users to discover and purchase products without ever leaving the platform. A seamless social shopping experience is becoming a must-have.',
      '5. Authenticity Over Everything: Polished, overly-produced content is losing its appeal. Today\'s consumers crave authenticity and transparency. Brands that showcase their human side, embrace user-generated content (UGC), and are not afraid to be real will resonate most with their audience.'
    ],
  },
  'ppc-vs-seo-which-is-right-for-you': {
    title: 'PPC vs. SEO: Which Is Right for Your Business?',
    author: 'Ahmed Hesham',
    date: '2024-05-01',
    readTime: '7 min',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop',
    excerpt: 'A common dilemma for marketers is choosing between PPC and SEO. Both are powerful, but they serve different purposes. We break down the pros and cons to help you decide.',
    content: [
      'When it comes to driving traffic from search engines, two primary strategies stand out: Pay-Per-Click (PPC) advertising and Search Engine Optimization (SEO). While both aim to increase your visibility on search engine results pages (SERPs), they operate very differently. Understanding their strengths and weaknesses is key to allocating your marketing budget effectively.',
      'SEO is the practice of optimizing your website to rank higher in the organic (non-paid) search results. Its biggest advantage is its potential for long-term, sustainable traffic. Once you achieve high rankings for your target keywords, you can receive a steady stream of "free" traffic. SEO builds brand credibility and authority over time. However, it\'s a long game; it can take months, or even years, to see significant results, and it requires continuous effort to maintain rankings.',
      'PPC, on the other hand, involves paying for ads to appear at the top of the search results. The most significant benefit of PPC is its speed. You can start driving targeted traffic to your website almost instantly. It offers a high degree of control and measurability; you can target specific demographics, track your return on investment (ROI) precisely, and A/B test ad copy and landing pages. The main drawback is the cost. The traffic stops as soon as you stop paying, and it can become expensive in competitive industries.',
      'So, which is right for you? The answer is often "both." A balanced digital marketing strategy frequently involves using PPC for immediate results and lead generation while simultaneously investing in a long-term SEO strategy to build organic authority and reduce reliance on paid ads over time. For a new business, PPC can provide the initial traction needed to get off the ground. For an established business, SEO might be the primary focus, with PPC used for specific campaigns or to target highly competitive keywords. Ultimately, the best approach depends on your budget, timeline, and business goals.'
    ],
  },
};
export const CAREER_OPENINGS = [
  {
    title: "Digital Marketing Specialist",
    location: "Riyadh, Saudi Arabia",
    type: "Full-time",
    description: "We are looking for a data-driven Digital Marketing Specialist to develop, implement, track, and optimize our digital marketing campaigns across all digital channels.",
  },
  {
    title: "SEO Analyst",
    location: "Remote",
    type: "Full-time",
    description: "Join our team as an SEO Analyst to manage all search engine optimization activities, including content strategy, link building, and keyword strategy to increase rankings.",
  },
  {
    title: "Social Media Manager",
    location: "Riyadh, Saudi Arabia",
    type: "Full-time",
    description: "We're hiring a creative Social Media Manager to manage our clients' social media presence, create engaging content, and grow their online communities.",
  },
  {
    title: "Frontend Developer (React)",
    location: "Remote",
    type: "Contract",
    description: "Seeking a skilled React developer to help us build and maintain stunning, high-performance web applications for our clients. Strong experience with Tailwind CSS is a must.",
  },
];