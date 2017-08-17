import React from 'react';
import PropTypes from 'prop-types';

import Team from 'models/team/team';
import TeamCard from 'components/team-card/team-card';
import Spin from 'components/spinner/spinner';
import Favorite from 'models/favorite/favorite';

export function TeamList(props) {
    const {teamList, favorites, onAddFavorite, onRemoveFavorite, favoritable} = props;
    if (teamList) {
        return (
            <div className="row">
                {teamList.map(team => {
                    if (!favoritable) {
                        return <TeamCard key={team.id} team={team}/>;
                    }
                    if (favorites.some(favorite => favorite.id === team.id)) {
                        return (
                            <TeamCard
                                favoritable
                                isFavorite
                                key={team.id}
                                team={team}
                                onToggleFavorite={onRemoveFavorite.bind(this, team)}
                            />
                        );
                    } else {
                        return (
                            <TeamCard
                                favoritable
                                key={team.id}
                                team={team}
                                onToggleFavorite={onAddFavorite.bind(this, team)}
                            />
                        );
                    }
                })}
            </div>
        );
    } else {
        return <Spin/>;
    }
}

TeamList.propTypes = {
    teamList: PropTypes.arrayOf(
        PropTypes.oneOfType([
            PropTypes.instanceOf(Team),
            PropTypes.instanceOf(Favorite)
        ])
    ),
    favorites: PropTypes.arrayOf(PropTypes.instanceOf(Favorite)),
    favoritable: PropTypes.bool,
    onAddFavorite: PropTypes.func,
    onRemoveFavorite: PropTypes.func
};

TeamList.defaultProps = {
    favorites: []
};