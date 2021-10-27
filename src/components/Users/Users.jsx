import React from "react";
import styles from './Users.module.css';
import * as axios from "axios";
import userPhoto from '../../assets/images/users.png';

class Users extends React.Component{

    constructor(props) {
        super(props);

            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => { //Get запрос, как приходит ответ, так идет выполнение response
                this.props.setUsers(response.data.items);        // колл бэк на получение data.items (придет в качестве ответа от сервера. на функцию response
            });


    }

/*    getUsers = () => {
        if (this.props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => { //Get запрос, как приходит ответ, так идет выполнение response
                this.props.setUsers(response.data.items);        // колл бэк на получение data.items (придет в качестве ответа от сервера. на функцию response
            });
        }
    }*/

    render() {
        return(
            <div>
             {/*   <button onClick={this.getUsers}>Get Users</button>*/}
                {
                    this.props.users.map(u=><div key={u.id}>
                    <span>
                        <div>
                            <img src={ u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                            {/*тут фотки если фотки нету, то порубаем свое встроенное*/}
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={()=>{this.props.unfollow(u.id)}}> Unfollow</button>
                                : <button onClick={()=>{this.props.follow(u.id)}}>Follow</button>}
                        </div>
                    </span>
                        <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                             <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>

                        </span>
                    </span>
                    </div>)
                }

            </div>
        )

    }

}



export default Users;


/*
{
    id: 1,
        photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRr0YlatAy-hrNCQjzZ7fqDzNiXt7HGmzVaA&usqp=CAU',
    followed: true,
    fullName: 'Dimych',
    status: 'Im am a bosS',
    location: {city: 'Minsk', country: 'Belarus'}
},
{
    id: 2,
        photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRr0YlatAy-hrNCQjzZ7fqDzNiXt7HGmzVaA&usqp=CAU',
    followed: false,
    fullName: 'Sasha',
    status: 'Im am a bosS to',
    location: {city: 'Moscow', country: 'Russia'}
},
{
    id: 3,
        photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRr0YlatAy-hrNCQjzZ7fqDzNiXt7HGmzVaA&usqp=CAU',
    followed: true,
    fullName: 'Vasya',
    status: 'Im am a bosS too!',
    location: {city: 'Kiev', country: 'Ukraine'}
}*/
