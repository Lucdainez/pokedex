import React from "react";
import PropTypes from 'prop-types';
import '../App.css';


class Pokemon extends React.Component {
    render() {
     const { id, name, type, averageWeight, image } = this.props.pokemon;
     const { value, measurementUnit } = averageWeight;
        return (
          <section key={id} className='section'>
            <section className="section-p">
            <p>{name}</p>
            <p>{type}</p>
            <p>Average Weight: {value} {measurementUnit}</p>
            </section>
            <img src={image} alt='pokemon' />
          </section>
        );
    }
}

Pokemon.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
        value: PropTypes.number,
        measurementUnit: PropTypes.string
    }),
    image: PropTypes.string
};

export default Pokemon;