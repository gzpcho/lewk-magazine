from api.models import Article, Photoshoot

dummy_articles = [
    Article(
        id="lorem-ipsum",
        title="Lorem Ipsum",
        tagline="The ideas of tomorrow",
        copy="this is some sample copy.",
        image_url="https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png",
        author="jane doe",
        issue_no=3,
        issue_url="https://www.google.com/",
    ),
    Article(
        id="wikipedia-page",
        title="Wikipedia Page",
        tagline="Finds all the information you need",
        copy="this is some sample copy.",
        image_url="https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2@1.5x.png",
        author="john doe",
        issue_no=1,
        issue_url="https://www.wikipedia.com/",
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