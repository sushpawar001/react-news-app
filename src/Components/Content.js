import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';

const apiKey = process.env.REACT_APP_API_KEY;

function Content(props) {
    const [data, setData] = useState({ articles: [] })
    const category = props.category || 'general';
    const fetchData = async () => {
        try {
            const apiUrl = `https://newsapi.org/v2/top-headlines?category=${category}&language=en&apiKey=${apiKey}`;
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const apiData = await response.json();
            // console.log('Data from the API:', apiData);

            // return data;
            setData(apiData);

        } catch (error) {
            console.error('Fetch error:', error);
        }
    }
    useEffect(() => {
        fetchData();
        // eslint-disable-next-line
    }, [category])

    return (
        <div className="col d-flex flex-column h-sm-100">
            <main className="row overflow-auto">
                <div className="col pt-4 p-5">
                    {data.articles
                        .filter(article => article.urlToImage)
                        .map((article, index) => (
                            <NewsItem key={index} article={article} />
                        ))}

                </div>
            </main>
        </div>
    )
}

export default Content