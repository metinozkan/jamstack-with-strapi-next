import { Typography, Grid, Divider, Paper } from "@material-ui/core";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export type PostType = {
  id: number;
  title: string;
  content: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  image: string;
};

export type ParamsType = {
  params: {
    post: number;
  };
};

export async function getStaticPaths() {
  const res = await fetch(`http://localhost:1337/posts`);
  const posts = await res.json();
  const paths = posts.map((post: PostType) => ({
    params: { post: post.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: ParamsType) {
  const res = await fetch(`http://localhost:1337/posts/${params.post}`);
  const post = await res.json();

  return { props: { post } };
}

function Post({ post }: { post: PostType }) {
  console.log("res", post);

  return (
    <>
      <Paper
        style={{
          backgroundImage: "url(https://source.unsplash.com/random)",
          position: "relative",
          marginBottom: "1em",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
          height: "200px",
        }}
      >
        {
          <img
            style={{ display: "none" }}
            src={"https://source.unsplash.com/random)"}
          />
        }
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
