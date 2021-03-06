const redux = require('redux')
const reduxLogger = require('redux-logger')
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
const thunkMiddleware = require('redux-thunk').default
const logger = reduxLogger.createLogger()
const axios = require('axios')

//state
const initState = {
    loading: false,
    projects: [],
    error: ''
}

//action
const FETCH_PROJECT_REQUEST = 'FETCH_PROJECT_REQUEST'
const FETCH_PROJECT_SUCCESS = 'FETCH_PROJECT_SUCCESS'
const FETCH_PROJECT_FAILURE = 'FETCH_PROJECT_FAILURE'

// action creator
const fetchProjectRequest = () => {
    return {
        type: FETCH_PROJECT_REQUEST
    }
}
const fetchProjectSuccess = projects => {
    return {
        type: FETCH_PROJECT_SUCCESS,
        payload: projects
    }
}
const fetchProjectFailure = error => {
    return {
        type: FETCH_PROJECT_FAILURE,
        payload: error
    }
}

//reducer
const reducer = (state = initState, action) => {
    switch (action.type) {
        case FETCH_PROJECT_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_PROJECT_SUCCESS:
            return {
                loading: false,
                projects: action.payload,
                error: ''
            }
        case FETCH_PROJECT_FAILURE:
            return {
                loading: false,
                projects: [],
                error: action.payload
            }
        default:
            return state
    }
}

const GET_URL = "http://localhost:8080/api/project/all"
const GET_URL_EXCEPTION = "http://localhost:8080/api/project/BOOT_REACT1X"
//async action
const fetchProjects = () => {
    return function(dispatch) {
        dispatch(fetchProjectRequest())
        axios.get(GET_URL)
        .then(response => {
            // console.log(response.data)
            const projects = response.data.map(project => project.website)
            dispatch(fetchProjectSuccess(response.data))
        })
        .catch(error => {
            // console.log(error)
            dispatch(fetchProjectFailure(error))
        })

        axios.get(GET_URL_EXCEPTION)
            .then(response => {
                const projects = response.data.map(project=>project.projectIdentifier)
                dispatch(fetchProjectSuccess(projects))
            })
            .catch(error => {
                dispatch(fetchProjectFailure(error.response.data))
            })
    }
}

//store
const store = createStore(reducer, applyMiddleware(thunkMiddleware, logger))
console.log("create async api call...")

// store.subscribe(()=> {console.log(store.getState())})
store.dispatch(fetchProjects())