export const repoUrl = "https://github.com/rsb-23";
const ghUrl = "https://projects.tchh.in";

// don't add image value if url is a webpage or github repo.
export default {
  profile: [
    {
      id: 1,
      name: "My Github Profile",
      description: "Github Profile",
      image: "https://avatars.githubusercontent.com/u/57601627?v=4",
      url: repoUrl,
      ghRepo: "rsb-23",
    },
  ],
  pypi: [
    {
      id: 6,
      name: "vObjectx",
      description: "py-vobject/vobject package with Python 3.10+ features",
      image: "pypi.svg",
      url: "https://pypi.org/project/vobjectx",
      ghRepo: "vobjectx",
    },
    {
      id: 7,
      name: "dateutilx",
      description: "python-dateutil package with Python 3.10+ features",
      image: "pypi.svg",
      url: "https://pypi.org/project/dateutilx",
      ghRepo: "dateutilx",
    },
    {
      id: 8,
      name: "T-run (CLI)",
      description: "Config-dir aware tool runner",
      image: "pypi.svg",
      url: `https://pypi.org/project/t-run`,
      ghRepo: "trun",
    },
    {
      id: 9,
      name: "Yuhi (CLI)",
      description: "Python project improvement CLI toolkit",
      image: "pypi.svg",
      url: `https://pypi.org/project/yuhi`,
      ghRepo: "yuhi",
    },
  ],

  tools: [
    {
      id: 21,
      name: "1-page Automation",
      description: "Simple browser-based automation using Selenium scripts",
      image: "1pa.svg",
      url: `${repoUrl}/1page-automation`,
      ghRepo: "1page-automation",
    },
    {
      id: 22,
      name: "Ek-Cup-Tcha",
      description: "AI based Captcha solver extension",
      url: `${repoUrl}/ek-cup-tcha`,
      ghRepo: "ek-cup-tcha",
    },
    {
      id: 23,
      name: "Text Linter (CI)",
      description: "Github action to check typos in diff",
      image: "repo.svg",
      url: `https://github.com/marketplace/actions/text-linter`,
      ghRepo: "text-linter",
    },
  ],
  docs: [
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
  ],
  websites: [
    {
      id: 41,
      name: "Important Links",
      description: "List of important links/contacts (India)",
      image: "https://www.tchh.in/favicon.svg",
      url: `https://tchh.in`,
      ghRepo: "tchh_site",
    },
    {
      id: 42,
      name: "Infotainer",
      description: "Curated list of infotainment channels",
      url: `https://infotainer.tchh.in`,
      ghRepo: "infotainer",
    },
    {
      id: 43,
      name: "AI Image Hallucinator",
      description: "High-on-AI : Surreal Image Gallery",
      url: `https://high-on-ai.tchh.in`,
      ghRepo: "high-on-ai",
    },
    {
      id: 44,
      name: "Paper Games",
      description: "Web version of games that can be played on paper.",
      url: `${ghUrl}/paper-games`,
      ghRepo: "paper-games",
    },
  ],
  fun: [
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
      id: 56,
      name: "Miscellaneous",
      description: "random eXperiments",
      url: `${ghUrl}/misc`,
      ghRepo: "misc",
    },
  ],
};
