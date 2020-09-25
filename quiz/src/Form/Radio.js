import React from 'react';

const Radio = ({ pergunta, options, onChange, value, id, active }) => {
    if (active === false) return null;
    return (
        <p>
            <div className="card m-3">
                <div className="card-body">
                    <legend style={{ fontWeight: 'bold' }}>{pergunta}</legend>
                    {options.map((option) => (

                        <div className="form-check">
                            <label className="form-check-label" >
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    id={id}
                                    checked={value === option}
                                    value={option}
                                    onChange={onChange}
                                />
                                {option}
                            </label>
                        </div>
                    ))}
                </div>
            </div>
        </p>
    );
};

export default Radio;
