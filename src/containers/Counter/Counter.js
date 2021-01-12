import React, { Component } from "react";
import {connect} from 'react-redux';

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import * as counterCreators from '../../store/actions/counter'
import * as resultCreators from '../../store/actions/result'
class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />  
        <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}/>
        <CounterControl label="Add 10" clicked={this.props.onAddCounter} />
        
        <CounterControl label="Subtract 15" clicked={this.props.onSubstractCounter} />
        <hr />
        <button onClick={() => this.props.onStoreResult(this.props.ctr)}> Store Result</button>
        <ul >
         
          {this.props.storedResults.map(strResult  => (
         
            <li style={{    width: '80%', listStyleType:'none' ,background: '#cce5ff', margin: '1px',padding: '20px' }} key={strResult.id} onClick={() => this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.ctr.counter,
    storedResults: state.res.results
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch(counterCreators.increment()),
    onDecrementCounter: () => dispatch(counterCreators.decrement()),
    onAddCounter: () => dispatch(counterCreators.add(10)),
    onSubstractCounter: () => dispatch(counterCreators.subtract(15)),
    onStoreResult : (result) => dispatch (resultCreators.storeResult(result)),
    onDeleteResult : (id) => dispatch(resultCreators.deleteResult(id))
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(Counter);
