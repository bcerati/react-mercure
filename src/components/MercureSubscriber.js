import React from 'react';
import PropTypes from 'prop-types';

function MercureSubscriber(props) {
  const { json, update, hub, topics, children } = props;

  // only executes once this effect (see its dependencies)
  React.useEffect(function() {
    const url = new URL(hub);

    topics.forEach(function(topic) {
      url.searchParams.append('topic', topic);
    });

    const eventSource = new EventSource(url);

    eventSource.onmessage = function(e) {
      update(json ? JSON.parse(e.data) : e.data);
    };
  }, []);

  return <React.Fragment>{children}</React.Fragment>;
}

MercureSubscriber.defaultProps = {
  children: null,
};

MercureSubscriber.propTypes = {
  json: PropTypes.bool,
  update: PropTypes.func.isRequired,
  hub: PropTypes.string.isRequired,
  topics: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  children: PropTypes.shape({}),
};

export default MercureSubscriber;
