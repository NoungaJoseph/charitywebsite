import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PremiumHeroCarousel from '../components/PremiumHeroCarousel';
import ProgramsGrid from '../components/ProgramsGrid';
import ImpactDashboard from '../components/ImpactDashboard';
import BeneficiaryStories from '../components/BeneficiaryStories';
import LatestBlog from '../components/LatestBlog';
import NewsletterCTA from '../components/NewsletterCTA';
import AnimatedNetworkBg from '../components/AnimatedNetworkBg';
import CameroonMap from '../components/CameroonMap';
import FadeIn from '../components/FadeIn';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, ArrowRight, MapPin, CheckCircle } from 'lucide-react';

/* ─── CTA Cards Data ─── */
const ctaCards = [
    {
        image: '/assets/charity/apply-for-help.png',
        title: 'Apply for Help',
        desc: 'Need support for education, healthcare, or emergency assistance? Apply through our programme intake.',
        to: '/contact',
        label: 'Start Application',
    },
    {
        image: '/assets/charity/report-community-issue.png',
        title: 'Report Community Issue',
        desc: 'Know of a community in need of clean water, healthcare, or urgent humanitarian support?',
        to: '/contact',
        label: 'Report a Case',
    },
    {
        image: '/assets/charity/donate-now.png',
        title: 'Donate Now',
        desc: 'Every contribution funds education, clean water, and healthcare for families across Cameroon.',
        to: '/donate',
        label: 'Donate Today',
    },
    {
        image: '/assets/charity/partner-with-us.png',
        title: 'Partner With Us',
        desc: 'Organisations and individuals can partner with Enako Outreach to amplify our community impact.',
        to: '/partnership',
        label: 'Start Partnership',
    },
];

/* ─── Success Stories ─── */
const successStories = [
    {
        name: 'Amina Bello',
        region: 'North West Region',
        program: 'Single Mothers Assistance',
        quote: 'After losing my husband, I had no income and three children to feed. Enako gave me skills training and startup funds — I now run my own tailoring business and can pay my children\'s school fees.',
        image: '/assets/charity/our-expertize-in-action.png',
        color: 'border-purple-200 bg-purple-50',
        tagColor: 'bg-purple-100 text-purple-700',
    },
    {
        name: 'Emmanuel Fon',
        region: 'West Region',
        program: 'University Scholarship',
        quote: 'I scored top marks in my BEPC but my family couldn\'t afford university. Enako\'s scholarship paid my entire engineering degree. Today I work at a construction firm in Douala.',
        image: '/assets/charity/our-expertize-in-action.png',
        color: 'border-blue-200 bg-blue-50',
        tagColor: 'bg-blue-100 text-blue-700',
    },
    {
        name: 'Clarisse Mbah',
        region: 'Littoral Region',
        program: 'Clean Water Initiative',
        quote: 'Our village women used to walk 4km each morning for water. Since the borehole was installed last year, we have clean water 50 metres from our homes. It has changed everything.',
        image: '/assets/charity/our-expertize-in-action.png',
        color: 'border-cyan-200 bg-cyan-50',
        tagColor: 'bg-cyan-100 text-cyan-700',
    },
];

/* ─── Mission points ─── */
const missionPoints = [
    { icon: '/assets/charity/education-access.png', label: 'Education Access', desc: 'Scholarships from primary to university level' },
    { icon: '/assets/charity/clean-water.png', label: 'Clean Water', desc: 'Boreholes and purification for rural communities' },
    { icon: '/assets/charity/healthcare.png', label: 'Healthcare', desc: 'Mobile clinics and community health workers' },
    { icon: '/assets/charity/woman-support.png', label: 'Women Support', desc: 'Empowering single mothers and widows' },
    { icon: '/assets/charity/youth-empowerment.png', label: 'Youth Empowerment', desc: 'Skills training and entrepreneurship support' },
    { icon: '/assets/charity/emergency-relief.png', label: 'Emergency Relief', desc: 'Rapid response for crisis-affected families' },
];

