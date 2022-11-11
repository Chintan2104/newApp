import React, { useState, useEffect } from "react";
import { slice } from "lodash";
import { Provider, ResourcePicker } from '@shopify/app-bridge-react';
import { Button } from '@shopify/polaris';
import '../style.css'
function loadmore() {
    const [post, setPost] = useState([]);
    const [index, setIndex] = useState(3);
    const [data, setdata] = useState([])
    const [isOpen, setisOpen] = useState(false)
    const initialPosts = slice(data, 0, index)

    const config = {
        apiKey: '10bb9091dc8b50dcefe90e0a6eaaee94',
        host: new URLSearchParams(location.search).get("host"),
        forceRedirect: true
    };

    const handleSelection = (i) => {
        let array = []
        array.push(i)
        setPost(array)
        setisOpen(true)
    }

    useEffect(() => {
        post.map((i) => {
            setdata(i.selection);
        })
    })



    function loadMore() {
        setIndex(index + 3);
    }

    const products = () => {
        return (
            <div>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {
                        initialPosts.map((item) => {
                            return (
                                <div className="div" key={item.id} >
                                    <div className='' style={{ fontSize: '25px' }}>{item.title}</div>
                                    <br />
                                    {
                                        item.images.length == 0 ? (
                                            <img src alt="no img" height='170px' width='250px' />
                                        ) : (
                                            <img src={item.images[0].originalSrc} alt="img" height='170px' width='250px' />
                                        )
                                    }
                                </div>
                            );
                        })
                    }
                </div>
                {data.length <= 3 ? "" : (
                    <div className="" style={{ display: 'flex', justifyContent: "center", padding: '10px' }}>
                        <Button onClick={loadMore} disabled={index >= data.length ? true : false}> Load More</Button>
                    </div>)
                }
            </div>
        )
    }

    const handleShow = () => {
        setisOpen(false)
        console.log(isOpen);
    }
    console.log(isOpen);

    return (
        <>{isOpen == false ?
            <>
                <Provider config={config}>
                    <ResourcePicker resourceType="Product" open={true} onSelection={handleSelection} onCancel={() => { setisOpen(true) }} />
                </Provider>
            </>
            : (
                <div>
                    {products()}
                    <Button onClick={handleShow}> Add Products</Button>
                </div>
            )
        }

        </>
    );
}
export default loadmore;