import PostFeed from "../../components/PostFeed"
import UserProfile from "../../components/UserProfile"
import { getUserWithUsername, postToJSON } from "../../lib/firebase"

export async function getServerSideProps({ query }) {
    const { username } = query

    const userDoc = await getUserWithUsername(username)

    // JSON serializable data
    let user = null
    let posts = null

    // If no user, short circuit to 404 page
    if (!userDoc) {
        return {
            notFound: true
        }
    }

    if (userDoc) {
        user = userDoc.data()
        const postsQuery = userDoc.ref
            .collection('posts')
            .where('published', '==', true)
            .orderBy('createdAt', 'desc')
            .limit(5)

        // need to be serialized to json but its not by default cuz the post has a timestamp on it 
        posts = (await postsQuery.get()).docs.map(postToJSON)
    }

    return {
        props: { user, posts }, // will be passed to the page component as props
    }
}

function UserProfilePage({ user, posts }) {
    return (
        <div>
            <UserProfile user={user} />
            <PostFeed posts={posts} />
        </div>
    )
}

export default UserProfilePage
