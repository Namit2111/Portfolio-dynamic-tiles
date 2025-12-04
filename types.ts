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
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}