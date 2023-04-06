import { useState } from 'react'

import db from '../../firebase'
import { collection, addDoc } from "@firebase/firestore"

import styles from "./Contacts.module.css"

import { Linkedin } from 'react-bootstrap-icons'
import { Github } from 'react-bootstrap-icons'

const Contacts = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    console.log(name, email, message);

    const handleSubmit = async(e) => {
        e.preventDefault()

        console.log("handleSubmit activated")

        //checks if empty
        if(name.length < 3){
            alert('The name can not be blank');
            return
        }
        if(email === ""){
            alert('Your email can not be blank');
            return
        }
        if(message.length < 5){
            alert('The message can not be blank');
            return
        }

        //send to db
        try{
            const docRef = await addDoc(collection(db, "contacts"), {
                client_name: name,
                client_email: email,
                client_message: message,
                created : new Date()
            }).then(alert("message send succesfuly"))
        } catch (error){
            console.log(error)
        }
        //cleaner
        setName("")
        setEmail("")
        setMessage("")
    }


    return(
        <div className={styles.container}>
            <form onSubmit={handleSubmit} className={styles.formbox}>

                <label className={styles.labelname}>Your Name</label>
                <input
                    className={styles.inputname}
                    type="text"
                    placeholder="Enter your Name"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}/>

                <label className={styles.labelemail}>Email address</label>
                <input
                    className={styles.inputemail}
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}/>

                <label className={styles.labelquestion}>Question</label>
                <textarea 
                    className={styles.inputquestion}
                    placeholder="Enter your question"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}/>

                <button className={styles.submitbtn} type='submit'>Submit</button>
            </form>
            <hr className={styles.split}></hr>
            <div className={styles.contacts}>
                <a className={styles.pages}><Linkedin/></a>
                <a className={styles.pages}><Github/></a>
            </div>
        </div>
    )
}

export default Contacts