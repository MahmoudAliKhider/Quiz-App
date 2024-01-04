import * as Actions from '../redux/resulteReducer';

export const PushAnswer = (result) => async (dispatch) => {
    try {
        await dispatch(Actions.pushResaultAction(result))
    } catch (error) {
        console.log(error);
    }
}