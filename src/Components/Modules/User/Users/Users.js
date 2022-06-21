import React from "react";
import styles from "./Users.module.css";
import Card from "../../../Card/Card";
import User from "../User/User";

const Users = (props) => {
    const users = props.users;
    return (
        <Card className={styles.users}>
            {users.length === 0  && ( 
                <div className="no-data">
                    No user Added!
                </div>
            )}
            {users.length > 0 && (
                    users.map(user => (
                        <div key={user.id}>
                            <User
                                userName={user.userName}
                                age={user.age}
                                date={user.date}
                                id={user.id}
                            />
                        </div>
                    ))
                )
            }
        </Card>
    );
}

export default Users;