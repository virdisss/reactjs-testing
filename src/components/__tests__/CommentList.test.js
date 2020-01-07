import CommentList from 'components/CommentList';
import {mount} from 'enzyme';
import Root from 'Root';

let wrapper;

beforeEach(()=> {

    const initialState = ['Comment 1', 'Comment 2'];

    wrapper = mount(
        <Root initialState={initialState}>
            <CommentList/>
        </Root>
    )
});

it('creates one LI per comment', () => {

})