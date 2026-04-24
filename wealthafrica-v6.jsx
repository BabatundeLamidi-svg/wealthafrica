import { useState, useEffect, useRef } from "react";

const NAV = [
  { id:"home", label:"Home" },
  { id:"insights", label:"Insights" },
  { id:"editions", label:"Editions" },
  { id:"about", label:"About" },
  { id:"services", label:"What We Do" },
];

const STORIES = [
  { id:"macky-sall", cat:"Editorial · Africa Leadership", title:"The Lion's Next Roar: Macky Sall's New Shot for Africa's Global Relevance", excerpt:"Before the world took notice, WealthAfrica chronicled a presidency building Africa's case on the global stage — from G20 chairmanship to AU leadership. Now, as Sall positions for the United Nations, we revisit the analysis that anticipated a continental ambition never meant to stop at Dakar.", read:"14 min read", bg:"linear-gradient(135deg, #b8d4e8 0%, #d4b8d4 40%, #c9a8b8 100%)", hasImg:true },
  { id:"blue-economy", cat:"Blue Economy · Nigeria", title:"Nigeria's Blue Economy: A $500 Billion Question of Leadership", excerpt:"With 853 kilometres of coastline and exclusive economic zones spanning over 200,000 km², Nigeria sits on a blue economy potential that dwarfs most of its terrestrial resource wealth. Who leads, and who follows?", read:"11 min read", bg:"linear-gradient(135deg, #0D2847 0%, #1a3a5c 50%, #0f2035 100%)", light:true },
  { id:"infra-gap", cat:"Infrastructure · Investment", title:"Africa's $2.6 Trillion Infrastructure Gap: Where the Smart Money Is Moving", excerpt:"How institutional investors are rethinking African infrastructure — from blended finance structures to greenfield equity participation. The landscape is shifting, and the early movers are already in position.", read:"9 min read", bg:"linear-gradient(135deg, #2d1810 0%, #4a2820 50%, #1a1210 100%)", light:true },
];

const ARTICLE = {
  "macky-sall": [
    {t:"p",v:"In December 2023, when Macky Sall stepped down from the Senegalese presidency after a single constitutionally-mandated term — a move that earned him global praise — most observers assumed his public life had reached its dignified conclusion. The Lion of Africa, as WealthAfrica had christened him, had done something vanishingly rare on the continent: he had voluntarily relinquished power."},
    {t:"p",v:"But those who read WealthAfrica's original analysis in our Senegal Presidential Edition understood something the headlines missed. Sall's presidency was never an end in itself. It was a platform — a launching pad for a continental ambition that was always bigger than Dakar."},
    {t:"q",v:"If you have tried to get a package delivered in Lagos, or directed an Uber driver to come to the yellow house near the transformer, you would understand why people were celebrating."},
    {t:"h",v:"Context Matters"},
    {t:"p",v:"Let's establish the context, because context matters here. Sall's trajectory from the Élysée Palace to the African Union chairmanship to the G7 invitation at Hiroshima traced an arc that no other African leader of his generation had managed. He was simultaneously trusted by Western capitals and credible on the African street — a combination that usually proves impossible to sustain."},
    {t:"p",v:"The question WealthAfrica posed in 2023 was not whether Sall would remain relevant after leaving office. It was where he would direct that relevance. The answer, it now appears, is upward — toward the United Nations."},
    {t:"h",v:"The UN Candidacy"},
    {t:"p",v:"Sall's positioning for the UN Secretary-General role represents more than personal ambition. It represents a structural argument that Africa, home to 1.4 billion people and the world's youngest population, cannot continue to be administered by an institution in which it has no leadership voice."},
    {t:"p",v:"This is the argument WealthAfrica has been making since our founding: that African leadership on the global stage is not a matter of charity or representation quotas. It is a matter of economic logic. The continent that will drive the majority of global population growth, urbanization, and resource demand over the next three decades must have a seat at every table where those futures are being shaped."},
  ]
};

function useInView(r,t=0.08){const[v,sV]=useState(false);useEffect(()=>{if(!r.current)return;const o=new IntersectionObserver(([e])=>{if(e.isIntersecting)sV(true)},{threshold:t});o.observe(r.current);return()=>o.disconnect()},[r,t]);return v}

function Fade({children,delay=0,className=""}){
  const r=useRef(null);const v=useInView(r);
  return(
    <div ref={r} className={className} style={{opacity:v?1:0,transform:v?"translateY(0)":"translateY(20px)",transition:`opacity 0.65s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.65s cubic-bezier(0.22,1,0.36,1) ${delay}s`}}>{children}</div>
  );
}

function CardSvg1(){return(<svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}><rect width="400" height="240" fill="#0f1923"/><path d="M0 160 Q50 140 100 160 Q150 180 200 160 Q250 140 300 160 Q350 180 400 160 L400 240 L0 240Z" fill="rgba(25,80,140,0.2)"/><text x="60" y="80" fill="rgba(201,168,76,0.12)" fontSize="48" fontFamily="Georgia" fontWeight="bold">$500B</text><path d="M280 200 L310 170 L340 185 L370 150" stroke="rgba(201,168,76,0.2)" strokeWidth="2" fill="none"/><circle cx="370" cy="150" r="3" fill="rgba(201,168,76,0.4)"/></svg>)}
function CardSvg2(){return(<svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}><rect width="400" height="240" fill="#0f1923"/><rect x="50" y="100" width="24" height="100" fill="rgba(196,30,42,0.12)" rx="2"/><rect x="84" y="70" width="24" height="130" fill="rgba(196,30,42,0.16)" rx="2"/><rect x="118" y="90" width="24" height="110" fill="rgba(196,30,42,0.13)" rx="2"/><rect x="152" y="50" width="24" height="150" fill="rgba(196,30,42,0.2)" rx="2"/><rect x="186" y="60" width="24" height="140" fill="rgba(201,168,76,0.15)" rx="2"/><rect x="220" y="80" width="24" height="120" fill="rgba(201,168,76,0.12)" rx="2"/><rect x="254" y="40" width="24" height="160" fill="rgba(201,168,76,0.18)" rx="2"/><text x="290" y="190" fill="rgba(201,168,76,0.06)" fontSize="56" fontFamily="Georgia" fontWeight="bold">$2.6T</text></svg>)}
function CardSvg3(){return(<svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}><rect width="400" height="240" fill="#0f1923"/><circle cx="140" cy="110" r="50" fill="none" stroke="rgba(196,30,42,0.15)" strokeWidth="2"/><circle cx="260" cy="110" r="50" fill="none" stroke="rgba(201,168,76,0.15)" strokeWidth="2"/><text x="115" y="115" fill="rgba(255,255,255,0.1)" fontSize="13" fontFamily="sans-serif">Public</text><text x="235" y="115" fill="rgba(255,255,255,0.1)" fontSize="13" fontFamily="sans-serif">Private</text><circle cx="200" cy="200" r="22" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="5"/><circle cx="200" cy="200" r="22" fill="none" stroke="rgba(196,30,42,0.3)" strokeWidth="5" strokeDasharray="83 138" transform="rotate(-90 200 200)"/><text x="189" y="205" fill="rgba(255,255,255,0.2)" fontSize="13" fontFamily="Georgia" fontWeight="bold">60%</text></svg>)}

