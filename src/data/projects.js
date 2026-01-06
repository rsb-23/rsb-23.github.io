export const repoUrl = "https://github.com/rsb-23";
const ghUrl = "https://projects.tchh.in";

// don't add image value if url is a webpage or github repo.
export default [
  // Profile and websites
  {
    id: 1,
    name: "My Github Profile",
    description: "Github Profile",
    image: "https://avatars.githubusercontent.com/u/57601627?v=4",
    url: repoUrl,
    ghRepo: "rsb-23",
  },
  {
    id: 2,
    name: "AI Image Hallucinator",
    description: "High-on-AI : Surreal Image Gallery",
    url: `https://high-on-ai.tchh.in`,
    ghRepo: "high-on-ai",
  },
  {
    id: 3,
    name: "Infotainer",
    description: "Curated list of infotainment channels",
    url: `https://infotainer.tchh.in`,
    ghRepo: "infotainer",
  },
  {
    id: 4,
    name: "Paper Games",
    description: "Web version of games that can be played on paper.",
    url: `${ghUrl}/paper-games`,
    ghRepo: "paper-games",
  },
  // Tools
  {
    id: 11,
    name: "Yuhi CLI",
    description: "Python project improvement CLI toolkit",
    image: "pypi.svg",
    url: `https://pypi.org/project/yuhi`,
    ghRepo: "yuhi",
  },
  {
    id: 12,
    name: "vObjectx package",
    description: "py-vobject/vobject with new Python 3 syntax",
    image: "pypi.svg",
    url: "https://pypi.org/project/vobjectx",
    ghRepo: "vobjectx",
  },
  {
    id: 13,
    name: "Text Linter CI",
    description: "Github action to check typos in diff",
    image: "repo.svg",
    url: `https://github.com/marketplace/actions/text-linter`,
    ghRepo: "text-linter",
  },
  {
    id: 14,
    name: "Ek-Cup-Tcha",
    description: "AI based Captcha solver extension",
    url: `${repoUrl}/Ek-Cup-Tcha`,
    ghRepo: "Ek-Cup-Tcha",
  },
  {
    id: 15,
    name: "1-page Automation",
    description: "Simple browser-based automation using Selenium scripts",
    url: `${repoUrl}/1page-automation`,
    ghRepo: "1page-automation",
  },
  // documentation projects
  {
    id: 30,
    name: "Digital Literacy",
    description: "A quick guide to invoke digital literacy among people and secure their digital life.",
    url: `${repoUrl}/digital-literacy`,
    ghRepo: "digital-literacy",
  },
  {
    id: 31,
    name: "Open Password Specification",
    description: "Standard specification for password generation and storage.",
    url: `${repoUrl}/open-pass-spec`,
    ghRepo: "open-pass-spec",
  },
  {
    id: 32,
    name: "Right to be Forgotten",
    description: "A system to simplify and standardize protection of 'Right to Erasure'",
    url: `${repoUrl}/right-to-be-forgotten`,
    ghRepo: "right-to-be-forgotten",
  },
  // fun stuff
  {
    id: 51,
    name: "Meme Funcs",
    description: "If memes were a python function...",
    url: `${repoUrl}/meme-funcs`,
    ghRepo: "meme-funcs",
  },
  {
    id: 52,
    name: "Past Horror",
    description: "Projects from 2010s",
    url: `${ghUrl}/past-horror`,
    ghRepo: "past-horror",
  },
  {
    id: 54,
    name: "Strawberry Counter",
    description: "Counts the occurence of a letter in the text",
    image: "strawberry.png",
    url: "https://claude.site/artifacts/074a62b4-ee81-4af1-b719-da65670712fe",
  },
  {
    id: 56,
    name: "Miscellaneous",
    description: "random eXperiments",
    url: `${ghUrl}/misc`,
    ghRepo: "misc",
  },
];
