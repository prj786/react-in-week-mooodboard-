import * as React from "react";

const Header = (props) => {
        // const personsList = persons.map(person => {
        //     return (
        //         <div key={person.id}>
        //             <h3>{person.name}</h3>
        //             <p>{person.age}</p>
        //             <pre>{person.id}</pre>
        //         </div>
        //     )
        // })
        let fileName;

        const uploadInfo = (e) => {
            e.preventDefault();
            props.changer(false);
        }

        const saveInfo = (e) => {
            fileName = e.target.value;
        }

        const uploadImage = (e) => {
            const objUrl = URL.createObjectURL(e.target.files[0]);
            const sendObj = {
                image: objUrl,
                name: fileName
            }
            props.uploader(sendObj);
        }

        return(
            <div>
                <form onSubmit={uploadInfo}>
                    <input type="text" placeholder={'image name'} onBlur={saveInfo}/>
                    <label htmlFor="uploader">
                        upload image
                    </label>
                    <input type="file" id={'uploader'} accept="image/*"
                           style={{display: 'none'}} onChange={uploadImage}/>
                    <button type={'submit'}>save</button>
                </form>
            </div>
        )
}

export default Header;