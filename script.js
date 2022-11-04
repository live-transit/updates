const load = () => {
    fetch('/updates/articleList.json')
        .then(res => res.json())
        .then(articles => {
            articles = articles.articles;

            document.getElementById('articleNumber').innerText = articles.length.toString();

            articles.forEach(article => {
                const converter = new showdown.Converter();
                const markdown = article.content;
                const newHTML = converter.makeHtml(markdown);

                console.log(article);
                document.getElementById('articles').insertAdjacentHTML('beforeend', `
                    <article>
                        <h3>
                            <timestamp>${article.date}</timestamp>
                        </h3>
                        <p>${newHTML}</p>
                    </article>
                `);
            })
        })
};