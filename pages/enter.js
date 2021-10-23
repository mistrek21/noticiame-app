import { auth, googleAuthProvider } from '../lib/firebase'

function Enter() {
    const user = null
    const username = null

    // 1. User signed out <SignInButton />
    // 2. User signed in, but missing username <UsernameForm />
    // 3. User signed in, has useername <SignOutButton />

    return (
        <main>
            {user ?
                !username ? <UsernameForm /> : <SignInButton />
                :
                <SignInButton />
            }
        </main>
    )
}

export default Enter

// Sign in with Google button
function SignInButton() {
    const signInWithhGoogle = async () => {
        await auth.signInWithPopup(googleAuthProvider)
    }

    return (
        <button className="btn-google" onClick={signInWithhGoogle}>
            <img src={'/google.png'} /> Sign in with Google
        </button>
    )

}

// Sign out button
function SignOutButton() {
    return <button onLcick={() => auth.signOut()}>Sign Out</button>
}

// Username button
function UsernameForm() {

}