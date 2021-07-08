import { useSelector} from "react-redux";
import {reselect} from "../redux/auth";

const selectLoading = (state) => state.auth.loading;
const selectError = (state) => state.auth.error;
const selectUser = (state) => state.auth.user;

const useAuth = () => {
const loading = useSelector(selectLoading);
const user = useSelector(selectUser);
const error = useSelector(selectError);
    console.log(loading, error, user)
   // const state =     useSelector((state) => state.auth.token)
   //
   //  console.log(state)
    return useSelector(reselect);
}

// const mapStateToProps = (state) => ({
//     token: state.auth.token
// })

export default useAuth;