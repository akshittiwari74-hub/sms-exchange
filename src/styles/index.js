// Every stylesheet on the site, in cascade order. Imported once from main.jsx.
//
// Pages are code-split, but the site ships ONE stylesheet (cssCodeSplit: false).
// Vite orders CSS by first import, so listing everything here keeps the order
// fixed no matter which chunk a page lands in. theme.css and ui.css must stay
// last: they override the older component styles. When adding a stylesheet,
// add it here above theme.css as well as importing it from its component.

import "../index.css";
import "./variables.css";
import "../App.css";
import "./components/Navbar.css";
import "./components/InquiryModal.css";
import "./components/Footer.css";
import "./components/FloatingChatWidget.css";
import "./components/Button.css";
import "./components/Hero.css";
import "./components/TrustBar.css";
import "./pages/Subpages.css";
import "./components/HomeKnowledge.css";
import "./pages/HomePage.css";
import "./components/TopRoutesSpotlight.css";
import "./components/RouteInspector.css";
import "./components/RouteRatesTable.css";
import "./components/CTA.css";
import "./components/Coverage.css";
import "./components/GlassCard.css";
import "./components/WhyChooseUs.css";
import "./components/NetworkStatusWidget.css";
import "./components/Services.css";
import "./components/Industries.css";
import "./components/ApiSnippet.css";
import "./components/FAQ.css";
import "./components/TelecomDictionary.css";
import "./pages/Article.css";
import "./pages/ServicesWings.css";
import "./pages/LegalPage.css";
import "./theme.css";
import "./ui.css";
