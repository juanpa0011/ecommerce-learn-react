/*  THIS FILE BECAME OBSOLETE, AFTER FINISHING WITH THE PROJECT'S PROCESS, IT WILL BE DELETED. */

// IMPORTING PNG/JPGE IMAGES FOR ITEMS
import Fizban from '../assets/img/fizbantreasury.png'
import playerhandbook from '../assets/img/playershandbook.jpg'
import everlasting from '../assets/img/everlasting-rime-cover.jpg'
import englightment from '../assets/img/enlightenment-cover.png'

// IMPORTING FIRE-DATABASE
import db from '../firebase/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

const list = [];

/*  THIS FILE BECAME OBSOLETE, AFTER FINISHING WITH THE PROJECT'S PROCESS, IT WILL BE DELETED. */

const collectProducts = collection(db, "products");

getDocs(collectProducts)
    .then(({docs}) => {
        (docs.map((doc) => (
            list.push({id: doc.id, ...doc.data()})
            )
            )
            )
    })

export default list;

/*  THIS FILE BECAME OBSOLETE, AFTER FINISHING WITH THE PROJECT'S PROCESS, IT WILL BE DELETED. */