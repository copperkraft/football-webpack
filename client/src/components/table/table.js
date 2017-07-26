import React, { Component } from 'react';
import './table.less';
import Title from '../title/title';

export default class Table extends Component {
    render() {
        const array = this.props.array; //todo: move fields to constant array
        if (array && array.map) {
            return (
                <table className="league-table"
                    data-bind="spinner: selectedLeague">
                    <thead>
                        <tr className="league-table__head">
                            <th className="league-table__head-item">Position</th>
                            <th className="league-table__head-item">Team</th>
                            <th className="league-table__head-item">G</th>
                            <th className="league-table__head-item">W</th>
                            <th className="league-table__head-item">D</th>
                            <th className="league-table__head-item">L</th>
                            <th className="league-table__head-item">GS</th>
                            <th className="league-table__head-item">GC</th>
                            <th className="league-table__head-item">P</th>
                        </tr>
                    </thead>
                    <tbody data-bind="foreach: selectedLeague()">
                        {array.map(row => (
                            <tr key={row.position} className="league-table__row">
                                <td className="league-table__item">{row.position}</td>
                                <td className="league-table__item">{row.name}</td>
                                <td className="league-table__item">{row.games}</td>
                                <td className="league-table__item">{row.wins}</td>
                                <td className="league-table__item">{row.draws}</td>
                                <td className="league-table__item">{row.losses}</td>
                                <td className="league-table__item">{row.goals}</td>
                                <td className="league-table__item">{row.goalsAgainst}</td>
                                <td className="league-table__item">{row.points}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            );
        } else {
            console.log(array);
            return <Title text="wait..."/>;
        }
    }
}