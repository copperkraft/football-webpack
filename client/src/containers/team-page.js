import React, {Component} from 'react';
import {connect} from 'react-redux';

import Title from 'components/title/title';
import {fetchTeamInfo} from '../actions/team-info-actions';
import TeamCard from 'components/team-card/team-card';
import Spin from 'components/spinner/spinner';
import SelectTabs from 'components/select-tabs/select-tabs';
import TeamPlayers from 'containers/team-players';
import TeamFixtures from 'containers/team-fixtures';
import TwitterBlock from 'containers/twitter-block';

const tabs = {
    players: 'players',
    fixtures: 'fixtures'
};

class TeamPage extends Component {
    constructor() {
        super();

        this.state = {
            selectedTab: tabs.fixtures
        };

        this.onTabChange = this.onTabChange.bind(this);
    }

    componentWillMount() {
        const {dispatch} = this.props;
        dispatch(fetchTeamInfo(this.props.match.params.id));
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.match.params.id !== this.props.match.params.id) {
            const {dispatch} = nextProps;
            dispatch(fetchTeamInfo(this.props.match.params.id));
        }
    }

    onTabChange(tab) {
        this.setState({selectedTab: tab});
    }

    render() {
        return (
            <div className="container">

                {this.props.teamInfo.isFetching
                    ? <Spin/>
                    : <TeamCard team={this.props.teamInfo.team}>
                        <SelectTabs
                            values={[tabs.players, tabs.fixtures]}
                            onChange={this.onTabChange}
                            initial={this.state.selectedTab}
                        />
                    </TeamCard>
                }
                <div className="row">
                    <div className="column">
                        {
                            this.state.selectedTab === tabs.players
                                ? <TeamPlayers teamId={+this.props.match.params.id}/>
                                : <TeamFixtures teamId={+this.props.match.params.id}/>
                        }
                    </div>
                    <div className="column">
                        {
                            this.state.selectedTab === tabs.players
                                ? this.props.teamInfo.team
                                    ? <TwitterBlock tag={this.props.teamInfo.team.name.toLowerCase()}/>
                                    : <Spin/>
                                : <Title text="Fixtures..."/>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        teamInfo: state.teamInfo
    };
}

export default connect(mapStateToProps)(TeamPage);