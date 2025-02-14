import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import React  from 'react';

type TeamFilterProps = {
    matches: { team1: string; team2: string }[];
    onSelect: (team: string | null) => void;
};

export default function TeamFilter({ matches, onSelect }: TeamFilterProps) {
    // Extract unique team names from all matches
    const teams: string[] = Array.from(new Set(matches.flatMap((match) => [match.team1, match.team2])));

    return (
        <FormControl fullWidth>
            <InputLabel>Filter by Team</InputLabel>
            <Select onChange={(event) => onSelect(event.target.value || null)} label="Filter by Team" defaultValue="">
                <MenuItem value="">All Teams</MenuItem>
                {teams.map((team: string) => (
                    <MenuItem key={team} value={team}>
                        {team}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}