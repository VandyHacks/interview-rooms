import createStore from 'redux-zero';

const getToday = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return { today };
};

const actions = store => ({
    refreshDate: () => store.setState(getToday())
});

const store = createStore(getToday());

const mapToProps = ({ today }) => ({ today });

export { actions, store, mapToProps };
