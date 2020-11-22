import { Typography, Grid, Divider } from "@material-ui/core";

export async function getStaticPaths() {
  const res = await fetch(`http://localhost:1337/posts`);
  const posts = await res.json();
  console.log("res", res.json());
  const paths = posts.map((post) => ({
    params: { post: post.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`http://localhost:1337/posts/${params.post}`);
  const post = await res.json();

  return { props: { post } };
}

function Post({ post }) {
  return (
    <Grid item xs={12} md={8}>
      <Typography variant="h6" gutterBottom>
        {post.title}
      </Typography>
      <Divider />
      <Typography variant="body1">{post.content}</Typography>
      {/* {posts.map((post) => (
        <Markdown className={classes.markdown} key={post.substring(0, 40)}>
          {post}
        </Markdown>
      ))} */}
    </Grid>
  );
}

export default Post;