const css=`
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;0,900;1,400;1,700&family=Source+Sans+3:wght@300;400;500;600;700&family=Bebas+Neue&display=swap');
:root{--r:#C41E2A;--rd:#9B1720;--rl:#E8323F;--n:#0A1628;--nm:#111D33;--nl:#1a2d4a;--g:#C9A84C;--gl:#E4CC7A;--gd:rgba(201,168,76,0.15);--c:#FAF7F2;--cd:#F0EBE1;--w:#FAFAF6;--t:#1A1A1A;--tm:#3D4551;--tl:#6B7280;--b:#E5E1D8;--fd:'Playfair Display',Georgia,serif;--fh:'Bebas Neue',Impact,sans-serif;--fb:'Source Sans 3','Source Sans Pro',Helvetica,sans-serif}
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}body{font-family:var(--fb);color:var(--t);background:var(--w);-webkit-font-smoothing:antialiased;overflow-x:hidden}

/* NAV — editorial red */
.nav{position:fixed;top:0;left:0;right:0;z-index:1000;background:#fff;border-bottom:1px solid #f0e8e8;transition:box-shadow 0.3s}
.nav.shd{box-shadow:0 2px 16px rgba(0,0,0,0.05)}
.nav-logo-row{padding:12px 40px 8px;display:flex;align-items:center;justify-content:space-between}
.nav-logo-row img{height:50px;cursor:pointer}
.nav-bar{background:var(--r);padding:0 40px}
.nav-bar-in{max-width:1400px;margin:0 auto;display:flex;align-items:center;justify-content:center;height:42px;gap:6px}
.nav-bar a{font-family:var(--fb);font-size:11px;font-weight:700;letter-spacing:2.5px;text-transform:uppercase;color:rgba(255,255,255,0.7);text-decoration:none;padding:11px 16px;transition:all 0.3s;position:relative}
.nav-bar a:hover{color:#fff}
.nav-bar a.act{color:#fff}
.nav-bar a.act::after{content:'';position:absolute;bottom:0;left:16px;right:16px;height:2px;background:#fff}
.nav-bar .cta{background:#fff;color:var(--r);padding:7px 20px;font-size:10.5px;letter-spacing:2.5px;font-weight:700;margin-left:10px;border:none;cursor:pointer;transition:all 0.3s}
.nav-bar .cta:hover{background:var(--c)}

/* NAV — corporate variant */
.nav.corp .nav-bar{background:var(--n)}
.nav.corp .nav-bar a{color:rgba(250,247,242,0.5)}
.nav.corp .nav-bar a:hover{color:var(--c)}
.nav.corp .nav-bar a.act{color:var(--g)}
.nav.corp .nav-bar a.act::after{background:var(--g)}
.nav.corp .nav-bar .cta{background:var(--g);color:var(--n)}
.nav.corp .nav-bar .cta:hover{background:var(--gl)}

.hamburger{display:none;flex-direction:column;gap:4px;cursor:pointer;background:none;border:none;padding:8px}
.hamburger span{width:20px;height:2px;background:var(--r)}
@media(max-width:960px){.hamburger{display:flex}.nav-bar-in{flex-wrap:wrap;height:auto;padding:6px 0}.nav-bar a{padding:7px 12px;font-size:10px}}

/* CAROUSEL */
.carousel{position:relative;height:calc(100vh - 112px);min-height:480px;overflow:hidden}
.csl{position:absolute;inset:0;display:flex;align-items:center;opacity:0;pointer-events:none;transition:opacity 0.6s,transform 0.6s}
.csl.on{opacity:1;pointer-events:auto;transform:translateX(0)}
.csl.prev{transform:translateX(-30px)}.csl.next{transform:translateX(30px)}
.csl-in{max-width:1400px;margin:0 auto;padding:0 56px;width:100%;display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:center;height:100%}
@media(max-width:960px){.csl-in{grid-template-columns:1fr;padding:0 24px;gap:20px}}
.sl-cat{font-family:var(--fb);font-size:11px;font-weight:700;letter-spacing:4px;text-transform:uppercase;margin-bottom:18px;display:flex;align-items:center;gap:12px}
.sl-cat::before{content:'';width:22px;height:2px}
.sl-cat.dk{color:var(--r)}.sl-cat.dk::before{background:var(--r)}
.sl-cat.lt{color:var(--g)}.sl-cat.lt::before{background:var(--g)}
.sl-t{font-family:var(--fd);font-size:clamp(30px,4.2vw,54px);font-weight:900;line-height:1.08;margin-bottom:22px}
.sl-t.dk{color:var(--r)}.sl-t.lt{color:#fff}
.sl-ex{font-family:var(--fb);font-size:16.5px;font-weight:300;line-height:1.78;margin-bottom:26px;max-width:500px}
.sl-ex.dk{color:var(--tm)}.sl-ex.lt{color:rgba(255,255,255,0.5)}
.sl-rd{font-family:var(--fb);font-size:12px;font-weight:700;letter-spacing:2.5px;text-transform:uppercase;text-decoration:none;display:inline-flex;align-items:center;gap:10px;padding:12px 0;border-bottom:2px solid;cursor:pointer;transition:all 0.3s}
.sl-rd.dk{color:var(--r);border-color:var(--r)}.sl-rd.lt{color:var(--g);border-color:var(--g)}
.sl-rd::after{content:'→';font-size:16px;transition:transform 0.3s}
.sl-rd:hover::after{transform:translateX(4px)}
.sl-m{margin-top:6px;font-family:var(--fb);font-size:11px;font-weight:500;letter-spacing:1px;text-transform:uppercase}
.sl-m.dk{color:var(--tl)}.sl-m.lt{color:rgba(255,255,255,0.3)}
.sl-vis{display:flex;justify-content:center;align-items:center;height:100%}
.sl-vis img{max-height:62vh;max-width:100%;object-fit:contain;filter:drop-shadow(0 16px 36px rgba(0,0,0,0.12))}
.c-dots{position:absolute;bottom:36px;left:56px;display:flex;gap:10px;z-index:10}
.c-dot{width:8px;height:8px;border-radius:50%;cursor:pointer;transition:all 0.3s}
.c-dot.off{background:rgba(0,0,0,0.12)}.c-dot.on{background:var(--r);width:28px;border-radius:4px}
.c-dot.off.lt{background:rgba(255,255,255,0.2)}.c-dot.on.lt{background:var(--g)}
.c-arrows{position:absolute;bottom:36px;right:56px;display:flex;gap:6px;z-index:10}
.c-btn{width:44px;height:44px;border:1px solid rgba(0,0,0,0.12);background:rgba(255,255,255,0.85);color:var(--t);display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:18px;transition:all 0.3s;backdrop-filter:blur(8px)}
.c-btn:hover{background:var(--r);color:#fff;border-color:var(--r)}
.c-btn.lt{border-color:rgba(255,255,255,0.15);background:rgba(255,255,255,0.06);color:#fff}
.c-btn.lt:hover{background:var(--g);color:var(--n);border-color:var(--g)}

/* ARTICLE VIEW */
.av{position:fixed;inset:0;z-index:2000;background:var(--c);overflow-y:auto;opacity:0;pointer-events:none;transition:opacity 0.4s}
.av.open{opacity:1;pointer-events:auto}
.av-back{position:fixed;top:128px;left:40px;z-index:2001;font-family:var(--fb);font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--r);cursor:pointer;display:flex;align-items:center;gap:8px;background:none;border:none}
.av-back::before{content:'←';font-size:16px}
.av-hd{max-width:720px;margin:0 auto;padding:152px 24px 44px;text-align:center}
.av-hd-cat{font-family:var(--fb);font-size:11px;font-weight:700;letter-spacing:4px;text-transform:uppercase;color:var(--r);margin-bottom:18px}
.av-hd h1{font-family:var(--fd);font-size:clamp(28px,3.8vw,44px);font-weight:900;line-height:1.14;color:var(--t);margin-bottom:14px}
.av-hd-m{font-family:var(--fb);font-size:13px;color:var(--tl)}
.av-body{max-width:660px;margin:0 auto;padding:0 24px 80px}
.av-body p{font-family:var(--fb);font-size:18px;line-height:1.92;color:var(--tm);margin-bottom:26px}
.av-body h2{font-family:var(--fd);font-size:26px;font-weight:700;color:var(--t);margin:44px 0 18px;padding-top:28px;border-top:1px solid var(--b)}
.av-body blockquote{font-family:var(--fd);font-size:21px;font-style:italic;line-height:1.5;color:var(--t);border-left:3px solid var(--r);padding:18px 0 18px 28px;margin:36px 0;background:#FDF6F6}

/* INSIGHTS */
.ins-sec{background:var(--w);padding:76px 40px;border-top:1px solid var(--b)}
@media(max-width:960px){.ins-sec{padding:48px 24px}}
.ins-in{max-width:1400px;margin:0 auto}
.ins-hd{display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:40px}
.ins-hd h3{font-family:var(--fd);font-size:30px;font-weight:800;color:var(--t)}
.ins-hd h3 em{color:var(--r);font-style:italic}
.ins-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:26px}
@media(max-width:960px){.ins-grid{grid-template-columns:1fr 1fr}}
@media(max-width:600px){.ins-grid{grid-template-columns:1fr}}
.ins-c{background:#fff;border:1px solid var(--b);overflow:hidden;transition:all 0.4s;cursor:pointer}
.ins-c:hover{box-shadow:0 12px 36px rgba(0,0,0,0.05);transform:translateY(-2px)}
.ins-c-img{aspect-ratio:16/10;overflow:hidden}
.ins-c-body{padding:22px 24px}
.ins-c-cat{font-family:var(--fb);font-size:10px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:var(--r);margin-bottom:8px}
.ins-c h4{font-family:var(--fd);font-size:19px;font-weight:700;line-height:1.28;color:var(--t);margin-bottom:8px}
.ins-c p{font-family:var(--fb);font-size:13.5px;line-height:1.7;color:var(--tl)}
.ins-c-m{margin-top:10px;font-family:var(--fb);font-size:10.5px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;color:#9CA3AF}

/* EDITIONS */
.ed-sec{background:var(--cd);padding:76px 40px;border-top:1px solid var(--b)}
@media(max-width:960px){.ed-sec{padding:48px 24px}}
.ed-in{max-width:1400px;margin:0 auto}
.ey{font-family:var(--fb);font-size:11px;font-weight:700;letter-spacing:5px;text-transform:uppercase;margin-bottom:12px;display:flex;align-items:center;gap:12px}
.ey::before{content:'';width:24px;height:2px}
.ey-r{color:var(--r)}.ey-r::before{background:var(--r)}
.ey-g{color:var(--g)}.ey-g::before{background:var(--g)}
.st{font-family:var(--fd);font-weight:900;line-height:1.14;margin-bottom:14px}
.st-dk{color:var(--t)}.st-dk em{color:var(--r);font-style:italic}
.st-lt{color:var(--c)}.st-lt em{color:var(--g);font-style:italic}
.ss{font-family:var(--fb);font-weight:300;line-height:1.78;margin-bottom:48px}
.ss-dk{color:var(--tl);font-size:16px;max-width:540px}
.ss-lt{color:rgba(250,247,242,0.4);font-size:16.5px;max-width:520px}

.ed-grid{display:grid;grid-template-columns:1fr 1fr;gap:36px}
@media(max-width:960px){.ed-grid{grid-template-columns:1fr}}
.ed-c{background:#fff;border:1px solid var(--b);overflow:hidden;transition:all 0.5s}
.ed-c:hover{box-shadow:0 16px 44px rgba(0,0,0,0.06);transform:translateY(-3px)}
.ed-cv{aspect-ratio:4/3;overflow:hidden;background:#1a1a1a}
.ed-cv img{width:100%;height:100%;object-fit:cover;transition:transform 0.6s}
.ed-c:hover .ed-cv img{transform:scale(1.03)}
.ed-nf{padding:26px}
.ed-tg{font-family:var(--fb);font-size:10px;font-weight:700;letter-spacing:2.5px;text-transform:uppercase;color:var(--r);margin-bottom:8px}
.ed-nf h3{font-family:var(--fd);font-size:20px;font-weight:700;color:var(--t);margin-bottom:8px;line-height:1.3}
.ed-nf p{font-family:var(--fb);font-size:13.5px;line-height:1.72;color:var(--tl)}
.ed-badge{display:inline-block;margin-top:12px;font-family:var(--fb);font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;padding:5px 12px;border:1px solid}
.ed-badge.pub{color:var(--g);border-color:var(--g)}.ed-badge.con{color:var(--r);border-color:var(--r)}

/* ═══ CORPORATE ZONE ═══ */
.zone-line{height:5px;background:linear-gradient(90deg,var(--n),var(--nl),var(--n))}

/* ABOUT — v3 HOME layout in navy+gold */
.abt{position:relative;background:var(--n);overflow:hidden}
.abt-bg{position:absolute;inset:0;background:radial-gradient(ellipse at 75% 15%,rgba(201,168,76,0.06) 0%,transparent 55%),radial-gradient(ellipse at 25% 85%,rgba(201,168,76,0.03) 0%,transparent 45%),linear-gradient(168deg,var(--n) 0%,var(--nm) 50%,var(--nl) 100%)}
.abt-grid-bg{position:absolute;inset:0;background-image:linear-gradient(rgba(201,168,76,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(201,168,76,0.02) 1px,transparent 1px);background-size:64px 64px}
.abt-hero{position:relative;z-index:2;max-width:1320px;margin:0 auto;padding:100px 40px 80px;display:grid;grid-template-columns:1.2fr 0.8fr;gap:64px;align-items:center}
@media(max-width:960px){.abt-hero{grid-template-columns:1fr;gap:36px;padding:72px 24px 48px}}
.abt-ey{font-family:var(--fb);font-size:11px;font-weight:700;letter-spacing:5px;text-transform:uppercase;color:var(--g);margin-bottom:22px;display:flex;align-items:center;gap:14px}
.abt-ey::before{content:'';width:32px;height:1px;background:var(--g)}
.abt h1{font-family:var(--fd);font-size:clamp(32px,4.6vw,56px);font-weight:900;line-height:1.06;color:var(--c);margin-bottom:22px}
.abt h1 em{color:var(--g);font-style:italic}
.abt-sub{font-family:var(--fb);font-size:16.5px;font-weight:300;line-height:1.78;color:rgba(250,247,242,0.45);max-width:480px;margin-bottom:34px}
.abt-cv{display:flex;justify-content:center;perspective:1200px}
.abt-cw{position:relative;max-width:340px;width:100%;transform:rotateY(-5deg) rotateX(2deg);transition:transform 0.6s}
.abt-cw:hover{transform:rotateY(-1deg) rotateX(0.5deg)}
.abt-cw img{width:100%;height:auto;border-radius:3px;box-shadow:0 28px 72px rgba(0,0,0,0.5),0 8px 20px rgba(0,0,0,0.3)}
.abt-badge{position:absolute;bottom:-11px;right:-11px;background:var(--g);color:var(--n);font-family:var(--fb);font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;padding:8px 16px;box-shadow:0 4px 16px rgba(0,0,0,0.25)}

/* Cred strip */
.cred{background:#0f1118;border-top:1px solid var(--gd);border-bottom:1px solid var(--gd);padding:32px 40px}
.cred-in{max-width:1320px;margin:0 auto;display:flex;justify-content:center;gap:64px;flex-wrap:wrap}
.cred-i{text-align:center}
.cred-n{font-family:var(--fh);font-size:36px;color:var(--g);letter-spacing:2px;line-height:1}
.cred-l{font-family:var(--fb);font-size:10px;font-weight:600;letter-spacing:2.5px;text-transform:uppercase;color:rgba(250,247,242,0.3);margin-top:5px}

/* About detail — v3 style */
.abt-detail{background:var(--nm);padding:96px 40px;position:relative;z-index:2}
@media(max-width:960px){.abt-detail{padding:60px 24px}}
.abt-d-in{max-width:1320px;margin:0 auto}
.abt-d-grid{display:grid;grid-template-columns:1fr 1fr;gap:68px;align-items:start}
@media(max-width:960px){.abt-d-grid{grid-template-columns:1fr;gap:40px}}
.abt-d-text p{font-family:var(--fb);font-size:16.5px;line-height:1.88;color:rgba(250,247,242,0.5);margin-bottom:20px}
.abt-d-text p:first-of-type::first-letter{font-family:var(--fd);font-size:60px;font-weight:900;float:left;line-height:0.78;margin-right:12px;margin-top:8px;color:var(--g)}
.pillars{display:flex;flex-direction:column;border-left:2px solid rgba(201,168,76,0.2)}
.pil{padding:24px 28px;border-bottom:1px solid rgba(255,255,255,0.04);transition:all 0.3s}
.pil:last-child{border-bottom:none}
.pil:hover{background:rgba(201,168,76,0.03)}
.pil-n{font-family:var(--fh);font-size:13px;letter-spacing:3px;color:var(--g);margin-bottom:4px}
.pil h4{font-family:var(--fd);font-size:19px;font-weight:700;color:var(--c);margin-bottom:6px}
.pil p{font-family:var(--fb);font-size:14px;line-height:1.68;color:rgba(250,247,242,0.35)}

/* SERVICES — v3 layout navy+gold */
.svc{background:var(--n);padding:96px 40px;position:relative;overflow:hidden;border-top:1px solid rgba(201,168,76,0.06)}
@media(max-width:960px){.svc{padding:60px 24px}}
.svc-in{max-width:1320px;margin:0 auto;position:relative;z-index:2}
.svc-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:2px}
@media(max-width:960px){.svc-grid{grid-template-columns:1fr}}
.svc-c{background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.04);padding:48px 36px;transition:all 0.4s;position:relative;overflow:hidden}
.svc-c::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:var(--g);transform:scaleX(0);transition:transform 0.4s;transform-origin:left}
.svc-c:hover{background:rgba(255,255,255,0.04)}.svc-c:hover::before{transform:scaleX(1)}
.svc-num{font-family:var(--fh);font-size:48px;color:rgba(201,168,76,0.15);line-height:1;margin-bottom:18px;letter-spacing:2px}
.svc-c h3{font-family:var(--fd);font-size:23px;font-weight:700;color:var(--c);margin-bottom:14px}
.svc-c p{font-family:var(--fb);font-size:14.5px;line-height:1.75;color:rgba(250,247,242,0.38);margin-bottom:24px}
.svc-f{list-style:none;display:flex;flex-direction:column;gap:9px}
.svc-f li{font-family:var(--fb);font-size:13px;font-weight:500;color:rgba(250,247,242,0.28);padding-left:18px;position:relative}
.svc-f li::before{content:'—';position:absolute;left:0;color:var(--g)}

/* CONTACT — v3 layout navy+gold */
.ctc{background:var(--nm);padding:96px 40px;position:relative;overflow:hidden;border-top:1px solid rgba(201,168,76,0.06)}
@media(max-width:960px){.ctc{padding:60px 24px}}
.ctc-in{max-width:1320px;margin:0 auto;position:relative;z-index:2}
.ctc-grid{display:grid;grid-template-columns:1fr 1fr;gap:72px;align-items:start}
@media(max-width:960px){.ctc-grid{grid-template-columns:1fr;gap:40px}}
.ctc-text{font-family:var(--fb);font-size:16.5px;line-height:1.8;color:rgba(250,247,242,0.42);margin-bottom:40px}
.ctc-details{display:flex;flex-direction:column;gap:26px}
.ctc-item{display:flex;gap:16px;align-items:flex-start}
.ctc-icon{font-family:var(--fh);font-size:14px;color:var(--g);letter-spacing:2px;min-width:76px}
.ctc-val{font-family:var(--fb);font-size:15px;color:rgba(250,247,242,0.55);line-height:1.6}
.ctc-val a{color:rgba(250,247,242,0.55);text-decoration:none;border-bottom:1px solid rgba(250,247,242,0.1);transition:all 0.3s}
.ctc-val a:hover{color:var(--g);border-color:var(--g)}
.form{display:flex;flex-direction:column;gap:20px}
.form-r{display:grid;grid-template-columns:1fr 1fr;gap:20px}
@media(max-width:600px){.form-r{grid-template-columns:1fr}}
.form-g{display:flex;flex-direction:column;gap:7px}
.form-l{font-family:var(--fb);font-size:10.5px;font-weight:700;letter-spacing:2.5px;text-transform:uppercase;color:rgba(250,247,242,0.25)}
.form-i,.form-ta,.form-s{font-family:var(--fb);font-size:15px;color:var(--c);background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.07);padding:13px 16px;outline:none;transition:border-color 0.3s;width:100%}
.form-i:focus,.form-ta:focus,.form-s:focus{border-color:var(--g)}
.form-ta{resize:vertical;min-height:110px}
.form-s option{background:var(--n);color:var(--c)}
.form-btn{font-family:var(--fb);font-size:12px;font-weight:700;letter-spacing:2.5px;text-transform:uppercase;color:var(--n);background:var(--g);border:none;padding:16px 48px;cursor:pointer;transition:all 0.3s;align-self:flex-start}
.form-btn:hover{background:var(--gl)}

/* FOOTER */
.footer{background:#080c14;border-top:1px solid rgba(201,168,76,0.05);padding:56px 40px 24px}
.footer-in{max-width:1320px;margin:0 auto}
.footer-top{display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:36px;margin-bottom:40px}
@media(max-width:960px){.footer-top{grid-template-columns:1fr 1fr}}
@media(max-width:600px){.footer-top{grid-template-columns:1fr}}
.footer-brand p{font-family:var(--fb);font-size:13px;line-height:1.75;color:rgba(250,247,242,0.18);margin-top:12px;max-width:280px}
.footer-logo{height:30px;filter:brightness(0) invert(1);opacity:0.5;cursor:pointer}
.footer-col h5{font-family:var(--fb);font-size:10px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:rgba(250,247,242,0.28);margin-bottom:16px}
.footer-col a{display:block;font-family:var(--fb);font-size:13px;color:rgba(250,247,242,0.16);text-decoration:none;margin-bottom:10px;transition:color 0.3s}
.footer-col a:hover{color:var(--g)}
.footer-bot{border-top:1px solid rgba(255,255,255,0.03);padding-top:18px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px}
.footer-bot p{font-family:var(--fb);font-size:11px;color:rgba(250,247,242,0.1)}
`;

