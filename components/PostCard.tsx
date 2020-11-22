import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Hidden from "@material-ui/core/Hidden";
import { PostType, ParamsType } from "../source/types/type";

const useStyles = makeStyles({
  card: {
    display: "flex",
    margin: "1em 0px",
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
});

interface FeaturedPostProps {
  post: {
    date: string;
    description: string;
    image: string;
    imageText: string;
    title: string;
  };
}

export default function PostCard({ post }: { post: PostType }) {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <CardActionArea component="a" href={`post/${post.id}`}>
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                {post.title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {post.published_at}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {post.content}
              </Typography>
              <Typography variant="subtitle1" color="primary">
                Continue reading...
              </Typography>
            </CardContent>
          </div>
          <Hidden smDown>
            <CardMedia className={classes.cardMedia} image={post.image} />
          </Hidden>
        </Card>
      </CardActionArea>
    </Grid>
  );
}
