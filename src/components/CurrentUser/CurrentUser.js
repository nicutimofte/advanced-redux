import React from 'react';
import{
  ONLINE,
  OFFLINE,
  AWAY
} from './../../actions';

export const CurrentUser = ({name, status, id, updateStatus}) => (
    <div>
     <div>
       <h3>
         HI, {name}!
       </h3>
     </div>
    <div>
      <select value={status} onChange={updateStatus} className="form-control">
        <option value={ONLINE}>ONLINE</option>
        <option value={OFFLINE}>OFFLINE</option>
        <option value={AWAY}>AWAY</option>
      </select>
    </div>
  </div>

)