const Home = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <div className="relative">
                <AnimatedNetworkBg particleCount={40} />
                <main className="relative z-10">

                    {/* 1. Hero Carousel */}
                    <PremiumHeroCarousel />

                    {/* 2. Our Mission */}
                    <section className="py-24 bg-white">
                        <div className="max-w-7xl mx-auto px-6 md:px-12">
                            <div className="grid lg:grid-cols-2 gap-16 items-center">
                                <FadeIn direction="right">
                                    <span className="text-green-600 font-bold text-xs uppercase tracking-widest block mb-3">Our Mission</span>
                                    <h2 className="text-slate-900 font-black text-4xl md:text-5xl leading-tight mb-6">
                                        Transforming Lives Across
                                        <span className="block text-green-600">Cameroon</span>
                                    </h2>
                                    <p className="text-slate-500 text-lg leading-relaxed mb-8">
                                        Enako Outreach is a registered humanitarian NGO dedicated to empowering communities across Cameroon. We work at the grassroots level — partnering with local leaders, schools, and health workers to deliver targeted, sustainable programmes where they matter most.
                                    </p>
                                    <div className="flex flex-wrap gap-3 mb-8">
                                        {['Education', 'Healthcare', 'Clean Water', 'Women Empowerment', 'Youth', 'Emergency Relief'].map((tag) => (
                                            <span key={tag} className="px-4 py-1.5 bg-green-50 text-green-700 text-xs font-bold rounded-full border border-green-200">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <Link to="/about" className="inline-flex items-center gap-2 text-green-600 font-bold hover:gap-4 transition-all">
                                        Learn About Our Work <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </FadeIn>
                                <FadeIn direction="left">
                                    <div className="grid grid-cols-2 gap-4">
                                        {missionPoints.map((item, i) => (
                                            <motion.div key={i} whileHover={{ y: -3 }}
                                                className="p-6 transition-all duration-300">
                                                <img src={item.icon} alt={item.label} className="w-32 h-32 object-contain mb-4" />
                                                <h4 className="font-black text-slate-900 text-2xl mb-2">{item.label}</h4>
                                                <p className="text-slate-600 text-base leading-relaxed">{item.desc}</p>
                                            </motion.div>
                                        ))}
                                    </div>
                                </FadeIn>
                            </div>
                        </div>
                    </section>

                    {/* 3. CTA Action Cards */}
                    <section className="py-16 bg-slate-50">
                        <div className="max-w-7xl mx-auto px-6 md:px-12">
                            <FadeIn direction="up" className="text-center mb-12">
                                <h2 className="text-slate-900 font-black text-3xl md:text-4xl mb-3">How Can We Help You?</h2>
                                <p className="text-slate-500 text-lg">Take action — whether you need assistance or want to give it.</p>
                            </FadeIn>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {ctaCards.map((card, i) => (
                                    <FadeIn key={card.title} direction="up" delay={i * 0.08}>
                                        <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                                            <Link to={card.to} className="relative block group h-[360px] overflow-hidden">
                                                <img
                                                    src={card.image}
                                                    alt={card.title}
                                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-transparent" />
                                                <div className="relative z-10 h-full flex flex-col justify-end p-8">
                                                    <h3 className="font-black text-3xl text-white mb-2">{card.title}</h3>
                                                    <p className="text-white/90 text-base leading-relaxed mb-4 max-w-xl">{card.desc}</p>
                                                    <span className="inline-flex items-center gap-1.5 text-green-300 font-black text-sm uppercase tracking-widest group-hover:gap-3 transition-all">
                                                        {card.label} <ArrowRight className="w-3.5 h-3.5" />
                                                    </span>
                                                </div>
                                            </Link>
                                        </motion.div>
                                    </FadeIn>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* 4. Programs Grid */}
                    <ProgramsGrid />

                    {/* 5. Impact Dashboard */}
                    <ImpactDashboard />

                    {/* 6. Focus Communities Map Preview */}
                    <section className="py-24 bg-slate-50">
                        <div className="max-w-7xl mx-auto px-6 md:px-12">
                            <div className="grid lg:grid-cols-2 gap-14 items-center">
                                <FadeIn direction="right">
                                    <span className="text-green-600 font-bold text-xs uppercase tracking-widest block mb-3">Where We Work</span>
                                    <h2 className="text-slate-900 font-black text-4xl md:text-5xl mb-4">
                                        Focus Communities
                                        <span className="block text-green-600">Across Cameroon</span>
                                    </h2>
                                    <p className="text-slate-500 text-lg leading-relaxed mb-6">
                                        We operate in 5 key regions of Cameroon — Littoral, Centre, North West, South West, and West. Click on any marker to explore our work in each region.
                                    </p>
                                    <div className="space-y-3 mb-8">
                                        {[
                                            { region: 'Littoral (Douala)', work: 'Clean Water, Healthcare, Emergency Relief' },
                                            { region: 'Centre (Yaoundé)', work: 'Scholarships, School Rehab, Teacher Rewards' },
                                            { region: 'North West (Bamenda)', work: 'Emergency Relief, Women Support' },
                                            { region: 'South West (Buea)', work: 'Emergency Relief, Clean Water' },
                                            { region: 'West (Bafoussam)', work: 'Women Empowerment, Healthcare' },
                                        ].map((r) => (
                                            <div key={r.region} className="flex items-start gap-3">
                                                <MapPin className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                                                <div>
                                                    <span className="font-bold text-slate-900 text-sm">{r.region} — </span>
                                                    <span className="text-slate-500 text-sm">{r.work}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <Link to="/focus-communities" className="inline-flex items-center gap-2 bg-green-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-green-700 transition-colors">
                                        Explore All Regions <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </FadeIn>
                                <FadeIn direction="left">
                                    <CameroonMap />
                                </FadeIn>
                            </div>
                        </div>
                    </section>

                    {/* 7. Success Stories */}
                    <section className="py-24 bg-white">
                        <div className="max-w-7xl mx-auto px-6 md:px-12">
                            <FadeIn direction="up" className="text-center mb-14">
                                <span className="text-green-600 font-bold text-xs uppercase tracking-widest block mb-3">Real Impact</span>
                                <h2 className="text-slate-900 font-black text-4xl md:text-5xl mb-4">Success Stories</h2>
                                <p className="text-slate-500 text-xl max-w-2xl mx-auto">
                                    Behind every statistic is a real person whose life has been transformed by your support.
                                </p>
                            </FadeIn>
                            <div className="grid md:grid-cols-3 gap-6 mb-10">
                                {successStories.map((story, i) => (
                                    <FadeIn key={story.name} direction="up" delay={i * 0.1}>
                                        <motion.div whileHover={{ y: -4 }}
                                            className={`rounded-3xl p-8 transition-all duration-300`}>
                                            <div className="flex items-center gap-4 mb-5">
                                                <img src={story.image} alt={story.name}
                                                    className="w-20 h-20 object-cover" />
                                                <div>
                                                    <h4 className="font-black text-slate-900 text-base">{story.name}</h4>
                                                    <div className="flex items-center gap-1 text-slate-500 text-xs">
                                                        <MapPin className="w-3 h-3" />{story.region}
                                                    </div>
                                                </div>
                                            </div>
                                            <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wide ${story.tagColor} mb-4`}>
                                                {story.program}
                                            </span>
                                            <blockquote className="text-slate-600 text-sm leading-relaxed">
                                                "{story.quote}"
                                            </blockquote>
                                            <div className="flex gap-0.5 mt-4">
                                                {[...Array(5)].map((_, s) => (
                                                    <CheckCircle key={s} className="w-4 h-4 text-green-500" />
                                                ))}
                                            </div>
                                        </motion.div>
                                    </FadeIn>
                                ))}
                            </div>
                            <div className="text-center">
                                <Link to="/stories" className="inline-flex items-center gap-2 text-green-600 font-bold hover:gap-4 transition-all">
                                    Read More Stories <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </section>

                    {/* 8. Beneficiary Stories component */}
                    <BeneficiaryStories />

                    {/* 9. Latest Blog */}
                    <LatestBlog />

                    {/* 10. Donation CTA Section */}
                    <section className="py-24 bg-gradient-to-br from-slate-900 via-green-950 to-slate-900 relative overflow-hidden">
                        <div className="absolute inset-0 opacity-10"
                            style={{ backgroundImage: 'radial-gradient(circle, #22c55e 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                            <FadeIn direction="up">
                                <span className="inline-block px-4 py-1.5 rounded-full bg-green-500/20 border border-green-500/30 text-green-300 text-xs font-bold uppercase tracking-widest mb-6">
                                    Make a Difference
                                </span>
                                <h2 className="text-white font-black text-4xl md:text-6xl mb-6">
                                    Your Donation Changes
                                    <span className="block text-green-400">Real Lives</span>
                                </h2>
                                <p className="text-slate-300 text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
                                    Join thousands of supporters funding education, clean water, healthcare, and hope for communities across Cameroon.
                                </p>
                                <div className="flex flex-wrap gap-4 justify-center mb-12">
                                    {[{ amount: 'XAF 5,000', impact: 'School supplies for 1 child' }, { amount: 'XAF 25,000', impact: 'Monthly scholarship support' }, { amount: 'XAF 100,000', impact: 'Borehole maintenance fund' }].map((opt) => (
                                        <div key={opt.amount} className="px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-center backdrop-blur-sm">
                                            <div className="text-white font-black text-lg">{opt.amount}</div>
                                            <div className="text-green-300 text-xs font-medium">{opt.impact}</div>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex flex-wrap gap-4 justify-center">
                                    <Link to="/donate" className="flex items-center gap-2 bg-green-600 text-white font-bold px-10 py-4 rounded-xl hover:bg-green-700 transition-all hover:scale-105 text-lg">
                                        <Heart className="w-5 h-5" /> Donate Now
                                    </Link>
                                    <Link to="/partnership" className="flex items-center gap-2 border-2 border-white/30 text-white font-bold px-10 py-4 rounded-xl hover:bg-white/10 transition-colors text-lg">
                                        Partner With Us <ArrowRight className="w-5 h-5" />
                                    </Link>
                                </div>
                            </FadeIn>
                        </div>
                    </section>

                    {/* 11. Newsletter */}
                    <NewsletterCTA />
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
