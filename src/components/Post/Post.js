import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import SkipPreviousIcon from 'material-ui-icons/SkipPrevious';
import PlayArrowIcon from 'material-ui-icons/PlayArrow';
import SkipNextIcon from 'material-ui-icons/SkipNext';
import FavoriteIcon from 'material-ui-icons/Favorite';

const styles = {
  card: {
    display: 'flex',
    flexDirection: "row",
    marginBottom: "15px",
    marginTop: "15px",
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: "535px",
    height: "210px",
    paddingRight: "15px",
    paddingLeft: "40px",
    paddingTop: "20px",
    paddingBottom: "20px",
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    minWidth: "275px",
    minHeight: "165px",
    overflow: "hidden",
    backgroundSize: "contain",
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 10,
    paddingBottom: 10,
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  imageWrapper: {
      margin: "auto",
  }
};

function MediaControlCard(props) {
  const { classes, theme } = props;

  return (
    <div>
      <Card className={classes.card}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography type="headline">Live From Space</Typography>
            <Typography type="subheading" color="secondary">
              Mac Miller
            </Typography>
          </CardContent>
          <div className={classes.controls}>
            <IconButton aria-label="Previous">
              {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
            </IconButton>
            <IconButton aria-label="Play/pause">
              <PlayArrowIcon className={classes.playIcon} />
            </IconButton>
            <IconButton aria-label="Next">
              {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
            </IconButton>
            <IconButton aria-label="Add to favorites">
              <FavoriteIcon />
            </IconButton>
          </div>
        </div>
        <div className={classes.imageWrapper}>
            <CardMedia
            className={classes.cover}
            image="http://clashhacks.in/assets/img/events/poster-bharathacks.jpg"
            title="Live from space album cover"
            />
        </div>
      </Card>
      <Card className={classes.card}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography type="headline">Live From Space</Typography>
            <Typography type="subheading" color="secondary">
              Mac Miller
            </Typography>
          </CardContent>
          <div className={classes.controls}>
            <IconButton aria-label="Previous">
              {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
            </IconButton>
            <IconButton aria-label="Play/pause">
              <PlayArrowIcon className={classes.playIcon} />
            </IconButton>
            <IconButton aria-label="Next">
              {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
            </IconButton>
            <IconButton aria-label="Add to favorites">
              <FavoriteIcon />
            </IconButton>
          </div>
        </div>
        <div className={classes.imageWrapper}>
            <CardMedia
            className={classes.cover}
            image="http://clashhacks.in/assets/img/events/poster-bharathacks.jpg"
            title="Live from space album cover"
            />
        </div>
      </Card>
      <Card className={classes.card}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography type="headline">Live From Space</Typography>
            <Typography type="subheading" color="secondary">
              Mac Miller
            </Typography>
          </CardContent>
          <div className={classes.controls}>
            <IconButton aria-label="Previous">
              {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
            </IconButton>
            <IconButton aria-label="Play/pause">
              <PlayArrowIcon className={classes.playIcon} />
            </IconButton>
            <IconButton aria-label="Next">
              {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
            </IconButton>
            <IconButton aria-label="Add to favorites">
              <FavoriteIcon />
            </IconButton>
          </div>
        </div>
        <div className={classes.imageWrapper}>
            <CardMedia
            className={classes.cover}
            image="http://clashhacks.in/assets/img/events/poster-bharathacks.jpg"
            title="Live from space album cover"
            />
        </div>
      </Card>
    </div>
  );
}

MediaControlCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MediaControlCard);