import { auth, firestore } from './firebase'
import { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'

function useUserData() {
    const [user] = useAuthState(auth)
    const [username, setUsername] = useState(null)

    useEffect(() => {
        //turn off realtime subscription
        let unsubcribe

        if (user) {
            const ref = firestore.collection('users').doc(user.uid)
            unsubcribe = ref.onSnapshot((doc) => {
                setUsername(doc.data()?.username)
            })
            // if we do not have an user
        } else {
            setUsername(null)
        }

        // call unsubscribe when the user doc is no longer needed
        return unsubcribe
    }, [user])

    return { user, username }
}

export default useUserData
