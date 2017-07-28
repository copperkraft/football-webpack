import React, { Component } from 'react';
import './table.less';
import Spin from '../spinner/spinner';

export default class Table extends Component {
    render() {
        const array = this.props.array; //todo: move fields to constant array
        if (array && array.map) {
            return (
                <table className="table"
                    data-bind="spinner: selectedLeague">
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
                                <td className="table__item">{row.name}</td>
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
}