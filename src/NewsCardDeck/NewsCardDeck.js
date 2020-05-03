import React, { setState } from 'react';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';
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
        fetch("https://newsroom-cms.000webhostapp.com/wp-json/wp/v2/news_clip?_embed&per_page=100")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    news: result
                });
            },

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
            return <Alert variant={'danger'}>Error: {error.message}</Alert>;
        } else if (!isLoaded) {
            return <Spinner animation="border" role="status"><span className="sr-only">Loading...</span></Spinner>;
        } else {
            return (
                <Row>
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
                </Row>
            )
        }
    }
}

export default NewsCardDeck;