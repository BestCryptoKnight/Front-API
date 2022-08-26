import axios from 'axios';
import React, { useState } from "react";
import Card from "../component/Card";
import { LinearProgress } from '@material-ui/core';

// import { ProjectContext } from "../contexts";

// function Header() {
//     const [state, { dispatch }] = ProjectContext();
//     const minSidebar = () => {
//         dispatch({
//             type: "apiData2",
//             payload: state.apiData
//         });
//     }
//     return (
//         <header className="border-gray-200 dark:bg-gray-800 bg-white">
//             {state.apiData}
//         </header>
//     )
// }
const baseURL = "http://hn.algolia.com/api/v1/search?query=";

const School = () => {
    // const [post, setPost] = React.useState(null);
    const [cardData, setCardData] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [downFetching, setDownFetching] = useState(true);

    React.useEffect(() => {
        axios.get(baseURL + inputValue).then((response) => {
            setDownFetching(false);
            setCardData(response.data.hits);
        });
    }, [inputValue]);

    const onChangeHandler = event => {
        event.preventDefault();
        setInputValue(event.target.value);
    };

    return (
        <div>
            {downFetching && (
                <div className="loadingWrapper">
                    <LinearProgress />
                </div>
            )}
            {!downFetching && <div className="container flex-dic-col " style={{ padding: '3em 0 0 0' }}>

                <form>
                    <input type="text" name="search" placeholder="Search.." onChange={onChangeHandler} />
                </form>
                <div className="ai-i mt-4 cardlist">
                    {
                        cardData.map((data, index) => (
                            <Card index={index} img={'/assets/images/card.png'} title={data.title} oID={data.objectID} author={data.author} url={data.url} />
                        ))
                    }
                </div>
            </div>}
        </div>

    )
}

export default School