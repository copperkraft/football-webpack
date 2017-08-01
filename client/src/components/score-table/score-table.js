import React, { Component } from 'react';

import './score-table.less';

import Spin from 'components/spinner/spinner';
import InternalLink from 'components/internal-link/internal-link';

export default function ScoreTable(props) {
    const array = props.array;
    if (array && array.map) {
        return (
            <table className="table">
                <thead>
                    <tr className="table__head">
                        <th className="table__head-item">Position</th>
                        <th className="table__head-item">Team</th>
                        <th className="table__head-item">G</th>
                        <th className="table__head-item">W</th>
                        <th className="table__head-item">D</th>
                        <th className="table__head-item">L</th>
                        <th className="table__head-item">GS</th>
                        <th className="table__head-item">GC</th>
                        <th className="table__head-item">P</th>
                    </tr>
                </thead>
                <tbody data-bind="foreach: selectedLeague()">
                    {array.map(row => (
                        <tr key={row.position} className="table__row">
                            <td className="table__item">{row.position}</td>
                            <td className="table__item">
                                <InternalLink route="team" parameters={{id: row.id}}>
                                    {row.name}
                                </InternalLink>
                            </td>
                            <td className="table__item">{row.games}</td>
                            <td className="table__item">{row.wins}</td>
                            <td className="table__item">{row.draws}</td>
                            <td className="table__item">{row.losses}</td>
                            <td className="table__item">{row.goals}</td>
                            <td className="table__item">{row.goalsAgainst}</td>
                            <td className="table__item">{row.points}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    } else {
        return (
            <Spin/>
        );
    }
}

