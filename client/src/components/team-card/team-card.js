import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './team-card.less';

import InternalLink from 'components/internal-link/internal-link';
import Spin from 'components/spinner/spinner';
import Team from 'models/team/team';

export default function TeamCard(props) {
    const {team, favoritable, isFavorite, onToggleFavorite} = props;
    if (team) {
        return (
            <div className="team-card">
                <img className="team-card__image" src={team.imageUrl}/>
                <InternalLink
                    route="team"
                    className="team-card__full-name"
                    activeClassName="team-card__full-name--current"
                    parameters={{id: team.id}}>
                    {team.fullName}
                </InternalLink>
                <div className="team-card__info">
                    short name: {team.name}
                </div>
                {team.squadMarketValue && <div className="team-card__info">
                    squad Market Value: {team.squadMarketValue}
                </div>}
                <div className="team-card__actions">
                    {props.children}
                </div>
                {favoritable && (
                    isFavorite
                        ? <button onClick={onToggleFavorite}>Remove from favorites</button>
                        : <button onClick={onToggleFavorite}>Add team to favorites</button>
                )}

            </div>);
    } else {
        return <Spin/>;
    }
}

TeamCard.propTypes = {
    team: PropTypes.instanceOf(Team),
    favoritable: PropTypes.bool,
    isFavorite: PropTypes.bool,
    onToggleFavorite: PropTypes.func
};