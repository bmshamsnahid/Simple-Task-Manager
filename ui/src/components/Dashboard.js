import React, { Component } from 'react';
import ProjectItem from './Project/ProjectItem';
import CreateProjectButton from './Project/CreateProjectButton';
import { connect } from 'react-redux';
import { trackPromise } from 'react-promise-tracker';
import { getProjects } from '../actions/projectActions';
import PropTypes from 'prop-types';

class Dashboard extends Component {

  componentDidMount() {
    trackPromise(this.props.getProjects());
  }

  render() {
    const { projects } = this.props.project;
    return (
      <div className="projects">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="display-4 text-center">Projects</h1>
                    <br />
                    <CreateProjectButton />
                    <br />
                    <hr />
                    {
                      projects.map(project => (
                        <ProjectItem
                          key={project.id}
                          project={project} />
                      ))
                    }
                </div>
            </div>
        </div>
    </div>
    )
  }
}

Dashboard.propTypes = {
  project: PropTypes.object.isRequired,
  getProjects: PropTypes.func.isRequired
};

const mapStateToProps = ({ project }) => ({
  project
});

export default connect(mapStateToProps, {getProjects})(Dashboard);
