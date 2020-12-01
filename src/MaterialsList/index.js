import React from 'react';
import PropTypes from 'prop-types';
import { ListWrapper } from "./styled";
import Material from "./Material";

const MaterialsList = ({ materials, handleSelect, selected }) => {
    return (
        <ListWrapper>
            {materials.length === 0 ?
                <p>No materials</p> :
                materials.map((material, idx) => {
                    return (
                        <Material
                            key={idx}
                            selected={selected === idx}
                            handleSelect={() => handleSelect(idx)}
                            name={material.name}
                            volume={material.volume}
                            color={material.color}
                        />
                    )
                })
            }
        </ListWrapper>
    );
}

MaterialsList.propTypes = {
    materials: PropTypes.array.isRequired,
    handleSelect: PropTypes.func.isRequired,
    selected: PropTypes.number,
}

export default MaterialsList;