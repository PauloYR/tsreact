import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { ApplicationState } from '../../store';
import { Repository } from '../../store/ducks/repositores/types';
import * as RepositoriesActions from '../../store/ducks/repositores/actions';

import RepositoryItem from '../RepositoryItem';

interface StateProps{
    repositories: Repository[],
}

interface DispatchProps{
    loadRequest(): void,
}

type Props = StateProps & DispatchProps;

class RepositoryList extends Component<Props> {
    componentDidMount() {
        const { loadRequest } = this.props;
        loadRequest();
    }

    render() {
        const { repositories } = this.props;

        return (
          <ul>
            {repositories.map(repository => (
              <RepositoryItem
                key={repository.id}
                repository={repository}
              />
))}
          </ul>
);
    }
}

const mapStateToProps = (state : ApplicationState) => ({
    repositories: state.repositories.data,
});

const mapDispathToProps = (dispath: Dispatch) => bindActionCreators(RepositoriesActions, dispath);

export default connect(mapStateToProps, mapDispathToProps)(RepositoryList);
