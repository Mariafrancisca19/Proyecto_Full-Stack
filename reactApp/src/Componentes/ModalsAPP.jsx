import React from 'react'
import { Button, ModalHeader } from 'react-bootstrap';
import Modals from './Modals';
const ModalsAPP = () => {

    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div>

            <>
                <Button variant="primary" onClick={() => setModalShow(true)}>
                    Launch vertically centered modal
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








