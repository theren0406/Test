import { ADD_USER, DELETE_USER } from '../actions/index';

const defaultData = [
	{ name: 'Joe Huang', phone:'0928-387528', email: 'kkbox@yahoo.com.tw' },
	{ name: 'Kathy McDanold', phone:'0915-031204', email: 'together@gmail.com' },
	{ name: 'Lily Wang', phone:'0920-832413', email: 'rakuten_team@gmail.com' },
	{ name: 'Harry Potter', phone:'0920-257396', email: 'rakuten_group@gmail.com' },
	{ name: 'Eddie Redmayne', phone:'0920-290657', email: 'rakuten_react@gmail.com' },
];

export default function(state = defaultData, action) {
	switch (action.type) {

  case ADD_USER:
		return [ ...state, action.payload ];
		
	case DELETE_USER:
      return [ ...state ].filter( user => user.name !== action.payload.name );
		
	}	
	return state;
}