import {
  AlertTriangle, Armchair, Ban, BarChart3, Bell, BookOpen, Bot, BrickWall, Briefcase, Building2,
  Calendar, CalendarDays, ClipboardList, Cloud, Coins, CreditCard, Database, DollarSign, Euro,
  FileText, Flame, Folder, FolderOpen, Gem, Globe, Handshake, HelpCircle, Hospital, Inbox, Info,
  KeyRound, Landmark, Laptop, Lightbulb, Lock, Mail, MapPin, Megaphone, MessageCircle, Monitor,
  Package, Phone, Rocket, RefreshCw, Repeat, SatelliteDish, Scale, Search, Send, Settings,
  ShieldCheck, ShoppingBag, ShoppingCart, Signal, Smartphone, Sparkles, Star, Stethoscope, Tag,
  Ticket, Timer, Truck, User, Wrench, Zap,
} from "lucide-react";

/*
 * Maps the emoji used as icons across the site to consistent line icons.
 * Flags and anything unmapped render unchanged, so content emoji (e.g. 🇮🇳)
 * keep working. Icons size to 1em and inherit currentColor from the parent.
 */
const map = {
  "⚡": Zap, "🌐": Globe, "🌍": Globe, "🌏": Globe, "🌎": Globe,
  "🛡️": ShieldCheck, "🛡": ShieldCheck, "✉️": Mail, "✉": Mail, "📨": Send,
  "💬": MessageCircle, "🔐": KeyRound, "🔑": KeyRound, "🔒": Lock,
  "📊": BarChart3, "✈️": Send, "✈": Send, "💻": Laptop, "🖥️": Monitor, "🖥": Monitor,
  "📦": Package, "📲": Smartphone, "📱": Smartphone, "🏦": Landmark, "🏛️": Landmark, "🏛": Landmark,
  "🕌": Landmark, "🗽": Landmark, "📍": MapPin, "🤝": Handshake, "🛍️": ShoppingBag, "🛍": ShoppingBag,
  "🛒": ShoppingCart, "🔍": Search, "🏥": Hospital, "🩺": Stethoscope, "🚚": Truck,
  "🛠️": Wrench, "🛠": Wrench, "⚙️": Settings, "⚙": Settings, "📖": BookOpen,
  "💶": Euro, "💵": DollarSign, "💰": Coins, "💳": CreditCard, "💎": Gem,
  "🔥": Flame, "📝": FileText, "📋": ClipboardList, "⏱️": Timer, "⏱": Timer,
  "📅": Calendar, "🗓️": CalendarDays, "🗓": CalendarDays, "⚖️": Scale, "⚖": Scale,
  "❓": HelpCircle, "🔄": RefreshCw, "🔁": Repeat, "🔔": Bell, "📁": Folder, "📂": FolderOpen,
  "📶": Signal, "📡": SatelliteDish, "📥": Inbox, "⭐": Star, "💡": Lightbulb, "✨": Sparkles,
  "🧱": BrickWall, "💼": Briefcase, "🏢": Building2, "☁️": Cloud, "☁": Cloud, "🗄️": Database, "🗄": Database,
  "🏷️": Tag, "🏷": Tag, "👤": User, "🚫": Ban, "📞": Phone, "🎟️": Ticket, "🎟": Ticket, "💺": Armchair,
  "ℹ️": Info, "ℹ": Info, "⚠️": AlertTriangle, "⚠": AlertTriangle, "🚀": Rocket, "🤖": Bot, "📢": Megaphone,
};

export const EmojiIcon = ({ char, size = "1em", strokeWidth = 1.75, className }) => {
  const Icon = map[char];
  if (!Icon) return char ?? null;
  return <Icon size={size} strokeWidth={strokeWidth} className={className} aria-hidden="true" focusable="false" />;
};

export default EmojiIcon;
