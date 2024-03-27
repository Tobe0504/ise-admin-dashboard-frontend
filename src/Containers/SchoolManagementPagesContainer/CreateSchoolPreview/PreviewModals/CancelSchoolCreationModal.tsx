import React from 'react'
import classes from './PreviewModals.module.css'
import Button from '../../../../Components/Button/Button';

type CancelSchoolCreationModalProps = {
    onClick: () => void;
    onClick2: () => void;
    imgSrc: string;
    header: string;
    paragraph: string;
}

const CancelSchoolCreationModal = ({ onClick, onClick2, imgSrc, header, paragraph }: CancelSchoolCreationModalProps) => {
    return (
        <div className={classes.container}>
            <img src={imgSrc} alt="Cancel School" />
            <h4>{header}</h4>
            <p>{paragraph}</p>
            <div className={classes.buttonContainer}>
                <Button
                    type='invalid'
                    onClick={onClick}
                >No, don't cancel</Button>
                <Button
                    type='delete'
                    onClick={onClick2}
                >Yes, discard</Button>
            </div>
        </div>
    )
}

export default CancelSchoolCreationModal