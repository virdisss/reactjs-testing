import React from 'react';
import CommentBox from 'components/CommentBox';
import {mount} from 'enzyme';
import Root from 'Root';

let wrapped;

beforeEach(() => {

    wrapped = mount(<Root><CommentBox /></Root>);
});

afterEach(() => {
    wrapped.unmount();
})

it('has a text area and a button', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);
});

it('has a text area that users can type in', () => {
    wrapped.find('textarea').simulate('change', {
        target: {value: 'new comment'}
    });
    wrapped.update();
    expect(wrapped
        .find('textarea')
        .prop('value'))
        .toEqual('new comment');
});

it('when form is submitted, text area gets emptied', ()=>{
    wrapped.find('button').simulate('submit');
    wrapped.update();
    expect(wrapped.find('textarea').prop('value')).toEqual('');
});