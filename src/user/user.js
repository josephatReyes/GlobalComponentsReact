import React, {useState} from 'react';



/**
 * A user controller
 * @constructor
 * @param {array} data arrray of users in db
 **/
const UserController = props => {

    const [users, setUsers]=useState([]);
    /**
 *  
 * Here return users array
 * @param {number} idUser id of user to find in array 
 * 
 * @example 
 * // return if exist a user with id 1
 * getUser(1);
 * 
 * @return {user} if exist an user with the id sent
 */
    const getUser = (idUser) => {
        return users.filter((user) => {
            return user.id == idUser;
        });
    }
    return (
        <ul>
            {users.map(((user, index) => {
                return (
                    <li key={user.name+index}>
                        {user.name}
                    </li>
                );
            })
            )}
        </ul>
    )
}

export default UserController;