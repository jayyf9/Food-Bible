import React from "react";
import Slider from "react-slick";
import styles from "./slider.css";
import { Link } from 'react-router-dom';


import Input from '@material-ui/core/Input';

import Button from '@material-ui/core/Button';

import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';


import blue from '@material-ui/core/colors/blue';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

class SimpleSlider extends React.Component {
  state = {
    open: false
  };

  
  openSearch = () => {
    this.setState({
        open: true,
      });
    console.log('searching');
};

handleClose = value => {
  console.log('test')
  this.setState({ selectedValue: value, open: false });
};

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    return (
      <div className="sliders">
      <h3>My Recipies <SearchIcon onClick={this.openSearch} className="search largeicon" /></h3>
        <SearchRecipieDialog
                  open={this.state.open}
                  onClose={this.handleClose}
                  />
        <Slider {...settings}>

          <div>
            <Link to={`/recipie/1`}>
                <img src={require('../../../images/placeholder.png')} />
            </Link>
          </div>
          <div>
            <Link to={`/recipie/1`}>
              <img src={require('../../../images/placeholder.png')} />
            </Link>
          </div>
          <div>
            <Link to={`/recipie/1`}>
              <img src={require('../../../images/placeholder.png')} />
            </Link>
          </div>
          <div>
            <Link to={`/recipie/1`}>
              <img src={require('../../../images/placeholder.png')} />
            </Link>
          </div>
          <div>
            <Link to={`/recipie/1`}>
              <img src={require('../../../images/placeholder.png')} />
            </Link>
          </div>
          <div>
            <Link to={`/recipie/1`}>
              <img src={require('../../../images/placeholder.png')} />
            </Link>
          </div>
        </Slider>

      <h3>Highest Rated</h3>
        <Slider {...settings}>

          <div>
            <Link to={`/recipie/1`}>
                <img src={require('../../../images/placeholder.png')} />
            </Link>
          </div>
          <div>
            <Link to={`/recipie/1`}>
              <img src={require('../../../images/placeholder.png')} />
            </Link>
          </div>
          <div>
            <Link to={`/recipie/1`}>
              <img src={require('../../../images/placeholder.png')} />
            </Link>
          </div>
          <div>
            <Link to={`/recipie/1`}>
              <img src={require('../../../images/placeholder.png')} />
            </Link>
          </div>
          <div>
            <Link to={`/recipie/1`}>
              <img src={require('../../../images/placeholder.png')} />
            </Link>
          </div>
          <div>
            <Link to={`/recipie/1`}>
              <img src={require('../../../images/placeholder.png')} />
            </Link>
          </div>
        </Slider>

      <h3>Recently Added</h3>
        <Slider {...settings}>

          <div>
            <Link to={`/recipie/1`}>
                <img src={require('../../../images/placeholder.png')} />
            </Link>
          </div>
          <div>
            <Link to={`/recipie/1`}>
              <img src={require('../../../images/placeholder.png')} />
            </Link>
          </div>
          <div>
            <Link to={`/recipie/1`}>
              <img src={require('../../../images/placeholder.png')} />
            </Link>
          </div>
          <div>
            <Link to={`/recipie/1`}>
              <img src={require('../../../images/placeholder.png')} />
            </Link>
          </div>
          <div>
            <Link to={`/recipie/1`}>
              <img src={require('../../../images/placeholder.png')} />
            </Link>
          </div>
          <div>
            <Link to={`/recipie/1`}>
              <img src={require('../../../images/placeholder.png')} />
            </Link>
          </div>
        </Slider>
      </div>
    );
  }
}






const stylesDialog = theme => ({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  menu: {
    width: 200,
  }
});


class SearchDialog extends React.Component {
  state = {
    recipieName: '',
    recipieDesc: '',
    recipieIngredients: '',
    method: ''
  };

    handleChange({ target }) {
      this.setState({
        [target.name]: target.value
      });
    }

    handleClose = () => {
      this.props.onClose(this.props.selectedValue);
    };
  
    handleListItemClick = value => {
      this.props.onClose(value);
    };

    render() {
      const { classes, onClose, selectedValue, ...other } = this.props;
  
      return (
        <Dialog onClose={this.handleClose} aria-labelledby="add-recipie" className="recipieDialog" {...other}>
          <DialogTitle id="simple-dialog-title">Search Recipies</DialogTitle>
          <div>
          <DialogContent>
              <Input></Input>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.postRecipie} color="primary">
              Search
            </Button>
          </DialogActions>

          </div>
        </Dialog>
      );
    }
  }
  
  SearchDialog.propTypes = {
    classes: PropTypes.object.isRequired,
    onClose: PropTypes.func,
    selectedValue: PropTypes.string,
  };
  
  const SearchRecipieDialog = withStyles(stylesDialog)(SearchDialog);


export default SimpleSlider;