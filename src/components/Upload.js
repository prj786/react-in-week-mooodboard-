import React from "react";

const Upload = ({imgList}) => {
    return (
        <div>
            {
                imgList.map((img) => {
                    return (
                        <div>
                            <img src={img.image} alt={img.name} />
                            <h3>{img.name}</h3>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Upload