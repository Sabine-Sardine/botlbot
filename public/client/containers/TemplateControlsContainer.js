import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import TemplateControls from '../components/TemplateControls';
import { 
  postTemplateAsync, 
  editTemplateAsync, 
  deleteTemplateAsync,
  // getTemplateNamesAsync, 
  trashTemplate,
  updateName } from '../actions/template';
import { setSnackMessage } from '../actions/snack';
import { push } from 'react-router-redux';

const mapStateToProps = (state) => ({
  template: state.template
});

const mapDispatchToProps = (dispatch) => ({
  saveTemplate: (template) => dispatch(postTemplateAsync(template)),
  updateTemplate: (template) => dispatch(editTemplateAsync(template)),
  deleteTemplate: (template) => dispatch(deleteTemplateAsync(template)),
  // getTemplateNames: () => dispatch(getTemplateNamesAsync()),
  trashTemplate: (id) => dispatch(trashTemplate(id)),
  updateName: (name) => dispatch(updateName(name)),
  setSnackMessage: (message) => dispatch(setSnackMessage(message)),
  redirectToDashboard: () => dispatch(push('/dashboard'))
});

const TemplateControlsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TemplateControls);

export default TemplateControlsContainer;
