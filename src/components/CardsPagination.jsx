import React from 'react'
import { Pagination } from 'react-bootstrap';
let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
    items.push(
        <Pagination.Item key={number} active={number === active}>
            {number}
        </Pagination.Item>,
    );
}
const CardsPagination = () => {
    return (
        <>
            <div className="employee-displaying d-flex flex-wrap-reverse align-items-center justify-content-end">
                <Pagination className="border-0">{items}</Pagination>
            </div>
        </>
    )
}

export default CardsPagination