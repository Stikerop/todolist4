import React, {useState} from "react";
import './App.css';
import Custominput from "../custominput/Custominput";
import CustomButton from "../CustomButton/CustomButton";
import CustomTable from "../CustomTable/CustomTable";


const initialValues = {
    userName: '',
    userSurname: '',
    userSalary: ''
}


function App() {
    const [userData, setUserData] = useState(initialValues);
    const [users, setUsers] = useState([]);
    const [editableUserData, setEditableUserData] = useState({
        isEdit: false,
        userIndex: null
    })

    console.log('userData:', userData)

    const handleRemoveClick = ({index}) => {
        setUsers(users.filter((user, userIndex) => userIndex !== index));

    }
    const isFilledFields = userData.userName && userData.userSurname && userData.userSalary;

    const handleSubmitUser = (event) => {
        event.preventDefault();

        if (isFilledFields) {
            if (editableUserData.isEdit) {
                const editedData = users;
                editedData.splice(editableUserData.userIndex, 1, userData);

                setUsers(editedData);

                setEditableUserData({
                    isEdit: false,
                    userIndex: null
                })
            } else {
                setUsers((prevState) => [...prevState, userData]);
            }
            setUserData(initialValues)

        }
    }
    const handleCleanClick = () => setUserData(isFilledFields);

    const handleEditClick = ({user, index}) => {
        setUserData(user);
        setEditableUserData({
            isEdit: true,
            userIndex: index
        })
    }

    const handleInputChange = (event, userName) => setUserData((prevState) => ({
        ...prevState,
        [userName]: event.target.value
    }))


    return (
        <div className='wrapper'>
            <div className='wrapper-content'>
                <div className='table-data'>
                  <CustomTable
                  users = {users}
                  handleEditClick={handleEditClick}
                  handleRemoveClick={handleRemoveClick}
                  />
                </div>
                <div>
                    <form onSubmit={handleSubmitUser} onReset={handleCleanClick}>
                        <Custominput
                            placeholder='Write your name'
                            handleChange={handleInputChange}
                            value={userData.userName}
                            fieldName='userName'
                        />

                        <Custominput
                            placeholder='Write your surname'
                            handleChange={handleInputChange}
                            value={userData.userSurname}
                            fieldName='userSurname'
                        />

                        <Custominput
                            placeholder='Write your salary'
                            handleChange={handleInputChange}
                            value={userData.userSalary}
                            fieldName='userSalary'
                        />

                        <div className='buttons-wrapper'>
                            <CustomButton
                                label='clean'
                                classNames=''
                                handleClick={() =>{}}
                                data={null}
                                type = 'reset'
                            />
                            <CustomButton
                                label={editableUserData.isEdit ? 'Edit' : 'Add'}
                                classNames=''
                                handleClick={() =>{}}
                                data={null}
                                type = 'submit'
                            />
                        </div>
                    </form>
                    <div></div>
                </div>
            </div>

        </div>
    );
}

export default App;
