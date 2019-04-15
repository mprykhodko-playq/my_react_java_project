import React from 'react';
import renderer from 'react-test-renderer';
import AddUser from "./AddUser";
import {Provider} from "react-redux";
import store from "../../store";

describe('addUser', () => {

    it('renders correctly', () => {
       const tree = renderer.create(
           <Provider store={store}>
           <AddUser/>
           </Provider>).toJSON();
       expect(tree).toMatchSnapshot();
    });
});