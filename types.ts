import { ReactNode } from 'react';

export enum TileSize {
  Large = 'large',       // 2x2
  Tall = 'tall',         // 1x2
  Wide = 'wide',         // 2x1
  Small = 'small',       // 1x1
  ExtraWide = 'extrawide', // 3x1 (for GitHub contributions)
}

export interface PortfolioItem {
  id: string;
  title: string;
  subtitle: string;
  size: TileSize;
  contentType: 'text' | 'projects' | 'chat' | 'gallery' | 'contact' | 'github' | 'blog';
  color: string;      // Hex background color
  textColor: 'white' | 'black';
  icon?: ReactNode;
  description?: string;
  // EXPANSION CONTROL: Set how big this tile becomes when clicked
  expandedCols?: number; // How many columns when expanded (default: 4)
  expandedRows?: number; // How many rows when expanded (default: 3)
}

// Layout configuration for each tile
export interface TileLayout {
  cols: number;      // How many columns the tile spans
  rows: number;      // How many rows the tile spans
  colStart?: number; // Starting column (1-5), optional - for exact positioning
  rowStart?: number; // Starting row (1-3), optional - for exact positioning
  order?: number;    // CSS order property, optional - for simple reordering
}

// Layout config: defines the size of ALL tiles for a given state
// Key is tile id, value is the layout
export type StateLayout = Record<string, TileLayout>;

// Complete layout configuration
// 'default' = when nothing is expanded
// [tileId] = when that specific tile is expanded
export interface LayoutConfig {
  default?: StateLayout;
  [expandedTileId: string]: StateLayout | undefined;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}