import React from 'react';

import MercureSubscriber from './src/components/MercureSubscriber.js';

export function withMercure(configs, initialData) {
  return function MercureHOC(WrappedComponent) {
    return class HOC extends React.Component {
      constructor(props) {
        super(props);

        this.state = {
          data: initialData,
        };

        this.update = this.update.bind(this);
      }

      update(data) {
        this.setState({ data });
      }

      render() {
        const { data } = this.state;

        configs.update = this.update;

        return (
          <MercureSubscriber {...configs}>
            <WrappedComponent mercureData={data} />
          </MercureSubscriber>
        );
      }
    };
  };
}

export default MercureSubscriber;
