import { Button, ModalHeader } from 'react-bootstrap';
import Modals from './Modals';
import { useState } from 'react';
const ModalsAPP = () => {

    const [modalShow, setModalShow] = useState(false);

    return (
        <div>

            <>
                <Button variant="primary" onClick={() => setModalShow(true)}>
                    BOTON EDITAR 
                </Button>

                <Modals
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </>

        </div>
    )
}

export default ModalsAPP;








