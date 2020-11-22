import { Typography, Grid, Divider, Paper } from "@material-ui/core";

import { PostType, ParamsType } from "../../source/types/type";

export async function getStaticPaths() {
  const res = await fetch(`https://7248fe9342ad.ngrok.io/posts`);
  console.log("res", res);
  const posts = await res.json();
  const paths = posts.map((post: PostType) => ({
    params: { post: post.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: ParamsType) {
  const res = await fetch(`https://7248fe9342ad.ngrok.io/posts/${params.post}`);
  const post = await res.json();

  return { props: { post } };
}

function Post({ post }: { post: PostType }) {
  return (
    <>
      <Paper
        style={{
          backgroundImage: `url(${post.image})`,
          position: "relative",
          marginBottom: "1em",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
          height: "300px",
        }}
      >
        {<img style={{ display: "none" }} src={post.image} />}
      </Paper>
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
    </>
  );
}

export default Post;
