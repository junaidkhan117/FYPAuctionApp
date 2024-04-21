import React from 'react'
import { Pagination } from 'react-bootstrap';

const CardsPagination = ({count, page, onClick}) => {

    let active = 2;
let items = [];
for (let number = 1; number <= count; number++) {
    items.push(
        <Pagination.Item onClick={()=>onClick(number)} key={number} active={number === page}>
            {number}
        </Pagination.Item>
    );
}
    return (
        <>
            <div className=" d-flex flex-wrap-reverse align-items-center justify-content-end">
                <Pagination className="border-0">{items}</Pagination>
            </div>
        </>
    )
}

export default CardsPagination