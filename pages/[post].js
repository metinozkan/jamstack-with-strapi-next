export async function getStaticPaths() {
  const res = await fetch(`http://localhost:1337/posts`);
  const posts = await res.json();

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
  return <div>postPage {post.title}</div>;
}

export default Post;
