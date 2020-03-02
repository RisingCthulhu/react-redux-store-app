import React from "react";
import { Checkbox, Input } from "semantic-ui-react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "rc-tooltip/assets/bootstrap.css";
import PropTypes from "prop-types";

import usePriceFilterChange from "../../hooks/usePriceFilterChange";
import useOriginFilterChange from "../../hooks/useOriginFilterChange";

const Filter = ({ price, filterOrigins, productsOrigins }) => {
    const createSliderWithTooltip = Slider.createSliderWithTooltip;
    const Range = createSliderWithTooltip(Slider.Range);

    const priceChangeHandler = usePriceFilterChange();
    const originChangeHadler = useOriginFilterChange();

    const checkIsInputValid = value => {
        if (+value < 0) return 0;

        return +value > 1000 ? 1000 : +value;
    };

    return (
        <div className="filter-container">
            <h2>Filters</h2>
            <div className="price-filter">
                <h3>Price</h3>
                <div className="filter-input-container">
                    <div className="price-input-container">
                        <Input
                            type="number"
                            className="price-input"
                            value={price.min}
                            onChange={event =>
                                priceChangeHandler(
                                    checkIsInputValid(event.target.value),
                                    price.max
                                )
                            }
                            data-testid="filter-min-input"
                        />
                        MIN
                    </div>
                    <div className="price-input-container">
                        <Input
                            type="number"
                            className="price-input"
                            value={price.max}
                            onChange={event =>
                                priceChangeHandler(
                                    price.min,
                                    checkIsInputValid(event.target.value)
                                )
                            }
                            data-testid="filter-max-input"
                        />
                        MAX
                    </div>
                </div>
                <Range
                    className="filter-range"
                    min={0}
                    max={1000}
                    defaultValue={[price.min, price.max]}
                    allowCross={false}
                    tipFormatter={value => value}
                    onAfterChange={value =>
                        priceChangeHandler(value[0], value[1])
                    }
                    data-testid="filter-range"
                />
            </div>
            <div className="origin-filter">
                <h3>Origin</h3>
                {productsOrigins.map(origin => (
                    <Checkbox
                        key={origin.value}
                        label={origin.displayName}
                        onChange={() => originChangeHadler(origin.value)}
                        checked={filterOrigins.includes(origin.value)}
                        data-testid={`filter-origins-${origin.value}-checkbox`}
                    />
                ))}
            </div>
        </div>
    );
};

Filter.propTypes = {
    price: PropTypes.objectOf(PropTypes.number),
    filterOrigins: PropTypes.array,
    productsOrigins: PropTypes.arrayOf(PropTypes.object)
};

export default Filter;
