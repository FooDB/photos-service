import { shallow, mount, render } from 'enzyme';
import React from 'react';
import App from '../client/src/components/App';
import PhotoItem from '../client/src/components/PhotoList';
import Arrow from '../client/src/components/Carousel/Arrow';
import Flag from '../client/src/components/Carousel/Flag';


  describe('<PhotoItem />', () => {
    it('should popup image on click', () => {
      const wrapper = shallow(
      	<App title="mock" />
      );
      wrapper.find('.item item-0').simulate('click');
      expect('.modal-opactiy').toExist();
    });
  });
