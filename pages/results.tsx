import React, {useEffect, useState} from 'react';
import { GetServerSideProps } from 'next';
import {
    Container,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    TableSortLabel, Typography, CircularProgress
} from '@mui/material';
import TeamFilter from '../components/TeamFilter';

type Match = {
    id: number;
    team1: string;
    score1: number;
    team2: string;
    score2: number;
    date: string;
};

type ResultsPageProps = {
    results: Match[];
};

export default function ResultsPage({ results }: ResultsPageProps) {
    const [filteredTeam, setFilteredTeam] = useState<string | null>(null);
    const [order, setOrder] = useState<'asc' | 'desc'>('asc');
    const [orderBy, setOrderBy] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    const filteredResults = filteredTeam
        ? results.filter((match) => match.team1 === filteredTeam || match.team2 === filteredTeam)
        : results;

    const handleRequestSort = (property: keyof Match) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const sortedMatches = filteredResults.slice().sort((resultItem1, resultItem2) => {
        if (orderBy === 'date') {
            const dateA = new Date(resultItem1.date);
            const dateB = new Date(resultItem2.date);
            return order === 'asc' ? dateA.getTime() - dateB.getTime() : dateB.getTime() - dateA.getTime();
        }
        return 0;
    });

    useEffect(() => {
        if (results.length > 0) {
            setLoading(false);
        }
    }, [results]);

    return (
        <Container>
            <Typography variant="h1" sx={{ fontSize: '2rem', pb: 5 }}>
                Sports Results
            </Typography>
            <TeamFilter matches={results} onSelect={setFilteredTeam} />
            {loading ? (
                <CircularProgress sx={{ display: 'block', margin: '20px auto' }} />
            ) : (
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Team 1 Name</TableCell>
                            <TableCell>Team 1 Score</TableCell>
                            <TableCell>Team 2 Score</TableCell>
                            <TableCell>Team 2 Name</TableCell>
                            <TableCell>
                                <TableSortLabel
                                    active={orderBy === 'date'}
                                    direction={orderBy === 'date' ? order : 'asc'}
                                    onClick={() => handleRequestSort('date')}
                                >
                                    Match Date
                                </TableSortLabel>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {sortedMatches.map((match) => (
                            <TableRow key={match.id}>
                                <TableCell>{match.team1}</TableCell>
                                <TableCell>{match.score1}</TableCell>
                                <TableCell>{match.score2}</TableCell>
                                <TableCell>{match.team2}</TableCell>
                                <TableCell>{match.date}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            )}
        </Container>
    );
}

export const getServerSideProps: GetServerSideProps = async () => {
    const baseUrl =
        process.env.NODE_ENV === 'production'
            ? 'https://sportsdashboard.web.app'
            : 'http://localhost:3000';

    const response: Response = await fetch(`${baseUrl}/api/results`);
    const results: Match[] = await response.json();
    return { props: { results } };
};
