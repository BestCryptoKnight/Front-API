import React, {
    createContext,
    useContext,
    useReducer,
    useMemo,
    useCallback,
    useEffect,
} from "react";
const ProjectContext = createContext();
export function useProjectContext() {
    return useContext(ProjectContext);
}

function reducer(state, { type, payload }) {
    return {
        ...state,
        [type]: payload
    }
}

const INIT_STATE = {
    apiData: '',
    apiData2: '',
};


export default function Provider({ children }) {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);
    return (
        <ProjectContext.Provider
            value={useMemo(
                () => [
                    state,
                    {
                        dispatch
                    }
                ],
                [state]
            )}
        >
            {children}
        </ProjectContext.Provider>
    );
}