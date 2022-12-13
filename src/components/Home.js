import { Button } from "primereact/button";
import React from "react";
const Home = () => {
    return (
        <div className="surface-0 text-700 text-center">
            <div className="text-blue-600 font-bold mb-3"><i className="pi pi-discord"></i>&nbsp;Application Home page</div>
            <div className="text-900 font-bold text-5xl mb-3">Join Our Design Community</div>
            <div className="text-700 text-2xl mb-5">
                Display a list of TODO items (each item must have a unique ID, title and description).
                Add items to list.
                Delete items from list.
                Edit items.
                Multi-user environment. Each user Login authorized bu Auth 2.0
                Support bigger set of devices/resolutions
                Implement ordering of items..
            </div>
            <Button >Logout</Button>
        </div>
    );
};

export default Home;