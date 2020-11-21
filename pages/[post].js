export async function getStaticPaths() {
  const res = await fetch(`${process.env.NEXT_PUBLİC_API_URL}/posts`);
  const posts = await res.json();

  const paths = posts.map((post) => ({
    params: { id: post.id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLİC_API_URL}/posts/${params.id}`
  );
  const post = await res.json();

  return { props: { post } };
}

function Post({ post }) {
  return <div>postPage</div>;
}

export default Post;