export default function WealthAfrica(){
  const[slide,setSlide]=useState(0);
  const[artOpen,setArtOpen]=useState(null);
  const[scrolled,setScrolled]=useState(false);
  const[active,setActive]=useState("home");
  const[menuOpen,setMenuOpen]=useState(false);
  const[form,setForm]=useState({name:"",email:"",org:"",type:"government",message:""});
  const isCorp=["about","services","contact"].includes(active);

  useEffect(()=>{const h=()=>{setScrolled(window.scrollY>30);const s=[...NAV,{id:"contact"}].map(x=>({id:x.id,el:document.getElementById(x.id)}));for(let i=s.length-1;i>=0;i--){if(s[i].el&&s[i].el.getBoundingClientRect().top<=200){setActive(s[i].id);break}}};window.addEventListener("scroll",h);return()=>window.removeEventListener("scroll",h)},[]);
  const go=id=>{document.getElementById(id)?.scrollIntoView({behavior:"smooth"});setMenuOpen(false)};
  const next=()=>setSlide(s=>(s+1)%STORIES.length);
  const prev=()=>setSlide(s=>(s-1+STORIES.length)%STORIES.length);
  useEffect(()=>{const t=setInterval(next,7000);return()=>clearInterval(t)},[]);

  const logo="/mnt/user-data/uploads/Logo_Masthead.png";
  const senegal="/mnt/user-data/uploads/1.jpeg";
  const tinubu="/mnt/user-data/uploads/WealthAfrica_Nigeria_Mockup.jpg";
  const cur=STORIES[slide];

  return(<>
    <style>{css}</style>

    {/* NAV */}
    <nav className={`nav ${scrolled?"shd":""} ${isCorp?"corp":""}`}>
      <div className="nav-logo-row"><img src={logo} alt="WealthAfrica" onClick={()=>go("home")}/></div>
      <div className="nav-bar"><div className="nav-bar-in">
        {NAV.map(s=><a key={s.id} href={`#${s.id}`} className={active===s.id?"act":""} onClick={e=>{e.preventDefault();go(s.id)}}>{s.label}</a>)}
        <button className="cta" onClick={()=>go("contact")}>Get in Touch</button>
      </div></div>
    </nav>

    {/* ═══ HOME — CAROUSEL ═══ */}
    <section id="home" style={{paddingTop:112}}>
      <div className="carousel">
        {STORIES.map((s,i)=>{const on=i===slide;return(
          <div key={s.id} className={`csl ${on?"on":i<slide?"prev":"next"}`} style={{background:s.bg}}>
            <div className="csl-in">
              <div>
                <div className={`sl-cat ${s.light?"lt":"dk"}`}>{s.cat}</div>
                <h1 className={`sl-t ${s.light?"lt":"dk"}`}>{s.title}</h1>
                <p className={`sl-ex ${s.light?"lt":"dk"}`}>{s.excerpt}</p>
                <a className={`sl-rd ${s.light?"lt":"dk"}`} onClick={e=>{e.preventDefault();if(ARTICLE[s.id])setArtOpen(s.id)}}>Read Article</a>
                <div className={`sl-m ${s.light?"lt":"dk"}`}>{s.read}</div>
              </div>
              <div className="sl-vis">{s.hasImg&&<img src={senegal} alt=""/>}</div>
            </div>
          </div>
        )})}
        <div className="c-dots">{STORIES.map((_,i)=><div key={i} className={`c-dot ${i===slide?"on":"off"} ${cur.light?"lt":""}`} onClick={()=>setSlide(i)}/>)}</div>
        <div className="c-arrows"><button className={`c-btn ${cur.light?"lt":""}`} onClick={prev}>←</button><button className={`c-btn ${cur.light?"lt":""}`} onClick={next}>→</button></div>
      </div>
    </section>

    {/* ═══ INSIGHTS ═══ */}
    <section id="insights" className="ins-sec"><div className="ins-in">
      <Fade><div className="ins-hd"><h3>Latest <em>Insights</em></h3></div></Fade>
      <Fade delay={0.1}><div className="ins-grid">
        <div className="ins-c" onClick={()=>setArtOpen("blue-economy")}><div className="ins-c-img"><CardSvg1/></div><div className="ins-c-body"><div className="ins-c-cat">Blue Economy</div><h4>Nigeria's Blue Economy: A $500 Billion Question of Leadership</h4><p>With 853km of coastline and EEZs spanning over 200,000 km², Nigeria sits on blue economy potential that dwarfs its terrestrial resource wealth.</p><div className="ins-c-m">WealthAfrica · 2025</div></div></div>
        <div className="ins-c"><div className="ins-c-img"><CardSvg2/></div><div className="ins-c-body"><div className="ins-c-cat">Infrastructure</div><h4>Africa's $2.6 Trillion Infrastructure Gap: Where the Smart Money Is Moving</h4><p>How institutional investors are rethinking African infrastructure — from blended finance to greenfield equity.</p><div className="ins-c-m">WealthAfrica · 2025</div></div></div>
        <div className="ins-c"><div className="ins-c-img"><CardSvg3/></div><div className="ins-c-body"><div className="ins-c-cat">Investment Strategy</div><h4>The PPP Paradox: Why 60% of African Projects Fail Before Financial Close</h4><p>A WealthAfrica analysis of structural failures in PPP development across the continent.</p><div className="ins-c-m">WealthAfrica · 2025</div></div></div>
      </div></Fade>
    </div></section>

    {/* ═══ EDITIONS ═══ */}
    <section id="editions" className="ed-sec"><div className="ed-in">
      <Fade><div className="ey ey-r">Editions</div><h2 className="st st-dk" style={{fontSize:"clamp(28px,3.5vw,40px)"}}>Stories That Move <em>Capital</em></h2><p className="ss ss-dk">Each edition spotlights investable opportunities, profiles visionary leaders, and shifts global perception of African markets.</p></Fade>
      <Fade delay={0.1}><div className="ed-grid">
        <div className="ed-c"><div className="ed-cv"><img src={senegal} alt="Senegal Edition"/></div><div className="ed-nf"><div className="ed-tg">Published Edition</div><h3>The Senegal Presidential Edition: Lion of Africa</h3><p>Commissioned by President Macky Sall, this landmark 50,000-copy edition positioned Senegal as a premier investment destination.</p><span className="ed-badge pub">Published</span></div></div>
        <div className="ed-c"><div className="ed-cv"><img src={tinubu} alt="Nigeria Edition"/></div><div className="ed-nf"><div className="ed-tg">Concept Edition</div><h3>Turnaround Titan: Nigeria's March to a Trillion-Dollar Economy</h3><p>Inside the major reform blueprints reshaping Nigeria's foundations under President Tinubu's transformation agenda.</p><span className="ed-badge con">In Development</span></div></div>
      </div></Fade>
    </div></section>

    {/* ═══ ZONE DIVIDER ═══ */}
    <div className="zone-line"/>

    {/* ═══ ABOUT — v3 HOME layout, navy+gold ═══ */}
    <section id="about" className="abt">
      <div className="abt-bg"/><div className="abt-grid-bg"/>
      <div className="abt-hero">
        <div>
          <Fade><div className="abt-ey">WealthAfrica</div></Fade>
          <Fade delay={0.08}><h1>Where Global Capital<br/>Meets <em>African</em><br/>Opportunity</h1></Fade>
          <Fade delay={0.16}><p className="abt-sub">An investment facilitation platform bridging international capital with high-impact African opportunities — powered by market intelligence, government partnerships, and a publication trusted at the highest levels.</p></Fade>
        </div>
        <Fade delay={0.12} className="abt-cv">
          <div className="abt-cw"><img src={senegal} alt="WealthAfrica — Senegal Edition"/><div className="abt-badge">50,000 Copies Commissioned</div></div>
        </Fade>
      </div>
    </section>

    {/* Credibility strip */}
    <div className="cred"><div className="cred-in">
      <div className="cred-i"><div className="cred-n">$500B+</div><div className="cred-l">Opportunities Mapped</div></div>
      <div className="cred-i"><div className="cred-n">20+</div><div className="cred-l">Years in African Markets</div></div>
      <div className="cred-i"><div className="cred-n">HQ</div><div className="cred-l">New York · 800 Third Avenue</div></div>
      <div className="cred-i"><div className="cred-n">50K</div><div className="cred-l">Copies — Senegal Edition</div></div>
    </div></div>

    {/* About detail — Not Just a Publication */}
    <div className="abt-detail"><div className="abt-d-in">
      <Fade><div className="ey ey-g">Our Foundation</div><h2 className="st st-lt" style={{fontSize:"clamp(28px,3.8vw,44px)"}}>Not Just a Publication.<br/><em>An Investment Engine.</em></h2><p className="ss ss-lt">From project identification to capital deployment — the complete value chain.</p></Fade>
      <div className="abt-d-grid">
        <Fade delay={0.08}><div className="abt-d-text">
          <p>Africa's investment landscape presents a $2.6 trillion infrastructure gap by 2030. Every year, billions in international capital search for credible entry points into the continent's fastest-growing markets — yet 60% of structured projects fail due to poor packaging, inadequate risk allocation, and the absence of trusted intermediaries who understand both sides of the table.</p>
          <p>WealthAfrica was built to close that gap. We are an investment facilitation platform headquartered in New York, operating at the intersection of institutional capital, government partnerships, and deep African market intelligence. Our publication — trusted by heads of state and industry leaders — is the credibility vehicle that opens doors. What happens after the door opens is where our real work begins.</p>
          <p>From government advisory and PPP structuring to investor mobilization and equity co-investment, WealthAfrica provides the complete value chain that transforms African opportunity from concept to capital deployment.</p>
        </div></Fade>
        <Fade delay={0.16}><div className="pillars">
          <div className="pil"><div className="pil-n">01</div><h4>Government-First Approach</h4><p>Direct partnerships with African governments at national and state level, positioning WealthAfrica as a strategic ally in investment promotion.</p></div>
          <div className="pil"><div className="pil-n">02</div><h4>Equity Participation</h4><p>Not just advisory — WealthAfrica takes ownership positions in the projects we help structure, aligning our success with our partners' outcomes.</p></div>
          <div className="pil"><div className="pil-n">03</div><h4>Holistic Value Chain</h4><p>From project identification through structuring, investor mobilization, and implementation — a complete facilitation architecture.</p></div>
          <div className="pil"><div className="pil-n">04</div><h4>Continental Intelligence</h4><p>Two decades of on-the-ground experience across African markets, with a network reaching from presidential offices to institutional trading floors.</p></div>
        </div></Fade>
      </div>
    </div></div>

    {/* ═══ WHAT WE DO — v3 layout, navy+gold ═══ */}
    <section id="services" className="svc"><div className="svc-in">
      <Fade><div className="ey ey-g">What We Do</div><h2 className="st st-lt" style={{fontSize:"clamp(28px,3.8vw,44px)"}}>Full-Spectrum <em>Investment</em> Facilitation</h2><p className="ss ss-lt">Our integrated service architecture spans the complete investment lifecycle — from opportunity identification to capital deployment.</p></Fade>
      <Fade delay={0.1}><div className="svc-grid">
        <div className="svc-c"><div className="svc-num">01</div><h3>Government Advisory</h3><p>We work directly with national and state governments to assess investment climates, structure public-private partnerships, and design investor mobilization strategies.</p><ul className="svc-f"><li>Investment climate assessment</li><li>PPP origination &amp; structuring</li><li>Regulatory gap analysis</li><li>Destination branding strategy</li></ul></div>
        <div className="svc-c"><div className="svc-num">02</div><h3>Strategic Publishing</h3><p>WealthAfrica Magazine is the continent's premier investment-focused publication — positioning leaders, nations, and sectors before the global investment community.</p><ul className="svc-f"><li>Government publication contracts</li><li>Investment promotion editions</li><li>Executive profiling &amp; positioning</li><li>Sector-specific special editions</li></ul></div>
        <div className="svc-c"><div className="svc-num">03</div><h3>Investment Facilitation</h3><p>Beyond advisory, we actively facilitate deal flow — connecting vetted African opportunities with sovereign wealth funds, DFIs, private equity, and strategic corporate investors.</p><ul className="svc-f"><li>Investor mobilization &amp; roadshows</li><li>Due diligence facilitation</li><li>Co-investment structuring</li><li>Transaction support</li></ul></div>
      </div></Fade>
    </div></section>

    {/* ═══ GET IN TOUCH — v3 layout, navy+gold ═══ */}
    <section id="contact" className="ctc"><div className="ctc-in">
      <Fade><div className="ey ey-g">Get in Touch</div><h2 className="st st-lt" style={{fontSize:"clamp(28px,3.8vw,44px)"}}>Let's Build <em>Together</em></h2></Fade>
      <div className="ctc-grid">
        <div>
          <Fade delay={0.08}><p className="ctc-text">Whether you represent a government seeking investment promotion, an institution exploring African opportunities, or a leader ready to tell your story to the global investment community — we welcome the conversation.</p>
          <div className="ctc-details">
            <div className="ctc-item"><div className="ctc-icon">ADDRESS</div><div className="ctc-val">800 Third Avenue<br/>New York, NY 10022<br/>United States</div></div>
            <div className="ctc-item"><div className="ctc-icon">EMAIL</div><div className="ctc-val"><a href="mailto:tundelamidi@wealthafrica.africa">tundelamidi@wealthafrica.africa</a></div></div>
            <div className="ctc-item"><div className="ctc-icon">WEB</div><div className="ctc-val"><a href="https://wealthafrica.africa">wealthafrica.africa</a></div></div>
          </div></Fade>
        </div>
        <Fade delay={0.14}><div className="form">
          <div className="form-r"><div className="form-g"><label className="form-l">Full Name</label><input className="form-i" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Your name"/></div><div className="form-g"><label className="form-l">Email</label><input className="form-i" type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="you@organization.com"/></div></div>
          <div className="form-r"><div className="form-g"><label className="form-l">Organization</label><input className="form-i" value={form.org} onChange={e=>setForm({...form,org:e.target.value})} placeholder="Your organization"/></div><div className="form-g"><label className="form-l">I Am A</label><select className="form-s" value={form.type} onChange={e=>setForm({...form,type:e.target.value})}><option value="government">Government Representative</option><option value="investor">Institutional Investor</option><option value="corporate">Corporate / Strategic Partner</option><option value="media">Media / Press</option><option value="other">Other</option></select></div></div>
          <div className="form-g"><label className="form-l">Message</label><textarea className="form-ta" value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="Tell us about your interest or inquiry..."/></div>
          <button className="form-btn" onClick={()=>alert("Thank you. WealthAfrica will respond within 48 hours.")}>Send Inquiry</button>
        </div></Fade>
      </div>
    </div></section>

    {/* FOOTER */}
    <footer className="footer"><div className="footer-in">
      <div className="footer-top">
        <div className="footer-brand"><img src={logo} alt="WealthAfrica" className="footer-logo" onClick={()=>go("home")}/><p>Bridging global capital and African opportunity through investment facilitation, government partnerships, and the continent's premier investment publication.</p></div>
        <div className="footer-col"><h5>Platform</h5><a href="#about" onClick={e=>{e.preventDefault();go("about")}}>About</a><a href="#services" onClick={e=>{e.preventDefault();go("services")}}>Services</a><a href="#editions" onClick={e=>{e.preventDefault();go("editions")}}>Editions</a><a href="#insights" onClick={e=>{e.preventDefault();go("insights")}}>Insights</a></div>
        <div className="footer-col"><h5>Services</h5><a href="#services" onClick={e=>{e.preventDefault();go("services")}}>Government Advisory</a><a href="#services" onClick={e=>{e.preventDefault();go("services")}}>Strategic Publishing</a><a href="#services" onClick={e=>{e.preventDefault();go("services")}}>Investment Facilitation</a></div>
        <div className="footer-col"><h5>Connect</h5><a href="#contact" onClick={e=>{e.preventDefault();go("contact")}}>Get in Touch</a><a href="mailto:tundelamidi@wealthafrica.africa">Email</a><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></div>
      </div>
      <div className="footer-bot"><p>&copy; {new Date().getFullYear()} WealthAfrica Ltd. All rights reserved.</p><p>New York &middot; Lagos &middot; Banjul</p></div>
    </div></footer>

    {/* ARTICLE VIEW */}
    <div className={`av ${artOpen?"open":""}`}>{artOpen&&<>
      <nav className="nav shd"><div className="nav-logo-row"><img src={logo} alt="WealthAfrica" onClick={()=>setArtOpen(null)} style={{height:46,cursor:"pointer"}}/></div><div className="nav-bar"><div className="nav-bar-in">{NAV.map(s=><a key={s.id} href={`#${s.id}`} onClick={e=>{e.preventDefault();setArtOpen(null);setTimeout(()=>go(s.id),100)}}>{s.label}</a>)}</div></div></nav>
      <button className="av-back" onClick={()=>setArtOpen(null)}>Back to Home</button>
      <div className="av-hd"><div className="av-hd-cat">{STORIES.find(s=>s.id===artOpen)?.cat}</div><h1>{STORIES.find(s=>s.id===artOpen)?.title}</h1><div className="av-hd-m">WealthAfrica Editorial · {STORIES.find(s=>s.id===artOpen)?.read}</div></div>
      <div className="av-body">{(ARTICLE[artOpen]||[{t:"p",v:"Full article coming soon."}]).map((b,i)=>b.t==="p"?<p key={i}>{b.v}</p>:b.t==="h"?<h2 key={i}>{b.v}</h2>:b.t==="q"?<blockquote key={i}>{b.v}</blockquote>:null)}</div>
    </>}</div>
  </>);
}
