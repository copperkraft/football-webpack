import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import moment, {Moment} from 'moment';

import './date-range-select.less';

export default class DateRangeSelect extends Component {
    constructor() {
        super();
        this.handleEndChange = this.handleEndChange.bind(this);
        this.handleStartChange = this.handleStartChange.bind(this);
    }

    handleStartChange(value) {
        const {endDate} = this.props;
        this.props.onChange(value.toDate(), endDate);
    }

    handleEndChange(value) {
        const {startDate} = this.props;
        this.props.onChange(startDate, value.toDate());
    }

    render() {
        let {minDate, maxDate, startDate, endDate} = this.props;
        [minDate, maxDate, startDate, endDate] = [minDate, maxDate, startDate, endDate].map(item => moment(item));
        return (
            <div className="player-card">
                <div className="player-card__info">
                    <DatePicker
                        className='date-input'
                        selectsStart
                        minDate={minDate}
                        maxDate={endDate}
                        selected={startDate}
                        startDate={startDate}
                        endDate={endDate}
                        onChange={this.handleStartChange}
                    />
                </div>
                <div className="player-card__info">
                    <DatePicker
                        className='date-input'
                        minDate={startDate}
                        maxDate={maxDate}
                        selectsEnd
                        selected={endDate}
                        startDate={startDate}
                        endDate={endDate}
                        onChange={this.handleEndChange}
                    />
                </div>
            </div>
        );
    }
}

DateRangeSelect.propTypes = {
    minDate: PropTypes.instanceOf(Date),
    maxDate: PropTypes.instanceOf(Date),
    startDate: PropTypes.instanceOf(Date),
    endDate: PropTypes.instanceOf(Date),
    onChange: PropTypes.func.isRequired
};