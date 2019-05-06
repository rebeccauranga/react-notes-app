
import React from 'react';
import NotesList from './NotesList';
import NotesDetail from './NotesDetail';
import styles from './NotesApp.module.css';
import { throwStatement } from '@babel/types';

export default class NotesApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedNote: '1001',
            notes: [
                {
                    id: '1001', 
                    title: 'first note',
                    text: 'this is the first note'
                },
                {
                    id: '1002', 
                    title: 'second note',
                    text: 'this is the second note'
                },
                {
                    id: '1003', 
                    title: 'third note',
                    text: 'this is the third note'
                },
                {
                    id: '1004', 
                    title: 'fourth note',
                    text: 'this is the fourth note'
                }
            ]   
        }
    }
    
    render() {
        return(
            <div className={styles.app}>
                <NotesList 
                    className={styles.list}
                    notes={this.state.notes}
                    handleSelection={this._selectNote}
                />
                <NotesDetail className={styles.detail}/>
            </div>
        );
    }

    _selectNote = (id) => {
        this.setState({
            selectedNote: id
        });
    }


}
