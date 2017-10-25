import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";

//import { fetchData } from "../../util";
import { Post } from "../../components";

class Posts extends Component{

    constructor(props) {
        super(props);

        this.state = {
            posts: [],
        }

        this.handleData = this.handleData.bind(this);

    }

    componentDidMount() {
        //fetchData(this.handleData);
    }

    handleData(data) {
          
    }

    render() {

        const { classes } = this.props;

        return(
            <div className={ classes.list } >
                <Post />
            </div>
        );
    }
}

const styles = {
    list: {
        paddingTop: "40px",
        paddingBottom: "40px",
        backgroundColor: "#EEEEEE",
        paddingRight: "215px",
        paddingLeft: "215px",
    },
}

Posts.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Posts);