import renderer from 'react-test-renderer';
import UpdateUser from "../components/user/UpdateUser";
import React, { Component } from 'react'
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Provider from "react-redux";

describe('>>>H O M E --- Snapshot', () => {

    /*const testUser = {
        id: 5,
        name: 'name',
        eMail: 'mail',
        password: 'password'
    };
    const mockStore = configureStore();

    let store, container;

    beforeEach(()=>{
        store = mockStore(testUser);
        container = shallow(<UpdateUser store={store}/>);
    });

    it ('+++ render the connected(SMART) component', () =>{
        expect(container.length).toEqual(1);
    });

    it('+++ check Prop matches with initialState', () => {
        expect(container.prop('output')).toEqual(testUser.output);
    });*/

    it('fucking react testing', () => {
        // const upUser = shallow(<UpdateUser/>);
        // expect(upUser.find('textarea').length).toEqual(1);
        const tree = renderer
            .create(
                <Provider store={}>
                    <UpdateUser/>
                </Provider>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });



    {/*it('+++capturing Snapshot of Home', () => {*/}
    {/*    const renderedValue = renderer.create(<UpdateUser user={{*/}
    {/*        id: 5,*/}
    {/*        name: 'name',*/}
    {/*        eMail: 'mail',*/}
    {/*        password: 'password'*/}
    {/*    }*/}
    {/*    }/>).toJSON();*/}
    {/*    expect(renderedValue).toMatchSnapshot();*/}
    {/*});*/}


});