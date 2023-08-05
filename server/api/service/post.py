import os


class PostService:
    ALLOWED_TYPES = ["blog", "cryptobot"]

    POST_DIR = os.path.join(os.path.dirname(__file__), "..", "..", "posts")

    def __init__(self):
        pass

    def get_test_post(self):
        return {
            "name": 1,
            "content": "#Test *post*",
        }

    def get_post(self, name, type):
        posts = self.get_posts(type)

        post = next((post for post in posts if post["filename"] == name), None)
        if post is None:
            return None

        with open(post["path"]) as f:
            return {
                "name": name,
                "content": f.read(),
            }

    def get_posts(self, type):
        if type not in self.ALLOWED_TYPES:
            return []

        post_dir = os.path.join(self.POST_DIR, type)
        # check if directory exists
        if not os.path.exists(post_dir):
            return []

        files = sorted([file[:-3] for file in os.listdir(post_dir)], reverse=True)
        titles = []
        for file in files:
            with open(os.path.join(post_dir, file + ".md")) as f:
                titles.append(f.readline().strip()[2:])

        return [
            {
                "filename": file,
                "title": title,
                "path": os.path.join(post_dir, file + ".md"),
            }
            for file, title in zip(files, titles)
        ]
