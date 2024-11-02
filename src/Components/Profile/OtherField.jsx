
import React from 'react';
import { Form } from 'react-bootstrap';
import { useUser } from '../../Context/UserContext';

const OtherField = () => {
    const { user } = useUser();

    return (
        <>
            <Form.Group controlId="formName" className="mb-2">
                <Form.Label>Nama</Form.Label>
                <Form.Control
                    type="text"
                    value={user.name}
                    readOnly
                />
            </Form.Group>

            <Form.Group controlId="formAsalDaerah" className="mb-2">
                <Form.Label>Asal Daerah</Form.Label>
                <Form.Control
                    type="text"
                    value={user.asalDaerah}
                    readOnly
                />
            </Form.Group>
        </>
    );
};

export default OtherField;
