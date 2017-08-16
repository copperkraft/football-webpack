import React, {Component} from 'react';
import {connect} from 'react-redux';

import Title from 'components/title/title';

import Select from '../components/select/select';

import {fetchLeagueTeams} from '../actions/league-teams-actions';
import {leaguesList} from '../constants/leagues-list';

import {selectLeague} from '../actions/league-actions';
import {TeamList} from '../components/team-list/team-list';
import {
    addFavorite, fetchFavorites,
    removeFavorite
} from 'actions/favorite-actions';

class LeagueTeams extends Component {
    constructor() {
        super();

        this.onLeagueChange = this.onLeagueChange.bind(this);
        this.onAddFavorite = this.onAddFavorite.bind(this);
        this.onRemoveFavorite = this.onRemoveFavorite.bind(this);
    }

    componentWillMount() {
        const {dispatch, selectedLeague} = this.props;
        dispatch(fetchLeagueTeams(selectedLeague));
        dispatch(fetchFavorites(selectedLeague));
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.selectedLeague !== this.props.selectedLeague) {
            const {dispatch, selectedLeague} = nextProps;
            dispatch(fetchLeagueTeams(selectedLeague));
        }
    }

    onLeagueChange(league) {
        const {dispatch} = this.props;
        dispatch(selectLeague(league));
    }

    onAddFavorite(team) {
        const {dispatch} = this.props;
        dispatch(addFavorite(team));
    }

    onRemoveFavorite(team) {
        const {dispatch} = this.props;
        dispatch(removeFavorite(team));
    }

    render() {
        const {leagueTeams, favorites, selectedLeague, favoritable} = this.props;
        return (
            <div className="container">
                <Title text={selectedLeague}/>
                <Select values={leaguesList}
                    onChange={this.onLeagueChange}
                    initial={selectedLeague}
                />
                <TeamList
                    teamList={leagueTeams.items}
                    favorites={favorites.items}
                    favoritable={favoritable && favorites.items !== null}
                    onAddFavorite={this.onAddFavorite}
                    onRemoveFavorite={this.onRemoveFavorite}
                />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        leagueTeams: state.leagueTeams, 
        selectedLeague: state.selectedLeague,
        favorites: state.favorites,
        favoritable: state.user.signed
    };
}

export default connect(mapStateToProps)(LeagueTeams);

