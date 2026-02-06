import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();


  // Mock data for blog posts (In a real app, this would come from a CMS or API)
  const blogPosts = [
    {
      id: 1,
      date: "FEB 04, 2026",
      title: "SCALING ARCHITECTURAL INTERFACES IN REACT",
      category: "ENGINEERING",
      image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80",
      readTime: "7 MIN READ",
      content: `
        <p>In the rapidly evolving landscape of web development, the concept of "Architectural Interfaces" has emerged as a crucial paradigm for building scalable React applications. This approach treats UI components not just as visual elements, but as structured data entities that follow rigorous engineering principles.</p>
        
        <h3>The Foundation of Scalability</h3>
        <p>A truly scalable interface is one that can handle complexity without sacrificing performance. This starts with a robust design system. By establishing a set of foundational tokens—colors, typography, spacing—we create a shared language between design and engineering.</p>
        
        <p>In React, this translates to highly modular components. Each component should have a single responsibility and be agnostic of its parent environment. This "lego-block" approach allows for rapid prototyping and consistent deployment across large-scale ecosystems.</p>

        <blockquote>
          "Design is not just what it looks like and feels like. Design is how it works." 
          <span class="block mt-2 text-sm text-white/40">— Steve Jobs</span>
        </blockquote>

        <h3>Technical Precision</h3>
        <p>When engineering these interfaces, we must prioritize technical precision. This includes optimizing bundle sizes, implementing efficient state management, and ensuring accessibility is baked into the core. Using modern tools like Framer Motion for animations and Tailwind CSS for styling allows us to maintain a premium feel while keeping the codebase manageable.</p>
        
        <p>The transition from a simple website to a high-end digital ecosystem requires a shift in mindset. We are no longer just building pages; we are architecting experiences that are as performant as they are beautiful.</p>
      `
    },
    {
      id: 2,
      date: "JAN 28, 2026",
      title: "THE PSYCHOLOGY OF MINIMALIST E-COMMERCE",
      category: "STRATEGY",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80",
      readTime: "5 MIN READ",
      content: `
        <p>Minimalism in e-commerce is far more than an aesthetic choice. It's a strategic psychological tool that reduces cognitive load and guides users towards conversion through purposeful simplicity.</p>
        
        <h3>Less is More</h3>
        <p>In an age of information overload, the cleanest interfaces often win. By removing unnecessary distractions, we allow the product to take center stage. This creates a sense of luxury and exclusivity that resonates with high-end consumers.</p>
        
        <p>Strategic use of whitespace (or "negative space") provides breathing room for the user's eyes, making the navigation experience intuitive and stress-free. Every pixel must earn its place on the screen.</p>

        <h3>Trust through Design</h3>
        <p>A minimalist design communicates sophistication and reliability. When a brand isn't "shouting" for attention with cluttered banners and loud colors, it exudes a quiet confidence that builds long-term trust with the audience.</p>
      `
    },
    {
      id: 3,
      date: "JAN 15, 2026",
      title: "OPTIMIZING MERN STACK FOR CORE WEB VITALS",
      category: "PERFORMANCE",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
      readTime: "9 MIN READ",
      content: `
        <p>Core Web Vitals are the heartbeat of modern SEO and user experience. For developers working with the MERN (MongoDB, Express, React, Node) stack, optimizing these metrics requires a deep dive into both frontend and backend orchestration.</p>
        
        <h3>LCP and FID Optimization</h3>
        <p>Largest Contentful Paint (LCP) and First Input Delay (FID) are critical for perceived performance. Implementing server-side rendering (SSR) or static site generation (SSG) with frameworks like Next.js can significantly improve these markers compared to traditional client-side rendering.</p>
        
        <p>Code splitting, image optimization (WebP format), and efficient caching strategies at the CDN level are essential steps in the performance engineering lifecycle.</p>

        <h3>The Backend Impact</h3>
        <p>A slow API will inevitably lead to a slow frontend. Optimizing MongoDB queries, implementing Redis for caching frequently accessed data, and ensuring Node.js processes are non-blocking are vital for maintaining a high-performance ecosystem.</p>
      `
    }
  ];

  const post = blogPosts.find(p => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
        <h1 className="text-4xl font-black mb-8">ARTICLE NOT FOUND</h1>
        <button 
          onClick={() => navigate('/')}
          className="px-8 py-4 bg-white text-black font-bold rounded-full cursor-pointer"
        >
          RETURN HOME
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Header />
      
      <main className="pt-32 pb-20 px-6 md:px-12 lg:px-20 w-full text-white">
        {/* Back Button */}
        <button 
          onClick={() => navigate('/')}
          className="group flex items-center gap-3 mb-16 text-white/50 hover:text-white transition-all cursor-pointer"
        >
          <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white transition-all">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </div>
          <span className="text-[11px] font-black tracking-[0.3em] uppercase">Return to Journal</span>
        </button>

        {/* Article Content & Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
           {/* Main Article */}
           <div className="lg:col-span-8">
              {/* Header Section Inside Column */}
              <header className="mb-16">
                <div className="flex items-center gap-4 text-[11px] font-black tracking-[0.4em] text-white/30 uppercase mb-8">
                  <span>{post.date}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/10"></span>
                  <span className="text-white/60">{post.category}</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-[65px] font-extrabold uppercase tracking-tighter leading-[0.95] mb-12">
                  {post.title}
                </h1>

                <div className="flex items-center gap-6 text-[10px] font-bold tracking-widest text-white/40 uppercase">
                   <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-neutral-800 border border-white/5 overflow-hidden">
                         <img src="/umar-portrait.png" alt="Umar Awais" className="w-full h-full object-cover" />
                      </div>
                      <span>BY UMAR AWAIS</span>
                   </div>
                   <span>{post.readTime}</span>
                </div>
              </header>

              {/* Feature Image Inside Column */}
              <div className="relative w-full aspect-video mb-16 rounded-[30px] md:rounded-[40px] overflow-hidden border border-white/5">
                 <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover"
                 />
                 <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent"></div>
              </div>

              <article 
                className="prose prose-invert prose-lg max-w-none 
                  prose-headings:uppercase prose-headings:font-extrabold prose-headings:tracking-tighter
                  prose-p:text-white/70 prose-p:leading-relaxed prose-p:mb-8
                  prose-blockquote:border-l-4 prose-blockquote:border-white/20 prose-blockquote:italic prose-blockquote:bg-white/5 prose-blockquote:p-8 prose-blockquote:rounded-r-2xl
                  prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-6"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              
              {/* Post Footer */}
              <div className="mt-24 pt-12 border-t border-white/10">
                 <div className="flex flex-wrap items-center justify-between gap-8">
                    <div className="flex items-center gap-4">
                       <span className="text-[10px] font-black tracking-widest text-white/20 uppercase">Share Article</span>
                       <div className="flex gap-4">
                          {['TW', 'LI', 'FB'].map(s => (
                             <a key={s} href="#" className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center text-[11px] font-extrabold text-white/40 hover:text-white hover:border-white hover:bg-white/5 transition-all">{s}</a>
                          ))}
                       </div>
                    </div>
                    
                    <button 
                      onClick={() => navigate('/')}
                      className="px-10 py-4 rounded-full bg-white text-black text-[11px] font-black tracking-[0.3em] uppercase hover:bg-neutral-200 transition-all cursor-pointer"
                    >
                      Browse More Articles
                    </button>
                 </div>
              </div>
           </div>

           {/* Sidebar */}
           <aside className="lg:col-span-4 flex flex-col gap-16">
              {/* Author Section */}
              <div className="p-10 rounded-[40px] bg-white/2 border border-white/5 hover:border-white/10 transition-colors duration-500">
                 <h4 className="text-[10px] font-black tracking-[0.4em] text-white/20 uppercase mb-8">Architect</h4>
                 <div className="flex items-center gap-6 mb-8">
                    <div className="w-16 h-16 rounded-full overflow-hidden border border-white/10 bg-neutral-900">
                       <img src="/umar-portrait.png" alt="Umar Awais" className="w-full h-full object-cover" />
                    </div>
                    <div>
                       <p className="text-base font-black uppercase tracking-tight text-white/90">Umar Awais</p>
                       <p className="text-[10px] text-white/30 uppercase tracking-[0.2em] mt-1">Full-Stack Engineer</p>
                    </div>
                 </div>
                 <p className="text-xs text-white/50 leading-relaxed mb-8 font-medium">
                    Specializing in the synthesis of high-end architectural design and high-performance technical engineering.
                 </p>
                 <div className="flex gap-4">
                    <a href="#" className="text-[10px] font-black tracking-widest text-white/60 hover:text-white transition-colors uppercase border-b border-white/10 pb-1">Profile</a>
                    <a href="#" className="text-[10px] font-black tracking-widest text-white/60 hover:text-white transition-colors uppercase border-b border-white/10 pb-1">Journal</a>
                 </div>
              </div>

              {/* Recent Articles */}
              <div className="flex flex-col gap-10">
                 <h4 className="text-[10px] font-black tracking-[0.4em] text-white/20 uppercase">Latest Perspectives</h4>
                 <div className="flex flex-col gap-10">
                    {blogPosts.filter(p => p.id !== post.id).map(p => (
                       <Link key={p.id} to={`/blog/${p.id}`} className="group block">
                          <div className="flex items-center gap-4 mb-3">
                             <span className="text-[9px] font-black tracking-widest text-white/20 uppercase">{p.date}</span>
                             <span className="w-1 h-1 rounded-full bg-white/10"></span>
                             <span className="text-[9px] font-black tracking-widest text-white/40 uppercase">{p.category}</span>
                          </div>
                          <p className="text-sm md:text-base font-bold uppercase tracking-tight group-hover:text-white transition-colors line-clamp-2 leading-tight text-white/70">
                             {p.title}
                          </p>
                       </Link>
                    ))}
                 </div>
              </div>

              {/* Categories Tag Cloud */}
              <div className="flex flex-col gap-8">
                 <h4 className="text-[10px] font-black tracking-[0.4em] text-white/20 uppercase">Taxonomy</h4>
                 <div className="flex flex-wrap gap-2">
                    {['Engineering', 'Strategy', 'Performance', 'Interface', 'Systems', 'Motion'].map(tag => (
                       <button key={tag} className="px-5 py-2.5 rounded-full bg-white/3 border border-white/5 text-[9px] font-black tracking-widest text-white/40 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all uppercase cursor-pointer">
                          {tag}
                       </button>
                    ))}
                 </div>
              </div>

              {/* CTA Widget */}
              <div 
                onClick={() => {
                  navigate('/');
                  setTimeout(() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 300);
                }}
                className="relative p-10 rounded-[40px] bg-white text-black overflow-hidden group cursor-pointer shadow-[0_30px_60px_-15px_rgba(255,255,255,0.1)]"
              >
                 <div className="relative z-10">
                    <h4 className="text-[10px] font-black tracking-[0.4em] text-black/40 uppercase mb-4">Collaboration</h4>
                    <p className="text-xl font-black uppercase tracking-tighter leading-none mb-8">Ready to architect your next ecosystem?</p>
                    <button className="flex items-center gap-2 group-hover:translate-x-2 transition-transform duration-500">
                       <span className="text-[10px] font-black tracking-widest uppercase">Start Project</span>
                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                       </svg>
                    </button>
                 </div>
                 {/* Decorative background element */}
                 <div className="absolute -right-4 -bottom-4 w-24 h-24 rounded-full bg-black/5 group-hover:scale-150 transition-transform duration-700"></div>
              </div>
           </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogDetails;
