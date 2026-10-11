import {
  Triangle, AlertTriangle, KeyRound, HardDrive, Siren, FileText, LifeBuoy, RefreshCw,
  type LucideIcon,
} from "lucide-react";

export type Topic = {
  id: string;
  icon: LucideIcon;
  title: string;
  intro: string;
  meaning: string;
  importance: string;
  examples: string[];
  practices: string[];
  takeaway: string;
  pillars?: { name: string; text: string; example: string }[];
};

export const topics: Topic[] = [
  {
    id: "cia-triad",
    icon: Triangle,
    title: "The CIA Triad",
    intro: "Three simple principles sit at the heart of all information security.",
    meaning:
      "Confidentiality, Integrity and Availability describe what we protect: who can see information, whether it can be trusted, and whether it is there when we need it.",
    importance:
      "Every security decision — from a password to a backup — supports one or more of these principles. Understanding them helps you see why the rules exist.",
    pillars: [
      { name: "Confidentiality", text: "Information is accessible only to authorized people.", example: "Payroll files are visible to HR only, not the whole company." },
      { name: "Integrity", text: "Information stays accurate, complete and protected from unauthorized changes.", example: "A customer's bank details can't be silently changed in an invoice." },
      { name: "Availability", text: "Information and systems are accessible when needed.", example: "Sales can reach the customer database during a busy quarter-end." },
    ],
    examples: [
      "Sending a contract to the wrong email address breaks confidentiality.",
      "An edited spreadsheet with no change history weakens integrity.",
      "A ransomware attack that locks files destroys availability.",
    ],
    practices: [
      "Share information only with people who need it.",
      "Save work in approved, version-controlled locations.",
      "Report systems that are unexpectedly slow or unavailable.",
    ],
    takeaway: "Keep information private, correct, and available — that is security in one sentence.",
  },
  {
    id: "risk-management",
    icon: AlertTriangle,
    title: "Risk Management",
    intro: "Organizations can't remove every threat, but they can understand and control them.",
    meaning:
      "Risk management means identifying what could go wrong, judging how likely and how harmful it would be, and choosing sensible controls to reduce it.",
    importance:
      "Resources are limited. Focusing on the biggest risks protects the organization most effectively — and every employee's habits influence those risks.",
    examples: [
      "Phishing emails that trick people into entering their password.",
      "Weak or reused passwords that are easy to guess.",
      "A laptop left on a train containing customer data.",
      "Accidentally sharing a file link with 'anyone with the link'.",
    ],
    practices: [
      "Think before you click: who sent this, and is it expected?",
      "Use a password manager to create strong, unique passwords.",
      "Keep devices with you or locked away when travelling.",
      "Double-check sharing settings before sending links.",
    ],
    takeaway: "Small, careful habits shrink big risks.",
  },
  {
    id: "access-control",
    icon: KeyRound,
    title: "Access Control",
    intro: "Sensitive information should only be reachable by those who are authorized.",
    meaning:
      "Access control ensures each person can use only the systems and data required for their role — the principle of 'least privilege'.",
    importance:
      "Compromised or shared accounts are one of the most common ways attackers get in. Strong access controls limit the damage if something goes wrong.",
    examples: [
      "A colleague asks to borrow your login 'just for today'.",
      "A former employee's account remains active after they leave.",
      "An unlocked screen in a shared office shows client records.",
    ],
    practices: [
      "Use strong passphrases and never reuse them.",
      "Turn on multifactor authentication (MFA) everywhere it's offered.",
      "Never share your account or password with anyone.",
      "Lock your computer (Win+L / Ctrl+Cmd+Q) whenever you step away.",
    ],
    takeaway: "Your login is your identity — guard it like your house key.",
  },
  {
    id: "asset-management",
    icon: HardDrive,
    title: "Asset Management",
    intro: "You can only protect what you know you have.",
    meaning:
      "Information assets include computers, phones, documents, databases and confidential files. Asset management means knowing what they are, who owns them, and how they must be handled.",
    importance:
      "Lost or forgotten assets become hidden risks. Clear ownership and handling rules keep valuable information under control throughout its life.",
    examples: [
      "Printed reports left on a shared printer.",
      "An old USB stick with project files found in a drawer.",
      "A personal phone syncing work email without protection.",
    ],
    practices: [
      "Use only company-approved devices and storage.",
      "Collect printouts immediately and shred confidential paper.",
      "Return equipment when you change roles or leave.",
      "Label and store confidential files according to policy.",
    ],
    takeaway: "Treat company devices and data as valuables — because they are.",
  },
  {
    id: "incident-management",
    icon: Siren,
    title: "Incident Management",
    intro: "When something goes wrong, a fast response makes all the difference.",
    meaning:
      "A security incident is any event that threatens the confidentiality, integrity or availability of information — whether caused by attackers, accidents or system failures.",
    importance:
      "Early reporting lets the security team contain problems before they spread. Delays turn small issues into serious breaches.",
    examples: [
      "A suspicious email asking you to 'verify your account'.",
      "A lost or stolen laptop or phone.",
      "Pop-ups, slowdowns or files changing — signs of malware.",
      "Someone accessing data they shouldn't have.",
      "Emailing confidential information to the wrong person.",
    ],
    practices: [
      "Report suspected incidents immediately via the approved process.",
      "Don't try to investigate or 'fix' it yourself.",
      "Don't delete evidence such as suspicious emails.",
      "Be honest — reporting a mistake is always the right call.",
    ],
    takeaway: "If in doubt, report it. Quickly.",
  },
  {
    id: "security-policies",
    icon: FileText,
    title: "Security Policies",
    intro: "Policies turn good intentions into clear, shared expectations.",
    meaning:
      "Information security policies describe how the organization expects everyone to use systems, handle data and behave online.",
    importance:
      "Policies keep everyone consistent, help meet legal and contractual obligations, and protect both the organization and you.",
    examples: [
      "Acceptable use: company laptops are for work, not unapproved software.",
      "Confidential information is shared only through approved channels.",
      "Password rules define length, uniqueness and MFA use.",
      "Responsible internet use avoids risky downloads and sites.",
    ],
    practices: [
      "Read and understand the policies that apply to your role.",
      "Ask your manager or security team when something is unclear.",
      "Follow policies even when it feels inconvenient.",
    ],
    takeaway: "Policies are the playbook — know them and follow them.",
  },
  {
    id: "business-continuity",
    icon: LifeBuoy,
    title: "Business Continuity",
    intro: "Disruptions happen. Preparation keeps the organization running.",
    meaning:
      "Business continuity covers backups, recovery procedures and contingency plans that allow critical work to continue during outages, disasters or cyberattacks.",
    importance:
      "Customers and colleagues rely on us. Being able to recover quickly limits financial loss and protects reputation.",
    examples: [
      "Restoring files from backup after a ransomware attack.",
      "Working from an alternate site during a power outage.",
      "Switching to a backup supplier when a key service fails.",
    ],
    practices: [
      "Save work to company storage that is backed up — not just your desktop.",
      "Know your role in the continuity plan.",
      "Take part in recovery tests and drills.",
    ],
    takeaway: "Plan for the bad day so it doesn't become a bad month.",
  },
  {
    id: "continuous-improvement",
    icon: RefreshCw,
    title: "Continuous Improvement",
    intro: "Security is never 'done' — it grows stronger over time.",
    meaning:
      "Regular reviews, awareness training, audits and lessons learned help the organization find weaknesses and improve its practices.",
    importance:
      "Threats change constantly. Learning from experience keeps defences relevant and effective.",
    examples: [
      "An internal audit finds outdated access rights and removes them.",
      "After a phishing incident, training is updated with the real example.",
      "Annual reviews refresh policies for new technology.",
    ],
    practices: [
      "Complete security awareness training on time.",
      "Share feedback and ideas for safer ways of working.",
      "Cooperate openly with audits and reviews.",
    ],
    takeaway: "Every lesson learned makes us all a little safer.",
  },
];
