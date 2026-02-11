import React, {useReducer} from 'react';

/* STORE */
/* our default state for reducer */
const defaultState = {
  volume: 0,
  echo: 0,
  reverb: 0,
  bass: 0,
  treble: 0
}

/* typehinting for our audio control state */
type controlsState = {
  volume: number,
  echo: number,
  reverb: number,
  bass: number,
  treble: number
}

/* ACTIONS */
const volume_changed = "volume_changed"; 
const echo_changed = "echo_changed";
const reverb_changed = "reverb_changed";
const bass_changed = "bass_changed";
const treble_changed = "treble_changed";


/* controls action using union type i.e. type can be any of these strings  */
type ControlsAction = {
  type: typeof volume_changed | typeof echo_changed | typeof reverb_changed | typeof bass_changed | typeof treble_changed
  payload: number
}

/* Setup our reducer function. Spreads existing state, then updates relevant value */
function reducer(state: controlsState, action: ControlsAction): controlsState {
  console.log('state', state, 'action', action);
  switch(action.type) {
    case("volume_changed"): 
      return { ...state, volume: action.payload }
    case("echo_changed"): 
      return { ...state, echo: action.payload }
    case("reverb_changed"): 
      return { ...state, reverb: action.payload }
    case("bass_changed"): 
      return { ...state, bass: action.payload }
    case("treble_changed"): 
      return { ...state, treble: action.payload }  
    default: 
      return state;
  }
}

function App() {

  const [state, dispatch] = useReducer(reducer, defaultState);

  return (
    <div className="my-app">      
      <label htmlFor="volume">Volume</label>
      <input onChange={(e) => dispatch({type: volume_changed, payload: Number(e.currentTarget.value) })} type="range" name='volume' value={state.volume} />
      <label htmlFor="echo">Echo</label>
      <input onChange={(e) => dispatch({type: echo_changed, payload: Number(e.currentTarget.value) })} type="range" name='echo' value={state.echo} />
      <label htmlFor="reverb">Reverb</label>
      <input onChange={(e) => dispatch({type: reverb_changed, payload: Number(e.currentTarget.value) })} type="range" name='reverb' value={state.reverb} />
      <label htmlFor="bass">Bass</label>
      <input onChange={(e) => dispatch({type: bass_changed, payload: Number(e.currentTarget.value) })} type="range" name='bass' value={state.bass} />
      <label htmlFor="treble">Treble</label>
      <input onChange={(e) => dispatch({type: treble_changed, payload: Number(e.currentTarget.value) })} type="range" name='treble' value={state.treble} />
      <ul>
        <li>Volume: {state.volume}</li>
        <li>Echo: {state.echo}</li>
        <li>Reverb: {state.reverb}</li>
        <li>Bass: {state.bass}</li>
        <li>Treble: {state.treble}</li>
      </ul>
    </div>

  );
}

export default App;
