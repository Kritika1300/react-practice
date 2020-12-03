import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Cards';
ReactDOM.render(
<>
<Card imgsrc = "https://images-na.ssl-images-amazon.com/images/G/01/digital/video/hero/TVSeries/Friends_4926700-FRIENDS._V392939166_RI_.jpg"
    title = " A Netflix Original Series"
    sname = "FRIENDS"
    link = "https://www.netflix.com/in/" />
<Card imgsrc = "data:image/jpeg;base64,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"
    title = " A Netflix Original Series"
    sname = "PEAKY BLINDERS"
    link = "https://www.netflix.com/in/" />
<Card imgsrc = "https://summary.org/wp-content/uploads/2020/06/the-vampire-diaries.jpg"
    title = " A Netflix Original Series"
    sname = "VAMPIRE DIARIES"
    link = "https://www.netflix.com/in/" />
    
</>,
document.getElementById('root'));

