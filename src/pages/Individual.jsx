import axios from 'axios';
import React, { useState } from "react";
import { LinearProgress } from '@material-ui/core';
import ChildrenTable from '../component/ChildrenTable';
import Form from "../component/Form";

const Individual = () => {
    const url = new URL(window.location.href);
    const path = url.pathname;
    const [data, setData] = useState([]);
    const [downFetching, setDownFetching] = useState(true);
    const [show, setShow] = useState(false);

    const baseURL = "http://hn.algolia.com/api/v1/items";

    React.useEffect(() => {
        axios.get(baseURL + path).then((response) => {
            setDownFetching(false);
            setData(response.data);
        });
    }, []);
    const showChildren = () => {
        if (show) {
            setShow(false);
        } else setShow(true);
    }

    return (
        <div>
            {downFetching && (
                <div className="loadingWrapper">
                    <LinearProgress />
                </div>
            )}
            {!downFetching && <div className="container" style={{ height: '100%', padding: '100px 0px' }}>
                <div className="dis-f h100">

                    <div className="fill justify-s flex-dic-col pl-6">
                        <div className="flex-dic-col w100">
                            <div className='flex'>
                                <h4>Title : </h4>
                                <h5>{data.title}</h5>
                            </div>
                            <div className='flex'>
                                <h4>Point : </h4>
                                <h5>{data.points}</h5>
                            </div>
                            <div className='flex'>
                                <h4>URL : </h4>
                                <h5>{data.url}</h5>
                            </div>

                            {/* <h6>Please select your grade</h6>
                        <Form /> */}
                        </div>
                        <div>
                            <button className="print" onClick={showChildren}>Show Children</button>
                        </div>
                        {show && <ChildrenTable children={data.children} />}
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default Individual