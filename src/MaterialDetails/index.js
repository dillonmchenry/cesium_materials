import React from 'react';
import PropTypes from 'prop-types';
import {ColorInput, Column, DetailsWrapper, FormInput} from "./styled";


const MaterialDetails = ({ material, handleChange }) => {
    return (
        <DetailsWrapper>
            {material !== null &&
                <>
                    <Column>
                        <label>Name
                            <FormInput
                                onChange={(e) => handleChange(e, "name")}
                                value={material.name}
                            />
                        </label>
                        <label>Volume(m^3)
                            <FormInput
                                type="number"
                                onChange={(e) => handleChange(e, "volume")}
                                value={material.volume}
                            />
                        </label>
                        <label>Delivery Date
                            <FormInput
                                type="date"
                                onChange={(e) => handleChange(e, "deliveryDate")}
                                field="deliveryDate" value={material.deliveryDate}
                            />
                        </label>
                    </Column>
                    <Column>
                        <label>Color <br/>
                            <ColorInput
                                type="color"
                                onChange={(e) => handleChange(e, "color")}
                                field="cost" value={material.color}
                            />
                        </label>
                        <label>Cost (USD per m^3)
                            <FormInput
                                type="number"
                                step="any"
                                onChange={(e) => handleChange(e, "cost")}
                                field="cost" value={material.cost}
                            />
                        </label>
                    </Column>
                </>
            }
        </DetailsWrapper>
    );
}

MaterialDetails.propTypes = {
    material: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
}

export default MaterialDetails;