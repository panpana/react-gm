import React, {PropTypes} from 'react';
import classNames from 'classnames';
import _ from 'underscore';

class RadioGroup extends React.Component {
    render() {
        const {
            onChange,
            value,
            inline,
            className,
            children,
            name,
            ...rest
        } = this.props;

        const childList = _.isArray(children) ? children : [children];

        return (
            <div {...rest} className={classNames('radio', className)}>
                {_.map(childList, (child, i) => {
                    return React.cloneElement(child, {
                        key: i,
                        checked: child.props.value === value,
                        inline,
                        onChange: () => {
                            onChange(child.props.value);
                        },
                        name
                    });
                })}
            </div>
        );
    }
}

RadioGroup.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.any,
    onChange: PropTypes.func,
    inline: PropTypes.bool
};

RadioGroup.defaultProps = {
    inline: false,
    onChange: _.noop
};

export default RadioGroup;