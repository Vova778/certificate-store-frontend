import React from 'react';
import CardItem from "./components/CardItem";
import '../../../assets/styles/Store.css';
import PaginationComponent from "./components/PaginationComponent";
import DefaultCard from "../../../assets/img/default_card.png";



const Store = () => {

    const certificates = [
        {
            id: 1,
            name: "Certificate 1",
            description: "Description for Certificate 1",
            price: 25.99,
            duration: 30,
            createDate: "2023-08-14T10:00:00",
            lastUpdateDate: "2023-08-14T10:30:00",
            tags: [
                { id: 1, name: "Tag1" },
                { id: 2, name: "Tag2" }
            ]
        },
        {
            id: 2,
            name: "Certificate 2",
            description: "Description for Certificate 2",
            price: 19.99,
            duration: 15,
            createDate: "2023-08-14T11:00:00",
            lastUpdateDate: "2023-08-14T11:45:00",
            tags: [
                { id: 2, name: "Tag2" },
                { id: 3, name: "Tag3" }
            ]
        },
        {
            id: 3,
            name: "Certificate 3",
            description: "Description for Certificate 3",
            price: 49.99,
            duration: 60,
            createDate: "2023-08-14T12:00:00",
            lastUpdateDate: "2023-08-14T12:20:00",
            tags: [
                { id: 1, name: "Tag1" },
                { id: 3, name: "Tag3" }
            ]
        },
        {
            id: 4,
            name: "Certificate 4",
            description: "Description for Certificate 4",
            price: 34.99,
            duration: 45,
            createDate: "2023-08-14T13:00:00",
            lastUpdateDate: "2023-08-14T13:35:00",
            tags: [
                { id: 4, name: "Tag4" },
                { id: 5, name: "Tag5" }
            ]
        },
        {
            id: 5,
            name: "Certificate 5",
            description: "Description for Certificate 5",
            price: 29.99,
            duration: 30,
            createDate: "2023-08-14T14:00:00",
            lastUpdateDate: "2023-08-14T14:15:00",
            tags: [
                { id: 1, name: "Tag1" },
                { id: 5, name: "Tag5" }
            ]
        },
        {
            id: 6,
            name: "Certificate 6",
            description: "Description for Certificate 6",
            price: 59.99,
            duration: 30,
            createDate: "2023-08-14T14:00:00",
            lastUpdateDate: "2023-08-14T14:20:00",
            tags: [
                { id: 1, name: "Tag1" },
                { id: 3, name: "Tag3" },
                { id: 5, name: "Tag5" }
            ]
        }
    ];


    return (<div>
            <div className="certificates-container">
                <div id="items-grid-view" className="items-grid-view">
                    {certificates.map((certificate) =>
                        <CardItem
                            certificate={certificate}
                            key={certificate.id}
                            image={DefaultCard}
                        />
                    )}
                </div>
                <PaginationComponent/>
            </div>
        </div>
    );
};

export default Store;