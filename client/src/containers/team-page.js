import React, { Component } from 'react';
import {connect} from 'react-redux';

import Title from 'components/title/title';
import {fetchTeamInfo} from '../actions/team-info-actions';
import TeamCard from 'components/team-card/team-card';
import Spin from 'components/spinner/spinner';
import SelectTabs from 'components/select-tabs/select-tabs';

const tabs = {
    players: 'players',
    fixtures: 'fixtures'
};

class TeamPage extends Component {
    constructor() {
        super();

        this.state = {
            selectedTab: tabs.players
        };

        this.onTabChange = this.onTabChange.bind(this);
    }

    componentDidMount() {
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
                    : <TeamCard team={this.props.teamInfo.team}/>
                }
                <SelectTabs
                    values={[tabs.players, tabs.fixtures]}
                    onChange={this.onTabChange}
                    initial={this.state.selectedTab}/>
                {
                    this.state.selectedTab === tabs.players &&
                        <Title text={tabs.players}/>
                }
                {
                    this.state.selectedTab === tabs.fixtures &&
                        <Title text={tabs.fixtures}/>
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return ({teamInfo: state.teamInfo});
}

export default connect(mapStateToProps)(TeamPage);