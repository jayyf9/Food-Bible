import React, { Component } from 'react';
import Header from '../../components/header/header';
import SimpleSlider from '../../pages/browse/slider/slider';
import AddIcon from '@material-ui/icons/Add';

import styles from "./browse.css";

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FloatingActionButton from '@material-ui/core/Button';

import Button from '@material-ui/core/Button';

import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';


import blue from '@material-ui/core/colors/blue';
import { List, ListItem } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';


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
  

  const FloatingButtonStyle = {
      margin: 0,
      top: 'auto',
      zIndex: 1,
      right: 20,
      bottom: 20,
      left: 'auto',
      position: 'fixed',
  };

class Browse extends Component {
    state = {
        open: false
      };
    
      openAddRecipie = () => {
        this.setState({
          open: true,
        });
      };
    
      handleClose = value => {
        console.log('test')
        this.setState({ selectedValue: value, open: false });
      };
    



    render() {
        return (
            <div>
                <Header />
                <FloatingActionButton  onClick={this.openAddRecipie} variant="fab" color="primary" aria-label="add" style={FloatingButtonStyle}>
                <AddIcon />
                </FloatingActionButton >
                <AddRecipieDialog
                open={this.state.open}
                onClose={this.handleClose}
                />
                <SimpleSlider />
            </div>
        )
    }
}


class RecipieDialog extends React.Component {
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
  
      postRecipie = () => {
        console.log('Add Recipie: ' + this.state.recipieName);
        console.log('recipieDesc: ' + this.state.recipieDesc);
        console.log('recipieIngredients: ' + this.state.recipieIngredients);
        console.log('recipieMethod: ' + this.state.recipieMethod);
        // Post to recipie to api
      };
  
      render() {
        const { classes, onClose, selectedValue, ...other } = this.props;
    
        return (
          <Dialog onClose={this.handleClose} aria-labelledby="add-recipie" className="recipieDialog" {...other}>
            <DialogTitle id="simple-dialog-title">Add a new Recipie</DialogTitle>
            <div>
            <DialogContent>
            <form className={classes.container} noValidate autoComplete="off">
                    <TextField
                      id="name"
                      name="recipieName"
                      label="Recipie Name"
                      fullWidth
                      className={classes.textField}
                      margin="normal"
                      onChange={this.handleChange.bind(this)}
                      value={ this.state.recipieName }  />
                    <TextField
                      id="description"
                      name="recipieDesc"
                      label="Description"
                      fullWidth
                      className={classes.textField}
                      margin="normal" 
                      onChange={this.handleChange.bind(this)}
                      value={ this.state.recipieDesc }  />
                    <TextField
                      id="ingredients"
                      name="recipieIngredients"
                      label="Ingredients"
                      fullWidth
                      className={classes.textField}
                      margin="normal" 
                      onChange={this.handleChange.bind(this)}
                      value={ this.state.recipieIngredients }  />
                    <TextField
                      id="method"
                      name="recipieMethod"
                      label="Method"
                      fullWidth
                      multiline
                      rows="4"
                      className={classes.textField}
                      margin="normal" 
                      onChange={this.handleChange.bind(this)}
                      value={ this.state.recipieMethod}  />
            </form>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={this.postRecipie} color="primary">
                Add
              </Button>
            </DialogActions>
  
            </div>
          </Dialog>
        );
      }
    }
    
    RecipieDialog.propTypes = {
      classes: PropTypes.object.isRequired,
      onClose: PropTypes.func,
      selectedValue: PropTypes.string,
    };
    
    const AddRecipieDialog = withStyles(stylesDialog)(RecipieDialog);
  

export default Browse;