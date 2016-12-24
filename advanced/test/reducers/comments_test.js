import { expect } from '../test_helper';
import commentReducer from '../../src/reducers/comments';
import { SAVE_COMMENT } from '../../src/actions/types';

describe('Comments Reducer', () => {
	it('handles actions with unkown type', () => {
		//expect(commentReducer()).to.be.instanceof(Array);
		expect(commentReducer()).to.eql([]);
	});

	it('handles actions with type SAVE_COMMENT', () => {
		const action = { type: SAVE_COMMENT, payload: 'new comment'};
		expect(commentReducer([], action)).to.eql(['new comment']);
	});

});
