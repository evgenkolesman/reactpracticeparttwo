import React from 'react';
import ActionItem from './ActionItem';
import PropTypes from 'prop-types';

const styles = {
    ul: {
        listStyle: "none",
        margin: 0,
        padding: 0
    }
}

function ActionsList (props) {
    return (
        <ul style={styles.ul}>
            {props.languages.map((lang, index) => {
                return (
                    <ActionItem
                        lang={lang}
                        key={lang.id}
                        index={index}
                        onChange={props.onToggle}
                    />
                )
            })}
        </ul>
    )
}

ActionsList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired
}


export default ActionsList