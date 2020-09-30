import React, { Component, useEffect } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { ApplicationState } from '../../store';
import { Repository } from '../../store/ducks/repositores/types';
import * as RepositoriesActions from '../../store/ducks/repositores/actions';

import RepositoryItem from '../RepositoryItem';

interface StateProps {
    repositories: Repository[],
}

interface DispatchProps {
    loadRequest(): void,
}

type Props = StateProps & DispatchProps;

export function RepositoryList({ repositories, loadRequest }: Props) {
    useEffect(() => {
        loadRequest();
    }, []);

    return (
      <ul>
        {
             repositories.map(repository => (
               <RepositoryItem
                 key={repository.id}
                 repository={repository}
               />
             ))
            }
      </ul>
    );
}

const mapStateToProps = (state: ApplicationState) => ({
    repositories: state.repositories.data,
});

const mapDispathToProps = (dispath: Dispatch) => bindActionCreators(RepositoriesActions, dispath);

export default connect(mapStateToProps, mapDispathToProps)(RepositoryList);
