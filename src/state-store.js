import createStore from 'redux-zero';

const actions = store => ({
    refreshDate: state => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return { today };
    }
});

const store = createStore(refreshDate({}));

export { actions, store };
