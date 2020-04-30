import React, {Component} from 'react';
import CountUp from 'react-countup';
import './countup.scss';
class CounterBlock extends Component {
    render (){
        return (
            <div className={`countup-wrap`}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <CountUp start={0} end={3450} delay={0}>
                                {({ countUpRef }) => (
                                    <div className="countup-box">
                                        <div className="counter-number">
                                            <span ref={countUpRef} />
                                        </div>

                                        <div className="counter-title">
                                            <span>SQUARE AREAS</span>
                                        </div>
                                    </div>
                                )}
                            </CountUp>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <CountUp start={0} end={2422} delay={0}>
                                {({ countUpRef }) => (
                                    <div className="countup-box">
                                        <div className="counter-number">
                                            <span ref={countUpRef} />
                                        </div>

                                        <div className="counter-title">
                                            <span>CAR PARKING</span>
                                        </div>
                                    </div>
                                )}
                            </CountUp>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <CountUp start={0} end={1890} delay={0}>
                                {({ countUpRef }) => (
                                    <div className="countup-box">
                                        <div className="counter-number">
                                            <span ref={countUpRef} />
                                        </div>

                                        <div className="counter-title">
                                            <span>APARTMENTS</span>
                                        </div>
                                    </div>
                                )}
                            </CountUp>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <CountUp start={0} end={1234} delay={0}>
                                {({ countUpRef }) => (
                                    <div className="countup-box">
                                        <div className="counter-number">
                                            <span ref={countUpRef} />
                                        </div>

                                        <div className="counter-title">
                                            <span>ROOMS</span>
                                        </div>
                                    </div>
                                )}
                            </CountUp>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CounterBlock