import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import NewsCard from '../NewsCard/NewsCard';

class NewsCardDeck extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
            news: []
        };
    }

    componentDidMount() {
        this.NewsList();
    }

    NewsList() {
        fetch("http://localhost/newsroom-cms/wp-json/wp/v2/news_clip?_embed")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    news: result
                });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
    }
    render() {
        const { error, isLoaded, news } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <CardDeck>
                    {news.map(news => (
                        <NewsCard key={news.id}
                            title={news.title.rendered}
                            date={news.ACF.news_date}
                            imageURL={news.ACF.news_image_url}
                            sourceURL={news.ACF.news_url}
                            source={news.ACF.news_source}
                            editionDate={news.modified}
                            author={news._embedded.author[0].name}
                        />
                    ))}
                    
                </CardDeck>
            )
        }
    }
}

export default NewsCardDeck;