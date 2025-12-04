import { LayoutConfig } from './types';

// CUSTOM LAYOUT CONFIGURATION
// Define exact tile sizes AND positions for each state
//
// Properties for each tile:
//   cols: number      - How many columns the tile spans (1-5)
//   rows: number      - How many rows the tile spans (1-3)
//   colStart?: number - Starting column position (1-5), optional
//   rowStart?: number - Starting row position (1-3), optional
//   order?: number    - CSS order for simple reordering, optional
//
// GRID: 5 columns × 3 rows = 15 cells
//
// Example grid positions:
// ┌─────────┬─────────┬─────────┬─────────┬─────────┐
// │ (1,1)   │ (2,1)   │ (3,1)   │ (4,1)   │ (5,1)   │  Row 1
// ├─────────┼─────────┼─────────┼─────────┼─────────┤
// │ (1,2)   │ (2,2)   │ (3,2)   │ (4,2)   │ (5,2)   │  Row 2
// ├─────────┼─────────┼─────────┼─────────┼─────────┤
// │ (1,3)   │ (2,3)   │ (3,3)   │ (4,3)   │ (5,3)   │  Row 3
// └─────────┴─────────┴─────────┴─────────┴─────────┘

export const LAYOUT_CONFIG: LayoutConfig = {
    // DEFAULT LAYOUT (nothing expanded)
    default: {
        contact: { cols: 1, rows: 1, colStart: 1, rowStart: 1 },  // Top-left
        github: { cols: 3, rows: 1, colStart: 2, rowStart: 1 },  // Top-center (3 wide)
        'ai-chat': { cols: 1, rows: 1, colStart: 5, rowStart: 1 },  // Top-right
        blog: { cols: 1, rows: 2, colStart: 1, rowStart: 2 },  // Left side (tall)
        intro: { cols: 2, rows: 2, colStart: 2, rowStart: 2 },  // Center (large)
        projects: { cols: 1, rows: 2, colStart: 4, rowStart: 2 },  // Right side (tall)
        skills: { cols: 1, rows: 1, colStart: 5, rowStart: 2 },  // Right
        gallery: { cols: 1, rows: 1, colStart: 5, rowStart: 3 },  // Bottom-right
    },

    // GITHUB EXPANDED
    github: {
        github: { cols: 3, rows: 3, colStart: 1, rowStart: 1 },  // Expanded: takes left 3x3
        contact: { cols: 1, rows: 1, colStart: 4, rowStart: 1 },
        'ai-chat': { cols: 1, rows: 1, colStart: 5, rowStart: 1 },
        blog: { cols: 1, rows: 1, colStart: 4, rowStart: 2 },
        intro: { cols: 1, rows: 1, colStart: 5, rowStart: 2 },
        projects: { cols: 1, rows: 1, colStart: 4, rowStart: 3 },
        skills: { cols: 1, rows: 1, colStart: 5, rowStart: 3 },
        gallery: { cols: 2, rows: 1 },  // No position = auto-placed
    },

    // INTRO (About Me) EXPANDED
    intro: {
        intro: { cols: 3, rows: 3, colStart: 1, rowStart: 1 },  // Expanded: left 3x3
        github: { cols: 2, rows: 1, colStart: 4, rowStart: 1 },  // Top-right
        contact: { cols: 1, rows: 1, colStart: 4, rowStart: 2 },
        'ai-chat': { cols: 1, rows: 1, colStart: 5, rowStart: 2 },
        blog: { cols: 1, rows: 1, colStart: 4, rowStart: 3 },
        projects: { cols: 1, rows: 1, colStart: 5, rowStart: 3 },
        skills: { cols: 1, rows: 1 },
        gallery: { cols: 1, rows: 1 },
    },

    // BLOG EXPANDED
    blog: {
        blog: { cols: 3, rows: 3, colStart: 1, rowStart: 1 },
        github: { cols: 2, rows: 1, colStart: 4, rowStart: 1 },
        contact: { cols: 1, rows: 1, colStart: 4, rowStart: 2 },
        'ai-chat': { cols: 1, rows: 1, colStart: 5, rowStart: 2 },
        intro: { cols: 1, rows: 1, colStart: 4, rowStart: 3 },
        projects: { cols: 1, rows: 1, colStart: 5, rowStart: 3 },
        skills: { cols: 1, rows: 1 },
        gallery: { cols: 1, rows: 1 },
    },

    // PROJECTS EXPANDED
    projects: {
        projects: { cols: 3, rows: 3, colStart: 3, rowStart: 1 },  // Expanded: right side
        contact: { cols: 1, rows: 1, colStart: 1, rowStart: 1 },
        github: { cols: 1, rows: 1, colStart: 2, rowStart: 1 },
        'ai-chat': { cols: 1, rows: 1, colStart: 1, rowStart: 2 },
        intro: { cols: 1, rows: 1, colStart: 2, rowStart: 2 },
        blog: { cols: 1, rows: 1, colStart: 1, rowStart: 3 },
        skills: { cols: 1, rows: 1, colStart: 2, rowStart: 3 },
        gallery: { cols: 1, rows: 1 },
    },

    // AI CHAT EXPANDED
    'ai-chat': {
        'ai-chat': { cols: 3, rows: 3, colStart: 2, rowStart: 1 },  // Center-expanded
        contact: { cols: 1, rows: 1, colStart: 1, rowStart: 1 },
        github: { cols: 1, rows: 1, colStart: 5, rowStart: 1 },
        blog: { cols: 1, rows: 1, colStart: 1, rowStart: 2 },
        intro: { cols: 1, rows: 1, colStart: 5, rowStart: 2 },
        projects: { cols: 1, rows: 1, colStart: 1, rowStart: 3 },
        skills: { cols: 1, rows: 1, colStart: 5, rowStart: 3 },
        gallery: { cols: 1, rows: 1 },
    },

    // CONTACT EXPANDED
    contact: {
        contact: { cols: 2, rows: 2, colStart: 1, rowStart: 1 },  // Top-left expanded
        github: { cols: 2, rows: 1, colStart: 3, rowStart: 1 },
        'ai-chat': { cols: 1, rows: 1, colStart: 5, rowStart: 1 },
        blog: { cols: 1, rows: 1, colStart: 3, rowStart: 2 },
        intro: { cols: 1, rows: 1, colStart: 4, rowStart: 2 },
        projects: { cols: 1, rows: 1, colStart: 5, rowStart: 2 },
        skills: { cols: 1, rows: 2, colStart: 1, rowStart: 3 },
        gallery: { cols: 3, rows: 1, colStart: 2, rowStart: 3 },
    },

    // SKILLS EXPANDED
    skills: {
        skills: { cols: 3, rows: 2, colStart: 1, rowStart: 1 },
        github: { cols: 2, rows: 1, colStart: 4, rowStart: 1 },
        contact: { cols: 1, rows: 1, colStart: 4, rowStart: 2 },
        'ai-chat': { cols: 1, rows: 1, colStart: 5, rowStart: 2 },
        intro: { cols: 2, rows: 1, colStart: 1, rowStart: 3 },
        blog: { cols: 1, rows: 1, colStart: 3, rowStart: 3 },
        projects: { cols: 1, rows: 1, colStart: 4, rowStart: 3 },
        gallery: { cols: 1, rows: 1, colStart: 5, rowStart: 3 },
    },

    // GALLERY EXPANDED
    gallery: {
        gallery: { cols: 4, rows: 2, colStart: 1, rowStart: 1 },  // Large gallery
        github: { cols: 1, rows: 1, colStart: 5, rowStart: 1 },
        contact: { cols: 1, rows: 1, colStart: 5, rowStart: 2 },
        'ai-chat': { cols: 1, rows: 1, colStart: 1, rowStart: 3 },
        intro: { cols: 1, rows: 1, colStart: 2, rowStart: 3 },
        blog: { cols: 1, rows: 1, colStart: 3, rowStart: 3 },
        projects: { cols: 1, rows: 1, colStart: 4, rowStart: 3 },
        skills: { cols: 1, rows: 1, colStart: 5, rowStart: 3 },
    },
};
