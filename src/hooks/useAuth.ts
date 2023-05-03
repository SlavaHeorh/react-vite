import {useContext} from "react";
import {AuthContext} from "../providers/AuthProvider.js";

export const useAuth = () => useContext(AuthContext)

