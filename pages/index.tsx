import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";

import MainFeaturedPost from "../components/MainFeaturedPost";
import Sidebar from "../components/Sidebar";
import PostCard from "../components/PostCard";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const mainFeaturedPost = {
  title: "Title of a longer featured blog post",
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: "https://source.unsplash.com/random",
  imageText: "main image description",
  linkText: "Continue reading…",
};

const featuredPosts = [
  {
    title: "Featured post",
    date: "Nov 12",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random",
    imageText: "Image Text",
  },
  {
    title: "Post title",
    date: "Nov 11",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random",
    imageText: "Image Text",
  },
];

const posts = ["post1", "post2", "post3"];

const sidebar = {
  title: "About",
  description:
    "Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.",
  archives: [
    { title: "March 2020", url: "#" },
    { title: "February 2020", url: "#" },
    { title: "January 2020", url: "#" },
    { title: "November 1999", url: "#" },
    { title: "October 1999", url: "#" },
    { title: "September 1999", url: "#" },
    { title: "August 1999", url: "#" },
    { title: "July 1999", url: "#" },
    { title: "June 1999", url: "#" },
    { title: "May 1999", url: "#" },
    { title: "April 1999", url: "#" },
  ],
  social: [
    { name: "GitHub", icon: GitHubIcon, url: "https://github.com/metinozkan" },
    {
      name: "Twitter",
      icon: TwitterIcon,
      url: "https://twitter.com/Metin_ozkann",
    },
    { name: "Facebook", icon: FacebookIcon, url: "#" },
  ],
};
export async function getStaticProps() {
  const res = await fetch(`http://localhost:1337/posts`);
  const posts = await res.json();
  return { props: { posts } };
}

export default function Blog(props: any) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <main>
        <MainFeaturedPost post={mainFeaturedPost} />
        <Grid container spacing={5} className={classes.mainGrid}>
          <Grid item sm={8}>
            {props.posts.map((post: any) => (
              <PostCard key={post.title} post={post} />
            ))}
          </Grid>
          <Grid item sm={4}>
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </Grid>
      </main>
    </React.Fragment>
  );
}
