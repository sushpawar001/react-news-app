import React, { useContext, useEffect, useState } from 'react'
import NewsItem from './NewsItem';
import { SearchContext } from '../Contexts/Search';

const apiKey = process.env.REACT_APP_API_KEY;

function Content(props) {
    const { searchTerm } = useContext(SearchContext);
    const [data, setData] = useState({ articles: [] })
    const [filteredData, setFilteredData] = useState({ articles: [] });
    const category = props.category || 'general';
    const fetchData = async () => {
        try {
            // const apiUrl = `https://newsapi.org/v2/top-headlines?category=${category}&language=en&apiKey=${apiKey}`;
            // const response = await fetch(apiUrl);
            // if (!response.ok) {
            //     throw new Error(`HTTP error! Status: ${response.status}`);
            // }
            // const apiData = await response.json();

            // console.log('Data from the API:', apiData);

            const apiData = {
                "articles": [
                    {
                        "source": {
                            "id": null,
                            "name": "Hindustan Times"
                        },
                        "author": "Parmita Uniyal",
                        "title": "Zika virus in Maharashtra: Know symptoms, complications, prevention tips - Hindustan Times",
                        "description": "Zika virus usually causes mild disease but in pregnant women, it can lead to many complications. Know about symptoms and prevention tips from experts. | Health",
                        "url": "https://www.hindustantimes.com/lifestyle/health/zika-virus-cases-on-rise-in-maharashtra-know-symptoms-complications-prevention-tips-from-experts-101700222364239.html",
                        "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/11/17/1600x900/Zika-virus-on-rise-in-Maharashtra_1700222429906_1700222430062.jpg",
                        "publishedAt": "2023-11-17T12:07:06Z",
                        "content": "Zika virus cases have been on rise in Maharashtra. So far, at least 7 cases of the mosquito-borne illness have been found in the state, the latest being a 64-year-old woman from Pune who experienced … [+5335 chars]"
                    },
                    {
                        "source": {
                            "id": null,
                            "name": "Neurologylive.com"
                        },
                        "author": "Marco Meglio",
                        "title": "Episode 102: Potential of Gamma Sensory Stimulation in Alzheimer Disease - Neurology Live",
                        "description": "Mind Moments®, a podcast from NeurologyLive®, brings you an exclusive interview with Brett Vaughan. [WATCH TIME: 22 minutes]",
                        "url": "https://www.neurologylive.com/view/episode-102-potential-gamma-sensory-stimulation-alzheimer-disease",
                        "urlToImage": "https://cdn.sanity.io/images/0vv8moc6/neurolive/4230a827b2a9b1c4f54c9ab765dc68485ccd04ba-5834x5834.png?fit=crop&auto=format",
                        "publishedAt": "2023-11-17T12:00:27Z",
                        "content": "Episode 102 of the NeurologyLive® Mind Moments® podcast is now live! Scroll down to listen or click here to subscribe on your favorite streaming service.\r\nThe Mind Moments podcast features exclusive … [+1754 chars]"
                    },
                    {
                        "source": {
                            "id": null,
                            "name": "YouTube"
                        },
                        "author": null,
                        "title": "Israel-Hamas War: Elon Musk's Reply On 'Jewish Groups Push Hate Against Whites' Post Causes Uproar - Hindustan Times",
                        "description": "Tech billionaire, Elon Musk has found himself in yet another controversy amid the Israel-Palestine war. Musk has been accused of agreeing to anti-Jewish post...",
                        "url": "https://www.youtube.com/watch?v=0MPvQK0xSgo",
                        "urlToImage": "https://i.ytimg.com/vi/0MPvQK0xSgo/maxresdefault.jpg",
                        "publishedAt": "2023-11-17T11:45:39Z",
                        "content": null
                    }
                ]
            }
            setData(apiData);

        } catch (error) {
            console.error('Fetch error:', error);
        }
    }

    const filterData = (data) => {
        if (searchTerm.length > 0) {
            const filteredData = data.articles.filter(item =>
                item.title.toLowerCase().includes(searchTerm.toLowerCase()))
            setFilteredData({ articles: filteredData });
        }
        else {
            setFilteredData(data);
        }
    }

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line
    }, [category])

    useEffect(() => {
        filterData(data)
        // console.log("searchTerm:", searchTerm)
        // eslint-disable-next-line
    }, [searchTerm, data])

    return (
        <div className="col d-flex flex-column h-sm-100">
            <main className="row overflow-auto">
                <div className="col pt-4 p-5">
                    {filteredData.articles
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