from api.models import Article, Photoshoot

dummy_articles = [
    Article(
        id="to-be-a-woman",
        title="To be a Woman",
        tagline="It's an old question, pondered by potential lovers, philosophers, artists and anybody and everybody",
        copy="\"What is it like to be a woman?\" Well, if you have ever found yourself asking this question, this is the article for you. The women of Lewk will give you a first hand glimpse into the world through the eyes of the divine feminine age.",
        image_url="https://via.placeholder.com/400x300",
        author="Laurel",
        issue_no=3,
        issue_url="https://linktr.ee/Lewkmagazinetx",
    ),
    Article(
        id="maximalism",
        title="Maximalism",
        copy="Maximalism has been associated with luxury brands, logos, and overconsumption by the common eye. However, having big logos branded across your chest is not the path to looking expensive. These can often cheapen a look and don't always exuberate expensive. Stemming from Eighteenth-century Rococo fashion in Paris, maximalism in fashion is the art of wearing and layering with different patterns, textures, silhouettes, accessories, bright colors, and more with an expensive touch. While 2022 runways aren't dawned with gowns that could be worn to French Court, maximalism today allows individuals to express themselves freely and fashionably, and this fashion trend is now worldwide. The modern version of maximalism was birthed through the pandemic, a fashion culture to fight the routine isolation in quarantine. With the rise of social media, people are able to dress to the max with each other. Individuals were able to create statement pieces and patterned garments that exude the expensive tastes of designers in the runway world, while in the comfort of their homes.",
        image_url="https://via.placeholder.com/600x400",
        author="Laurel",
        issue_no=3,
        issue_url="https://linktr.ee/Lewkmagazinetx",
    ),
]

dummy_photoshoots = [
    Photoshoot(
        id="a-photoshoot",
        title="A Photoshoot",
        photo_url_list=[
            "https://via.placeholder.com/150",
            "https://via.placeholder.com/75",
            "https://via.placeholder.com/25"
        ]
    )
]