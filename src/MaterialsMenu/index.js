import React from 'react';
import {ButtonWrapper, MaterialGrid, MenuWrapper} from "./styled";

import MaterialsList from "../MaterialsList";
import MaterialDetails from "../MaterialDetails";

class MaterialsMenu extends React.Component {
    constructor(props) {
        super(props);

        this.state = ({
            materials: [],
            selected: null,
        })
    }

    handleAddMaterial = () => {
        const materials = [...this.state.materials]

        this.setState({
            materials: [{
                name: "New Material",
                volume: 0,
                deliveryDate: null,
                color: "#ffffff",
                cost: 0.00,
            }, ...materials]
        });
    }

    handleDeleteMaterial = () => {
        const selected = this.state.selected;

        if (selected !== null) {
            const materials = [...this.state.materials]
            materials.splice(selected, 1);
            this.setState({
                materials: materials,
                selected: null,
            })
        }
    }

    handleMaterialSelection = (index) => {
        console.log("selection handled");
        this.setState({
            selected: index,
        });
    }

    handleMaterialChange = (e, field) => {
        const value = e.target.value;
        const selected = this.state.selected;
        const materials = this.state.materials;

        switch (field) {
            case "name":
                materials[selected].name = value;
            break;
            case "volume":
                materials[selected].volume = value;
            break;
            case "deliveryDate":
                materials[selected].deliveryDate = value;
            break;
            case "color":
                materials[selected].color = value;
            break;
            case "cost":
                materials[selected].cost = value;
            break;
            default:
                break;
        }
        this.setState({ materials: materials })
    }

    getSelectedMaterial = () => {
        const selected = this.state.selected;

        if (selected !== null) {
            return this.state.materials[selected];
        }
        return null;
    }

    getTotalCost = () => {
        let cost = 0.00;
        const materials = this.state.materials;

        for (let i=0; i<materials.length; i++) {
            cost += materials[i].cost*materials[i].volume;
        }
        return cost.toFixed(2);
    }

    render() {
        return (
            <MenuWrapper>
                <h2>Materials</h2>
                <ButtonWrapper>
                    <button
                        className="add"
                        onClick={this.handleAddMaterial}
                    >+ &nbsp;Add</button>
                    <button
                        className="delete"
                        onClick={this.handleDeleteMaterial}
                    >- &nbsp;Delete</button>
                </ButtonWrapper>
                <MaterialGrid>
                    <MaterialsList
                        materials={this.state.materials}
                        selected={this.state.selected}
                        handleSelect={this.handleMaterialSelection}
                    />
                    <MaterialDetails
                        material={this.getSelectedMaterial()}
                        handleChange={this.handleMaterialChange}
                    />
                </MaterialGrid>
                <p className="total-cost">Total Cost: &nbsp;&nbsp; ${this.getTotalCost()}</p>
            </MenuWrapper>
        )
    }
}

export default MaterialsMenu;