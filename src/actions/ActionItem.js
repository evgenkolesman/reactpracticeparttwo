import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import Context from "../context";

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '.5rem'
    },
    input: {
        marginRight: '1rem'
    },
    button: {
        background: 'darkgreen',
        borderRadius: '50 %',
        color: 'wheat',
        border: 'none'
    }
}

function ActionItem({lang, index, onChange}) {
    const {removeLang} = useContext(Context)
    const classes = []

    if (lang.complete) {
        classes.push('done')
    }

    return (
        <li style={styles.li}>
                <span className={classes.join(' ')}>
                        <input
                            type="checkbox"
                            style={styles.input}
                            checked={lang.complete}
                            onChange={() => onChange(lang.id)}/>
                    &nbsp;
                    <strong>{index + 1} </strong>
                    &nbsp;
                    {lang.title}
                    &nbsp;
                    - value from service
     </span>
            <button style={styles.button} onClick={removeLang.bind(null, lang.id)}>&times;</button>
        {/*что бы полностью удалить, без обновления вставляем лямбду () => removeLang(lang.id)*/}
        </li>
    )
}

ActionItem.propTypes = {
    lang: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired
}

export default ActionItem;