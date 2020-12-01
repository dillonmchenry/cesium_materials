import React from 'react';
import PropTypes from 'prop-types';
import {MaterialWrapper} from "../styled";

const Material = ({
    name,
    volume,
    color,
    selected,
    handleSelect,
}) => {

    return (
        <MaterialWrapper onClick={handleSelect} selected={selected} color={color}>
            <div className="circle" color={color}> </div>
            <div>
                <p>{name}</p>
                <p className="note">{volume}m3</p>
            </div>
        </MaterialWrapper>
    );
}

Material.propTypes = {
    name: PropTypes.string,
    volume: PropTypes.number,
    color: PropTypes.string,
    selected: PropTypes.bool,
    handleSelect: PropTypes.func,
}

export default Material;