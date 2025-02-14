import { NextApiRequest, NextApiResponse } from 'next';

type Match = {
  id: number;
  team1: string;
  score1: number;
  team2: string;
  score2: number;
  date: string;
};

const results: Match[] = [
  { id: 1, team1: 'Bears', score1: 1, team2: 'Wolves', score2: 1, date: '2024-02-12' },
  { id: 2, team1: 'Lions', score1: 2, team2: 'Tigers', score2: 3, date: '2024-02-10' },
  { id: 3, team1: 'Hawks', score1: 3, team2: 'Eagles', score2: 2, date: '2024-02-14' },
  { id: 4, team1: 'Bears', score1: 0, team2: 'Lions', score2: 2, date: '2024-02-08' },
  { id: 5, team1: 'Tigers', score1: 4, team2: 'Hawks', score2: 1, date: '2024-02-15' },
  { id: 6, team1: 'Wolves', score1: 3, team2: 'Eagles', score2: 3, date: '2024-02-13' },
  { id: 7, team1: 'Lions', score1: 5, team2: 'Bears', score2: 2, date: '2024-02-09' },
  { id: 8, team1: 'Hawks', score1: 3, team2: 'Tigers', score2: 3, date: '2024-02-11' },
  { id: 9, team1: 'Eagles', score1: 2, team2: 'Wolves', score2: 1, date: '2024-02-16' },
  { id: 10, team1: 'Bears', score1: 0, team2: 'Eagles', score2: 2, date: '2024-02-07' },
  { id: 11, team1: 'Wolves', score1: 4, team2: 'Lions', score2: 3, date: '2024-02-05' },
  { id: 12, team1: 'Tigers', score1: 1, team2: 'Bears', score2: 2, date: '2024-02-06' },
  { id: 13, team1: 'Hawks', score1: 3, team2: 'Wolves', score2: 3, date: '2024-02-18' },
  { id: 14, team1: 'Eagles', score1: 5, team2: 'Tigers', score2: 4, date: '2024-02-17' },
  { id: 15, team1: 'Bears', score1: 2, team2: 'Hawks', score2: 1, date: '2024-02-19' },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(results);
}