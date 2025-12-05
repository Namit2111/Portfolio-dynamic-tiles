import { LayoutConfig } from './types';

// CUSTOM LAYOUT CONFIGURATION for 7x5 BENTO grid with 9 tiles
// Grid: 7 columns × 5 rows = 35 cells total
// 9 tiles: github, about, featured, projects, skills, experience, contact, resume, playground
//
// BENTO LAYOUT (uneven, asymmetric style):
// ┌─────────┬───────────────────────┬───────────┐
// │ GitHub  │                       │ Featured  │
// │  (2x2)  │      About Me         │   (2x3)   │
// ├─────────┤        (3x3)          │           │
// │Projects │                       │           │
// │  (2x2)  ├─────────┬─────────────┼───────────┤
// │         │ Skills  │ Experience  │  Contact  │
// ├─────────┼─────────┴─────────────┤   (2x2)   │
// │      Resume (3x1)  │ Playground │           │
// │                    │   (2x1)    │           │
// └────────────────────┴────────────┴───────────┘

export const LAYOUT_CONFIG: LayoutConfig = {
    // DEFAULT BENTO LAYOUT (nothing expanded)

  // DEFAULT LAYOUT (7x5 grid)
  default: {
    experience: { cols: 2, rows: 3, colStart: 1, rowStart: 1 },
    about: { cols: 3, rows: 3, colStart: 3, rowStart: 2 },
    github: { cols: 3, rows: 1, colStart: 3, rowStart: 1 },
    featured: { cols: 2, rows: 2, colStart: 1, rowStart: 4 },
    contact: { cols: 1, rows: 2, colStart: 6, rowStart: 3 },
    projects: { cols: 2, rows: 2, colStart: 6, rowStart: 1 },
    playground: { cols: 1, rows: 1, colStart: 7, rowStart: 3 },
    resume: { cols: 2, rows: 1, colStart: 3, rowStart: 5 },
    skills: { cols: 2, rows: 1, colStart: 5, rowStart: 5 },
    music: { cols: 1, rows: 2, colStart: 7, rowStart: 4 }
  },

  // FEATURED EXPANDED (5x4)
  featured: {
    featured: { cols: 5, rows: 4, colStart: 1, rowStart: 2 },
    about: { cols: 2, rows: 1, colStart: 4, rowStart: 1 },
    github: { cols: 1, rows: 1, colStart: 7, rowStart: 3 },
    contact: { cols: 1, rows: 1, colStart: 6, rowStart: 3 },
    skills: { cols: 2, rows: 2, colStart: 6, rowStart: 1 },
    experience: { cols: 2, rows: 1, colStart: 1, rowStart: 1 },
    playground: { cols: 1, rows: 1, colStart: 6, rowStart: 4 },
    resume: { cols: 1, rows: 1, colStart: 3, rowStart: 1 },
    projects: { cols: 2, rows: 1, colStart: 6, rowStart: 5 },
    music: { cols: 1, rows: 1, colStart: 7, rowStart: 4 }
  },

  // ABOUT ME EXPANDED (5x4)
  about: {
    about: { cols: 5, rows: 4, colStart: 2, rowStart: 2 },
    experience: { cols: 1, rows: 2, colStart: 1, rowStart: 1 },
    featured: { cols: 1, rows: 2, colStart: 7, rowStart: 1 },
    projects: { cols: 1, rows: 2, colStart: 1, rowStart: 4 },
    skills: { cols: 1, rows: 2, colStart: 7, rowStart: 3 },
    github: { cols: 2, rows: 1, colStart: 2, rowStart: 1 },
    contact: { cols: 1, rows: 1, colStart: 4, rowStart: 1 },
    resume: { cols: 2, rows: 1, colStart: 5, rowStart: 1 },
    playground: { cols: 1, rows: 1, colStart: 7, rowStart: 5 },
    music: { cols: 1, rows: 1, colStart: 1, rowStart: 3 }
  },

  // SKILLS EXPANDED (5x4)
  skills: {
     skills: { cols: 5, rows: 4, colStart: 3, rowStart: 2 },
    github: { cols: 1, rows: 2, colStart: 1, rowStart: 2 },
    about: { cols: 1, rows: 2, colStart: 2, rowStart: 2 },
    featured: { cols: 1, rows: 2, colStart: 1, rowStart: 4 },
    projects: { cols: 1, rows: 2, colStart: 2, rowStart: 4 },
    music: { cols: 2, rows: 1, colStart: 2, rowStart: 1 },
    experience: { cols: 2, rows: 1, colStart: 4, rowStart: 1 },
    contact: { cols: 1, rows: 1, colStart: 6, rowStart: 1 },
    resume: { cols: 1, rows: 1, colStart: 7, rowStart: 1 },
    playground: { cols: 1, rows: 1, colStart: 1, rowStart: 1 }
  },

  // PROJECTS EXPANDED (5x4)
  projects: {
   
    projects: { cols: 5, rows: 4, colStart: 3, rowStart: 1 },
    github: { cols: 1, rows: 2, colStart: 1, rowStart: 1 },
    about: { cols: 1, rows: 2, colStart: 2, rowStart: 1 },
    featured: { cols: 1, rows: 2, colStart: 1, rowStart: 3 },
    music: { cols: 1, rows: 2, colStart: 2, rowStart: 3 },
    skills: { cols: 2, rows: 1, colStart: 2, rowStart: 5 },
    experience: { cols: 2, rows: 1, colStart: 4, rowStart: 5 },
    contact: { cols: 1, rows: 1, colStart: 6, rowStart: 5 },
    resume: { cols: 1, rows: 1, colStart: 7, rowStart: 5 },
    playground: { cols: 1, rows: 1, colStart: 1, rowStart: 5 }},

  // GITHUB EXPANDED (5x4)
  github: {
    github: { cols: 5, rows: 4, colStart: 2, rowStart: 1 },
    skills: { cols: 1, rows: 2, colStart: 1, rowStart: 1 },
    about: { cols: 1, rows: 2, colStart: 7, rowStart: 1 },
    featured: { cols: 1, rows: 1, colStart: 1, rowStart: 3 },
    projects: { cols: 1, rows: 2, colStart: 7, rowStart: 3 },
    experience: { cols: 2, rows: 1, colStart: 1, rowStart: 5 },
    contact: { cols: 2, rows: 1, colStart: 3, rowStart: 5 },
    resume: { cols: 2, rows: 1, colStart: 5, rowStart: 5 },
    playground: { cols: 1, rows: 1, colStart: 7, rowStart: 5 },
    music: { cols: 1, rows: 1, colStart: 1, rowStart: 4 }
  },

  // EXPERIENCE EXPANDED (6x4)
  experience: {
  experience: { cols: 5, rows: 4, colStart: 1, rowStart: 1 },
    about: { cols: 2, rows: 1, colStart: 4, rowStart: 5 },
    github: { cols: 1, rows: 1, colStart: 7, rowStart: 3 },
    contact: { cols: 1, rows: 1, colStart: 6, rowStart: 3 },
    skills: { cols: 2, rows: 2, colStart: 6, rowStart: 1 },
    featured: { cols: 2, rows: 1, colStart: 1, rowStart: 5 },
    playground: { cols: 1, rows: 1, colStart: 6, rowStart: 4 },
    resume: { cols: 1, rows: 1, colStart: 3, rowStart: 5 },
    projects: { cols: 2, rows: 1, colStart: 6, rowStart: 5 },
    music: { cols: 1, rows: 1, colStart: 7, rowStart: 4 }
   },

  // CONTACT EXPANDED (5x4)
  contact: {
    contact: { cols: 5, rows: 4, colStart: 3, rowStart: 1 },
    github: { cols: 1, rows: 2, colStart: 1, rowStart: 1 },
    about: { cols: 1, rows: 2, colStart: 2, rowStart: 1 },
    featured: { cols: 1, rows: 1, colStart: 1, rowStart: 4 },
    projects: { cols: 1, rows: 2, colStart: 2, rowStart: 3 },
    skills: { cols: 2, rows: 1, colStart: 1, rowStart: 5 },
    experience: { cols: 2, rows: 1, colStart: 3, rowStart: 5 },
    resume: { cols: 2, rows: 1, colStart: 5, rowStart: 5 },
    playground: { cols: 1, rows: 1, colStart: 7, rowStart: 5 },
    music: { cols: 1, rows: 1, colStart: 1, rowStart: 3 }
  },

  // RESUME EXPANDED (5x4)
  resume: {
  resume: { cols: 5, rows: 4, colStart: 2, rowStart: 2 },
    experience: { cols: 1, rows: 2, colStart: 1, rowStart: 1 },
    featured: { cols: 1, rows: 2, colStart: 7, rowStart: 1 },
    projects: { cols: 1, rows: 2, colStart: 1, rowStart: 4 },
    skills: { cols: 1, rows: 2, colStart: 7, rowStart: 3 },
    github: { cols: 2, rows: 1, colStart: 2, rowStart: 1 },
    contact: { cols: 1, rows: 1, colStart: 4, rowStart: 1 },
    about: { cols: 2, rows: 1, colStart: 5, rowStart: 1 },
    playground: { cols: 1, rows: 1, colStart: 7, rowStart: 5 },
    music: { cols: 1, rows: 1, colStart: 1, rowStart: 3 }
   },

  // PLAYGROUND EXPANDED (5x4)
  playground: {
    playground: { cols: 5, rows: 4, colStart: 3, rowStart: 1 },
    github: { cols: 1, rows: 2, colStart: 1, rowStart: 1 },
    about: { cols: 1, rows: 2, colStart: 2, rowStart: 1 },
    featured: { cols: 1, rows: 1, colStart: 1, rowStart: 4 },
    projects: { cols: 1, rows: 2, colStart: 2, rowStart: 3 },
    skills: { cols: 2, rows: 1, colStart: 1, rowStart: 5 },
    experience: { cols: 2, rows: 1, colStart: 3, rowStart: 5 },
    resume: { cols: 2, rows: 1, colStart: 5, rowStart: 5 },
    contact: { cols: 1, rows: 1, colStart: 7, rowStart: 5 },
    music: { cols: 1, rows: 1, colStart: 1, rowStart: 3 }
 },

  // MUSIC EXPANDED (5x4)
  music: {
    music: { cols: 5, rows: 4, colStart: 3, rowStart: 2 },
    github: { cols: 1, rows: 2, colStart: 1, rowStart: 2 },
    about: { cols: 1, rows: 2, colStart: 2, rowStart: 2 },
    featured: { cols: 1, rows: 2, colStart: 1, rowStart: 4 },
    projects: { cols: 1, rows: 2, colStart: 2, rowStart: 4 },
    skills: { cols: 2, rows: 1, colStart: 2, rowStart: 1 },
    experience: { cols: 2, rows: 1, colStart: 4, rowStart: 1 },
    contact: { cols: 1, rows: 1, colStart: 6, rowStart: 1 },
    resume: { cols: 1, rows: 1, colStart: 7, rowStart: 1 },
    playground: { cols: 1, rows: 1, colStart: 1, rowStart: 1 }
   }
};
